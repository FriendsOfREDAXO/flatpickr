"use strict";
/* a11y_datetime v5.2.4, based on flatpickr, @license MIT */
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
    timeRules: [],
    monthYearWheel: true,
    showMonthNavArrows: false,
    yearRange: { past: 10, future: 10 },
    yearWheelManualInput: true,
    minuteIncrement: 1,
    mode: "single",
    mobileRangeMode: "default",
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
    secondAriaLabel: "Second",
    timeLabel: "Time",
    timePickerAriaLabel: "Time picker popover",
    doneButtonLabel: "Done",
    closeTimePickerAriaLabel: "Close time picker",
    selectedTimeAriaLabel: "Selected time",
    keyboardHelpAriaLabel: "Keyboard help",
    keyboardShortcutsTitle: "Keyboard shortcuts",
    keyboardShortcutFocus: "Tab / Shift+Tab: Move focus",
    keyboardShortcutArrows: "Arrow keys: Navigate days or wheel values",
    keyboardShortcutPage: "PageUp / PageDown: Month/Year step in wheel",
    keyboardShortcutHomeEnd: "Home / End: Jump to first/last month or year",
    keyboardShortcutSelect: "Enter / Space: Select or confirm",
    keyboardShortcutEscape: "Esc: Close popover/calendar",
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
    let timeWheelSecondOptions = [];
    let timeWheelAmPmOptions = [];
    let monthYearWheelPopover;
    let monthYearWheelTrigger;
    let monthWheelOptions = [];
    let yearWheelOptions = [];
    let monthYearWheelManualInput;
    let monthScrollAnimationTimer;
    let keyboardHelpButton;
    let keyboardHelpPanel;
    let configuredShowMonths = 1;
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
    function getResponsiveShowMonths(maxShowMonths) {
      const viewportWidth = window.innerWidth || document.documentElement.clientWidth || 0;
      if (maxShowMonths <= 1)
        return 1;
      if (viewportWidth > 0 && viewportWidth < 640)
        return 1;
      if (viewportWidth > 0 && viewportWidth < 960)
        return Math.min(maxShowMonths, 2);
      return maxShowMonths;
    }
    function syncResponsiveShowMonths() {
      const nextShowMonths = getResponsiveShowMonths(configuredShowMonths);
      if (self.config.showMonths !== nextShowMonths) {
        self.config.showMonths = nextShowMonths;
        return true;
      }
      return false;
    }
    function needsResponsiveMonthRedraw() {
      if (self.config.noCalendar || self.isMobile)
        return false;
      const renderedMonthCount = self.monthElements ? self.monthElements.length : 0;
      return renderedMonthCount !== self.config.showMonths;
    }
    function bindToInstance(fn) {
      return fn.bind(self);
    }
    function setCalendarWidth() {
      const config = self.config;
      if (config.noCalendar === true) {
        return;
      }

      window.requestAnimationFrame(function() {
        if (self.calendarContainer !== void 0) {
          self.calendarContainer.style.visibility = "hidden";
          self.calendarContainer.style.display = "block";
        }

        if (!self.calendarContainer) {
          return;
        }

        const firstDayContainer = self.calendarContainer.querySelector(".dayContainer");
        const monthCount = Math.max(1, Number(config.showMonths || 1));
        const monthWidth = firstDayContainer ? Math.round(firstDayContainer.getBoundingClientRect().width) : 0;
        const monthElements = self.monthNav ? Array.from(self.monthNav.querySelectorAll(".flatpickr-month")) : [];
        const weekdayGroups = self.weekdayContainer ? Array.from(self.weekdayContainer.querySelectorAll(".flatpickr-weekdaycontainer")) : [];

        monthElements.forEach((monthEl, index) => {
          monthEl.style.display = index < monthCount ? "" : "none";
        });

        weekdayGroups.forEach((weekdayEl, index) => {
          weekdayEl.style.display = index < monthCount ? "" : "none";
        });

        if (monthCount === 1 && config.weekNumbers === false) {
          if (self.daysContainer) {
            self.daysContainer.style.removeProperty("width");
          }
          if (self.rContainer) {
            self.rContainer.style.removeProperty("width");
          }
          if (self.monthNav) {
            self.monthNav.style.removeProperty("width");
          }
          if (self.weekdayContainer) {
            self.weekdayContainer.style.removeProperty("width");
          }
          self.calendarContainer.style.removeProperty("width");
          self.calendarContainer.classList.remove("multiMonth");
          self.calendarContainer.style.removeProperty("visibility");
          self.calendarContainer.style.removeProperty("display");
          return;
        }

        const daysWidth = monthWidth > 0 ? monthWidth * monthCount : self.days !== void 0 ? (self.days.offsetWidth + 1) * monthCount : 0;
        if (daysWidth > 0) {
          if (self.daysContainer) {
            self.daysContainer.style.width = daysWidth + "px";
          }
          if (self.rContainer) {
            self.rContainer.style.width = daysWidth + "px";
          }
          if (self.monthNav) {
            self.monthNav.style.width = daysWidth + "px";
          }
          if (self.weekdayContainer) {
            self.weekdayContainer.style.width = daysWidth + "px";
          }
          self.calendarContainer.classList.toggle("multiMonth", monthCount > 1);
          self.calendarContainer.style.width = daysWidth + (self.weekWrapper !== void 0 ? self.weekWrapper.offsetWidth : 0) + "px";
        }

        self.calendarContainer.style.removeProperty("visibility");
        self.calendarContainer.style.removeProperty("display");
      });
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
    function getTimeInSeconds(date) {
      return calculateSecondsSinceMidnight(
        date.getHours(),
        date.getMinutes(),
        date.getSeconds()
      );
    }
    function getMonthBoundsForYear(year) {
      let minMonth = 0;
      let maxMonth = 11;
      if (self.config.minDate !== void 0 && year === self.config.minDate.getFullYear()) {
        minMonth = self.config.minDate.getMonth();
      }
      if (self.config.maxDate !== void 0 && year === self.config.maxDate.getFullYear()) {
        maxMonth = self.config.maxDate.getMonth();
      }
      return { minMonth, maxMonth };
    }
    function getYearWheelRange() {
      const past = Math.max(0, Number(self.config.yearRange.past || 0));
      const future = Math.max(0, Number(self.config.yearRange.future || 0));
      let minYear = self.currentYear - past;
      let maxYear = self.currentYear + future;
      if (self.config.minDate) {
        minYear = Math.max(minYear, self.config.minDate.getFullYear());
      }
      if (self.config.maxDate) {
        maxYear = Math.min(maxYear, self.config.maxDate.getFullYear());
      }
      if (minYear > maxYear) {
        minYear = maxYear;
      }
      return { minYear, maxYear };
    }
    function parseTimeRuleValue(value) {
      if (value === void 0)
        return void 0;
      if (value instanceof Date)
        return value;
      return self.parseDate(value, "H:i:S") || self.parseDate(value, "H:i") || void 0;
    }
    function pickLaterTime(a, b) {
      if (!a)
        return b;
      if (!b)
        return a;
      return getTimeInSeconds(a) >= getTimeInSeconds(b) ? a : b;
    }
    function pickEarlierTime(a, b) {
      if (!a)
        return b;
      if (!b)
        return a;
      return getTimeInSeconds(a) <= getTimeInSeconds(b) ? a : b;
    }
    function getWeekdayTimeRuleBounds(selectedDate) {
      const rules = self.config.timeRules || [];
      const date = selectedDate || self.latestSelectedDateObj || self.selectedDates[self.selectedDates.length - 1] || self.now;
      if (!(date instanceof Date) || rules.length === 0) {
        return {
          minTime: void 0,
          maxTime: void 0,
          hasRules: false,
          hasMatch: false
        };
      }
      let minTime;
      let maxTime;
      let hasMatch = false;
      const weekday = date.getDay();
      rules.forEach((rule) => {
        if (!rule || !Array.isArray(rule.days) || rule.days.indexOf(weekday) === -1) {
          return;
        }
        hasMatch = true;
        const from = parseTimeRuleValue(rule.from);
        const to = parseTimeRuleValue(rule.to);
        if (!from || !to) {
          return;
        }
        minTime = pickLaterTime(minTime, from);
        maxTime = pickEarlierTime(maxTime, to);
      });
      return { minTime, maxTime, hasRules: true, hasMatch };
    }
    function getEffectiveTimeBounds(selectedDate) {
      const date = selectedDate || self.latestSelectedDateObj || self.selectedDates[self.selectedDates.length - 1];
      const dateMinTime = self.config.minDate && self.minDateHasTime && date && compareDates(date, self.config.minDate, true) === 0 ? self.config.minDate : void 0;
      const dateMaxTime = self.config.maxDate && self.maxDateHasTime && date && compareDates(date, self.config.maxDate, true) === 0 ? self.config.maxDate : void 0;
      const weekdayRuleBounds = getWeekdayTimeRuleBounds(date);
      const minTime = pickLaterTime(
        pickLaterTime(self.config.minTime, dateMinTime),
        weekdayRuleBounds.minTime
      );
      const maxTime = pickEarlierTime(
        pickEarlierTime(self.config.maxTime, dateMaxTime),
        weekdayRuleBounds.maxTime
      );
      return { minTime, maxTime };
    }
    function isTimeWithinBounds(hour, minute, second) {
      const bounds = getEffectiveTimeBounds();
      const weekdayRuleBounds = getWeekdayTimeRuleBounds();
      if (weekdayRuleBounds.hasRules && !weekdayRuleBounds.hasMatch) {
        return false;
      }
      const current = calculateSecondsSinceMidnight(hour, minute, second);
      if (bounds.minTime) {
        const minSeconds = getTimeInSeconds(bounds.minTime);
        if (current < minSeconds)
          return false;
      }
      if (bounds.maxTime) {
        const maxSeconds = getTimeInSeconds(bounds.maxTime);
        if (current > maxSeconds)
          return false;
      }
      return true;
    }
    function updateTimeWheelDisabledOptions() {
      if (!self.hourElement || !self.minuteElement)
        return;
      const currentMinute = parseInt(self.minuteElement.value, 10) || 0;
      const currentSecond = self.secondElement ? parseInt(self.secondElement.value, 10) || 0 : 0;
      const activeMeridiem = self.amPM ? String(self.amPM.textContent || "") : "";
      const hourFromOption = (option) => {
        const value = parseInt(option.dataset.value || "0", 10) || 0;
        if (self.config.time_24hr || self.amPM === void 0) {
          return value;
        }
        return ampm2military(value, activeMeridiem || self.l10n.amPM[0]);
      };
      timeWheelHourOptions.forEach((option) => {
        const enabled = isTimeWithinBounds(
          hourFromOption(option),
          currentMinute,
          currentSecond
        );
        option.disabled = !enabled;
        option.classList.toggle("is-disabled", !enabled);
        option.setAttribute("aria-disabled", enabled ? "false" : "true");
      });
      const activeHour = parseInt(self.hourElement.value, 10) || 0;
      const currentHour = self.config.time_24hr || self.amPM === void 0 ? activeHour : ampm2military(activeHour, activeMeridiem || self.l10n.amPM[0]);
      timeWheelMinuteOptions.forEach((option) => {
        const minute = parseInt(option.dataset.value || "0", 10) || 0;
        const enabled = isTimeWithinBounds(currentHour, minute, currentSecond);
        option.disabled = !enabled;
        option.classList.toggle("is-disabled", !enabled);
        option.setAttribute("aria-disabled", enabled ? "false" : "true");
      });
      timeWheelSecondOptions.forEach((option) => {
        const second = parseInt(option.dataset.value || "0", 10) || 0;
        const enabled = isTimeWithinBounds(currentHour, currentMinute, second);
        option.disabled = !enabled;
        option.classList.toggle("is-disabled", !enabled);
        option.setAttribute("aria-disabled", enabled ? "false" : "true");
      });
      timeWheelAmPmOptions.forEach((option) => {
        const meridiem = String(option.dataset.value || "");
        const hour = ampm2military(activeHour, meridiem || self.l10n.amPM[0]);
        const enabled = isTimeWithinBounds(hour, currentMinute, currentSecond);
        option.disabled = !enabled;
        option.classList.toggle("is-disabled", !enabled);
        option.setAttribute("aria-disabled", enabled ? "false" : "true");
      });
    }
    function normalizeMinuteToIncrement(minute) {
      const normalizedMinute = (minute % 60 + 60) % 60;
      const step = Math.max(1, self.config.minuteIncrement || 1);
      if (step === 1)
        return normalizedMinute;
      const lower = Math.floor(normalizedMinute / step) * step;
      const upper = lower + step;
      if (upper >= 60) {
        return lower;
      }
      const deltaToLower = normalizedMinute - lower;
      const deltaToUpper = upper - normalizedMinute;
      return deltaToUpper <= deltaToLower ? upper : lower;
    }
    function setHoursFromInputs() {
      if (self.hourElement === void 0 || self.minuteElement === void 0)
        return;
      let hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24, minutes = normalizeMinuteToIncrement(
        parseInt(self.minuteElement.value, 10) || 0
      ), seconds = self.secondElement !== void 0 ? (parseInt(self.secondElement.value, 10) || 0) % 60 : 0;
      if (self.amPM !== void 0) {
        hours = ampm2military(hours, self.amPM.textContent);
      }
      const effectiveBounds = getEffectiveTimeBounds();
      const effectiveMinTime = effectiveBounds.minTime;
      const effectiveMaxTime = effectiveBounds.maxTime;
      const limitMinHours = effectiveMinTime !== void 0;
      const limitMaxHours = effectiveMaxTime !== void 0;
      if (effectiveMaxTime !== void 0 && effectiveMinTime !== void 0 && getTimeInSeconds(effectiveMinTime) > getTimeInSeconds(effectiveMaxTime)) {
        const minBound = calculateSecondsSinceMidnight(
          effectiveMinTime.getHours(),
          effectiveMinTime.getMinutes(),
          effectiveMinTime.getSeconds()
        );
        const maxBound = calculateSecondsSinceMidnight(
          effectiveMaxTime.getHours(),
          effectiveMaxTime.getMinutes(),
          effectiveMaxTime.getSeconds()
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
          const maxTime = effectiveMaxTime;
          hours = Math.min(hours, maxTime.getHours());
          if (hours === maxTime.getHours())
            minutes = Math.min(minutes, maxTime.getMinutes());
          if (minutes === maxTime.getMinutes())
            seconds = Math.min(seconds, maxTime.getSeconds());
        }
        if (limitMinHours) {
          const minTime = effectiveMinTime;
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
        const fallback = options[0];
        fallback.classList.add("is-selected");
        fallback.setAttribute("aria-selected", "true");
        fallback.tabIndex = 0;
      }
    }
    function centerWheelSelection(options) {
      const selected = options.find((option) => option.tabIndex === 0) || options.find((option) => option.classList.contains("is-selected"));
      if (!selected)
        return;
      const column = selected.parentElement;
      if (!column)
        return;
      const targetScrollTop = selected.offsetTop - (column.clientHeight - selected.offsetHeight) / 2;
      column.scrollTop = Math.max(0, targetScrollTop);
    }
    function syncTimeWheelPopover() {
      if (!timeWheelPopover || !self.hourElement || !self.minuteElement)
        return;
      const hourValue = String(parseInt(self.hourElement.value, 10));
      const normalizedMinute = normalizeMinuteToIncrement(
        parseInt(self.minuteElement.value, 10) || 0
      );
      const minuteValue = String(normalizedMinute);
      if (parseInt(self.minuteElement.value, 10) !== normalizedMinute) {
        self.minuteElement.value = pad(normalizedMinute);
        if (self.latestSelectedDateObj instanceof Date) {
          self.latestSelectedDateObj.setMinutes(normalizedMinute);
        }
      }
      markWheelSelection(timeWheelHourOptions, hourValue);
      markWheelSelection(timeWheelMinuteOptions, minuteValue);
      if (self.secondElement !== void 0) {
        markWheelSelection(
          timeWheelSecondOptions,
          String(parseInt(self.secondElement.value, 10) || 0)
        );
      }
      if (self.amPM !== void 0) {
        markWheelSelection(
          timeWheelAmPmOptions,
          String(self.amPM.textContent || "")
        );
      }
      updateTimeWheelDisabledOptions();
      if (timeWheelTrigger) {
        let label = `${pad(self.hourElement.value)}:${pad(self.minuteElement.value)}`;
        if (self.secondElement !== void 0) {
          label += `:${pad(self.secondElement.value)}`;
        }
        if (self.amPM !== void 0 && self.amPM.textContent) {
          label += ` ${self.amPM.textContent}`;
        }
        timeWheelTrigger.textContent = label;
        timeWheelTrigger.setAttribute(
          "aria-label",
          `${self.l10n.selectedTimeAriaLabel}: ${label}`
        );
      }
      if (timeWheelPopover.classList.contains("is-open")) {
        centerWheelSelection(timeWheelHourOptions);
        centerWheelSelection(timeWheelMinuteOptions);
        centerWheelSelection(timeWheelSecondOptions);
        centerWheelSelection(timeWheelAmPmOptions);
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
        window.requestAnimationFrame(() => {
          centerWheelSelection(timeWheelHourOptions);
          centerWheelSelection(timeWheelMinuteOptions);
          centerWheelSelection(timeWheelSecondOptions);
          centerWheelSelection(timeWheelAmPmOptions);
        });
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
      return timeWheelHourOptions.find((option) => option.tabIndex === 0) || timeWheelHourOptions[0] || timeWheelMinuteOptions.find((option) => option.tabIndex === 0) || timeWheelMinuteOptions[0] || timeWheelSecondOptions.find((option) => option.tabIndex === 0) || timeWheelSecondOptions[0] || timeWheelAmPmOptions.find((option) => option.tabIndex === 0) || timeWheelAmPmOptions[0] || self.hourElement;
    }
    function getPopoverFocusableElements(popover) {
      return Array.from(
        popover.querySelectorAll(
          "button, input, select, textarea, a[href], [tabindex]"
        )
      ).filter((element2) => {
        const el = element2;
        if (el.tabIndex < 0)
          return false;
        if (el.disabled === true)
          return false;
        return el.closest("[hidden]") === null;
      });
    }
    function cyclePopoverFocus(popover, current, shift) {
      const focusables = getPopoverFocusableElements(popover);
      if (!focusables.length)
        return;
      const index = focusables.indexOf(current);
      if (index === -1) {
        focusables[0].focus();
        return;
      }
      const next = shift ? focusables[index - 1] || focusables[focusables.length - 1] : focusables[index + 1] || focusables[0];
      next.focus();
    }
    function buildTimeWheelPopover() {
      const popover = createElement(
        "div",
        "flatpickr-time-wheel-popover"
      );
      popover.id = `${calendarInstanceId}-time-wheel-popover`;
      popover.setAttribute("role", "dialog");
      popover.setAttribute("aria-modal", "false");
      popover.setAttribute("aria-label", self.l10n.timePickerAriaLabel);
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
          bind(button, "click", () => {
            if (button.disabled)
              return;
            onSelect(value);
          });
          bind(button, "keydown", (event) => {
            if (button.disabled && event.key !== "Tab") {
              return;
            }
            const options = Array.from(
              column.querySelectorAll(".flatpickr-time-wheel-option")
            );
            const currentIndex = options.indexOf(button);
            if (event.key === "Tab" || event.keyCode === 9) {
              event.preventDefault();
              cyclePopoverFocus(popover, button, event.shiftKey);
              return;
            }
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
      if (self.config.enableSeconds) {
        const secondValues = Array.from({ length: 60 }, (_, i) => String(i));
        const secondColumn = buildColumn(
          "flatpickr-time-wheel-column flatpickr-time-wheel-seconds",
          self.l10n.secondAriaLabel || "Second",
          secondValues,
          (value) => {
            if (!self.secondElement)
              return;
            self.secondElement.value = pad(value);
            updateTime();
            syncTimeWheelPopover();
          }
        );
        timeWheelSecondOptions = secondColumn.options;
        wheelContent.appendChild(secondColumn.column);
      } else {
        timeWheelSecondOptions = [];
      }
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
            if (button.disabled)
              return;
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
        self.l10n.doneButtonLabel
      );
      doneButton.type = "button";
      doneButton.tabIndex = 0;
      doneButton.setAttribute("aria-label", self.l10n.closeTimePickerAriaLabel);
      bind(popover, "keydown", (event) => {
        if (event.key === "Tab" || event.keyCode === 9) {
          const target = getEventTarget(event);
          if (!popover.contains(target))
            return;
          event.preventDefault();
          cyclePopoverFocus(popover, target, event.shiftKey);
        } else if (event.key === "Escape") {
          event.preventDefault();
          setTimeWheelPopoverOpen(false);
          timeWheelTrigger == null ? void 0 : timeWheelTrigger.focus();
        }
      });
      bind(doneButton, "click", () => {
        setTimeWheelPopoverOpen(false);
        if (timeWheelTrigger) {
          timeWheelTrigger.focus();
        }
      });
      bind(doneButton, "keydown", (event) => {
        if (event.key === "Enter" || event.keyCode === 13 || event.key === " " || event.keyCode === 32) {
          event.preventDefault();
          setTimeWheelPopoverOpen(false);
          if (timeWheelTrigger) {
            timeWheelTrigger.focus();
          }
        }
      });
      footer.appendChild(doneButton);
      popover.appendChild(footer);
      return popover;
    }
    function setHours(hours, minutes, seconds) {
      minutes = normalizeMinuteToIncrement(minutes);
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
        const keyboardHelpAriaLabel = self.l10n.keyboardHelpAriaLabel || "Keyboard help";
        const keyboardShortcutsTitle = self.l10n.keyboardShortcutsTitle || "Keyboard shortcuts";
        const keyboardShortcutFocus = self.l10n.keyboardShortcutFocus || "Tab / Shift+Tab: Move focus";
        const keyboardShortcutArrows = self.l10n.keyboardShortcutArrows || "Arrow keys: Navigate days or wheel values";
        const keyboardShortcutPage = self.l10n.keyboardShortcutPage || "PageUp / PageDown: Month/Year step in wheel";
        const keyboardShortcutHomeEnd = self.l10n.keyboardShortcutHomeEnd || "Home / End: Jump to first/last month or year";
        const keyboardShortcutSelect = self.l10n.keyboardShortcutSelect || "Enter / Space: Select or confirm";
        const keyboardShortcutEscape = self.l10n.keyboardShortcutEscape || "Esc: Close popover/calendar";
        keyboardHelpButton = createElement(
          "button",
          "flatpickr-keyboard-help-button",
          "?"
        );
        keyboardHelpButton.type = "button";
        keyboardHelpButton.setAttribute("aria-haspopup", "dialog");
        keyboardHelpButton.setAttribute("aria-expanded", "false");
        keyboardHelpButton.setAttribute("aria-label", keyboardHelpAriaLabel);
        keyboardHelpButton.tabIndex = 0;
        keyboardHelpPanel = createElement(
          "div",
          "flatpickr-keyboard-help-panel"
        );
        keyboardHelpPanel.id = `${calendarInstanceId}-keyboard-help`;
        keyboardHelpPanel.setAttribute("role", "note");
        keyboardHelpPanel.setAttribute("hidden", "hidden");
        keyboardHelpPanel.innerHTML = `<strong>${keyboardShortcutsTitle}</strong><ul><li>${keyboardShortcutFocus}</li><li>${keyboardShortcutArrows}</li><li>${keyboardShortcutPage}</li><li>${keyboardShortcutHomeEnd}</li><li>${keyboardShortcutSelect}</li><li>${keyboardShortcutEscape}</li></ul>`;
        keyboardHelpButton.setAttribute("aria-controls", keyboardHelpPanel.id);
        bind(keyboardHelpButton, "click", () => {
          const isOpen = (keyboardHelpButton == null ? void 0 : keyboardHelpButton.getAttribute("aria-expanded")) === "true";
          setKeyboardHelpOpen(!isOpen);
        });
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
          const titleBarActions = createElement(
            "div",
            "flatpickr-titlebar-actions"
          );
          titleBarActions.appendChild(keyboardHelpButton);
          if (self.closeButton) {
            titleBarActions.appendChild(self.closeButton);
          }
          titleBar.appendChild(titleBarActions);
          fragment.appendChild(titleBar);
          fragment.appendChild(keyboardHelpPanel);
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
      self.changeMonth(loopDelta, true, true);
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
    function syncMonthYearWheelPopover() {
      if (!monthYearWheelPopover || !monthYearWheelTrigger)
        return;
      const { minMonth, maxMonth } = getMonthBoundsForYear(self.currentYear);
      monthWheelOptions.forEach((option) => {
        const monthIndex = parseInt(option.dataset.value || "0", 10);
        const enabled = monthIndex >= minMonth && monthIndex <= maxMonth;
        const isSelected = monthIndex === self.currentMonth;
        option.disabled = !enabled;
        option.classList.toggle("is-selected", isSelected);
        option.classList.toggle("is-disabled", !enabled);
        option.setAttribute("aria-selected", isSelected ? "true" : "false");
        option.setAttribute("aria-disabled", enabled ? "false" : "true");
        option.tabIndex = isSelected ? 0 : -1;
      });
      yearWheelOptions.forEach((option) => {
        const year = parseInt(option.dataset.value || "0", 10);
        const isSelected = year === self.currentYear;
        option.classList.toggle("is-selected", isSelected);
        option.setAttribute("aria-selected", isSelected ? "true" : "false");
        option.tabIndex = isSelected ? 0 : -1;
      });
      if (monthYearWheelManualInput) {
        monthYearWheelManualInput.value = String(self.currentYear);
      }
      const label = `${monthToStr(
        self.currentMonth,
        self.config.shorthandCurrentMonth,
        self.l10n
      )} ${self.currentYear}`;
      monthYearWheelTrigger.textContent = label;
      monthYearWheelTrigger.setAttribute("aria-label", label);
      if (monthYearWheelPopover.classList.contains("is-open")) {
        centerWheelSelection(monthWheelOptions);
        centerWheelSelection(yearWheelOptions);
      }
    }
    function setMonthYearWheelPopoverOpen(open2) {
      if (!monthYearWheelPopover)
        return;
      if (open2) {
        monthYearWheelPopover.removeAttribute("hidden");
        monthYearWheelPopover.classList.add("is-open");
        monthYearWheelTrigger == null ? void 0 : monthYearWheelTrigger.setAttribute("aria-expanded", "true");
        window.requestAnimationFrame(() => {
          centerWheelSelection(monthWheelOptions);
          centerWheelSelection(yearWheelOptions);
        });
        const initialFocus = monthWheelOptions.find((option) => option.tabIndex === 0) || monthWheelOptions[0] || yearWheelOptions.find((option) => option.tabIndex === 0) || yearWheelOptions[0] || monthYearWheelManualInput;
        initialFocus == null ? void 0 : initialFocus.focus();
        return;
      }
      monthYearWheelPopover.setAttribute("hidden", "hidden");
      monthYearWheelPopover.classList.remove("is-open");
      monthYearWheelTrigger == null ? void 0 : monthYearWheelTrigger.setAttribute("aria-expanded", "false");
    }
    function setKeyboardHelpOpen(open2) {
      if (!keyboardHelpPanel || !keyboardHelpButton)
        return;
      if (open2) {
        keyboardHelpPanel.removeAttribute("hidden");
        keyboardHelpButton.setAttribute("aria-expanded", "true");
        return;
      }
      keyboardHelpPanel.setAttribute("hidden", "hidden");
      keyboardHelpButton.setAttribute("aria-expanded", "false");
    }
    function applyMonthYearWheelDelta(kind, delta) {
      if (delta === 0)
        return;
      if (kind === "year") {
        const { minYear, maxYear } = getYearWheelRange();
        const targetYear2 = Math.min(
          maxYear,
          Math.max(minYear, self.currentYear + delta)
        );
        if (targetYear2 !== self.currentYear) {
          self.changeYear(targetYear2);
        }
        syncMonthYearWheelPopover();
        return;
      }
      const candidate = new Date(self.currentYear, self.currentMonth + delta, 1);
      if (self.config.minDate) {
        const minBound = new Date(
          self.config.minDate.getFullYear(),
          self.config.minDate.getMonth(),
          1
        );
        if (candidate < minBound) {
          candidate.setFullYear(minBound.getFullYear(), minBound.getMonth(), 1);
        }
      }
      if (self.config.maxDate) {
        const maxBound = new Date(
          self.config.maxDate.getFullYear(),
          self.config.maxDate.getMonth(),
          1
        );
        if (candidate > maxBound) {
          candidate.setFullYear(maxBound.getFullYear(), maxBound.getMonth(), 1);
        }
      }
      const targetYear = candidate.getFullYear();
      const targetMonth = candidate.getMonth();
      if (targetYear !== self.currentYear) {
        self.changeYear(targetYear);
      }
      if (targetMonth !== self.currentMonth) {
        self.changeMonth(targetMonth, false, true);
      }
      syncMonthYearWheelPopover();
    }
    function buildMonthYearWheelPopover() {
      const popover = createElement(
        "div",
        "flatpickr-time-wheel-popover flatpickr-month-year-wheel-popover"
      );
      popover.setAttribute("role", "dialog");
      popover.setAttribute("aria-modal", "false");
      popover.setAttribute("aria-label", `${self.l10n.monthAriaLabel} / ${self.l10n.yearAriaLabel}`);
      popover.setAttribute("hidden", "hidden");
      const content = createElement(
        "div",
        "flatpickr-time-wheel-content flatpickr-month-year-wheel-content"
      );
      const monthColumn = createElement(
        "div",
        "flatpickr-time-wheel-column flatpickr-month-year-wheel-column flatpickr-month-wheel"
      );
      monthColumn.setAttribute("role", "listbox");
      monthColumn.setAttribute("aria-label", self.l10n.monthAriaLabel);
      monthWheelOptions = [];
      for (let monthIndex = 0; monthIndex <= 11; monthIndex++) {
        const option = createElement(
          "button",
          "flatpickr-time-wheel-option flatpickr-month-year-wheel-option",
          monthToStr(monthIndex, false, self.l10n)
        );
        option.type = "button";
        option.dataset.value = String(monthIndex);
        option.setAttribute("role", "option");
        option.setAttribute("aria-selected", "false");
        option.tabIndex = -1;
        bind(option, "click", () => {
          if (option.disabled)
            return;
          self.changeMonth(monthIndex, false, true);
          syncMonthYearWheelPopover();
        });
        monthWheelOptions.push(option);
        monthColumn.appendChild(option);
      }
      const yearColumn = createElement(
        "div",
        "flatpickr-time-wheel-column flatpickr-month-year-wheel-column flatpickr-year-wheel"
      );
      yearColumn.setAttribute("role", "listbox");
      yearColumn.setAttribute("aria-label", self.l10n.yearAriaLabel);
      yearWheelOptions = [];
      const { minYear, maxYear } = getYearWheelRange();
      for (let year = minYear; year <= maxYear; year++) {
        const option = createElement(
          "button",
          "flatpickr-time-wheel-option flatpickr-month-year-wheel-option",
          String(year)
        );
        option.type = "button";
        option.dataset.value = String(year);
        option.setAttribute("role", "option");
        option.setAttribute("aria-selected", "false");
        option.tabIndex = -1;
        bind(option, "click", () => {
          self.changeYear(year);
          syncMonthYearWheelPopover();
        });
        yearWheelOptions.push(option);
        yearColumn.appendChild(option);
      }
      content.appendChild(monthColumn);
      content.appendChild(yearColumn);
      popover.appendChild(content);
      const getWheelKindFromTarget = (target) => {
        if (!target)
          return "month";
        if (target.closest(".flatpickr-year-wheel"))
          return "year";
        if (target.closest(".flatpickr-month-wheel"))
          return "month";
        if (target === monthYearWheelManualInput)
          return "year";
        return "month";
      };
      const focusSelectedInKind = (kind) => {
        const selected = kind === "year" ? yearWheelOptions.find((option) => option.tabIndex === 0) : monthWheelOptions.find((option) => option.tabIndex === 0);
        selected == null ? void 0 : selected.focus();
      };
      const bindOptionKeyHandling = (kind, options) => {
        options.forEach((option) => {
          bind(option, "keydown", (event) => {
            if (event.keyCode === 38 || event.keyCode === 40) {
              event.preventDefault();
              event.stopPropagation();
              applyMonthYearWheelDelta(kind, event.keyCode === 40 ? 1 : -1);
              focusSelectedInKind(kind);
              return;
            }
            if (event.keyCode === 37 || event.keyCode === 39) {
              event.preventDefault();
              event.stopPropagation();
              focusSelectedInKind(kind === "month" ? "year" : "month");
              return;
            }
            if (event.keyCode === 33 || event.keyCode === 34) {
              event.preventDefault();
              event.stopPropagation();
              applyMonthYearWheelDelta(kind, event.keyCode === 34 ? 1 : -1);
              focusSelectedInKind(kind);
            }
          });
        });
      };
      bindOptionKeyHandling("month", monthWheelOptions);
      bindOptionKeyHandling("year", yearWheelOptions);
      const footer = createElement(
        "div",
        "flatpickr-time-wheel-footer flatpickr-month-year-wheel-footer"
      );
      if (self.config.yearWheelManualInput) {
        monthYearWheelManualInput = createElement(
          "input",
          "flatpickr-month-year-wheel-input"
        );
        monthYearWheelManualInput.type = "number";
        monthYearWheelManualInput.setAttribute("aria-label", self.l10n.yearAriaLabel);
        monthYearWheelManualInput.step = "1";
        monthYearWheelManualInput.min = String(minYear);
        monthYearWheelManualInput.max = String(maxYear);
        bind(monthYearWheelManualInput, "change", () => {
          const year = parseInt(monthYearWheelManualInput.value, 10);
          if (!isNaN(year)) {
            self.changeYear(year);
            syncMonthYearWheelPopover();
          }
        });
        bind(monthYearWheelManualInput, "keydown", (event) => {
          if (event.key === "Tab" || event.keyCode === 9) {
            event.preventDefault();
            cyclePopoverFocus(popover, monthYearWheelManualInput, event.shiftKey);
            return;
          }
          if (event.key === "Enter") {
            event.preventDefault();
            const year = parseInt(monthYearWheelManualInput.value, 10);
            if (!isNaN(year)) {
              self.changeYear(year);
              syncMonthYearWheelPopover();
            }
          }
        });
        footer.appendChild(monthYearWheelManualInput);
      } else {
        monthYearWheelManualInput = void 0;
      }
      const doneButton = createElement(
        "button",
        "flatpickr-time-wheel-done flatpickr-month-year-wheel-done",
        self.l10n.doneButtonLabel
      );
      doneButton.type = "button";
      doneButton.tabIndex = 0;
      bind(popover, "keydown", (event) => {
        if (event.key === "Tab" || event.keyCode === 9) {
          const target = getEventTarget(event);
          if (!popover.contains(target))
            return;
          event.preventDefault();
          cyclePopoverFocus(popover, target, event.shiftKey);
        } else if (event.keyCode === 38 || event.keyCode === 40) {
          event.preventDefault();
          const target = getEventTarget(event);
          const kind = getWheelKindFromTarget(target);
          const direction = event.keyCode === 40 ? 1 : -1;
          applyMonthYearWheelDelta(kind, direction);
          focusSelectedInKind(kind);
        } else if (event.keyCode === 37 || event.keyCode === 39) {
          const target = getEventTarget(event);
          if (!target)
            return;
          const isMonthOption = target.closest(".flatpickr-month-wheel") !== null;
          const isYearOption = target.closest(".flatpickr-year-wheel") !== null;
          if (!isMonthOption && !isYearOption)
            return;
          event.preventDefault();
          focusSelectedInKind(isMonthOption ? "year" : "month");
        } else if (event.keyCode === 33 || event.keyCode === 34) {
          event.preventDefault();
          const target = getEventTarget(event);
          const kind = getWheelKindFromTarget(target);
          const direction = event.keyCode === 34 ? 1 : -1;
          applyMonthYearWheelDelta(kind, direction);
          focusSelectedInKind(kind);
        } else if (event.keyCode === 36 || event.keyCode === 35) {
          event.preventDefault();
          const target = getEventTarget(event);
          const kind = getWheelKindFromTarget(target);
          if (kind === "year") {
            const { minYear: minYear2, maxYear: maxYear2 } = getYearWheelRange();
            self.changeYear(event.keyCode === 36 ? minYear2 : maxYear2);
          } else if (event.keyCode === 36) {
            const { minMonth } = getMonthBoundsForYear(self.currentYear);
            self.changeMonth(minMonth, false);
          } else {
            const { maxMonth } = getMonthBoundsForYear(self.currentYear);
            self.changeMonth(maxMonth, false);
          }
          syncMonthYearWheelPopover();
          focusSelectedInKind(kind);
        } else if (event.key === "Escape") {
          event.preventDefault();
          setMonthYearWheelPopoverOpen(false);
          monthYearWheelTrigger == null ? void 0 : monthYearWheelTrigger.focus();
        }
      });
      bind(doneButton, "click", () => {
        setMonthYearWheelPopoverOpen(false);
        monthYearWheelTrigger == null ? void 0 : monthYearWheelTrigger.focus();
      });
      bind(doneButton, "keydown", (event) => {
        if (event.key === "Enter" || event.keyCode === 13 || event.key === " " || event.keyCode === 32) {
          event.preventDefault();
          setMonthYearWheelPopoverOpen(false);
          monthYearWheelTrigger == null ? void 0 : monthYearWheelTrigger.focus();
        }
      });
      footer.appendChild(doneButton);
      popover.appendChild(footer);
      return popover;
    }
    function buildMonthSwitch() {
      if (!self.monthsDropdownContainer)
        return;
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
    function buildMonth(monthOffset = 0) {
      const container = createElement("div", "flatpickr-month");
      const monthNavFragment = window.document.createDocumentFragment();
      if (self.config.monthYearWheel) {
        const currentMonth2 = createElement(
          "div",
          "flatpickr-current-month"
        );
        const monthElement2 = createElement("span", "cur-month");
        const yearElement2 = createElement("input", "cur-year");
        yearElement2.setAttribute("aria-label", self.l10n.yearAriaLabel);
        yearElement2.type = "number";
        yearElement2.tabIndex = -1;
        if (self.config.minDate) {
          yearElement2.setAttribute(
            "min",
            self.config.minDate.getFullYear().toString()
          );
        }
        if (self.config.maxDate) {
          yearElement2.setAttribute(
            "max",
            self.config.maxDate.getFullYear().toString()
          );
        }
        if (monthOffset === 0) {
          monthYearWheelTrigger = createElement(
            "button",
            "flatpickr-month-year-wheel-trigger"
          );
          monthYearWheelTrigger.type = "button";
          monthYearWheelTrigger.setAttribute("aria-haspopup", "dialog");
          monthYearWheelTrigger.setAttribute("aria-expanded", "false");
          bind(monthYearWheelTrigger, "click", () => {
            if (!monthYearWheelPopover)
              return;
            setMonthYearWheelPopoverOpen(
              !monthYearWheelPopover.classList.contains("is-open")
            );
          });
          monthYearWheelPopover = buildMonthYearWheelPopover();
          currentMonth2.appendChild(monthYearWheelTrigger);
          currentMonth2.appendChild(monthYearWheelPopover);
          syncMonthYearWheelPopover();
        } else {
          const staticMonthLabel = createElement(
            "span",
            "cur-month flatpickr-month-year-static-label"
          );
          yearElement2.type = "hidden";
          yearElement2.setAttribute("aria-hidden", "true");
          currentMonth2.appendChild(staticMonthLabel);
          monthNavFragment.appendChild(currentMonth2);
          container.appendChild(monthNavFragment);
          return {
            container,
            yearElement: yearElement2,
            monthElement: staticMonthLabel
          };
        }
        monthNavFragment.appendChild(currentMonth2);
        container.appendChild(monthNavFragment);
        return {
          container,
          yearElement: yearElement2,
          monthElement: monthElement2
        };
      }
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
      if (self.config.showMonthNavArrows) {
        self.monthNav.appendChild(self.prevMonthNav);
      }
      if (self.config.showMonths) {
        self.yearElements = [];
        self.monthElements = [];
      }
      for (let m = 0; m < self.config.showMonths; m++) {
        const month = buildMonth(m);
        self.yearElements.push(month.yearElement);
        self.monthElements.push(month.monthElement);
        self.monthNav.appendChild(month.container);
      }
      if (self.config.monthYearWheel) {
        syncMonthYearWheelPopover();
      }
      if (self.config.showMonthNavArrows) {
        self.monthNav.appendChild(self.nextMonthNav);
      }
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
      self.prevMonthNav.tabIndex = self.config.showMonthNavArrows ? 0 : -1;
      self.prevMonthNav.innerHTML = self.config.prevArrow;
      self.nextMonthNav = createElement("button", "flatpickr-next-month");
      self.nextMonthNav.type = "button";
      self.nextMonthNav.setAttribute("aria-label", "Next month");
      self.nextMonthNav.tabIndex = self.config.showMonthNavArrows ? 0 : -1;
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
          self.l10n.timeLabel
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
    function changeMonth(value, isOffset = true, animateScroll = false) {
      const delta = isOffset ? value : value - self.currentMonth;
      if (delta < 0 && self._hidePrevMonthArrow === true || delta > 0 && self._hideNextMonthArrow === true)
        return;
      self.currentMonth += delta;
      if (animateScroll && self.daysContainer && delta !== 0) {
        if (monthScrollAnimationTimer !== void 0) {
          window.clearTimeout(monthScrollAnimationTimer);
        }
        self.daysContainer.classList.remove(
          "is-month-scroll-prev",
          "is-month-scroll-next",
          "is-month-scroll-active"
        );
        self.daysContainer.classList.add(
          delta > 0 ? "is-month-scroll-next" : "is-month-scroll-prev",
          "is-month-scroll-active"
        );
        monthScrollAnimationTimer = window.setTimeout(() => {
          if (!self.daysContainer)
            return;
          self.daysContainer.classList.remove(
            "is-month-scroll-prev",
            "is-month-scroll-next",
            "is-month-scroll-active"
          );
          monthScrollAnimationTimer = void 0;
        }, 170);
      }
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
      setMonthYearWheelPopoverOpen(false);
      setKeyboardHelpOpen(false);
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
      if (monthScrollAnimationTimer !== void 0) {
        window.clearTimeout(monthScrollAnimationTimer);
        monthScrollAnimationTimer = void 0;
      }
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
      if (self.config.enableTime && Array.isArray(self.config.timeRules) && self.config.timeRules.length > 0 && dateToCheck) {
        const weekdayRuleBounds = getWeekdayTimeRuleBounds(dateToCheck);
        if (weekdayRuleBounds.hasRules && !weekdayRuleBounds.hasMatch) {
          return false;
        }
      }
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
          e.preventDefault();
          self.setDate(
            self._input.value,
            true,
            eventTarget === self.altInput ? self.config.altFormat : self.config.dateFormat
          );
          self.close();
          return eventTarget.blur();
        } else {
          e.preventDefault();
          self.open();
          if (!self.config.noCalendar) {
            if (self.config.monthYearWheel && monthYearWheelTrigger) {
              monthYearWheelTrigger.focus();
            } else {
              focusOnDay(void 0, 1);
            }
          }
          return;
        }
      } else if (isCalendarElem(eventTarget) || allowKeydown || allowInlineKeydown || isTimeOnlyInput && isInput) {
        const isTimeObj = !!self.timeContainer && self.timeContainer.contains(eventTarget);
        const isMonthDropdown = eventTarget === self.monthsDropdownContainer;
        const isInsideTimeWheelPopover = timeWheelPopover !== void 0 && timeWheelPopover.contains(eventTarget);
        const isInsideMonthYearWheelPopover = monthYearWheelPopover !== void 0 && monthYearWheelPopover.contains(eventTarget);
        if ((isInsideTimeWheelPopover || isInsideMonthYearWheelPopover) && [33, 34, 35, 36, 37, 38, 39, 40].indexOf(e.keyCode) !== -1) {
          return;
        }
        if (isMonthDropdown && [13, 32, 37, 38, 39, 40].indexOf(e.keyCode) !== -1) {
          return;
        }
        switch (e.keyCode) {
          case 13:
            if (eventTarget === keyboardHelpButton) {
              e.preventDefault();
              const isOpen = keyboardHelpButton.getAttribute("aria-expanded") === "true";
              setKeyboardHelpOpen(!isOpen);
              break;
            }
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
            if (eventTarget === monthYearWheelTrigger) {
              e.preventDefault();
              setMonthYearWheelPopoverOpen(true);
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
            if (monthYearWheelPopover !== void 0 && eventTarget.classList.contains(
              "flatpickr-month-year-wheel-done"
            )) {
              e.preventDefault();
              setMonthYearWheelPopoverOpen(false);
              monthYearWheelTrigger == null ? void 0 : monthYearWheelTrigger.focus();
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
            if (eventTarget === keyboardHelpButton) {
              e.preventDefault();
              const isOpen = keyboardHelpButton.getAttribute("aria-expanded") === "true";
              setKeyboardHelpOpen(!isOpen);
              break;
            }
            if (eventTarget === self.prevMonthNav || eventTarget === self.nextMonthNav) {
              e.preventDefault();
              changeMonth(eventTarget === self.prevMonthNav ? -1 : 1);
            } else if (!isInput && !isTimeObj && isInView(eventTarget)) {
              e.preventDefault();
              selectDate(e);
            }
            break;
          case 27:
            if (keyboardHelpPanel && keyboardHelpButton && keyboardHelpPanel.getAttribute("hidden") === null) {
              e.preventDefault();
              setKeyboardHelpOpen(false);
              keyboardHelpButton.focus();
              break;
            }
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
          case 33:
          case 34: {
            if (isInput || isTimeObj || self.config.noCalendar) {
              break;
            }
            const target = eventTarget;
            const isDayTarget = !!self.daysContainer && self.daysContainer.contains(target) && target.$i !== void 0;
            if (!isDayTarget) {
              break;
            }
            e.preventDefault();
            changeMonth(e.keyCode === 34 ? 1 : -1, true, true);
            focusOnDay(getFirstAvailableDay(1), 0);
            break;
          }
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
            if (e.defaultPrevented) {
              break;
            }
            if (timeWheelPopover !== void 0 && timeWheelPopover.contains(eventTarget) || monthYearWheelPopover !== void 0 && monthYearWheelPopover.contains(eventTarget)) {
              break;
            }
            if (self.isOpen || self.config.enableTime === true && self.config.noCalendar === true) {
              const firstDay = !self.config.noCalendar ? getPreferredTabDay() : void 0;
              const isDayInGrid = !self.config.noCalendar && !!self.daysContainer && self.daysContainer.contains(eventTarget);
              const prevMonthEnabled = !self.config.noCalendar && self.config.showMonthNavArrows && self.prevMonthNav && !self.prevMonthNav.classList.contains("flatpickr-disabled") ? self.prevMonthNav : void 0;
              const nextMonthEnabled = !self.config.noCalendar && self.config.showMonthNavArrows && self.nextMonthNav && !self.nextMonthNav.classList.contains("flatpickr-disabled") ? self.nextMonthNav : void 0;
              const headerPrimary = !self.config.noCalendar ? self.config.monthYearWheel ? monthYearWheelTrigger : self.monthsDropdownContainer || self.currentYearElement || prevMonthEnabled : void 0;
              const tabOrder = [
                prevMonthEnabled,
                headerPrimary,
                nextMonthEnabled,
                firstDay,
                timeWheelTrigger || getTimeWheelFocusTarget(),
                timeWheelTrigger ? void 0 : self.minuteElement,
                timeWheelTrigger ? void 0 : self.secondElement,
                timeWheelTrigger ? void 0 : self.amPM,
                timeWheelPopover ? timeWheelPopover.querySelector(
                  ".flatpickr-time-wheel-done"
                ) || void 0 : void 0,
                !self.config.noCalendar ? keyboardHelpButton : void 0,
                !self.config.noCalendar ? self.closeButton : void 0
              ].concat(self.pluginElements).filter((el) => {
                if (!el)
                  return false;
                const isDisabled = el.disabled === true || el.classList.contains("flatpickr-disabled");
                const isHidden = el.closest("[hidden]") !== null;
                const isConnected = el.isConnected;
                const isProgrammaticDayTarget = el.classList.contains("flatpickr-day");
                return isConnected && !isDisabled && !isHidden && (el.tabIndex >= 0 || isProgrammaticDayTarget);
              }).filter((el, index, arr) => arr.indexOf(el) === index);
              if (isInput && tabOrder.length > 0) {
                e.preventDefault();
                if (self.config.enableTime === true && self.config.noCalendar === true) {
                  setTimeWheelPopoverOpen(true);
                }
                (headerPrimary || tabOrder[0]).focus();
              } else if (isDayInGrid) {
                e.preventDefault();
                if (e.shiftKey) {
                  (nextMonthEnabled || headerPrimary || prevMonthEnabled || self._input).focus();
                } else {
                  (timeWheelTrigger || getTimeWheelFocusTarget() || self.hourElement || self.minuteElement || self.secondElement || self.amPM || self.closeButton || self._input).focus();
                }
              } else {
                const i = tabOrder.indexOf(eventTarget);
                if (i !== -1) {
                  e.preventDefault();
                  let next = tabOrder[i + (e.shiftKey ? -1 : 1)];
                  if (!next) {
                    next = e.shiftKey ? tabOrder[tabOrder.length - 1] : tabOrder[0];
                  }
                  (next || self._input).focus();
                }
              }
            }
            break;
          case 77:
            if (!isInput && !isTimeObj && !self.config.noCalendar) {
              e.preventDefault();
              (monthYearWheelTrigger || self.monthsDropdownContainer || self.currentYearElement || self.prevMonthNav || self._input).focus();
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
      syncResponsiveShowMonths();
      if (configuredShowMonths > 1 && needsResponsiveMonthRedraw()) {
        redraw();
      }
      setCalendarWidth();
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
      syncResponsiveShowMonths();
      if (needsResponsiveMonthRedraw()) {
        redraw();
      }
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
        "disableMobile",
        "monthYearWheel",
        "showMonthNavArrows",
        "yearWheelManualInput"
      ];
      const userConfig = {
        ...JSON.parse(JSON.stringify(element.dataset || {})),
        ...instanceConfig
      };
      const datasetConfig = element.dataset;
      if (typeof userConfig.showMonths === "undefined" && datasetConfig.showmonths) {
        userConfig.showMonths = Number(datasetConfig.showmonths);
      }
      if (typeof userConfig.mobileRangeMode === "undefined" && datasetConfig.mobilerangemode) {
        userConfig.mobileRangeMode = datasetConfig.mobilerangemode;
      }
      if (typeof userConfig.yearRange === "undefined" && datasetConfig.yearrange) {
        try {
          userConfig.yearRange = JSON.parse(datasetConfig.yearrange);
        } catch (e) {
          userConfig.yearRange = datasetConfig.yearrange;
        }
      }
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
      configuredShowMonths = Math.max(1, Number(self.config.showMonths || 1));
      self.config.showMonths = getResponsiveShowMonths(configuredShowMonths);
      self.config.monthYearWheel = true;
      if (userConfig.yearRange && typeof userConfig.yearRange === "object") {
        const range = userConfig.yearRange;
        self.config.yearRange = {
          past: Math.max(0, Number(range.past || self.config.yearRange.past)),
          future: Math.max(0, Number(range.future || self.config.yearRange.future))
        };
      }
      if (self.config.enableTime) {
        self.config.disableMobile = true;
      }
      HOOKS.filter((hook) => self.config[hook] !== void 0).forEach((hook) => {
        self.config[hook] = arrayify(self.config[hook] || []).map(bindToInstance);
      });
      const supportsNativeMobile = !self.config.disableMobile && !self.config.inline && !self.config.disable.length && !self.config.enable && !self.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      const mobileRangeMode = String(self.config.mobileRangeMode || "default").toLowerCase();
      const allowRangeSplitOnMobile = self.config.mode === "range" && mobileRangeMode === "split" && self.config.enableTime === false;
      self.isMobile = supportsNativeMobile && (self.config.mode === "single" || allowRangeSplitOnMobile);
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
      syncResponsiveShowMonths();
      buildMonthSwitch();
      updateNavigationCurrentMonth();
      buildDays();
      setCalendarWidth();
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
      showMonths: [
        () => {
          configuredShowMonths = Math.max(1, Number(self.config.showMonths || 1));
          self.config.showMonths = getResponsiveShowMonths(configuredShowMonths);
        },
        buildMonths,
        setCalendarWidth,
        buildWeekdays
      ],
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
      if (preloadedDate && self.selectedDates.length === 0 && self._input) {
        self._input.value = "";
      }
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
      if (self.config.inline) {
        self.input.type = "hidden";
        if (self.altInput !== void 0) {
          self.altInput.type = "hidden";
        }
      }
      if (!self.config.allowInput)
        self._input.setAttribute("readonly", "readonly");
      updatePositionElement();
    }
    function updatePositionElement() {
      self._positionElement = self.config.positionElement || self._input;
    }
    function setupMobile() {
      if (self.config.mode === "range" && String(self.config.mobileRangeMode || "default").toLowerCase() === "split" && self.config.enableTime === false) {
        setupMobileRangeSplit();
        return;
      }

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

    function setupMobileRangeSplit() {
      const toDateValue = (value) => {
        if (typeof value !== "string") {
          return "";
        }
        const trimmed = value.trim();
        return /^\d{4}-\d{2}-\d{2}$/.test(trimmed) ? trimmed : "";
      };

      const splitRangeValue = (value) => {
        const normalized = String(value || "").trim();
        if (normalized === "") {
          return ["", ""];
        }
        const parts = normalized.split(/\s+to\s+/i);
        if (parts.length === 2) {
          return [parts[0].trim(), parts[1].trim()];
        }
        return [normalized, ""];
      };

      const startInput = createElement("input", self.input.className + " flatpickr-mobile flatpickr-mobile-range-start");
      const endInput = createElement("input", self.input.className + " flatpickr-mobile flatpickr-mobile-range-end");

      startInput.type = "date";
      endInput.type = "date";
      startInput.tabIndex = 1;
      endInput.tabIndex = 1;
      startInput.disabled = self.input.disabled;
      endInput.disabled = self.input.disabled;
      startInput.required = self.input.required;
      endInput.required = self.input.required;
      startInput.placeholder = self.input.placeholder;
      endInput.placeholder = self.input.placeholder;

      const sourceId = self.input.getAttribute("id") || "flatpickr-mobile-range";
      startInput.setAttribute("id", sourceId + "__start");
      endInput.setAttribute("id", sourceId + "__end");
      startInput.setAttribute("aria-label", self.input.getAttribute("data-mobilerangestartlabel") || "Start date");
      endInput.setAttribute("aria-label", self.input.getAttribute("data-mobilerangeendlabel") || "End date");

      if (self.config.minDate) {
        const min = self.formatDate(self.config.minDate, "Y-m-d");
        startInput.min = min;
        endInput.min = min;
      }
      if (self.config.maxDate) {
        const max = self.formatDate(self.config.maxDate, "Y-m-d");
        startInput.max = max;
        endInput.max = max;
      }

      if (self.selectedDates.length > 0) {
        startInput.value = self.formatDate(self.selectedDates[0], "Y-m-d");
      }
      if (self.selectedDates.length > 1) {
        endInput.value = self.formatDate(self.selectedDates[1], "Y-m-d");
      }
      if (self.selectedDates.length === 0) {
        const values = splitRangeValue(self.input.value);
        startInput.value = toDateValue(values[0]);
        endInput.value = toDateValue(values[1]);
      }

      self.input.type = "hidden";
      if (self.altInput !== void 0) {
        self.altInput.type = "hidden";
      }

      const syncRangeValue = () => {
        const startValue = toDateValue(startInput.value);
        const endValue = toDateValue(endInput.value);

        if (startValue !== "" && endValue !== "") {
          self.setDate([startValue, endValue], false, "Y-m-d");
          self.input.value = startValue + " to " + endValue;
        } else if (startValue !== "") {
          self.setDate(startValue, false, "Y-m-d");
          self.input.value = startValue;
        } else if (endValue !== "") {
          self.setDate(endValue, false, "Y-m-d");
          self.input.value = endValue;
        } else {
          self.clear(false, false);
          self.input.value = "";
        }

        triggerEvent("onChange");
        triggerEvent("onClose");
      };

      try {
        if (self.input.parentNode) {
          self.input.parentNode.insertBefore(startInput, self.input.nextSibling);
          self.input.parentNode.insertBefore(endInput, startInput.nextSibling);
        }
      } catch (e) {
      }

      bind(startInput, "change", syncRangeValue);
      bind(endInput, "change", syncRangeValue);
      bind(startInput, "input", syncRangeValue);
      bind(endInput, "input", syncRangeValue);
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
        if (self.config.showMonths > 1 || self.config.monthSelectorType === "static" || self.config.monthYearWheel) {
          const monthText = monthToStr(
            d.getMonth(),
            self.config.shorthandCurrentMonth,
            self.l10n
          );
          if (self.config.monthYearWheel && i > 0) {
            self.monthElements[i].textContent = `${monthText} ${d.getFullYear()}`;
          } else {
            self.monthElements[i].textContent = monthText + " ";
          }
        } else if (self.monthsDropdownContainer) {
          self.monthsDropdownContainer.value = d.getMonth().toString();
        }
        yearElement.value = d.getFullYear().toString();
      });
      if (self.config.monthYearWheel) {
        syncMonthYearWheelPopover();
      }
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
