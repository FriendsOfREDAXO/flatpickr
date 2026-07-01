"use strict";
var l10n_hu = (() => {
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

  // src/l10n/hu.ts
  var hu_exports = {};
  __export(hu_exports, {
    Hungarian: () => Hungarian,
    default: () => hu_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Hungarian = {
    firstDayOfWeek: 1,
    weekdays: {
      shorthand: ["V", "H", "K", "Sz", "Cs", "P", "Szo"],
      longhand: [
        "Vas\xE1rnap",
        "H\xE9tf\u0151",
        "Kedd",
        "Szerda",
        "Cs\xFCt\xF6rt\xF6k",
        "P\xE9ntek",
        "Szombat"
      ]
    },
    months: {
      shorthand: [
        "Jan",
        "Feb",
        "M\xE1r",
        "\xC1pr",
        "M\xE1j",
        "J\xFAn",
        "J\xFAl",
        "Aug",
        "Szep",
        "Okt",
        "Nov",
        "Dec"
      ],
      longhand: [
        "Janu\xE1r",
        "Febru\xE1r",
        "M\xE1rcius",
        "\xC1prilis",
        "M\xE1jus",
        "J\xFAnius",
        "J\xFAlius",
        "Augusztus",
        "Szeptember",
        "Okt\xF3ber",
        "November",
        "December"
      ]
    },
    ordinal: function() {
      return ".";
    },
    weekAbbreviation: "H\xE9t",
    scrollTitle: "G\xF6rgessen",
    toggleTitle: "Kattintson a v\xE1lt\xE1shoz",
    rangeSeparator: " - ",
    time_24hr: true
  };
  fp.l10ns.hu = Hungarian;
  var hu_default = fp.l10ns;
  return __toCommonJS(hu_exports);
})();
