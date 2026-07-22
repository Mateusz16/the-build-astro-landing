# Instrukcje projektu — The Build

> Ten plik jest głównym źródłem kontekstu dla Codexa podczas projektowania i wdrażania strony demonstracyjnej The Build.

## 1. Cel projektu

Budujemy nowoczesną stronę demonstracyjną dla **The Build** — fikcyjnej, wiarygodnej firmy remontowo-budowlanej. Projekt ma pokazywać potencjalnym klientom jakość stron, jakie możemy dla nich projektować i wdrażać. Nie jest to redesign ani kopia strony Complex-Bud.

Główny cel biznesowy: **pozyskiwanie zapytań o wycenę oraz prezentacja jakości realizacji i procesu współpracy**.

Najważniejsza akcja użytkownika (primary CTA): **„Poproś o bezpłatną wycenę”**.

Drugorzędna akcja: **„Zobacz realizacje”**.

Termin / etap projektu: **szybki, prezentacyjny MVP przygotowywany w ok. 60 minut; efekt ma być gotowy do pokazania klientom**.

## 2. Odbiorcy

- Główna grupa docelowa: właściciele mieszkań i domów, inwestorzy oraz właściciele lokali usługowych planujący remont, wykończenie lub modernizację.
- Najważniejszy problem odbiorcy: obawa o nieterminowość, niejasny koszt, brak komunikacji i niską jakość wykonania.
- Oczekiwany efekt wizyty: szybkie zrozumienie zakresu usług, nabranie zaufania, obejrzenie realizacji i wysłanie zapytania.
- Rynek i język: Polska, język polski.
- Domyślny obszar działania na potrzeby demonstracji: Warszawa i okolice. Oznacz tę informację jako przykładową, dopóki nie zostanie zaakceptowana.

## 3. Zakres

### MVP — jedna dopracowana strona

- `/` — landing page prowadzący od obietnicy marki przez ofertę, realizacje i proces do formularza wyceny.

Kolejność sekcji:

1. Header z czytelną nawigacją i CTA.
2. Hero z konkretną propozycją wartości, zdjęciem realizacji i dwoma CTA.
3. Pasek zaufania z 3–4 przykładowymi statystykami, które budują obraz dojrzałej firmy.
4. Oferta: remonty kompleksowe, wykończenia wnętrz, instalacje, łazienki i kuchnie, prace budowlane oraz modernizacje.
5. Wyróżnione realizacje w mocnym, wizualnym układzie.
6. „Dlaczego The Build”: przejrzysta wycena, jeden opiekun, sprawdzony proces, porządek na budowie.
7. Proces współpracy: rozmowa, wizja lokalna i wycena, realizacja, odbiór.
8. Krótka sekcja przykładowych opinii klientów, spójna z demonstracyjnym charakterem całej marki.
9. FAQ odpowiadające na najczęstsze obawy zakupowe.
10. Kontakt / formularz prośby o wycenę i stopka.

### Kluczowe funkcje

- Responsywna nawigacja i menu mobilne.
- Filtry lub lekka prezentacja kategorii realizacji tylko wtedy, gdy nie komplikują MVP.
- Formularz wyceny z polami: imię, e-mail lub telefon, rodzaj prac, lokalizacja, wiadomość i wymagane zgody.
- Walidacja formularza oraz czytelne stany: błąd, wysyłanie i sukces. W MVP bez backendu użyj uczciwego trybu demonstracyjnego i nie sugeruj realnego wysłania danych.
- SEO, Open Graph, favicon, sitemap i podstawowe dane strukturalne `LocalBusiness` dopiero po uzupełnieniu prawdziwych danych.

### Poza zakresem MVP

- CMS, panel administracyjny, blog i logowanie.
- Płatności, rezerwacje terminów i integracja CRM.
- Prawdziwa wysyłka formularza bez uzgodnionego endpointu.
- Osobne podstrony usług i realizacji, dopóki landing page nie zostanie zaakceptowany.
- Kopiowanie tekstów, danych kontaktowych, identyfikacji lub zdjęć firmy Complex-Bud.

Nie rozszerzaj zakresu bez wyraźnej prośby. Jeśli wymaganie jest niejasne, przyjmij najmniejsze bezpieczne założenie i krótko je opisz.

## 4. Materiały i źródła

