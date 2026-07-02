"use strict";
var l10n_index = (() => {
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

  // src/l10n/index.ts
  var l10n_exports = {};
  __export(l10n_exports, {
    default: () => l10n_default
  });

  // src/l10n/ar.ts
  var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Arabic = {
    weekdays: {
      shorthand: ["\u0623\u062D\u062F", "\u0627\u062B\u0646\u064A\u0646", "\u062B\u0644\u0627\u062B\u0627\u0621", "\u0623\u0631\u0628\u0639\u0627\u0621", "\u062E\u0645\u064A\u0633", "\u062C\u0645\u0639\u0629", "\u0633\u0628\u062A"],
      longhand: [
        "\u0627\u0644\u0623\u062D\u062F",
        "\u0627\u0644\u0627\u062B\u0646\u064A\u0646",
        "\u0627\u0644\u062B\u0644\u0627\u062B\u0627\u0621",
        "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621",
        "\u0627\u0644\u062E\u0645\u064A\u0633",
        "\u0627\u0644\u062C\u0645\u0639\u0629",
        "\u0627\u0644\u0633\u0628\u062A"
      ]
    },
    months: {
      shorthand: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
      longhand: [
        "\u064A\u0646\u0627\u064A\u0631",
        "\u0641\u0628\u0631\u0627\u064A\u0631",
        "\u0645\u0627\u0631\u0633",
        "\u0623\u0628\u0631\u064A\u0644",
        "\u0645\u0627\u064A\u0648",
        "\u064A\u0648\u0646\u064A\u0648",
        "\u064A\u0648\u0644\u064A\u0648",
        "\u0623\u063A\u0633\u0637\u0633",
        "\u0633\u0628\u062A\u0645\u0628\u0631",
        "\u0623\u0643\u062A\u0648\u0628\u0631",
        "\u0646\u0648\u0641\u0645\u0628\u0631",
        "\u062F\u064A\u0633\u0645\u0628\u0631"
      ]
    },
    firstDayOfWeek: 6,
    rangeSeparator: " \u0625\u0644\u0649 ",
    weekAbbreviation: "Wk",
    scrollTitle: "\u0642\u0645 \u0628\u0627\u0644\u062A\u0645\u0631\u064A\u0631 \u0644\u0644\u0632\u064A\u0627\u062F\u0629",
    toggleTitle: "\u0627\u0636\u063A\u0637 \u0644\u0644\u062A\u0628\u062F\u064A\u0644",
    amPM: ["\u0635", "\u0645"],
    yearAriaLabel: "\u0633\u0646\u0629",
    monthAriaLabel: "\u0634\u0647\u0631",
    hourAriaLabel: "\u0633\u0627\u0639\u0629",
    minuteAriaLabel: "\u062F\u0642\u064A\u0642\u0629",
    time_24hr: false
  };
  fp.l10ns.ar = Arabic;
  var ar_default = fp.l10ns;

  // src/l10n/at.ts
  var fp2 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Austria = {
    weekdays: {
      shorthand: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
      longhand: [
        "Sonntag",
        "Montag",
        "Dienstag",
        "Mittwoch",
        "Donnerstag",
        "Freitag",
        "Samstag"
      ]
    },
    months: {
      shorthand: [
        "J\xE4n",
        "Feb",
        "M\xE4r",
        "Apr",
        "Mai",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Okt",
        "Nov",
        "Dez"
      ],
      longhand: [
        "J\xE4nner",
        "Februar",
        "M\xE4rz",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "Dezember"
      ]
    },
    firstDayOfWeek: 1,
    weekAbbreviation: "KW",
    rangeSeparator: " bis ",
    scrollTitle: "Zum \xC4ndern scrollen",
    toggleTitle: "Zum Umschalten klicken",
    time_24hr: true
  };
  fp2.l10ns.at = Austria;
  var at_default = fp2.l10ns;

  // src/l10n/az.ts
  var fp3 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Azerbaijan = {
    weekdays: {
      shorthand: ["B.", "B.e.", "\xC7.a.", "\xC7.", "C.a.", "C.", "\u015E."],
      longhand: [
        "Bazar",
        "Bazar ert\u0259si",
        "\xC7\u0259r\u015F\u0259nb\u0259 ax\u015Fam\u0131",
        "\xC7\u0259r\u015F\u0259nb\u0259",
        "C\xFCm\u0259 ax\u015Fam\u0131",
        "C\xFCm\u0259",
        "\u015E\u0259nb\u0259"
      ]
    },
    months: {
      shorthand: [
        "Yan",
        "Fev",
        "Mar",
        "Apr",
        "May",
        "\u0130yn",
        "\u0130yl",
        "Avq",
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
        "\u0130yun",
        "\u0130yul",
        "Avqust",
        "Sentyabr",
        "Oktyabr",
        "Noyabr",
        "Dekabr"
      ]
    },
    firstDayOfWeek: 1,
    ordinal: () => {
      return ".";
    },
    rangeSeparator: " - ",
    weekAbbreviation: "Hf",
    scrollTitle: "Art\u0131rmaq \xFC\xE7\xFCn s\xFCr\xFC\u015Fd\xFCr\xFCn",
    toggleTitle: "A\xE7 / Ba\u011Fla",
    amPM: ["G\u018F", "GS"],
    time_24hr: true
  };
  fp3.l10ns.az = Azerbaijan;
  var az_default = fp3.l10ns;

  // src/l10n/be.ts
  var fp4 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Belarusian = {
    weekdays: {
      shorthand: ["\u041D\u0434", "\u041F\u043D", "\u0410\u045E", "\u0421\u0440", "\u0427\u0446", "\u041F\u0442", "\u0421\u0431"],
      longhand: [
        "\u041D\u044F\u0434\u0437\u0435\u043B\u044F",
        "\u041F\u0430\u043D\u044F\u0434\u0437\u0435\u043B\u0430\u043A",
        "\u0410\u045E\u0442\u043E\u0440\u0430\u043A",
        "\u0421\u0435\u0440\u0430\u0434\u0430",
        "\u0427\u0430\u0446\u0432\u0435\u0440",
        "\u041F\u044F\u0442\u043D\u0456\u0446\u0430",
        "\u0421\u0443\u0431\u043E\u0442\u0430"
      ]
    },
    months: {
      shorthand: [
        "\u0421\u0442\u0443",
        "\u041B\u044E\u0442",
        "\u0421\u0430\u043A",
        "\u041A\u0440\u0430",
        "\u0422\u0440\u0430",
        "\u0427\u044D\u0440",
        "\u041B\u0456\u043F",
        "\u0416\u043D\u0456",
        "\u0412\u0435\u0440",
        "\u041A\u0430\u0441",
        "\u041B\u0456\u0441",
        "\u0421\u043D\u0435"
      ],
      longhand: [
        "\u0421\u0442\u0443\u0434\u0437\u0435\u043D\u044C",
        "\u041B\u044E\u0442\u044B",
        "\u0421\u0430\u043A\u0430\u0432\u0456\u043A",
        "\u041A\u0440\u0430\u0441\u0430\u0432\u0456\u043A",
        "\u0422\u0440\u0430\u0432\u0435\u043D\u044C",
        "\u0427\u044D\u0440\u0432\u0435\u043D\u044C",
        "\u041B\u0456\u043F\u0435\u043D\u044C",
        "\u0416\u043D\u0456\u0432\u0435\u043D\u044C",
        "\u0412\u0435\u0440\u0430\u0441\u0435\u043D\u044C",
        "\u041A\u0430\u0441\u0442\u0440\u044B\u0447\u043D\u0456\u043A",
        "\u041B\u0456\u0441\u0442\u0430\u043F\u0430\u0434",
        "\u0421\u043D\u0435\u0436\u0430\u043D\u044C"
      ]
    },
    firstDayOfWeek: 1,
    ordinal: function() {
      return "";
    },
    rangeSeparator: " \u2014 ",
    weekAbbreviation: "\u0422\u044B\u0434.",
    scrollTitle: "\u041F\u0440\u0430\u043A\u0440\u0443\u0446\u0456\u0446\u0435 \u0434\u043B\u044F \u043F\u0430\u0432\u0435\u043B\u0456\u0447\u044D\u043D\u043D\u044F",
    toggleTitle: "\u041D\u0430\u0446\u0456\u0441\u043D\u0456\u0446\u0435 \u0434\u043B\u044F \u043F\u0435\u0440\u0430\u043A\u043B\u044E\u0447\u044D\u043D\u043D\u044F",
    amPM: ["\u0414\u041F", "\u041F\u041F"],
    yearAriaLabel: "\u0413\u043E\u0434",
    time_24hr: true
  };
  fp4.l10ns.be = Belarusian;
  var be_default = fp4.l10ns;

  // src/l10n/bs.ts
  var fp5 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Bosnian = {
    firstDayOfWeek: 1,
    weekdays: {
      shorthand: ["Ned", "Pon", "Uto", "Sri", "\u010Cet", "Pet", "Sub"],
      longhand: [
        "Nedjelja",
        "Ponedjeljak",
        "Utorak",
        "Srijeda",
        "\u010Cetvrtak",
        "Petak",
        "Subota"
      ]
    },
    months: {
      shorthand: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Maj",
        "Jun",
        "Jul",
        "Avg",
        "Sep",
        "Okt",
        "Nov",
        "Dec"
      ],
      longhand: [
        "Januar",
        "Februar",
        "Mart",
        "April",
        "Maj",
        "Juni",
        "Juli",
        "Avgust",
        "Septembar",
        "Oktobar",
        "Novembar",
        "Decembar"
      ]
    },
    time_24hr: true
  };
  fp5.l10ns.bs = Bosnian;
  var bs_default = fp5.l10ns;

  // src/l10n/bg.ts
  var fp6 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Bulgarian = {
    weekdays: {
      shorthand: ["\u041D\u0434", "\u041F\u043D", "\u0412\u0442", "\u0421\u0440", "\u0427\u0442", "\u041F\u0442", "\u0421\u0431"],
      longhand: [
        "\u041D\u0435\u0434\u0435\u043B\u044F",
        "\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u043D\u0438\u043A",
        "\u0412\u0442\u043E\u0440\u043D\u0438\u043A",
        "\u0421\u0440\u044F\u0434\u0430",
        "\u0427\u0435\u0442\u0432\u044A\u0440\u0442\u044A\u043A",
        "\u041F\u0435\u0442\u044A\u043A",
        "\u0421\u044A\u0431\u043E\u0442\u0430"
      ]
    },
    months: {
      shorthand: [
        "\u042F\u043D\u0443",
        "\u0424\u0435\u0432",
        "\u041C\u0430\u0440\u0442",
        "\u0410\u043F\u0440",
        "\u041C\u0430\u0439",
        "\u042E\u043D\u0438",
        "\u042E\u043B\u0438",
        "\u0410\u0432\u0433",
        "\u0421\u0435\u043F",
        "\u041E\u043A\u0442",
        "\u041D\u043E\u0435",
        "\u0414\u0435\u043A"
      ],
      longhand: [
        "\u042F\u043D\u0443\u0430\u0440\u0438",
        "\u0424\u0435\u0432\u0440\u0443\u0430\u0440\u0438",
        "\u041C\u0430\u0440\u0442",
        "\u0410\u043F\u0440\u0438\u043B",
        "\u041C\u0430\u0439",
        "\u042E\u043D\u0438",
        "\u042E\u043B\u0438",
        "\u0410\u0432\u0433\u0443\u0441\u0442",
        "\u0421\u0435\u043F\u0442\u0435\u043C\u0432\u0440\u0438",
        "\u041E\u043A\u0442\u043E\u043C\u0432\u0440\u0438",
        "\u041D\u043E\u0435\u043C\u0432\u0440\u0438",
        "\u0414\u0435\u043A\u0435\u043C\u0432\u0440\u0438"
      ]
    },
    time_24hr: true,
    firstDayOfWeek: 1
  };
  fp6.l10ns.bg = Bulgarian;
  var bg_default = fp6.l10ns;

  // src/l10n/bn.ts
  var fp7 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
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
  fp7.l10ns.bn = Bangla;
  var bn_default = fp7.l10ns;

  // src/l10n/cat.ts
  var fp8 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Catalan = {
    weekdays: {
      shorthand: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
      longhand: [
        "Diumenge",
        "Dilluns",
        "Dimarts",
        "Dimecres",
        "Dijous",
        "Divendres",
        "Dissabte"
      ]
    },
    months: {
      shorthand: [
        "Gen",
        "Febr",
        "Mar\xE7",
        "Abr",
        "Maig",
        "Juny",
        "Jul",
        "Ag",
        "Set",
        "Oct",
        "Nov",
        "Des"
      ],
      longhand: [
        "Gener",
        "Febrer",
        "Mar\xE7",
        "Abril",
        "Maig",
        "Juny",
        "Juliol",
        "Agost",
        "Setembre",
        "Octubre",
        "Novembre",
        "Desembre"
      ]
    },
    ordinal: (nth) => {
      const s = nth % 100;
      if (s > 3 && s < 21)
        return "\xE8";
      switch (s % 10) {
        case 1:
          return "r";
        case 2:
          return "n";
        case 3:
          return "r";
        case 4:
          return "t";
        default:
          return "\xE8";
      }
    },
    firstDayOfWeek: 1,
    rangeSeparator: " a ",
    time_24hr: true
  };
  fp8.l10ns.cat = fp8.l10ns.ca = Catalan;
  var cat_default = fp8.l10ns;

  // src/l10n/ckb.ts
  var fp9 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Kurdish = {
    weekdays: {
      shorthand: [
        "\u06CC\u06D5\u06A9\u0634\u06D5\u0645\u0645\u06D5",
        "\u062F\u0648\u0648\u0634\u06D5\u0645\u0645\u06D5",
        "\u0633\u06CE\u0634\u06D5\u0645\u0645\u06D5",
        "\u0686\u0648\u0627\u0631\u0634\u06D5\u0645\u0645\u06D5",
        "\u067E\u06CE\u0646\u062C\u0634\u06D5\u0645\u0645\u06D5",
        "\u0647\u06D5\u06CC\u0646\u06CC",
        "\u0634\u06D5\u0645\u0645\u06D5"
      ],
      longhand: [
        "\u06CC\u06D5\u06A9\u0634\u06D5\u0645\u0645\u06D5",
        "\u062F\u0648\u0648\u0634\u06D5\u0645\u0645\u06D5",
        "\u0633\u06CE\u0634\u06D5\u0645\u0645\u06D5",
        "\u0686\u0648\u0627\u0631\u0634\u06D5\u0645\u0645\u06D5",
        "\u067E\u06CE\u0646\u062C\u0634\u06D5\u0645\u0645\u06D5",
        "\u0647\u06D5\u06CC\u0646\u06CC",
        "\u0634\u06D5\u0645\u0645\u06D5"
      ]
    },
    months: {
      shorthand: [
        "\u0695\u06CE\u0628\u06D5\u0646\u062F\u0627\u0646",
        "\u0695\u06D5\u0634\u06D5\u0645\u06D5",
        "\u0646\u06D5\u0648\u0631\u06C6\u0632",
        "\u06AF\u0648\u06B5\u0627\u0646",
        "\u062C\u06C6\u0632\u06D5\u0631\u062F\u0627\u0646",
        "\u067E\u0648\u0648\u0634\u067E\u06D5\u0695",
        "\u06AF\u06D5\u0644\u0627\u0648\u06CE\u0698",
        "\u062E\u06D5\u0631\u0645\u0627\u0646\u0627\u0646",
        "\u0695\u06D5\u0632\u0628\u06D5\u0631",
        "\u06AF\u06D5\u06B5\u0627\u0695\u06CE\u0632\u0627\u0646",
        "\u0633\u06D5\u0631\u0645\u0627\u0648\u06D5\u0632",
        "\u0628\u06D5\u0641\u0631\u0627\u0646\u0628\u0627\u0631"
      ],
      longhand: [
        "\u0695\u06CE\u0628\u06D5\u0646\u062F\u0627\u0646",
        "\u0695\u06D5\u0634\u06D5\u0645\u06D5",
        "\u0646\u06D5\u0648\u0631\u06C6\u0632",
        "\u06AF\u0648\u06B5\u0627\u0646",
        "\u062C\u06C6\u0632\u06D5\u0631\u062F\u0627\u0646",
        "\u067E\u0648\u0648\u0634\u067E\u06D5\u0695",
        "\u06AF\u06D5\u0644\u0627\u0648\u06CE\u0698",
        "\u062E\u06D5\u0631\u0645\u0627\u0646\u0627\u0646",
        "\u0695\u06D5\u0632\u0628\u06D5\u0631",
        "\u06AF\u06D5\u06B5\u0627\u0695\u06CE\u0632\u0627\u0646",
        "\u0633\u06D5\u0631\u0645\u0627\u0648\u06D5\u0632",
        "\u0628\u06D5\u0641\u0631\u0627\u0646\u0628\u0627\u0631"
      ]
    },
    firstDayOfWeek: 6,
    ordinal: () => {
      return "";
    }
  };
  fp9.l10ns.ckb = Kurdish;
  var ckb_default = fp9.l10ns;

  // src/l10n/cs.ts
  var fp10 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Czech = {
    weekdays: {
      shorthand: ["Ne", "Po", "\xDAt", "St", "\u010Ct", "P\xE1", "So"],
      longhand: [
        "Ned\u011Ble",
        "Pond\u011Bl\xED",
        "\xDAter\xFD",
        "St\u0159eda",
        "\u010Ctvrtek",
        "P\xE1tek",
        "Sobota"
      ]
    },
    months: {
      shorthand: [
        "Led",
        "\xDAn",
        "B\u0159e",
        "Dub",
        "Kv\u011B",
        "\u010Cer",
        "\u010Cvc",
        "Srp",
        "Z\xE1\u0159",
        "\u0158\xEDj",
        "Lis",
        "Pro"
      ],
      longhand: [
        "Leden",
        "\xDAnor",
        "B\u0159ezen",
        "Duben",
        "Kv\u011Bten",
        "\u010Cerven",
        "\u010Cervenec",
        "Srpen",
        "Z\xE1\u0159\xED",
        "\u0158\xEDjen",
        "Listopad",
        "Prosinec"
      ]
    },
    firstDayOfWeek: 1,
    ordinal: function() {
      return ".";
    },
    rangeSeparator: " do ",
    weekAbbreviation: "T\xFDd.",
    scrollTitle: "Rolujte pro zm\u011Bnu",
    toggleTitle: "P\u0159epnout dopoledne/odpoledne",
    amPM: ["dop.", "odp."],
    yearAriaLabel: "Rok",
    time_24hr: true
  };
  fp10.l10ns.cs = Czech;
  var cs_default = fp10.l10ns;

  // src/l10n/cy.ts
  var fp11 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Welsh = {
    weekdays: {
      shorthand: ["Sul", "Llun", "Maw", "Mer", "Iau", "Gwe", "Sad"],
      longhand: [
        "Dydd Sul",
        "Dydd Llun",
        "Dydd Mawrth",
        "Dydd Mercher",
        "Dydd Iau",
        "Dydd Gwener",
        "Dydd Sadwrn"
      ]
    },
    months: {
      shorthand: [
        "Ion",
        "Chwef",
        "Maw",
        "Ebr",
        "Mai",
        "Meh",
        "Gorff",
        "Awst",
        "Medi",
        "Hyd",
        "Tach",
        "Rhag"
      ],
      longhand: [
        "Ionawr",
        "Chwefror",
        "Mawrth",
        "Ebrill",
        "Mai",
        "Mehefin",
        "Gorffennaf",
        "Awst",
        "Medi",
        "Hydref",
        "Tachwedd",
        "Rhagfyr"
      ]
    },
    firstDayOfWeek: 1,
    ordinal: (nth) => {
      if (nth === 1)
        return "af";
      if (nth === 2)
        return "ail";
      if (nth === 3 || nth === 4)
        return "ydd";
      if (nth === 5 || nth === 6)
        return "ed";
      if (nth >= 7 && nth <= 10 || nth == 12 || nth == 15 || nth == 18 || nth == 20)
        return "fed";
      if (nth == 11 || nth == 13 || nth == 14 || nth == 16 || nth == 17 || nth == 19)
        return "eg";
      if (nth >= 21 && nth <= 39)
        return "ain";
      return "";
    },
    time_24hr: true
  };
  fp11.l10ns.cy = Welsh;
  var cy_default = fp11.l10ns;

  // src/l10n/da.ts
  var fp12 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Danish = {
    weekdays: {
      shorthand: ["s\xF8n", "man", "tir", "ons", "tors", "fre", "l\xF8r"],
      longhand: [
        "s\xF8ndag",
        "mandag",
        "tirsdag",
        "onsdag",
        "torsdag",
        "fredag",
        "l\xF8rdag"
      ]
    },
    months: {
      shorthand: [
        "jan",
        "feb",
        "mar",
        "apr",
        "maj",
        "jun",
        "jul",
        "aug",
        "sep",
        "okt",
        "nov",
        "dec"
      ],
      longhand: [
        "januar",
        "februar",
        "marts",
        "april",
        "maj",
        "juni",
        "juli",
        "august",
        "september",
        "oktober",
        "november",
        "december"
      ]
    },
    ordinal: () => {
      return ".";
    },
    firstDayOfWeek: 1,
    rangeSeparator: " til ",
    weekAbbreviation: "uge",
    time_24hr: true
  };
  fp12.l10ns.da = Danish;
  var da_default = fp12.l10ns;

  // src/l10n/de.ts
  var fp13 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var German = {
    weekdays: {
      shorthand: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
      longhand: [
        "Sonntag",
        "Montag",
        "Dienstag",
        "Mittwoch",
        "Donnerstag",
        "Freitag",
        "Samstag"
      ]
    },
    months: {
      shorthand: [
        "Jan",
        "Feb",
        "M\xE4r",
        "Apr",
        "Mai",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Okt",
        "Nov",
        "Dez"
      ],
      longhand: [
        "Januar",
        "Februar",
        "M\xE4rz",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "Dezember"
      ]
    },
    firstDayOfWeek: 1,
    weekAbbreviation: "KW",
    rangeSeparator: " bis ",
    scrollTitle: "Zum \xC4ndern scrollen",
    toggleTitle: "Zum Umschalten klicken",
    timeLabel: "Zeit",
    timePickerAriaLabel: "Zeitauswahl",
    doneButtonLabel: "Fertig",
    closeTimePickerAriaLabel: "Zeitauswahl schlie\xDFen",
    selectedTimeAriaLabel: "Ausgew\xE4hlte Zeit",
    time_24hr: true
  };
  fp13.l10ns.de = German;
  var de_default = fp13.l10ns;

  // src/l10n/default.ts
  var english = {
    weekdays: {
      shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      longhand: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ]
    },
    months: {
      shorthand: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      longhand: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ]
    },
    daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    firstDayOfWeek: 0,
    ordinal: (nth) => {
      const s = nth % 100;
      if (s > 3 && s < 21)
        return "th";
      switch (s % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    },
    rangeSeparator: " to ",
    weekAbbreviation: "Wk",
    scrollTitle: "Scroll to increment",
    toggleTitle: "Click to toggle",
    amPM: ["AM", "PM"],
    yearAriaLabel: "Year",
    monthAriaLabel: "Month",
    hourAriaLabel: "Hour",
    minuteAriaLabel: "Minute",
    timeLabel: "Time",
    timePickerAriaLabel: "Time picker popover",
    doneButtonLabel: "Done",
    closeTimePickerAriaLabel: "Close time picker",
    selectedTimeAriaLabel: "Selected time",
    time_24hr: false
  };

  // src/l10n/eo.ts
  var fp14 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Esperanto = {
    firstDayOfWeek: 1,
    rangeSeparator: " \u011Dis ",
    weekAbbreviation: "Sem",
    scrollTitle: "Rulumu por pligrandigi la valoron",
    toggleTitle: "Klaku por \u015Dalti",
    weekdays: {
      shorthand: ["Dim", "Lun", "Mar", "Mer", "\u0134a\u016D", "Ven", "Sab"],
      longhand: [
        "diman\u0109o",
        "lundo",
        "mardo",
        "merkredo",
        "\u0135a\u016Ddo",
        "vendredo",
        "sabato"
      ]
    },
    months: {
      shorthand: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Maj",
        "Jun",
        "Jul",
        "A\u016Dg",
        "Sep",
        "Okt",
        "Nov",
        "Dec"
      ],
      longhand: [
        "januaro",
        "februaro",
        "marto",
        "aprilo",
        "majo",
        "junio",
        "julio",
        "a\u016Dgusto",
        "septembro",
        "oktobro",
        "novembro",
        "decembro"
      ]
    },
    ordinal: () => {
      return "-a";
    },
    time_24hr: true
  };
  fp14.l10ns.eo = Esperanto;
  var eo_default = fp14.l10ns;

  // src/l10n/es.ts
  var fp15 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Spanish = {
    weekdays: {
      shorthand: ["Dom", "Lun", "Mar", "Mi\xE9", "Jue", "Vie", "S\xE1b"],
      longhand: [
        "Domingo",
        "Lunes",
        "Martes",
        "Mi\xE9rcoles",
        "Jueves",
        "Viernes",
        "S\xE1bado"
      ]
    },
    months: {
      shorthand: [
        "Ene",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Jun",
        "Jul",
        "Ago",
        "Sep",
        "Oct",
        "Nov",
        "Dic"
      ],
      longhand: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
      ]
    },
    ordinal: () => {
      return "\xBA";
    },
    firstDayOfWeek: 1,
    rangeSeparator: " a ",
    time_24hr: true
  };
  fp15.l10ns.es = Spanish;
  var es_default = fp15.l10ns;

  // src/l10n/et.ts
  var fp16 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Estonian = {
    weekdays: {
      shorthand: ["P", "E", "T", "K", "N", "R", "L"],
      longhand: [
        "P\xFChap\xE4ev",
        "Esmasp\xE4ev",
        "Teisip\xE4ev",
        "Kolmap\xE4ev",
        "Neljap\xE4ev",
        "Reede",
        "Laup\xE4ev"
      ]
    },
    months: {
      shorthand: [
        "Jaan",
        "Veebr",
        "M\xE4rts",
        "Apr",
        "Mai",
        "Juuni",
        "Juuli",
        "Aug",
        "Sept",
        "Okt",
        "Nov",
        "Dets"
      ],
      longhand: [
        "Jaanuar",
        "Veebruar",
        "M\xE4rts",
        "Aprill",
        "Mai",
        "Juuni",
        "Juuli",
        "August",
        "September",
        "Oktoober",
        "November",
        "Detsember"
      ]
    },
    firstDayOfWeek: 1,
    ordinal: function() {
      return ".";
    },
    weekAbbreviation: "N\xE4d",
    rangeSeparator: " kuni ",
    scrollTitle: "Keri, et suurendada",
    toggleTitle: "Kl\xF5psa, et vahetada",
    time_24hr: true
  };
  fp16.l10ns.et = Estonian;
  var et_default = fp16.l10ns;

  // src/l10n/fa.ts
  var fp17 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Persian = {
    weekdays: {
      shorthand: ["\u06CC\u06A9", "\u062F\u0648", "\u0633\u0647", "\u0686\u0647\u0627\u0631", "\u067E\u0646\u062C", "\u062C\u0645\u0639\u0647", "\u0634\u0646\u0628\u0647"],
      longhand: [
        "\u06CC\u06A9\u200C\u0634\u0646\u0628\u0647",
        "\u062F\u0648\u0634\u0646\u0628\u0647",
        "\u0633\u0647\u200C\u0634\u0646\u0628\u0647",
        "\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647",
        "\u067E\u0646\u0686\u200C\u0634\u0646\u0628\u0647",
        "\u062C\u0645\u0639\u0647",
        "\u0634\u0646\u0628\u0647"
      ]
    },
    months: {
      shorthand: [
        "\u0698\u0627\u0646\u0648\u06CC\u0647",
        "\u0641\u0648\u0631\u06CC\u0647",
        "\u0645\u0627\u0631\u0633",
        "\u0622\u0648\u0631\u06CC\u0644",
        "\u0645\u0647",
        "\u0698\u0648\u0626\u0646",
        "\u0698\u0648\u0626\u06CC\u0647",
        "\u0627\u0648\u062A",
        "\u0633\u067E\u062A\u0627\u0645\u0628\u0631",
        "\u0627\u06A9\u062A\u0628\u0631",
        "\u0646\u0648\u0627\u0645\u0628\u0631",
        "\u062F\u0633\u0627\u0645\u0628\u0631"
      ],
      longhand: [
        "\u0698\u0627\u0646\u0648\u06CC\u0647",
        "\u0641\u0648\u0631\u06CC\u0647",
        "\u0645\u0627\u0631\u0633",
        "\u0622\u0648\u0631\u06CC\u0644",
        "\u0645\u0647",
        "\u0698\u0648\u0626\u0646",
        "\u0698\u0648\u0626\u06CC\u0647",
        "\u0627\u0648\u062A",
        "\u0633\u067E\u062A\u0627\u0645\u0628\u0631",
        "\u0627\u06A9\u062A\u0628\u0631",
        "\u0646\u0648\u0627\u0645\u0628\u0631",
        "\u062F\u0633\u0627\u0645\u0628\u0631"
      ]
    },
    firstDayOfWeek: 6,
    ordinal: () => {
      return "";
    }
  };
  fp17.l10ns.fa = Persian;
  var fa_default = fp17.l10ns;

  // src/l10n/fi.ts
  var fp18 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Finnish = {
    firstDayOfWeek: 1,
    weekdays: {
      shorthand: ["su", "ma", "ti", "ke", "to", "pe", "la"],
      longhand: [
        "sunnuntai",
        "maanantai",
        "tiistai",
        "keskiviikko",
        "torstai",
        "perjantai",
        "lauantai"
      ]
    },
    months: {
      shorthand: [
        "tammi",
        "helmi",
        "maalis",
        "huhti",
        "touko",
        "kes\xE4",
        "hein\xE4",
        "elo",
        "syys",
        "loka",
        "marras",
        "joulu"
      ],
      longhand: [
        "tammikuu",
        "helmikuu",
        "maaliskuu",
        "huhtikuu",
        "toukokuu",
        "kes\xE4kuu",
        "hein\xE4kuu",
        "elokuu",
        "syyskuu",
        "lokakuu",
        "marraskuu",
        "joulukuu"
      ]
    },
    ordinal: () => {
      return ".";
    },
    time_24hr: true
  };
  fp18.l10ns.fi = Finnish;
  var fi_default = fp18.l10ns;

  // src/l10n/fo.ts
  var fp19 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Faroese = {
    weekdays: {
      shorthand: ["Sun", "M\xE1n", "T\xFDs", "Mik", "H\xF3s", "Fr\xED", "Ley"],
      longhand: [
        "Sunnudagur",
        "M\xE1nadagur",
        "T\xFDsdagur",
        "Mikudagur",
        "H\xF3sdagur",
        "Fr\xEDggjadagur",
        "Leygardagur"
      ]
    },
    months: {
      shorthand: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Mai",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Okt",
        "Nov",
        "Des"
      ],
      longhand: [
        "Januar",
        "Februar",
        "Mars",
        "Apr\xEDl",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "Septembur",
        "Oktobur",
        "Novembur",
        "Desembur"
      ]
    },
    ordinal: () => {
      return ".";
    },
    firstDayOfWeek: 1,
    rangeSeparator: " til ",
    weekAbbreviation: "vika",
    scrollTitle: "Rulla fyri at broyta",
    toggleTitle: "Tr\xFDst fyri at skifta",
    yearAriaLabel: "\xC1r",
    time_24hr: true
  };
  fp19.l10ns.fo = Faroese;
  var fo_default = fp19.l10ns;

  // src/l10n/fr.ts
  var fp20 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var French = {
    firstDayOfWeek: 1,
    weekdays: {
      shorthand: ["dim", "lun", "mar", "mer", "jeu", "ven", "sam"],
      longhand: [
        "dimanche",
        "lundi",
        "mardi",
        "mercredi",
        "jeudi",
        "vendredi",
        "samedi"
      ]
    },
    months: {
      shorthand: [
        "janv",
        "f\xE9vr",
        "mars",
        "avr",
        "mai",
        "juin",
        "juil",
        "ao\xFBt",
        "sept",
        "oct",
        "nov",
        "d\xE9c"
      ],
      longhand: [
        "janvier",
        "f\xE9vrier",
        "mars",
        "avril",
        "mai",
        "juin",
        "juillet",
        "ao\xFBt",
        "septembre",
        "octobre",
        "novembre",
        "d\xE9cembre"
      ]
    },
    ordinal: (nth) => {
      if (nth > 1)
        return "";
      return "er";
    },
    rangeSeparator: " au ",
    weekAbbreviation: "Sem",
    scrollTitle: "D\xE9filer pour augmenter la valeur",
    toggleTitle: "Cliquer pour basculer",
    time_24hr: true
  };
  fp20.l10ns.fr = French;
  var fr_default = fp20.l10ns;

  // src/l10n/gr.ts
  var fp21 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Greek = {
    weekdays: {
      shorthand: ["\u039A\u03C5", "\u0394\u03B5", "\u03A4\u03C1", "\u03A4\u03B5", "\u03A0\u03AD", "\u03A0\u03B1", "\u03A3\u03AC"],
      longhand: [
        "\u039A\u03C5\u03C1\u03B9\u03B1\u03BA\u03AE",
        "\u0394\u03B5\u03C5\u03C4\u03AD\u03C1\u03B1",
        "\u03A4\u03C1\u03AF\u03C4\u03B7",
        "\u03A4\u03B5\u03C4\u03AC\u03C1\u03C4\u03B7",
        "\u03A0\u03AD\u03BC\u03C0\u03C4\u03B7",
        "\u03A0\u03B1\u03C1\u03B1\u03C3\u03BA\u03B5\u03C5\u03AE",
        "\u03A3\u03AC\u03B2\u03B2\u03B1\u03C4\u03BF"
      ]
    },
    months: {
      shorthand: [
        "\u0399\u03B1\u03BD",
        "\u03A6\u03B5\u03B2",
        "\u039C\u03AC\u03C1",
        "\u0391\u03C0\u03C1",
        "\u039C\u03AC\u03B9",
        "\u0399\u03BF\u03CD\u03BD",
        "\u0399\u03BF\u03CD\u03BB",
        "\u0391\u03CD\u03B3",
        "\u03A3\u03B5\u03C0",
        "\u039F\u03BA\u03C4",
        "\u039D\u03BF\u03AD",
        "\u0394\u03B5\u03BA"
      ],
      longhand: [
        "\u0399\u03B1\u03BD\u03BF\u03C5\u03AC\u03C1\u03B9\u03BF\u03C2",
        "\u03A6\u03B5\u03B2\u03C1\u03BF\u03C5\u03AC\u03C1\u03B9\u03BF\u03C2",
        "\u039C\u03AC\u03C1\u03C4\u03B9\u03BF\u03C2",
        "\u0391\u03C0\u03C1\u03AF\u03BB\u03B9\u03BF\u03C2",
        "\u039C\u03AC\u03B9\u03BF\u03C2",
        "\u0399\u03BF\u03CD\u03BD\u03B9\u03BF\u03C2",
        "\u0399\u03BF\u03CD\u03BB\u03B9\u03BF\u03C2",
        "\u0391\u03CD\u03B3\u03BF\u03C5\u03C3\u03C4\u03BF\u03C2",
        "\u03A3\u03B5\u03C0\u03C4\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2",
        "\u039F\u03BA\u03C4\u03CE\u03B2\u03C1\u03B9\u03BF\u03C2",
        "\u039D\u03BF\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2",
        "\u0394\u03B5\u03BA\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2"
      ]
    },
    firstDayOfWeek: 1,
    ordinal: function() {
      return "";
    },
    weekAbbreviation: "\u0395\u03B2\u03B4",
    rangeSeparator: " \u03AD\u03C9\u03C2 ",
    scrollTitle: "\u039C\u03B5\u03C4\u03B1\u03BA\u03C5\u03BB\u03AE\u03C3\u03C4\u03B5 \u03B3\u03B9\u03B1 \u03C0\u03C1\u03BF\u03C3\u03B1\u03CD\u03BE\u03B7\u03C3\u03B7",
    toggleTitle: "\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03B3\u03B9\u03B1 \u03B1\u03BB\u03BB\u03B1\u03B3\u03AE",
    amPM: ["\u03A0\u039C", "\u039C\u039C"],
    yearAriaLabel: "\u03C7\u03C1\u03CC\u03BD\u03BF\u03C2",
    monthAriaLabel: "\u03BC\u03AE\u03BD\u03B1\u03C2",
    hourAriaLabel: "\u03CE\u03C1\u03B1",
    minuteAriaLabel: "\u03BB\u03B5\u03C0\u03C4\u03CC"
  };
  fp21.l10ns.gr = Greek;
  var gr_default = fp21.l10ns;

  // src/l10n/he.ts
  var fp22 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Hebrew = {
    weekdays: {
      shorthand: ["\u05D0", "\u05D1", "\u05D2", "\u05D3", "\u05D4", "\u05D5", "\u05E9"],
      longhand: ["\u05E8\u05D0\u05E9\u05D5\u05DF", "\u05E9\u05E0\u05D9", "\u05E9\u05DC\u05D9\u05E9\u05D9", "\u05E8\u05D1\u05D9\u05E2\u05D9", "\u05D7\u05DE\u05D9\u05E9\u05D9", "\u05E9\u05D9\u05E9\u05D9", "\u05E9\u05D1\u05EA"]
    },
    months: {
      shorthand: [
        "\u05D9\u05E0\u05D5\u05F3",
        "\u05E4\u05D1\u05E8\u05F3",
        "\u05DE\u05E8\u05E5",
        "\u05D0\u05E4\u05E8\u05F3",
        "\u05DE\u05D0\u05D9",
        "\u05D9\u05D5\u05E0\u05D9",
        "\u05D9\u05D5\u05DC\u05D9",
        "\u05D0\u05D5\u05D2\u05F3",
        "\u05E1\u05E4\u05D8\u05F3",
        "\u05D0\u05D5\u05E7\u05F3",
        "\u05E0\u05D5\u05D1\u05F3",
        "\u05D3\u05E6\u05DE\u05F3"
      ],
      longhand: [
        "\u05D9\u05E0\u05D5\u05D0\u05E8",
        "\u05E4\u05D1\u05E8\u05D5\u05D0\u05E8",
        "\u05DE\u05E8\u05E5",
        "\u05D0\u05E4\u05E8\u05D9\u05DC",
        "\u05DE\u05D0\u05D9",
        "\u05D9\u05D5\u05E0\u05D9",
        "\u05D9\u05D5\u05DC\u05D9",
        "\u05D0\u05D5\u05D2\u05D5\u05E1\u05D8",
        "\u05E1\u05E4\u05D8\u05DE\u05D1\u05E8",
        "\u05D0\u05D5\u05E7\u05D8\u05D5\u05D1\u05E8",
        "\u05E0\u05D5\u05D1\u05DE\u05D1\u05E8",
        "\u05D3\u05E6\u05DE\u05D1\u05E8"
      ]
    },
    rangeSeparator: " \u05D0\u05DC ",
    time_24hr: true
  };
  fp22.l10ns.he = Hebrew;
  var he_default = fp22.l10ns;

  // src/l10n/hi.ts
  var fp23 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
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
  fp23.l10ns.hi = Hindi;
  var hi_default = fp23.l10ns;

  // src/l10n/hr.ts
  var fp24 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Croatian = {
    firstDayOfWeek: 1,
    weekdays: {
      shorthand: ["Ned", "Pon", "Uto", "Sri", "\u010Cet", "Pet", "Sub"],
      longhand: [
        "Nedjelja",
        "Ponedjeljak",
        "Utorak",
        "Srijeda",
        "\u010Cetvrtak",
        "Petak",
        "Subota"
      ]
    },
    months: {
      shorthand: [
        "Sij",
        "Velj",
        "O\u017Eu",
        "Tra",
        "Svi",
        "Lip",
        "Srp",
        "Kol",
        "Ruj",
        "Lis",
        "Stu",
        "Pro"
      ],
      longhand: [
        "Sije\u010Danj",
        "Velja\u010Da",
        "O\u017Eujak",
        "Travanj",
        "Svibanj",
        "Lipanj",
        "Srpanj",
        "Kolovoz",
        "Rujan",
        "Listopad",
        "Studeni",
        "Prosinac"
      ]
    },
    time_24hr: true
  };
  fp24.l10ns.hr = Croatian;
  var hr_default = fp24.l10ns;

  // src/l10n/hu.ts
  var fp25 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Hungarian = {
    firstDayOfWeek: 1,
    weekdays: {
      shorthand: ["V", "H", "K", "Sz", "Cs", "P", "Szo"],
      longhand: [
        "Vas\xE1rnap",
        "H\xE9tf\u0151",
        "Kedd",
        "Szerda",
        "Cs\xFCt\xF6rt\xF6k",
        "P\xE9ntek",
        "Szombat"
      ]
    },
    months: {
      shorthand: [
        "Jan",
        "Feb",
        "M\xE1r",
        "\xC1pr",
        "M\xE1j",
        "J\xFAn",
        "J\xFAl",
        "Aug",
        "Szep",
        "Okt",
        "Nov",
        "Dec"
      ],
      longhand: [
        "Janu\xE1r",
        "Febru\xE1r",
        "M\xE1rcius",
        "\xC1prilis",
        "M\xE1jus",
        "J\xFAnius",
        "J\xFAlius",
        "Augusztus",
        "Szeptember",
        "Okt\xF3ber",
        "November",
        "December"
      ]
    },
    ordinal: function() {
      return ".";
    },
    weekAbbreviation: "H\xE9t",
    scrollTitle: "G\xF6rgessen",
    toggleTitle: "Kattintson a v\xE1lt\xE1shoz",
    rangeSeparator: " - ",
    time_24hr: true
  };
  fp25.l10ns.hu = Hungarian;
  var hu_default = fp25.l10ns;

  // src/l10n/hy.ts
  var fp26 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
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
  fp26.l10ns.hy = Armenian;
  var hy_default = fp26.l10ns;

  // src/l10n/id.ts
  var fp27 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Indonesian = {
    weekdays: {
      shorthand: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
      longhand: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
    },
    months: {
      shorthand: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Mei",
        "Jun",
        "Jul",
        "Agu",
        "Sep",
        "Okt",
        "Nov",
        "Des"
      ],
      longhand: [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember"
      ]
    },
    firstDayOfWeek: 1,
    ordinal: () => {
      return "";
    },
    time_24hr: true,
    rangeSeparator: " - "
  };
  fp27.l10ns.id = Indonesian;
  var id_default = fp27.l10ns;

  // src/l10n/is.ts
  var fp28 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Icelandic = {
    weekdays: {
      shorthand: ["Sun", "M\xE1n", "\xDEri", "Mi\xF0", "Fim", "F\xF6s", "Lau"],
      longhand: [
        "Sunnudagur",
        "M\xE1nudagur",
        "\xDEri\xF0judagur",
        "Mi\xF0vikudagur",
        "Fimmtudagur",
        "F\xF6studagur",
        "Laugardagur"
      ]
    },
    months: {
      shorthand: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Ma\xED",
        "J\xFAn",
        "J\xFAl",
        "\xC1g\xFA",
        "Sep",
        "Okt",
        "N\xF3v",
        "Des"
      ],
      longhand: [
        "Jan\xFAar",
        "Febr\xFAar",
        "Mars",
        "Apr\xEDl",
        "Ma\xED",
        "J\xFAn\xED",
        "J\xFAl\xED",
        "\xC1g\xFAst",
        "September",
        "Okt\xF3ber",
        "N\xF3vember",
        "Desember"
      ]
    },
    ordinal: () => {
      return ".";
    },
    firstDayOfWeek: 1,
    rangeSeparator: " til ",
    weekAbbreviation: "vika",
    yearAriaLabel: "\xC1r",
    time_24hr: true
  };
  fp28.l10ns.is = Icelandic;
  var is_default = fp28.l10ns;

  // src/l10n/it.ts
  var fp29 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Italian = {
    weekdays: {
      shorthand: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
      longhand: [
        "Domenica",
        "Luned\xEC",
        "Marted\xEC",
        "Mercoled\xEC",
        "Gioved\xEC",
        "Venerd\xEC",
        "Sabato"
      ]
    },
    months: {
      shorthand: [
        "Gen",
        "Feb",
        "Mar",
        "Apr",
        "Mag",
        "Giu",
        "Lug",
        "Ago",
        "Set",
        "Ott",
        "Nov",
        "Dic"
      ],
      longhand: [
        "Gennaio",
        "Febbraio",
        "Marzo",
        "Aprile",
        "Maggio",
        "Giugno",
        "Luglio",
        "Agosto",
        "Settembre",
        "Ottobre",
        "Novembre",
        "Dicembre"
      ]
    },
    firstDayOfWeek: 1,
    ordinal: () => "\xB0",
    rangeSeparator: " al ",
    weekAbbreviation: "Se",
    scrollTitle: "Scrolla per aumentare",
    toggleTitle: "Clicca per cambiare",
    time_24hr: true
  };
  fp29.l10ns.it = Italian;
  var it_default = fp29.l10ns;

  // src/l10n/ja.ts
  var fp30 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Japanese = {
    weekdays: {
      shorthand: ["\u65E5", "\u6708", "\u706B", "\u6C34", "\u6728", "\u91D1", "\u571F"],
      longhand: [
        "\u65E5\u66DC\u65E5",
        "\u6708\u66DC\u65E5",
        "\u706B\u66DC\u65E5",
        "\u6C34\u66DC\u65E5",
        "\u6728\u66DC\u65E5",
        "\u91D1\u66DC\u65E5",
        "\u571F\u66DC\u65E5"
      ]
    },
    months: {
      shorthand: [
        "1\u6708",
        "2\u6708",
        "3\u6708",
        "4\u6708",
        "5\u6708",
        "6\u6708",
        "7\u6708",
        "8\u6708",
        "9\u6708",
        "10\u6708",
        "11\u6708",
        "12\u6708"
      ],
      longhand: [
        "1\u6708",
        "2\u6708",
        "3\u6708",
        "4\u6708",
        "5\u6708",
        "6\u6708",
        "7\u6708",
        "8\u6708",
        "9\u6708",
        "10\u6708",
        "11\u6708",
        "12\u6708"
      ]
    },
    time_24hr: true,
    rangeSeparator: " \u304B\u3089 ",
    monthAriaLabel: "\u6708",
    amPM: ["\u5348\u524D", "\u5348\u5F8C"],
    yearAriaLabel: "\u5E74",
    hourAriaLabel: "\u6642\u9593",
    minuteAriaLabel: "\u5206"
  };
  fp30.l10ns.ja = Japanese;
  var ja_default = fp30.l10ns;

  // src/l10n/ka.ts
  var fp31 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Georgian = {
    weekdays: {
      shorthand: ["\u10D9\u10D5", "\u10DD\u10E0", "\u10E1\u10D0", "\u10DD\u10D7", "\u10EE\u10E3", "\u10DE\u10D0", "\u10E8\u10D0"],
      longhand: [
        "\u10D9\u10D5\u10D8\u10E0\u10D0",
        "\u10DD\u10E0\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8",
        "\u10E1\u10D0\u10DB\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8",
        "\u10DD\u10D7\u10EE\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8",
        "\u10EE\u10E3\u10D7\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8",
        "\u10DE\u10D0\u10E0\u10D0\u10E1\u10D9\u10D4\u10D5\u10D8",
        "\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8"
      ]
    },
    months: {
      shorthand: [
        "\u10D8\u10D0\u10DC",
        "\u10D7\u10D4\u10D1",
        "\u10DB\u10D0\u10E0",
        "\u10D0\u10DE\u10E0",
        "\u10DB\u10D0\u10D8",
        "\u10D8\u10D5\u10DC",
        "\u10D8\u10D5\u10DA",
        "\u10D0\u10D2\u10D5",
        "\u10E1\u10D4\u10E5",
        "\u10DD\u10E5\u10E2",
        "\u10DC\u10DD\u10D4",
        "\u10D3\u10D4\u10D9"
      ],
      longhand: [
        "\u10D8\u10D0\u10DC\u10D5\u10D0\u10E0\u10D8",
        "\u10D7\u10D4\u10D1\u10D4\u10E0\u10D5\u10D0\u10DA\u10D8",
        "\u10DB\u10D0\u10E0\u10E2\u10D8",
        "\u10D0\u10DE\u10E0\u10D8\u10DA\u10D8",
        "\u10DB\u10D0\u10D8\u10E1\u10D8",
        "\u10D8\u10D5\u10DC\u10D8\u10E1\u10D8",
        "\u10D8\u10D5\u10DA\u10D8\u10E1\u10D8",
        "\u10D0\u10D2\u10D5\u10D8\u10E1\u10E2\u10DD",
        "\u10E1\u10D4\u10E5\u10E2\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8",
        "\u10DD\u10E5\u10E2\u10DD\u10DB\u10D1\u10D4\u10E0\u10D8",
        "\u10DC\u10DD\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8",
        "\u10D3\u10D4\u10D9\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8"
      ]
    },
    firstDayOfWeek: 1,
    ordinal: function() {
      return "";
    },
    rangeSeparator: " \u2014 ",
    weekAbbreviation: "\u10D9\u10D5.",
    scrollTitle: "\u10D3\u10D0\u10E1\u10E5\u10E0\u10DD\u10DA\u10D4\u10D7 \u10D2\u10D0\u10E1\u10D0\u10D3\u10D8\u10D3\u10D4\u10D1\u10DA\u10D0\u10D3",
    toggleTitle: "\u10D3\u10D0\u10D0\u10D9\u10DA\u10D8\u10D9\u10D4\u10D7 \u10D2\u10D0\u10D3\u10D0\u10E0\u10D7\u10D5\u10D8\u10E1\u10D7\u10D5\u10D8\u10E1",
    amPM: ["AM", "PM"],
    yearAriaLabel: "\u10EC\u10D4\u10DA\u10D8",
    time_24hr: true
  };
  fp31.l10ns.ka = Georgian;
  var ka_default = fp31.l10ns;

  // src/l10n/ko.ts
  var fp32 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Korean = {
    weekdays: {
      shorthand: ["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"],
      longhand: [
        "\uC77C\uC694\uC77C",
        "\uC6D4\uC694\uC77C",
        "\uD654\uC694\uC77C",
        "\uC218\uC694\uC77C",
        "\uBAA9\uC694\uC77C",
        "\uAE08\uC694\uC77C",
        "\uD1A0\uC694\uC77C"
      ]
    },
    months: {
      shorthand: [
        "1\uC6D4",
        "2\uC6D4",
        "3\uC6D4",
        "4\uC6D4",
        "5\uC6D4",
        "6\uC6D4",
        "7\uC6D4",
        "8\uC6D4",
        "9\uC6D4",
        "10\uC6D4",
        "11\uC6D4",
        "12\uC6D4"
      ],
      longhand: [
        "1\uC6D4",
        "2\uC6D4",
        "3\uC6D4",
        "4\uC6D4",
        "5\uC6D4",
        "6\uC6D4",
        "7\uC6D4",
        "8\uC6D4",
        "9\uC6D4",
        "10\uC6D4",
        "11\uC6D4",
        "12\uC6D4"
      ]
    },
    ordinal: () => {
      return "\uC77C";
    },
    rangeSeparator: " ~ ",
    amPM: ["\uC624\uC804", "\uC624\uD6C4"]
  };
  fp32.l10ns.ko = Korean;
  var ko_default = fp32.l10ns;

  // src/l10n/km.ts
  var fp33 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Khmer = {
    weekdays: {
      shorthand: ["\u17A2\u17B6\u1791\u17B7\u178F\u17D2\u1799", "\u1785\u1793\u17D2\u1791", "\u17A2\u1784\u17D2\u1782\u17B6\u179A", "\u1796\u17BB\u1792", "\u1796\u17D2\u179A\u17A0\u179F.", "\u179F\u17BB\u1780\u17D2\u179A", "\u179F\u17C5\u179A\u17CD"],
      longhand: [
        "\u17A2\u17B6\u1791\u17B7\u178F\u17D2\u1799",
        "\u1785\u1793\u17D2\u1791",
        "\u17A2\u1784\u17D2\u1782\u17B6\u179A",
        "\u1796\u17BB\u1792",
        "\u1796\u17D2\u179A\u17A0\u179F\u17D2\u1794\u178F\u17B7\u17CD",
        "\u179F\u17BB\u1780\u17D2\u179A",
        "\u179F\u17C5\u179A\u17CD"
      ]
    },
    months: {
      shorthand: [
        "\u1798\u1780\u179A\u17B6",
        "\u1780\u17BB\u1798\u17D2\u1797\u17C7",
        "\u1798\u17B8\u1793\u17B6",
        "\u1798\u17C1\u179F\u17B6",
        "\u17A7\u179F\u1797\u17B6",
        "\u1798\u17B7\u1790\u17BB\u1793\u17B6",
        "\u1780\u1780\u17D2\u1780\u178A\u17B6",
        "\u179F\u17B8\u17A0\u17B6",
        "\u1780\u1789\u17D2\u1789\u17B6",
        "\u178F\u17BB\u179B\u17B6",
        "\u179C\u17B7\u1785\u17D2\u1786\u17B7\u1780\u17B6",
        "\u1792\u17D2\u1793\u17BC"
      ],
      longhand: [
        "\u1798\u1780\u179A\u17B6",
        "\u1780\u17BB\u1798\u17D2\u1797\u17C7",
        "\u1798\u17B8\u1793\u17B6",
        "\u1798\u17C1\u179F\u17B6",
        "\u17A7\u179F\u1797\u17B6",
        "\u1798\u17B7\u1790\u17BB\u1793\u17B6",
        "\u1780\u1780\u17D2\u1780\u178A\u17B6",
        "\u179F\u17B8\u17A0\u17B6",
        "\u1780\u1789\u17D2\u1789\u17B6",
        "\u178F\u17BB\u179B\u17B6",
        "\u179C\u17B7\u1785\u17D2\u1786\u17B7\u1780\u17B6",
        "\u1792\u17D2\u1793\u17BC"
      ]
    },
    ordinal: () => {
      return "";
    },
    firstDayOfWeek: 1,
    rangeSeparator: " \u178A\u179B\u17CB ",
    weekAbbreviation: "\u179F\u1794\u17D2\u178F\u17B6\u17A0\u17CD",
    scrollTitle: "\u179A\u17C6\u1780\u17B7\u179B\u178A\u17BE\u1798\u17D2\u1794\u17B8\u1794\u1784\u17D2\u1780\u17BE\u1793",
    toggleTitle: "\u1785\u17BB\u1785\u178A\u17BE\u1798\u17D2\u1794\u17B8\u1795\u17D2\u179B\u17B6\u179F\u17CB\u1794\u17D2\u178A\u17BC\u179A",
    yearAriaLabel: "\u1786\u17D2\u1793\u17B6\u17C6",
    time_24hr: true
  };
  fp33.l10ns.km = Khmer;
  var km_default = fp33.l10ns;

  // src/l10n/kz.ts
  var fp34 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Kazakh = {
    weekdays: {
      shorthand: ["\u0416\u0441", "\u0414\u0441", "\u0421c", "\u0421\u0440", "\u0411\u0441", "\u0416\u043C", "\u0421\u0431"],
      longhand: [
        "\u0416\u0435\u043A\u0441\u0435\u043D\u0431i",
        "\u0414\u04AF\u0439\u0441\u0435\u043D\u0431i",
        "\u0421\u0435\u0439\u0441\u0435\u043D\u0431i",
        "\u0421\u04D9\u0440\u0441\u0435\u043D\u0431i",
        "\u0411\u0435\u0439\u0441\u0435\u043D\u0431i",
        "\u0416\u04B1\u043C\u0430",
        "\u0421\u0435\u043D\u0431i"
      ]
    },
    months: {
      shorthand: [
        "\u049A\u0430\u04A3",
        "\u0410\u049B\u043F",
        "\u041D\u0430\u0443",
        "\u0421\u04D9\u0443",
        "\u041C\u0430\u043C",
        "\u041C\u0430\u0443",
        "\u0428i\u043B",
        "\u0422\u0430\u043C",
        "\u049A\u044B\u0440",
        "\u049A\u0430\u0437",
        "\u049A\u0430\u0440",
        "\u0416\u0435\u043B"
      ],
      longhand: [
        "\u049A\u0430\u04A3\u0442\u0430\u0440",
        "\u0410\u049B\u043F\u0430\u043D",
        "\u041D\u0430\u0443\u0440\u044B\u0437",
        "\u0421\u04D9\u0443i\u0440",
        "\u041C\u0430\u043C\u044B\u0440",
        "\u041C\u0430\u0443\u0441\u044B\u043C",
        "\u0428i\u043B\u0434\u0435",
        "\u0422\u0430\u043C\u044B\u0437",
        "\u049A\u044B\u0440\u043A\u04AF\u0439\u0435\u043A",
        "\u049A\u0430\u0437\u0430\u043D",
        "\u049A\u0430\u0440\u0430\u0448\u0430",
        "\u0416\u0435\u043B\u0442\u043E\u049B\u0441\u0430\u043D"
      ]
    },
    firstDayOfWeek: 1,
    ordinal: function() {
      return "";
    },
    rangeSeparator: " \u2014 ",
    weekAbbreviation: "\u0410\u043F\u0442\u0430",
    scrollTitle: "\u04AE\u043B\u043A\u0435\u0439\u0442\u0443 \u04AF\u0448\u0456\u043D \u0430\u0439\u043D\u0430\u043B\u0434\u044B\u0440\u044B\u04A3\u044B\u0437",
    toggleTitle: "\u0410\u0443\u044B\u0441\u0442\u044B\u0440\u0443 \u04AF\u0448\u0456\u043D \u0431\u0430\u0441\u044B\u04A3\u044B\u0437",
    amPM: ["\u0422\u0414", "\u0422\u041A"],
    yearAriaLabel: "\u0416\u044B\u043B"
  };
  fp34.l10ns.kz = Kazakh;
  var kz_default = fp34.l10ns;

  // src/l10n/lt.ts
  var fp35 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Lithuanian = {
    weekdays: {
      shorthand: ["S", "Pr", "A", "T", "K", "Pn", "\u0160"],
      longhand: [
        "Sekmadienis",
        "Pirmadienis",
        "Antradienis",
        "Tre\u010Diadienis",
        "Ketvirtadienis",
        "Penktadienis",
        "\u0160e\u0161tadienis"
      ]
    },
    months: {
      shorthand: [
        "Sau",
        "Vas",
        "Kov",
        "Bal",
        "Geg",
        "Bir",
        "Lie",
        "Rgp",
        "Rgs",
        "Spl",
        "Lap",
        "Grd"
      ],
      longhand: [
        "Sausis",
        "Vasaris",
        "Kovas",
        "Balandis",
        "Gegu\u017E\u0117",
        "Bir\u017Eelis",
        "Liepa",
        "Rugpju\u0304tis",
        "Rugse\u0307jis",
        "Spalis",
        "Lapkritis",
        "Gruodis"
      ]
    },
    firstDayOfWeek: 1,
    ordinal: function() {
      return "-a";
    },
    rangeSeparator: " iki ",
    weekAbbreviation: "Sav",
    scrollTitle: "Keisti laik\u0105 pel\u0117s rateliu",
    toggleTitle: "Perjungti laiko format\u0105",
    time_24hr: true
  };
  fp35.l10ns.lt = Lithuanian;
  var lt_default = fp35.l10ns;

  // src/l10n/lv.ts
  var fp36 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Latvian = {
    firstDayOfWeek: 1,
    weekdays: {
      shorthand: ["Sv", "Pr", "Ot", "Tr", "Ce", "Pk", "Se"],
      longhand: [
        "Sv\u0113tdiena",
        "Pirmdiena",
        "Otrdiena",
        "Tre\u0161diena",
        "Ceturtdiena",
        "Piektdiena",
        "Sestdiena"
      ]
    },
    months: {
      shorthand: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Mai",
        "J\u016Bn",
        "J\u016Bl",
        "Aug",
        "Sep",
        "Okt",
        "Nov",
        "Dec"
      ],
      longhand: [
        "Janv\u0101ris",
        "Febru\u0101ris",
        "Marts",
        "Apr\u012Blis",
        "Maijs",
        "J\u016Bnijs",
        "J\u016Blijs",
        "Augusts",
        "Septembris",
        "Oktobris",
        "Novembris",
        "Decembris"
      ]
    },
    rangeSeparator: " l\u012Bdz ",
    time_24hr: true
  };
  fp36.l10ns.lv = Latvian;
  var lv_default = fp36.l10ns;

  // src/l10n/mk.ts
  var fp37 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Macedonian = {
    weekdays: {
      shorthand: ["\u041D\u0435", "\u041F\u043E", "\u0412\u0442", "\u0421\u0440", "\u0427\u0435", "\u041F\u0435", "\u0421\u0430"],
      longhand: [
        "\u041D\u0435\u0434\u0435\u043B\u0430",
        "\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u043D\u0438\u043A",
        "\u0412\u0442\u043E\u0440\u043D\u0438\u043A",
        "\u0421\u0440\u0435\u0434\u0430",
        "\u0427\u0435\u0442\u0432\u0440\u0442\u043E\u043A",
        "\u041F\u0435\u0442\u043E\u043A",
        "\u0421\u0430\u0431\u043E\u0442\u0430"
      ]
    },
    months: {
      shorthand: [
        "\u0408\u0430\u043D",
        "\u0424\u0435\u0432",
        "\u041C\u0430\u0440",
        "\u0410\u043F\u0440",
        "\u041C\u0430\u0458",
        "\u0408\u0443\u043D",
        "\u0408\u0443\u043B",
        "\u0410\u0432\u0433",
        "\u0421\u0435\u043F",
        "\u041E\u043A\u0442",
        "\u041D\u043E\u0435",
        "\u0414\u0435\u043A"
      ],
      longhand: [
        "\u0408\u0430\u043D\u0443\u0430\u0440\u0438",
        "\u0424\u0435\u0432\u0440\u0443\u0430\u0440\u0438",
        "\u041C\u0430\u0440\u0442",
        "\u0410\u043F\u0440\u0438\u043B",
        "\u041C\u0430\u0458",
        "\u0408\u0443\u043D\u0438",
        "\u0408\u0443\u043B\u0438",
        "\u0410\u0432\u0433\u0443\u0441\u0442",
        "\u0421\u0435\u043F\u0442\u0435\u043C\u0432\u0440\u0438",
        "\u041E\u043A\u0442\u043E\u043C\u0432\u0440\u0438",
        "\u041D\u043E\u0435\u043C\u0432\u0440\u0438",
        "\u0414\u0435\u043A\u0435\u043C\u0432\u0440\u0438"
      ]
    },
    firstDayOfWeek: 1,
    weekAbbreviation: "\u041D\u0435\u0434.",
    rangeSeparator: " \u0434\u043E ",
    time_24hr: true
  };
  fp37.l10ns.mk = Macedonian;
  var mk_default = fp37.l10ns;

  // src/l10n/mn.ts
  var fp38 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Mongolian = {
    firstDayOfWeek: 1,
    weekdays: {
      shorthand: ["\u0414\u0430", "\u041C\u044F", "\u041B\u0445", "\u041F\u04AF", "\u0411\u0430", "\u0411\u044F", "\u041D\u044F"],
      longhand: ["\u0414\u0430\u0432\u0430\u0430", "\u041C\u044F\u0433\u043C\u0430\u0440", "\u041B\u0445\u0430\u0433\u0432\u0430", "\u041F\u04AF\u0440\u044D\u0432", "\u0411\u0430\u0430\u0441\u0430\u043D", "\u0411\u044F\u043C\u0431\u0430", "\u041D\u044F\u043C"]
    },
    months: {
      shorthand: [
        "1-\u0440 \u0441\u0430\u0440",
        "2-\u0440 \u0441\u0430\u0440",
        "3-\u0440 \u0441\u0430\u0440",
        "4-\u0440 \u0441\u0430\u0440",
        "5-\u0440 \u0441\u0430\u0440",
        "6-\u0440 \u0441\u0430\u0440",
        "7-\u0440 \u0441\u0430\u0440",
        "8-\u0440 \u0441\u0430\u0440",
        "9-\u0440 \u0441\u0430\u0440",
        "10-\u0440 \u0441\u0430\u0440",
        "11-\u0440 \u0441\u0430\u0440",
        "12-\u0440 \u0441\u0430\u0440"
      ],
      longhand: [
        "\u041D\u044D\u0433\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440",
        "\u0425\u043E\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440",
        "\u0413\u0443\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440",
        "\u0414\u04E9\u0440\u04E9\u0432\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440",
        "\u0422\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440",
        "\u0417\u0443\u0440\u0433\u0430\u0430\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440",
        "\u0414\u043E\u043B\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440",
        "\u041D\u0430\u0439\u043C\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440",
        "\u0415\u0441\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440",
        "\u0410\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440",
        "\u0410\u0440\u0432\u0430\u043D\u043D\u044D\u0433\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440",
        "\u0410\u0440\u0432\u0430\u043D\u0445\u043E\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440"
      ]
    },
    rangeSeparator: "-\u0441 ",
    time_24hr: true
  };
  fp38.l10ns.mn = Mongolian;
  var mn_default = fp38.l10ns;

  // src/l10n/ms.ts
  var fp39 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
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
  fp39.l10ns.ms = Malaysian;
  var ms_default = fp39.l10ns;

  // src/l10n/my.ts
  var fp40 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
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
  fp40.l10ns.my = Burmese;
  var my_default = fp40.l10ns;

  // src/l10n/nl.ts
  var fp41 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Dutch = {
    weekdays: {
      shorthand: ["zo", "ma", "di", "wo", "do", "vr", "za"],
      longhand: [
        "zondag",
        "maandag",
        "dinsdag",
        "woensdag",
        "donderdag",
        "vrijdag",
        "zaterdag"
      ]
    },
    months: {
      shorthand: [
        "jan",
        "feb",
        "mrt",
        "apr",
        "mei",
        "jun",
        "jul",
        "aug",
        "sept",
        "okt",
        "nov",
        "dec"
      ],
      longhand: [
        "januari",
        "februari",
        "maart",
        "april",
        "mei",
        "juni",
        "juli",
        "augustus",
        "september",
        "oktober",
        "november",
        "december"
      ]
    },
    firstDayOfWeek: 1,
    weekAbbreviation: "wk",
    rangeSeparator: " t/m ",
    scrollTitle: "Scroll voor volgende / vorige",
    toggleTitle: "Klik om te wisselen",
    time_24hr: true,
    ordinal: (nth) => {
      if (nth === 1 || nth === 8 || nth >= 20)
        return "ste";
      return "de";
    }
  };
  fp41.l10ns.nl = Dutch;
  var nl_default = fp41.l10ns;

  // src/l10n/nn.ts
  var fp42 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var NorwegianNynorsk = {
    weekdays: {
      shorthand: ["S\xF8.", "M\xE5.", "Ty.", "On.", "To.", "Fr.", "La."],
      longhand: [
        "S\xF8ndag",
        "M\xE5ndag",
        "Tysdag",
        "Onsdag",
        "Torsdag",
        "Fredag",
        "Laurdag"
      ]
    },
    months: {
      shorthand: [
        "Jan",
        "Feb",
        "Mars",
        "Apr",
        "Mai",
        "Juni",
        "Juli",
        "Aug",
        "Sep",
        "Okt",
        "Nov",
        "Des"
      ],
      longhand: [
        "Januar",
        "Februar",
        "Mars",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "Desember"
      ]
    },
    firstDayOfWeek: 1,
    rangeSeparator: " til ",
    weekAbbreviation: "Veke",
    scrollTitle: "Scroll for \xE5 endre",
    toggleTitle: "Klikk for \xE5 veksle",
    time_24hr: true,
    ordinal: () => {
      return ".";
    }
  };
  fp42.l10ns.nn = NorwegianNynorsk;
  var nn_default = fp42.l10ns;

  // src/l10n/no.ts
  var fp43 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Norwegian = {
    weekdays: {
      shorthand: ["S\xF8n", "Man", "Tir", "Ons", "Tor", "Fre", "L\xF8r"],
      longhand: [
        "S\xF8ndag",
        "Mandag",
        "Tirsdag",
        "Onsdag",
        "Torsdag",
        "Fredag",
        "L\xF8rdag"
      ]
    },
    months: {
      shorthand: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Mai",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Okt",
        "Nov",
        "Des"
      ],
      longhand: [
        "Januar",
        "Februar",
        "Mars",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "Desember"
      ]
    },
    firstDayOfWeek: 1,
    rangeSeparator: " til ",
    weekAbbreviation: "Uke",
    scrollTitle: "Scroll for \xE5 endre",
    toggleTitle: "Klikk for \xE5 veksle",
    time_24hr: true,
    ordinal: () => {
      return ".";
    }
  };
  fp43.l10ns.no = Norwegian;
  var no_default = fp43.l10ns;

  // src/l10n/pa.ts
  var fp44 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
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
  fp44.l10ns.pa = Punjabi;
  var pa_default = fp44.l10ns;

  // src/l10n/pl.ts
  var fp45 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Polish = {
    weekdays: {
      shorthand: ["Nd", "Pn", "Wt", "\u015Ar", "Cz", "Pt", "So"],
      longhand: [
        "Niedziela",
        "Poniedzia\u0142ek",
        "Wtorek",
        "\u015Aroda",
        "Czwartek",
        "Pi\u0105tek",
        "Sobota"
      ]
    },
    months: {
      shorthand: [
        "Sty",
        "Lut",
        "Mar",
        "Kwi",
        "Maj",
        "Cze",
        "Lip",
        "Sie",
        "Wrz",
        "Pa\u017A",
        "Lis",
        "Gru"
      ],
      longhand: [
        "Stycze\u0144",
        "Luty",
        "Marzec",
        "Kwiecie\u0144",
        "Maj",
        "Czerwiec",
        "Lipiec",
        "Sierpie\u0144",
        "Wrzesie\u0144",
        "Pa\u017Adziernik",
        "Listopad",
        "Grudzie\u0144"
      ]
    },
    rangeSeparator: " do ",
    weekAbbreviation: "tydz.",
    scrollTitle: "Przewi\u0144, aby zwi\u0119kszy\u0107",
    toggleTitle: "Kliknij, aby prze\u0142\u0105czy\u0107",
    firstDayOfWeek: 1,
    time_24hr: true,
    ordinal: () => {
      return ".";
    }
  };
  fp45.l10ns.pl = Polish;
  var pl_default = fp45.l10ns;

  // src/l10n/pt.ts
  var fp46 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
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
  fp46.l10ns.pt = Portuguese;
  var pt_default = fp46.l10ns;

  // src/l10n/ro.ts
  var fp47 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Romanian = {
    weekdays: {
      shorthand: ["Dum", "Lun", "Mar", "Mie", "Joi", "Vin", "S\xE2m"],
      longhand: [
        "Duminic\u0103",
        "Luni",
        "Mar\u021Bi",
        "Miercuri",
        "Joi",
        "Vineri",
        "S\xE2mb\u0103t\u0103"
      ]
    },
    months: {
      shorthand: [
        "Ian",
        "Feb",
        "Mar",
        "Apr",
        "Mai",
        "Iun",
        "Iul",
        "Aug",
        "Sep",
        "Oct",
        "Noi",
        "Dec"
      ],
      longhand: [
        "Ianuarie",
        "Februarie",
        "Martie",
        "Aprilie",
        "Mai",
        "Iunie",
        "Iulie",
        "August",
        "Septembrie",
        "Octombrie",
        "Noiembrie",
        "Decembrie"
      ]
    },
    firstDayOfWeek: 1,
    time_24hr: true,
    ordinal: () => {
      return "";
    }
  };
  fp47.l10ns.ro = Romanian;
  var ro_default = fp47.l10ns;

  // src/l10n/ru.ts
  var fp48 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Russian = {
    weekdays: {
      shorthand: ["\u0412\u0441", "\u041F\u043D", "\u0412\u0442", "\u0421\u0440", "\u0427\u0442", "\u041F\u0442", "\u0421\u0431"],
      longhand: [
        "\u0412\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435",
        "\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A",
        "\u0412\u0442\u043E\u0440\u043D\u0438\u043A",
        "\u0421\u0440\u0435\u0434\u0430",
        "\u0427\u0435\u0442\u0432\u0435\u0440\u0433",
        "\u041F\u044F\u0442\u043D\u0438\u0446\u0430",
        "\u0421\u0443\u0431\u0431\u043E\u0442\u0430"
      ]
    },
    months: {
      shorthand: [
        "\u042F\u043D\u0432",
        "\u0424\u0435\u0432",
        "\u041C\u0430\u0440\u0442",
        "\u0410\u043F\u0440",
        "\u041C\u0430\u0439",
        "\u0418\u044E\u043D\u044C",
        "\u0418\u044E\u043B\u044C",
        "\u0410\u0432\u0433",
        "\u0421\u0435\u043D",
        "\u041E\u043A\u0442",
        "\u041D\u043E\u044F",
        "\u0414\u0435\u043A"
      ],
      longhand: [
        "\u042F\u043D\u0432\u0430\u0440\u044C",
        "\u0424\u0435\u0432\u0440\u0430\u043B\u044C",
        "\u041C\u0430\u0440\u0442",
        "\u0410\u043F\u0440\u0435\u043B\u044C",
        "\u041C\u0430\u0439",
        "\u0418\u044E\u043D\u044C",
        "\u0418\u044E\u043B\u044C",
        "\u0410\u0432\u0433\u0443\u0441\u0442",
        "\u0421\u0435\u043D\u0442\u044F\u0431\u0440\u044C",
        "\u041E\u043A\u0442\u044F\u0431\u0440\u044C",
        "\u041D\u043E\u044F\u0431\u0440\u044C",
        "\u0414\u0435\u043A\u0430\u0431\u0440\u044C"
      ]
    },
    firstDayOfWeek: 1,
    ordinal: function() {
      return "";
    },
    rangeSeparator: " \u2014 ",
    weekAbbreviation: "\u041D\u0435\u0434.",
    scrollTitle: "\u041F\u0440\u043E\u043A\u0440\u0443\u0442\u0438\u0442\u0435 \u0434\u043B\u044F \u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u044F",
    toggleTitle: "\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F",
    amPM: ["\u0414\u041F", "\u041F\u041F"],
    yearAriaLabel: "\u0413\u043E\u0434",
    time_24hr: true
  };
  fp48.l10ns.ru = Russian;
  var ru_default = fp48.l10ns;

  // src/l10n/si.ts
  var fp49 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Sinhala = {
    weekdays: {
      shorthand: ["\u0D89", "\u0DC3", "\u0D85", "\u0DB6", "\u0DB6\u0DCA\u200D\u0DBB", "\u0DC3\u0DD2", "\u0DC3\u0DD9"],
      longhand: [
        "\u0D89\u0DBB\u0DD2\u0DAF\u0DCF",
        "\u0DC3\u0DB3\u0DD4\u0DAF\u0DCF",
        "\u0D85\u0D9F\u0DC4\u0DBB\u0DD4\u0DC0\u0DCF\u0DAF\u0DCF",
        "\u0DB6\u0DAF\u0DCF\u0DAF\u0DCF",
        "\u0DB6\u0DCA\u200D\u0DBB\u0DC4\u0DC3\u0DCA\u0DB4\u0DAD\u0DD2\u0DB1\u0DCA\u0DAF\u0DCF",
        "\u0DC3\u0DD2\u0D9A\u0DD4\u0DBB\u0DCF\u0DAF\u0DCF",
        "\u0DC3\u0DD9\u0DB1\u0DC3\u0DD4\u0DBB\u0DCF\u0DAF\u0DCF"
      ]
    },
    months: {
      shorthand: [
        "\u0DA2\u0DB1",
        "\u0DB4\u0DD9\u0DB6",
        "\u0DB8\u0DCF\u0DBB\u0DCA",
        "\u0D85\u0DB4\u0DCA\u200D\u0DBB\u0DDA",
        "\u0DB8\u0DD0\u0DBA\u0DD2",
        "\u0DA2\u0DD4\u0DB1\u0DD2",
        "\u0DA2\u0DD6\u0DBD\u0DD2",
        "\u0D85\u0D9C\u0DDD",
        "\u0DC3\u0DD0\u0DB4\u0DCA",
        "\u0D94\u0D9A\u0DCA",
        "\u0DB1\u0DDC\u0DC0\u0DD0",
        "\u0DAF\u0DD9\u0DC3\u0DD0"
      ],
      longhand: [
        "\u0DA2\u0DB1\u0DC0\u0DCF\u0DBB\u0DD2",
        "\u0DB4\u0DD9\u0DB6\u0DBB\u0DC0\u0DCF\u0DBB\u0DD2",
        "\u0DB8\u0DCF\u0DBB\u0DCA\u0DAD\u0DD4",
        "\u0D85\u0DB4\u0DCA\u200D\u0DBB\u0DDA\u0DBD\u0DCA",
        "\u0DB8\u0DD0\u0DBA\u0DD2",
        "\u0DA2\u0DD4\u0DB1\u0DD2",
        "\u0DA2\u0DD6\u0DBD\u0DD2",
        "\u0D85\u0D9C\u0DDD\u0DC3\u0DCA\u0DAD\u0DD4",
        "\u0DC3\u0DD0\u0DB4\u0DCA\u0DAD\u0DD0\u0DB8\u0DCA\u0DB6\u0DBB\u0DCA",
        "\u0D94\u0D9A\u0DCA\u0DAD\u0DDD\u0DB6\u0DBB\u0DCA",
        "\u0DB1\u0DDC\u0DC0\u0DD0\u0DB8\u0DCA\u0DB6\u0DBB\u0DCA",
        "\u0DAF\u0DD9\u0DC3\u0DD0\u0DB8\u0DCA\u0DB6\u0DBB\u0DCA"
      ]
    },
    time_24hr: true
  };
  fp49.l10ns.si = Sinhala;
  var si_default = fp49.l10ns;

  // src/l10n/sk.ts
  var fp50 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Slovak = {
    weekdays: {
      shorthand: ["Ned", "Pon", "Ut", "Str", "\u0160tv", "Pia", "Sob"],
      longhand: [
        "Nede\u013Ea",
        "Pondelok",
        "Utorok",
        "Streda",
        "\u0160tvrtok",
        "Piatok",
        "Sobota"
      ]
    },
    months: {
      shorthand: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "M\xE1j",
        "J\xFAn",
        "J\xFAl",
        "Aug",
        "Sep",
        "Okt",
        "Nov",
        "Dec"
      ],
      longhand: [
        "Janu\xE1r",
        "Febru\xE1r",
        "Marec",
        "Apr\xEDl",
        "M\xE1j",
        "J\xFAn",
        "J\xFAl",
        "August",
        "September",
        "Okt\xF3ber",
        "November",
        "December"
      ]
    },
    firstDayOfWeek: 1,
    rangeSeparator: " do ",
    time_24hr: true,
    ordinal: function() {
      return ".";
    }
  };
  fp50.l10ns.sk = Slovak;
  var sk_default = fp50.l10ns;

  // src/l10n/sl.ts
  var fp51 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Slovenian = {
    weekdays: {
      shorthand: ["Ned", "Pon", "Tor", "Sre", "\u010Cet", "Pet", "Sob"],
      longhand: [
        "Nedelja",
        "Ponedeljek",
        "Torek",
        "Sreda",
        "\u010Cetrtek",
        "Petek",
        "Sobota"
      ]
    },
    months: {
      shorthand: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Maj",
        "Jun",
        "Jul",
        "Avg",
        "Sep",
        "Okt",
        "Nov",
        "Dec"
      ],
      longhand: [
        "Januar",
        "Februar",
        "Marec",
        "April",
        "Maj",
        "Junij",
        "Julij",
        "Avgust",
        "September",
        "Oktober",
        "November",
        "December"
      ]
    },
    firstDayOfWeek: 1,
    rangeSeparator: " do ",
    time_24hr: true,
    ordinal: function() {
      return ".";
    }
  };
  fp51.l10ns.sl = Slovenian;
  var sl_default = fp51.l10ns;

  // src/l10n/sq.ts
  var fp52 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Albanian = {
    weekdays: {
      shorthand: ["Di", "H\xEB", "Ma", "M\xEB", "En", "Pr", "Sh"],
      longhand: [
        "E Diel",
        "E H\xEBn\xEB",
        "E Mart\xEB",
        "E M\xEBrkur\xEB",
        "E Enjte",
        "E Premte",
        "E Shtun\xEB"
      ]
    },
    months: {
      shorthand: [
        "Jan",
        "Shk",
        "Mar",
        "Pri",
        "Maj",
        "Qer",
        "Kor",
        "Gus",
        "Sht",
        "Tet",
        "N\xEBn",
        "Dhj"
      ],
      longhand: [
        "Janar",
        "Shkurt",
        "Mars",
        "Prill",
        "Maj",
        "Qershor",
        "Korrik",
        "Gusht",
        "Shtator",
        "Tetor",
        "N\xEBntor",
        "Dhjetor"
      ]
    },
    firstDayOfWeek: 1,
    rangeSeparator: " deri ",
    weekAbbreviation: "Java",
    yearAriaLabel: "Viti",
    monthAriaLabel: "Muaji",
    hourAriaLabel: "Ora",
    minuteAriaLabel: "Minuta",
    time_24hr: true
  };
  fp52.l10ns.sq = Albanian;
  var sq_default = fp52.l10ns;

  // src/l10n/sr.ts
  var fp53 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Serbian = {
    weekdays: {
      shorthand: ["Ned", "Pon", "Uto", "Sre", "\u010Cet", "Pet", "Sub"],
      longhand: [
        "Nedelja",
        "Ponedeljak",
        "Utorak",
        "Sreda",
        "\u010Cetvrtak",
        "Petak",
        "Subota"
      ]
    },
    months: {
      shorthand: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Maj",
        "Jun",
        "Jul",
        "Avg",
        "Sep",
        "Okt",
        "Nov",
        "Dec"
      ],
      longhand: [
        "Januar",
        "Februar",
        "Mart",
        "April",
        "Maj",
        "Jun",
        "Jul",
        "Avgust",
        "Septembar",
        "Oktobar",
        "Novembar",
        "Decembar"
      ]
    },
    firstDayOfWeek: 1,
    weekAbbreviation: "Ned.",
    rangeSeparator: " do ",
    time_24hr: true
  };
  fp53.l10ns.sr = Serbian;
  var sr_default = fp53.l10ns;

  // src/l10n/sv.ts
  var fp54 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Swedish = {
    firstDayOfWeek: 1,
    weekAbbreviation: "v",
    weekdays: {
      shorthand: ["s\xF6n", "m\xE5n", "tis", "ons", "tor", "fre", "l\xF6r"],
      longhand: [
        "s\xF6ndag",
        "m\xE5ndag",
        "tisdag",
        "onsdag",
        "torsdag",
        "fredag",
        "l\xF6rdag"
      ]
    },
    months: {
      shorthand: [
        "jan",
        "feb",
        "mar",
        "apr",
        "maj",
        "jun",
        "jul",
        "aug",
        "sep",
        "okt",
        "nov",
        "dec"
      ],
      longhand: [
        "januari",
        "februari",
        "mars",
        "april",
        "maj",
        "juni",
        "juli",
        "augusti",
        "september",
        "oktober",
        "november",
        "december"
      ]
    },
    rangeSeparator: " till ",
    time_24hr: true,
    ordinal: () => {
      return ".";
    }
  };
  fp54.l10ns.sv = Swedish;
  var sv_default = fp54.l10ns;

  // src/l10n/th.ts
  var fp55 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
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
  fp55.l10ns.th = Thai;
  var th_default = fp55.l10ns;

  // src/l10n/tr.ts
  var fp56 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Turkish = {
    weekdays: {
      shorthand: ["Paz", "Pzt", "Sal", "\xC7ar", "Per", "Cum", "Cmt"],
      longhand: [
        "Pazar",
        "Pazartesi",
        "Sal\u0131",
        "\xC7ar\u015Famba",
        "Per\u015Fembe",
        "Cuma",
        "Cumartesi"
      ]
    },
    months: {
      shorthand: [
        "Oca",
        "\u015Eub",
        "Mar",
        "Nis",
        "May",
        "Haz",
        "Tem",
        "A\u011Fu",
        "Eyl",
        "Eki",
        "Kas",
        "Ara"
      ],
      longhand: [
        "Ocak",
        "\u015Eubat",
        "Mart",
        "Nisan",
        "May\u0131s",
        "Haziran",
        "Temmuz",
        "A\u011Fustos",
        "Eyl\xFCl",
        "Ekim",
        "Kas\u0131m",
        "Aral\u0131k"
      ]
    },
    firstDayOfWeek: 1,
    ordinal: () => {
      return ".";
    },
    rangeSeparator: " - ",
    weekAbbreviation: "Hf",
    scrollTitle: "Art\u0131rmak i\xE7in kayd\u0131r\u0131n",
    toggleTitle: "A\xE7/Kapa",
    amPM: ["\xD6\xD6", "\xD6S"],
    time_24hr: true
  };
  fp56.l10ns.tr = Turkish;
  var tr_default = fp56.l10ns;

  // src/l10n/uk.ts
  var fp57 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Ukrainian = {
    firstDayOfWeek: 1,
    weekdays: {
      shorthand: ["\u041D\u0434", "\u041F\u043D", "\u0412\u0442", "\u0421\u0440", "\u0427\u0442", "\u041F\u0442", "\u0421\u0431"],
      longhand: [
        "\u041D\u0435\u0434\u0456\u043B\u044F",
        "\u041F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A",
        "\u0412\u0456\u0432\u0442\u043E\u0440\u043E\u043A",
        "\u0421\u0435\u0440\u0435\u0434\u0430",
        "\u0427\u0435\u0442\u0432\u0435\u0440",
        "\u041F'\u044F\u0442\u043D\u0438\u0446\u044F",
        "\u0421\u0443\u0431\u043E\u0442\u0430"
      ]
    },
    months: {
      shorthand: [
        "\u0421\u0456\u0447",
        "\u041B\u044E\u0442",
        "\u0411\u0435\u0440",
        "\u041A\u0432\u0456",
        "\u0422\u0440\u0430",
        "\u0427\u0435\u0440",
        "\u041B\u0438\u043F",
        "\u0421\u0435\u0440",
        "\u0412\u0435\u0440",
        "\u0416\u043E\u0432",
        "\u041B\u0438\u0441",
        "\u0413\u0440\u0443"
      ],
      longhand: [
        "\u0421\u0456\u0447\u0435\u043D\u044C",
        "\u041B\u044E\u0442\u0438\u0439",
        "\u0411\u0435\u0440\u0435\u0437\u0435\u043D\u044C",
        "\u041A\u0432\u0456\u0442\u0435\u043D\u044C",
        "\u0422\u0440\u0430\u0432\u0435\u043D\u044C",
        "\u0427\u0435\u0440\u0432\u0435\u043D\u044C",
        "\u041B\u0438\u043F\u0435\u043D\u044C",
        "\u0421\u0435\u0440\u043F\u0435\u043D\u044C",
        "\u0412\u0435\u0440\u0435\u0441\u0435\u043D\u044C",
        "\u0416\u043E\u0432\u0442\u0435\u043D\u044C",
        "\u041B\u0438\u0441\u0442\u043E\u043F\u0430\u0434",
        "\u0413\u0440\u0443\u0434\u0435\u043D\u044C"
      ]
    },
    time_24hr: true
  };
  fp57.l10ns.uk = Ukrainian;
  var uk_default = fp57.l10ns;

  // src/l10n/uz.ts
  var fp58 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Uzbek = {
    weekdays: {
      shorthand: ["\u042F\u043A\u0448", "\u0414\u0443\u0448", "\u0421\u0435\u0448", "\u0427\u043E\u0440", "\u041F\u0430\u0439", "\u0416\u0443\u043C", "\u0428\u0430\u043D"],
      longhand: [
        "\u042F\u043A\u0448\u0430\u043D\u0431\u0430",
        "\u0414\u0443\u0448\u0430\u043D\u0431\u0430",
        "\u0421\u0435\u0448\u0430\u043D\u0431\u0430",
        "\u0427\u043E\u0440\u0448\u0430\u043D\u0431\u0430",
        "\u041F\u0430\u0439\u0448\u0430\u043D\u0431\u0430",
        "\u0416\u0443\u043C\u0430",
        "\u0428\u0430\u043D\u0431\u0430"
      ]
    },
    months: {
      shorthand: [
        "\u042F\u043D\u0432",
        "\u0424\u0435\u0432",
        "\u041C\u0430\u0440",
        "\u0410\u043F\u0440",
        "\u041C\u0430\u0439",
        "\u0418\u044E\u043D",
        "\u0418\u044E\u043B",
        "\u0410\u0432\u0433",
        "\u0421\u0435\u043D",
        "\u041E\u043A\u0442",
        "\u041D\u043E\u044F",
        "\u0414\u0435\u043A"
      ],
      longhand: [
        "\u042F\u043D\u0432\u0430\u0440",
        "\u0424\u0435\u0432\u0440\u0430\u043B",
        "\u041C\u0430\u0440\u0442",
        "\u0410\u043F\u0440\u0435\u043B",
        "\u041C\u0430\u0439",
        "\u0418\u044E\u043D",
        "\u0418\u044E\u043B",
        "\u0410\u0432\u0433\u0443\u0441\u0442",
        "\u0421\u0435\u043D\u0442\u044F\u0431\u0440",
        "\u041E\u043A\u0442\u044F\u0431\u0440",
        "\u041D\u043E\u044F\u0431\u0440",
        "\u0414\u0435\u043A\u0430\u0431\u0440"
      ]
    },
    firstDayOfWeek: 1,
    ordinal: function() {
      return "";
    },
    rangeSeparator: " \u2014 ",
    weekAbbreviation: "\u04B2\u0430\u0444\u0442\u0430",
    scrollTitle: "\u041A\u0430\u0442\u0442\u0430\u043B\u0430\u0448\u0442\u0438\u0440\u0438\u0448 \u0443\u0447\u0443\u043D \u0430\u0439\u043B\u0430\u043D\u0442\u0438\u0440\u0438\u043D\u0433",
    toggleTitle: "\u040E\u0442\u0438\u0448 \u0443\u0447\u0443\u043D \u0431\u043E\u0441\u0438\u043D\u0433",
    amPM: ["AM", "PM"],
    yearAriaLabel: "\u0419\u0438\u043B",
    time_24hr: true
  };
  fp58.l10ns.uz = Uzbek;
  var uz_default = fp58.l10ns;

  // src/l10n/uz_latn.ts
  var fp59 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
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
  fp59.l10ns["uz_latn"] = UzbekLatin;
  var uz_latn_default = fp59.l10ns;

  // src/l10n/vn.ts
  var fp60 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
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
  fp60.l10ns.vn = Vietnamese;
  var vn_default = fp60.l10ns;

  // src/l10n/zh.ts
  var fp61 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var Mandarin = {
    weekdays: {
      shorthand: ["\u5468\u65E5", "\u5468\u4E00", "\u5468\u4E8C", "\u5468\u4E09", "\u5468\u56DB", "\u5468\u4E94", "\u5468\u516D"],
      longhand: [
        "\u661F\u671F\u65E5",
        "\u661F\u671F\u4E00",
        "\u661F\u671F\u4E8C",
        "\u661F\u671F\u4E09",
        "\u661F\u671F\u56DB",
        "\u661F\u671F\u4E94",
        "\u661F\u671F\u516D"
      ]
    },
    months: {
      shorthand: [
        "\u4E00\u6708",
        "\u4E8C\u6708",
        "\u4E09\u6708",
        "\u56DB\u6708",
        "\u4E94\u6708",
        "\u516D\u6708",
        "\u4E03\u6708",
        "\u516B\u6708",
        "\u4E5D\u6708",
        "\u5341\u6708",
        "\u5341\u4E00\u6708",
        "\u5341\u4E8C\u6708"
      ],
      longhand: [
        "\u4E00\u6708",
        "\u4E8C\u6708",
        "\u4E09\u6708",
        "\u56DB\u6708",
        "\u4E94\u6708",
        "\u516D\u6708",
        "\u4E03\u6708",
        "\u516B\u6708",
        "\u4E5D\u6708",
        "\u5341\u6708",
        "\u5341\u4E00\u6708",
        "\u5341\u4E8C\u6708"
      ]
    },
    rangeSeparator: " \u81F3 ",
    weekAbbreviation: "\u5468",
    scrollTitle: "\u6EDA\u52A8\u5207\u6362",
    toggleTitle: "\u70B9\u51FB\u5207\u6362 12/24 \u5C0F\u65F6\u65F6\u5236"
  };
  fp61.l10ns.zh = Mandarin;
  var zh_default = fp61.l10ns;

  // src/l10n/zh_tw.ts
  var fp62 = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
    l10ns: {}
  };
  var MandarinTraditional = {
    weekdays: {
      shorthand: ["\u9031\u65E5", "\u9031\u4E00", "\u9031\u4E8C", "\u9031\u4E09", "\u9031\u56DB", "\u9031\u4E94", "\u9031\u516D"],
      longhand: [
        "\u661F\u671F\u65E5",
        "\u661F\u671F\u4E00",
        "\u661F\u671F\u4E8C",
        "\u661F\u671F\u4E09",
        "\u661F\u671F\u56DB",
        "\u661F\u671F\u4E94",
        "\u661F\u671F\u516D"
      ]
    },
    months: {
      shorthand: [
        "\u4E00\u6708",
        "\u4E8C\u6708",
        "\u4E09\u6708",
        "\u56DB\u6708",
        "\u4E94\u6708",
        "\u516D\u6708",
        "\u4E03\u6708",
        "\u516B\u6708",
        "\u4E5D\u6708",
        "\u5341\u6708",
        "\u5341\u4E00\u6708",
        "\u5341\u4E8C\u6708"
      ],
      longhand: [
        "\u4E00\u6708",
        "\u4E8C\u6708",
        "\u4E09\u6708",
        "\u56DB\u6708",
        "\u4E94\u6708",
        "\u516D\u6708",
        "\u4E03\u6708",
        "\u516B\u6708",
        "\u4E5D\u6708",
        "\u5341\u6708",
        "\u5341\u4E00\u6708",
        "\u5341\u4E8C\u6708"
      ]
    },
    rangeSeparator: " \u81F3 ",
    weekAbbreviation: "\u9031",
    scrollTitle: "\u6EFE\u52D5\u5207\u63DB",
    toggleTitle: "\u9EDE\u64CA\u5207\u63DB 12/24 \u5C0F\u6642\u6642\u5236"
  };
  fp62.l10ns.zh_tw = MandarinTraditional;
  var zh_tw_default = fp62.l10ns;

  // src/l10n/index.ts
  var l10n = {
    ar: Arabic,
    at: Austria,
    az: Azerbaijan,
    be: Belarusian,
    bg: Bulgarian,
    bn: Bangla,
    bs: Bosnian,
    ca: Catalan,
    ckb: Kurdish,
    cat: Catalan,
    cs: Czech,
    cy: Welsh,
    da: Danish,
    de: German,
    default: { ...english },
    en: english,
    eo: Esperanto,
    es: Spanish,
    et: Estonian,
    fa: Persian,
    fi: Finnish,
    fo: Faroese,
    fr: French,
    gr: Greek,
    he: Hebrew,
    hi: Hindi,
    hr: Croatian,
    hu: Hungarian,
    hy: Armenian,
    id: Indonesian,
    is: Icelandic,
    it: Italian,
    ja: Japanese,
    ka: Georgian,
    ko: Korean,
    km: Khmer,
    kz: Kazakh,
    lt: Lithuanian,
    lv: Latvian,
    mk: Macedonian,
    mn: Mongolian,
    ms: Malaysian,
    my: Burmese,
    nl: Dutch,
    nn: NorwegianNynorsk,
    no: Norwegian,
    pa: Punjabi,
    pl: Polish,
    pt: Portuguese,
    ro: Romanian,
    ru: Russian,
    si: Sinhala,
    sk: Slovak,
    sl: Slovenian,
    sq: Albanian,
    sr: Serbian,
    sv: Swedish,
    th: Thai,
    tr: Turkish,
    uk: Ukrainian,
    vn: Vietnamese,
    zh: Mandarin,
    zh_tw: MandarinTraditional,
    uz: Uzbek,
    uz_latn: UzbekLatin
  };
  var l10n_default = l10n;
  return __toCommonJS(l10n_exports);
})();
