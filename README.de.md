# flatpickr für REDAXO

flatpickr ist ein leichtgewichtiger und leistungsfähiger Datums-Picker.

## Wie installieren?

Einfach über den REDAXO-Installer installieren.

## Verwendung in YForm

```json
{"class": "flatpickr", "data-locale": "de", "data-enableTime": "true"}
```

## Verwendung in Modulen

```html
<input type="date" class="form-control flatpickr" data-locale="de" data-anableTime="true" name="REX_INPUT_VALUE[1]" value="REX_VALUE[1]">
```

## Erstellen eines RangeField über 2 Input-Felder 

```json
{"class": "flatpickr_range","data-locale":"de","data-enableTime":"true", "data-rangefield":"#id"}
```

## Tage deaktivieren

Einzelne Tage können deaktiviert werden. 
Hierzu listet man diese Tage im Attribut data-disabled als kommaseparierte Liste.

Example: 

```json
{"class": "flatpickr","data-locale":"de","data-enableTime":"true", "data-disabled":"2022-12-11,2022-12-24,2022-12-25"}
```


## Autor

**Friends Of REDAXO**

* http://www.redaxo.org
* https://github.com/FriendsOfREDAXO

**Project-Lead**
[Thomas Skerbis](https://github.com/skerbis)

**Vendor**
https://flatpickr.js.org

