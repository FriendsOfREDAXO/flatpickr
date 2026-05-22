"use strict";
var l10n_az = (() => {
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

  // src/l10n/az.ts
  var az_exports = {};
  __export(az_exports, {
    Azerbaijan: () => Azerbaijan,
    default: () => az_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Azerbaijan = {
    weekdays: {
      shorthand: ["B.", "B.e.", "\xC7.a.", "\xC7.", "C.a.", "C.", "\u015E."],
      longhand: [
        "Bazar",
        "Bazar ert\u0259si",
        "\xC7\u0259r\u015F\u0259nb\u0259 ax\u015Fam\u0131",
        "\xC7\u0259r\u015F\u0259nb\u0259",
        "C\xFCm\u0259 ax\u015Fam\u0131",
        "C\xFCm\u0259",
        "\u015E\u0259nb\u0259"
      ]
    },
    months: {
      shorthand: [
        "Yan",
        "Fev",
        "Mar",
        "Apr",
        "May",
        "\u0130yn",
        "\u0130yl",
        "Avq",
        "Sen",
        "Okt",
        "Noy",
        "Dek"
      ],
      longhand: [
        "Yanvar",
        "Fevral",
        "Mart",
        "Aprel",
        "May",
        "\u0130yun",
        "\u0130yul",
        "Avqust",
        "Sentyabr",
        "Oktyabr",
        "Noyabr",
        "Dekabr"
      ]
    },
    firstDayOfWeek: 1,
    ordinal: () => {
      return ".";
    },
    rangeSeparator: " - ",
    weekAbbreviation: "Hf",
    scrollTitle: "Art\u0131rmaq \xFC\xE7\xFCn s\xFCr\xFC\u015Fd\xFCr\xFCn",
    toggleTitle: "A\xE7 / Ba\u011Fla",
    amPM: ["G\u018F", "GS"],
    time_24hr: true
  };
  fp.l10ns.az = Azerbaijan;
  var az_default = fp.l10ns;
  return __toCommonJS(az_exports);
})();
