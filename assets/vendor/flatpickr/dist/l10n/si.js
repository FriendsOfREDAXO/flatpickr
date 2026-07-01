"use strict";
var l10n_si = (() => {
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

  // src/l10n/si.ts
  var si_exports = {};
  __export(si_exports, {
    Sinhala: () => Sinhala,
    default: () => si_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Sinhala = {
    weekdays: {
      shorthand: ["\u0D89", "\u0DC3", "\u0D85", "\u0DB6", "\u0DB6\u0DCA\u200D\u0DBB", "\u0DC3\u0DD2", "\u0DC3\u0DD9"],
      longhand: [
        "\u0D89\u0DBB\u0DD2\u0DAF\u0DCF",
        "\u0DC3\u0DB3\u0DD4\u0DAF\u0DCF",
        "\u0D85\u0D9F\u0DC4\u0DBB\u0DD4\u0DC0\u0DCF\u0DAF\u0DCF",
        "\u0DB6\u0DAF\u0DCF\u0DAF\u0DCF",
        "\u0DB6\u0DCA\u200D\u0DBB\u0DC4\u0DC3\u0DCA\u0DB4\u0DAD\u0DD2\u0DB1\u0DCA\u0DAF\u0DCF",
        "\u0DC3\u0DD2\u0D9A\u0DD4\u0DBB\u0DCF\u0DAF\u0DCF",
        "\u0DC3\u0DD9\u0DB1\u0DC3\u0DD4\u0DBB\u0DCF\u0DAF\u0DCF"
      ]
    },
    months: {
      shorthand: [
        "\u0DA2\u0DB1",
        "\u0DB4\u0DD9\u0DB6",
        "\u0DB8\u0DCF\u0DBB\u0DCA",
        "\u0D85\u0DB4\u0DCA\u200D\u0DBB\u0DDA",
        "\u0DB8\u0DD0\u0DBA\u0DD2",
        "\u0DA2\u0DD4\u0DB1\u0DD2",
        "\u0DA2\u0DD6\u0DBD\u0DD2",
        "\u0D85\u0D9C\u0DDD",
        "\u0DC3\u0DD0\u0DB4\u0DCA",
        "\u0D94\u0D9A\u0DCA",
        "\u0DB1\u0DDC\u0DC0\u0DD0",
        "\u0DAF\u0DD9\u0DC3\u0DD0"
      ],
      longhand: [
        "\u0DA2\u0DB1\u0DC0\u0DCF\u0DBB\u0DD2",
        "\u0DB4\u0DD9\u0DB6\u0DBB\u0DC0\u0DCF\u0DBB\u0DD2",
        "\u0DB8\u0DCF\u0DBB\u0DCA\u0DAD\u0DD4",
        "\u0D85\u0DB4\u0DCA\u200D\u0DBB\u0DDA\u0DBD\u0DCA",
        "\u0DB8\u0DD0\u0DBA\u0DD2",
        "\u0DA2\u0DD4\u0DB1\u0DD2",
        "\u0DA2\u0DD6\u0DBD\u0DD2",
        "\u0D85\u0D9C\u0DDD\u0DC3\u0DCA\u0DAD\u0DD4",
        "\u0DC3\u0DD0\u0DB4\u0DCA\u0DAD\u0DD0\u0DB8\u0DCA\u0DB6\u0DBB\u0DCA",
        "\u0D94\u0D9A\u0DCA\u0DAD\u0DDD\u0DB6\u0DBB\u0DCA",
        "\u0DB1\u0DDC\u0DC0\u0DD0\u0DB8\u0DCA\u0DB6\u0DBB\u0DCA",
        "\u0DAF\u0DD9\u0DC3\u0DD0\u0DB8\u0DCA\u0DB6\u0DBB\u0DCA"
      ]
    },
    time_24hr: true
  };
  fp.l10ns.si = Sinhala;
  var si_default = fp.l10ns;
  return __toCommonJS(si_exports);
})();
