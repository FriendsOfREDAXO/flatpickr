"use strict";
var l10n_km = (() => {
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

  // src/l10n/km.ts
  var km_exports = {};
  __export(km_exports, {
    Khmer: () => Khmer,
    default: () => km_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Khmer = {
    weekdays: {
      shorthand: ["\u17A2\u17B6\u1791\u17B7\u178F\u17D2\u1799", "\u1785\u1793\u17D2\u1791", "\u17A2\u1784\u17D2\u1782\u17B6\u179A", "\u1796\u17BB\u1792", "\u1796\u17D2\u179A\u17A0\u179F.", "\u179F\u17BB\u1780\u17D2\u179A", "\u179F\u17C5\u179A\u17CD"],
      longhand: [
        "\u17A2\u17B6\u1791\u17B7\u178F\u17D2\u1799",
        "\u1785\u1793\u17D2\u1791",
        "\u17A2\u1784\u17D2\u1782\u17B6\u179A",
        "\u1796\u17BB\u1792",
        "\u1796\u17D2\u179A\u17A0\u179F\u17D2\u1794\u178F\u17B7\u17CD",
        "\u179F\u17BB\u1780\u17D2\u179A",
        "\u179F\u17C5\u179A\u17CD"
      ]
    },
    months: {
      shorthand: [
        "\u1798\u1780\u179A\u17B6",
        "\u1780\u17BB\u1798\u17D2\u1797\u17C7",
        "\u1798\u17B8\u1793\u17B6",
        "\u1798\u17C1\u179F\u17B6",
        "\u17A7\u179F\u1797\u17B6",
        "\u1798\u17B7\u1790\u17BB\u1793\u17B6",
        "\u1780\u1780\u17D2\u1780\u178A\u17B6",
        "\u179F\u17B8\u17A0\u17B6",
        "\u1780\u1789\u17D2\u1789\u17B6",
        "\u178F\u17BB\u179B\u17B6",
        "\u179C\u17B7\u1785\u17D2\u1786\u17B7\u1780\u17B6",
        "\u1792\u17D2\u1793\u17BC"
      ],
      longhand: [
        "\u1798\u1780\u179A\u17B6",
        "\u1780\u17BB\u1798\u17D2\u1797\u17C7",
        "\u1798\u17B8\u1793\u17B6",
        "\u1798\u17C1\u179F\u17B6",
        "\u17A7\u179F\u1797\u17B6",
        "\u1798\u17B7\u1790\u17BB\u1793\u17B6",
        "\u1780\u1780\u17D2\u1780\u178A\u17B6",
        "\u179F\u17B8\u17A0\u17B6",
        "\u1780\u1789\u17D2\u1789\u17B6",
        "\u178F\u17BB\u179B\u17B6",
        "\u179C\u17B7\u1785\u17D2\u1786\u17B7\u1780\u17B6",
        "\u1792\u17D2\u1793\u17BC"
      ]
    },
    ordinal: () => {
      return "";
    },
    firstDayOfWeek: 1,
    rangeSeparator: " \u178A\u179B\u17CB ",
    weekAbbreviation: "\u179F\u1794\u17D2\u178F\u17B6\u17A0\u17CD",
    scrollTitle: "\u179A\u17C6\u1780\u17B7\u179B\u178A\u17BE\u1798\u17D2\u1794\u17B8\u1794\u1784\u17D2\u1780\u17BE\u1793",
    toggleTitle: "\u1785\u17BB\u1785\u178A\u17BE\u1798\u17D2\u1794\u17B8\u1795\u17D2\u179B\u17B6\u179F\u17CB\u1794\u17D2\u178A\u17BC\u179A",
    yearAriaLabel: "\u1786\u17D2\u1793\u17B6\u17C6",
    time_24hr: true
  };
  fp.l10ns.km = Khmer;
  var km_default = fp.l10ns;
  return __toCommonJS(km_exports);
})();
