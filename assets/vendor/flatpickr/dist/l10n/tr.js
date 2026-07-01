"use strict";
var l10n_tr = (() => {
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

  // src/l10n/tr.ts
  var tr_exports = {};
  __export(tr_exports, {
    Turkish: () => Turkish,
    default: () => tr_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Turkish = {
    weekdays: {
      shorthand: ["Paz", "Pzt", "Sal", "\xC7ar", "Per", "Cum", "Cmt"],
      longhand: [
        "Pazar",
        "Pazartesi",
        "Sal\u0131",
        "\xC7ar\u015Famba",
        "Per\u015Fembe",
        "Cuma",
        "Cumartesi"
      ]
    },
    months: {
      shorthand: [
        "Oca",
        "\u015Eub",
        "Mar",
        "Nis",
        "May",
        "Haz",
        "Tem",
        "A\u011Fu",
        "Eyl",
        "Eki",
        "Kas",
        "Ara"
      ],
      longhand: [
        "Ocak",
        "\u015Eubat",
        "Mart",
        "Nisan",
        "May\u0131s",
        "Haziran",
        "Temmuz",
        "A\u011Fustos",
        "Eyl\xFCl",
        "Ekim",
        "Kas\u0131m",
        "Aral\u0131k"
      ]
    },
    firstDayOfWeek: 1,
    ordinal: () => {
      return ".";
    },
    rangeSeparator: " - ",
    weekAbbreviation: "Hf",
    scrollTitle: "Art\u0131rmak i\xE7in kayd\u0131r\u0131n",
    toggleTitle: "A\xE7/Kapa",
    amPM: ["\xD6\xD6", "\xD6S"],
    time_24hr: true
  };
  fp.l10ns.tr = Turkish;
  var tr_default = fp.l10ns;
  return __toCommonJS(tr_exports);
})();
