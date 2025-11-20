import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Validacija inputa
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Sva polja su obavezna." }),
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY as string);

    // Slanje emaila
    await resend.emails.send({
      from: process.env.MAIL_FROM as string,  // npr. "Petković Solutions <noreply@petkovicsolutions.com>"
      to: process.env.MAIL_TO as string,      // npr. "info@petkovicsolutions.com"
      subject: `Nova poruka od ${name}`,
      html: `
        <h2>Nova poruka sa sajta</h2>
        <p><strong>Ime:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Poruka:</strong><br/>${message}</p>
      `
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );

  } catch (err) {
    console.error("Greška u /api/contact:", err);

    return new Response(
      JSON.stringify({ error: "Došlo je do greške." }),
      { status: 500 }
    );
  }
}
