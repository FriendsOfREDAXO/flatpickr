"use strict";
var l10n_ka = (() => {
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

  // src/l10n/ka.ts
  var ka_exports = {};
  __export(ka_exports, {
    Georgian: () => Georgian,
    default: () => ka_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Georgian = {
    weekdays: {
      shorthand: ["\u10D9\u10D5", "\u10DD\u10E0", "\u10E1\u10D0", "\u10DD\u10D7", "\u10EE\u10E3", "\u10DE\u10D0", "\u10E8\u10D0"],
      longhand: [
        "\u10D9\u10D5\u10D8\u10E0\u10D0",
        "\u10DD\u10E0\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8",
        "\u10E1\u10D0\u10DB\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8",
        "\u10DD\u10D7\u10EE\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8",
        "\u10EE\u10E3\u10D7\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8",
        "\u10DE\u10D0\u10E0\u10D0\u10E1\u10D9\u10D4\u10D5\u10D8",
        "\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8"
      ]
    },
    months: {
      shorthand: [
        "\u10D8\u10D0\u10DC",
        "\u10D7\u10D4\u10D1",
        "\u10DB\u10D0\u10E0",
        "\u10D0\u10DE\u10E0",
        "\u10DB\u10D0\u10D8",
        "\u10D8\u10D5\u10DC",
        "\u10D8\u10D5\u10DA",
        "\u10D0\u10D2\u10D5",
        "\u10E1\u10D4\u10E5",
        "\u10DD\u10E5\u10E2",
        "\u10DC\u10DD\u10D4",
        "\u10D3\u10D4\u10D9"
      ],
      longhand: [
        "\u10D8\u10D0\u10DC\u10D5\u10D0\u10E0\u10D8",
        "\u10D7\u10D4\u10D1\u10D4\u10E0\u10D5\u10D0\u10DA\u10D8",
        "\u10DB\u10D0\u10E0\u10E2\u10D8",
        "\u10D0\u10DE\u10E0\u10D8\u10DA\u10D8",
        "\u10DB\u10D0\u10D8\u10E1\u10D8",
        "\u10D8\u10D5\u10DC\u10D8\u10E1\u10D8",
        "\u10D8\u10D5\u10DA\u10D8\u10E1\u10D8",
        "\u10D0\u10D2\u10D5\u10D8\u10E1\u10E2\u10DD",
        "\u10E1\u10D4\u10E5\u10E2\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8",
        "\u10DD\u10E5\u10E2\u10DD\u10DB\u10D1\u10D4\u10E0\u10D8",
        "\u10DC\u10DD\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8",
        "\u10D3\u10D4\u10D9\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8"
      ]
    },
    firstDayOfWeek: 1,
    ordinal: function() {
      return "";
    },
    rangeSeparator: " \u2014 ",
    weekAbbreviation: "\u10D9\u10D5.",
    scrollTitle: "\u10D3\u10D0\u10E1\u10E5\u10E0\u10DD\u10DA\u10D4\u10D7 \u10D2\u10D0\u10E1\u10D0\u10D3\u10D8\u10D3\u10D4\u10D1\u10DA\u10D0\u10D3",
    toggleTitle: "\u10D3\u10D0\u10D0\u10D9\u10DA\u10D8\u10D9\u10D4\u10D7 \u10D2\u10D0\u10D3\u10D0\u10E0\u10D7\u10D5\u10D8\u10E1\u10D7\u10D5\u10D8\u10E1",
    amPM: ["AM", "PM"],
    yearAriaLabel: "\u10EC\u10D4\u10DA\u10D8",
    time_24hr: true
  };
  fp.l10ns.ka = Georgian;
  var ka_default = fp.l10ns;
  return __toCommonJS(ka_exports);
})();
