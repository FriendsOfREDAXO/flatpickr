"use strict";
var l10n_da = (() => {
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

  // src/l10n/da.ts
  var da_exports = {};
  __export(da_exports, {
    Danish: () => Danish,
    default: () => da_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Danish = {
    weekdays: {
      shorthand: ["s\xF8n", "man", "tir", "ons", "tors", "fre", "l\xF8r"],
      longhand: [
        "s\xF8ndag",
        "mandag",
        "tirsdag",
        "onsdag",
        "torsdag",
        "fredag",
        "l\xF8rdag"
      ]
    },
    months: {
      shorthand: [
        "jan",
        "feb",
        "mar",
        "apr",
        "maj",
        "jun",
        "jul",
        "aug",
        "sep",
        "okt",
        "nov",
        "dec"
      ],
      longhand: [
        "januar",
        "februar",
        "marts",
        "april",
        "maj",
        "juni",
        "juli",
        "august",
        "september",
        "oktober",
        "november",
        "december"
      ]
    },
    ordinal: () => {
      return ".";
    },
    firstDayOfWeek: 1,
    rangeSeparator: " til ",
    weekAbbreviation: "uge",
    time_24hr: true
  };
  fp.l10ns.da = Danish;
  var da_default = fp.l10ns;
  return __toCommonJS(da_exports);
})();
