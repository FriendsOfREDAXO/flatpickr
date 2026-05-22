"use strict";
var l10n_sl = (() => {
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

  // src/l10n/sl.ts
  var sl_exports = {};
  __export(sl_exports, {
    Slovenian: () => Slovenian,
    default: () => sl_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Slovenian = {
    weekdays: {
      shorthand: ["Ned", "Pon", "Tor", "Sre", "\u010Cet", "Pet", "Sob"],
      longhand: [
        "Nedelja",
        "Ponedeljek",
        "Torek",
        "Sreda",
        "\u010Cetrtek",
        "Petek",
        "Sobota"
      ]
    },
    months: {
      shorthand: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Maj",
        "Jun",
        "Jul",
        "Avg",
        "Sep",
        "Okt",
        "Nov",
        "Dec"
      ],
      longhand: [
        "Januar",
        "Februar",
        "Marec",
        "April",
        "Maj",
        "Junij",
        "Julij",
        "Avgust",
        "September",
        "Oktober",
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
  fp.l10ns.sl = Slovenian;
  var sl_default = fp.l10ns;
  return __toCommonJS(sl_exports);
})();
