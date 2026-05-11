# Väderapp med TypeScript

Det här projektet använder TypeScript i mappen `script/`.
Webbläsaren kör fortfarande JavaScript, så TypeScript-koden behöver kompileras först.

## Kom igång

1. Installera beroenden:

```bash
npm install
```

2. Skapa en egen API-nyckelfil:

```bash
cp script/config.example.ts script/config.ts
```

Byt sedan ut texten i `script/config.ts` mot din OpenWeather-nyckel.

3. Kompilera TypeScript till JavaScript:

```bash
npm run build
```

Vill du att TypeScript ska kompilera automatiskt medan du jobbar kan du köra:

```bash
npm run watch
```

## Viktiga filer

- `script/types.ts` innehåller egna typer för väderdatan.
- `dist/` skapas av TypeScript och innehåller JavaScript som webbläsaren kör.
- `script/services/weatherService.ts` hämtar data från API:et.
- `script/index.ts` styr startsidan.
- `script/weatherDetailPage.ts` styr detaljsidan.

Kör gärna `npm run typecheck` när du vill kontrollera typer utan att skapa nya JavaScript-filer.
