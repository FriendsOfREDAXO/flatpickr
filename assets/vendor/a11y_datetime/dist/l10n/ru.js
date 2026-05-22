"use strict";
var l10n_ru = (() => {
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

  // src/l10n/ru.ts
  var ru_exports = {};
  __export(ru_exports, {
    Russian: () => Russian,
    default: () => ru_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Russian = {
    weekdays: {
      shorthand: ["\u0412\u0441", "\u041F\u043D", "\u0412\u0442", "\u0421\u0440", "\u0427\u0442", "\u041F\u0442", "\u0421\u0431"],
      longhand: [
        "\u0412\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435",
        "\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A",
        "\u0412\u0442\u043E\u0440\u043D\u0438\u043A",
        "\u0421\u0440\u0435\u0434\u0430",
        "\u0427\u0435\u0442\u0432\u0435\u0440\u0433",
        "\u041F\u044F\u0442\u043D\u0438\u0446\u0430",
        "\u0421\u0443\u0431\u0431\u043E\u0442\u0430"
      ]
    },
    months: {
      shorthand: [
        "\u042F\u043D\u0432",
        "\u0424\u0435\u0432",
        "\u041C\u0430\u0440\u0442",
        "\u0410\u043F\u0440",
        "\u041C\u0430\u0439",
        "\u0418\u044E\u043D\u044C",
        "\u0418\u044E\u043B\u044C",
        "\u0410\u0432\u0433",
        "\u0421\u0435\u043D",
        "\u041E\u043A\u0442",
        "\u041D\u043E\u044F",
        "\u0414\u0435\u043A"
      ],
      longhand: [
        "\u042F\u043D\u0432\u0430\u0440\u044C",
        "\u0424\u0435\u0432\u0440\u0430\u043B\u044C",
        "\u041C\u0430\u0440\u0442",
        "\u0410\u043F\u0440\u0435\u043B\u044C",
        "\u041C\u0430\u0439",
        "\u0418\u044E\u043D\u044C",
        "\u0418\u044E\u043B\u044C",
        "\u0410\u0432\u0433\u0443\u0441\u0442",
        "\u0421\u0435\u043D\u0442\u044F\u0431\u0440\u044C",
        "\u041E\u043A\u0442\u044F\u0431\u0440\u044C",
        "\u041D\u043E\u044F\u0431\u0440\u044C",
        "\u0414\u0435\u043A\u0430\u0431\u0440\u044C"
      ]
    },
    firstDayOfWeek: 1,
    ordinal: function() {
      return "";
    },
    rangeSeparator: " \u2014 ",
    weekAbbreviation: "\u041D\u0435\u0434.",
    scrollTitle: "\u041F\u0440\u043E\u043A\u0440\u0443\u0442\u0438\u0442\u0435 \u0434\u043B\u044F \u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u044F",
    toggleTitle: "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F",
    amPM: ["\u0414\u041F", "\u041F\u041F"],
    yearAriaLabel: "\u0413\u043E\u0434",
    time_24hr: true
  };
  fp.l10ns.ru = Russian;
  var ru_default = fp.l10ns;
  return __toCommonJS(ru_exports);
})();
