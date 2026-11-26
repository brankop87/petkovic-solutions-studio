// Black Friday giveaway 2026 - postoji samo na srpskom (/sr/giveaway).
// Nije u navigaciji ni u sitemap-u; do strane se dolazi samo preko linka.
// Posle izvlacenja (30.11.2026.) stranu treba azurirati ili ukloniti.

export const instagramHandle = "@petkovicsolutions";
export const instagramUrl = "https://www.instagram.com/petkovicsolutions";
// Giveaway post (objavljen 26.11.2026.). Link bez ?utm_source i ostalih
// oznaka za pracenje koje Instagram doda pri kopiranju.
export const giveawayPostUrl = "https://www.instagram.com/p/DgL6M_liL1g/";

export type GiveawayBlock =
  | { type: "p"; text: string }
  | { type: "ol"; items: string[] }
  | { type: "ul"; items: string[] };

export type GiveawayRule = {
  title: string;
  blocks: GiveawayBlock[];
};

export const giveaway = {
  meta: {
    title: "Black Friday giveaway: poklanjamo sajt",
    description:
      "Zaprati @petkovicsolutions i ispod giveaway posta pomeni 2 osobe koje takođe moraju da zaprate nalog. Prijave do 29.11.2026. u 23:59, izvlačenje 30.11.2026.",
  },
  hero: {
    eyebrow: "Black Friday 2026",
    title: "Black Friday giveaway: poklanjamo sajt",
    subtitle:
      "Zaprati @petkovicsolutions i ispod giveaway posta pomeni 2 osobe koje takođe moraju da zaprate @petkovicsolutions. Prijave do nedelje 29.11.2026. u 23:59, izvlačenje u ponedeljak 30.11.2026.",
  },
  steps: {
    eyebrow: "Ukratko",
    items: [
      "Zaprati @petkovicsolutions",
      "Pomeni 2 osobe ispod giveaway posta (i one moraju da zaprate @petkovicsolutions)",
      "Zadrži sajt ili ga pokloni omiljenoj radnji",
    ],
  },
  rules: {
    eyebrow: "Pravila",
    items: [
      {
        title: "1. Organizator",
        blocks: [
          {
            type: "p",
            text: "Petkovic Solutions, Instagram nalog @petkovicsolutions (instagram.com/petkovicsolutions). Giveaway se odvija isključivo ispod giveaway posta na tom nalogu, i učesnicima se javljamo isključivo sa tog naloga.",
          },
        ],
      },
      {
        title: "2. Trajanje",
        blocks: [
          {
            type: "p",
            text: "Od petka, 27.11.2026. do nedelje, 29.11.2026. u 23:59. Komentari posle toga ne učestvuju.",
          },
        ],
      },
      {
        title: "3. Ko može da učestvuje",
        blocks: [
          { type: "p", text: "Punoletna lica (18+) iz Srbije sa aktivnim Instagram nalogom." },
        ],
      },
      {
        title: "4. Kako se učestvuje",
        blocks: [
          {
            type: "ol",
            items: [
              "Zaprati @petkovicsolutions",
              "Ispod giveaway posta ostavi komentar u kom pominješ 2 osobe",
              "Obe osobe koje si pomenuo/la moraju takođe da zaprate @petkovicsolutions",
            ],
          },
          {
            type: "p",
            text: "Pominješ 2 različita, stvarna naloga. Ne možeš da pomeneš sebe, @petkovicsolutions, brendove ni lažne naloge. Svaki nalog učestvuje jednom, a više komentara ne povećava šansu.",
          },
        ],
      },
      {
        title: "5. Nagrada",
        blocks: [
          {
            type: "p",
            text: "Besplatna izrada sajta (landing stranice) sa najviše 6 sekcija. Uključeno: dizajn, mobilna verzija, kontakt forma, Google mapa, osnovni SEO i postavljanje sajta online.",
          },
          {
            type: "p",
            text: "Nije uključeno: domen i hosting (korisnik ih plaća i registruje na svoje ime, a mi pomažemo oko izbora i podešavanja), dodatne stranice, webshop, rezervacije, fotografisanje, pisanje tekstova i održavanje posle isporuke. Nagrada se ne menja za novac.",
          },
        ],
      },
      {
        title: "6. Sajt možeš da pokloniš",
        blocks: [
          {
            type: "p",
            text: "Dobitnik sajt može da zadrži ili da ga pokloni omiljenoj radnji, majstoru, frizeru ili bilo kome ko ima posao ili zanat u Srbiji. Ne radimo sajtove za nezakonite delatnosti, kockanje, sadržaj za odrasle i političke kampanje.",
          },
        ],
      },
      {
        title: "7. Izvlačenje",
        blocks: [
          {
            type: "p",
            text: "U ponedeljak, 30.11.2026. tokom dana. Vreme javljamo u Story-ju. Dobitnik se bira nasumično, alatom za izbor komentara (jedan nalog = jedna prijava). Izvlače se 1 dobitnik i 5 rezervnih, a izvlačenje se snima i objavljuje u Story-ju.",
          },
        ],
      },
      {
        title: "8. Diskvalifikacija",
        blocks: [
          {
            type: "p",
            text: "Dobitnik gubi nagradu, a ona prelazi na sledećeg rezervnog, ako:",
          },
          {
            type: "ul",
            items: [
              "ne prati @petkovicsolutions",
              "bilo koja od 2 pomenute osobe ne prati @petkovicsolutions",
              "obriše komentar ili pomene nedozvoljen nalog",
              "je nalog lažan ili napravljen samo za giveaway-e",
              "ne odgovori na našu poruku u roku od 72 sata od proglašenja",
            ],
          },
        ],
      },
      {
        title: "9. Kontakt sa dobitnikom",
        blocks: [
          {
            type: "p",
            text: "Dobitnika objavljujemo u Story-ju i javljamo mu se isključivo sa @petkovicsolutions. Nikada ne tražimo uplatu, podatke o kartici ni lozinke. Svaki drugi nalog koji ti se javi je lažan.",
          },
        ],
      },
      {
        title: "10. Izrada sajta",
        blocks: [
          {
            type: "p",
            text: "Korisnik nagrade šalje materijal (logo, fotografije, opis usluga, kontakt) u roku od 14 dana od proglašenja dobitnika. U suprotnom nagrada ide sledećem rezervnom dobitniku. Sajt isporučujemo u roku od 30 dana od prijema materijala. Korisnik je saglasan da sajt koristimo u portfoliju i da u podnožju stoji „Izradio Petkovic Solutions“.",
          },
        ],
      },
      {
        title: "11. Podaci",
        blocks: [
          {
            type: "p",
            text: "Korisničko ime dobitnika se javno objavljuje. Kontakt podatke koristimo samo za izradu sajta i ne delimo ih nikome.",
          },
        ],
      },
      {
        title: "12. Instagram",
        blocks: [
          {
            type: "p",
            text: "Ovaj giveaway nije sponzorisan, podržan ni administriran od strane Instagrama niti je povezan sa njim. Učesnici oslobađaju Instagram svake odgovornosti.",
          },
        ],
      },
      {
        title: "13. Završno",
        blocks: [
          {
            type: "p",
            text: "Učešćem prihvataš ova pravila. Organizator može da izmeni pravila uz objavu na ovoj stranici.",
          },
        ],
      },
    ] as GiveawayRule[],
  },
  cta: {
    title: "Ne želiš da čekaš izvlačenje?",
    quoteLabel: "Zatraži ponudu",
  },
};
