import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validace (jednoduchá kontrola, zda data existují)
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Chybějící pole ve formuláři.' }, { status: 400 });
    }

    console.log('=== Kontakt Formulář ===');
    console.log('Jméno:', name);
    console.log('Email:', email);
    console.log('Zpráva:', message);
    console.log('=======================');

    // Zde by v budoucnu byla logika pro odeslání emailu, uložení do DB atd.

    // Odeslání úspěšné odpovědi klientovi
    return NextResponse.json({ message: 'Zpráva úspěšně přijata!' }, { status: 200 });

  } catch (error) {
    console.error('Chyba při zpracování formuláře:', error);
    return NextResponse.json({ error: 'Nastala chyba při odesílání zprávy.' }, { status: 500 });
  }
}
