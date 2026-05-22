"use strict";
var l10n_hr = (() => {
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

  // src/l10n/hr.ts
  var hr_exports = {};
  __export(hr_exports, {
    Croatian: () => Croatian,
    default: () => hr_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Croatian = {
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
        "Sij",
        "Velj",
        "O\u017Eu",
        "Tra",
        "Svi",
        "Lip",
        "Srp",
        "Kol",
        "Ruj",
        "Lis",
        "Stu",
        "Pro"
      ],
      longhand: [
        "Sije\u010Danj",
        "Velja\u010Da",
        "O\u017Eujak",
        "Travanj",
        "Svibanj",
        "Lipanj",
        "Srpanj",
        "Kolovoz",
        "Rujan",
        "Listopad",
        "Studeni",
        "Prosinac"
      ]
    },
    time_24hr: true
  };
  fp.l10ns.hr = Croatian;
  var hr_default = fp.l10ns;
  return __toCommonJS(hr_exports);
})();
