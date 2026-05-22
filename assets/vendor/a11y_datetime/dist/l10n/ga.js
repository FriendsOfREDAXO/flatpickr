"use strict";
var l10n_ga = (() => {
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

  // src/l10n/ga.ts
  var ga_exports = {};
  __export(ga_exports, {
    Irish: () => Irish,
    default: () => ga_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Irish = {
    firstDayOfWeek: 1,
    weekdays: {
      shorthand: ["Dom", "Lua", "M\xE1i", "C\xE9a", "D\xE9a", "Aoi", "Sat"],
      longhand: [
        "D\xE9 Domhnaigh",
        "D\xE9 Luain",
        "D\xE9 M\xE1irt",
        "D\xE9 C\xE9adaoin",
        "D\xE9ardaoin",
        "D\xE9 hAoine",
        "D\xE9 Sathairn"
      ]
    },
    months: {
      shorthand: [
        "Ean",
        "Fea",
        "M\xE1r",
        "Aib",
        "Bea",
        "Mei",
        "I\xFAi",
        "L\xFAn",
        "MFo",
        "DFo",
        "Sam",
        "Nol"
      ],
      longhand: [
        "Ean\xE1ir",
        "Feabhra",
        "M\xE1rta",
        "Aibre\xE1n",
        "Bealtaine",
        "Meitheamh",
        "I\xFAil",
        "L\xFAnasa",
        "Me\xE1n F\xF3mhair",
        "Deireadh F\xF3mhair",
        "Samhain",
        "Nollaig"
      ]
    },
    time_24hr: true
  };
  fp.l10ns.hr = Irish;
  var ga_default = fp.l10ns;
  return __toCommonJS(ga_exports);
})();
