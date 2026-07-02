"use strict";
var l10n_zh_tw = (() => {
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

  // src/l10n/zh_tw.ts
  var zh_tw_exports = {};
  __export(zh_tw_exports, {
    MandarinTraditional: () => MandarinTraditional,
    default: () => zh_tw_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var MandarinTraditional = {
    weekdays: {
      shorthand: ["\u9031\u65E5", "\u9031\u4E00", "\u9031\u4E8C", "\u9031\u4E09", "\u9031\u56DB", "\u9031\u4E94", "\u9031\u516D"],
      longhand: [
        "\u661F\u671F\u65E5",
        "\u661F\u671F\u4E00",
        "\u661F\u671F\u4E8C",
        "\u661F\u671F\u4E09",
        "\u661F\u671F\u56DB",
        "\u661F\u671F\u4E94",
        "\u661F\u671F\u516D"
      ]
    },
    months: {
      shorthand: [
        "\u4E00\u6708",
        "\u4E8C\u6708",
        "\u4E09\u6708",
        "\u56DB\u6708",
        "\u4E94\u6708",
        "\u516D\u6708",
        "\u4E03\u6708",
        "\u516B\u6708",
        "\u4E5D\u6708",
        "\u5341\u6708",
        "\u5341\u4E00\u6708",
        "\u5341\u4E8C\u6708"
      ],
      longhand: [
        "\u4E00\u6708",
        "\u4E8C\u6708",
        "\u4E09\u6708",
        "\u56DB\u6708",
        "\u4E94\u6708",
        "\u516D\u6708",
        "\u4E03\u6708",
        "\u516B\u6708",
        "\u4E5D\u6708",
        "\u5341\u6708",
        "\u5341\u4E00\u6708",
        "\u5341\u4E8C\u6708"
      ]
    },
    rangeSeparator: " \u81F3 ",
    weekAbbreviation: "\u9031",
    scrollTitle: "\u6EFE\u52D5\u5207\u63DB",
    toggleTitle: "\u9EDE\u64CA\u5207\u63DB 12/24 \u5C0F\u6642\u6642\u5236",
    keyboardHelpAriaLabel: "\u9375\u76E4\u8AAA\u660E",
    keyboardShortcutsTitle: "\u9375\u76E4\u5FEB\u901F\u9375",
    keyboardShortcutFocus: "Tab / Shift+Tab\uFF1A\u79FB\u52D5\u7126\u9EDE",
    keyboardShortcutArrows: "\u65B9\u5411\u9375\uFF1A\u5C0E\u89BD\u65E5\u671F\u6216\u6EFE\u8F2A\u6578\u503C",
    keyboardShortcutPage: "Page Up / Page Down\uFF1A\u5728\u6EFE\u8F2A\u4E2D\u5207\u63DB\u6708\u4EFD/\u5E74\u4EFD",
    keyboardShortcutHomeEnd: "Home / End\uFF1A\u8DF3\u5230\u7B2C\u4E00\u500B/\u6700\u5F8C\u4E00\u500B\u6708\u4EFD\u6216\u5E74\u4EFD",
    keyboardShortcutSelect: "Enter / \u7A7A\u767D\u9375\uFF1A\u9078\u53D6\u6216\u78BA\u8A8D",
    keyboardShortcutEscape: "Esc\uFF1A\u95DC\u9589\u5F48\u51FA\u5C64/\u65E5\u66C6"
  };
  fp.l10ns.zh_tw = MandarinTraditional;
  var zh_tw_default = fp.l10ns;
  return __toCommonJS(zh_tw_exports);
})();
