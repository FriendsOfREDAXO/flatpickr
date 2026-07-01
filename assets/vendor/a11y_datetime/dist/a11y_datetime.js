"use strict";
/* a11y_datetime v5.1.5, based on flatpickr, @license MIT */
var __a11y_datetime_bundle = (() => {
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

  // src/index.ts
  var src_exports = {};
  __export(src_exports, {
    default: () => src_default
  });

  // src/types/options.ts
  var HOOKS = [
    "onChange",
    "onClose",
    "onDayCreate",
    "onDestroy",
    "onKeyDown",
    "onMonthChange",
    "onOpen",
    "onParseConfig",
    "onReady",
    "onValueUpdate",
    "onYearChange",
    "onPreCalendarPosition"
  ];
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
    focusOpens: false,
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
  var default_default = english;

  // src/utils/index.ts
  var pad = (number, length = 2) => `000${number}`.slice(length * -1);
  var int = (bool) => bool === true ? 1 : 0;
  function debounce(fn, wait) {
    let t;
    return function() {
      const args = arguments;
      clearTimeout(t);
      t = setTimeout(() => fn.apply(this, args), wait);
    };
  }
  var arrayify = (obj) => obj instanceof Array ? obj : [obj];

  // src/utils/dom.ts
  function toggleClass(elem, className, bool) {
    if (bool === true)
      return elem.classList.add(className);
    elem.classList.remove(className);
  }
  function createElement(tag, className, content) {
    const e = window.document.createElement(tag);
    className = className || "";
    content = content || "";
    e.className = className;
    if (content !== void 0)
      e.textContent = content;
    return e;
  }
  function clearNode(node) {
    while (node.firstChild)
      node.removeChild(node.firstChild);
  }
  function findParent(node, condition) {
    if (condition(node))
      return node;
    else if (node.parentNode)
      return findParent(node.parentNode, condition);
    return void 0;
  }
  function createNumberInput(inputClassName, opts) {
    const wrapper = createElement("div", "numInputWrapper"), numInput = createElement(
      "input",
      "numInput " + inputClassName
    ), arrowUp = createElement("span", "arrowUp"), arrowDown = createElement("span", "arrowDown");
    if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
      numInput.type = "number";
    } else {
      numInput.type = "text";
      numInput.pattern = "\\d*";
    }
    if (opts !== void 0)
      for (const key in opts)
        numInput.setAttribute(key, opts[key]);
    wrapper.appendChild(numInput);
    wrapper.appendChild(arrowUp);
    wrapper.appendChild(arrowDown);
    return wrapper;
  }
  function getEventTarget(event) {
    try {
      if (typeof event.composedPath === "function") {
        const path = event.composedPath();
        return path[0];
      }
      return event.target;
    } catch (error) {
      return event.target;
    }
  }

  // src/utils/formatting.ts
  var doNothing = () => void 0;
  var monthToStr = (monthNumber, shorthand, locale) => locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];
  var revFormat = {
    D: doNothing,
    F: function(dateObj, monthName, locale) {
      dateObj.setMonth(locale.months.longhand.indexOf(monthName));
    },
    G: (dateObj, hour) => {
      dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
    },
    H: (dateObj, hour) => {
      dateObj.setHours(parseFloat(hour));
    },
    J: (dateObj, day) => {
      dateObj.setDate(parseFloat(day));
    },
    K: (dateObj, amPM, locale) => {
      dateObj.setHours(
        dateObj.getHours() % 12 + 12 * int(new RegExp(locale.amPM[1], "i").test(amPM))
      );
    },
    M: function(dateObj, shortMonth, locale) {
      dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
    },
    S: (dateObj, seconds) => {
      dateObj.setSeconds(parseFloat(seconds));
    },
    U: (_, unixSeconds) => new Date(parseFloat(unixSeconds) * 1e3),
    W: function(dateObj, weekNum, locale) {
      const weekNumber = parseInt(weekNum);
      const date = new Date(
        dateObj.getFullYear(),
        0,
        2 + (weekNumber - 1) * 7,
        0,
        0,
        0,
        0
      );
      date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
      return date;
    },
    Y: (dateObj, year) => {
      dateObj.setFullYear(parseFloat(year));
    },
    Z: (_, ISODate) => new Date(ISODate),
    d: (dateObj, day) => {
      dateObj.setDate(parseFloat(day));
    },
    h: (dateObj, hour) => {
      dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
    },
    i: (dateObj, minutes) => {
      dateObj.setMinutes(parseFloat(minutes));
    },
    j: (dateObj, day) => {
      dateObj.setDate(parseFloat(day));
    },
    l: doNothing,
    m: (dateObj, month) => {
      dateObj.setMonth(parseFloat(month) - 1);
    },
    n: (dateObj, month) => {
      dateObj.setMonth(parseFloat(month) - 1);
    },
    s: (dateObj, seconds) => {
      dateObj.setSeconds(parseFloat(seconds));
    },
    u: (_, unixMillSeconds) => new Date(parseFloat(unixMillSeconds)),
    w: doNothing,
    y: (dateObj, year) => {
      dateObj.setFullYear(2e3 + parseFloat(year));
    }
  };
  var tokenRegex = {
    D: "",
    F: "",
    G: "(\\d\\d|\\d)",
    H: "(\\d\\d|\\d)",
    J: "(\\d\\d|\\d)\\w+",
    K: "",
    M: "",
    S: "(\\d\\d|\\d)",
    U: "(.+)",
    W: "(\\d\\d|\\d)",
    Y: "(\\d{4})",
    Z: "(.+)",
    d: "(\\d\\d|\\d)",
    h: "(\\d\\d|\\d)",
    i: "(\\d\\d|\\d)",
    j: "(\\d\\d|\\d)",
    l: "",
    m: "(\\d\\d|\\d)",
    n: "(\\d\\d|\\d)",
    s: "(\\d\\d|\\d)",
    u: "(.+)",
    w: "(\\d\\d|\\d)",
    y: "(\\d{2})"
  };
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
  var createDateParser = ({ config = defaults, l10n = english }) => (date, givenFormat, timeless, customLocale) => {
    if (date !== 0 && !date)
      return void 0;
    const locale = customLocale || l10n;
    let parsedDate;
    const dateOrig = date;
    if (date instanceof Date)
      parsedDate = new Date(date.getTime());
    else if (typeof date !== "string" && date.toFixed !== void 0)
      parsedDate = new Date(date);
    else if (typeof date === "string") {
      const format = givenFormat || (config || defaults).dateFormat;
      const datestr = String(date).trim();
      if (datestr === "today") {
        parsedDate = new Date();
        timeless = true;
      } else if (config && config.parseDate) {
        parsedDate = config.parseDate(date, format);
      } else if (/Z$/.test(datestr) || /GMT$/.test(datestr)) {
        parsedDate = new Date(date);
      } else {
        let matched, ops = [];
        for (let i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
          const token2 = format[i];
          const isBackSlash = token2 === "\\";
          const escaped = format[i - 1] === "\\" || isBackSlash;
          if (tokenRegex[token2] && !escaped) {
            regexStr += tokenRegex[token2];
            const match = new RegExp(regexStr).exec(date);
            if (match && (matched = true)) {
              ops[token2 !== "Y" ? "push" : "unshift"]({
                fn: revFormat[token2],
                val: match[++matchIndex]
              });
            }
          } else if (!isBackSlash)
            regexStr += ".";
        }
        parsedDate = !config || !config.noCalendar ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0) : new Date(new Date().setHours(0, 0, 0, 0));
        ops.forEach(
          ({ fn, val }) => parsedDate = fn(parsedDate, val, locale) || parsedDate
        );
        parsedDate = matched ? parsedDate : void 0;
      }
    }
    if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
      config.errorHandler(new Error(`Invalid date provided: ${dateOrig}`));
      return void 0;
    }
    if (timeless === true)
      parsedDate.setHours(0, 0, 0, 0);
    return parsedDate;
  };
  function compareDates(date1, date2, timeless = true) {
    if (timeless !== false) {
      return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
    }
    return date1.getTime() - date2.getTime();
  }
  var isBetween = (ts, ts1, ts2) => {
    return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
  };
  var calculateSecondsSinceMidnight = (hours, minutes, seconds) => {
    return hours * 3600 + minutes * 60 + seconds;
  };
  var parseSeconds = (secondsSinceMidnight) => {
    const hours = Math.floor(secondsSinceMidnight / 3600), minutes = (secondsSinceMidnight - hours * 3600) / 60;
    return [hours, minutes, secondsSinceMidnight - hours * 3600 - minutes * 60];
  };
  var duration = {
    DAY: 864e5
  };
  function getDefaultHours(config) {
    let hours = config.defaultHour;
    let minutes = config.defaultMinute;
    let seconds = config.defaultSeconds;
    if (config.minDate !== void 0) {
      const minHour = config.minDate.getHours();
      const minMinutes = config.minDate.getMinutes();
      const minSeconds = config.minDate.getSeconds();
      if (hours < minHour) {
        hours = minHour;
      }
      if (hours === minHour && minutes < minMinutes) {
        minutes = minMinutes;
      }
      if (hours === minHour && minutes === minMinutes && seconds < minSeconds)
        seconds = config.minDate.getSeconds();
    }
    if (config.maxDate !== void 0) {
      const maxHr = config.maxDate.getHours();
      const maxMinutes = config.maxDate.getMinutes();
      hours = Math.min(hours, maxHr);
      if (hours === maxHr)
        minutes = Math.min(maxMinutes, minutes);
      if (hours === maxHr && minutes === maxMinutes)
        seconds = config.maxDate.getSeconds();
    }
    return { hours, minutes, seconds };
  }

  // src/utils/polyfills.ts
  if (typeof Object.assign !== "function") {
    Object.assign = function(target, ...args) {
      if (!target) {
        throw TypeError("Cannot convert undefined or null to object");
      }
      for (const source of args) {
        if (source) {
          Object.keys(source).forEach((key) => target[key] = source[key]);
        }
      }
      return target;
    };
  }

  // src/index.ts
  var DEBOUNCED_CHANGE_MS = 300;
  function FlatpickrInstance(element, instanceConfig) {
    const self = {
      config: {
        ...defaults,
        ...flatpickr.defaultConfig
      },
      l10n: default_default
    };
    self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
    self._handlers = [];
    self.pluginElements = [];
    self.loadedPlugins = [];
    self._bind = bind;
    self._setHoursFromDate = setHoursFromDate;
    self._positionCalendar = positionCalendar;
    self.changeMonth = changeMonth;
    self.changeYear = changeYear;
    self.clear = clear;
    self.close = close;
    self.onMouseOver = onMouseOver;
    self._createElement = createElement;
    self.createDay = createDay;
    self.destroy = destroy;
    self.isEnabled = isEnabled;
    self.jumpToDate = jumpToDate;
    self.updateValue = updateValue;
    self.open = open;
    self.redraw = redraw;
    self.set = set;
    self.setDate = setDate;
    self.toggle = toggle;
    let liveRegion;
    let timeWheelPopover;
    let timeWheelTrigger;
    let timeWheelHourOptions = [];
    let timeWheelMinuteOptions = [];
    let timeWheelAmPmOptions = [];
    const calendarInstanceId = `a11y-dt-${Math.random().toString(36).slice(2, 10)}`;
    function announce(message) {
      if (!self.config.announceChanges || !liveRegion || !message || !self.isOpen)
        return;
      liveRegion.textContent = "";
      window.setTimeout(() => {
        if (liveRegion) {
          liveRegion.textContent = message;
        }
      }, 10);
    }
    function setupHelperFunctions() {
      self.utils = {
        getDaysInMonth(month = self.currentMonth, yr = self.currentYear) {
          if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0))
            return 29;
          return self.l10n.daysInMonth[month];
        }
      };
    }
    function init() {
      self.element = self.input = element;
      self.isOpen = false;
      parseConfig();
      setupLocale();
      setupInputs();
      setupDates();
      setupHelperFunctions();
      if (!self.isMobile)
        build();
      bindEvents();
      if (self.selectedDates.length || self.config.noCalendar) {
        if (self.config.enableTime) {
          setHoursFromDate(
            self.config.noCalendar ? self.latestSelectedDateObj : void 0
          );
        }
        updateValue(false);
      }
      setCalendarWidth();
      const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      if (!self.isMobile && isSafari) {
        positionCalendar();
      }
      triggerEvent("onReady");
    }
    function getClosestActiveElement() {
      var _a;
      return ((_a = self.calendarContainer) == null ? void 0 : _a.getRootNode()).activeElement || document.activeElement;
    }
    function bindToInstance(fn) {
      return fn.bind(self);
    }
    function setCalendarWidth() {
      const config = self.config;
      if (config.weekNumbers === false && config.showMonths === 1) {
        return;
      } else if (config.noCalendar !== true) {
        window.requestAnimationFrame(function() {
          if (self.calendarContainer !== void 0) {
            self.calendarContainer.style.visibility = "hidden";
            self.calendarContainer.style.display = "block";
          }
          if (self.daysContainer !== void 0) {
            const daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
            self.daysContainer.style.width = daysWidth + "px";
            self.calendarContainer.style.width = daysWidth + (self.weekWrapper !== void 0 ? self.weekWrapper.offsetWidth : 0) + "px";
            self.calendarContainer.style.removeProperty("visibility");
            self.calendarContainer.style.removeProperty("display");
          }
        });
      }
    }
    function updateTime(e) {
      if (self.selectedDates.length === 0) {
        const defaultDate = self.config.minDate === void 0 || compareDates(new Date(), self.config.minDate) >= 0 ? new Date() : new Date(self.config.minDate.getTime());
        const defaults2 = getDefaultHours(self.config);
        defaultDate.setHours(
          defaults2.hours,
          defaults2.minutes,
          defaults2.seconds,
          defaultDate.getMilliseconds()
        );
        self.selectedDates = [defaultDate];
        self.latestSelectedDateObj = defaultDate;
      }
      if (e !== void 0 && e.type !== "blur") {
        timeWrapper(e);
      }
      const prevValue = self._input.value;
      setHoursFromInputs();
      updateValue();
      if (self._input.value !== prevValue) {
        self._debouncedChange();
      }
    }
    function ampm2military(hour, amPM) {
      return hour % 12 + 12 * int(amPM === self.l10n.amPM[1]);
    }
    function military2ampm(hour) {
      switch (hour % 24) {
        case 0:
        case 12:
          return 12;
        default:
          return hour % 12;
      }
    }
    function setHoursFromInputs() {
      if (self.hourElement === void 0 || self.minuteElement === void 0)
        return;
      let hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24, minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60, seconds = self.secondElement !== void 0 ? (parseInt(self.secondElement.value, 10) || 0) % 60 : 0;
      if (self.amPM !== void 0) {
        hours = ampm2military(hours, self.amPM.textContent);
      }
      const limitMinHours = self.config.minTime !== void 0 || self.config.minDate && self.minDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.minDate, true) === 0;
      const limitMaxHours = self.config.maxTime !== void 0 || self.config.maxDate && self.maxDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.maxDate, true) === 0;
      if (self.config.maxTime !== void 0 && self.config.minTime !== void 0 && self.config.minTime > self.config.maxTime) {
        const minBound = calculateSecondsSinceMidnight(
          self.config.minTime.getHours(),
          self.config.minTime.getMinutes(),
          self.config.minTime.getSeconds()
        );
        const maxBound = calculateSecondsSinceMidnight(
          self.config.maxTime.getHours(),
          self.config.maxTime.getMinutes(),
          self.config.maxTime.getSeconds()
        );
        const currentTime = calculateSecondsSinceMidnight(
          hours,
          minutes,
          seconds
        );
        if (currentTime > maxBound && currentTime < minBound) {
          const result = parseSeconds(minBound);
          hours = result[0];
          minutes = result[1];
          seconds = result[2];
        }
      } else {
        if (limitMaxHours) {
          const maxTime = self.config.maxTime !== void 0 ? self.config.maxTime : self.config.maxDate;
          hours = Math.min(hours, maxTime.getHours());
          if (hours === maxTime.getHours())
            minutes = Math.min(minutes, maxTime.getMinutes());
          if (minutes === maxTime.getMinutes())
            seconds = Math.min(seconds, maxTime.getSeconds());
        }
        if (limitMinHours) {
          const minTime = self.config.minTime !== void 0 ? self.config.minTime : self.config.minDate;
          hours = Math.max(hours, minTime.getHours());
          if (hours === minTime.getHours() && minutes < minTime.getMinutes())
            minutes = minTime.getMinutes();
          if (minutes === minTime.getMinutes())
            seconds = Math.max(seconds, minTime.getSeconds());
        }
      }
      setHours(hours, minutes, seconds);
    }
    function setHoursFromDate(dateObj) {
      const date = dateObj || self.latestSelectedDateObj;
      if (date && date instanceof Date) {
        setHours(date.getHours(), date.getMinutes(), date.getSeconds());
      }
    }
    function markWheelSelection(options, selectedValue) {
      let hasSelected = false;
      options.forEach((option) => {
        const isSelected = option.dataset.value === selectedValue;
        hasSelected = hasSelected || isSelected;
        option.classList.toggle("is-selected", isSelected);
        option.setAttribute("aria-selected", isSelected ? "true" : "false");
        option.tabIndex = isSelected ? 0 : -1;
      });
      if (!hasSelected && options[0]) {
        options[0].tabIndex = 0;
      }
    }
    function syncTimeWheelPopover() {
      if (!timeWheelPopover || !self.hourElement || !self.minuteElement)
        return;
      const hourValue = String(parseInt(self.hourElement.value, 10));
      const minuteValue = String(parseInt(self.minuteElement.value, 10));
      markWheelSelection(timeWheelHourOptions, hourValue);
      markWheelSelection(timeWheelMinuteOptions, minuteValue);
      if (self.amPM !== void 0) {
        markWheelSelection(
          timeWheelAmPmOptions,
          String(self.amPM.textContent || "")
        );
      }
      if (timeWheelTrigger) {
        let label = `${pad(self.hourElement.value)}:${pad(self.minuteElement.value)}`;
        if (self.amPM !== void 0 && self.amPM.textContent) {
          label += ` ${self.amPM.textContent}`;
        }
        timeWheelTrigger.textContent = label;
        timeWheelTrigger.setAttribute("aria-label", `Selected time: ${label}`);
      }
    }
    function setTimeWheelPopoverOpen(open2) {
      if (!timeWheelPopover)
        return;
      if (open2) {
        timeWheelPopover.removeAttribute("hidden");
        timeWheelPopover.classList.add("is-open");
        if (timeWheelTrigger) {
          timeWheelTrigger.setAttribute("aria-expanded", "true");
        }
        const initialFocus = timeWheelHourOptions.find((option) => option.tabIndex === 0) || timeWheelHourOptions[0];
        initialFocus == null ? void 0 : initialFocus.focus();
        return;
      }
      timeWheelPopover.setAttribute("hidden", "hidden");
      timeWheelPopover.classList.remove("is-open");
      if (timeWheelTrigger) {
        timeWheelTrigger.setAttribute("aria-expanded", "false");
      }
    }
    function getTimeWheelFocusTarget() {
      return timeWheelHourOptions.find((option) => option.tabIndex === 0) || timeWheelHourOptions[0] || timeWheelMinuteOptions.find((option) => option.tabIndex === 0) || timeWheelMinuteOptions[0] || timeWheelAmPmOptions.find((option) => option.tabIndex === 0) || timeWheelAmPmOptions[0] || self.hourElement;
    }
    function buildTimeWheelPopover() {
      const popover = createElement(
        "div",
        "flatpickr-time-wheel-popover"
      );
      popover.id = `${calendarInstanceId}-time-wheel-popover`;
      popover.setAttribute("role", "dialog");
      popover.setAttribute("aria-modal", "false");
      popover.setAttribute("aria-label", "Time picker popover");
      popover.setAttribute("hidden", "hidden");
      const wheelContent = createElement(
        "div",
        "flatpickr-time-wheel-content"
      );
      const buildColumn = (className, label, values, onSelect) => {
        const column = createElement("div", className);
        column.setAttribute("role", "listbox");
        column.setAttribute("aria-label", label);
        values.forEach((value) => {
          const button = createElement(
            "button",
            "flatpickr-time-wheel-option",
            pad(value)
          );
          button.type = "button";
          button.dataset.value = String(parseInt(value, 10));
          button.setAttribute("role", "option");
          button.setAttribute("aria-selected", "false");
          button.setAttribute("aria-label", `${label}: ${pad(value)}`);
          button.tabIndex = -1;
          bind(button, "click", () => onSelect(value));
          bind(button, "keydown", (event) => {
            const options = Array.from(
              column.querySelectorAll(".flatpickr-time-wheel-option")
            );
            const currentIndex = options.indexOf(button);
            if (event.key === "ArrowDown" || event.key === "ArrowUp") {
              event.preventDefault();
              const delta = event.key === "ArrowDown" ? 1 : -1;
              const nextIndex = Math.max(
                0,
                Math.min(options.length - 1, currentIndex + delta)
              );
              const nextButton = options[nextIndex];
              if (!nextButton)
                return;
              nextButton.focus();
              nextButton.click();
              return;
            }
            if (event.key === "Tab") {
              const listColumns = Array.from(
                popover.querySelectorAll(".flatpickr-time-wheel-column")
              );
              const currentColumnIndex = listColumns.indexOf(column);
              const nextColumn = listColumns[currentColumnIndex + (event.shiftKey ? -1 : 1)];
              if (nextColumn) {
                event.preventDefault();
                const firstTarget = nextColumn.querySelector(
                  ".flatpickr-time-wheel-option.is-selected, .flatpickr-time-wheel-option"
                );
                firstTarget == null ? void 0 : firstTarget.focus();
              }
              return;
            }
            if (event.key === "Escape") {
              event.preventDefault();
              setTimeWheelPopoverOpen(false);
              timeWheelTrigger == null ? void 0 : timeWheelTrigger.focus();
            }
          });
          column.appendChild(button);
        });
        return {
          column,
          options: Array.from(
            column.querySelectorAll(".flatpickr-time-wheel-option")
          )
        };
      };
      const hourValues = self.config.time_24hr ? Array.from({ length: 24 }, (_, i) => String(i)) : Array.from({ length: 12 }, (_, i) => String(i + 1));
      const minuteStep = Math.max(1, self.config.minuteIncrement);
      const minuteValues = Array.from(
        { length: Math.ceil(60 / minuteStep) },
        (_, i) => String(Math.min(i * minuteStep, 59))
      );
      const hourColumn = buildColumn(
        "flatpickr-time-wheel-column flatpickr-time-wheel-hours",
        self.l10n.hourAriaLabel,
        hourValues,
        (value) => {
          if (!self.hourElement)
            return;
          self.hourElement.value = pad(value);
          updateTime();
          syncTimeWheelPopover();
        }
      );
      timeWheelHourOptions = hourColumn.options;
      wheelContent.appendChild(hourColumn.column);
      const minuteColumn = buildColumn(
        "flatpickr-time-wheel-column flatpickr-time-wheel-minutes",
        self.l10n.minuteAriaLabel,
        minuteValues,
        (value) => {
          if (!self.minuteElement)
            return;
          self.minuteElement.value = pad(value);
          updateTime();
          syncTimeWheelPopover();
        }
      );
      timeWheelMinuteOptions = minuteColumn.options;
      wheelContent.appendChild(minuteColumn.column);
      if (!self.config.time_24hr && self.amPM !== void 0) {
        const amPmValues = [self.l10n.amPM[0], self.l10n.amPM[1]];
        const amPmColumn = createElement(
          "div",
          "flatpickr-time-wheel-column flatpickr-time-wheel-ampm"
        );
        amPmColumn.setAttribute("role", "listbox");
        amPmColumn.setAttribute("aria-label", "AM/PM");
        amPmValues.forEach((value) => {
          const button = createElement(
            "button",
            "flatpickr-time-wheel-option",
            value
          );
          button.type = "button";
          button.dataset.value = value;
          button.setAttribute("role", "option");
          button.setAttribute("aria-selected", "false");
          button.setAttribute("aria-label", `AM/PM: ${value}`);
          button.tabIndex = -1;
          bind(button, "click", () => {
            if (!self.amPM)
              return;
            self.amPM.textContent = value;
            updateTime();
            syncTimeWheelPopover();
          });
          amPmColumn.appendChild(button);
        });
        timeWheelAmPmOptions = Array.from(
          amPmColumn.querySelectorAll(".flatpickr-time-wheel-option")
        );
        wheelContent.appendChild(amPmColumn);
      } else {
        timeWheelAmPmOptions = [];
      }
      popover.appendChild(wheelContent);
      const footer = createElement(
        "div",
        "flatpickr-time-wheel-footer"
      );
      const doneButton = createElement(
        "button",
        "flatpickr-time-wheel-done",
        "Done"
      );
      doneButton.type = "button";
      doneButton.setAttribute("aria-label", "Close time picker");
      bind(doneButton, "click", () => {
        setTimeWheelPopoverOpen(false);
        if (timeWheelTrigger) {
          timeWheelTrigger.focus();
        }
      });
      footer.appendChild(doneButton);
      popover.appendChild(footer);
      return popover;
    }
    function setHours(hours, minutes, seconds) {
      if (self.latestSelectedDateObj !== void 0) {
        self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
      }
      if (!self.hourElement || !self.minuteElement || self.isMobile)
        return;
      self.hourElement.value = pad(
        !self.config.time_24hr ? (12 + hours) % 12 + 12 * int(hours % 12 === 0) : hours
      );
      self.minuteElement.value = pad(minutes);
      if (self.amPM !== void 0)
        self.amPM.textContent = self.l10n.amPM[int(hours >= 12)];
      if (self.secondElement !== void 0)
        self.secondElement.value = pad(seconds);
      syncTimeWheelPopover();
    }
    function onYearInput(event) {
      const eventTarget = getEventTarget(event);
      const year = parseInt(eventTarget.value) + (event.delta || 0);
      if (year / 1e3 > 1 || event.key === "Enter" && !/[^\d]/.test(year.toString())) {
        changeYear(year);
      }
    }
    function bind(element2, event, handler, options) {
      if (event instanceof Array)
        return event.forEach((ev) => bind(element2, ev, handler, options));
      if (element2 instanceof Array)
        return element2.forEach((el) => bind(el, event, handler, options));
      element2.addEventListener(event, handler, options);
      self._handlers.push({
        remove: () => element2.removeEventListener(event, handler, options)
      });
    }
    function triggerChange() {
      triggerEvent("onChange");
    }
    function bindEvents() {
      if (self.config.wrap) {
        ["open", "close", "toggle", "clear"].forEach((evt) => {
          Array.prototype.forEach.call(
            self.element.querySelectorAll(`[data-${evt}]`),
            (el) => bind(
              el,
              "click",
              self[evt]
            )
          );
        });
      }
      if (self.isMobile) {
        setupMobile();
        return;
      }
      const debouncedResize = debounce(onResize, 50);
      self._debouncedChange = debounce(triggerChange, DEBOUNCED_CHANGE_MS);
      if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent))
        bind(self.daysContainer, "mouseover", (e) => {
          if (self.config.mode === "range")
            onMouseOver(getEventTarget(e));
        });
      bind(self._input, "keydown", onKeyDown);
      if (self.calendarContainer !== void 0) {
        bind(self.calendarContainer, "keydown", onKeyDown);
        bind(self.calendarContainer, ["mousedown", "touchstart"], () => {
          self.calendarContainer.classList.remove("is-keyboard-nav");
        });
      }
      if (!self.config.inline && !self.config.static)
        bind(window, "resize", debouncedResize);
      if (window.ontouchstart !== void 0)
        bind(window.document, "touchstart", documentClick);
      else
        bind(window.document, "mousedown", documentClick);
      bind(window.document, "focus", documentClick, { capture: true });
      if (self.config.clickOpens === true) {
        if (self.config.focusOpens === true) {
          bind(self._input, "focus", self.open);
        }
        bind(self._input, "click", self.open);
      }
      if (self.daysContainer !== void 0) {
        bind(self.monthNav, "click", onMonthNavClick);
        bind(self.monthNav, ["keyup", "increment"], onYearInput);
        bind(self.daysContainer, "click", selectDate);
      }
      if (self.closeButton !== void 0) {
        bind(self.closeButton, "click", focusAndClose);
      }
      if (self.timeContainer !== void 0 && self.minuteElement !== void 0 && self.hourElement !== void 0) {
        const selText = (e) => getEventTarget(e).select();
        bind(self.timeContainer, ["increment"], updateTime);
        bind(self.timeContainer, "blur", updateTime, { capture: true });
        bind(self.timeContainer, "click", timeIncrement);
        bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
        if (self.secondElement !== void 0)
          bind(
            self.secondElement,
            "focus",
            () => self.secondElement && self.secondElement.select()
          );
        if (self.amPM !== void 0) {
          bind(self.amPM, "click", (e) => {
            updateTime(e);
          });
        }
      }
      if (self.config.allowInput) {
        bind(self._input, "blur", onBlur);
      }
    }
    function jumpToDate(jumpDate, triggerChange2) {
      const jumpTo = jumpDate !== void 0 ? self.parseDate(jumpDate) : self.latestSelectedDateObj || (self.config.minDate && self.config.minDate > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate < self.now ? self.config.maxDate : self.now);
      const oldYear = self.currentYear;
      const oldMonth = self.currentMonth;
      try {
        if (jumpTo !== void 0) {
          self.currentYear = jumpTo.getFullYear();
          self.currentMonth = jumpTo.getMonth();
        }
      } catch (e) {
        const error = e instanceof Error ? e : new Error(typeof e === "string" ? e : String(e));
        error.message = "Invalid date supplied: " + jumpTo;
        self.config.errorHandler(error);
      }
      if (triggerChange2 && self.currentYear !== oldYear) {
        triggerEvent("onYearChange");
        buildMonthSwitch();
      }
      if (triggerChange2 && (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) {
        triggerEvent("onMonthChange");
      }
      self.redraw();
    }
    function timeIncrement(e) {
      const eventTarget = getEventTarget(e);
      if (~eventTarget.className.indexOf("arrow"))
        incrementNumInput(e, eventTarget.classList.contains("arrowUp") ? 1 : -1);
    }
    function incrementNumInput(e, delta, inputElem) {
      const target = e && getEventTarget(e);
      const input = inputElem || target && target.parentNode && target.parentNode.firstChild;
      const event = createEvent("increment");
      event.delta = delta;
      input && input.dispatchEvent(event);
    }
    function build() {
      const fragment = window.document.createDocumentFragment();
      self.calendarContainer = createElement(
        "div",
        "flatpickr-calendar"
      );
      self.calendarContainer.id = `${calendarInstanceId}-calendar`;
      self.calendarContainer.tabIndex = -1;
      self.calendarContainer.setAttribute("role", "dialog");
      self.calendarContainer.setAttribute("aria-modal", "false");
      self.calendarContainer.setAttribute("aria-hidden", "true");
      self.calendarContainer.setAttribute(
        "aria-label",
        self.config.calendarTitle || "Calendar"
      );
      self._input.setAttribute("aria-haspopup", "dialog");
      self._input.setAttribute("aria-controls", self.calendarContainer.id);
      self._input.setAttribute("aria-expanded", "false");
      if (!self.config.noCalendar) {
        if (self.config.showCloseButton) {
          self.closeButton = createElement(
            "button",
            "flatpickr-close-button"
          );
          self.closeButton.type = "button";
          self.closeButton.setAttribute("aria-label", "Close calendar");
          self.closeButton.tabIndex = 0;
          self.closeButton.innerHTML = "<svg class='flatpickr-close-icon' viewBox='0 0 16 16' aria-hidden='true' focusable='false'><path d='M4.22 4.22a.75.75 0 0 1 1.06 0L8 6.94l2.72-2.72a.75.75 0 1 1 1.06 1.06L9.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L8 9.06l-2.72 2.72a.75.75 0 1 1-1.06-1.06L6.94 8 4.22 5.28a.75.75 0 0 1 0-1.06Z' /></svg>";
        } else {
          self.closeButton = void 0;
        }
        if (self.config.showTitleBar || self.config.showCloseButton) {
          const titleBar = createElement("div", "flatpickr-titlebar");
          if (self.config.showTitleBar) {
            const titleText = createElement(
              "span",
              "flatpickr-title",
              self.config.calendarTitle
            );
            titleBar.appendChild(titleText);
          }
          if (self.closeButton) {
            titleBar.appendChild(self.closeButton);
          }
          fragment.appendChild(titleBar);
        }
        fragment.appendChild(buildMonthNav());
        self.innerContainer = createElement(
          "div",
          "flatpickr-innerContainer"
        );
        if (self.config.weekNumbers) {
          const { weekWrapper, weekNumbers } = buildWeeks();
          self.innerContainer.appendChild(weekWrapper);
          self.weekNumbers = weekNumbers;
          self.weekWrapper = weekWrapper;
        }
        self.rContainer = createElement(
          "div",
          "flatpickr-rContainer"
        );
        self.rContainer.appendChild(buildWeekdays());
        if (!self.daysContainer) {
          self.daysContainer = createElement(
            "div",
            "flatpickr-days"
          );
          self.daysContainer.tabIndex = -1;
          self.daysContainer.setAttribute("role", "grid");
          self.daysContainer.setAttribute("aria-label", "Calendar dates");
        }
        buildDays();
        self.rContainer.appendChild(self.daysContainer);
        self.innerContainer.appendChild(self.rContainer);
        fragment.appendChild(self.innerContainer);
      }
      if (self.config.enableTime) {
        fragment.appendChild(buildTime());
      }
      toggleClass(
        self.calendarContainer,
        "rangeMode",
        self.config.mode === "range"
      );
      toggleClass(
        self.calendarContainer,
        "animate",
        self.config.animate === true
      );
      toggleClass(
        self.calendarContainer,
        "multiMonth",
        self.config.showMonths > 1
      );
      self.calendarContainer.appendChild(fragment);
      liveRegion = createElement(
        "div",
        "flatpickr-visually-hidden flatpickr-a11y-live"
      );
      liveRegion.setAttribute("aria-live", "polite");
      liveRegion.setAttribute("aria-atomic", "true");
      self.calendarContainer.appendChild(liveRegion);
      const customAppend = self.config.appendTo !== void 0 && self.config.appendTo.nodeType !== void 0;
      if (self.config.inline || self.config.static) {
        self.calendarContainer.classList.add(
          self.config.inline ? "inline" : "static"
        );
        if (self.config.inline) {
          if (!customAppend && self.element.parentNode)
            self.element.parentNode.insertBefore(
              self.calendarContainer,
              self._input.nextSibling
            );
          else if (self.config.appendTo !== void 0)
            self.config.appendTo.appendChild(self.calendarContainer);
        }
        if (self.config.static) {
          const wrapper = createElement("div", "flatpickr-wrapper");
          if (self.element.parentNode)
            self.element.parentNode.insertBefore(wrapper, self.element);
          wrapper.appendChild(self.element);
          if (self.altInput)
            wrapper.appendChild(self.altInput);
          wrapper.appendChild(self.calendarContainer);
        }
      }
      if (!self.config.static && !self.config.inline)
        (self.config.appendTo !== void 0 ? self.config.appendTo : window.document.body).appendChild(self.calendarContainer);
    }
    function createDay(className, date, _dayNumber, i) {
      const dateIsEnabled = isEnabled(date, true), dayElement = createElement(
        "span",
        className,
        date.getDate().toString()
      );
      dayElement.dateObj = date;
      dayElement.$i = i;
      dayElement.setAttribute("role", "gridcell");
      dayElement.setAttribute(
        "aria-label",
        self.formatDate(date, self.config.ariaDateFormat)
      );
      if (className.indexOf("hidden") === -1 && compareDates(date, self.now) === 0) {
        self.todayDateElem = dayElement;
        dayElement.classList.add("today");
        dayElement.setAttribute("aria-current", "date");
      }
      if (dateIsEnabled) {
        dayElement.tabIndex = -1;
        dayElement.setAttribute("aria-selected", "false");
        if (isDateSelected(date)) {
          dayElement.classList.add("selected");
          dayElement.setAttribute("aria-selected", "true");
          self.selectedDateElem = dayElement;
          if (self.config.mode === "range") {
            toggleClass(
              dayElement,
              "startRange",
              self.selectedDates[0] && compareDates(date, self.selectedDates[0], true) === 0
            );
            toggleClass(
              dayElement,
              "endRange",
              self.selectedDates[1] && compareDates(date, self.selectedDates[1], true) === 0
            );
            if (className === "nextMonthDay")
              dayElement.classList.add("inRange");
          }
        }
      } else {
        dayElement.classList.add("flatpickr-disabled");
        dayElement.setAttribute("aria-disabled", "true");
      }
      if (self.config.mode === "range") {
        if (isDateInRange(date) && !isDateSelected(date))
          dayElement.classList.add("inRange");
      }
      if (self.weekNumbers && self.config.showMonths === 1 && className !== "prevMonthDay" && i % 7 === 6) {
        self.weekNumbers.insertAdjacentHTML(
          "beforeend",
          "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>"
        );
      }
      triggerEvent("onDayCreate", dayElement);
      return dayElement;
    }
    function focusOnDayElem(targetNode) {
      if (self.selectedDateElem) {
        self.selectedDateElem.setAttribute("aria-selected", "false");
      }
      targetNode.setAttribute("aria-selected", "true");
      targetNode.focus();
      if (self.config.mode === "range")
        onMouseOver(targetNode);
    }
    function getFirstAvailableDay(delta) {
      const startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
      const endMonth = delta > 0 ? self.config.showMonths : -1;
      for (let m = startMonth; m != endMonth; m += delta) {
        const month = self.daysContainer.children[m];
        const startIndex = delta > 0 ? 0 : month.children.length - 1;
        const endIndex = delta > 0 ? month.children.length : -1;
        for (let i = startIndex; i != endIndex; i += delta) {
          const c = month.children[i];
          if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj))
            return c;
        }
      }
      return void 0;
    }
    function getPreferredTabDay() {
      const preferredByConfig = self.config.initialDayFocus === "selected" ? [self.selectedDateElem, self.todayDateElem] : self.config.initialDayFocus === "firstAvailable" ? [] : [self.todayDateElem, self.selectedDateElem];
      for (const dayElem of preferredByConfig) {
        if (dayElem !== void 0 && isInView(dayElem) && isEnabled(dayElem.dateObj)) {
          return dayElem;
        }
      }
      return getFirstAvailableDay(1);
    }
    function getNextAvailableDay(current, delta) {
      const givenMonth = current.className.indexOf("Month") === -1 ? current.dateObj.getMonth() : self.currentMonth;
      const endMonth = delta > 0 ? self.config.showMonths : -1;
      const loopDelta = delta > 0 ? 1 : -1;
      for (let m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
        const month = self.daysContainer.children[m];
        const startIndex = givenMonth - self.currentMonth === m ? current.$i + delta : delta < 0 ? month.children.length - 1 : 0;
        const numMonthDays = month.children.length;
        for (let i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
          const c = month.children[i];
          if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj) && Math.abs(current.$i - i) >= Math.abs(delta))
            return focusOnDayElem(c);
        }
      }
      self.changeMonth(loopDelta);
      focusOnDay(getFirstAvailableDay(loopDelta), 0);
      return void 0;
    }
    function focusOnDay(current, offset) {
      const activeElement = getClosestActiveElement();
      const dayFocused = isInView(activeElement || document.body);
      const startElem = current !== void 0 ? current : dayFocused ? activeElement : self.selectedDateElem !== void 0 && isInView(self.selectedDateElem) ? self.selectedDateElem : self.todayDateElem !== void 0 && isInView(self.todayDateElem) ? self.todayDateElem : getFirstAvailableDay(offset > 0 ? 1 : -1);
      if (startElem === void 0) {
        self._input.focus();
      } else if (!dayFocused) {
        focusOnDayElem(startElem);
      } else {
        getNextAvailableDay(startElem, offset);
      }
    }
    function buildMonthDays(year, month) {
      const firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
      const prevMonthDays = self.utils.getDaysInMonth(
        (month - 1 + 12) % 12,
        year
      );
      const daysInMonth = self.utils.getDaysInMonth(month, year), days = window.document.createDocumentFragment(), isMultiMonth = self.config.showMonths > 1, prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay", nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
      let dayNumber = prevMonthDays + 1 - firstOfMonth, dayIndex = 0;
      for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
        days.appendChild(
          createDay(
            `flatpickr-day ${prevMonthDayClass}`,
            new Date(year, month - 1, dayNumber),
            dayNumber,
            dayIndex
          )
        );
      }
      for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
        days.appendChild(
          createDay(
            "flatpickr-day",
            new Date(year, month, dayNumber),
            dayNumber,
            dayIndex
          )
        );
      }
      for (let dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth && (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
        days.appendChild(
          createDay(
            `flatpickr-day ${nextMonthDayClass}`,
            new Date(year, month + 1, dayNum % daysInMonth),
            dayNum,
            dayIndex
          )
        );
      }
      const dayContainer = createElement("div", "dayContainer");
      dayContainer.appendChild(days);
      return dayContainer;
    }
    function buildDays() {
      if (self.daysContainer === void 0) {
        return;
      }
      clearNode(self.daysContainer);
      if (self.weekNumbers)
        clearNode(self.weekNumbers);
      const frag = document.createDocumentFragment();
      for (let i = 0; i < self.config.showMonths; i++) {
        const d = new Date(self.currentYear, self.currentMonth, 1);
        d.setMonth(self.currentMonth + i);
        frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
      }
      self.daysContainer.appendChild(frag);
      self.days = self.daysContainer.firstChild;
      if (self.config.mode === "range" && self.selectedDates.length === 1) {
        onMouseOver();
      }
    }
    function buildMonthSwitch() {
      if (self.config.showMonths > 1 || self.config.monthSelectorType !== "dropdown")
        return;
      const getMonthBounds = (year) => {
        let minMonth2 = 0;
        let maxMonth2 = 11;
        if (self.config.minDate !== void 0 && year === self.config.minDate.getFullYear()) {
          minMonth2 = self.config.minDate.getMonth();
        }
        if (self.config.maxDate !== void 0 && year === self.config.maxDate.getFullYear()) {
          maxMonth2 = self.config.maxDate.getMonth();
        }
        return { minMonth: minMonth2, maxMonth: maxMonth2 };
      };
      const { minMonth, maxMonth } = getMonthBounds(self.currentYear);
      if (self.currentMonth < minMonth)
        self.currentMonth = minMonth;
      if (self.currentMonth > maxMonth)
        self.currentMonth = maxMonth;
      clearNode(self.monthsDropdownContainer);
      for (let i = minMonth; i <= maxMonth; i++) {
        const option = createElement(
          "option",
          "flatpickr-monthDropdown-month",
          monthToStr(i, self.config.shorthandCurrentMonth, self.l10n)
        );
        option.value = i.toString();
        option.selected = i === self.currentMonth;
        self.monthsDropdownContainer.appendChild(option);
      }
      self.monthsDropdownContainer.value = self.currentMonth.toString();
    }
    function buildMonth() {
      const container = createElement("div", "flatpickr-month");
      const monthNavFragment = window.document.createDocumentFragment();
      let monthElement;
      if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
        monthElement = createElement("span", "cur-month");
      } else {
        const monthDropdown = createElement(
          "div",
          "flatpickr-monthDropdown"
        );
        self.monthsDropdownContainer = createElement(
          "select",
          "flatpickr-monthDropdown-months"
        );
        self.monthsDropdownContainer.id = `${calendarInstanceId}-month-toggle`;
        self.monthsDropdownContainer.setAttribute(
          "aria-label",
          self.l10n.monthAriaLabel
        );
        bind(self.monthsDropdownContainer, "change", () => {
          const selectedMonth = parseInt(self.monthsDropdownContainer.value, 10);
          if (!isNaN(selectedMonth)) {
            self.changeMonth(selectedMonth, false);
          }
        });
        buildMonthSwitch();
        monthDropdown.appendChild(self.monthsDropdownContainer);
        monthElement = monthDropdown;
      }
      const yearInput = createNumberInput("cur-year", { tabindex: "0" });
      const yearElement = yearInput.getElementsByTagName(
        "input"
      )[0];
      yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);
      if (self.config.minDate) {
        yearElement.setAttribute(
          "min",
          self.config.minDate.getFullYear().toString()
        );
      }
      if (self.config.maxDate) {
        yearElement.setAttribute(
          "max",
          self.config.maxDate.getFullYear().toString()
        );
        yearElement.disabled = !!self.config.minDate && self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
      }
      const currentMonth = createElement(
        "div",
        "flatpickr-current-month"
      );
      currentMonth.appendChild(monthElement);
      currentMonth.appendChild(yearInput);
      monthNavFragment.appendChild(currentMonth);
      container.appendChild(monthNavFragment);
      return {
        container,
        yearElement,
        monthElement
      };
    }
    function buildMonths() {
      clearNode(self.monthNav);
      self.monthNav.appendChild(self.prevMonthNav);
      if (self.config.showMonths) {
        self.yearElements = [];
        self.monthElements = [];
      }
      for (let m = self.config.showMonths; m--; ) {
        const month = buildMonth();
        self.yearElements.push(month.yearElement);
        self.monthElements.push(month.monthElement);
        self.monthNav.appendChild(month.container);
      }
      self.monthNav.appendChild(self.nextMonthNav);
    }
    function buildMonthNav() {
      self.monthNav = createElement("div", "flatpickr-months");
      self.yearElements = [];
      self.monthElements = [];
      self.prevMonthNav = createElement(
        "button",
        "flatpickr-prev-month"
      );
      self.prevMonthNav.type = "button";
      self.prevMonthNav.setAttribute("aria-label", "Previous month");
      self.prevMonthNav.tabIndex = 0;
      self.prevMonthNav.innerHTML = self.config.prevArrow;
      self.nextMonthNav = createElement("button", "flatpickr-next-month");
      self.nextMonthNav.type = "button";
      self.nextMonthNav.setAttribute("aria-label", "Next month");
      self.nextMonthNav.tabIndex = 0;
      self.nextMonthNav.innerHTML = self.config.nextArrow;
      buildMonths();
      Object.defineProperty(self, "_hidePrevMonthArrow", {
        get: () => self.__hidePrevMonthArrow,
        set(bool) {
          if (self.__hidePrevMonthArrow !== bool) {
            toggleClass(self.prevMonthNav, "flatpickr-disabled", bool);
            self.__hidePrevMonthArrow = bool;
          }
        }
      });
      Object.defineProperty(self, "_hideNextMonthArrow", {
        get: () => self.__hideNextMonthArrow,
        set(bool) {
          if (self.__hideNextMonthArrow !== bool) {
            toggleClass(self.nextMonthNav, "flatpickr-disabled", bool);
            self.__hideNextMonthArrow = bool;
          }
        }
      });
      self.currentYearElement = self.yearElements[0];
      updateNavigationCurrentMonth();
      return self.monthNav;
    }
    function buildTime() {
      self.calendarContainer.classList.add("hasTime");
      if (self.config.noCalendar)
        self.calendarContainer.classList.add("noCalendar");
      const isTimeOnly = self.config.enableTime === true && self.config.noCalendar === true;
      const defaults2 = getDefaultHours(self.config);
      self.timeContainer = createElement("div", "flatpickr-time");
      self.timeContainer.classList.add("has-wheel-popover");
      self.timeContainer.tabIndex = -1;
      const separator = createElement("span", "flatpickr-time-separator", ":");
      const hourInput = createNumberInput("flatpickr-hour", {
        "aria-label": self.l10n.hourAriaLabel
      });
      self.hourElement = hourInput.getElementsByTagName(
        "input"
      )[0];
      const minuteInput = createNumberInput("flatpickr-minute", {
        "aria-label": self.l10n.minuteAriaLabel
      });
      self.minuteElement = minuteInput.getElementsByTagName(
        "input"
      )[0];
      self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
      self.hourElement.value = pad(
        self.latestSelectedDateObj ? self.latestSelectedDateObj.getHours() : self.config.time_24hr ? defaults2.hours : military2ampm(defaults2.hours)
      );
      self.minuteElement.value = pad(
        self.latestSelectedDateObj ? self.latestSelectedDateObj.getMinutes() : defaults2.minutes
      );
      self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
      self.minuteElement.setAttribute(
        "step",
        self.config.minuteIncrement.toString()
      );
      self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
      self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
      self.hourElement.setAttribute("maxlength", "2");
      self.minuteElement.setAttribute("min", "0");
      self.minuteElement.setAttribute("max", "59");
      self.minuteElement.setAttribute("maxlength", "2");
      self.timeContainer.appendChild(hourInput);
      self.timeContainer.appendChild(separator);
      self.timeContainer.appendChild(minuteInput);
      if (self.config.time_24hr)
        self.timeContainer.classList.add("time24hr");
      if (self.config.enableSeconds) {
        self.timeContainer.classList.add("hasSeconds");
        const secondInput = createNumberInput("flatpickr-second");
        self.secondElement = secondInput.getElementsByTagName(
          "input"
        )[0];
        self.secondElement.value = pad(
          self.latestSelectedDateObj ? self.latestSelectedDateObj.getSeconds() : defaults2.seconds
        );
        self.secondElement.setAttribute(
          "step",
          self.minuteElement.getAttribute("step")
        );
        self.secondElement.setAttribute("min", "0");
        self.secondElement.setAttribute("max", "59");
        self.secondElement.setAttribute("maxlength", "2");
        self.timeContainer.appendChild(
          createElement("span", "flatpickr-time-separator", ":")
        );
        self.timeContainer.appendChild(secondInput);
      }
      if (!self.config.time_24hr) {
        self.amPM = createElement(
          "span",
          "flatpickr-am-pm",
          self.l10n.amPM[int(
            (self.latestSelectedDateObj ? self.hourElement.value : self.config.defaultHour) > 11
          )]
        );
        self.amPM.title = self.l10n.toggleTitle;
        self.amPM.tabIndex = -1;
        self.timeContainer.appendChild(self.amPM);
      }
      if (!isTimeOnly) {
        const timeBar = createElement(
          "div",
          "flatpickr-time-wheel-bar"
        );
        const timeLabel = createElement(
          "span",
          "flatpickr-time-wheel-label",
          "Time"
        );
        timeWheelTrigger = createElement(
          "button",
          "flatpickr-time-wheel-trigger"
        );
        timeWheelTrigger.type = "button";
        timeWheelTrigger.setAttribute("aria-haspopup", "dialog");
        timeWheelTrigger.setAttribute("aria-expanded", "false");
        timeWheelTrigger.setAttribute(
          "aria-controls",
          `${calendarInstanceId}-time-wheel-popover`
        );
        bind(timeWheelTrigger, "click", () => {
          if (!timeWheelPopover)
            return;
          setTimeWheelPopoverOpen(!timeWheelPopover.classList.contains("is-open"));
        });
        timeBar.appendChild(timeLabel);
        timeBar.appendChild(timeWheelTrigger);
        self.timeContainer.appendChild(timeBar);
      } else {
        timeWheelTrigger = void 0;
      }
      timeWheelPopover = buildTimeWheelPopover();
      self.timeContainer.appendChild(timeWheelPopover);
      syncTimeWheelPopover();
      if (isTimeOnly) {
        timeWheelPopover.removeAttribute("hidden");
        timeWheelPopover.classList.add("is-open");
      }
      return self.timeContainer;
    }
    function buildWeekdays() {
      if (!self.weekdayContainer)
        self.weekdayContainer = createElement(
          "div",
          "flatpickr-weekdays"
        );
      else
        clearNode(self.weekdayContainer);
      for (let i = self.config.showMonths; i--; ) {
        const container = createElement(
          "div",
          "flatpickr-weekdaycontainer"
        );
        self.weekdayContainer.appendChild(container);
      }
      updateWeekdays();
      return self.weekdayContainer;
    }
    function updateWeekdays() {
      if (!self.weekdayContainer) {
        return;
      }
      const firstDayOfWeek = self.l10n.firstDayOfWeek;
      let weekdays = [...self.l10n.weekdays.shorthand];
      let weekdaysLong = [...self.l10n.weekdays.longhand];
      if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
        weekdays = [
          ...weekdays.splice(firstDayOfWeek, weekdays.length),
          ...weekdays.splice(0, firstDayOfWeek)
        ];
        weekdaysLong = [
          ...weekdaysLong.splice(firstDayOfWeek, weekdaysLong.length),
          ...weekdaysLong.splice(0, firstDayOfWeek)
        ];
      }
      for (let i = self.config.showMonths; i--; ) {
        const weekdaysMarkup = weekdays.map(
          (weekday, index) => `<span class='flatpickr-weekday' role='columnheader' aria-label='${weekdaysLong[index]}'>${weekday}</span>`
        ).join("");
        self.weekdayContainer.children[i].innerHTML = weekdaysMarkup;
      }
    }
    function buildWeeks() {
      self.calendarContainer.classList.add("hasWeeks");
      const weekWrapper = createElement(
        "div",
        "flatpickr-weekwrapper"
      );
      weekWrapper.appendChild(
        createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation)
      );
      const weekNumbers = createElement("div", "flatpickr-weeks");
      weekWrapper.appendChild(weekNumbers);
      return {
        weekWrapper,
        weekNumbers
      };
    }
    function changeMonth(value, isOffset = true) {
      const delta = isOffset ? value : value - self.currentMonth;
      if (delta < 0 && self._hidePrevMonthArrow === true || delta > 0 && self._hideNextMonthArrow === true)
        return;
      self.currentMonth += delta;
      if (self.currentMonth < 0 || self.currentMonth > 11) {
        self.currentYear += self.currentMonth > 11 ? 1 : -1;
        self.currentMonth = (self.currentMonth + 12) % 12;
        triggerEvent("onYearChange");
        buildMonthSwitch();
      }
      buildDays();
      triggerEvent("onMonthChange");
      updateNavigationCurrentMonth();
    }
    function clear(triggerChangeEvent = true, toInitial = true) {
      self.input.value = "";
      if (self.altInput !== void 0)
        self.altInput.value = "";
      if (self.mobileInput !== void 0)
        self.mobileInput.value = "";
      self.selectedDates = [];
      self.latestSelectedDateObj = void 0;
      if (toInitial === true) {
        self.currentYear = self._initialDate.getFullYear();
        self.currentMonth = self._initialDate.getMonth();
      }
      if (self.config.enableTime === true) {
        const { hours, minutes, seconds } = getDefaultHours(self.config);
        setHours(hours, minutes, seconds);
      }
      self.redraw();
      if (triggerChangeEvent)
        triggerEvent("onChange");
    }
    function close() {
      self.isOpen = false;
      setTimeWheelPopoverOpen(false);
      if (!self.isMobile) {
        if (self.calendarContainer !== void 0) {
          self.calendarContainer.classList.remove("open");
        }
        if (self._input !== void 0) {
          self._input.classList.remove("active");
          self._input.setAttribute("aria-expanded", "false");
        }
        self.calendarContainer.setAttribute("aria-hidden", "true");
      }
      triggerEvent("onClose");
    }
    function destroy() {
      if (self.config !== void 0)
        triggerEvent("onDestroy");
      for (let i = self._handlers.length; i--; ) {
        self._handlers[i].remove();
      }
      self._handlers = [];
      if (self.mobileInput) {
        if (self.mobileInput.parentNode)
          self.mobileInput.parentNode.removeChild(self.mobileInput);
        self.mobileInput = void 0;
      } else if (self.calendarContainer && self.calendarContainer.parentNode) {
        if (self.config.static && self.calendarContainer.parentNode) {
          const wrapper = self.calendarContainer.parentNode;
          wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);
          if (wrapper.parentNode) {
            while (wrapper.firstChild)
              wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
            wrapper.parentNode.removeChild(wrapper);
          }
        } else
          self.calendarContainer.parentNode.removeChild(self.calendarContainer);
      }
      if (self.altInput) {
        self.input.type = "text";
        if (self.altInput.parentNode)
          self.altInput.parentNode.removeChild(self.altInput);
        delete self.altInput;
      }
      if (self.input) {
        self.input.type = self.input._type;
        self.input.classList.remove("flatpickr-input");
        self.input.removeAttribute("readonly");
      }
      [
        "_showTimeInput",
        "latestSelectedDateObj",
        "_hideNextMonthArrow",
        "_hidePrevMonthArrow",
        "__hideNextMonthArrow",
        "__hidePrevMonthArrow",
        "isMobile",
        "isOpen",
        "selectedDateElem",
        "minDateHasTime",
        "maxDateHasTime",
        "days",
        "daysContainer",
        "_input",
        "_positionElement",
        "innerContainer",
        "rContainer",
        "monthNav",
        "todayDateElem",
        "calendarContainer",
        "weekdayContainer",
        "prevMonthNav",
        "nextMonthNav",
        "monthsDropdownContainer",
        "currentMonthElement",
        "currentYearElement",
        "navigationCurrentMonth",
        "selectedDateElem",
        "config"
      ].forEach((k) => {
        try {
          delete self[k];
        } catch (_) {
        }
      });
    }
    function isCalendarElem(elem) {
      return self.calendarContainer.contains(elem);
    }
    function documentClick(e) {
      if (self.isOpen && !self.config.inline) {
        const eventTarget = getEventTarget(e);
        const isCalendarElement = isCalendarElem(eventTarget);
        const isInput = eventTarget === self.input || eventTarget === self.altInput || self.element.contains(eventTarget) || e.path && e.path.indexOf && (~e.path.indexOf(self.input) || ~e.path.indexOf(self.altInput));
        const lostFocus = !isInput && !isCalendarElement && !isCalendarElem(e.relatedTarget);
        const isIgnored = !self.config.ignoredFocusElements.some(
          (elem) => elem.contains(eventTarget)
        );
        if (lostFocus && isIgnored) {
          if (self.config.allowInput) {
            self.setDate(
              self._input.value,
              false,
              self.config.altInput ? self.config.altFormat : self.config.dateFormat
            );
          }
          if (self.timeContainer !== void 0 && self.minuteElement !== void 0 && self.hourElement !== void 0 && self.input.value !== "" && self.input.value !== void 0) {
            updateTime();
          }
          self.close();
          if (self.config && self.config.mode === "range" && self.selectedDates.length === 1)
            self.clear(false);
        }
      }
    }
    function changeYear(newYear) {
      if (!newYear || self.config.minDate && newYear < self.config.minDate.getFullYear() || self.config.maxDate && newYear > self.config.maxDate.getFullYear())
        return;
      const newYearNum = newYear, isNewYear = self.currentYear !== newYearNum;
      self.currentYear = newYearNum || self.currentYear;
      if (self.config.maxDate && self.currentYear === self.config.maxDate.getFullYear()) {
        self.currentMonth = Math.min(
          self.config.maxDate.getMonth(),
          self.currentMonth
        );
      } else if (self.config.minDate && self.currentYear === self.config.minDate.getFullYear()) {
        self.currentMonth = Math.max(
          self.config.minDate.getMonth(),
          self.currentMonth
        );
      }
      if (isNewYear) {
        self.redraw();
        triggerEvent("onYearChange");
        buildMonthSwitch();
      }
    }
    function isEnabled(date, timeless = true) {
      var _a;
      const dateToCheck = self.parseDate(date, void 0, timeless);
      if (self.config.minDate && dateToCheck && compareDates(
        dateToCheck,
        self.config.minDate,
        timeless !== void 0 ? timeless : !self.minDateHasTime
      ) < 0 || self.config.maxDate && dateToCheck && compareDates(
        dateToCheck,
        self.config.maxDate,
        timeless !== void 0 ? timeless : !self.maxDateHasTime
      ) > 0)
        return false;
      if (!self.config.enable && self.config.disable.length === 0)
        return true;
      if (dateToCheck === void 0)
        return false;
      const bool = !!self.config.enable, array = (_a = self.config.enable) != null ? _a : self.config.disable;
      for (let i = 0, d; i < array.length; i++) {
        d = array[i];
        if (typeof d === "function" && d(dateToCheck))
          return bool;
        else if (d instanceof Date && dateToCheck !== void 0 && d.getTime() === dateToCheck.getTime())
          return bool;
        else if (typeof d === "string") {
          const parsed = self.parseDate(d, void 0, true);
          return parsed && parsed.getTime() === dateToCheck.getTime() ? bool : !bool;
        } else if (typeof d === "object" && dateToCheck !== void 0 && d.from && d.to && dateToCheck.getTime() >= d.from.getTime() && dateToCheck.getTime() <= d.to.getTime())
          return bool;
      }
      return !bool;
    }
    function isInView(elem) {
      if (self.daysContainer !== void 0)
        return elem.className.indexOf("hidden") === -1 && elem.className.indexOf("flatpickr-disabled") === -1 && self.daysContainer.contains(elem);
      return false;
    }
    function onBlur(e) {
      const isInput = e.target === self._input;
      const valueChanged = self._input.value.trimEnd() !== getDateStr();
      if (isInput && valueChanged && !(e.relatedTarget && isCalendarElem(e.relatedTarget))) {
        self.setDate(
          self._input.value,
          true,
          e.target === self.altInput ? self.config.altFormat : self.config.dateFormat
        );
      }
    }
    function onKeyDown(e) {
      if (self.calendarContainer !== void 0) {
        self.calendarContainer.classList.add("is-keyboard-nav");
      }
      const eventTarget = getEventTarget(e);
      const isInput = self.config.wrap ? element.contains(eventTarget) : eventTarget === self._input;
      const isTimeOnlyInput = self.config.enableTime === true && self.config.noCalendar === true;
      const allowInput = self.config.allowInput;
      const allowKeydown = self.isOpen && (!allowInput || !isInput);
      const allowInlineKeydown = self.config.inline && isInput && !allowInput;
      if (e.keyCode === 13 && isInput) {
        if (allowInput) {
          self.setDate(
            self._input.value,
            true,
            eventTarget === self.altInput ? self.config.altFormat : self.config.dateFormat
          );
          self.close();
          return eventTarget.blur();
        } else {
          self.open();
          if (!self.config.noCalendar) {
            focusOnDay(void 0, 1);
          }
        }
      } else if (isCalendarElem(eventTarget) || allowKeydown || allowInlineKeydown || isTimeOnlyInput && isInput) {
        const isTimeObj = !!self.timeContainer && self.timeContainer.contains(eventTarget);
        const isMonthDropdown = eventTarget === self.monthsDropdownContainer;
        if (isMonthDropdown && [13, 32, 37, 38, 39, 40].indexOf(e.keyCode) !== -1) {
          return;
        }
        switch (e.keyCode) {
          case 13:
            if (eventTarget === self.closeButton) {
              e.preventDefault();
              focusAndClose();
              break;
            }
            if (eventTarget === timeWheelTrigger) {
              e.preventDefault();
              setTimeWheelPopoverOpen(true);
              break;
            }
            if (timeWheelPopover !== void 0 && eventTarget.classList.contains(
              "flatpickr-time-wheel-done"
            )) {
              e.preventDefault();
              setTimeWheelPopoverOpen(false);
              timeWheelTrigger == null ? void 0 : timeWheelTrigger.focus();
              break;
            }
            if (eventTarget === self.prevMonthNav || eventTarget === self.nextMonthNav) {
              e.preventDefault();
              changeMonth(eventTarget === self.prevMonthNav ? -1 : 1);
              break;
            }
            if (isTimeObj) {
              e.preventDefault();
              updateTime();
              focusAndClose();
            } else
              selectDate(e);
            break;
          case 32:
            if (eventTarget === self.prevMonthNav || eventTarget === self.nextMonthNav) {
              e.preventDefault();
              changeMonth(eventTarget === self.prevMonthNav ? -1 : 1);
            } else if (!isInput && !isTimeObj && isInView(eventTarget)) {
              e.preventDefault();
              selectDate(e);
            }
            break;
          case 27:
            e.preventDefault();
            focusAndClose();
            break;
          case 8:
          case 46:
            if (isInput && !self.config.allowInput) {
              e.preventDefault();
              self.clear();
            }
            break;
          case 37:
          case 39:
            if (!isTimeObj && !isInput) {
              e.preventDefault();
              const activeElement = getClosestActiveElement();
              if (self.daysContainer !== void 0 && (allowInput === false || activeElement && isInView(activeElement))) {
                const delta2 = e.keyCode === 39 ? 1 : -1;
                if (!e.ctrlKey)
                  focusOnDay(void 0, delta2);
                else {
                  e.stopPropagation();
                  changeMonth(delta2);
                  focusOnDay(getFirstAvailableDay(1), 0);
                }
              }
            } else if (self.hourElement)
              self.hourElement.focus();
            break;
          case 38:
          case 40:
            e.preventDefault();
            const delta = e.keyCode === 40 ? 1 : -1;
            if (self.daysContainer && eventTarget.$i !== void 0 || eventTarget === self.input || eventTarget === self.altInput) {
              if (e.ctrlKey) {
                e.stopPropagation();
                changeYear(self.currentYear - delta);
                focusOnDay(getFirstAvailableDay(1), 0);
              } else if (!isTimeObj)
                focusOnDay(void 0, delta * 7);
            } else if (eventTarget === self.currentYearElement) {
              changeYear(self.currentYear - delta);
            } else if (self.config.enableTime) {
              if (!isTimeObj && self.hourElement)
                self.hourElement.focus();
              updateTime(e);
              self._debouncedChange();
            }
            break;
          case 9:
            if (self.isOpen || self.config.enableTime === true && self.config.noCalendar === true) {
              const firstDay = !self.config.noCalendar ? getPreferredTabDay() : void 0;
              const isDayInGrid = !self.config.noCalendar && !!self.daysContainer && self.daysContainer.contains(eventTarget);
              const tabOrder = [
                !self.config.noCalendar ? self.prevMonthNav : void 0,
                !self.config.noCalendar ? self.monthsDropdownContainer : void 0,
                !self.config.noCalendar ? self.currentYearElement : void 0,
                !self.config.noCalendar ? self.nextMonthNav : void 0,
                firstDay,
                timeWheelTrigger || getTimeWheelFocusTarget(),
                timeWheelTrigger ? void 0 : self.minuteElement,
                timeWheelTrigger ? void 0 : self.secondElement,
                timeWheelTrigger ? void 0 : self.amPM,
                !self.config.noCalendar ? self.closeButton : void 0
              ].concat(self.pluginElements).filter((el) => {
                if (!el)
                  return false;
                const isDisabled = el.disabled === true || el.classList.contains("flatpickr-disabled");
                return !isDisabled;
              });
              if (isInput && tabOrder.length > 0) {
                e.preventDefault();
                if (self.config.enableTime === true && self.config.noCalendar === true) {
                  setTimeWheelPopoverOpen(true);
                }
                tabOrder[0].focus();
              } else if (isDayInGrid) {
                e.preventDefault();
                if (e.shiftKey) {
                  if (self.nextMonthNav && !self.nextMonthNav.classList.contains("flatpickr-disabled")) {
                    self.nextMonthNav.focus();
                  } else {
                    (self.currentYearElement || self.monthsDropdownContainer || self.prevMonthNav || self._input).focus();
                  }
                } else {
                  (timeWheelTrigger || getTimeWheelFocusTarget() || self.hourElement || self.minuteElement || self.secondElement || self.amPM || self.closeButton || self._input).focus();
                }
              } else {
                const i = tabOrder.indexOf(eventTarget);
                if (i !== -1) {
                  e.preventDefault();
                  const next = tabOrder[i + (e.shiftKey ? -1 : 1)] || self._input;
                  next.focus();
                }
              }
            }
            break;
          case 77:
            if (!isInput && !isTimeObj && !self.config.noCalendar) {
              e.preventDefault();
              (self.monthsDropdownContainer || self.currentYearElement || self.prevMonthNav || self._input).focus();
            }
            break;
          default:
            break;
        }
      }
      if (self.amPM !== void 0 && eventTarget === self.amPM) {
        switch (e.key) {
          case self.l10n.amPM[0].charAt(0):
          case self.l10n.amPM[0].charAt(0).toLowerCase():
            self.amPM.textContent = self.l10n.amPM[0];
            setHoursFromInputs();
            updateValue();
            break;
          case self.l10n.amPM[1].charAt(0):
          case self.l10n.amPM[1].charAt(0).toLowerCase():
            self.amPM.textContent = self.l10n.amPM[1];
            setHoursFromInputs();
            updateValue();
            break;
        }
      }
      if (isInput || isCalendarElem(eventTarget)) {
        triggerEvent("onKeyDown", e);
      }
    }
    function onMouseOver(elem, cellClass = "flatpickr-day") {
      if (self.selectedDates.length !== 1 || elem && (!elem.classList.contains(cellClass) || elem.classList.contains("flatpickr-disabled")))
        return;
      const hoverDate = elem ? elem.dateObj.getTime() : self.days.firstElementChild.dateObj.getTime(), initialDate = self.parseDate(
        self.selectedDates[0],
        void 0,
        true
      ).getTime(), rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()), rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
      let containsDisabled = false;
      let minRange = 0, maxRange = 0;
      for (let t = rangeStartDate; t < rangeEndDate; t += duration.DAY) {
        if (!isEnabled(new Date(t), true)) {
          containsDisabled = containsDisabled || t > rangeStartDate && t < rangeEndDate;
          if (t < initialDate && (!minRange || t > minRange))
            minRange = t;
          else if (t > initialDate && (!maxRange || t < maxRange))
            maxRange = t;
        }
      }
      const hoverableCells = Array.from(
        self.rContainer.querySelectorAll(
          `*:nth-child(-n+${self.config.showMonths}) > .${cellClass}`
        )
      );
      hoverableCells.forEach((dayElem) => {
        const date = dayElem.dateObj;
        const timestamp = date.getTime();
        const outOfRange = minRange > 0 && timestamp < minRange || maxRange > 0 && timestamp > maxRange;
        if (outOfRange) {
          dayElem.classList.add("notAllowed");
          ["inRange", "startRange", "endRange"].forEach((c) => {
            dayElem.classList.remove(c);
          });
          return;
        } else if (containsDisabled && !outOfRange)
          return;
        ["startRange", "inRange", "endRange", "notAllowed"].forEach((c) => {
          dayElem.classList.remove(c);
        });
        if (elem !== void 0) {
          elem.classList.add(
            hoverDate <= self.selectedDates[0].getTime() ? "startRange" : "endRange"
          );
          if (initialDate < hoverDate && timestamp === initialDate)
            dayElem.classList.add("startRange");
          else if (initialDate > hoverDate && timestamp === initialDate)
            dayElem.classList.add("endRange");
          if (timestamp >= minRange && (maxRange === 0 || timestamp <= maxRange) && isBetween(timestamp, initialDate, hoverDate))
            dayElem.classList.add("inRange");
        }
      });
    }
    function onResize() {
      if (self.isOpen && !self.config.static && !self.config.inline)
        positionCalendar();
    }
    function open(e, positionElement = self._positionElement) {
      if (self.isMobile === true) {
        const isTimeOnlyInput = self.config.enableTime === true && self.config.noCalendar === true;
        if (e) {
          e.preventDefault();
          const eventTarget = getEventTarget(e);
          if (eventTarget) {
            eventTarget.blur();
          }
        }
        if (self.mobileInput !== void 0) {
          if (isTimeOnlyInput) {
            self.mobileInput.focus();
          }
          self.mobileInput.click();
        }
        triggerEvent("onOpen");
        return;
      } else if (self._input.disabled || self.config.inline) {
        return;
      }
      const wasOpen = self.isOpen;
      self.isOpen = true;
      if (!wasOpen) {
        self.calendarContainer.classList.add("open");
        self._input.classList.add("active");
        self._input.setAttribute("aria-expanded", "true");
        self.calendarContainer.setAttribute("aria-hidden", "false");
        triggerEvent("onOpen");
        positionCalendar(positionElement);
        announce(
          `${monthToStr(
            self.currentMonth,
            self.config.shorthandCurrentMonth,
            self.l10n
          )} ${self.currentYear}`
        );
      }
      if (self.config.enableTime === true && self.config.noCalendar === true) {
        setTimeWheelPopoverOpen(true);
        if (self.config.allowInput === false && (e === void 0 || !self.timeContainer.contains(
          e.relatedTarget
        ))) {
          setTimeout(() => self.hourElement.select(), 50);
        }
      }
    }
    function minMaxDateSetter(type) {
      return (date) => {
        const dateObj = self.config[`_${type}Date`] = self.parseDate(date, self.config.dateFormat);
        const inverseDateObj = self.config[`_${type === "min" ? "max" : "min"}Date`];
        if (dateObj !== void 0) {
          self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] = dateObj.getHours() > 0 || dateObj.getMinutes() > 0 || dateObj.getSeconds() > 0;
        }
        if (self.selectedDates) {
          self.selectedDates = self.selectedDates.filter((d) => isEnabled(d));
          if (!self.selectedDates.length && type === "min")
            setHoursFromDate(dateObj);
          updateValue();
        }
        if (self.daysContainer) {
          redraw();
          if (dateObj !== void 0)
            self.currentYearElement[type] = dateObj.getFullYear().toString();
          else
            self.currentYearElement.removeAttribute(type);
          self.currentYearElement.disabled = !!inverseDateObj && dateObj !== void 0 && inverseDateObj.getFullYear() === dateObj.getFullYear();
        }
      };
    }
    function parseConfig() {
      const boolOpts = [
        "wrap",
        "weekNumbers",
        "allowInput",
        "allowInvalidPreload",
        "clickOpens",
        "time_24hr",
        "enableTime",
        "noCalendar",
        "altInput",
        "shorthandCurrentMonth",
        "inline",
        "static",
        "enableSeconds",
        "disableMobile"
      ];
      const userConfig = {
        ...JSON.parse(JSON.stringify(element.dataset || {})),
        ...instanceConfig
      };
      const formats2 = {};
      self.config.parseDate = userConfig.parseDate;
      self.config.formatDate = userConfig.formatDate;
      Object.defineProperty(self.config, "enable", {
        get: () => self.config._enable,
        set: (dates) => {
          self.config._enable = parseDateRules(dates);
        }
      });
      Object.defineProperty(self.config, "disable", {
        get: () => self.config._disable,
        set: (dates) => {
          self.config._disable = parseDateRules(dates);
        }
      });
      const timeMode = userConfig.mode === "time";
      if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
        const defaultDateFormat = flatpickr.defaultConfig.dateFormat || defaults.dateFormat;
        formats2.dateFormat = userConfig.noCalendar || timeMode ? "H:i" + (userConfig.enableSeconds ? ":S" : "") : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
      }
      if (userConfig.altInput && (userConfig.enableTime || timeMode) && !userConfig.altFormat) {
        const defaultAltFormat = flatpickr.defaultConfig.altFormat || defaults.altFormat;
        formats2.altFormat = userConfig.noCalendar || timeMode ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K") : defaultAltFormat + ` h:i${userConfig.enableSeconds ? ":S" : ""} K`;
      }
      Object.defineProperty(self.config, "minDate", {
        get: () => self.config._minDate,
        set: minMaxDateSetter("min")
      });
      Object.defineProperty(self.config, "maxDate", {
        get: () => self.config._maxDate,
        set: minMaxDateSetter("max")
      });
      const minMaxTimeSetter = (type) => (val) => {
        self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(
          val,
          "H:i:S"
        );
      };
      Object.defineProperty(self.config, "minTime", {
        get: () => self.config._minTime,
        set: minMaxTimeSetter("min")
      });
      Object.defineProperty(self.config, "maxTime", {
        get: () => self.config._maxTime,
        set: minMaxTimeSetter("max")
      });
      if (userConfig.mode === "time") {
        self.config.noCalendar = true;
        self.config.enableTime = true;
      }
      Object.assign(self.config, formats2, userConfig);
      for (let i = 0; i < boolOpts.length; i++)
        self.config[boolOpts[i]] = self.config[boolOpts[i]] === true || self.config[boolOpts[i]] === "true";
      if (self.config.enableTime) {
        self.config.disableMobile = true;
      }
      HOOKS.filter((hook) => self.config[hook] !== void 0).forEach((hook) => {
        self.config[hook] = arrayify(self.config[hook] || []).map(bindToInstance);
      });
      self.isMobile = !self.config.disableMobile && !self.config.inline && self.config.mode === "single" && !self.config.disable.length && !self.config.enable && !self.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      for (let i = 0; i < self.config.plugins.length; i++) {
        const pluginConf = self.config.plugins[i](self) || {};
        for (const key in pluginConf) {
          if (HOOKS.indexOf(key) > -1) {
            self.config[key] = arrayify(
              pluginConf[key]
            ).map(bindToInstance).concat(self.config[key]);
          } else if (typeof userConfig[key] === "undefined")
            self.config[key] = pluginConf[key];
        }
      }
      if (!userConfig.altInputClass) {
        self.config.altInputClass = getInputElem().className + " " + self.config.altInputClass;
      }
      triggerEvent("onParseConfig");
    }
    function getInputElem() {
      return self.config.wrap ? element.querySelector("[data-input]") : element;
    }
    function setupLocale() {
      if (typeof self.config.locale !== "object" && typeof flatpickr.l10ns[self.config.locale] === "undefined")
        self.config.errorHandler(
          new Error(`flatpickr: invalid locale ${self.config.locale}`)
        );
      self.l10n = {
        ...flatpickr.l10ns.default,
        ...typeof self.config.locale === "object" ? self.config.locale : self.config.locale !== "default" ? flatpickr.l10ns[self.config.locale] : void 0
      };
      tokenRegex.D = `(${self.l10n.weekdays.shorthand.join("|")})`;
      tokenRegex.l = `(${self.l10n.weekdays.longhand.join("|")})`;
      tokenRegex.M = `(${self.l10n.months.shorthand.join("|")})`;
      tokenRegex.F = `(${self.l10n.months.longhand.join("|")})`;
      tokenRegex.K = `(${self.l10n.amPM[0]}|${self.l10n.amPM[1]}|${self.l10n.amPM[0].toLowerCase()}|${self.l10n.amPM[1].toLowerCase()})`;
      const userConfig = {
        ...instanceConfig,
        ...JSON.parse(JSON.stringify(element.dataset || {}))
      };
      if (userConfig.time_24hr === void 0 && flatpickr.defaultConfig.time_24hr === void 0) {
        self.config.time_24hr = self.l10n.time_24hr;
      }
      self.formatDate = createDateFormatter(self);
      self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
    }
    function positionCalendar(customPositionElement) {
      if (typeof self.config.position === "function") {
        return void self.config.position(self, customPositionElement);
      }
      if (self.calendarContainer === void 0)
        return;
      triggerEvent("onPreCalendarPosition");
      const positionElement = customPositionElement || self._positionElement;
      const calendarHeight = Array.prototype.reduce.call(
        self.calendarContainer.children,
        (acc, child) => acc + child.offsetHeight,
        0
      ), calendarWidth = self.calendarContainer.offsetWidth, configPos = self.config.position.split(" "), configPosVertical = configPos[0], configPosHorizontal = configPos.length > 1 ? configPos[1] : null, inputBounds = positionElement.getBoundingClientRect(), distanceFromBottom = window.innerHeight - inputBounds.bottom, showOnTop = configPosVertical === "above" || configPosVertical !== "below" && distanceFromBottom < calendarHeight && inputBounds.top > calendarHeight;
      const top = window.pageYOffset + inputBounds.top + (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
      toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
      toggleClass(self.calendarContainer, "arrowBottom", showOnTop);
      if (self.config.inline)
        return;
      let left = window.pageXOffset + inputBounds.left;
      let isCenter = false;
      let isRight = false;
      if (configPosHorizontal === "center") {
        left -= (calendarWidth - inputBounds.width) / 2;
        isCenter = true;
      } else if (configPosHorizontal === "right") {
        left -= calendarWidth - inputBounds.width;
        isRight = true;
      }
      toggleClass(self.calendarContainer, "arrowLeft", !isCenter && !isRight);
      toggleClass(self.calendarContainer, "arrowCenter", isCenter);
      toggleClass(self.calendarContainer, "arrowRight", isRight);
      const right = window.document.body.offsetWidth - (window.pageXOffset + inputBounds.right);
      const rightMost = left + calendarWidth > window.document.body.offsetWidth;
      const centerMost = right + calendarWidth > window.document.body.offsetWidth;
      toggleClass(self.calendarContainer, "rightMost", rightMost);
      if (self.config.static)
        return;
      self.calendarContainer.style.top = `${top}px`;
      if (!rightMost) {
        self.calendarContainer.style.left = `${left}px`;
        self.calendarContainer.style.right = "auto";
      } else if (!centerMost) {
        self.calendarContainer.style.left = "auto";
        self.calendarContainer.style.right = `${right}px`;
      } else {
        const doc = getDocumentStyleSheet();
        if (doc === void 0)
          return;
        const bodyWidth = window.document.body.offsetWidth;
        const centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
        const centerBefore = ".flatpickr-calendar.centerMost:before";
        const centerAfter = ".flatpickr-calendar.centerMost:after";
        const centerIndex = doc.cssRules.length;
        const centerStyle = `{left:${inputBounds.left}px;right:auto;}`;
        toggleClass(self.calendarContainer, "rightMost", false);
        toggleClass(self.calendarContainer, "centerMost", true);
        doc.insertRule(
          `${centerBefore},${centerAfter}${centerStyle}`,
          centerIndex
        );
        self.calendarContainer.style.left = `${centerLeft}px`;
        self.calendarContainer.style.right = "auto";
      }
    }
    function getDocumentStyleSheet() {
      let editableSheet = null;
      for (let i = 0; i < document.styleSheets.length; i++) {
        const sheet = document.styleSheets[i];
        if (!sheet.cssRules)
          continue;
        try {
          sheet.cssRules;
        } catch (err) {
          continue;
        }
        editableSheet = sheet;
        break;
      }
      return editableSheet != null ? editableSheet : createStyleSheet();
    }
    function createStyleSheet() {
      const style = document.createElement("style");
      document.head.appendChild(style);
      return style.sheet;
    }
    function redraw() {
      if (self.config.noCalendar || self.isMobile)
        return;
      buildMonthSwitch();
      updateNavigationCurrentMonth();
      buildDays();
    }
    function focusAndClose() {
      self._input.focus();
      const nav = navigator;
      if (window.navigator.userAgent.indexOf("MSIE") !== -1 || nav.msMaxTouchPoints !== void 0) {
        setTimeout(self.close, 0);
      } else {
        self.close();
      }
    }
    function selectDate(e) {
      e.preventDefault();
      e.stopPropagation();
      const isKeyboardSelection = e.type === "keydown";
      const isSelectable = (day) => day.classList && day.classList.contains("flatpickr-day") && !day.classList.contains("flatpickr-disabled") && !day.classList.contains("notAllowed");
      const t = findParent(getEventTarget(e), isSelectable);
      if (t === void 0)
        return;
      const target = t;
      const selectedDate = self.latestSelectedDateObj = new Date(
        target.dateObj.getTime()
      );
      const shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth || selectedDate.getMonth() > self.currentMonth + self.config.showMonths - 1) && self.config.mode !== "range";
      self.selectedDateElem = target;
      if (self.config.mode === "single")
        self.selectedDates = [selectedDate];
      else if (self.config.mode === "multiple") {
        const selectedIndex = isDateSelected(selectedDate);
        if (selectedIndex)
          self.selectedDates.splice(parseInt(selectedIndex), 1);
        else
          self.selectedDates.push(selectedDate);
      } else if (self.config.mode === "range") {
        if (self.selectedDates.length === 2) {
          self.clear(false, false);
        }
        self.latestSelectedDateObj = selectedDate;
        self.selectedDates.push(selectedDate);
        if (compareDates(selectedDate, self.selectedDates[0], true) !== 0)
          self.selectedDates.sort((a, b) => a.getTime() - b.getTime());
      }
      setHoursFromInputs();
      if (shouldChangeMonth) {
        const isNewYear = self.currentYear !== selectedDate.getFullYear();
        self.currentYear = selectedDate.getFullYear();
        self.currentMonth = selectedDate.getMonth();
        if (isNewYear) {
          triggerEvent("onYearChange");
          buildMonthSwitch();
        }
        triggerEvent("onMonthChange");
      }
      updateNavigationCurrentMonth();
      buildDays();
      updateValue();
      const focusedDayAfterBuild = self.selectedDateElem;
      if (!shouldChangeMonth && self.config.mode !== "range" && self.config.showMonths === 1 && focusedDayAfterBuild !== void 0)
        focusOnDayElem(focusedDayAfterBuild);
      else if (focusedDayAfterBuild !== void 0 && self.hourElement === void 0) {
        focusedDayAfterBuild.focus();
      }
      if (self.hourElement !== void 0 && isKeyboardSelection)
        self.hourElement !== void 0 && self.hourElement.focus();
      if (self.config.closeOnSelect) {
        const single = self.config.mode === "single" && !self.config.enableTime;
        const range = self.config.mode === "range" && self.selectedDates.length === 2 && !self.config.enableTime;
        if (single || range) {
          focusAndClose();
        }
      }
      triggerChange();
    }
    const CALLBACKS = {
      locale: [setupLocale, updateWeekdays],
      showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
      minDate: [jumpToDate],
      maxDate: [jumpToDate],
      positionElement: [updatePositionElement],
      clickOpens: [
        () => {
          if (self.config.clickOpens === true) {
            bind(self._input, "focus", self.open);
            bind(self._input, "click", self.open);
          } else {
            self._input.removeEventListener("focus", self.open);
            self._input.removeEventListener("click", self.open);
          }
        }
      ]
    };
    function set(option, value) {
      if (option !== null && typeof option === "object") {
        Object.assign(self.config, option);
        for (const key in option) {
          if (CALLBACKS[key] !== void 0)
            CALLBACKS[key].forEach((x) => x());
        }
      } else {
        self.config[option] = value;
        if (CALLBACKS[option] !== void 0)
          CALLBACKS[option].forEach((x) => x());
        else if (HOOKS.indexOf(option) > -1)
          self.config[option] = arrayify(value);
      }
      self.redraw();
      updateValue(true);
    }
    function setSelectedDate(inputDate, format) {
      let dates = [];
      if (inputDate instanceof Array)
        dates = inputDate.map((d) => self.parseDate(d, format));
      else if (inputDate instanceof Date || typeof inputDate === "number")
        dates = [self.parseDate(inputDate, format)];
      else if (typeof inputDate === "string") {
        switch (self.config.mode) {
          case "single":
          case "time":
            dates = [self.parseDate(inputDate, format)];
            break;
          case "multiple":
            dates = inputDate.split(self.config.conjunction).map((date) => self.parseDate(date, format));
            break;
          case "range":
            dates = inputDate.split(self.l10n.rangeSeparator).map((date) => self.parseDate(date, format));
            break;
          default:
            break;
        }
      } else
        self.config.errorHandler(
          new Error(`Invalid date supplied: ${JSON.stringify(inputDate)}`)
        );
      self.selectedDates = self.config.allowInvalidPreload ? dates : dates.filter(
        (d) => d instanceof Date && isEnabled(d, false)
      );
      if (self.config.mode === "range")
        self.selectedDates.sort((a, b) => a.getTime() - b.getTime());
    }
    function setDate(date, triggerChange2 = false, format = self.config.dateFormat) {
      if (date !== 0 && !date || date instanceof Array && date.length === 0)
        return self.clear(triggerChange2);
      setSelectedDate(date, format);
      self.latestSelectedDateObj = self.selectedDates[self.selectedDates.length - 1];
      self.redraw();
      jumpToDate(void 0, triggerChange2);
      setHoursFromDate();
      if (self.selectedDates.length === 0) {
        self.clear(false);
      }
      updateValue(triggerChange2);
      if (triggerChange2)
        triggerEvent("onChange");
    }
    function parseDateRules(arr) {
      return arr.slice().map((rule) => {
        if (typeof rule === "string" || typeof rule === "number" || rule instanceof Date) {
          return self.parseDate(
            rule,
            void 0,
            true
          );
        } else if (rule && typeof rule === "object" && rule.from && rule.to)
          return {
            from: self.parseDate(
              rule.from,
              void 0
            ),
            to: self.parseDate(rule.to, void 0)
          };
        return rule;
      }).filter((x) => x);
    }
    function setupDates() {
      self.selectedDates = [];
      self.now = self.parseDate(self.config.now) || new Date();
      const preloadedDate = self.config.defaultDate || ((self.input.nodeName === "INPUT" || self.input.nodeName === "TEXTAREA") && self.input.placeholder && self.input.value === self.input.placeholder ? null : self.input.value);
      if (preloadedDate)
        setSelectedDate(preloadedDate, self.config.dateFormat);
      self._initialDate = self.selectedDates.length > 0 ? self.selectedDates[0] : self.config.minDate && self.config.minDate.getTime() > self.now.getTime() ? self.config.minDate : self.config.maxDate && self.config.maxDate.getTime() < self.now.getTime() ? self.config.maxDate : self.now;
      self.currentYear = self._initialDate.getFullYear();
      self.currentMonth = self._initialDate.getMonth();
      if (self.selectedDates.length > 0)
        self.latestSelectedDateObj = self.selectedDates[0];
      if (self.config.minTime !== void 0)
        self.config.minTime = self.parseDate(self.config.minTime, "H:i");
      if (self.config.maxTime !== void 0)
        self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
      self.minDateHasTime = !!self.config.minDate && (self.config.minDate.getHours() > 0 || self.config.minDate.getMinutes() > 0 || self.config.minDate.getSeconds() > 0);
      self.maxDateHasTime = !!self.config.maxDate && (self.config.maxDate.getHours() > 0 || self.config.maxDate.getMinutes() > 0 || self.config.maxDate.getSeconds() > 0);
    }
    function setupInputs() {
      self.input = getInputElem();
      if (!self.input) {
        self.config.errorHandler(new Error("Invalid input element specified"));
        return;
      }
      self.input._type = self.input.type;
      self.input.type = "text";
      self.input.classList.add("flatpickr-input");
      self._input = self.input;
      if (self.config.altInput) {
        self.altInput = createElement(
          self.input.nodeName,
          self.config.altInputClass
        );
        self._input = self.altInput;
        self.altInput.placeholder = self.input.placeholder;
        self.altInput.disabled = self.input.disabled;
        self.altInput.required = self.input.required;
        self.altInput.tabIndex = self.input.tabIndex;
        self.altInput.type = "text";
        self.input.setAttribute("type", "hidden");
        if (!self.config.static && self.input.parentNode)
          self.input.parentNode.insertBefore(
            self.altInput,
            self.input.nextSibling
          );
      }
      if (!self.config.allowInput)
        self._input.setAttribute("readonly", "readonly");
      updatePositionElement();
    }
    function updatePositionElement() {
      self._positionElement = self.config.positionElement || self._input;
    }
    function setupMobile() {
      const inputType = self.config.enableTime ? self.config.noCalendar ? "time" : "datetime-local" : "date";
      self.mobileInput = createElement(
        "input",
        self.input.className + " flatpickr-mobile"
      );
      self.mobileInput.tabIndex = 1;
      self.mobileInput.type = inputType;
      self.mobileInput.disabled = self.input.disabled;
      self.mobileInput.required = self.input.required;
      self.mobileInput.placeholder = self.input.placeholder;
      self.mobileFormatStr = inputType === "datetime-local" ? "Y-m-d\\TH:i:S" : inputType === "date" ? "Y-m-d" : "H:i:S";
      if (self.selectedDates.length > 0) {
        self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(
          self.selectedDates[0],
          self.mobileFormatStr
        );
      }
      if (self.config.minDate)
        self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
      if (self.config.maxDate)
        self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
      if (self.input.getAttribute("step"))
        self.mobileInput.step = String(self.input.getAttribute("step"));
      self.input.type = "hidden";
      if (self.altInput !== void 0)
        self.altInput.type = "hidden";
      try {
        if (self.input.parentNode)
          self.input.parentNode.insertBefore(
            self.mobileInput,
            self.input.nextSibling
          );
      } catch (e) {
      }
      bind(self.mobileInput, "change", (e) => {
        self.setDate(
          getEventTarget(e).value,
          false,
          self.mobileFormatStr
        );
        triggerEvent("onChange");
        triggerEvent("onClose");
      });
    }
    function toggle(e) {
      if (self.isOpen === true)
        return self.close();
      self.open(e);
    }
    function triggerEvent(event, data) {
      if (self.config === void 0)
        return;
      const hooks = self.config[event];
      if (hooks !== void 0 && hooks.length > 0) {
        for (let i = 0; hooks[i] && i < hooks.length; i++)
          hooks[i](self.selectedDates, self.input.value, self, data);
      }
      if (event === "onChange") {
        self.input.dispatchEvent(createEvent("change"));
        self.input.dispatchEvent(createEvent("input"));
        const selectedDateText = getDateStr();
        if (selectedDateText) {
          announce(`Selected date: ${selectedDateText}`);
        }
      }
    }
    function createEvent(name) {
      const e = document.createEvent("Event");
      e.initEvent(name, true, true);
      return e;
    }
    function isDateSelected(date) {
      for (let i = 0; i < self.selectedDates.length; i++) {
        const selectedDate = self.selectedDates[i];
        if (selectedDate instanceof Date && compareDates(selectedDate, date) === 0)
          return "" + i;
      }
      return false;
    }
    function isDateInRange(date) {
      if (self.config.mode !== "range" || self.selectedDates.length < 2)
        return false;
      return compareDates(date, self.selectedDates[0]) >= 0 && compareDates(date, self.selectedDates[1]) <= 0;
    }
    function updateNavigationCurrentMonth() {
      if (self.config.noCalendar || self.isMobile || !self.monthNav)
        return;
      self.yearElements.forEach((yearElement, i) => {
        const d = new Date(self.currentYear, self.currentMonth, 1);
        d.setMonth(self.currentMonth + i);
        if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
          self.monthElements[i].textContent = monthToStr(
            d.getMonth(),
            self.config.shorthandCurrentMonth,
            self.l10n
          ) + " ";
        } else {
          self.monthsDropdownContainer.value = d.getMonth().toString();
        }
        yearElement.value = d.getFullYear().toString();
      });
      self._hidePrevMonthArrow = self.config.minDate !== void 0 && (self.currentYear === self.config.minDate.getFullYear() ? self.currentMonth <= self.config.minDate.getMonth() : self.currentYear < self.config.minDate.getFullYear());
      self._hideNextMonthArrow = self.config.maxDate !== void 0 && (self.currentYear === self.config.maxDate.getFullYear() ? self.currentMonth + 1 > self.config.maxDate.getMonth() : self.currentYear > self.config.maxDate.getFullYear());
      announce(
        `${monthToStr(
          self.currentMonth,
          self.config.shorthandCurrentMonth,
          self.l10n
        )} ${self.currentYear}`
      );
    }
    function getDateStr(specificFormat) {
      const format = specificFormat || (self.config.altInput ? self.config.altFormat : self.config.dateFormat);
      return self.selectedDates.map((dObj) => self.formatDate(dObj, format)).filter(
        (d, i, arr) => self.config.mode !== "range" || self.config.enableTime || arr.indexOf(d) === i
      ).join(
        self.config.mode !== "range" ? self.config.conjunction : self.l10n.rangeSeparator
      );
    }
    function updateValue(triggerChange2 = true) {
      if (self.mobileInput !== void 0 && self.mobileFormatStr) {
        self.mobileInput.value = self.latestSelectedDateObj !== void 0 ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr) : "";
      }
      self.input.value = getDateStr(self.config.dateFormat);
      if (self.altInput !== void 0) {
        self.altInput.value = getDateStr(self.config.altFormat);
      }
      if (triggerChange2 !== false)
        triggerEvent("onValueUpdate");
    }
    function onMonthNavClick(e) {
      const eventTarget = getEventTarget(e);
      const isPrevMonth = self.prevMonthNav.contains(eventTarget);
      const isNextMonth = self.nextMonthNav.contains(eventTarget);
      if (isPrevMonth || isNextMonth) {
        changeMonth(isPrevMonth ? -1 : 1);
      } else if (self.yearElements.indexOf(eventTarget) >= 0) {
        eventTarget.select();
      } else if (eventTarget.classList.contains("arrowUp")) {
        self.changeYear(self.currentYear + 1);
      } else if (eventTarget.classList.contains("arrowDown")) {
        self.changeYear(self.currentYear - 1);
      }
    }
    function timeWrapper(e) {
      e.preventDefault();
      const isKeyDown = e.type === "keydown", eventTarget = getEventTarget(e), input = eventTarget;
      if (self.amPM !== void 0 && eventTarget === self.amPM) {
        self.amPM.textContent = self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
      }
      const min = parseFloat(input.getAttribute("min")), max = parseFloat(input.getAttribute("max")), step = parseFloat(input.getAttribute("step")), curValue = parseInt(input.value, 10), delta = e.delta || (isKeyDown ? e.which === 38 ? 1 : -1 : 0);
      let newValue = curValue + step * delta;
      if (typeof input.value !== "undefined" && input.value.length === 2) {
        const isHourElem = input === self.hourElement, isMinuteElem = input === self.minuteElement;
        if (newValue < min) {
          newValue = max + newValue + int(!isHourElem) + (int(isHourElem) && int(!self.amPM));
          if (isMinuteElem)
            incrementNumInput(void 0, -1, self.hourElement);
        } else if (newValue > max) {
          newValue = input === self.hourElement ? newValue - max - int(!self.amPM) : min;
          if (isMinuteElem)
            incrementNumInput(void 0, 1, self.hourElement);
        }
        if (self.amPM && isHourElem && (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) {
          self.amPM.textContent = self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
        }
        input.value = pad(newValue);
      }
    }
    init();
    return self;
  }
  function _flatpickr(nodeList, config) {
    const nodes = Array.prototype.slice.call(nodeList).filter((x) => x instanceof HTMLElement);
    const instances = [];
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      try {
        if (node.getAttribute("data-fp-omit") !== null)
          continue;
        if (node._flatpickr !== void 0) {
          node._flatpickr.destroy();
          node._flatpickr = void 0;
        }
        node._flatpickr = FlatpickrInstance(node, config || {});
        instances.push(node._flatpickr);
      } catch (e) {
        console.error(e);
      }
    }
    return instances.length === 1 ? instances[0] : instances;
  }
  if (typeof HTMLElement !== "undefined" && typeof HTMLCollection !== "undefined" && typeof NodeList !== "undefined") {
    HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function(config) {
      return _flatpickr(this, config);
    };
    HTMLCollection.prototype.a11y_datetime = NodeList.prototype.a11y_datetime = function(config) {
      return _flatpickr(this, config);
    };
    HTMLElement.prototype.flatpickr = function(config) {
      return _flatpickr([this], config);
    };
    HTMLElement.prototype.a11y_datetime = function(config) {
      return _flatpickr([this], config);
    };
  }
  var flatpickr = function(selector, config) {
    if (typeof selector === "string") {
      return _flatpickr(window.document.querySelectorAll(selector), config);
    } else if (selector instanceof Node) {
      return _flatpickr([selector], config);
    } else {
      return _flatpickr(selector, config);
    }
  };
  flatpickr.defaultConfig = {};
  flatpickr.l10ns = {
    en: { ...default_default },
    default: { ...default_default }
  };
  flatpickr.localize = (l10n) => {
    flatpickr.l10ns.default = {
      ...flatpickr.l10ns.default,
      ...l10n
    };
  };
  flatpickr.setDefaults = (config) => {
    flatpickr.defaultConfig = {
      ...flatpickr.defaultConfig,
      ...config
    };
  };
  flatpickr.parseDate = createDateParser({});
  flatpickr.formatDate = createDateFormatter({});
  flatpickr.compareDates = compareDates;
  var a11y_datetime = flatpickr;
  var jq = typeof window !== "undefined" ? window.jQuery : void 0;
  if (jq && typeof jq.fn !== "undefined") {
    jq.fn.flatpickr = function(config) {
      return _flatpickr(this, config);
    };
    jq.fn.a11y_datetime = function(config) {
      return _flatpickr(this, config);
    };
  }
  Date.prototype.fp_incr = function(days) {
    return new Date(
      this.getFullYear(),
      this.getMonth(),
      this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days)
    );
  };
  if (typeof window !== "undefined") {
    window.flatpickr = flatpickr;
    window.a11y_datetime = a11y_datetime;
  }
  var src_default = a11y_datetime;
  return __toCommonJS(src_exports);
})();
