# The Build — plan wdrożenia MVP w 60 minut

Cel sprintu: kompletna, nowoczesna i responsywna strona demonstracyjna firmy budowlanej, którą można pokazać klientowi. Czas jest limitem decyzyjnym — najpierw kończymy całą ścieżkę, potem dopieszczamy detale.

## 1. Fundament projektu — 0–6 min

- Utworzenie projektu Astro i weryfikacja wersji Node.
- Przygotowanie struktury katalogów, layoutu, metadanych i danych treściowych.
- Pierwszy `npm run build`, aby od początku pracować na sprawnym fundamencie.

**Rezultat:** działający szkielet bez długu startowego.

## 2. System wizualny — 6–13 min

- Tokeny kolorów, typografii, odstępów, szerokości kontenera, obramowań i ruchu.
- Globalny reset, style tekstu, przycisków, linków i focusu.
- Wdrożenie chłodnej, technicznej palety blueprint z kobaltowym akcentem i sprawdzenie kontrastu.
- Ustawienie umiarkowanej skali nagłówków z H1 ograniczonym do `clamp(2.25rem, 4.2vw, 3.75rem)`.

**Rezultat:** spójny język wizualny gotowy do składania sekcji.

## 3. Header i hero — 13–23 min

- Responsywny header, wordmark i menu kotwicowe.
- Hero z mocnym nagłówkiem, krótką obietnicą, dwoma CTA i obrazem.
- Pasek zaufania z uzgodnionymi statystykami demo: 12+ lat, 240+ realizacji, ocena 4,9/5 i 96% realizacji w terminie.
- Kontrola całego pierwszego ekranu przy 1280 × 800 px, aby H1 i CTA mieściły się bez przewijania.

**Rezultat:** pierwszy ekran gotowy do pokazania klientowi.

## 4. Oferta i przewagi — 23–32 min

- Siatka najważniejszych usług.
- Sekcja „Dlaczego The Build” odpowiadająca na obawy o koszt, termin i komunikację.
- Jedno kontekstowe CTA prowadzące do formularza.

**Rezultat:** użytkownik wie, co firma robi i dlaczego warto zapytać.

## 5. Realizacje i proces — 32–42 min

- 3–4 wizualne karty fikcyjnych realizacji z kategorią, lokalizacją i krótkim zakresem.
- Czterostopniowy proces od pierwszej rozmowy do odbioru.
- Uporządkowanie naprzemiennego rytmu jasnych i ciemnych sekcji.

**Rezultat:** strona buduje wiarygodność i obniża ryzyko decyzji.

## 6. FAQ, formularz i stopka — 42–50 min

- Krótkie FAQ dotyczące wyceny, terminów, materiałów i obszaru działania.
- Formularz z walidacją i jasnym komunikatem trybu demo bez backendu.
- Stopka z nawigacją i oznaczonymi danymi kontaktowymi `TODO`.

**Rezultat:** pełna ścieżka konwersji od wejścia do zapytania.

## 7. Mobile, dostępność i ruch — 50–56 min

- Kontrola szerokości 320, 375, 768 i 1440 px.
- Menu mobilne, kolejność fokusu, etykiety, `alt`, kontrast i brak overflow.
- Oszczędne mikrointerakcje z obsługą `prefers-reduced-motion`.

**Rezultat:** prezentacja działa dobrze, a nie tylko dobrze wygląda na jednym ekranie.

## 8. Weryfikacja i polish — 56–60 min

- `npm run build` i kontrola konsoli.
- Szybki przegląd desktop/mobile, linków kotwicowych oraz stanów formularza.
- Poprawa najbardziej widocznego problemu, zapisanie pozostałych `TODO`.

**Rezultat:** stabilny build i jasna lista kolejnych ulepszeń.

## Zasada odcinania zakresu

Jeśli któryś etap trwa dłużej, w tej kolejności odkładamy: animacje, filtry realizacji, rozbudowane ikony, dodatkowe warianty kart i sekcję opinii. Nigdy nie odkładamy responsywności, formularza, pełnej ścieżki CTA ani działającego buildu.

## Następny etap po MVP

Po akceptacji strony głównej można dołożyć osobne podstrony usług i realizacji, prawdziwą obsługę formularza, analitykę za zgodą, CMS oraz pełne treści prawne.
