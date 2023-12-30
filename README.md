# Kryptowaluty

## Wprowadzenie

Projekt "Kryptowaluty" zapewnia użytkownikowi informacje o różnych kryptowalutach, umożliwiając przeglądanie pełnej listy oraz szczegółowych danych dotyczących każdej z nich.

## Opis Ogólny Projektu

Projekt składa się z dwóch głównych elementów: listy kryptowalut oraz stron dedykowanych poszczególnym kryptowalutom. Użytkownik może przeglądać ogólne informacje na temat każdej kryptowaluty oraz zobaczyć wykres wartości.

## Funkcjonalności

### Lista Kryptowalut

Na stronie głównej projektu użytkownik może przeglądać listę kryptowalut. Informacje są pobierane dynamicznie z zewnętrznego API, co gwarantuje aktualność danych.

### Strona Kryptowaluty

Po wybraniu konkretnej kryptowaluty z listy, użytkownik zostanie przeniesiony na dedykowaną stronę. Tam znajdzie podstawowe dane o kryptowalucie, takie jak symbol, aktualna cena, czy ilość dostępnych jednostek.

### Wykres Wartości Kryptowaluty

Na stronie kryptowaluty dostępny jest interaktywny wykres, prezentujący historię zmiany wartości kryptowaluty w wybranym okresie czasu.

## Implementacja

### Technologie

Projekt został zrealizowany przy użyciu technologii:

- Frontend: React TypeScript, SCSS
- Komunikacja z API kryptowalut: Fetch API, Axios

### Pobieranie Danych z API

Dane o kryptowalutach są pobierane z publicznego API, co umożliwia bieżącą aktualizację informacji.

### Wyświetlanie Listy Kryptowalut

Lista kryptowalut jest generowana dynamicznie na podstawie danych pobranych z API. Użytkownik może filtrować i sortować kryptowaluty według różnych kryteriów.

### Strona Kryptowaluty

Strona kryptowaluty zawiera podstawowe informacje na temat wybranej jednostki, prezentowane w czytelnej formie. Dane są prezentowane w formie komponentów, co ułatwia rozbudowę i modyfikację strony.

### Wykres Wartości

Do generowania wykresów wykorzystano odpowiedni framework umożliwiający interaktywną prezentację danych historycznych dotyczących wartości kryptowaluty.

## Interfejs Użytkownika

Interfejs został zaprojektowany w sposób intuicyjny i responsywny, dostosowany do różnych urządzeń.

## Instrukcja Użytkowania

1. **Strona Główna:**

   - Przeglądaj listę kryptowalut.
   - Kliknij na nazwę kryptowaluty, aby przejść do jej dedykowanej strony.

2. **Strona Kryptowaluty:**
   - Znajdź podstawowe informacje o wybranej kryptowalucie.
   - Sprawdź interaktywny wykres wartości w różnych okresach czasu.

Projekt jest otwarty na rozwój, dlatego każda propozycja ulepszenia czy nowej funkcji jest mile widziana.

Grafika pokazowa: https://www.figma.com/file/oT4suGEkmCmKrvAa818X4T/Crypto-Site?type=design&node-id=0-1&mode=design&t=iRtWEwXWOQtFUs1q-0
