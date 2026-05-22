"use strict";
var l10n_is = (() => {
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

  // src/l10n/is.ts
  var is_exports = {};
  __export(is_exports, {
    Icelandic: () => Icelandic,
    default: () => is_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Icelandic = {
    weekdays: {
      shorthand: ["Sun", "M\xE1n", "\xDEri", "Mi\xF0", "Fim", "F\xF6s", "Lau"],
      longhand: [
        "Sunnudagur",
        "M\xE1nudagur",
        "\xDEri\xF0judagur",
        "Mi\xF0vikudagur",
        "Fimmtudagur",
        "F\xF6studagur",
        "Laugardagur"
      ]
    },
    months: {
      shorthand: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Ma\xED",
        "J\xFAn",
        "J\xFAl",
        "\xC1g\xFA",
        "Sep",
        "Okt",
        "N\xF3v",
        "Des"
      ],
      longhand: [
        "Jan\xFAar",
        "Febr\xFAar",
        "Mars",
        "Apr\xEDl",
        "Ma\xED",
        "J\xFAn\xED",
        "J\xFAl\xED",
        "\xC1g\xFAst",
        "September",
        "Okt\xF3ber",
        "N\xF3vember",
        "Desember"
      ]
    },
    ordinal: () => {
      return ".";
    },
    firstDayOfWeek: 1,
    rangeSeparator: " til ",
    weekAbbreviation: "vika",
    yearAriaLabel: "\xC1r",
    time_24hr: true
  };
  fp.l10ns.is = Icelandic;
  var is_default = fp.l10ns;
  return __toCommonJS(is_exports);
})();
