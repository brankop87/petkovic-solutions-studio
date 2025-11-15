import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Validacija
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Sva polja su obavezna." },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Slanje mejla
    await resend.emails.send({
      from: "Petciety Solutions <noreply@mail.petcovicsolutions.com>",
      to: process.env.CONTACT_TO,
      subject: `Nova poruka od ${name}`,
      html: `
        <h2>Nova poruka sa sajta</h2>
        <p><strong>Ime:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Poruka:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Greška:", err);
    return NextResponse.json(
      { error: "Došlo je do greške prilikom slanja." },
      { status: 500 }
    );
  }
}

