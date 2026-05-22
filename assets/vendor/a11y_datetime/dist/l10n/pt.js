"use strict";
var l10n_pt = (() => {
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

  // src/l10n/pt.ts
  var pt_exports = {};
  __export(pt_exports, {
    Portuguese: () => Portuguese,
    default: () => pt_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Portuguese = {
    weekdays: {
      shorthand: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "S\xE1b"],
      longhand: [
        "Domingo",
        "Segunda-feira",
        "Ter\xE7a-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "S\xE1bado"
      ]
    },
    months: {
      shorthand: [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez"
      ],
      longhand: [
        "Janeiro",
        "Fevereiro",
        "Mar\xE7o",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
      ]
    },
    rangeSeparator: " at\xE9 ",
    time_24hr: true
  };
  fp.l10ns.pt = Portuguese;
  var pt_default = fp.l10ns;
  return __toCommonJS(pt_exports);
})();
