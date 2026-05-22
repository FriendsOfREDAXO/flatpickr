"use strict";
var l10n_ko = (() => {
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

  // src/l10n/ko.ts
  var ko_exports = {};
  __export(ko_exports, {
    Korean: () => Korean,
    default: () => ko_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Korean = {
    weekdays: {
      shorthand: ["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"],
      longhand: [
        "\uC77C\uC694\uC77C",
        "\uC6D4\uC694\uC77C",
        "\uD654\uC694\uC77C",
        "\uC218\uC694\uC77C",
        "\uBAA9\uC694\uC77C",
        "\uAE08\uC694\uC77C",
        "\uD1A0\uC694\uC77C"
      ]
    },
    months: {
      shorthand: [
        "1\uC6D4",
        "2\uC6D4",
        "3\uC6D4",
        "4\uC6D4",
        "5\uC6D4",
        "6\uC6D4",
        "7\uC6D4",
        "8\uC6D4",
        "9\uC6D4",
        "10\uC6D4",
        "11\uC6D4",
        "12\uC6D4"
      ],
      longhand: [
        "1\uC6D4",
        "2\uC6D4",
        "3\uC6D4",
        "4\uC6D4",
        "5\uC6D4",
        "6\uC6D4",
        "7\uC6D4",
        "8\uC6D4",
        "9\uC6D4",
        "10\uC6D4",
        "11\uC6D4",
        "12\uC6D4"
      ]
    },
    ordinal: () => {
      return "\uC77C";
    },
    rangeSeparator: " ~ ",
    amPM: ["\uC624\uC804", "\uC624\uD6C4"]
  };
  fp.l10ns.ko = Korean;
  var ko_default = fp.l10ns;
  return __toCommonJS(ko_exports);
})();
