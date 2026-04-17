import Anthropic from "@anthropic-ai/sdk";
import { createClient } from "@supabase/supabase-js";

const SYSTEM_PROMPT = `You are a helpful assistant for Petkovic Solutions, a web design and development studio that builds conversion-focused websites and landing pages for US service businesses (contractors, agencies, consultants, local businesses).

Your role:
- Help visitors understand our services: custom websites, landing pages, SEO-optimized pages, and AI-enhanced web experiences
- Qualify leads by understanding their business type, goals, and timeline
- Be friendly, professional, and concise — keep responses to 2-4 sentences unless more detail is needed
- If someone seems like a good fit, encourage them to book a call or use the contact form
- Answer questions about our process, pricing (we offer custom quotes), and turnaround times (typically 2-4 weeks for a full site)
- Do not make up specific prices — say we provide custom quotes based on project scope

Our key differentiators:
- We focus exclusively on service businesses that need to convert visitors into leads/clients
- We combine clean design with proven conversion principles
- We offer ongoing support and iteration after launch
- We integrate AI tools where they add real value (not just for show)

Keep the conversation natural. If you don't know something specific, say so honestly and suggest they reach out directly via the contact form.`;

export async function POST(req: Request) {
  try {
    const { messages, leadInfo } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: "Invalid request." }), { status: 400 });
    }

    if (leadInfo?.name && leadInfo?.email) {
      try {
        const supabase = createClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL!,
          process.env.SUPABASE_SERVICE_ROLE_KEY!
        );
        await supabase.from("leads").insert({
          name: leadInfo.name,
          email: leadInfo.email,
          message: leadInfo.firstMessage ?? "",
          timestamp: new Date().toISOString(),
        });
      } catch (dbErr) {
        console.error("Supabase insert error:", dbErr);
      }
    }

    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

    const stream = client.messages.stream({
      model: "claude-sonnet-4-6",
      max_tokens: 512,
      system: SYSTEM_PROMPT,
      messages,
    });

    const readable = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        try {
          for await (const chunk of stream) {
            if (
              chunk.type === "content_block_delta" &&
              chunk.delta.type === "text_delta"
            ) {
              controller.enqueue(encoder.encode(chunk.delta.text));
            }
          }
        } finally {
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (err) {
    console.error("Chat API error:", err);
    return new Response(JSON.stringify({ error: "Something went wrong." }), { status: 500 });
  }
}
