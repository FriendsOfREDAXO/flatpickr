# Changelog

Alle wichtigen Änderungen an diesem Addon werden in dieser Datei dokumentiert.

## [2.2.0]

## [2.2.1] - 2026-07-20

### Added
- Flatpickr-Initializer reicht jetzt sämtliche relevanten Vendor-Optionen (a11y_datetime / flatpickr) als `data-*` Attribute an den Picker weiter. Neben den bisher gepflegten Optionen sind das u. a. `data-allowInput`, `data-allowInvalidPreload`, `data-animate`, `data-announceChanges`, `data-autoFillDefaultTime`, `data-clickOpens`, `data-closeOnSelect`, `data-disableMobile`, `data-enableSeconds`, `data-inline`, `data-shorthandCurrentMonth`, `data-showCloseButton`, `data-showTitleBar`, `data-static`, `data-weekNumbers`, `data-wrap`, `data-altInput`, `data-time_24hr`, `data-altInputClass`, `data-ariaDateFormat`, `data-calendarTitle`, `data-conjunction`, `data-dateFormat`, `data-defaultDate`, `data-initialDayFocus`, `data-maxDate`, `data-maxTime`, `data-minDate`, `data-minTime`, `data-mode`, `data-monthSelectorType`, `data-nextArrow`, `data-now`, `data-position`, `data-prevArrow`, `data-defaultHour`, `data-defaultMinute`, `data-defaultSeconds`, `data-hourIncrement`, `data-minuteIncrement` sowie `data-enable` (kommaseparierte Liste erlaubter Datumsangaben).
- Neue Doku-Sektion in `README.md` und `README.de.md`, die Addon-Defaults und alle durchgereichten Optionen dokumentiert.
- Neues YForm-Value-Feld `flatpickr` für Datum, Datum/Uhrzeit, Uhrzeit und Datumsbereich mit Standard-Settings, Expert-JSON und externer Disable-Callback-Unterstützung.

### Changed
- Vendor-Stand auf a11y_datetime 5.2.4 aktualisiert.
- Interne Refaktorisierung: gemeinsame Options-Zusammenstellung für Einzel- und Range-Picker.

### Fixed
- Flatpickr-Initializer unterstützt jetzt `data-noCalendar`, sodass bei aktivierter Uhrzeit (`data-enableTime="true"`) ein reines Time-Picker-Feld ohne Kalender möglich ist. Bei Kombination beider Optionen wird der Default für `dateFormat`/`altFormat` auf `H:i` gesetzt.
- Range-Picker verwenden jetzt denselben Options-Builder wie Einzelfelder und unterstützen damit alle Vendor-Optionen konsistent.
- Time-only Picker übernimmt jetzt den neuen Minuten-Default (`minuteIncrement = 1`) aus dem Vendor.
- Wheel-Controls profitieren vom Vendor-Fix gegen globale Framework-Styles im Host-Umfeld.
- a11y_datetime (Vendor): Responsive Mehrmonats-Layout stabilisiert. Bei Wechsel der Viewportbreite werden Kalender-, Monats- und Wochentags-Container jetzt konsistent synchronisiert; verbleibende Multi-Month-Breiten und überlappende Monatsüberschriften (insbesondere in Safari) werden zuverlässig zurückgesetzt.
- a11y_datetime (Vendor): Bei reduzierter Monatsanzahl werden überzählige Monats- und Weekday-Gruppen gezielt ausgeblendet, sodass kein „leeres“ oder überlagertes zweites/drittes Blatt sichtbar bleibt.

### Changed
- YForm-Value `flatpickr`: Suchfeld und Suchfilter orientieren sich jetzt am konfigurierten `picker_type` statt pauschal am Text-Filter.
  - `date`/`date_range` nutzen die YForm-`date`-Suchlogik
  - `datetime` nutzt die YForm-`datetime`-Suchlogik
  - `time` nutzt die YForm-`time`-Suchlogik

## [2.1.0]

### Changed
- Flatpickr-Initializer unterstützt jetzt `data-timeRules` (JSON) und reicht die Option als `timeRules` an a11y_datetime weiter (normale und Range-Felder).
- Flatpickr-Initializer unterstützt jetzt außerdem `data-monthYearWheel`, `data-yearRange` und `data-yearWheelManualInput` und reicht diese Optionen an a11y_datetime weiter.
- Flatpickr-Initializer unterstützt jetzt `data-showMonthNavArrows` (Reaktivierung der Month-Arrows, Standard bleibt aus).
- Flatpickr-Initializer unterstützt jetzt `data-showMonths` für mehrere sichtbare Kalenderblätter (z. B. 2 oder 3 Monate bei Range-Workflows).
- Vendor-Stand und Doku auf a11y_datetime v5.2.0-Funktionsumfang angeglichen.

### Fixed
- Time-only-Popover: Tab und Shift+Tab bleiben jetzt im Popover-Zyklus und springen nicht mehr in die Browser-Adresszeile.
- Time-Wheel-Beschriftungen werden jetzt über die gesetzte Locale lokalisiert (Deutsch: „Zeit“, „Fertig“ inklusive ARIA-Labels).
- Mehrmonats-Range mit Month/Year-Wheel: Der Month/Year-Chooser wird nur noch im ersten sichtbaren Monatsblatt verwendet; zusätzliche Trigger in weiteren Blättern entfallen.
- Month/Year-Wheel-Tastatursteuerung stabilisiert: Pfeilsteuerung für die Jahres-Spalte funktioniert jetzt in beide Richtungen und wird nicht mehr vom globalen Kalender-Keydown überlagert.

### Documentation
- README.de und README.md um `data-showMonthNavArrows` und `data-showMonths` inkl. Beispiel für 3-Monats-Range erweitert.

### QA
- Keyboard-Hilfe-Übersetzungen für EN/DE/FR/ES/IT/SL/JA/ZH synchronisiert und geprüft (Build erfolgreich; Dist-Locale-Dateien für ES/IT/SL/JA/ZH/ZH-TW vorhanden; Browser-Laufzeittest in den vorhandenen Demo-Locale-Beispielen für DE/FR/JA durchgeführt).

## [2.0.1] - 2026-07-01

### Changed
- Vendor-Update auf a11y_datetime Release v5.1.5 durchgeführt.
- Neuer optionaler Schalter data-focusOpens wird im Initializer an a11y_datetime durchgereicht (für normale und Range-Felder).
- Update-Skript für Vendor-Refresh verbessert:
  - klarere Fehlermeldung bei fehlendem dist.zip
  - Anzeige vorhandener Release-Assets
  - optionales Tag-Target für gezielte Updates

### Documentation
- README.de ergänzt um Hinweise und Beispiele für das optionale Öffnen bei Fokus.
- README.md analog ergänzt.
