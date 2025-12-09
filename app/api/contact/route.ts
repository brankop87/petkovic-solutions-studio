import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Sva polja su obavezna." }),
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const data = await resend.emails.send({
      from: `Petkovic Solutions <info@petkovicsolutions.com>`,
      to: process.env.MAIL_TO!,
      reply_to: email, // 🔥 KLJUČNO — bez ovoga Resend NE ŠALJE
      subject: `Nova poruka od ${name}`,
      html: `
        <h2>Nova poruka sa sajta</h2>
        <p><strong>Ime:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Poruka:</strong><br/>${message}</p>
      `,
    });

    console.log("RESEND RESPONSE:", data);

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (err: any) {
    console.error("Resend error:", err);
    return new Response(
      JSON.stringify({ error: "Došlo je do greške pri slanju." }),
      { status: 500 }
    );
  }
}
