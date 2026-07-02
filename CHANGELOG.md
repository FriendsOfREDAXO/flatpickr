# Changelog

Alle wichtigen Änderungen an diesem Addon werden in dieser Datei dokumentiert.

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
