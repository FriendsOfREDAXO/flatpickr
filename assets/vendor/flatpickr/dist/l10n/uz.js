"use strict";
var l10n_uz = (() => {
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

  // src/l10n/uz.ts
  var uz_exports = {};
  __export(uz_exports, {
    Uzbek: () => Uzbek,
    default: () => uz_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Uzbek = {
    weekdays: {
      shorthand: ["\u042F\u043A\u0448", "\u0414\u0443\u0448", "\u0421\u0435\u0448", "\u0427\u043E\u0440", "\u041F\u0430\u0439", "\u0416\u0443\u043C", "\u0428\u0430\u043D"],
      longhand: [
        "\u042F\u043A\u0448\u0430\u043D\u0431\u0430",
        "\u0414\u0443\u0448\u0430\u043D\u0431\u0430",
        "\u0421\u0435\u0448\u0430\u043D\u0431\u0430",
        "\u0427\u043E\u0440\u0448\u0430\u043D\u0431\u0430",
        "\u041F\u0430\u0439\u0448\u0430\u043D\u0431\u0430",
        "\u0416\u0443\u043C\u0430",
        "\u0428\u0430\u043D\u0431\u0430"
      ]
    },
    months: {
      shorthand: [
        "\u042F\u043D\u0432",
        "\u0424\u0435\u0432",
        "\u041C\u0430\u0440",
        "\u0410\u043F\u0440",
        "\u041C\u0430\u0439",
        "\u0418\u044E\u043D",
        "\u0418\u044E\u043B",
        "\u0410\u0432\u0433",
        "\u0421\u0435\u043D",
        "\u041E\u043A\u0442",
        "\u041D\u043E\u044F",
        "\u0414\u0435\u043A"
      ],
      longhand: [
        "\u042F\u043D\u0432\u0430\u0440",
        "\u0424\u0435\u0432\u0440\u0430\u043B",
        "\u041C\u0430\u0440\u0442",
        "\u0410\u043F\u0440\u0435\u043B",
        "\u041C\u0430\u0439",
        "\u0418\u044E\u043D",
        "\u0418\u044E\u043B",
        "\u0410\u0432\u0433\u0443\u0441\u0442",
        "\u0421\u0435\u043D\u0442\u044F\u0431\u0440",
        "\u041E\u043A\u0442\u044F\u0431\u0440",
        "\u041D\u043E\u044F\u0431\u0440",
        "\u0414\u0435\u043A\u0430\u0431\u0440"
      ]
    },
    firstDayOfWeek: 1,
    ordinal: function() {
      return "";
    },
    rangeSeparator: " \u2014 ",
    weekAbbreviation: "\u04B2\u0430\u0444\u0442\u0430",
    scrollTitle: "\u041A\u0430\u0442\u0442\u0430\u043B\u0430\u0448\u0442\u0438\u0440\u0438\u0448 \u0443\u0447\u0443\u043D \u0430\u0439\u043B\u0430\u043D\u0442\u0438\u0440\u0438\u043D\u0433",
    toggleTitle: "\u040E\u0442\u0438\u0448 \u0443\u0447\u0443\u043D \u0431\u043E\u0441\u0438\u043D\u0433",
    amPM: ["AM", "PM"],
    yearAriaLabel: "\u0419\u0438\u043B",
    time_24hr: true
  };
  fp.l10ns.uz = Uzbek;
  var uz_default = fp.l10ns;
  return __toCommonJS(uz_exports);
})();
