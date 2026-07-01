"use strict";
var l10n_cy = (() => {
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

  // src/l10n/cy.ts
  var cy_exports = {};
  __export(cy_exports, {
    Welsh: () => Welsh,
    default: () => cy_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Welsh = {
    weekdays: {
      shorthand: ["Sul", "Llun", "Maw", "Mer", "Iau", "Gwe", "Sad"],
      longhand: [
        "Dydd Sul",
        "Dydd Llun",
        "Dydd Mawrth",
        "Dydd Mercher",
        "Dydd Iau",
        "Dydd Gwener",
        "Dydd Sadwrn"
      ]
    },
    months: {
      shorthand: [
        "Ion",
        "Chwef",
        "Maw",
        "Ebr",
        "Mai",
        "Meh",
        "Gorff",
        "Awst",
        "Medi",
        "Hyd",
        "Tach",
        "Rhag"
      ],
      longhand: [
        "Ionawr",
        "Chwefror",
        "Mawrth",
        "Ebrill",
        "Mai",
        "Mehefin",
        "Gorffennaf",
        "Awst",
        "Medi",
        "Hydref",
        "Tachwedd",
        "Rhagfyr"
      ]
    },
    firstDayOfWeek: 1,
    ordinal: (nth) => {
      if (nth === 1)
        return "af";
      if (nth === 2)
        return "ail";
      if (nth === 3 || nth === 4)
        return "ydd";
      if (nth === 5 || nth === 6)
        return "ed";
      if (nth >= 7 && nth <= 10 || nth == 12 || nth == 15 || nth == 18 || nth == 20)
        return "fed";
      if (nth == 11 || nth == 13 || nth == 14 || nth == 16 || nth == 17 || nth == 19)
        return "eg";
      if (nth >= 21 && nth <= 39)
        return "ain";
      return "";
    },
    time_24hr: true
  };
  fp.l10ns.cy = Welsh;
  var cy_default = fp.l10ns;
  return __toCommonJS(cy_exports);
})();
