"use strict";
var l10n_hy = (() => {
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

  // src/l10n/hy.ts
  var hy_exports = {};
  __export(hy_exports, {
    Armenian: () => Armenian,
    default: () => hy_default
  });
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Armenian = {
    weekdays: {
      shorthand: ["\u053F\u056B\u0580", "\u0535\u0580\u056F", "\u0535\u0580\u0584", "\u0549\u0580\u0584", "\u0540\u0576\u0563", "\u0548\u0582\u0580\u0562", "\u0547\u0562\u0569"],
      longhand: [
        "\u053F\u056B\u0580\u0561\u056F\u056B",
        "\u0535\u056F\u0578\u0582\u0577\u0561\u0562\u0569\u056B",
        "\u0535\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056B",
        "\u0549\u0578\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056B",
        "\u0540\u056B\u0576\u0563\u0577\u0561\u0562\u0569\u056B",
        "\u0548\u0582\u0580\u0562\u0561\u0569",
        "\u0547\u0561\u0562\u0561\u0569"
      ]
    },
    months: {
      shorthand: [
        "\u0540\u0576\u057E",
        "\u0553\u057F\u0580",
        "\u0544\u0561\u0580",
        "\u0531\u057A\u0580",
        "\u0544\u0561\u0575",
        "\u0540\u0576\u057D",
        "\u0540\u056C\u057D",
        "\u0555\u0563\u057D",
        "\u054D\u0565\u057A",
        "\u0540\u0578\u056F",
        "\u0546\u0574\u0562",
        "\u0534\u0565\u056F"
      ],
      longhand: [
        "\u0540\u0578\u0582\u0576\u057E\u0561\u0580",
        "\u0553\u0565\u057F\u0580\u057E\u0561\u0580",
        "\u0544\u0561\u0580\u057F",
        "\u0531\u057A\u0580\u056B\u056C",
        "\u0544\u0561\u0575\u056B\u057D",
        "\u0540\u0578\u0582\u0576\u056B\u057D",
        "\u0540\u0578\u0582\u056C\u056B\u057D",
        "\u0555\u0563\u0578\u057D\u057F\u0578\u057D",
        "\u054D\u0565\u057A\u057F\u0565\u0574\u0562\u0565\u0580",
        "\u0540\u0578\u056F\u057F\u0565\u0574\u0562\u0565\u0580",
        "\u0546\u0578\u0575\u0565\u0574\u0562\u0565\u0580",
        "\u0534\u0565\u056F\u057F\u0565\u0574\u0562\u0565\u0580"
      ]
    },
    firstDayOfWeek: 1,
    ordinal: function() {
      return "";
    },
    rangeSeparator: " \u2014 ",
    weekAbbreviation: "\u0547\u0532\u054F",
    scrollTitle: "\u0548\u056C\u0578\u0580\u0565\u0584\u055D \u0574\u0565\u056E\u0561\u0581\u0576\u0565\u056C\u0578\u0582 \u0570\u0561\u0574\u0561\u0580",
    toggleTitle: "\u054D\u0565\u0572\u0574\u0565\u0584\u055D \u0583\u0578\u056D\u0565\u056C\u0578\u0582 \u0570\u0561\u0574\u0561\u0580",
    amPM: ["\u0544\u053F", "\u053F\u0540"],
    yearAriaLabel: "\u054F\u0561\u0580\u056B",
    monthAriaLabel: "\u0531\u0574\u056B\u057D",
    hourAriaLabel: "\u053A\u0561\u0574",
    minuteAriaLabel: "\u0550\u0578\u057A\u0565",
    time_24hr: true
  };
  fp.l10ns.hy = Armenian;
  var hy_default = fp.l10ns;
  return __toCommonJS(hy_exports);
})();
