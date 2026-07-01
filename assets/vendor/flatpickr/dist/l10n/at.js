"use strict";
var l10n_at = (() => {
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

  // src/l10n/at.ts
  var at_exports = {};
  __export(at_exports, {
    Austria: () => Austria,
    default: () => at_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Austria = {
    weekdays: {
      shorthand: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
      longhand: [
        "Sonntag",
        "Montag",
        "Dienstag",
        "Mittwoch",
        "Donnerstag",
        "Freitag",
        "Samstag"
      ]
    },
    months: {
      shorthand: [
        "J\xE4n",
        "Feb",
        "M\xE4r",
        "Apr",
        "Mai",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Okt",
        "Nov",
        "Dez"
      ],
      longhand: [
        "J\xE4nner",
        "Februar",
        "M\xE4rz",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "Dezember"
      ]
    },
    firstDayOfWeek: 1,
    weekAbbreviation: "KW",
    rangeSeparator: " bis ",
    scrollTitle: "Zum \xC4ndern scrollen",
    toggleTitle: "Zum Umschalten klicken",
    time_24hr: true
  };
  fp.l10ns.at = Austria;
  var at_default = fp.l10ns;
  return __toCommonJS(at_exports);
})();
