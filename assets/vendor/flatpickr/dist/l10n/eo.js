"use strict";
var l10n_eo = (() => {
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

  // src/l10n/eo.ts
  var eo_exports = {};
  __export(eo_exports, {
    Esperanto: () => Esperanto,
    default: () => eo_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Esperanto = {
    firstDayOfWeek: 1,
    rangeSeparator: " \u011Dis ",
    weekAbbreviation: "Sem",
    scrollTitle: "Rulumu por pligrandigi la valoron",
    toggleTitle: "Klaku por \u015Dalti",
    weekdays: {
      shorthand: ["Dim", "Lun", "Mar", "Mer", "\u0134a\u016D", "Ven", "Sab"],
      longhand: [
        "diman\u0109o",
        "lundo",
        "mardo",
        "merkredo",
        "\u0135a\u016Ddo",
        "vendredo",
        "sabato"
      ]
    },
    months: {
      shorthand: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Maj",
        "Jun",
        "Jul",
        "A\u016Dg",
        "Sep",
        "Okt",
        "Nov",
        "Dec"
      ],
      longhand: [
        "januaro",
        "februaro",
        "marto",
        "aprilo",
        "majo",
        "junio",
        "julio",
        "a\u016Dgusto",
        "septembro",
        "oktobro",
        "novembro",
        "decembro"
      ]
    },
    ordinal: () => {
      return "-a";
    },
    time_24hr: true
  };
  fp.l10ns.eo = Esperanto;
  var eo_default = fp.l10ns;
  return __toCommonJS(eo_exports);
})();
