"use strict";
var l10n_mn = (() => {
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

  // src/l10n/mn.ts
  var mn_exports = {};
  __export(mn_exports, {
    Mongolian: () => Mongolian,
    default: () => mn_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Mongolian = {
    firstDayOfWeek: 1,
    weekdays: {
      shorthand: ["\u0414\u0430", "\u041C\u044F", "\u041B\u0445", "\u041F\u04AF", "\u0411\u0430", "\u0411\u044F", "\u041D\u044F"],
      longhand: ["\u0414\u0430\u0432\u0430\u0430", "\u041C\u044F\u0433\u043C\u0430\u0440", "\u041B\u0445\u0430\u0433\u0432\u0430", "\u041F\u04AF\u0440\u044D\u0432", "\u0411\u0430\u0430\u0441\u0430\u043D", "\u0411\u044F\u043C\u0431\u0430", "\u041D\u044F\u043C"]
    },
    months: {
      shorthand: [
        "1-\u0440 \u0441\u0430\u0440",
        "2-\u0440 \u0441\u0430\u0440",
        "3-\u0440 \u0441\u0430\u0440",
        "4-\u0440 \u0441\u0430\u0440",
        "5-\u0440 \u0441\u0430\u0440",
        "6-\u0440 \u0441\u0430\u0440",
        "7-\u0440 \u0441\u0430\u0440",
        "8-\u0440 \u0441\u0430\u0440",
        "9-\u0440 \u0441\u0430\u0440",
        "10-\u0440 \u0441\u0430\u0440",
        "11-\u0440 \u0441\u0430\u0440",
        "12-\u0440 \u0441\u0430\u0440"
      ],
      longhand: [
        "\u041D\u044D\u0433\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440",
        "\u0425\u043E\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440",
        "\u0413\u0443\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440",
        "\u0414\u04E9\u0440\u04E9\u0432\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440",
        "\u0422\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440",
        "\u0417\u0443\u0440\u0433\u0430\u0430\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440",
        "\u0414\u043E\u043B\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440",
        "\u041D\u0430\u0439\u043C\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440",
        "\u0415\u0441\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440",
        "\u0410\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440",
        "\u0410\u0440\u0432\u0430\u043D\u043D\u044D\u0433\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440",
        "\u0410\u0440\u0432\u0430\u043D\u0445\u043E\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440"
      ]
    },
    rangeSeparator: "-\u0441 ",
    time_24hr: true
  };
  fp.l10ns.mn = Mongolian;
  var mn_default = fp.l10ns;
  return __toCommonJS(mn_exports);
})();
