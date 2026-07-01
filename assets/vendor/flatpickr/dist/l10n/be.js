"use strict";
var l10n_be = (() => {
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

  // src/l10n/be.ts
  var be_exports = {};
  __export(be_exports, {
    Belarusian: () => Belarusian,
    default: () => be_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Belarusian = {
    weekdays: {
      shorthand: ["\u041D\u0434", "\u041F\u043D", "\u0410\u045E", "\u0421\u0440", "\u0427\u0446", "\u041F\u0442", "\u0421\u0431"],
      longhand: [
        "\u041D\u044F\u0434\u0437\u0435\u043B\u044F",
        "\u041F\u0430\u043D\u044F\u0434\u0437\u0435\u043B\u0430\u043A",
        "\u0410\u045E\u0442\u043E\u0440\u0430\u043A",
        "\u0421\u0435\u0440\u0430\u0434\u0430",
        "\u0427\u0430\u0446\u0432\u0435\u0440",
        "\u041F\u044F\u0442\u043D\u0456\u0446\u0430",
        "\u0421\u0443\u0431\u043E\u0442\u0430"
      ]
    },
    months: {
      shorthand: [
        "\u0421\u0442\u0443",
        "\u041B\u044E\u0442",
        "\u0421\u0430\u043A",
        "\u041A\u0440\u0430",
        "\u0422\u0440\u0430",
        "\u0427\u044D\u0440",
        "\u041B\u0456\u043F",
        "\u0416\u043D\u0456",
        "\u0412\u0435\u0440",
        "\u041A\u0430\u0441",
        "\u041B\u0456\u0441",
        "\u0421\u043D\u0435"
      ],
      longhand: [
        "\u0421\u0442\u0443\u0434\u0437\u0435\u043D\u044C",
        "\u041B\u044E\u0442\u044B",
        "\u0421\u0430\u043A\u0430\u0432\u0456\u043A",
        "\u041A\u0440\u0430\u0441\u0430\u0432\u0456\u043A",
        "\u0422\u0440\u0430\u0432\u0435\u043D\u044C",
        "\u0427\u044D\u0440\u0432\u0435\u043D\u044C",
        "\u041B\u0456\u043F\u0435\u043D\u044C",
        "\u0416\u043D\u0456\u0432\u0435\u043D\u044C",
        "\u0412\u0435\u0440\u0430\u0441\u0435\u043D\u044C",
        "\u041A\u0430\u0441\u0442\u0440\u044B\u0447\u043D\u0456\u043A",
        "\u041B\u0456\u0441\u0442\u0430\u043F\u0430\u0434",
        "\u0421\u043D\u0435\u0436\u0430\u043D\u044C"
      ]
    },
    firstDayOfWeek: 1,
    ordinal: function() {
      return "";
    },
    rangeSeparator: " \u2014 ",
    weekAbbreviation: "\u0422\u044B\u0434.",
    scrollTitle: "\u041F\u0440\u0430\u043A\u0440\u0443\u0446\u0456\u0446\u0435 \u0434\u043B\u044F \u043F\u0430\u0432\u0435\u043B\u0456\u0447\u044D\u043D\u043D\u044F",
    toggleTitle: "\u041D\u0430\u0446\u0456\u0441\u043D\u0456\u0446\u0435 \u0434\u043B\u044F \u043F\u0435\u0440\u0430\u043A\u043B\u044E\u0447\u044D\u043D\u043D\u044F",
    amPM: ["\u0414\u041F", "\u041F\u041F"],
    yearAriaLabel: "\u0413\u043E\u0434",
    time_24hr: true
  };
  fp.l10ns.be = Belarusian;
  var be_default = fp.l10ns;
  return __toCommonJS(be_exports);
})();
