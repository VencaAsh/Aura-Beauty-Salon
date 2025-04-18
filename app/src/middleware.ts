import { NextRequest, NextResponse } from 'next/server';

// Nastavení přístupových údajů
const USERNAME = 'aura';
const PASSWORD = 'beauty2025';

// Funkce pro kontrolu přístupových údajů
export function middleware(request: NextRequest) {
  // Získání autorizačních údajů z hlavičky
  const authHeader = request.headers.get('authorization');
  
  // Kontrola, zda jsou autorizační údaje přítomny
  if (authHeader) {
    // Dekódování Base64 autorizačních údajů
    const authValue = authHeader.split(' ')[1];
    const [user, pwd] = atob(authValue).split(':');
    
    // Kontrola, zda jsou přístupové údaje správné
    if (user === USERNAME && pwd === PASSWORD) {
      // Pokud jsou údaje správné, povolíme přístup
      return NextResponse.next();
    }
  }
  
  // Pokud autorizační údaje chybí nebo jsou nesprávné, vyžádáme si přihlášení
  return new NextResponse('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
}

// Nastavení cest, na které se middleware vztahuje
export const config = {
  matcher: [
    /*
     * Odpovídá všem cestám kromě:
     * - API routes (/api/*)
     * - Statické soubory (/_next/static/*, /favicon.ico, atd.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
