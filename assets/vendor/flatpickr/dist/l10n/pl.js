"use strict";
var l10n_pl = (() => {
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

  // src/l10n/pl.ts
  var pl_exports = {};
  __export(pl_exports, {
    Polish: () => Polish,
    default: () => pl_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Polish = {
    weekdays: {
      shorthand: ["Nd", "Pn", "Wt", "\u015Ar", "Cz", "Pt", "So"],
      longhand: [
        "Niedziela",
        "Poniedzia\u0142ek",
        "Wtorek",
        "\u015Aroda",
        "Czwartek",
        "Pi\u0105tek",
        "Sobota"
      ]
    },
    months: {
      shorthand: [
        "Sty",
        "Lut",
        "Mar",
        "Kwi",
        "Maj",
        "Cze",
        "Lip",
        "Sie",
        "Wrz",
        "Pa\u017A",
        "Lis",
        "Gru"
      ],
      longhand: [
        "Stycze\u0144",
        "Luty",
        "Marzec",
        "Kwiecie\u0144",
        "Maj",
        "Czerwiec",
        "Lipiec",
        "Sierpie\u0144",
        "Wrzesie\u0144",
        "Pa\u017Adziernik",
        "Listopad",
        "Grudzie\u0144"
      ]
    },
    rangeSeparator: " do ",
    weekAbbreviation: "tydz.",
    scrollTitle: "Przewi\u0144, aby zwi\u0119kszy\u0107",
    toggleTitle: "Kliknij, aby prze\u0142\u0105czy\u0107",
    firstDayOfWeek: 1,
    time_24hr: true,
    ordinal: () => {
      return ".";
    }
  };
  fp.l10ns.pl = Polish;
  var pl_default = fp.l10ns;
  return __toCommonJS(pl_exports);
})();
