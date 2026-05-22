"use strict";
var l10n_hi = (() => {
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

  // src/l10n/hi.ts
  var hi_exports = {};
  __export(hi_exports, {
    Hindi: () => Hindi,
    default: () => hi_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Hindi = {
    weekdays: {
      shorthand: ["\u0930\u0935\u093F", "\u0938\u094B\u092E", "\u092E\u0902\u0917\u0932", "\u092C\u0941\u0927", "\u0917\u0941\u0930\u0941", "\u0936\u0941\u0915\u094D\u0930", "\u0936\u0928\u093F"],
      longhand: [
        "\u0930\u0935\u093F\u0935\u093E\u0930",
        "\u0938\u094B\u092E\u0935\u093E\u0930",
        "\u092E\u0902\u0917\u0932\u0935\u093E\u0930",
        "\u092C\u0941\u0927\u0935\u093E\u0930",
        "\u0917\u0941\u0930\u0941\u0935\u093E\u0930",
        "\u0936\u0941\u0915\u094D\u0930\u0935\u093E\u0930",
        "\u0936\u0928\u093F\u0935\u093E\u0930"
      ]
    },
    months: {
      shorthand: [
        "\u091C\u0928",
        "\u092B\u0930",
        "\u092E\u093E\u0930\u094D\u091A",
        "\u0905\u092A\u094D\u0930\u0947\u0932",
        "\u092E\u0908",
        "\u091C\u0942\u0928",
        "\u091C\u0942\u0932\u093E\u0908",
        "\u0905\u0917",
        "\u0938\u093F\u0924",
        "\u0905\u0915\u094D\u091F",
        "\u0928\u0935",
        "\u0926\u093F"
      ],
      longhand: [
        "\u091C\u0928\u0935\u0930\u0940 ",
        "\u092B\u0930\u0935\u0930\u0940",
        "\u092E\u093E\u0930\u094D\u091A",
        "\u0905\u092A\u094D\u0930\u0947\u0932",
        "\u092E\u0908",
        "\u091C\u0942\u0928",
        "\u091C\u0942\u0932\u093E\u0908",
        "\u0905\u0917\u0938\u094D\u0924 ",
        "\u0938\u093F\u0924\u092E\u094D\u092C\u0930",
        "\u0905\u0915\u094D\u091F\u0942\u092C\u0930",
        "\u0928\u0935\u092E\u094D\u092C\u0930",
        "\u0926\u093F\u0938\u092E\u094D\u092C\u0930"
      ]
    }
  };
  fp.l10ns.hi = Hindi;
  var hi_default = fp.l10ns;
  return __toCommonJS(hi_exports);
})();
