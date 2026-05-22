"use strict";
var l10n_fi = (() => {
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

  // src/l10n/fi.ts
  var fi_exports = {};
  __export(fi_exports, {
    Finnish: () => Finnish,
    default: () => fi_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Finnish = {
    firstDayOfWeek: 1,
    weekdays: {
      shorthand: ["su", "ma", "ti", "ke", "to", "pe", "la"],
      longhand: [
        "sunnuntai",
        "maanantai",
        "tiistai",
        "keskiviikko",
        "torstai",
        "perjantai",
        "lauantai"
      ]
    },
    months: {
      shorthand: [
        "tammi",
        "helmi",
        "maalis",
        "huhti",
        "touko",
        "kes\xE4",
        "hein\xE4",
        "elo",
        "syys",
        "loka",
        "marras",
        "joulu"
      ],
      longhand: [
        "tammikuu",
        "helmikuu",
        "maaliskuu",
        "huhtikuu",
        "toukokuu",
        "kes\xE4kuu",
        "hein\xE4kuu",
        "elokuu",
        "syyskuu",
        "lokakuu",
        "marraskuu",
        "joulukuu"
      ]
    },
    ordinal: () => {
      return ".";
    },
    time_24hr: true
  };
  fp.l10ns.fi = Finnish;
  var fi_default = fp.l10ns;
  return __toCommonJS(fi_exports);
})();
