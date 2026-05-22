"use strict";
var l10n_no = (() => {
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

  // src/l10n/no.ts
  var no_exports = {};
  __export(no_exports, {
    Norwegian: () => Norwegian,
    default: () => no_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Norwegian = {
    weekdays: {
      shorthand: ["S\xF8n", "Man", "Tir", "Ons", "Tor", "Fre", "L\xF8r"],
      longhand: [
        "S\xF8ndag",
        "Mandag",
        "Tirsdag",
        "Onsdag",
        "Torsdag",
        "Fredag",
        "L\xF8rdag"
      ]
    },
    months: {
      shorthand: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Mai",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Okt",
        "Nov",
        "Des"
      ],
      longhand: [
        "Januar",
        "Februar",
        "Mars",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "Desember"
      ]
    },
    firstDayOfWeek: 1,
    rangeSeparator: " til ",
    weekAbbreviation: "Uke",
    scrollTitle: "Scroll for \xE5 endre",
    toggleTitle: "Klikk for \xE5 veksle",
    time_24hr: true,
    ordinal: () => {
      return ".";
    }
  };
  fp.l10ns.no = Norwegian;
  var no_default = fp.l10ns;
  return __toCommonJS(no_exports);
})();
