"use strict";
var l10n_uk = (() => {
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

  // src/l10n/uk.ts
  var uk_exports = {};
  __export(uk_exports, {
    Ukrainian: () => Ukrainian,
    default: () => uk_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Ukrainian = {
    firstDayOfWeek: 1,
    weekdays: {
      shorthand: ["\u041D\u0434", "\u041F\u043D", "\u0412\u0442", "\u0421\u0440", "\u0427\u0442", "\u041F\u0442", "\u0421\u0431"],
      longhand: [
        "\u041D\u0435\u0434\u0456\u043B\u044F",
        "\u041F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A",
        "\u0412\u0456\u0432\u0442\u043E\u0440\u043E\u043A",
        "\u0421\u0435\u0440\u0435\u0434\u0430",
        "\u0427\u0435\u0442\u0432\u0435\u0440",
        "\u041F'\u044F\u0442\u043D\u0438\u0446\u044F",
        "\u0421\u0443\u0431\u043E\u0442\u0430"
      ]
    },
    months: {
      shorthand: [
        "\u0421\u0456\u0447",
        "\u041B\u044E\u0442",
        "\u0411\u0435\u0440",
        "\u041A\u0432\u0456",
        "\u0422\u0440\u0430",
        "\u0427\u0435\u0440",
        "\u041B\u0438\u043F",
        "\u0421\u0435\u0440",
        "\u0412\u0435\u0440",
        "\u0416\u043E\u0432",
        "\u041B\u0438\u0441",
        "\u0413\u0440\u0443"
      ],
      longhand: [
        "\u0421\u0456\u0447\u0435\u043D\u044C",
        "\u041B\u044E\u0442\u0438\u0439",
        "\u0411\u0435\u0440\u0435\u0437\u0435\u043D\u044C",
        "\u041A\u0432\u0456\u0442\u0435\u043D\u044C",
        "\u0422\u0440\u0430\u0432\u0435\u043D\u044C",
        "\u0427\u0435\u0440\u0432\u0435\u043D\u044C",
        "\u041B\u0438\u043F\u0435\u043D\u044C",
        "\u0421\u0435\u0440\u043F\u0435\u043D\u044C",
        "\u0412\u0435\u0440\u0435\u0441\u0435\u043D\u044C",
        "\u0416\u043E\u0432\u0442\u0435\u043D\u044C",
        "\u041B\u0438\u0441\u0442\u043E\u043F\u0430\u0434",
        "\u0413\u0440\u0443\u0434\u0435\u043D\u044C"
      ]
    },
    time_24hr: true
  };
  fp.l10ns.uk = Ukrainian;
  var uk_default = fp.l10ns;
  return __toCommonJS(uk_exports);
})();
