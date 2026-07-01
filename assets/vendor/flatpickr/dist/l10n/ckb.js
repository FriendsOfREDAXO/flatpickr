"use strict";
var l10n_ckb = (() => {
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

  // src/l10n/ckb.ts
  var ckb_exports = {};
  __export(ckb_exports, {
    Kurdish: () => Kurdish,
    default: () => ckb_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Kurdish = {
    weekdays: {
      shorthand: [
        "\u06CC\u06D5\u06A9\u0634\u06D5\u0645\u0645\u06D5",
        "\u062F\u0648\u0648\u0634\u06D5\u0645\u0645\u06D5",
        "\u0633\u06CE\u0634\u06D5\u0645\u0645\u06D5",
        "\u0686\u0648\u0627\u0631\u0634\u06D5\u0645\u0645\u06D5",
        "\u067E\u06CE\u0646\u062C\u0634\u06D5\u0645\u0645\u06D5",
        "\u0647\u06D5\u06CC\u0646\u06CC",
        "\u0634\u06D5\u0645\u0645\u06D5"
      ],
      longhand: [
        "\u06CC\u06D5\u06A9\u0634\u06D5\u0645\u0645\u06D5",
        "\u062F\u0648\u0648\u0634\u06D5\u0645\u0645\u06D5",
        "\u0633\u06CE\u0634\u06D5\u0645\u0645\u06D5",
        "\u0686\u0648\u0627\u0631\u0634\u06D5\u0645\u0645\u06D5",
        "\u067E\u06CE\u0646\u062C\u0634\u06D5\u0645\u0645\u06D5",
        "\u0647\u06D5\u06CC\u0646\u06CC",
        "\u0634\u06D5\u0645\u0645\u06D5"
      ]
    },
    months: {
      shorthand: [
        "\u0695\u06CE\u0628\u06D5\u0646\u062F\u0627\u0646",
        "\u0695\u06D5\u0634\u06D5\u0645\u06D5",
        "\u0646\u06D5\u0648\u0631\u06C6\u0632",
        "\u06AF\u0648\u06B5\u0627\u0646",
        "\u062C\u06C6\u0632\u06D5\u0631\u062F\u0627\u0646",
        "\u067E\u0648\u0648\u0634\u067E\u06D5\u0695",
        "\u06AF\u06D5\u0644\u0627\u0648\u06CE\u0698",
        "\u062E\u06D5\u0631\u0645\u0627\u0646\u0627\u0646",
        "\u0695\u06D5\u0632\u0628\u06D5\u0631",
        "\u06AF\u06D5\u06B5\u0627\u0695\u06CE\u0632\u0627\u0646",
        "\u0633\u06D5\u0631\u0645\u0627\u0648\u06D5\u0632",
        "\u0628\u06D5\u0641\u0631\u0627\u0646\u0628\u0627\u0631"
      ],
      longhand: [
        "\u0695\u06CE\u0628\u06D5\u0646\u062F\u0627\u0646",
        "\u0695\u06D5\u0634\u06D5\u0645\u06D5",
        "\u0646\u06D5\u0648\u0631\u06C6\u0632",
        "\u06AF\u0648\u06B5\u0627\u0646",
        "\u062C\u06C6\u0632\u06D5\u0631\u062F\u0627\u0646",
        "\u067E\u0648\u0648\u0634\u067E\u06D5\u0695",
        "\u06AF\u06D5\u0644\u0627\u0648\u06CE\u0698",
        "\u062E\u06D5\u0631\u0645\u0627\u0646\u0627\u0646",
        "\u0695\u06D5\u0632\u0628\u06D5\u0631",
        "\u06AF\u06D5\u06B5\u0627\u0695\u06CE\u0632\u0627\u0646",
        "\u0633\u06D5\u0631\u0645\u0627\u0648\u06D5\u0632",
        "\u0628\u06D5\u0641\u0631\u0627\u0646\u0628\u0627\u0631"
      ]
    },
    firstDayOfWeek: 6,
    ordinal: () => {
      return "";
    }
  };
  fp.l10ns.ckb = Kurdish;
  var ckb_default = fp.l10ns;
  return __toCommonJS(ckb_exports);
})();
