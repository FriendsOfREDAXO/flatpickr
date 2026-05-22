"use strict";
var l10n_my = (() => {
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

  // src/l10n/my.ts
  var my_exports = {};
  __export(my_exports, {
    Burmese: () => Burmese,
    default: () => my_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Burmese = {
    weekdays: {
      shorthand: ["\u1014\u103D\u1031", "\u101C\u102C", "\u1002\u102B", "\u101F\u1030\u1038", "\u1000\u103C\u102C", "\u101E\u1031\u102C", "\u1014\u1031"],
      longhand: [
        "\u1010\u1014\u1004\u103A\u1039\u1002\u1014\u103D\u1031",
        "\u1010\u1014\u1004\u103A\u1039\u101C\u102C",
        "\u1021\u1004\u103A\u1039\u1002\u102B",
        "\u1017\u102F\u1012\u1039\u1013\u101F\u1030\u1038",
        "\u1000\u103C\u102C\u101E\u1015\u1010\u1031\u1038",
        "\u101E\u1031\u102C\u1000\u103C\u102C",
        "\u1005\u1014\u1031"
      ]
    },
    months: {
      shorthand: [
        "\u1007\u1014\u103A",
        "\u1016\u1031",
        "\u1019\u1010\u103A",
        "\u1015\u103C\u102E",
        "\u1019\u1031",
        "\u1007\u103D\u1014\u103A",
        "\u101C\u102D\u102F\u1004\u103A",
        "\u101E\u103C",
        "\u1005\u1000\u103A",
        "\u1021\u1031\u102C\u1000\u103A",
        "\u1014\u102D\u102F",
        "\u1012\u102E"
      ],
      longhand: [
        "\u1007\u1014\u103A\u1014\u101D\u102B\u101B\u102E",
        "\u1016\u1031\u1016\u1031\u102C\u103A\u101D\u102B\u101B\u102E",
        "\u1019\u1010\u103A",
        "\u1027\u1015\u103C\u102E",
        "\u1019\u1031",
        "\u1007\u103D\u1014\u103A",
        "\u1007\u1030\u101C\u102D\u102F\u1004\u103A",
        "\u101E\u103C\u1002\u102F\u1010\u103A",
        "\u1005\u1000\u103A\u1010\u1004\u103A\u1018\u102C",
        "\u1021\u1031\u102C\u1000\u103A\u1010\u102D\u102F\u1018\u102C",
        "\u1014\u102D\u102F\u101D\u1004\u103A\u1018\u102C",
        "\u1012\u102E\u1007\u1004\u103A\u1018\u102C"
      ]
    },
    firstDayOfWeek: 1,
    ordinal: () => {
      return "";
    },
    time_24hr: true
  };
  fp.l10ns.my = Burmese;
  var my_default = fp.l10ns;
  return __toCommonJS(my_exports);
})();
