"use strict";
var l10n_pa = (() => {
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

  // src/l10n/pa.ts
  var pa_exports = {};
  __export(pa_exports, {
    Punjabi: () => Punjabi,
    default: () => pa_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Punjabi = {
    weekdays: {
      shorthand: ["\u0A10\u0A24", "\u0A38\u0A4B\u0A2E", "\u0A2E\u0A70\u0A17\u0A32", "\u0A2C\u0A41\u0A71\u0A27", "\u0A35\u0A40\u0A30", "\u0A38\u0A3C\u0A41\u0A71\u0A15\u0A30", "\u0A38\u0A3C\u0A28\u0A3F\u0A71\u0A1A\u0A30"],
      longhand: [
        "\u0A10\u0A24\u0A35\u0A3E\u0A30",
        "\u0A38\u0A4B\u0A2E\u0A35\u0A3E\u0A30",
        "\u0A2E\u0A70\u0A17\u0A32\u0A35\u0A3E\u0A30",
        "\u0A2C\u0A41\u0A71\u0A27\u0A35\u0A3E\u0A30",
        "\u0A35\u0A40\u0A30\u0A35\u0A3E\u0A30",
        "\u0A38\u0A3C\u0A41\u0A71\u0A15\u0A30\u0A35\u0A3E\u0A30",
        "\u0A38\u0A3C\u0A28\u0A3F\u0A71\u0A1A\u0A30\u0A35\u0A3E\u0A30"
      ]
    },
    months: {
      shorthand: [
        "\u0A1C\u0A28",
        "\u0A2B\u0A3C\u0A30",
        "\u0A2E\u0A3E\u0A30",
        "\u0A05\u0A2A\u0A4D\u0A30\u0A48",
        "\u0A2E\u0A08",
        "\u0A1C\u0A42\u0A28",
        "\u0A1C\u0A41\u0A32\u0A3E",
        "\u0A05\u0A17",
        "\u0A38\u0A24\u0A70",
        "\u0A05\u0A15",
        "\u0A28\u0A35\u0A70",
        "\u0A26\u0A38\u0A70"
      ],
      longhand: [
        "\u0A1C\u0A28\u0A35\u0A30\u0A40",
        "\u0A2B\u0A3C\u0A30\u0A35\u0A30\u0A40",
        "\u0A2E\u0A3E\u0A30\u0A1A",
        "\u0A05\u0A2A\u0A4D\u0A30\u0A48\u0A32",
        "\u0A2E\u0A08",
        "\u0A1C\u0A42\u0A28",
        "\u0A1C\u0A41\u0A32\u0A3E\u0A08",
        "\u0A05\u0A17\u0A38\u0A24",
        "\u0A38\u0A24\u0A70\u0A2C\u0A30",
        "\u0A05\u0A15\u0A24\u0A42\u0A2C\u0A30",
        "\u0A28\u0A35\u0A70\u0A2C\u0A30",
        "\u0A26\u0A38\u0A70\u0A2C\u0A30"
      ]
    },
    time_24hr: true
  };
  fp.l10ns.pa = Punjabi;
  var pa_default = fp.l10ns;
  return __toCommonJS(pa_exports);
})();
