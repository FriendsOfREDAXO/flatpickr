"use strict";
var l10n_ja = (() => {
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

  // src/l10n/ja.ts
  var ja_exports = {};
  __export(ja_exports, {
    Japanese: () => Japanese,
    default: () => ja_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Japanese = {
    weekdays: {
      shorthand: ["\u65E5", "\u6708", "\u706B", "\u6C34", "\u6728", "\u91D1", "\u571F"],
      longhand: [
        "\u65E5\u66DC\u65E5",
        "\u6708\u66DC\u65E5",
        "\u706B\u66DC\u65E5",
        "\u6C34\u66DC\u65E5",
        "\u6728\u66DC\u65E5",
        "\u91D1\u66DC\u65E5",
        "\u571F\u66DC\u65E5"
      ]
    },
    months: {
      shorthand: [
        "1\u6708",
        "2\u6708",
        "3\u6708",
        "4\u6708",
        "5\u6708",
        "6\u6708",
        "7\u6708",
        "8\u6708",
        "9\u6708",
        "10\u6708",
        "11\u6708",
        "12\u6708"
      ],
      longhand: [
        "1\u6708",
        "2\u6708",
        "3\u6708",
        "4\u6708",
        "5\u6708",
        "6\u6708",
        "7\u6708",
        "8\u6708",
        "9\u6708",
        "10\u6708",
        "11\u6708",
        "12\u6708"
      ]
    },
    time_24hr: true,
    rangeSeparator: " \u304B\u3089 ",
    monthAriaLabel: "\u6708",
    amPM: ["\u5348\u524D", "\u5348\u5F8C"],
    yearAriaLabel: "\u5E74",
    hourAriaLabel: "\u6642\u9593",
    minuteAriaLabel: "\u5206"
  };
  fp.l10ns.ja = Japanese;
  var ja_default = fp.l10ns;
  return __toCommonJS(ja_exports);
})();
