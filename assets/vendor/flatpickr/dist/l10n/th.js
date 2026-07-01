"use strict";
var l10n_th = (() => {
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

  // src/l10n/th.ts
  var th_exports = {};
  __export(th_exports, {
    Thai: () => Thai,
    default: () => th_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Thai = {
    weekdays: {
      shorthand: ["\u0E2D\u0E32", "\u0E08", "\u0E2D", "\u0E1E", "\u0E1E\u0E24", "\u0E28", "\u0E2A"],
      longhand: [
        "\u0E2D\u0E32\u0E17\u0E34\u0E15\u0E22\u0E4C",
        "\u0E08\u0E31\u0E19\u0E17\u0E23\u0E4C",
        "\u0E2D\u0E31\u0E07\u0E04\u0E32\u0E23",
        "\u0E1E\u0E38\u0E18",
        "\u0E1E\u0E24\u0E2B\u0E31\u0E2A\u0E1A\u0E14\u0E35",
        "\u0E28\u0E38\u0E01\u0E23\u0E4C",
        "\u0E40\u0E2A\u0E32\u0E23\u0E4C"
      ]
    },
    months: {
      shorthand: [
        "\u0E21.\u0E04.",
        "\u0E01.\u0E1E.",
        "\u0E21\u0E35.\u0E04.",
        "\u0E40\u0E21.\u0E22.",
        "\u0E1E.\u0E04.",
        "\u0E21\u0E34.\u0E22.",
        "\u0E01.\u0E04.",
        "\u0E2A.\u0E04.",
        "\u0E01.\u0E22.",
        "\u0E15.\u0E04.",
        "\u0E1E.\u0E22.",
        "\u0E18.\u0E04."
      ],
      longhand: [
        "\u0E21\u0E01\u0E23\u0E32\u0E04\u0E21",
        "\u0E01\u0E38\u0E21\u0E20\u0E32\u0E1E\u0E31\u0E19\u0E18\u0E4C",
        "\u0E21\u0E35\u0E19\u0E32\u0E04\u0E21",
        "\u0E40\u0E21\u0E29\u0E32\u0E22\u0E19",
        "\u0E1E\u0E24\u0E29\u0E20\u0E32\u0E04\u0E21",
        "\u0E21\u0E34\u0E16\u0E38\u0E19\u0E32\u0E22\u0E19",
        "\u0E01\u0E23\u0E01\u0E0E\u0E32\u0E04\u0E21",
        "\u0E2A\u0E34\u0E07\u0E2B\u0E32\u0E04\u0E21",
        "\u0E01\u0E31\u0E19\u0E22\u0E32\u0E22\u0E19",
        "\u0E15\u0E38\u0E25\u0E32\u0E04\u0E21",
        "\u0E1E\u0E24\u0E28\u0E08\u0E34\u0E01\u0E32\u0E22\u0E19",
        "\u0E18\u0E31\u0E19\u0E27\u0E32\u0E04\u0E21"
      ]
    },
    firstDayOfWeek: 1,
    rangeSeparator: " \u0E16\u0E36\u0E07 ",
    scrollTitle: "\u0E40\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2B\u0E23\u0E37\u0E2D\u0E25\u0E14",
    toggleTitle: "\u0E04\u0E25\u0E34\u0E01\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19",
    time_24hr: true,
    ordinal: () => {
      return "";
    }
  };
  fp.l10ns.th = Thai;
  var th_default = fp.l10ns;
  return __toCommonJS(th_exports);
})();
