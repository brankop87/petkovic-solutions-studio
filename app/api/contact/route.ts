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

    // 🔎 Debug logovi — vidićeš ih u Vercel logs
    console.log("Kontakt forma pozvana:", { name, email, message });
    console.log("ENV FROM:", process.env.MAIL_FROM);
    console.log("ENV TO:", process.env.MAIL_TO);

    const resend = new Resend(process.env.RESEND_API_KEY);

    const result = await resend.emails.send({
      from: process.env.MAIL_FROM!,   // ⚠️ ovde neka stoji samo adresa, npr. info@petkovicsolutions.com
      to: process.env.MAIL_TO!,
      replyTo: email,
      subject: `Nova poruka od ${name}`,
      html: `
        <h2>Nova poruka sa sajta</h2>
        <p><strong>Ime:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Poruka:</strong><br/>${message}</p>
      `,
    });

    console.log("Resend odgovor:", result);

    return new Response(
      JSON.stringify({ success: true, result }),
      { status: 200 }
    );

  } catch (err) {
    console.error("Greška pri slanju mejla:", err);
    return new Response(
      JSON.stringify({ error: "Došlo je do greške.", details: String(err) }),
      { status: 500 }
    );
  }
}
