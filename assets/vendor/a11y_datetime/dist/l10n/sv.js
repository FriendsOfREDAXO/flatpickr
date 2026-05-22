"use strict";
var l10n_sv = (() => {
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

  // src/l10n/sv.ts
  var sv_exports = {};
  __export(sv_exports, {
    Swedish: () => Swedish,
    default: () => sv_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Swedish = {
    firstDayOfWeek: 1,
    weekAbbreviation: "v",
    weekdays: {
      shorthand: ["s\xF6n", "m\xE5n", "tis", "ons", "tor", "fre", "l\xF6r"],
      longhand: [
        "s\xF6ndag",
        "m\xE5ndag",
        "tisdag",
        "onsdag",
        "torsdag",
        "fredag",
        "l\xF6rdag"
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
        "januari",
        "februari",
        "mars",
        "april",
        "maj",
        "juni",
        "juli",
        "augusti",
        "september",
        "oktober",
        "november",
        "december"
      ]
    },
    rangeSeparator: " till ",
    time_24hr: true,
    ordinal: () => {
      return ".";
    }
  };
  fp.l10ns.sv = Swedish;
  var sv_default = fp.l10ns;
  return __toCommonJS(sv_exports);
})();
