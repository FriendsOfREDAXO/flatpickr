# a11y_datetime für REDAXO

a11y_datetime ist ein auf Barrierefreiheit fokussierter Fork von flatpickr.

## Warum das Addon weiterhin flatpickr heißt

Der Paketname des Addons bleibt bewusst `flatpickr`, damit bestehende REDAXO-Installationen, Installer-Updates und Projektverweise vollständig kompatibel bleiben.
Intern werden die Frontend-Assets bereits auf `a11y_datetime` umgestellt.

## a11y_datetime Links

Website: https://friendsofredaxo.github.io/a11y_datetime/

GitHub: https://github.com/FriendsOfREDAXO/a11y_datetime

## Wie installieren?

Einfach über den REDAXO-Installer installieren.

## Verwendung im Frontend

Das Addon bindet die Assets automatisch nur im Backend ein. Fuer das Frontend gibt es zwei Wege:

1. Direkte Einbindung der Assets in deinem Template.
2. Nutzung der Hilfsmethode aus dem Addon.

### Empfohlene Hilfsmethode

```php
<?php
use FriendsOfREDAXO\Flatpickr\FrontendHelper;

// Standard: de-Locale, Dark-Theme aktiv, Range-Plugin aktiv
FrontendHelper::includeAssets();

// Optional mit Parametern: Locale, Dark-Theme, Range-Plugin
// FrontendHelper::includeAssets('de', true, true);
```

### Alternative ohne Hilfsmethode

```php
<?php
$addon = rex_addon::get('flatpickr');
?>
<link rel="stylesheet" href="<?= $addon->getAssetsUrl('vendor/a11y_datetime/dist/a11y_datetime.min.css') ?>">
<script src="<?= $addon->getAssetsUrl('vendor/a11y_datetime/dist/a11y_datetime.min.js') ?>"></script>
<script src="<?= $addon->getAssetsUrl('vendor/a11y_datetime/dist/l10n/de.js') ?>"></script>
<script src="<?= $addon->getAssetsUrl('vendor/a11y_datetime/dist/plugins/rangePlugin.js') ?>"></script>
<script src="<?= $addon->getAssetsUrl('flatpickr_init.js') ?>"></script>
```

### Beispiel-Input im Frontend

```html
<input type="text" class="form-control a11y_datetime" data-locale="de" data-enableTime="true" name="event_start">
```

## Verwendung in YForm

```json
{"class": "flatpickr", "data-locale": "de", "data-enableTime": "true"}
```

Alternativ mit neuem Klassennamen:

```json
{"class": "a11y_datetime", "data-locale": "de", "data-enableTime": "true"}
```

## Verwendung in Modulen

```html
<input type="date" class="form-control flatpickr" data-locale="de" data-enableTime="true" name="REX_INPUT_VALUE[1]" value="REX_VALUE[1]">
```

## Erstellen eines RangeField über 2 Input-Felder 

```json
{"class": "flatpickr_range","data-locale":"de","data-enableTime":"true", "data-rangefield":"#id"}
```

oder

```json
{"class": "a11y_datetime_range","data-locale":"de","data-enableTime":"true", "data-rangefield":"#id"}
```

## Die Ansicht nur für Datumsfelder einstellen. 

Wenn man die Uhrzeit in einem Datumsfeld nicht sehen möchte, sollte man den Timepicker nicht verwenden und eine andere Ansicht einstellen.

Einfach das data-altFormat setzen 😀.

```json 
{"class": "flatpickr", "data-altFormat": "j. F, Y"}
```

## Tage deaktivieren

Einzelne Tage können deaktiviert werden. 
Hierzu listet man diese Tage im Attribut data-disabled als kommaseparierte Liste.

Example: 

```json
{"class": "flatpickr","data-locale":"de","data-enableTime":"true", "data-disabled":"2022-12-11,2022-12-24,2022-12-25"}
```

## Troubleshooting

Wenn der Picker im Backend nicht funktioniert oder sich unerwartet verhaelt, helfen diese Checks:

1. REDAXO- und Browser-Cache leeren (inkl. Hard-Reload im Browser).
2. Im Browser-Netzwerk-Tab auf 404 bei Picker-Assets pruefen.
3. Sicherstellen, dass die Input-Klasse korrekt gesetzt ist (`flatpickr` oder `a11y_datetime`, fuer Range `flatpickr_range` oder `a11y_datetime_range`).
4. Bei Range-Feldern pruefen, ob `data-rangefield` auf ein existierendes Input zeigt.

### Schnellcheck in der Shell

```bash
cd redaxo/src/addons/flatpickr

# 1) Script-Syntax pruefen
bash -n tools/update-a11y-datetime-vendor.sh

# 2) Pflichtdateien im Vendor pruefen
ls -la assets/vendor/a11y_datetime/dist/{a11y_datetime.min.js,a11y_datetime.min.css,l10n/de.js,plugins/rangePlugin.js,themes/dark.css}

# 3) JS-Syntax des Initializers pruefen
node --check assets/flatpickr_init.js
```

### Typische Ursachen

1. `data-enableTime` fehlt oder ist nicht als `true`/`false` gesetzt.
2. `data-rangefield` zeigt auf einen ungueltigen Selector.
3. Das Release-Asset `dist.zip` ist im Upstream-Release nicht vorhanden oder umbenannt.
4. Ueberholte Browser-Caches laden noch alte Asset-Versionen.

### Update erneut ausfuehren

```bash
cd redaxo/src/addons/flatpickr
./tools/update-a11y-datetime-vendor.sh
```

## Autor

**Friends Of REDAXO**

* http://www.redaxo.org
* https://github.com/FriendsOfREDAXO

**Project-Lead**
[Thomas Skerbis](https://github.com/skerbis)

**Vendor**
https://github.com/FriendsOfREDAXO/a11y_datetime

