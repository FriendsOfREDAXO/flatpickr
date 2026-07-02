"use strict";
var l10n_it = (() => {
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

  // src/l10n/it.ts
  var it_exports = {};
  __export(it_exports, {
    Italian: () => Italian,
    default: () => it_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Italian = {
    weekdays: {
      shorthand: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
      longhand: [
        "Domenica",
        "Luned\xEC",
        "Marted\xEC",
        "Mercoled\xEC",
        "Gioved\xEC",
        "Venerd\xEC",
        "Sabato"
      ]
    },
    months: {
      shorthand: [
        "Gen",
        "Feb",
        "Mar",
        "Apr",
        "Mag",
        "Giu",
        "Lug",
        "Ago",
        "Set",
        "Ott",
        "Nov",
        "Dic"
      ],
      longhand: [
        "Gennaio",
        "Febbraio",
        "Marzo",
        "Aprile",
        "Maggio",
        "Giugno",
        "Luglio",
        "Agosto",
        "Settembre",
        "Ottobre",
        "Novembre",
        "Dicembre"
      ]
    },
    firstDayOfWeek: 1,
    ordinal: () => "\xB0",
    rangeSeparator: " al ",
    weekAbbreviation: "Se",
    scrollTitle: "Scrolla per aumentare",
    toggleTitle: "Clicca per cambiare",
    keyboardHelpAriaLabel: "Aiuto tastiera",
    keyboardShortcutsTitle: "Scorciatoie da tastiera",
    keyboardShortcutFocus: "Tab / Maiusc+Tab: sposta il focus",
    keyboardShortcutArrows: "Frecce: naviga giorni o valori della ruota",
    keyboardShortcutPage: "PagSu / PagGi\xF9: cambia mese/anno nella ruota",
    keyboardShortcutHomeEnd: "Home / Fine: primo/ultimo mese o anno",
    keyboardShortcutSelect: "Invio / Spazio: seleziona o conferma",
    keyboardShortcutEscape: "Esc: chiudi popover/calendario",
    time_24hr: true
  };
  fp.l10ns.it = Italian;
  var it_default = fp.l10ns;
  return __toCommonJS(it_exports);
})();
