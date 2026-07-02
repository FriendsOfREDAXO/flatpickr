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
    minuteAriaLabel: "\u5206",
    keyboardHelpAriaLabel: "\u30AD\u30FC\u30DC\u30FC\u30C9\u30D8\u30EB\u30D7",
    keyboardShortcutsTitle: "\u30AD\u30FC\u30DC\u30FC\u30C9\u30B7\u30E7\u30FC\u30C8\u30AB\u30C3\u30C8",
    keyboardShortcutFocus: "Tab / Shift+Tab: \u30D5\u30A9\u30FC\u30AB\u30B9\u3092\u79FB\u52D5",
    keyboardShortcutArrows: "\u77E2\u5370\u30AD\u30FC: \u65E5\u4ED8\u307E\u305F\u306F\u30DB\u30A4\u30FC\u30EB\u306E\u5024\u3092\u79FB\u52D5",
    keyboardShortcutPage: "Page Up / Page Down: \u30DB\u30A4\u30FC\u30EB\u3067\u6708/\u5E74\u3092\u5909\u66F4",
    keyboardShortcutHomeEnd: "Home / End: \u6700\u521D/\u6700\u5F8C\u306E\u6708\u307E\u305F\u306F\u5E74\u3078",
    keyboardShortcutSelect: "Enter / Space: \u9078\u629E\u307E\u305F\u306F\u78BA\u5B9A",
    keyboardShortcutEscape: "Esc: \u30DD\u30C3\u30D7\u30AA\u30FC\u30D0\u30FC/\u30AB\u30EC\u30F3\u30C0\u30FC\u3092\u9589\u3058\u308B"
  };
  fp.l10ns.ja = Japanese;
  var ja_default = fp.l10ns;
  return __toCommonJS(ja_exports);
})();
