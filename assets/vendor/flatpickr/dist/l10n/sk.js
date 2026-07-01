"use strict";
var l10n_sk = (() => {
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

  // src/l10n/sk.ts
  var sk_exports = {};
  __export(sk_exports, {
    Slovak: () => Slovak,
    default: () => sk_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Slovak = {
    weekdays: {
      shorthand: ["Ned", "Pon", "Ut", "Str", "\u0160tv", "Pia", "Sob"],
      longhand: [
        "Nede\u013Ea",
        "Pondelok",
        "Utorok",
        "Streda",
        "\u0160tvrtok",
        "Piatok",
        "Sobota"
      ]
    },
    months: {
      shorthand: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "M\xE1j",
        "J\xFAn",
        "J\xFAl",
        "Aug",
        "Sep",
        "Okt",
        "Nov",
        "Dec"
      ],
      longhand: [
        "Janu\xE1r",
        "Febru\xE1r",
        "Marec",
        "Apr\xEDl",
        "M\xE1j",
        "J\xFAn",
        "J\xFAl",
        "August",
        "September",
        "Okt\xF3ber",
        "November",
        "December"
      ]
    },
    firstDayOfWeek: 1,
    rangeSeparator: " do ",
    time_24hr: true,
    ordinal: function() {
      return ".";
    }
  };
  fp.l10ns.sk = Slovak;
  var sk_default = fp.l10ns;
  return __toCommonJS(sk_exports);
})();
