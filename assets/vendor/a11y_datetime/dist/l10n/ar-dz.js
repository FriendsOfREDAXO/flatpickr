"use strict";
var l10n_ar_dz = (() => {
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

  // src/l10n/ar-dz.ts
  var ar_dz_exports = {};
  __export(ar_dz_exports, {
    AlgerianArabic: () => AlgerianArabic,
    default: () => ar_dz_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var AlgerianArabic = {
    weekdays: {
      shorthand: ["\u0623\u062D\u062F", "\u0627\u062B\u0646\u064A\u0646", "\u062B\u0644\u0627\u062B\u0627\u0621", "\u0623\u0631\u0628\u0639\u0627\u0621", "\u062E\u0645\u064A\u0633", "\u062C\u0645\u0639\u0629", "\u0633\u0628\u062A"],
      longhand: [
        "\u0627\u0644\u0623\u062D\u062F",
        "\u0627\u0644\u0627\u062B\u0646\u064A\u0646",
        "\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621",
        "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621",
        "\u0627\u0644\u062E\u0645\u064A\u0633",
        "\u0627\u0644\u062C\u0645\u0639\u0629",
        "\u0627\u0644\u0633\u0628\u062A"
      ]
    },
    months: {
      shorthand: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
      longhand: [
        "\u062C\u0627\u0646\u0641\u064A",
        "\u0641\u064A\u0641\u0631\u064A",
        "\u0645\u0627\u0631\u0633",
        "\u0623\u0641\u0631\u064A\u0644",
        "\u0645\u0627\u064A",
        "\u062C\u0648\u0627\u0646",
        "\u062C\u0648\u064A\u0644\u064A\u0647",
        "\u0623\u0648\u062A",
        "\u0633\u0628\u062A\u0645\u0628\u0631",
        "\u0623\u0643\u062A\u0648\u0628\u0631",
        "\u0646\u0648\u0641\u0645\u0628\u0631",
        "\u062F\u064A\u0633\u0645\u0628\u0631"
      ]
    },
    firstDayOfWeek: 0,
    rangeSeparator: " \u0625\u0644\u0649 ",
    weekAbbreviation: "Wk",
    scrollTitle: "\u0642\u0645 \u0628\u0627\u0644\u062A\u0645\u0631\u064A\u0631 \u0644\u0644\u0632\u064A\u0627\u062F\u0629",
    toggleTitle: "\u0627\u0636\u063A\u0637 \u0644\u0644\u062A\u0628\u062F\u064A\u0644",
    yearAriaLabel: "\u0633\u0646\u0629",
    monthAriaLabel: "\u0634\u0647\u0631",
    hourAriaLabel: "\u0633\u0627\u0639\u0629",
    minuteAriaLabel: "\u062F\u0642\u064A\u0642\u0629",
    time_24hr: true
  };
  fp.l10ns.ar = AlgerianArabic;
  var ar_dz_default = fp.l10ns;
  return __toCommonJS(ar_dz_exports);
})();
