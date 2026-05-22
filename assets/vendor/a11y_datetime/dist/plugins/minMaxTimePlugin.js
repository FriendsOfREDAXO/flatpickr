"use strict";
var plugins_minMaxTimePlugin = (() => {
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

  // src/plugins/minMaxTimePlugin.ts
  var minMaxTimePlugin_exports = {};
  __export(minMaxTimePlugin_exports, {
    default: () => minMaxTimePlugin_default
  });

  // src/utils/index.ts
  var pad = (number, length = 2) => `000${number}`.slice(length * -1);
  var int = (bool) => bool === true ? 1 : 0;

  // src/utils/formatting.ts
  var monthToStr = (monthNumber, shorthand, locale) => locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];
  var formats = {
    Z: (date) => date.toISOString(),
    D: function(date, locale, options) {
      return locale.weekdays.shorthand[formats.w(date, locale, options)];
    },
    F: function(date, locale, options) {
      return monthToStr(
        formats.n(date, locale, options) - 1,
        false,
        locale
      );
    },
    G: function(date, locale, options) {
      return pad(formats.h(date, locale, options));
    },
    H: (date) => pad(date.getHours()),
    J: function(date, locale) {
      return locale.ordinal !== void 0 ? date.getDate() + locale.ordinal(date.getDate()) : date.getDate();
    },
    K: (date, locale) => locale.amPM[int(date.getHours() > 11)],
    M: function(date, locale) {
      return monthToStr(date.getMonth(), true, locale);
    },
    S: (date) => pad(date.getSeconds()),
    U: (date) => date.getTime() / 1e3,
    W: function(date, _, options) {
      return options.getWeek(date);
    },
    Y: (date) => pad(date.getFullYear(), 4),
    d: (date) => pad(date.getDate()),
    h: (date) => date.getHours() % 12 ? date.getHours() % 12 : 12,
    i: (date) => pad(date.getMinutes()),
    j: (date) => date.getDate(),
    l: function(date, locale) {
      return locale.weekdays.longhand[date.getDay()];
    },
    m: (date) => pad(date.getMonth() + 1),
    n: (date) => date.getMonth() + 1,
    s: (date) => date.getSeconds(),
    u: (date) => date.getTime(),
    w: (date) => date.getDay(),
    y: (date) => String(date.getFullYear()).substring(2)
  };

  // src/types/options.ts
  var defaults = {
    _disable: [],
    allowInput: false,
    allowInvalidPreload: false,
    altFormat: "F j, Y",
    altInput: false,
    altInputClass: "form-control input",
    animate: typeof window === "object" && window.navigator.userAgent.indexOf("MSIE") === -1 && !(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches),
    announceChanges: true,
    ariaDateFormat: "F j, Y",
    autoFillDefaultTime: true,
    clickOpens: true,
    closeOnSelect: true,
    calendarTitle: "Calendar",
    showTitleBar: true,
    showCloseButton: true,
    conjunction: ", ",
    dateFormat: "Y-m-d",
    defaultHour: 12,
    defaultMinute: 0,
    defaultSeconds: 0,
    disable: [],
    disableMobile: false,
    enableSeconds: false,
    enableTime: false,
    errorHandler: (err) => typeof console !== "undefined" && console.warn(err),
    getWeek: (givenDate) => {
      const date = new Date(givenDate.getTime());
      date.setHours(0, 0, 0, 0);
      date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
      var week1 = new Date(date.getFullYear(), 0, 4);
      return 1 + Math.round(
        ((date.getTime() - week1.getTime()) / 864e5 - 3 + (week1.getDay() + 6) % 7) / 7
      );
    },
    hourIncrement: 1,
    ignoredFocusElements: [],
    inline: false,
    locale: "default",
    minuteIncrement: 5,
    mode: "single",
    monthSelectorType: "dropdown",
    nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
    noCalendar: false,
    now: new Date(),
    onChange: [],
    onClose: [],
    onDayCreate: [],
    onDestroy: [],
    onKeyDown: [],
    onMonthChange: [],
    onOpen: [],
    onParseConfig: [],
    onReady: [],
    onValueUpdate: [],
    onYearChange: [],
    onPreCalendarPosition: [],
    plugins: [],
    position: "auto",
    positionElement: void 0,
    prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
    shorthandCurrentMonth: false,
    showMonths: 1,
    initialDayFocus: "today",
    static: false,
    time_24hr: false,
    weekNumbers: false,
    wrap: false
  };

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
    time_24hr: false
  };

  // src/utils/dates.ts
  var createDateFormatter = ({
    config = defaults,
    l10n = english,
    isMobile = false
  }) => (dateObj, frmt, overrideLocale) => {
    const locale = overrideLocale || l10n;
    if (config.formatDate !== void 0 && !isMobile) {
      return config.formatDate(dateObj, frmt, locale);
    }
    return frmt.split("").map(
      (c, i, arr) => formats[c] && arr[i - 1] !== "\\" ? formats[c](dateObj, locale, config) : c !== "\\" ? c : ""
    ).join("");
  };
  function compareDates(date1, date2, timeless = true) {
    if (timeless !== false) {
      return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
    }
    return date1.getTime() - date2.getTime();
  }
  function compareTimes(date1, date2) {
    return 3600 * (date1.getHours() - date2.getHours()) + 60 * (date1.getMinutes() - date2.getMinutes()) + date1.getSeconds() - date2.getSeconds();
  }
  var calculateSecondsSinceMidnight = (hours, minutes, seconds) => {
    return hours * 3600 + minutes * 60 + seconds;
  };
  var parseSeconds = (secondsSinceMidnight) => {
    const hours = Math.floor(secondsSinceMidnight / 3600), minutes = (secondsSinceMidnight - hours * 3600) / 60;
    return [hours, minutes, secondsSinceMidnight - hours * 3600 - minutes * 60];
  };

  // src/plugins/minMaxTimePlugin.ts
  function minMaxTimePlugin(config = {}) {
    const state = {
      formatDate: createDateFormatter({}),
      tableDateFormat: config.tableDateFormat || "Y-m-d",
      defaults: {
        minTime: void 0,
        maxTime: void 0
      }
    };
    function findDateTimeLimit(date) {
      if (config.table !== void 0) {
        return config.table[state.formatDate(date, state.tableDateFormat)];
      }
      return config.getTimeLimits && config.getTimeLimits(date);
    }
    return function(fp) {
      return {
        onReady() {
          state.formatDate = this.formatDate;
          state.defaults = {
            minTime: this.config.minTime && state.formatDate(this.config.minTime, "H:i"),
            maxTime: this.config.maxTime && state.formatDate(this.config.maxTime, "H:i")
          };
          fp.loadedPlugins.push("minMaxTime");
        },
        onChange() {
          const latest = this.latestSelectedDateObj;
          const matchingTimeLimit = latest && findDateTimeLimit(latest);
          if (latest && matchingTimeLimit !== void 0) {
            this.set(matchingTimeLimit);
            fp.config.minTime.setFullYear(latest.getFullYear());
            fp.config.maxTime.setFullYear(latest.getFullYear());
            fp.config.minTime.setMonth(latest.getMonth());
            fp.config.maxTime.setMonth(latest.getMonth());
            fp.config.minTime.setDate(latest.getDate());
            fp.config.maxTime.setDate(latest.getDate());
            if (fp.config.minTime > fp.config.maxTime) {
              const minBound = calculateSecondsSinceMidnight(
                fp.config.minTime.getHours(),
                fp.config.minTime.getMinutes(),
                fp.config.minTime.getSeconds()
              );
              const maxBound = calculateSecondsSinceMidnight(
                fp.config.maxTime.getHours(),
                fp.config.maxTime.getMinutes(),
                fp.config.maxTime.getSeconds()
              );
              const currentTime = calculateSecondsSinceMidnight(
                latest.getHours(),
                latest.getMinutes(),
                latest.getSeconds()
              );
              if (currentTime > maxBound && currentTime < minBound) {
                const result = parseSeconds(minBound);
                fp.setDate(
                  new Date(latest.getTime()).setHours(
                    result[0],
                    result[1],
                    result[2]
                  ),
                  false
                );
              }
            } else {
              if (compareDates(latest, fp.config.maxTime, false) > 0) {
                fp.setDate(
                  new Date(latest.getTime()).setHours(
                    fp.config.maxTime.getHours(),
                    fp.config.maxTime.getMinutes(),
                    fp.config.maxTime.getSeconds(),
                    fp.config.maxTime.getMilliseconds()
                  ),
                  false
                );
              } else if (compareDates(latest, fp.config.minTime, false) < 0) {
                fp.setDate(
                  new Date(latest.getTime()).setHours(
                    fp.config.minTime.getHours(),
                    fp.config.minTime.getMinutes(),
                    fp.config.minTime.getSeconds(),
                    fp.config.minTime.getMilliseconds()
                  ),
                  false
                );
              }
            }
          } else {
            const newMinMax = state.defaults || {
              minTime: void 0,
              maxTime: void 0
            };
            this.set(newMinMax);
            if (!latest)
              return;
            const { minTime, maxTime } = fp.config;
            if (minTime && compareTimes(latest, minTime) < 0) {
              fp.setDate(
                new Date(latest.getTime()).setHours(
                  minTime.getHours(),
                  minTime.getMinutes(),
                  minTime.getSeconds(),
                  minTime.getMilliseconds()
                ),
                false
              );
            } else if (maxTime && compareTimes(latest, maxTime) > 0) {
              fp.setDate(
                new Date(latest.getTime()).setHours(
                  maxTime.getHours(),
                  maxTime.getMinutes(),
                  maxTime.getSeconds(),
                  maxTime.getMilliseconds()
                )
              );
            }
          }
        }
      };
    };
  }
  var minMaxTimePlugin_default = minMaxTimePlugin;
  return __toCommonJS(minMaxTimePlugin_exports);
})();
