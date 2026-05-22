"use strict";
var l10n_he = (() => {
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

  // src/l10n/he.ts
  var he_exports = {};
  __export(he_exports, {
    Hebrew: () => Hebrew,
    default: () => he_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Hebrew = {
    weekdays: {
      shorthand: ["\u05D0", "\u05D1", "\u05D2", "\u05D3", "\u05D4", "\u05D5", "\u05E9"],
      longhand: ["\u05E8\u05D0\u05E9\u05D5\u05DF", "\u05E9\u05E0\u05D9", "\u05E9\u05DC\u05D9\u05E9\u05D9", "\u05E8\u05D1\u05D9\u05E2\u05D9", "\u05D7\u05DE\u05D9\u05E9\u05D9", "\u05E9\u05D9\u05E9\u05D9", "\u05E9\u05D1\u05EA"]
    },
    months: {
      shorthand: [
        "\u05D9\u05E0\u05D5\u05F3",
        "\u05E4\u05D1\u05E8\u05F3",
        "\u05DE\u05E8\u05E5",
        "\u05D0\u05E4\u05E8\u05F3",
        "\u05DE\u05D0\u05D9",
        "\u05D9\u05D5\u05E0\u05D9",
        "\u05D9\u05D5\u05DC\u05D9",
        "\u05D0\u05D5\u05D2\u05F3",
        "\u05E1\u05E4\u05D8\u05F3",
        "\u05D0\u05D5\u05E7\u05F3",
        "\u05E0\u05D5\u05D1\u05F3",
        "\u05D3\u05E6\u05DE\u05F3"
      ],
      longhand: [
        "\u05D9\u05E0\u05D5\u05D0\u05E8",
        "\u05E4\u05D1\u05E8\u05D5\u05D0\u05E8",
        "\u05DE\u05E8\u05E5",
        "\u05D0\u05E4\u05E8\u05D9\u05DC",
        "\u05DE\u05D0\u05D9",
        "\u05D9\u05D5\u05E0\u05D9",
        "\u05D9\u05D5\u05DC\u05D9",
        "\u05D0\u05D5\u05D2\u05D5\u05E1\u05D8",
        "\u05E1\u05E4\u05D8\u05DE\u05D1\u05E8",
        "\u05D0\u05D5\u05E7\u05D8\u05D5\u05D1\u05E8",
        "\u05E0\u05D5\u05D1\u05DE\u05D1\u05E8",
        "\u05D3\u05E6\u05DE\u05D1\u05E8"
      ]
    },
    rangeSeparator: " \u05D0\u05DC ",
    time_24hr: true
  };
  fp.l10ns.he = Hebrew;
  var he_default = fp.l10ns;
  return __toCommonJS(he_exports);
})();
