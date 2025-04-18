# Návod na nasazení Aura Beauty Salon na Netlify

Tento dokument obsahuje instrukce pro nasazení webové aplikace Aura Beauty Salon na platformu Netlify.

## Příprava před nasazením

1. Ujistěte se, že máte účet na [Netlify](https://www.netlify.com/)
2. Ujistěte se, že máte repozitář projektu na GitHubu, GitLabu nebo Bitbucketu

## Postup nasazení

### Možnost 1: Nasazení přes Netlify UI (doporučeno)

1. Přihlaste se do svého účtu na Netlify
2. Klikněte na tlačítko "Add new site" a vyberte "Import an existing project"
3. Vyberte poskytovatele Git (GitHub, GitLab nebo Bitbucket)
4. Autorizujte Netlify pro přístup k vašim repozitářům
5. Vyberte repozitář `Aura-Beauty-Salon`
6. Nastavte následující konfiguraci:
   - **Base directory**: `app`
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Advanced build settings**: Přidejte následující proměnné prostředí:
     - `NETLIFY_NEXT_PLUGIN_SKIP`: `true`
     - `NODE_VERSION`: `18`
7. Klikněte na "Deploy site"

### Možnost 2: Nasazení pomocí Netlify CLI

1. Nainstalujte Netlify CLI:
   ```
   npm install -g netlify-cli
   ```

2. Přihlaste se ke svému účtu Netlify:
   ```
   netlify login
   ```

3. Přejděte do kořenového adresáře projektu a inicializujte Netlify:
   ```
   cd /cesta/k/Aura-Beauty-Salon
   netlify init
   ```

4. Postupujte podle pokynů v CLI:
   - Vyberte "Create & configure a new site"
   - Vyberte tým
   - Zadejte název webu (nebo ponechte prázdné pro automatické generování)
   - Nastavte stejnou konfiguraci jako v možnosti 1

5. Nasaďte web:
   ```
   netlify deploy --prod
   ```

## Po nasazení

1. Nastavte vlastní doménu:
   - V Netlify dashboardu přejděte na "Domain settings"
   - Klikněte na "Add custom domain"
   - Zadejte svou doménu (např. aurabeautysalon.cz)
   - Postupujte podle pokynů pro nastavení DNS

2. Nastavte HTTPS:
   - Netlify automaticky poskytuje SSL certifikáty přes Let's Encrypt
   - Ujistěte se, že je zapnutá volba "Automatic TLS certificates"

3. Zkontrolujte nasazení:
   - Otevřete svůj web a zkontrolujte, zda vše funguje správně
   - Zkontrolujte, zda fungují všechny stránky a odkazy
   - Zkontrolujte, zda se správně zobrazují obrázky

## Řešení problémů

Pokud narazíte na problémy s nasazením:

1. Zkontrolujte logy nasazení v Netlify dashboardu
2. Ujistěte se, že soubor `netlify.toml` je ve správném formátu
3. Zkontrolujte, zda je nastavení v `next.config.ts` správné
4. Pokud máte problémy s obrázky, zkontrolujte nastavení `next/image`

## Aktualizace webu

Po každém push do hlavní větve vašeho Git repozitáře Netlify automaticky spustí nové nasazení.

Pro ruční nasazení:
1. Proveďte změny v kódu
2. Commitněte a pushněte změny do Git repozitáře
3. Netlify automaticky detekuje změny a nasadí novou verzi

Nebo pomocí CLI:
```
netlify deploy --prod
```
