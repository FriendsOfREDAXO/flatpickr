"use strict";
var l10n_fr = (() => {
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

  // src/l10n/fr.ts
  var fr_exports = {};
  __export(fr_exports, {
    French: () => French,
    default: () => fr_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var French = {
    firstDayOfWeek: 1,
    weekdays: {
      shorthand: ["dim", "lun", "mar", "mer", "jeu", "ven", "sam"],
      longhand: [
        "dimanche",
        "lundi",
        "mardi",
        "mercredi",
        "jeudi",
        "vendredi",
        "samedi"
      ]
    },
    months: {
      shorthand: [
        "janv",
        "f\xE9vr",
        "mars",
        "avr",
        "mai",
        "juin",
        "juil",
        "ao\xFBt",
        "sept",
        "oct",
        "nov",
        "d\xE9c"
      ],
      longhand: [
        "janvier",
        "f\xE9vrier",
        "mars",
        "avril",
        "mai",
        "juin",
        "juillet",
        "ao\xFBt",
        "septembre",
        "octobre",
        "novembre",
        "d\xE9cembre"
      ]
    },
    ordinal: (nth) => {
      if (nth > 1)
        return "";
      return "er";
    },
    rangeSeparator: " au ",
    weekAbbreviation: "Sem",
    scrollTitle: "D\xE9filer pour augmenter la valeur",
    toggleTitle: "Cliquer pour basculer",
    time_24hr: true
  };
  fp.l10ns.fr = French;
  var fr_default = fp.l10ns;
  return __toCommonJS(fr_exports);
})();
