"use strict";
var l10n_bn = (() => {
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

  // src/l10n/bn.ts
  var bn_exports = {};
  __export(bn_exports, {
    Bangla: () => Bangla,
    default: () => bn_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Bangla = {
    weekdays: {
      shorthand: ["\u09B0\u09AC\u09BF", "\u09B8\u09CB\u09AE", "\u09AE\u0999\u09CD\u0997\u09B2", "\u09AC\u09C1\u09A7", "\u09AC\u09C3\u09B9\u09B8\u09CD\u09AA\u09A4\u09BF", "\u09B6\u09C1\u0995\u09CD\u09B0", "\u09B6\u09A8\u09BF"],
      longhand: [
        "\u09B0\u09AC\u09BF\u09AC\u09BE\u09B0",
        "\u09B8\u09CB\u09AE\u09AC\u09BE\u09B0",
        "\u09AE\u0999\u09CD\u0997\u09B2\u09AC\u09BE\u09B0",
        "\u09AC\u09C1\u09A7\u09AC\u09BE\u09B0",
        "\u09AC\u09C3\u09B9\u09B8\u09CD\u09AA\u09A4\u09BF\u09AC\u09BE\u09B0",
        "\u09B6\u09C1\u0995\u09CD\u09B0\u09AC\u09BE\u09B0",
        "\u09B6\u09A8\u09BF\u09AC\u09BE\u09B0"
      ]
    },
    months: {
      shorthand: [
        "\u099C\u09BE\u09A8\u09C1",
        "\u09AB\u09C7\u09AC\u09CD\u09B0\u09C1",
        "\u09AE\u09BE\u09B0\u09CD\u099A",
        "\u098F\u09AA\u09CD\u09B0\u09BF\u09B2",
        "\u09AE\u09C7",
        "\u099C\u09C1\u09A8",
        "\u099C\u09C1\u09B2\u09BE\u0987",
        "\u0986\u0997",
        "\u09B8\u09C7\u09AA\u09CD\u099F\u09C7",
        "\u0985\u0995\u09CD\u099F\u09CB",
        "\u09A8\u09AD\u09C7",
        "\u09A1\u09BF\u09B8\u09C7"
      ],
      longhand: [
        "\u099C\u09BE\u09A8\u09C1\u09AF\u09BC\u09BE\u09B0\u09C0",
        "\u09AB\u09C7\u09AC\u09CD\u09B0\u09C1\u09AF\u09BC\u09BE\u09B0\u09C0",
        "\u09AE\u09BE\u09B0\u09CD\u099A",
        "\u098F\u09AA\u09CD\u09B0\u09BF\u09B2",
        "\u09AE\u09C7",
        "\u099C\u09C1\u09A8",
        "\u099C\u09C1\u09B2\u09BE\u0987",
        "\u0986\u0997\u09B8\u09CD\u099F",
        "\u09B8\u09C7\u09AA\u09CD\u099F\u09C7\u09AE\u09CD\u09AC\u09B0",
        "\u0985\u0995\u09CD\u099F\u09CB\u09AC\u09B0",
        "\u09A8\u09AD\u09C7\u09AE\u09CD\u09AC\u09B0",
        "\u09A1\u09BF\u09B8\u09C7\u09AE\u09CD\u09AC\u09B0"
      ]
    }
  };
  fp.l10ns.bn = Bangla;
  var bn_default = fp.l10ns;
  return __toCommonJS(bn_exports);
})();
