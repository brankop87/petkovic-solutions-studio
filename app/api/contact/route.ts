import { Resend } from "resend";

const MAX_NAME = 120;
const MAX_EMAIL = 200;
const MAX_MESSAGE = 5000;

// Rate limit se drzi u memoriji instance. Na serverless-u to nije globalno
// stanje, ali podize cenu spama sa "besplatno" na "mora da rotira IP i ceka".
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);

  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }

  recent.push(now);
  hits.set(ip, recent);

  // Povremeno pocisti stare unose da Map ne raste bez kraja.
  if (hits.size > 500) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    }
  }

  return false;
}

function clientIp(req: Request) {
  const forwarded = req.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

function json(body: unknown, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);

    if (!body || typeof body !== "object") {
      return json({ error: "Invalid request." }, 400);
    }

    const { name, email, message, company } = body as Record<string, unknown>;

    // Honeypot: skriveno polje koje pravi posetilac nikad ne vidi ni popuni.
    // Ako je popunjeno, tiho odbaci i vrati uspeh da bot ne zna da je otkriven.
    if (typeof company === "string" && company.trim() !== "") {
      return json({ success: true }, 200);
    }

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return json({ error: "All fields are required." }, 400);
    }

    if (name.length > MAX_NAME || email.length > MAX_EMAIL || message.length > MAX_MESSAGE) {
      return json({ error: "Input too long." }, 400);
    }

    if (!isValidEmail(email.trim())) {
      return json({ error: "Invalid email address." }, 400);
    }

    if (isRateLimited(clientIp(req))) {
      return json({ error: "Too many requests. Please try again later." }, 429);
    }

    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safeMessage = escapeHtml(message.trim()).replace(/\n/g, "<br/>");

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: process.env.MAIL_FROM!,
      to: process.env.MAIL_TO!,
      replyTo: email.trim(),
      subject: `New website inquiry from ${safeName}`,
      html: `
        <h2>New message from the website</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong><br/>${safeMessage}</p>
      `,
    });

    return json({ success: true }, 200);
  } catch (err) {
    console.error("Contact form error:", err);
    return json({ error: "Something went wrong." }, 500);
  }
}
