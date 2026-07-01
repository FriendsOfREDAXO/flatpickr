"use strict";
var l10n_kz = (() => {
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

  // src/l10n/kz.ts
  var kz_exports = {};
  __export(kz_exports, {
    Kazakh: () => Kazakh,
    default: () => kz_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Kazakh = {
    weekdays: {
      shorthand: ["\u0416\u0441", "\u0414\u0441", "\u0421c", "\u0421\u0440", "\u0411\u0441", "\u0416\u043C", "\u0421\u0431"],
      longhand: [
        "\u0416\u0435\u043A\u0441\u0435\u043D\u0431i",
        "\u0414\u04AF\u0439\u0441\u0435\u043D\u0431i",
        "\u0421\u0435\u0439\u0441\u0435\u043D\u0431i",
        "\u0421\u04D9\u0440\u0441\u0435\u043D\u0431i",
        "\u0411\u0435\u0439\u0441\u0435\u043D\u0431i",
        "\u0416\u04B1\u043C\u0430",
        "\u0421\u0435\u043D\u0431i"
      ]
    },
    months: {
      shorthand: [
        "\u049A\u0430\u04A3",
        "\u0410\u049B\u043F",
        "\u041D\u0430\u0443",
        "\u0421\u04D9\u0443",
        "\u041C\u0430\u043C",
        "\u041C\u0430\u0443",
        "\u0428i\u043B",
        "\u0422\u0430\u043C",
        "\u049A\u044B\u0440",
        "\u049A\u0430\u0437",
        "\u049A\u0430\u0440",
        "\u0416\u0435\u043B"
      ],
      longhand: [
        "\u049A\u0430\u04A3\u0442\u0430\u0440",
        "\u0410\u049B\u043F\u0430\u043D",
        "\u041D\u0430\u0443\u0440\u044B\u0437",
        "\u0421\u04D9\u0443i\u0440",
        "\u041C\u0430\u043C\u044B\u0440",
        "\u041C\u0430\u0443\u0441\u044B\u043C",
        "\u0428i\u043B\u0434\u0435",
        "\u0422\u0430\u043C\u044B\u0437",
        "\u049A\u044B\u0440\u043A\u04AF\u0439\u0435\u043A",
        "\u049A\u0430\u0437\u0430\u043D",
        "\u049A\u0430\u0440\u0430\u0448\u0430",
        "\u0416\u0435\u043B\u0442\u043E\u049B\u0441\u0430\u043D"
      ]
    },
    firstDayOfWeek: 1,
    ordinal: function() {
      return "";
    },
    rangeSeparator: " \u2014 ",
    weekAbbreviation: "\u0410\u043F\u0442\u0430",
    scrollTitle: "\u04AE\u043B\u043A\u0435\u0439\u0442\u0443 \u04AF\u0448\u0456\u043D \u0430\u0439\u043D\u0430\u043B\u0434\u044B\u0440\u044B\u04A3\u044B\u0437",
    toggleTitle: "\u0410\u0443\u044B\u0441\u0442\u044B\u0440\u0443 \u04AF\u0448\u0456\u043D \u0431\u0430\u0441\u044B\u04A3\u044B\u0437",
    amPM: ["\u0422\u0414", "\u0422\u041A"],
    yearAriaLabel: "\u0416\u044B\u043B"
  };
  fp.l10ns.kz = Kazakh;
  var kz_default = fp.l10ns;
  return __toCommonJS(kz_exports);
})();
