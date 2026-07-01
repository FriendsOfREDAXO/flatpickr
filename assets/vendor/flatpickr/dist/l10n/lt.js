"use strict";
var l10n_lt = (() => {
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

  // src/l10n/lt.ts
  var lt_exports = {};
  __export(lt_exports, {
    Lithuanian: () => Lithuanian,
    default: () => lt_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Lithuanian = {
    weekdays: {
      shorthand: ["S", "Pr", "A", "T", "K", "Pn", "\u0160"],
      longhand: [
        "Sekmadienis",
        "Pirmadienis",
        "Antradienis",
        "Tre\u010Diadienis",
        "Ketvirtadienis",
        "Penktadienis",
        "\u0160e\u0161tadienis"
      ]
    },
    months: {
      shorthand: [
        "Sau",
        "Vas",
        "Kov",
        "Bal",
        "Geg",
        "Bir",
        "Lie",
        "Rgp",
        "Rgs",
        "Spl",
        "Lap",
        "Grd"
      ],
      longhand: [
        "Sausis",
        "Vasaris",
        "Kovas",
        "Balandis",
        "Gegu\u017E\u0117",
        "Bir\u017Eelis",
        "Liepa",
        "Rugpju\u0304tis",
        "Rugse\u0307jis",
        "Spalis",
        "Lapkritis",
        "Gruodis"
      ]
    },
    firstDayOfWeek: 1,
    ordinal: function() {
      return "-a";
    },
    rangeSeparator: " iki ",
    weekAbbreviation: "Sav",
    scrollTitle: "Keisti laik\u0105 pel\u0117s rateliu",
    toggleTitle: "Perjungti laiko format\u0105",
    time_24hr: true
  };
  fp.l10ns.lt = Lithuanian;
  var lt_default = fp.l10ns;
  return __toCommonJS(lt_exports);
})();
