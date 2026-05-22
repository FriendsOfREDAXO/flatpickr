"use strict";
var l10n_ms = (() => {
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

  // src/l10n/ms.ts
  var ms_exports = {};
  __export(ms_exports, {
    Malaysian: () => Malaysian,
    default: () => ms_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Malaysian = {
    weekdays: {
      shorthand: ["Aha", "Isn", "Sel", "Rab", "Kha", "Jum", "Sab"],
      longhand: ["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"]
    },
    months: {
      shorthand: [
        "Jan",
        "Feb",
        "Mac",
        "Apr",
        "Mei",
        "Jun",
        "Jul",
        "Ogo",
        "Sep",
        "Okt",
        "Nov",
        "Dis"
      ],
      longhand: [
        "Januari",
        "Februari",
        "Mac",
        "April",
        "Mei",
        "Jun",
        "Julai",
        "Ogos",
        "September",
        "Oktober",
        "November",
        "Disember"
      ]
    },
    firstDayOfWeek: 1,
    ordinal: () => {
      return "";
    }
  };
  fp.l10ns.ms = Malaysian;
  var ms_default = fp.l10ns;
  return __toCommonJS(ms_exports);
})();
