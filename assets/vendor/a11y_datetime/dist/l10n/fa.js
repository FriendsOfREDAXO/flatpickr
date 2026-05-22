"use strict";
var l10n_fa = (() => {
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

  // src/l10n/fa.ts
  var fa_exports = {};
  __export(fa_exports, {
    Persian: () => Persian,
    default: () => fa_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Persian = {
    weekdays: {
      shorthand: ["\u06CC\u06A9", "\u062F\u0648", "\u0633\u0647", "\u0686\u0647\u0627\u0631", "\u067E\u0646\u062C", "\u062C\u0645\u0639\u0647", "\u0634\u0646\u0628\u0647"],
      longhand: [
        "\u06CC\u06A9\u200C\u0634\u0646\u0628\u0647",
        "\u062F\u0648\u0634\u0646\u0628\u0647",
        "\u0633\u0647\u200C\u0634\u0646\u0628\u0647",
        "\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647",
        "\u067E\u0646\u0686\u200C\u0634\u0646\u0628\u0647",
        "\u062C\u0645\u0639\u0647",
        "\u0634\u0646\u0628\u0647"
      ]
    },
    months: {
      shorthand: [
        "\u0698\u0627\u0646\u0648\u06CC\u0647",
        "\u0641\u0648\u0631\u06CC\u0647",
        "\u0645\u0627\u0631\u0633",
        "\u0622\u0648\u0631\u06CC\u0644",
        "\u0645\u0647",
        "\u0698\u0648\u0626\u0646",
        "\u0698\u0648\u0626\u06CC\u0647",
        "\u0627\u0648\u062A",
        "\u0633\u067E\u062A\u0627\u0645\u0628\u0631",
        "\u0627\u06A9\u062A\u0628\u0631",
        "\u0646\u0648\u0627\u0645\u0628\u0631",
        "\u062F\u0633\u0627\u0645\u0628\u0631"
      ],
      longhand: [
        "\u0698\u0627\u0646\u0648\u06CC\u0647",
        "\u0641\u0648\u0631\u06CC\u0647",
        "\u0645\u0627\u0631\u0633",
        "\u0622\u0648\u0631\u06CC\u0644",
        "\u0645\u0647",
        "\u0698\u0648\u0626\u0646",
        "\u0698\u0648\u0626\u06CC\u0647",
        "\u0627\u0648\u062A",
        "\u0633\u067E\u062A\u0627\u0645\u0628\u0631",
        "\u0627\u06A9\u062A\u0628\u0631",
        "\u0646\u0648\u0627\u0645\u0628\u0631",
        "\u062F\u0633\u0627\u0645\u0628\u0631"
      ]
    },
    firstDayOfWeek: 6,
    ordinal: () => {
      return "";
    }
  };
  fp.l10ns.fa = Persian;
  var fa_default = fp.l10ns;
  return __toCommonJS(fa_exports);
})();
