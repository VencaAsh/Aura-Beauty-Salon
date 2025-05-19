import { NextResponse } from 'next/server';

// Tento endpoint již není používán, protože formulář je zpracováván pomocí Netlify Forms
// Ponecháváme ho zde pro případné budoucí použití nebo jako zálohu

export async function POST(request: Request) {
  try {
    // Informace o přechodu na Netlify Forms
    console.log('=== Kontakt Formulář ===');
    console.log('Tento API endpoint již není používán.');
    console.log('Formulář je nyní zpracováván pomocí Netlify Forms.');
    console.log('=======================');

    // Odeslání informativní odpovědi klientovi
    return NextResponse.json({
      message: 'Tento API endpoint již není používán. Formulář je nyní zpracováván pomocí Netlify Forms.',
      redirected: true
    }, { status: 200 });

  } catch (error) {
    console.error('Chyba při zpracování formuláře:', error);
    return NextResponse.json({ error: 'Nastala chyba při odesílání zprávy.' }, { status: 500 });
  }
}
