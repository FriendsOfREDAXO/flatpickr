"use strict";
var l10n_nl = (() => {
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

  // src/l10n/nl.ts
  var nl_exports = {};
  __export(nl_exports, {
    Dutch: () => Dutch,
    default: () => nl_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Dutch = {
    weekdays: {
      shorthand: ["zo", "ma", "di", "wo", "do", "vr", "za"],
      longhand: [
        "zondag",
        "maandag",
        "dinsdag",
        "woensdag",
        "donderdag",
        "vrijdag",
        "zaterdag"
      ]
    },
    months: {
      shorthand: [
        "jan",
        "feb",
        "mrt",
        "apr",
        "mei",
        "jun",
        "jul",
        "aug",
        "sept",
        "okt",
        "nov",
        "dec"
      ],
      longhand: [
        "januari",
        "februari",
        "maart",
        "april",
        "mei",
        "juni",
        "juli",
        "augustus",
        "september",
        "oktober",
        "november",
        "december"
      ]
    },
    firstDayOfWeek: 1,
    weekAbbreviation: "wk",
    rangeSeparator: " t/m ",
    scrollTitle: "Scroll voor volgende / vorige",
    toggleTitle: "Klik om te wisselen",
    time_24hr: true,
    ordinal: (nth) => {
      if (nth === 1 || nth === 8 || nth >= 20)
        return "ste";
      return "de";
    }
  };
  fp.l10ns.nl = Dutch;
  var nl_default = fp.l10ns;
  return __toCommonJS(nl_exports);
})();
