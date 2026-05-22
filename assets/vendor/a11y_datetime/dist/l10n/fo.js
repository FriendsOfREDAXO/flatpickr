"use strict";
var l10n_fo = (() => {
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

  // src/l10n/fo.ts
  var fo_exports = {};
  __export(fo_exports, {
    Faroese: () => Faroese,
    default: () => fo_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Faroese = {
    weekdays: {
      shorthand: ["Sun", "M\xE1n", "T\xFDs", "Mik", "H\xF3s", "Fr\xED", "Ley"],
      longhand: [
        "Sunnudagur",
        "M\xE1nadagur",
        "T\xFDsdagur",
        "Mikudagur",
        "H\xF3sdagur",
        "Fr\xEDggjadagur",
        "Leygardagur"
      ]
    },
    months: {
      shorthand: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Mai",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Okt",
        "Nov",
        "Des"
      ],
      longhand: [
        "Januar",
        "Februar",
        "Mars",
        "Apr\xEDl",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "Septembur",
        "Oktobur",
        "Novembur",
        "Desembur"
      ]
    },
    ordinal: () => {
      return ".";
    },
    firstDayOfWeek: 1,
    rangeSeparator: " til ",
    weekAbbreviation: "vika",
    scrollTitle: "Rulla fyri at broyta",
    toggleTitle: "Tr\xFDst fyri at skifta",
    yearAriaLabel: "\xC1r",
    time_24hr: true
  };
  fp.l10ns.fo = Faroese;
  var fo_default = fp.l10ns;
  return __toCommonJS(fo_exports);
})();
