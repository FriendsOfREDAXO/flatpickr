"use strict";
var l10n_zh = (() => {
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

  // src/l10n/zh.ts
  var zh_exports = {};
  __export(zh_exports, {
    Mandarin: () => Mandarin,
    default: () => zh_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Mandarin = {
    weekdays: {
      shorthand: ["\u5468\u65E5", "\u5468\u4E00", "\u5468\u4E8C", "\u5468\u4E09", "\u5468\u56DB", "\u5468\u4E94", "\u5468\u516D"],
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
    weekAbbreviation: "\u5468",
    scrollTitle: "\u6EDA\u52A8\u5207\u6362",
    toggleTitle: "\u70B9\u51FB\u5207\u6362 12/24 \u5C0F\u65F6\u65F6\u5236"
  };
  fp.l10ns.zh = Mandarin;
  var zh_default = fp.l10ns;
  return __toCommonJS(zh_exports);
})();
