# flatpickr für REDAXO

Ein leistungsstarker und flexibler Datetime-Picker für REDAXO basierend auf [flatpickr](https://flatpickr.js.org/).

## Features

- 🎯 Einfache Integration in YForm und Module
- ⚡️ Schnelle Implementierung häufiger Anwendungsfälle
- 🔧 Volle Unterstützung aller flatpickr Features
- 🌍 Mehrsprachigkeit (Standard: de)

## Installation

Einfach über den REDAXO-Installer installieren.

## Häufige Anwendungsfälle

### 1. Einfache Datumsauswahl

#### In YForm
```json
{
    "class": "flatpickr",
    "data-config": {
        "dateFormat": "Y-m-d",
        "altFormat": "j. F Y",
        "altInput": true
    }
}
```

#### In Modulen
```html
<input 
    class="flatpickr" 
    data-config='{"dateFormat": "Y-m-d", "altFormat": "j. F Y", "altInput": true}'
    type="text"
    name="REX_INPUT_VALUE[1]" 
    value="REX_VALUE[1]">
```

### 2. Datums- und Zeitauswahl (ab heute)

#### In YForm
```json
{
    "class": "flatpickr",
    "data-config": {
        "enableTime": true,
        "dateFormat": "Y-m-d H:i",
        "altFormat": "j. F Y H:i",
        "minDate": "today",
        "defaultHour": 12
    }
}
```

#### In Modulen
```html
<input 
    class="flatpickr" 
    data-config='{"enableTime": true, "dateFormat": "Y-m-d H:i", "altFormat": "j. F Y H:i", "minDate": "today", "defaultHour": 12}'
    type="text">
```

### 3. Datumsbereich-Auswahl (Range)

#### In YForm
```json
{
    "class": "flatpickr",
    "data-rangefield": "#end_date",
    "data-config": {
        "dateFormat": "Y-m-d",
        "altFormat": "j. F Y",
        "minDate": "today"
    }
}
```

#### In Modulen
```html
<input 
    class="flatpickr" 
    data-rangefield="#end_date"
    data-config='{"dateFormat": "Y-m-d", "altFormat": "j. F Y", "minDate": "today"}'
    type="text">
<input id="end_date" type="text">
```

### 4. Zeitbereich-Auswahl (Range mit Zeit)

```html
<input 
    class="flatpickr" 
    data-rangefield="#end_datetime"
    data-config='{
        "enableTime": true,
        "dateFormat": "Y-m-d H:i",
        "altFormat": "j. F Y H:i",
        "minDate": "today",
        "defaultHour": 12
    }'
    type="text">
<input id="end_datetime" type="text">
```

## Erweiterte Konfigurationen

### Datum/Zeit Einschränkungen

#### Bestimmte Daten ausschließen
```json
{
    "class": "flatpickr",
    "data-config": {
        "disable": ["2024-12-24", "2024-12-25", "2024-12-31"],
        "dateFormat": "Y-m-d"
    }
}
```

#### Nur Werktage erlauben
```json
{
    "class": "flatpickr",
    "data-config": {
        "disable": [
            function(date) {
                return date.getDay() === 0 || date.getDay() === 6;
            }
        ],
        "dateFormat": "Y-m-d"
    }
}
```

#### Zeitliche Einschränkungen
```json
{
    "class": "flatpickr",
    "data-min-max-time": "true",
    "data-min-max-time-config": {
        "minTime": "09:00",
        "maxTime": "17:30"
    },
    "data-config": {
        "enableTime": true,
        "dateFormat": "Y-m-d H:i"
    }
}
```

## Spezielle Anwendungsfälle

### Wochenauswahl

```html
<input 
    class="flatpickr" 
    data-week-select="true"
    data-week-target="#week_number"
    data-config='{
        "dateFormat": "W/Y",
        "altFormat": "Woche W, Y"
    }'
    type="text">
<input type="hidden" id="week_number">
```

### Monatsauswahl

```html
<input 
    class="flatpickr" 
    data-month-select="true"
    data-month-select-config='{
        "shorthand": true,
        "dateFormat": "Y-m",
        "altFormat": "F Y"
    }'
    type="text">
```

## Komplexe Konfigurationen

### Geschäftszeiten mit unterschiedlichen Tagesregeln

```html
<input 
    class="flatpickr" 
    data-min-max-time="true"
    data-min-max-time-config='{
        "getMinMaxHours": "function(date, type) {
            const day = date.getDay();
            if (type === \"min\") {
                return (day === 0 || day === 6) ? \"10:00\" : \"08:00\";
            }
            switch(day) {
                case 5: return \"15:00\";  // Freitag
                case 6: return \"14:00\";  // Samstag
                case 0: return \"12:00\";  // Sonntag
                default: return \"18:00\"; // Mo-Do
            }
        }"
    }'
    data-config='{
        "enableTime": true,
        "dateFormat": "Y-m-d H:i",
        "altFormat": "j. F Y H:i"
    }'
    type="text">
```

## Wichtige Hinweise

### YForm vs. Module
- In YForm: Verwenden Sie reines JSON
- In Modulen/Templates: Verwenden Sie einfache Anführungszeichen außen und doppelte innen
  ```html
  data-config='{"key": "value"}'
  ```

### Verfügbare Plugins
- `rangePlugin` - für Datumsbereiche
- `monthSelectPlugin` - für Monatsauswahl
- `weekSelect` - für Wochenauswahl
- `minMaxTime` - für Zeiteinschränkungen
- `confirmDate` - für Datumsbestätigung

## Support & Lizenz

### Support
Bitte benutzen Sie den [GitHub Issues](https://github.com/FriendsOfREDAXO/flatpickr/issues) Bereich

### Lizenz
MIT License

### Autoren
**Friends Of REDAXO**
* http://www.redaxo.org
* https://github.com/FriendsOfREDAXO

**Project Lead**  
[Thomas Skerbis](https://github.com/skerbis)

**Vendor**  
https://flatpickr.js.org
