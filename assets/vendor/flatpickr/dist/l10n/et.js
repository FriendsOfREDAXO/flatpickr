"use strict";
var l10n_et = (() => {
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

  // src/l10n/et.ts
  var et_exports = {};
  __export(et_exports, {
    Estonian: () => Estonian,
    default: () => et_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Estonian = {
    weekdays: {
      shorthand: ["P", "E", "T", "K", "N", "R", "L"],
      longhand: [
        "P\xFChap\xE4ev",
        "Esmasp\xE4ev",
        "Teisip\xE4ev",
        "Kolmap\xE4ev",
        "Neljap\xE4ev",
        "Reede",
        "Laup\xE4ev"
      ]
    },
    months: {
      shorthand: [
        "Jaan",
        "Veebr",
        "M\xE4rts",
        "Apr",
        "Mai",
        "Juuni",
        "Juuli",
        "Aug",
        "Sept",
        "Okt",
        "Nov",
        "Dets"
      ],
      longhand: [
        "Jaanuar",
        "Veebruar",
        "M\xE4rts",
        "Aprill",
        "Mai",
        "Juuni",
        "Juuli",
        "August",
        "September",
        "Oktoober",
        "November",
        "Detsember"
      ]
    },
    firstDayOfWeek: 1,
    ordinal: function() {
      return ".";
    },
    weekAbbreviation: "N\xE4d",
    rangeSeparator: " kuni ",
    scrollTitle: "Keri, et suurendada",
    toggleTitle: "Kl\xF5psa, et vahetada",
    time_24hr: true
  };
  fp.l10ns.et = Estonian;
  var et_default = fp.l10ns;
  return __toCommonJS(et_exports);
})();
