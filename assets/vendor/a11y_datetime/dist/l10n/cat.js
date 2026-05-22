"use strict";
var l10n_cat = (() => {
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

  // src/l10n/cat.ts
  var cat_exports = {};
  __export(cat_exports, {
    Catalan: () => Catalan,
    default: () => cat_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Catalan = {
    weekdays: {
      shorthand: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
      longhand: [
        "Diumenge",
        "Dilluns",
        "Dimarts",
        "Dimecres",
        "Dijous",
        "Divendres",
        "Dissabte"
      ]
    },
    months: {
      shorthand: [
        "Gen",
        "Febr",
        "Mar\xE7",
        "Abr",
        "Maig",
        "Juny",
        "Jul",
        "Ag",
        "Set",
        "Oct",
        "Nov",
        "Des"
      ],
      longhand: [
        "Gener",
        "Febrer",
        "Mar\xE7",
        "Abril",
        "Maig",
        "Juny",
        "Juliol",
        "Agost",
        "Setembre",
        "Octubre",
        "Novembre",
        "Desembre"
      ]
    },
    ordinal: (nth) => {
      const s = nth % 100;
      if (s > 3 && s < 21)
        return "\xE8";
      switch (s % 10) {
        case 1:
          return "r";
        case 2:
          return "n";
        case 3:
          return "r";
        case 4:
          return "t";
        default:
          return "\xE8";
      }
    },
    firstDayOfWeek: 1,
    rangeSeparator: " a ",
    time_24hr: true
  };
  fp.l10ns.cat = fp.l10ns.ca = Catalan;
  var cat_default = fp.l10ns;
  return __toCommonJS(cat_exports);
})();
