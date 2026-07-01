"use strict";
var l10n_sq = (() => {
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

  // src/l10n/sq.ts
  var sq_exports = {};
  __export(sq_exports, {
    Albanian: () => Albanian,
    default: () => sq_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Albanian = {
    weekdays: {
      shorthand: ["Di", "H\xEB", "Ma", "M\xEB", "En", "Pr", "Sh"],
      longhand: [
        "E Diel",
        "E H\xEBn\xEB",
        "E Mart\xEB",
        "E M\xEBrkur\xEB",
        "E Enjte",
        "E Premte",
        "E Shtun\xEB"
      ]
    },
    months: {
      shorthand: [
        "Jan",
        "Shk",
        "Mar",
        "Pri",
        "Maj",
        "Qer",
        "Kor",
        "Gus",
        "Sht",
        "Tet",
        "N\xEBn",
        "Dhj"
      ],
      longhand: [
        "Janar",
        "Shkurt",
        "Mars",
        "Prill",
        "Maj",
        "Qershor",
        "Korrik",
        "Gusht",
        "Shtator",
        "Tetor",
        "N\xEBntor",
        "Dhjetor"
      ]
    },
    firstDayOfWeek: 1,
    rangeSeparator: " deri ",
    weekAbbreviation: "Java",
    yearAriaLabel: "Viti",
    monthAriaLabel: "Muaji",
    hourAriaLabel: "Ora",
    minuteAriaLabel: "Minuta",
    time_24hr: true
  };
  fp.l10ns.sq = Albanian;
  var sq_default = fp.l10ns;
  return __toCommonJS(sq_exports);
})();