- Treści: do przygotowania w projekcie; krótkie, konkretne, sprzedażowe i wiarygodne.
- Logo i identyfikacja: brak; przygotuj typograficzny wordmark „THE BUILD” jako element interfejsu, bez udawania finalnego logo.
- Zdjęcia / wideo: brak. Używaj legalnych materiałów demonstracyjnych albo wygenerowanych obrazów. Zachowaj spójność stylu i nie pobieraj zdjęć ze strony referencyjnej.
- Inspiracja treściowa: [Complex-Bud](https://www.complex-bud.eu/index.html) — wykorzystujemy szeroki zakres usług remontowo-budowlanych, nacisk na kompleksową obsługę, realizacje i kontakt. Nie przejmujemy ich marki, danych, historii, liczb, opinii ani układu 1:1.
- Materiały prawne: brak; linki do polityki prywatności i cookies oznacz jako `TODO:`.

The Build jest marką demonstracyjną, dlatego można tworzyć spójne, realistyczne dane przykładowe: statystyki, historię firmy, realizacje i opinie. Mają wyglądać jak część gotowej strony i nie muszą być oznaczane przy każdym elemencie jako placeholder. Nie wolno natomiast kopiować ani sugerować, że są to dane firmy Complex-Bud lub innego rzeczywistego podmiotu. Certyfikaty, logotypy partnerów i konkretne uprawnienia stosuj tylko wtedy, gdy są jawnie fikcyjne i nie naruszają cudzych znaków. Prawdziwe dane kontaktowe, obsługa formularza i dokumenty prawne nadal wymagają `TODO:` przed publikacją produkcyjną.

Preferowany zestaw statystyk demonstracyjnych:

- `12+ lat doświadczenia`;
- `240+ ukończonych realizacji`;
- `4,9/5 średnia ocen`;
- `96% realizacji oddanych w terminie`.

Traktuj te liczby jako element fikcyjnego case study The Build. Używaj ich konsekwentnie w całym projekcie i nie twórz konkurencyjnych wersji tych samych danych.

## 5. Strategia treści

- Ton: pewny, konkretny, nowoczesny i ludzki; bez nadęcia oraz pustych określeń typu „najwyższa jakość”.
- Pisz językiem efektów: przewidywalny proces, jasny zakres, kontrola budżetu, terminowa komunikacja i staranne wykonanie.
- Nagłówki powinny być krótkie i mocne, ale nie mogą dominować nad całym ekranem. Preferowany kierunek hero: **„Budujemy. Remontujemy. Dowozimy efekt.”**
- Primary CTA wszędzie brzmi spójnie: **„Poproś o bezpłatną wycenę”**.
- Każda sekcja ma odpowiadać na jedno pytanie użytkownika i prowadzić dalej.
- Nie stosuj newslettera w MVP — dla lokalnej firmy usługowej rozprasza od zapytania ofertowego.

## 6. Kierunek wizualny

- Charakter marki: nowoczesny, techniczny, precyzyjny, solidny i wyraźnie budowlany. Ma być czysto i profesjonalnie, bez przytulnej lub lifestyle'owej estetyki.
- Koncepcja: **clean technical construction** — uporządkowana siatka, wyraźne linie, chłodne powierzchnie, detale przypominające dokumentację techniczną i kontrolowana asymetria.
- Kolory bazowe: stalowy grafit `#121A20`, chłodna biel `#F5F7F8`, betonowy szary `#DDE3E6` i czysta biel `#FFFFFF`.
- Akcent: techniczny safety yellow `#E7FF1F`; stosuj go oszczędnie w CTA, etykietach i detalach. Nie używaj kremów, beżów, brązów ani pomarańczu jako dominującej barwy.
- Typografia: wyrazisty, zwarty grotesk dla nagłówków i neutralny, bardzo czytelny sans-serif dla tekstu; maksymalnie dwie rodziny fontów, najlepiej variable font.
- Skala tekstu ma być umiarkowana i działać szczególnie dobrze na 13-calowym MacBooku Air. Domyślne limity: H1 `clamp(2.25rem, 4.2vw, 3.75rem)`, H2 `clamp(1.8rem, 3vw, 2.75rem)`, H3 maks. `1.5rem`, tekst główny `1rem–1.125rem`.
- Przy typowym desktopowym viewportcie 1280 × 800 px cały nagłówek, H1, lead i główne CTA hero powinny być widoczne bez przewijania. Nie stosuj `100vh` dla hero; preferuj zwarty blok o wysokości wynikającej z treści.
- Ogranicz szerokość H1 do około 12–15 znaków typograficznych na wiersz i leadu do 55–65 znaków. Nie zwiększaj fontu tylko po to, żeby wypełnić pustą przestrzeń.
- Styl zdjęć: współczesna architektura i prawdziwie wyglądające wnętrza, szerokie kadry, detale materiałów, ludzie przy pracy bez stockowych póz.
- Motywy: linie pomiarowe, numery sekcji, etykiety przypominające dokumentację techniczną, subtelne gridy.
- Ruch: krótkie wejścia sekcji, delikatny parallax lub reveal tylko jeśli nie pogarsza wydajności; respektuj `prefers-reduced-motion`.
- Czego unikać: ciepłych kremowych palet, generycznych gradientów, ciężkich cieni, nadmiaru zaokrągleń, ogromnych nagłówków zajmujących większość ekranu, ikon domków i młotków, karuzel autoplay, stockowych uścisków dłoni oraz kopiowania estetyki strony referencyjnej.

Projektuj spójny system, a nie zbiór niezależnych sekcji. Najpierw zdefiniuj tokeny dla kolorów, typografii, odstępów, promieni, obramowań i ruchu, a później używaj ich konsekwentnie.

## 7. Stack i ograniczenia techniczne

- Astro `^7.1.3`.
- TypeScript w trybie `strict`.
- Node.js `>=22.12.0`.
- Komponenty `.astro`.
- Czysty CSS z tokenami; bez Tailwinda.
- JavaScript po stronie klienta tylko dla menu, formularza i uzasadnionych mikrointerakcji.
- Dodatkowy framework UI (React/Vue/Svelte) tylko po uzasadnionej potrzebie.

Podstawowe komendy:

```bash
npm install
npx astro dev --background
npm run build
npm run preview
```

Serwer deweloperski uruchamiaj w tle. Zarządzaj nim przez `npx astro dev status`, `npx astro dev logs` i `npx astro dev stop` — nie pozostawiaj blokującego procesu w terminalu.

Jeśli repozytorium ma już inne wersje lub komendy, jego `package.json` ma pierwszeństwo przed tym plikiem.

## 8. Zalecana architektura

```text
src/
  assets/          # obrazy i inne zasoby przetwarzane przez Astro
  components/
    layout/        # header, footer, nawigacja
    sections/      # większe sekcje strony
    ui/            # małe, wielokrotnego użytku komponenty
  data/            # usługi, realizacje, FAQ i pozostałe treści
  layouts/         # wspólny układ dokumentu i metadane
  pages/           # routing Astro
  styles/
    tokens.css     # zmienne systemu wizualnego
    global.css     # reset i style globalne
public/            # favicony i pliki kopiowane bez przetwarzania
```

- Dziel komponenty według odpowiedzialności i ponownego użycia, nie dla samego dzielenia.
- Powtarzalne treści trzymaj jako dane zamiast duplikować markup.
- Preferuj semantyczny HTML i możliwości Astro nad JavaScriptem w przeglądarce.
- Nie dodawaj zależności, jeśli prosty kod projektu rozwiązuje problem równie dobrze.

## 9. Plan szybkiego wdrożenia

Szczegółowy, czasowy plan znajduje się w `IMPLEMENTATION_PLAN.md`. Kolejność prac:

1. Scaffold i fundament techniczny.
2. Tokeny, typografia i layout bazowy.
3. Header oraz hero.
4. Oferta i argumenty zaufania.
5. Realizacje oraz proces współpracy.
6. FAQ, formularz i stopka.
7. Responsywność, dostępność i mikrointerakcje.
8. Build, kontrola wizualna i finalny polish.

W szybkim MVP priorytety to: kompletna ścieżka sprzedażowa, mocny pierwszy ekran, wiarygodne realizacje, responsywność i działający build. Elementy opcjonalne odkładaj, zanim zagrożą ukończeniu całości.

## 10. Sposób pracy Codexa

Przed zmianami:

1. Przeczytaj ten plik, `IMPLEMENTATION_PLAN.md`, `package.json`, konfigurację Astro i pliki związane z zadaniem.
2. Sprawdź istniejące wzorce oraz stan repozytorium; nie nadpisuj cudzych zmian.
3. Dla większego zadania zaktualizuj krótki plan i wskaż założenia. Drobne, jednoznaczne poprawki wykonuj od razu.

Podczas pracy:

1. Wprowadzaj najmniejszy spójny zestaw zmian realizujący cel.
2. Korzystaj z istniejących komponentów, tokenów i konwencji.
3. Nie zmieniaj niezwiązanych plików i nie wykonuj refaktoryzacji poza zakresem.
4. Treści pisz językiem korzyści, konkretnie i bez niepotwierdzonych obietnic.
5. Dbaj o stany interakcji: hover, focus, active, disabled, błędy i sukces.
6. Po każdym większym etapie sprawdź widok zamiast odkładać cały polish na koniec.

Po zmianach:

1. Uruchom co najmniej `npm run build`.
2. Przy zmianach wizualnych sprawdź stronę na mobile i desktopie oraz brak overflow.
3. Sprawdź klawiaturę, focus, konsolę, linki kotwicowe i formularz.
4. Podsumuj: co zmieniono, jak zweryfikowano i jakie `TODO` pozostały.

## 11. Standard jakości

### Responsywność

- Projektuj mobile-first.
- Treść i akcje muszą działać bez poziomego przewijania od 320 px szerokości.
- Układ powinien zachowywać czytelną hierarchię również na dużych ekranach.
- Nie chowaj kluczowego CTA ani danych kontaktowych wyłącznie w menu mobilnym.

### Dostępność

- Używaj semantycznych elementów HTML i logicznej hierarchii nagłówków.
- Wszystkie kontrolki muszą działać z klawiatury i mieć widoczny focus.
- Pola formularzy muszą mieć etykiety, a błędy czytelne komunikaty.
- Obrazy informacyjne wymagają trafnego `alt`; dekoracyjne pustego `alt`.
- Zachowaj kontrast co najmniej WCAG AA i respektuj `prefers-reduced-motion`.

### Wydajność

- Ograniczaj JavaScript wysyłany do przeglądarki.
- Optymalizuj obrazy, podawaj ich wymiary i unikaj przesunięć layoutu.
- Nie ładuj fontów, bibliotek ani zasobów, których strona nie używa.
- Priorytetem są dobre Core Web Vitals, zwłaszcza LCP, CLS i INP.

### SEO i metadane

- Każda publiczna strona ma unikalne `title` i `description`.
- Ustaw canonical, Open Graph, faviconę, `lang="pl"` oraz poprawne dane robots/sitemap, jeśli projekt ich wymaga.
- Dodaj dane strukturalne tylko wtedy, gdy odpowiadają prawdziwej zawartości strony.
- Nie pozycjonuj fikcyjnej marki na dane ani lokalizację innej firmy.

### Prywatność i bezpieczeństwo

- Nie umieszczaj sekretów ani kluczy API w kodzie klienta lub repozytorium.
- Zbieraj w formularzu wyłącznie potrzebne dane.
- Nie uruchamiaj analityki i marketingowych cookies przed wymaganą zgodą.
- Waliduj dane po stronie serwera, jeśli formularz będzie faktycznie obsługiwany.

## 12. Definicja ukończenia MVP

Zadanie jest ukończone, gdy:

- kompletna strona główna prowadzi użytkownika do prośby o wycenę;
- hero, oferta, realizacje, proces, FAQ i kontakt tworzą spójną narrację;
- działa na urządzeniach mobilnych i desktopowych;
- podstawowa obsługa klawiaturą jest poprawna;
- nie zawiera błędów konsoli ani uszkodzonych linków i zasobów;
- `npm run build` kończy się powodzeniem;
- formularz jasno komunikuje swój demonstracyjny charakter, jeśli nie ma backendu;
- brakujące materiały lub decyzje są jawnie oznaczone jako `TODO`;
- zmiany i sposób weryfikacji zostały krótko opisane.

## 13. Decyzje projektowe

| Data | Decyzja | Powód | Konsekwencje |
|---|---|---|---|
| 2026-07-22 | Marka to The Build, a Complex-Bud jest wyłącznie referencją treściową | Projekt ma demonstrować naszą jakość, nie kopiować istniejącej firmy | Własny branding, teksty, układ i materiały |
| 2026-07-22 | MVP jest pojedynczym landing page'em | Najlepszy stosunek jakości do czasu w godzinnym sprincie | Podstrony dopiero po akceptacji głównej narracji |
| 2026-07-22 | Główne CTA to prośba o bezpłatną wycenę | Najbardziej naturalna konwersja dla usług remontowo-budowlanych | CTA powtarza się w hero, headerze i kontakcie |
| 2026-07-22 | Używamy spójnych, fikcyjnych statystyk i opinii | The Build jest case study i ma wyglądać jak kompletna firma | Przykładowe dane są częścią marki demo, ale nie pochodzą od Complex-Bud |
| 2026-07-22 | Paleta jest chłodna i techniczna, z akcentem safety yellow | Marka ma kojarzyć się z czystym, współczesnym wykonawstwem, nie z ciepłym lifestyle'em | Bez kremów, beżów i dominującego pomarańczu |
| 2026-07-22 | H1 ma maksymalnie 60 px, a zwykle mniej | Hero musi mieścić kluczową treść na 13-calowym MacBooku Air | Umiarkowane `clamp()`, zwarty hero i test przy 1280 × 800 px |

## 14. Otwarte pytania i TODO

- [ ] Potwierdzić docelowy obszar działania The Build.
- [ ] Uzupełnić prawdziwy numer telefonu, e-mail i adres lub zatwierdzić jawne dane demo.
- [x] Akcent marki: techniczny safety yellow na chłodnej, grafitowo-białej bazie.
- [ ] Dostarczyć albo zatwierdzić zdjęcia demonstracyjnych realizacji.
- [ ] Wybrać docelową obsługę formularza.
- [ ] Przygotować politykę prywatności i zasady cookies przed publikacją produkcyjną.
