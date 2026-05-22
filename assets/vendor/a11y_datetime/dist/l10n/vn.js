"use strict";
var l10n_vn = (() => {
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

  // src/l10n/vn.ts
  var vn_exports = {};
  __export(vn_exports, {
    Vietnamese: () => Vietnamese,
    default: () => vn_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Vietnamese = {
    weekdays: {
      shorthand: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
      longhand: [
        "Ch\u1EE7 nh\u1EADt",
        "Th\u1EE9 hai",
        "Th\u1EE9 ba",
        "Th\u1EE9 t\u01B0",
        "Th\u1EE9 n\u0103m",
        "Th\u1EE9 s\xE1u",
        "Th\u1EE9 b\u1EA3y"
      ]
    },
    months: {
      shorthand: [
        "Th1",
        "Th2",
        "Th3",
        "Th4",
        "Th5",
        "Th6",
        "Th7",
        "Th8",
        "Th9",
        "Th10",
        "Th11",
        "Th12"
      ],
      longhand: [
        "Th\xE1ng m\u1ED9t",
        "Th\xE1ng hai",
        "Th\xE1ng ba",
        "Th\xE1ng t\u01B0",
        "Th\xE1ng n\u0103m",
        "Th\xE1ng s\xE1u",
        "Th\xE1ng b\u1EA3y",
        "Th\xE1ng t\xE1m",
        "Th\xE1ng ch\xEDn",
        "Th\xE1ng m\u01B0\u1EDDi",
        "Th\xE1ng m\u01B0\u1EDDi m\u1ED9t",
        "Th\xE1ng m\u01B0\u1EDDi hai"
      ]
    },
    firstDayOfWeek: 1,
    rangeSeparator: " \u0111\u1EBFn "
  };
  fp.l10ns.vn = Vietnamese;
  var vn_default = fp.l10ns;
  return __toCommonJS(vn_exports);
})();
