"use strict";
var l10n_gr = (() => {
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

  // src/l10n/gr.ts
  var gr_exports = {};
  __export(gr_exports, {
    Greek: () => Greek,
    default: () => gr_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Greek = {
    weekdays: {
      shorthand: ["\u039A\u03C5", "\u0394\u03B5", "\u03A4\u03C1", "\u03A4\u03B5", "\u03A0\u03AD", "\u03A0\u03B1", "\u03A3\u03AC"],
      longhand: [
        "\u039A\u03C5\u03C1\u03B9\u03B1\u03BA\u03AE",
        "\u0394\u03B5\u03C5\u03C4\u03AD\u03C1\u03B1",
        "\u03A4\u03C1\u03AF\u03C4\u03B7",
        "\u03A4\u03B5\u03C4\u03AC\u03C1\u03C4\u03B7",
        "\u03A0\u03AD\u03BC\u03C0\u03C4\u03B7",
        "\u03A0\u03B1\u03C1\u03B1\u03C3\u03BA\u03B5\u03C5\u03AE",
        "\u03A3\u03AC\u03B2\u03B2\u03B1\u03C4\u03BF"
      ]
    },
    months: {
      shorthand: [
        "\u0399\u03B1\u03BD",
        "\u03A6\u03B5\u03B2",
        "\u039C\u03AC\u03C1",
        "\u0391\u03C0\u03C1",
        "\u039C\u03AC\u03B9",
        "\u0399\u03BF\u03CD\u03BD",
        "\u0399\u03BF\u03CD\u03BB",
        "\u0391\u03CD\u03B3",
        "\u03A3\u03B5\u03C0",
        "\u039F\u03BA\u03C4",
        "\u039D\u03BF\u03AD",
        "\u0394\u03B5\u03BA"
      ],
      longhand: [
        "\u0399\u03B1\u03BD\u03BF\u03C5\u03AC\u03C1\u03B9\u03BF\u03C2",
        "\u03A6\u03B5\u03B2\u03C1\u03BF\u03C5\u03AC\u03C1\u03B9\u03BF\u03C2",
        "\u039C\u03AC\u03C1\u03C4\u03B9\u03BF\u03C2",
        "\u0391\u03C0\u03C1\u03AF\u03BB\u03B9\u03BF\u03C2",
        "\u039C\u03AC\u03B9\u03BF\u03C2",
        "\u0399\u03BF\u03CD\u03BD\u03B9\u03BF\u03C2",
        "\u0399\u03BF\u03CD\u03BB\u03B9\u03BF\u03C2",
        "\u0391\u03CD\u03B3\u03BF\u03C5\u03C3\u03C4\u03BF\u03C2",
        "\u03A3\u03B5\u03C0\u03C4\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2",
        "\u039F\u03BA\u03C4\u03CE\u03B2\u03C1\u03B9\u03BF\u03C2",
        "\u039D\u03BF\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2",
        "\u0394\u03B5\u03BA\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2"
      ]
    },
    firstDayOfWeek: 1,
    ordinal: function() {
      return "";
    },
    weekAbbreviation: "\u0395\u03B2\u03B4",
    rangeSeparator: " \u03AD\u03C9\u03C2 ",
    scrollTitle: "\u039C\u03B5\u03C4\u03B1\u03BA\u03C5\u03BB\u03AE\u03C3\u03C4\u03B5 \u03B3\u03B9\u03B1 \u03C0\u03C1\u03BF\u03C3\u03B1\u03CD\u03BE\u03B7\u03C3\u03B7",
    toggleTitle: "\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03B3\u03B9\u03B1 \u03B1\u03BB\u03BB\u03B1\u03B3\u03AE",
    amPM: ["\u03A0\u039C", "\u039C\u039C"],
    yearAriaLabel: "\u03C7\u03C1\u03CC\u03BD\u03BF\u03C2",
    monthAriaLabel: "\u03BC\u03AE\u03BD\u03B1\u03C2",
    hourAriaLabel: "\u03CE\u03C1\u03B1",
    minuteAriaLabel: "\u03BB\u03B5\u03C0\u03C4\u03CC"
  };
  fp.l10ns.gr = Greek;
  var gr_default = fp.l10ns;
  return __toCommonJS(gr_exports);
})();
