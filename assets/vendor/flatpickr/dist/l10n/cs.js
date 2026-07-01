"use strict";
var l10n_cs = (() => {
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

  // src/l10n/cs.ts
  var cs_exports = {};
  __export(cs_exports, {
    Czech: () => Czech,
    default: () => cs_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Czech = {
    weekdays: {
      shorthand: ["Ne", "Po", "\xDAt", "St", "\u010Ct", "P\xE1", "So"],
      longhand: [
        "Ned\u011Ble",
        "Pond\u011Bl\xED",
        "\xDAter\xFD",
        "St\u0159eda",
        "\u010Ctvrtek",
        "P\xE1tek",
        "Sobota"
      ]
    },
    months: {
      shorthand: [
        "Led",
        "\xDAn",
        "B\u0159e",
        "Dub",
        "Kv\u011B",
        "\u010Cer",
        "\u010Cvc",
        "Srp",
        "Z\xE1\u0159",
        "\u0158\xEDj",
        "Lis",
        "Pro"
      ],
      longhand: [
        "Leden",
        "\xDAnor",
        "B\u0159ezen",
        "Duben",
        "Kv\u011Bten",
        "\u010Cerven",
        "\u010Cervenec",
        "Srpen",
        "Z\xE1\u0159\xED",
        "\u0158\xEDjen",
        "Listopad",
        "Prosinec"
      ]
    },
    firstDayOfWeek: 1,
    ordinal: function() {
      return ".";
    },
    rangeSeparator: " do ",
    weekAbbreviation: "T\xFDd.",
    scrollTitle: "Rolujte pro zm\u011Bnu",
    toggleTitle: "P\u0159epnout dopoledne/odpoledne",
    amPM: ["dop.", "odp."],
    yearAriaLabel: "Rok",
    time_24hr: true
  };
  fp.l10ns.cs = Czech;
  var cs_default = fp.l10ns;
  return __toCommonJS(cs_exports);
})();
