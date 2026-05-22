"use strict";
var l10n_mk = (() => {
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

  // src/l10n/mk.ts
  var mk_exports = {};
  __export(mk_exports, {
    Macedonian: () => Macedonian,
    default: () => mk_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Macedonian = {
    weekdays: {
      shorthand: ["\u041D\u0435", "\u041F\u043E", "\u0412\u0442", "\u0421\u0440", "\u0427\u0435", "\u041F\u0435", "\u0421\u0430"],
      longhand: [
        "\u041D\u0435\u0434\u0435\u043B\u0430",
        "\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u043D\u0438\u043A",
        "\u0412\u0442\u043E\u0440\u043D\u0438\u043A",
        "\u0421\u0440\u0435\u0434\u0430",
        "\u0427\u0435\u0442\u0432\u0440\u0442\u043E\u043A",
        "\u041F\u0435\u0442\u043E\u043A",
        "\u0421\u0430\u0431\u043E\u0442\u0430"
      ]
    },
    months: {
      shorthand: [
        "\u0408\u0430\u043D",
        "\u0424\u0435\u0432",
        "\u041C\u0430\u0440",
        "\u0410\u043F\u0440",
        "\u041C\u0430\u0458",
        "\u0408\u0443\u043D",
        "\u0408\u0443\u043B",
        "\u0410\u0432\u0433",
        "\u0421\u0435\u043F",
        "\u041E\u043A\u0442",
        "\u041D\u043E\u0435",
        "\u0414\u0435\u043A"
      ],
      longhand: [
        "\u0408\u0430\u043D\u0443\u0430\u0440\u0438",
        "\u0424\u0435\u0432\u0440\u0443\u0430\u0440\u0438",
        "\u041C\u0430\u0440\u0442",
        "\u0410\u043F\u0440\u0438\u043B",
        "\u041C\u0430\u0458",
        "\u0408\u0443\u043D\u0438",
        "\u0408\u0443\u043B\u0438",
        "\u0410\u0432\u0433\u0443\u0441\u0442",
        "\u0421\u0435\u043F\u0442\u0435\u043C\u0432\u0440\u0438",
        "\u041E\u043A\u0442\u043E\u043C\u0432\u0440\u0438",
        "\u041D\u043E\u0435\u043C\u0432\u0440\u0438",
        "\u0414\u0435\u043A\u0435\u043C\u0432\u0440\u0438"
      ]
    },
    firstDayOfWeek: 1,
    weekAbbreviation: "\u041D\u0435\u0434.",
    rangeSeparator: " \u0434\u043E ",
    time_24hr: true
  };
  fp.l10ns.mk = Macedonian;
  var mk_default = fp.l10ns;
  return __toCommonJS(mk_exports);
})();
