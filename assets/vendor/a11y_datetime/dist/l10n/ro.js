"use strict";
var l10n_ro = (() => {
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

  // src/l10n/ro.ts
  var ro_exports = {};
  __export(ro_exports, {
    Romanian: () => Romanian,
    default: () => ro_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Romanian = {
    weekdays: {
      shorthand: ["Dum", "Lun", "Mar", "Mie", "Joi", "Vin", "S\xE2m"],
      longhand: [
        "Duminic\u0103",
        "Luni",
        "Mar\u021Bi",
        "Miercuri",
        "Joi",
        "Vineri",
        "S\xE2mb\u0103t\u0103"
      ]
    },
    months: {
      shorthand: [
        "Ian",
        "Feb",
        "Mar",
        "Apr",
        "Mai",
        "Iun",
        "Iul",
        "Aug",
        "Sep",
        "Oct",
        "Noi",
        "Dec"
      ],
      longhand: [
        "Ianuarie",
        "Februarie",
        "Martie",
        "Aprilie",
        "Mai",
        "Iunie",
        "Iulie",
        "August",
        "Septembrie",
        "Octombrie",
        "Noiembrie",
        "Decembrie"
      ]
    },
    firstDayOfWeek: 1,
    time_24hr: true,
    ordinal: () => {
      return "";
    }
  };
  fp.l10ns.ro = Romanian;
  var ro_default = fp.l10ns;
  return __toCommonJS(ro_exports);
})();
