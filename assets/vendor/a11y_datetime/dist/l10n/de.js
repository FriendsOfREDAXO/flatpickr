"use strict";
var l10n_de = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/l10n/de.ts
  var de_exports = {};
  __export(de_exports, {
    German: () => German,
    default: () => de_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var German = {
    weekdays: {
      shorthand: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
      longhand: [
        "Sonntag",
        "Montag",
        "Dienstag",
        "Mittwoch",
        "Donnerstag",
        "Freitag",
        "Samstag"
      ]
    },
    months: {
      shorthand: [
        "Jan",
        "Feb",
        "M\xE4r",
        "Apr",
        "Mai",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Okt",
        "Nov",
        "Dez"
      ],
      longhand: [
        "Januar",
        "Februar",
        "M\xE4rz",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "Dezember"
      ]
    },
    firstDayOfWeek: 1,
    weekAbbreviation: "KW",
    rangeSeparator: " bis ",
    scrollTitle: "Zum \xC4ndern scrollen",
    toggleTitle: "Zum Umschalten klicken",
    timeLabel: "Zeit",
    timePickerAriaLabel: "Zeitauswahl",
    doneButtonLabel: "Fertig",
    closeTimePickerAriaLabel: "Zeitauswahl schlie\xDFen",
    selectedTimeAriaLabel: "Ausgew\xE4hlte Zeit",
    keyboardHelpAriaLabel: "Tastaturhilfe",
    keyboardShortcutsTitle: "Tastaturk\xFCrzel",
    keyboardShortcutFocus: "Tab / Umschalt+Tab: Fokus bewegen",
    keyboardShortcutArrows: "Pfeiltasten: Tage oder Wheel-Werte navigieren",
    keyboardShortcutPage: "Bild auf / Bild ab: Monat/Jahr im Wheel wechseln",
    keyboardShortcutHomeEnd: "Pos1 / Ende: Erstes/letztes Monat oder Jahr",
    keyboardShortcutSelect: "Enter / Leertaste: Ausw\xE4hlen oder best\xE4tigen",
    keyboardShortcutEscape: "Esc: Popover/Kalender schlie\xDFen",
    time_24hr: true
  };
  fp.l10ns.de = German;
  var de_default = fp.l10ns;
  return __toCommonJS(de_exports);
})();
