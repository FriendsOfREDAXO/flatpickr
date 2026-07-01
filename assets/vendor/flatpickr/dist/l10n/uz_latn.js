"use strict";
var l10n_uz_latn = (() => {
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

  // src/l10n/uz_latn.ts
  var uz_latn_exports = {};
  __export(uz_latn_exports, {
    UzbekLatin: () => UzbekLatin,
    default: () => uz_latn_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var UzbekLatin = {
    weekdays: {
      shorthand: ["Ya", "Du", "Se", "Cho", "Pa", "Ju", "Sha"],
      longhand: [
        "Yakshanba",
        "Dushanba",
        "Seshanba",
        "Chorshanba",
        "Payshanba",
        "Juma",
        "Shanba"
      ]
    },
    months: {
      shorthand: [
        "Yan",
        "Fev",
        "Mar",
        "Apr",
        "May",
        "Iyun",
        "Iyul",
        "Avg",
        "Sen",
        "Okt",
        "Noy",
        "Dek"
      ],
      longhand: [
        "Yanvar",
        "Fevral",
        "Mart",
        "Aprel",
        "May",
        "Iyun",
        "Iyul",
        "Avgust",
        "Sentabr",
        "Oktabr",
        "Noyabr",
        "Dekabr"
      ]
    },
    firstDayOfWeek: 1,
    ordinal: function() {
      return "";
    },
    rangeSeparator: " \u2014 ",
    weekAbbreviation: "Hafta",
    scrollTitle: "Kattalashtirish uchun aylantiring",
    toggleTitle: "O\u2018tish uchun bosing",
    amPM: ["AM", "PM"],
    yearAriaLabel: "Yil",
    time_24hr: true
  };
  fp.l10ns["uz_latn"] = UzbekLatin;
  var uz_latn_default = fp.l10ns;
  return __toCommonJS(uz_latn_exports);
})();
