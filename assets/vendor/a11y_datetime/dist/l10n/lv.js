"use strict";
var l10n_lv = (() => {
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

  // src/l10n/lv.ts
  var lv_exports = {};
  __export(lv_exports, {
    Latvian: () => Latvian,
    default: () => lv_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Latvian = {
    firstDayOfWeek: 1,
    weekdays: {
      shorthand: ["Sv", "Pr", "Ot", "Tr", "Ce", "Pk", "Se"],
      longhand: [
        "Sv\u0113tdiena",
        "Pirmdiena",
        "Otrdiena",
        "Tre\u0161diena",
        "Ceturtdiena",
        "Piektdiena",
        "Sestdiena"
      ]
    },
    months: {
      shorthand: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Mai",
        "J\u016Bn",
        "J\u016Bl",
        "Aug",
        "Sep",
        "Okt",
        "Nov",
        "Dec"
      ],
      longhand: [
        "Janv\u0101ris",
        "Febru\u0101ris",
        "Marts",
        "Apr\u012Blis",
        "Maijs",
        "J\u016Bnijs",
        "J\u016Blijs",
        "Augusts",
        "Septembris",
        "Oktobris",
        "Novembris",
        "Decembris"
      ]
    },
    rangeSeparator: " l\u012Bdz ",
    time_24hr: true
  };
  fp.l10ns.lv = Latvian;
  var lv_default = fp.l10ns;
  return __toCommonJS(lv_exports);
})();
