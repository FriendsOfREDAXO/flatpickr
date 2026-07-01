"use strict";
var l10n_nn = (() => {
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

  // src/l10n/nn.ts
  var nn_exports = {};
  __export(nn_exports, {
    NorwegianNynorsk: () => NorwegianNynorsk,
    default: () => nn_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var NorwegianNynorsk = {
    weekdays: {
      shorthand: ["S\xF8.", "M\xE5.", "Ty.", "On.", "To.", "Fr.", "La."],
      longhand: [
        "S\xF8ndag",
        "M\xE5ndag",
        "Tysdag",
        "Onsdag",
        "Torsdag",
        "Fredag",
        "Laurdag"
      ]
    },
    months: {
      shorthand: [
        "Jan",
        "Feb",
        "Mars",
        "Apr",
        "Mai",
        "Juni",
        "Juli",
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
    weekAbbreviation: "Veke",
    scrollTitle: "Scroll for \xE5 endre",
    toggleTitle: "Klikk for \xE5 veksle",
    time_24hr: true,
    ordinal: () => {
      return ".";
    }
  };
  fp.l10ns.nn = NorwegianNynorsk;
  var nn_default = fp.l10ns;
  return __toCommonJS(nn_exports);
})();
