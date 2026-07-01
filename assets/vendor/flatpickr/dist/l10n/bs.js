"use strict";
var l10n_bs = (() => {
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

  // src/l10n/bs.ts
  var bs_exports = {};
  __export(bs_exports, {
    Bosnian: () => Bosnian,
    default: () => bs_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Bosnian = {
    firstDayOfWeek: 1,
    weekdays: {
      shorthand: ["Ned", "Pon", "Uto", "Sri", "\u010Cet", "Pet", "Sub"],
      longhand: [
        "Nedjelja",
        "Ponedjeljak",
        "Utorak",
        "Srijeda",
        "\u010Cetvrtak",
        "Petak",
        "Subota"
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
        "Mart",
        "April",
        "Maj",
        "Juni",
        "Juli",
        "Avgust",
        "Septembar",
        "Oktobar",
        "Novembar",
        "Decembar"
      ]
    },
    time_24hr: true
  };
  fp.l10ns.bs = Bosnian;
  var bs_default = fp.l10ns;
  return __toCommonJS(bs_exports);
})();
