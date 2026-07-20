var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { defaults as defaultOptions, HOOKS, } from "./types/options";
import English from "./l10n/default";
import { arrayify, debounce, int, pad } from "./utils";
import { clearNode, createElement, createNumberInput, findParent, toggleClass, getEventTarget, } from "./utils/dom";
import { compareDates, createDateParser, createDateFormatter, duration, isBetween, getDefaultHours, calculateSecondsSinceMidnight, parseSeconds, } from "./utils/dates";
import { tokenRegex, monthToStr } from "./utils/formatting";
import "./utils/polyfills";
var DEBOUNCED_CHANGE_MS = 300;
function FlatpickrInstance(element, instanceConfig) {
    var self = {
        config: __assign(__assign({}, defaultOptions), flatpickr.defaultConfig),
        l10n: English,
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
    var liveRegion;
    var timeWheelPopover;
    var timeWheelTrigger;
    var timeWheelHourOptions = [];
    var timeWheelMinuteOptions = [];
    var timeWheelAmPmOptions = [];
    var monthYearWheelPopover;
    var monthYearWheelTrigger;
    var monthWheelOptions = [];
    var yearWheelOptions = [];
    var monthYearWheelManualInput;
    var monthScrollAnimationTimer;
    var keyboardHelpButton;
    var keyboardHelpPanel;
    var calendarInstanceId = "a11y-dt-".concat(Math.random()
        .toString(36)
        .slice(2, 10));
    function announce(message) {
        if (!self.config.announceChanges || !liveRegion || !message || !self.isOpen)
            return;
        liveRegion.textContent = "";
        window.setTimeout(function () {
            if (liveRegion) {
                liveRegion.textContent = message;
            }
        }, 10);
    }
    function setupHelperFunctions() {
        self.utils = {
            getDaysInMonth: function (month, yr) {
                if (month === void 0) { month = self.currentMonth; }
                if (yr === void 0) { yr = self.currentYear; }
                if (month === 1 && ((yr % 4 === 0 && yr % 100 !== 0) || yr % 400 === 0))
                    return 29;
                return self.l10n.daysInMonth[month];
            },
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
                setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj : undefined);
            }
            updateValue(false);
        }
        setCalendarWidth();
        var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        if (!self.isMobile && isSafari) {
            positionCalendar();
        }
        triggerEvent("onReady");
    }
    function getClosestActiveElement() {
        var _a;
        return (((_a = self.calendarContainer) === null || _a === void 0 ? void 0 : _a.getRootNode())
            .activeElement || document.activeElement);
    }
    function bindToInstance(fn) {
        return fn.bind(self);
    }
    function setCalendarWidth() {
        var config = self.config;
        if (config.weekNumbers === false && config.showMonths === 1) {
            return;
        }
        else if (config.noCalendar !== true) {
            window.requestAnimationFrame(function () {
                if (self.calendarContainer !== undefined) {
                    self.calendarContainer.style.visibility = "hidden";
                    self.calendarContainer.style.display = "block";
                }
                if (self.daysContainer !== undefined) {
                    var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
                    self.daysContainer.style.width = daysWidth + "px";
                    self.calendarContainer.style.width =
                        daysWidth +
                            (self.weekWrapper !== undefined
                                ? self.weekWrapper.offsetWidth
                                : 0) +
                            "px";
                    self.calendarContainer.style.removeProperty("visibility");
                    self.calendarContainer.style.removeProperty("display");
                }
            });
        }
    }
    function updateTime(e) {
        if (self.selectedDates.length === 0) {
            var defaultDate = self.config.minDate === undefined ||
                compareDates(new Date(), self.config.minDate) >= 0
                ? new Date()
                : new Date(self.config.minDate.getTime());
            var defaults = getDefaultHours(self.config);
            defaultDate.setHours(defaults.hours, defaults.minutes, defaults.seconds, defaultDate.getMilliseconds());
            self.selectedDates = [defaultDate];
            self.latestSelectedDateObj = defaultDate;
        }
        if (e !== undefined && e.type !== "blur") {
            timeWrapper(e);
        }
        var prevValue = self._input.value;
        setHoursFromInputs();
        updateValue();
        if (self._input.value !== prevValue) {
            self._debouncedChange();
        }
    }
    function ampm2military(hour, amPM) {
        return (hour % 12) + 12 * int(amPM === self.l10n.amPM[1]);
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
        return calculateSecondsSinceMidnight(date.getHours(), date.getMinutes(), date.getSeconds());
    }
    function getMonthBoundsForYear(year) {
        var minMonth = 0;
        var maxMonth = 11;
        if (self.config.minDate !== undefined &&
            year === self.config.minDate.getFullYear()) {
            minMonth = self.config.minDate.getMonth();
        }
        if (self.config.maxDate !== undefined &&
            year === self.config.maxDate.getFullYear()) {
            maxMonth = self.config.maxDate.getMonth();
        }
        return { minMonth: minMonth, maxMonth: maxMonth };
    }
    function getYearWheelRange() {
        var past = Math.max(0, Number(self.config.yearRange.past || 0));
        var future = Math.max(0, Number(self.config.yearRange.future || 0));
        var minYear = self.currentYear - past;
        var maxYear = self.currentYear + future;
        if (self.config.minDate) {
            minYear = Math.max(minYear, self.config.minDate.getFullYear());
        }
        if (self.config.maxDate) {
            maxYear = Math.min(maxYear, self.config.maxDate.getFullYear());
        }
        if (minYear > maxYear) {
            minYear = maxYear;
        }
        return { minYear: minYear, maxYear: maxYear };
    }
    function parseTimeRuleValue(value) {
        if (value === undefined)
            return undefined;
        if (value instanceof Date)
            return value;
        return (self.parseDate(value, "H:i:S") ||
            self.parseDate(value, "H:i") ||
            undefined);
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
        var rules = self.config.timeRules || [];
        var date = selectedDate ||
            self.latestSelectedDateObj ||
            self.selectedDates[self.selectedDates.length - 1] ||
            self.now;
        if (!(date instanceof Date) || rules.length === 0) {
            return {
                minTime: undefined,
                maxTime: undefined,
                hasRules: false,
                hasMatch: false,
            };
        }
        var minTime;
        var maxTime;
        var hasMatch = false;
        var weekday = date.getDay();
        rules.forEach(function (rule) {
            if (!rule || !Array.isArray(rule.days) || rule.days.indexOf(weekday) === -1) {
                return;
            }
            hasMatch = true;
            var from = parseTimeRuleValue(rule.from);
            var to = parseTimeRuleValue(rule.to);
            if (!from || !to) {
                return;
            }
            minTime = pickLaterTime(minTime, from);
            maxTime = pickEarlierTime(maxTime, to);
        });
        return { minTime: minTime, maxTime: maxTime, hasRules: true, hasMatch: hasMatch };
    }
    function getEffectiveTimeBounds(selectedDate) {
        var date = selectedDate ||
            self.latestSelectedDateObj ||
            self.selectedDates[self.selectedDates.length - 1];
        var dateMinTime = self.config.minDate &&
            self.minDateHasTime &&
            date &&
            compareDates(date, self.config.minDate, true) === 0
            ? self.config.minDate
            : undefined;
        var dateMaxTime = self.config.maxDate &&
            self.maxDateHasTime &&
            date &&
            compareDates(date, self.config.maxDate, true) === 0
            ? self.config.maxDate
            : undefined;
        var weekdayRuleBounds = getWeekdayTimeRuleBounds(date);
        var minTime = pickLaterTime(pickLaterTime(self.config.minTime, dateMinTime), weekdayRuleBounds.minTime);
        var maxTime = pickEarlierTime(pickEarlierTime(self.config.maxTime, dateMaxTime), weekdayRuleBounds.maxTime);
        return { minTime: minTime, maxTime: maxTime };
    }
    function isTimeWithinBounds(hour, minute, second) {
        var bounds = getEffectiveTimeBounds();
        var weekdayRuleBounds = getWeekdayTimeRuleBounds();
        if (weekdayRuleBounds.hasRules && !weekdayRuleBounds.hasMatch) {
            return false;
        }
        var current = calculateSecondsSinceMidnight(hour, minute, second);
        if (bounds.minTime) {
            var minSeconds = getTimeInSeconds(bounds.minTime);
            if (current < minSeconds)
                return false;
        }
        if (bounds.maxTime) {
            var maxSeconds = getTimeInSeconds(bounds.maxTime);
            if (current > maxSeconds)
                return false;
        }
        return true;
    }
    function updateTimeWheelDisabledOptions() {
        if (!self.hourElement || !self.minuteElement)
            return;
        var currentMinute = parseInt(self.minuteElement.value, 10) || 0;
        var currentSecond = self.secondElement
            ? parseInt(self.secondElement.value, 10) || 0
            : 0;
        var activeMeridiem = self.amPM ? String(self.amPM.textContent || "") : "";
        var hourFromOption = function (option) {
            var value = parseInt(option.dataset.value || "0", 10) || 0;
            if (self.config.time_24hr || self.amPM === undefined) {
                return value;
            }
            return ampm2military(value, activeMeridiem || self.l10n.amPM[0]);
        };
        timeWheelHourOptions.forEach(function (option) {
            var enabled = isTimeWithinBounds(hourFromOption(option), currentMinute, currentSecond);
            option.disabled = !enabled;
            option.classList.toggle("is-disabled", !enabled);
            option.setAttribute("aria-disabled", enabled ? "false" : "true");
        });
        var activeHour = parseInt(self.hourElement.value, 10) || 0;
        var currentHour = self.config.time_24hr || self.amPM === undefined
            ? activeHour
            : ampm2military(activeHour, activeMeridiem || self.l10n.amPM[0]);
        timeWheelMinuteOptions.forEach(function (option) {
            var minute = parseInt(option.dataset.value || "0", 10) || 0;
            var enabled = isTimeWithinBounds(currentHour, minute, currentSecond);
            option.disabled = !enabled;
            option.classList.toggle("is-disabled", !enabled);
            option.setAttribute("aria-disabled", enabled ? "false" : "true");
        });
        timeWheelAmPmOptions.forEach(function (option) {
            var meridiem = String(option.dataset.value || "");
            var hour = ampm2military(activeHour, meridiem || self.l10n.amPM[0]);
            var enabled = isTimeWithinBounds(hour, currentMinute, currentSecond);
            option.disabled = !enabled;
            option.classList.toggle("is-disabled", !enabled);
            option.setAttribute("aria-disabled", enabled ? "false" : "true");
        });
    }
    function normalizeMinuteToIncrement(minute) {
        var normalizedMinute = ((minute % 60) + 60) % 60;
        var step = Math.max(1, self.config.minuteIncrement || 1);
        if (step === 1)
            return normalizedMinute;
        var lower = Math.floor(normalizedMinute / step) * step;
        var upper = lower + step;
        if (upper >= 60) {
            return lower;
        }
        var deltaToLower = normalizedMinute - lower;
        var deltaToUpper = upper - normalizedMinute;
        return deltaToUpper <= deltaToLower ? upper : lower;
    }
    function setHoursFromInputs() {
        if (self.hourElement === undefined || self.minuteElement === undefined)
            return;
        var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24, minutes = normalizeMinuteToIncrement(parseInt(self.minuteElement.value, 10) || 0), seconds = self.secondElement !== undefined
            ? (parseInt(self.secondElement.value, 10) || 0) % 60
            : 0;
        if (self.amPM !== undefined) {
            hours = ampm2military(hours, self.amPM.textContent);
        }
        var effectiveBounds = getEffectiveTimeBounds();
        var effectiveMinTime = effectiveBounds.minTime;
        var effectiveMaxTime = effectiveBounds.maxTime;
        var limitMinHours = effectiveMinTime !== undefined;
        var limitMaxHours = effectiveMaxTime !== undefined;
        if (effectiveMaxTime !== undefined &&
            effectiveMinTime !== undefined &&
            getTimeInSeconds(effectiveMinTime) > getTimeInSeconds(effectiveMaxTime)) {
            var minBound = calculateSecondsSinceMidnight(effectiveMinTime.getHours(), effectiveMinTime.getMinutes(), effectiveMinTime.getSeconds());
            var maxBound = calculateSecondsSinceMidnight(effectiveMaxTime.getHours(), effectiveMaxTime.getMinutes(), effectiveMaxTime.getSeconds());
            var currentTime = calculateSecondsSinceMidnight(hours, minutes, seconds);
            if (currentTime > maxBound && currentTime < minBound) {
                var result = parseSeconds(minBound);
                hours = result[0];
                minutes = result[1];
                seconds = result[2];
            }
        }
        else {
            if (limitMaxHours) {
                var maxTime = effectiveMaxTime;
                hours = Math.min(hours, maxTime.getHours());
                if (hours === maxTime.getHours())
                    minutes = Math.min(minutes, maxTime.getMinutes());
                if (minutes === maxTime.getMinutes())
                    seconds = Math.min(seconds, maxTime.getSeconds());
            }
            if (limitMinHours) {
                var minTime = effectiveMinTime;
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
        var date = dateObj || self.latestSelectedDateObj;
        if (date && date instanceof Date) {
            setHours(date.getHours(), date.getMinutes(), date.getSeconds());
        }
    }
    function markWheelSelection(options, selectedValue) {
        var hasSelected = false;
        options.forEach(function (option) {
            var isSelected = option.dataset.value === selectedValue;
            hasSelected = hasSelected || isSelected;
            option.classList.toggle("is-selected", isSelected);
            option.setAttribute("aria-selected", isSelected ? "true" : "false");
            option.tabIndex = isSelected ? 0 : -1;
        });
        if (!hasSelected && options[0]) {
            var fallback = options[0];
            fallback.classList.add("is-selected");
            fallback.setAttribute("aria-selected", "true");
            fallback.tabIndex = 0;
        }
    }
    function centerWheelSelection(options) {
        var selected = options.find(function (option) { return option.tabIndex === 0; }) ||
            options.find(function (option) { return option.classList.contains("is-selected"); });
        if (!selected)
            return;
        var column = selected.parentElement;
        if (!column)
            return;
        var targetScrollTop = selected.offsetTop - (column.clientHeight - selected.offsetHeight) / 2;
        column.scrollTop = Math.max(0, targetScrollTop);
    }
    function syncTimeWheelPopover() {
        if (!timeWheelPopover || !self.hourElement || !self.minuteElement)
            return;
        var hourValue = String(parseInt(self.hourElement.value, 10));
        var normalizedMinute = normalizeMinuteToIncrement(parseInt(self.minuteElement.value, 10) || 0);
        var minuteValue = String(normalizedMinute);
        if (parseInt(self.minuteElement.value, 10) !== normalizedMinute) {
            self.minuteElement.value = pad(normalizedMinute);
            if (self.latestSelectedDateObj instanceof Date) {
                self.latestSelectedDateObj.setMinutes(normalizedMinute);
            }
        }
        markWheelSelection(timeWheelHourOptions, hourValue);
        markWheelSelection(timeWheelMinuteOptions, minuteValue);
        if (self.amPM !== undefined) {
            markWheelSelection(timeWheelAmPmOptions, String(self.amPM.textContent || ""));
        }
        updateTimeWheelDisabledOptions();
        if (timeWheelTrigger) {
            var label = "".concat(pad(self.hourElement.value), ":").concat(pad(self.minuteElement.value));
            if (self.amPM !== undefined && self.amPM.textContent) {
                label += " ".concat(self.amPM.textContent);
            }
            timeWheelTrigger.textContent = label;
            timeWheelTrigger.setAttribute("aria-label", "".concat(self.l10n.selectedTimeAriaLabel, ": ").concat(label));
        }
        if (timeWheelPopover.classList.contains("is-open")) {
            centerWheelSelection(timeWheelHourOptions);
            centerWheelSelection(timeWheelMinuteOptions);
            centerWheelSelection(timeWheelAmPmOptions);
        }
    }
    function setTimeWheelPopoverOpen(open) {
        if (!timeWheelPopover)
            return;
        if (open) {
            timeWheelPopover.removeAttribute("hidden");
            timeWheelPopover.classList.add("is-open");
            if (timeWheelTrigger) {
                timeWheelTrigger.setAttribute("aria-expanded", "true");
            }
            window.requestAnimationFrame(function () {
                centerWheelSelection(timeWheelHourOptions);
                centerWheelSelection(timeWheelMinuteOptions);
                centerWheelSelection(timeWheelAmPmOptions);
            });
            var initialFocus = timeWheelHourOptions.find(function (option) { return option.tabIndex === 0; }) ||
                timeWheelHourOptions[0];
            initialFocus === null || initialFocus === void 0 ? void 0 : initialFocus.focus();
            return;
        }
        timeWheelPopover.setAttribute("hidden", "hidden");
        timeWheelPopover.classList.remove("is-open");
        if (timeWheelTrigger) {
            timeWheelTrigger.setAttribute("aria-expanded", "false");
        }
    }
    function getTimeWheelFocusTarget() {
        return (timeWheelHourOptions.find(function (option) { return option.tabIndex === 0; }) ||
            timeWheelHourOptions[0] ||
            timeWheelMinuteOptions.find(function (option) { return option.tabIndex === 0; }) ||
            timeWheelMinuteOptions[0] ||
            timeWheelAmPmOptions.find(function (option) { return option.tabIndex === 0; }) ||
            timeWheelAmPmOptions[0] ||
            self.hourElement);
    }
    function getPopoverFocusableElements(popover) {
        return Array.from(popover.querySelectorAll("button, input, select, textarea, a[href], [tabindex]")).filter(function (element) {
            var el = element;
            if (el.tabIndex < 0)
                return false;
            if (el.disabled === true)
                return false;
            return el.closest("[hidden]") === null;
        });
    }
    function cyclePopoverFocus(popover, current, shift) {
        var focusables = getPopoverFocusableElements(popover);
        if (!focusables.length)
            return;
        var index = focusables.indexOf(current);
        if (index === -1) {
            focusables[0].focus();
            return;
        }
        var next = shift
            ? focusables[index - 1] || focusables[focusables.length - 1]
            : focusables[index + 1] || focusables[0];
        next.focus();
    }
    function buildTimeWheelPopover() {
        var popover = createElement("div", "flatpickr-time-wheel-popover");
        popover.id = "".concat(calendarInstanceId, "-time-wheel-popover");
        popover.setAttribute("role", "dialog");
        popover.setAttribute("aria-modal", "false");
        popover.setAttribute("aria-label", self.l10n.timePickerAriaLabel);
        popover.setAttribute("hidden", "hidden");
        var wheelContent = createElement("div", "flatpickr-time-wheel-content");
        var buildColumn = function (className, label, values, onSelect) {
            var column = createElement("div", className);
            column.setAttribute("role", "listbox");
            column.setAttribute("aria-label", label);
            values.forEach(function (value) {
                var button = createElement("button", "flatpickr-time-wheel-option", pad(value));
                button.type = "button";
                button.dataset.value = String(parseInt(value, 10));
                button.setAttribute("role", "option");
                button.setAttribute("aria-selected", "false");
                button.setAttribute("aria-label", "".concat(label, ": ").concat(pad(value)));
                button.tabIndex = -1;
                bind(button, "click", function () {
                    if (button.disabled)
                        return;
                    onSelect(value);
                });
                bind(button, "keydown", function (event) {
                    if (button.disabled && event.key !== "Tab") {
                        return;
                    }
                    var options = Array.from(column.querySelectorAll(".flatpickr-time-wheel-option"));
                    var currentIndex = options.indexOf(button);
                    if (event.key === "Tab" || event.keyCode === 9) {
                        event.preventDefault();
                        cyclePopoverFocus(popover, button, event.shiftKey);
                        return;
                    }
                    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
                        event.preventDefault();
                        var delta = event.key === "ArrowDown" ? 1 : -1;
                        var nextIndex = Math.max(0, Math.min(options.length - 1, currentIndex + delta));
                        var nextButton = options[nextIndex];
                        if (!nextButton)
                            return;
                        nextButton.focus();
                        nextButton.click();
                        return;
                    }
                    if (event.key === "Escape") {
                        event.preventDefault();
                        setTimeWheelPopoverOpen(false);
                        timeWheelTrigger === null || timeWheelTrigger === void 0 ? void 0 : timeWheelTrigger.focus();
                    }
                });
                column.appendChild(button);
            });
            return {
                column: column,
                options: Array.from(column.querySelectorAll(".flatpickr-time-wheel-option")),
            };
        };
        var hourValues = self.config.time_24hr
            ? Array.from({ length: 24 }, function (_, i) { return String(i); })
            : Array.from({ length: 12 }, function (_, i) { return String(i + 1); });
        var minuteStep = Math.max(1, self.config.minuteIncrement);
        var minuteValues = Array.from({ length: Math.ceil(60 / minuteStep) }, function (_, i) { return String(Math.min(i * minuteStep, 59)); });
        var hourColumn = buildColumn("flatpickr-time-wheel-column flatpickr-time-wheel-hours", self.l10n.hourAriaLabel, hourValues, function (value) {
            if (!self.hourElement)
                return;
            self.hourElement.value = pad(value);
            updateTime();
            syncTimeWheelPopover();
        });
        timeWheelHourOptions = hourColumn.options;
        wheelContent.appendChild(hourColumn.column);
        var minuteColumn = buildColumn("flatpickr-time-wheel-column flatpickr-time-wheel-minutes", self.l10n.minuteAriaLabel, minuteValues, function (value) {
            if (!self.minuteElement)
                return;
            self.minuteElement.value = pad(value);
            updateTime();
            syncTimeWheelPopover();
        });
        timeWheelMinuteOptions = minuteColumn.options;
        wheelContent.appendChild(minuteColumn.column);
        if (!self.config.time_24hr && self.amPM !== undefined) {
            var amPmValues = [self.l10n.amPM[0], self.l10n.amPM[1]];
            var amPmColumn_1 = createElement("div", "flatpickr-time-wheel-column flatpickr-time-wheel-ampm");
            amPmColumn_1.setAttribute("role", "listbox");
            amPmColumn_1.setAttribute("aria-label", "AM/PM");
            amPmValues.forEach(function (value) {
                var button = createElement("button", "flatpickr-time-wheel-option", value);
                button.type = "button";
                button.dataset.value = value;
                button.setAttribute("role", "option");
                button.setAttribute("aria-selected", "false");
                button.setAttribute("aria-label", "AM/PM: ".concat(value));
                button.tabIndex = -1;
                bind(button, "click", function () {
                    if (button.disabled)
                        return;
                    if (!self.amPM)
                        return;
                    self.amPM.textContent = value;
                    updateTime();
                    syncTimeWheelPopover();
                });
                amPmColumn_1.appendChild(button);
            });
            timeWheelAmPmOptions = Array.from(amPmColumn_1.querySelectorAll(".flatpickr-time-wheel-option"));
            wheelContent.appendChild(amPmColumn_1);
        }
        else {
            timeWheelAmPmOptions = [];
        }
        popover.appendChild(wheelContent);
        var footer = createElement("div", "flatpickr-time-wheel-footer");
        var doneButton = createElement("button", "flatpickr-time-wheel-done", self.l10n.doneButtonLabel);
        doneButton.type = "button";
        doneButton.tabIndex = 0;
        doneButton.setAttribute("aria-label", self.l10n.closeTimePickerAriaLabel);
        bind(popover, "keydown", function (event) {
            if (event.key === "Tab" || event.keyCode === 9) {
                var target = getEventTarget(event);
                if (!popover.contains(target))
                    return;
                event.preventDefault();
                cyclePopoverFocus(popover, target, event.shiftKey);
            }
            else if (event.key === "Escape") {
                event.preventDefault();
                setTimeWheelPopoverOpen(false);
                timeWheelTrigger === null || timeWheelTrigger === void 0 ? void 0 : timeWheelTrigger.focus();
            }
        });
        bind(doneButton, "click", function () {
            setTimeWheelPopoverOpen(false);
            if (timeWheelTrigger) {
                timeWheelTrigger.focus();
            }
        });
        bind(doneButton, "keydown", function (event) {
            if (event.key === "Enter" ||
                event.keyCode === 13 ||
                event.key === " " ||
                event.keyCode === 32) {
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
        if (self.latestSelectedDateObj !== undefined) {
            self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
        }
        if (!self.hourElement || !self.minuteElement || self.isMobile)
            return;
        self.hourElement.value = pad(!self.config.time_24hr
            ? ((12 + hours) % 12) + 12 * int(hours % 12 === 0)
            : hours);
        self.minuteElement.value = pad(minutes);
        if (self.amPM !== undefined)
            self.amPM.textContent = self.l10n.amPM[int(hours >= 12)];
        if (self.secondElement !== undefined)
            self.secondElement.value = pad(seconds);
        syncTimeWheelPopover();
    }
    function onYearInput(event) {
        var eventTarget = getEventTarget(event);
        var year = parseInt(eventTarget.value) + (event.delta || 0);
        if (year / 1000 > 1 ||
            (event.key === "Enter" && !/[^\d]/.test(year.toString()))) {
            changeYear(year);
        }
    }
    function bind(element, event, handler, options) {
        if (event instanceof Array)
            return event.forEach(function (ev) { return bind(element, ev, handler, options); });
        if (element instanceof Array)
            return element.forEach(function (el) { return bind(el, event, handler, options); });
        element.addEventListener(event, handler, options);
        self._handlers.push({
            remove: function () { return element.removeEventListener(event, handler, options); },
        });
    }
    function triggerChange() {
        triggerEvent("onChange");
    }
    function bindEvents() {
        if (self.config.wrap) {
            ["open", "close", "toggle", "clear"].forEach(function (evt) {
                Array.prototype.forEach.call(self.element.querySelectorAll("[data-".concat(evt, "]")), function (el) {
                    return bind(el, "click", self[evt]);
                });
            });
        }
        if (self.isMobile) {
            setupMobile();
            return;
        }
        var debouncedResize = debounce(onResize, 50);
        self._debouncedChange = debounce(triggerChange, DEBOUNCED_CHANGE_MS);
        if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent))
            bind(self.daysContainer, "mouseover", function (e) {
                if (self.config.mode === "range")
                    onMouseOver(getEventTarget(e));
            });
        bind(self._input, "keydown", onKeyDown);
        if (self.calendarContainer !== undefined) {
            bind(self.calendarContainer, "keydown", onKeyDown);
            bind(self.calendarContainer, ["mousedown", "touchstart"], function () {
                self.calendarContainer.classList.remove("is-keyboard-nav");
            });
        }
        if (!self.config.inline && !self.config.static)
            bind(window, "resize", debouncedResize);
        if (window.ontouchstart !== undefined)
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
        if (self.daysContainer !== undefined) {
            bind(self.monthNav, "click", onMonthNavClick);
            bind(self.monthNav, ["keyup", "increment"], onYearInput);
            bind(self.daysContainer, "click", selectDate);
        }
        if (self.closeButton !== undefined) {
            bind(self.closeButton, "click", focusAndClose);
        }
        if (self.timeContainer !== undefined &&
            self.minuteElement !== undefined &&
            self.hourElement !== undefined) {
            var selText = function (e) {
                return getEventTarget(e).select();
            };
            bind(self.timeContainer, ["increment"], updateTime);
            bind(self.timeContainer, "blur", updateTime, { capture: true });
            bind(self.timeContainer, "click", timeIncrement);
            bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
            if (self.secondElement !== undefined)
                bind(self.secondElement, "focus", function () { return self.secondElement && self.secondElement.select(); });
            if (self.amPM !== undefined) {
                bind(self.amPM, "click", function (e) {
                    updateTime(e);
                });
            }
        }
        if (self.config.allowInput) {
            bind(self._input, "blur", onBlur);
        }
    }
    function jumpToDate(jumpDate, triggerChange) {
        var jumpTo = jumpDate !== undefined
            ? self.parseDate(jumpDate)
            : self.latestSelectedDateObj ||
                (self.config.minDate && self.config.minDate > self.now
                    ? self.config.minDate
                    : self.config.maxDate && self.config.maxDate < self.now
                        ? self.config.maxDate
                        : self.now);
        var oldYear = self.currentYear;
        var oldMonth = self.currentMonth;
        try {
            if (jumpTo !== undefined) {
                self.currentYear = jumpTo.getFullYear();
                self.currentMonth = jumpTo.getMonth();
            }
        }
        catch (e) {
            var error = e instanceof Error ? e : new Error(typeof e === "string" ? e : String(e));
            error.message = "Invalid date supplied: " + jumpTo;
            self.config.errorHandler(error);
        }
        if (triggerChange && self.currentYear !== oldYear) {
            triggerEvent("onYearChange");
            buildMonthSwitch();
        }
        if (triggerChange &&
            (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) {
            triggerEvent("onMonthChange");
        }
        self.redraw();
    }
    function timeIncrement(e) {
        var eventTarget = getEventTarget(e);
        if (~eventTarget.className.indexOf("arrow"))
            incrementNumInput(e, eventTarget.classList.contains("arrowUp") ? 1 : -1);
    }
    function incrementNumInput(e, delta, inputElem) {
        var target = e && getEventTarget(e);
        var input = inputElem ||
            (target && target.parentNode && target.parentNode.firstChild);
        var event = createEvent("increment");
        event.delta = delta;
        input && input.dispatchEvent(event);
    }
    function build() {
        var fragment = window.document.createDocumentFragment();
        self.calendarContainer = createElement("div", "flatpickr-calendar");
        self.calendarContainer.id = "".concat(calendarInstanceId, "-calendar");
        self.calendarContainer.tabIndex = -1;
        self.calendarContainer.setAttribute("role", "dialog");
        self.calendarContainer.setAttribute("aria-modal", "false");
        self.calendarContainer.setAttribute("aria-hidden", "true");
        self.calendarContainer.setAttribute("aria-label", self.config.calendarTitle || "Calendar");
        self._input.setAttribute("aria-haspopup", "dialog");
        self._input.setAttribute("aria-controls", self.calendarContainer.id);
        self._input.setAttribute("aria-expanded", "false");
        if (!self.config.noCalendar) {
            var keyboardHelpAriaLabel = self.l10n.keyboardHelpAriaLabel || "Keyboard help";
            var keyboardShortcutsTitle = self.l10n.keyboardShortcutsTitle || "Keyboard shortcuts";
            var keyboardShortcutFocus = self.l10n.keyboardShortcutFocus || "Tab / Shift+Tab: Move focus";
            var keyboardShortcutArrows = self.l10n.keyboardShortcutArrows ||
                "Arrow keys: Navigate days or wheel values";
            var keyboardShortcutPage = self.l10n.keyboardShortcutPage ||
                "PageUp / PageDown: Month/Year step in wheel";
            var keyboardShortcutHomeEnd = self.l10n.keyboardShortcutHomeEnd ||
                "Home / End: Jump to first/last month or year";
            var keyboardShortcutSelect = self.l10n.keyboardShortcutSelect ||
                "Enter / Space: Select or confirm";
            var keyboardShortcutEscape = self.l10n.keyboardShortcutEscape ||
                "Esc: Close popover/calendar";
            keyboardHelpButton = createElement("button", "flatpickr-keyboard-help-button", "?");
            keyboardHelpButton.type = "button";
            keyboardHelpButton.setAttribute("aria-haspopup", "dialog");
            keyboardHelpButton.setAttribute("aria-expanded", "false");
            keyboardHelpButton.setAttribute("aria-label", keyboardHelpAriaLabel);
            keyboardHelpButton.tabIndex = 0;
            keyboardHelpPanel = createElement("div", "flatpickr-keyboard-help-panel");
            keyboardHelpPanel.id = "".concat(calendarInstanceId, "-keyboard-help");
            keyboardHelpPanel.setAttribute("role", "note");
            keyboardHelpPanel.setAttribute("hidden", "hidden");
            keyboardHelpPanel.innerHTML =
                "<strong>".concat(keyboardShortcutsTitle, "</strong>") +
                    "<ul>" +
                    "<li>".concat(keyboardShortcutFocus, "</li>") +
                    "<li>".concat(keyboardShortcutArrows, "</li>") +
                    "<li>".concat(keyboardShortcutPage, "</li>") +
                    "<li>".concat(keyboardShortcutHomeEnd, "</li>") +
                    "<li>".concat(keyboardShortcutSelect, "</li>") +
                    "<li>".concat(keyboardShortcutEscape, "</li>") +
                    "</ul>";
            keyboardHelpButton.setAttribute("aria-controls", keyboardHelpPanel.id);
            bind(keyboardHelpButton, "click", function () {
                var isOpen = (keyboardHelpButton === null || keyboardHelpButton === void 0 ? void 0 : keyboardHelpButton.getAttribute("aria-expanded")) === "true";
                setKeyboardHelpOpen(!isOpen);
            });
            if (self.config.showCloseButton) {
                self.closeButton = createElement("button", "flatpickr-close-button");
                self.closeButton.type = "button";
                self.closeButton.setAttribute("aria-label", "Close calendar");
                self.closeButton.tabIndex = 0;
                self.closeButton.innerHTML =
                    "<svg class='flatpickr-close-icon' viewBox='0 0 16 16' aria-hidden='true' focusable='false'><path d='M4.22 4.22a.75.75 0 0 1 1.06 0L8 6.94l2.72-2.72a.75.75 0 1 1 1.06 1.06L9.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L8 9.06l-2.72 2.72a.75.75 0 1 1-1.06-1.06L6.94 8 4.22 5.28a.75.75 0 0 1 0-1.06Z' /></svg>";
            }
            else {
                self.closeButton = undefined;
            }
            if (self.config.showTitleBar || self.config.showCloseButton) {
                var titleBar = createElement("div", "flatpickr-titlebar");
                if (self.config.showTitleBar) {
                    var titleText = createElement("span", "flatpickr-title", self.config.calendarTitle);
                    titleBar.appendChild(titleText);
                }
                var titleBarActions = createElement("div", "flatpickr-titlebar-actions");
                titleBarActions.appendChild(keyboardHelpButton);
                if (self.closeButton) {
                    titleBarActions.appendChild(self.closeButton);
                }
                titleBar.appendChild(titleBarActions);
                fragment.appendChild(titleBar);
                fragment.appendChild(keyboardHelpPanel);
            }
            fragment.appendChild(buildMonthNav());
            self.innerContainer = createElement("div", "flatpickr-innerContainer");
            if (self.config.weekNumbers) {
                var _a = buildWeeks(), weekWrapper = _a.weekWrapper, weekNumbers = _a.weekNumbers;
                self.innerContainer.appendChild(weekWrapper);
                self.weekNumbers = weekNumbers;
                self.weekWrapper = weekWrapper;
            }
            self.rContainer = createElement("div", "flatpickr-rContainer");
            self.rContainer.appendChild(buildWeekdays());
            if (!self.daysContainer) {
                self.daysContainer = createElement("div", "flatpickr-days");
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
        toggleClass(self.calendarContainer, "rangeMode", self.config.mode === "range");
        toggleClass(self.calendarContainer, "animate", self.config.animate === true);
        toggleClass(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
        self.calendarContainer.appendChild(fragment);
        liveRegion = createElement("div", "flatpickr-visually-hidden flatpickr-a11y-live");
        liveRegion.setAttribute("aria-live", "polite");
        liveRegion.setAttribute("aria-atomic", "true");
        self.calendarContainer.appendChild(liveRegion);
        var customAppend = self.config.appendTo !== undefined &&
            self.config.appendTo.nodeType !== undefined;
        if (self.config.inline || self.config.static) {
            self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
            if (self.config.inline) {
                if (!customAppend && self.element.parentNode)
                    self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);
                else if (self.config.appendTo !== undefined)
                    self.config.appendTo.appendChild(self.calendarContainer);
            }
            if (self.config.static) {
                var wrapper = createElement("div", "flatpickr-wrapper");
                if (self.element.parentNode)
                    self.element.parentNode.insertBefore(wrapper, self.element);
                wrapper.appendChild(self.element);
                if (self.altInput)
                    wrapper.appendChild(self.altInput);
                wrapper.appendChild(self.calendarContainer);
            }
        }
        if (!self.config.static && !self.config.inline)
            (self.config.appendTo !== undefined
                ? self.config.appendTo
                : window.document.body).appendChild(self.calendarContainer);
    }
    function createDay(className, date, _dayNumber, i) {
        var dateIsEnabled = isEnabled(date, true), dayElement = createElement("span", className, date.getDate().toString());
        dayElement.dateObj = date;
        dayElement.$i = i;
        dayElement.setAttribute("role", "gridcell");
        dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));
        if (className.indexOf("hidden") === -1 &&
            compareDates(date, self.now) === 0) {
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
                    toggleClass(dayElement, "startRange", self.selectedDates[0] &&
                        compareDates(date, self.selectedDates[0], true) === 0);
                    toggleClass(dayElement, "endRange", self.selectedDates[1] &&
                        compareDates(date, self.selectedDates[1], true) === 0);
                    if (className === "nextMonthDay")
                        dayElement.classList.add("inRange");
                }
            }
        }
        else {
            dayElement.classList.add("flatpickr-disabled");
            dayElement.setAttribute("aria-disabled", "true");
        }
        if (self.config.mode === "range") {
            if (isDateInRange(date) && !isDateSelected(date))
                dayElement.classList.add("inRange");
        }
        if (self.weekNumbers &&
            self.config.showMonths === 1 &&
            className !== "prevMonthDay" &&
            i % 7 === 6) {
            self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
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
        var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
        var endMonth = delta > 0 ? self.config.showMonths : -1;
        for (var m = startMonth; m != endMonth; m += delta) {
            var month = self.daysContainer.children[m];
            var startIndex = delta > 0 ? 0 : month.children.length - 1;
            var endIndex = delta > 0 ? month.children.length : -1;
            for (var i = startIndex; i != endIndex; i += delta) {
                var c = month.children[i];
                if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj))
                    return c;
            }
        }
        return undefined;
    }
    function getPreferredTabDay() {
        var preferredByConfig = self.config.initialDayFocus === "selected"
            ? [self.selectedDateElem, self.todayDateElem]
            : self.config.initialDayFocus === "firstAvailable"
                ? []
                : [self.todayDateElem, self.selectedDateElem];
        for (var _i = 0, preferredByConfig_1 = preferredByConfig; _i < preferredByConfig_1.length; _i++) {
            var dayElem = preferredByConfig_1[_i];
            if (dayElem !== undefined &&
                isInView(dayElem) &&
                isEnabled(dayElem.dateObj)) {
                return dayElem;
            }
        }
        return getFirstAvailableDay(1);
    }
    function getNextAvailableDay(current, delta) {
        var givenMonth = current.className.indexOf("Month") === -1
            ? current.dateObj.getMonth()
            : self.currentMonth;
        var endMonth = delta > 0 ? self.config.showMonths : -1;
        var loopDelta = delta > 0 ? 1 : -1;
        for (var m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
            var month = self.daysContainer.children[m];
            var startIndex = givenMonth - self.currentMonth === m
                ? current.$i + delta
                : delta < 0
                    ? month.children.length - 1
                    : 0;
            var numMonthDays = month.children.length;
            for (var i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
                var c = month.children[i];
                if (c.className.indexOf("hidden") === -1 &&
                    isEnabled(c.dateObj) &&
                    Math.abs(current.$i - i) >= Math.abs(delta))
                    return focusOnDayElem(c);
            }
        }
        self.changeMonth(loopDelta, true, true);
        focusOnDay(getFirstAvailableDay(loopDelta), 0);
        return undefined;
    }
    function focusOnDay(current, offset) {
        var activeElement = getClosestActiveElement();
        var dayFocused = isInView(activeElement || document.body);
        var startElem = current !== undefined
            ? current
            : dayFocused
                ? activeElement
                : self.selectedDateElem !== undefined && isInView(self.selectedDateElem)
                    ? self.selectedDateElem
                    : self.todayDateElem !== undefined && isInView(self.todayDateElem)
                        ? self.todayDateElem
                        : getFirstAvailableDay(offset > 0 ? 1 : -1);
        if (startElem === undefined) {
            self._input.focus();
        }
        else if (!dayFocused) {
            focusOnDayElem(startElem);
        }
        else {
            getNextAvailableDay(startElem, offset);
        }
    }
    function buildMonthDays(year, month) {
        var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
        var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12, year);
        var daysInMonth = self.utils.getDaysInMonth(month, year), days = window.document.createDocumentFragment(), isMultiMonth = self.config.showMonths > 1, prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay", nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
        var dayNumber = prevMonthDays + 1 - firstOfMonth, dayIndex = 0;
        for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
            days.appendChild(createDay("flatpickr-day ".concat(prevMonthDayClass), new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
        }
        for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
            days.appendChild(createDay("flatpickr-day", new Date(year, month, dayNumber), dayNumber, dayIndex));
        }
        for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth &&
            (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
            days.appendChild(createDay("flatpickr-day ".concat(nextMonthDayClass), new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
        }
        var dayContainer = createElement("div", "dayContainer");
        dayContainer.appendChild(days);
        return dayContainer;
    }
    function buildDays() {
        if (self.daysContainer === undefined) {
            return;
        }
        clearNode(self.daysContainer);
        if (self.weekNumbers)
            clearNode(self.weekNumbers);
        var frag = document.createDocumentFragment();
        for (var i = 0; i < self.config.showMonths; i++) {
            var d = new Date(self.currentYear, self.currentMonth, 1);
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
        var _a = getMonthBoundsForYear(self.currentYear), minMonth = _a.minMonth, maxMonth = _a.maxMonth;
        monthWheelOptions.forEach(function (option) {
            var monthIndex = parseInt(option.dataset.value || "0", 10);
            var enabled = monthIndex >= minMonth && monthIndex <= maxMonth;
            var isSelected = monthIndex === self.currentMonth;
            option.disabled = !enabled;
            option.classList.toggle("is-selected", isSelected);
            option.classList.toggle("is-disabled", !enabled);
            option.setAttribute("aria-selected", isSelected ? "true" : "false");
            option.setAttribute("aria-disabled", enabled ? "false" : "true");
            option.tabIndex = isSelected ? 0 : -1;
        });
        yearWheelOptions.forEach(function (option) {
            var year = parseInt(option.dataset.value || "0", 10);
            var isSelected = year === self.currentYear;
            option.classList.toggle("is-selected", isSelected);
            option.setAttribute("aria-selected", isSelected ? "true" : "false");
            option.tabIndex = isSelected ? 0 : -1;
        });
        if (monthYearWheelManualInput) {
            monthYearWheelManualInput.value = String(self.currentYear);
        }
        var label = "".concat(monthToStr(self.currentMonth, self.config.shorthandCurrentMonth, self.l10n), " ").concat(self.currentYear);
        monthYearWheelTrigger.textContent = label;
        monthYearWheelTrigger.setAttribute("aria-label", label);
        if (monthYearWheelPopover.classList.contains("is-open")) {
            centerWheelSelection(monthWheelOptions);
            centerWheelSelection(yearWheelOptions);
        }
    }
    function setMonthYearWheelPopoverOpen(open) {
        if (!monthYearWheelPopover)
            return;
        if (open) {
            monthYearWheelPopover.removeAttribute("hidden");
            monthYearWheelPopover.classList.add("is-open");
            monthYearWheelTrigger === null || monthYearWheelTrigger === void 0 ? void 0 : monthYearWheelTrigger.setAttribute("aria-expanded", "true");
            window.requestAnimationFrame(function () {
                centerWheelSelection(monthWheelOptions);
                centerWheelSelection(yearWheelOptions);
            });
            var initialFocus = monthWheelOptions.find(function (option) { return option.tabIndex === 0; }) ||
                monthWheelOptions[0] ||
                yearWheelOptions.find(function (option) { return option.tabIndex === 0; }) ||
                yearWheelOptions[0] ||
                monthYearWheelManualInput;
            initialFocus === null || initialFocus === void 0 ? void 0 : initialFocus.focus();
            return;
        }
        monthYearWheelPopover.setAttribute("hidden", "hidden");
        monthYearWheelPopover.classList.remove("is-open");
        monthYearWheelTrigger === null || monthYearWheelTrigger === void 0 ? void 0 : monthYearWheelTrigger.setAttribute("aria-expanded", "false");
    }
    function setKeyboardHelpOpen(open) {
        if (!keyboardHelpPanel || !keyboardHelpButton)
            return;
        if (open) {
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
            var _a = getYearWheelRange(), minYear = _a.minYear, maxYear = _a.maxYear;
            var targetYear_1 = Math.min(maxYear, Math.max(minYear, self.currentYear + delta));
            if (targetYear_1 !== self.currentYear) {
                self.changeYear(targetYear_1);
            }
            syncMonthYearWheelPopover();
            return;
        }
        var candidate = new Date(self.currentYear, self.currentMonth + delta, 1);
        if (self.config.minDate) {
            var minBound = new Date(self.config.minDate.getFullYear(), self.config.minDate.getMonth(), 1);
            if (candidate < minBound) {
                candidate.setFullYear(minBound.getFullYear(), minBound.getMonth(), 1);
            }
        }
        if (self.config.maxDate) {
            var maxBound = new Date(self.config.maxDate.getFullYear(), self.config.maxDate.getMonth(), 1);
            if (candidate > maxBound) {
                candidate.setFullYear(maxBound.getFullYear(), maxBound.getMonth(), 1);
            }
        }
        var targetYear = candidate.getFullYear();
        var targetMonth = candidate.getMonth();
        if (targetYear !== self.currentYear) {
            self.changeYear(targetYear);
        }
        if (targetMonth !== self.currentMonth) {
            self.changeMonth(targetMonth, false, true);
        }
        syncMonthYearWheelPopover();
    }
    function buildMonthYearWheelPopover() {
        var popover = createElement("div", "flatpickr-time-wheel-popover flatpickr-month-year-wheel-popover");
        popover.setAttribute("role", "dialog");
        popover.setAttribute("aria-modal", "false");
        popover.setAttribute("aria-label", "".concat(self.l10n.monthAriaLabel, " / ").concat(self.l10n.yearAriaLabel));
        popover.setAttribute("hidden", "hidden");
        var content = createElement("div", "flatpickr-time-wheel-content flatpickr-month-year-wheel-content");
        var monthColumn = createElement("div", "flatpickr-time-wheel-column flatpickr-month-year-wheel-column flatpickr-month-wheel");
        monthColumn.setAttribute("role", "listbox");
        monthColumn.setAttribute("aria-label", self.l10n.monthAriaLabel);
        monthWheelOptions = [];
        var _loop_1 = function (monthIndex) {
            var option = createElement("button", "flatpickr-time-wheel-option flatpickr-month-year-wheel-option", monthToStr(monthIndex, false, self.l10n));
            option.type = "button";
            option.dataset.value = String(monthIndex);
            option.setAttribute("role", "option");
            option.setAttribute("aria-selected", "false");
            option.tabIndex = -1;
            bind(option, "click", function () {
                if (option.disabled)
                    return;
                self.changeMonth(monthIndex, false, true);
                syncMonthYearWheelPopover();
            });
            monthWheelOptions.push(option);
            monthColumn.appendChild(option);
        };
        for (var monthIndex = 0; monthIndex <= 11; monthIndex++) {
            _loop_1(monthIndex);
        }
        var yearColumn = createElement("div", "flatpickr-time-wheel-column flatpickr-month-year-wheel-column flatpickr-year-wheel");
        yearColumn.setAttribute("role", "listbox");
        yearColumn.setAttribute("aria-label", self.l10n.yearAriaLabel);
        yearWheelOptions = [];
        var _a = getYearWheelRange(), minYear = _a.minYear, maxYear = _a.maxYear;
        var _loop_2 = function (year) {
            var option = createElement("button", "flatpickr-time-wheel-option flatpickr-month-year-wheel-option", String(year));
            option.type = "button";
            option.dataset.value = String(year);
            option.setAttribute("role", "option");
            option.setAttribute("aria-selected", "false");
            option.tabIndex = -1;
            bind(option, "click", function () {
                self.changeYear(year);
                syncMonthYearWheelPopover();
            });
            yearWheelOptions.push(option);
            yearColumn.appendChild(option);
        };
        for (var year = minYear; year <= maxYear; year++) {
            _loop_2(year);
        }
        content.appendChild(monthColumn);
        content.appendChild(yearColumn);
        popover.appendChild(content);
        var getWheelKindFromTarget = function (target) {
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
        var focusSelectedInKind = function (kind) {
            var selected = kind === "year"
                ? yearWheelOptions.find(function (option) { return option.tabIndex === 0; })
                : monthWheelOptions.find(function (option) { return option.tabIndex === 0; });
            selected === null || selected === void 0 ? void 0 : selected.focus();
        };
        var bindOptionKeyHandling = function (kind, options) {
            options.forEach(function (option) {
                bind(option, "keydown", function (event) {
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
        var footer = createElement("div", "flatpickr-time-wheel-footer flatpickr-month-year-wheel-footer");
        if (self.config.yearWheelManualInput) {
            monthYearWheelManualInput = createElement("input", "flatpickr-month-year-wheel-input");
            monthYearWheelManualInput.type = "number";
            monthYearWheelManualInput.setAttribute("aria-label", self.l10n.yearAriaLabel);
            monthYearWheelManualInput.step = "1";
            monthYearWheelManualInput.min = String(minYear);
            monthYearWheelManualInput.max = String(maxYear);
            bind(monthYearWheelManualInput, "change", function () {
                var year = parseInt(monthYearWheelManualInput.value, 10);
                if (!isNaN(year)) {
                    self.changeYear(year);
                    syncMonthYearWheelPopover();
                }
            });
            bind(monthYearWheelManualInput, "keydown", function (event) {
                if (event.key === "Tab" || event.keyCode === 9) {
                    event.preventDefault();
                    cyclePopoverFocus(popover, monthYearWheelManualInput, event.shiftKey);
                    return;
                }
                if (event.key === "Enter") {
                    event.preventDefault();
                    var year = parseInt(monthYearWheelManualInput.value, 10);
                    if (!isNaN(year)) {
                        self.changeYear(year);
                        syncMonthYearWheelPopover();
                    }
                }
            });
            footer.appendChild(monthYearWheelManualInput);
        }
        else {
            monthYearWheelManualInput = undefined;
        }
        var doneButton = createElement("button", "flatpickr-time-wheel-done flatpickr-month-year-wheel-done", self.l10n.doneButtonLabel);
        doneButton.type = "button";
        doneButton.tabIndex = 0;
        bind(popover, "keydown", function (event) {
            if (event.key === "Tab" || event.keyCode === 9) {
                var target = getEventTarget(event);
                if (!popover.contains(target))
                    return;
                event.preventDefault();
                cyclePopoverFocus(popover, target, event.shiftKey);
            }
            else if (event.keyCode === 38 || event.keyCode === 40) {
                event.preventDefault();
                var target = getEventTarget(event);
                var kind = getWheelKindFromTarget(target);
                var direction = event.keyCode === 40 ? 1 : -1;
                applyMonthYearWheelDelta(kind, direction);
                focusSelectedInKind(kind);
            }
            else if (event.keyCode === 37 || event.keyCode === 39) {
                var target = getEventTarget(event);
                if (!target)
                    return;
                var isMonthOption = target.closest(".flatpickr-month-wheel") !== null;
                var isYearOption = target.closest(".flatpickr-year-wheel") !== null;
                if (!isMonthOption && !isYearOption)
                    return;
                event.preventDefault();
                focusSelectedInKind(isMonthOption ? "year" : "month");
            }
            else if (event.keyCode === 33 || event.keyCode === 34) {
                event.preventDefault();
                var target = getEventTarget(event);
                var kind = getWheelKindFromTarget(target);
                var direction = event.keyCode === 34 ? 1 : -1;
                applyMonthYearWheelDelta(kind, direction);
                focusSelectedInKind(kind);
            }
            else if (event.keyCode === 36 || event.keyCode === 35) {
                event.preventDefault();
                var target = getEventTarget(event);
                var kind = getWheelKindFromTarget(target);
                if (kind === "year") {
                    var _a = getYearWheelRange(), minYear_1 = _a.minYear, maxYear_1 = _a.maxYear;
                    self.changeYear(event.keyCode === 36 ? minYear_1 : maxYear_1);
                }
                else if (event.keyCode === 36) {
                    var minMonth = getMonthBoundsForYear(self.currentYear).minMonth;
                    self.changeMonth(minMonth, false);
                }
                else {
                    var maxMonth = getMonthBoundsForYear(self.currentYear).maxMonth;
                    self.changeMonth(maxMonth, false);
                }
                syncMonthYearWheelPopover();
                focusSelectedInKind(kind);
            }
            else if (event.key === "Escape") {
                event.preventDefault();
                setMonthYearWheelPopoverOpen(false);
                monthYearWheelTrigger === null || monthYearWheelTrigger === void 0 ? void 0 : monthYearWheelTrigger.focus();
            }
        });
        bind(doneButton, "click", function () {
            setMonthYearWheelPopoverOpen(false);
            monthYearWheelTrigger === null || monthYearWheelTrigger === void 0 ? void 0 : monthYearWheelTrigger.focus();
        });
        bind(doneButton, "keydown", function (event) {
            if (event.key === "Enter" ||
                event.keyCode === 13 ||
                event.key === " " ||
                event.keyCode === 32) {
                event.preventDefault();
                setMonthYearWheelPopoverOpen(false);
                monthYearWheelTrigger === null || monthYearWheelTrigger === void 0 ? void 0 : monthYearWheelTrigger.focus();
            }
        });
        footer.appendChild(doneButton);
        popover.appendChild(footer);
        return popover;
    }
    function buildMonthSwitch() {
        if (!self.monthsDropdownContainer)
            return;
        if (self.config.showMonths > 1 ||
            self.config.monthSelectorType !== "dropdown")
            return;
        var getMonthBounds = function (year) {
            var minMonth = 0;
            var maxMonth = 11;
            if (self.config.minDate !== undefined &&
                year === self.config.minDate.getFullYear()) {
                minMonth = self.config.minDate.getMonth();
            }
            if (self.config.maxDate !== undefined &&
                year === self.config.maxDate.getFullYear()) {
                maxMonth = self.config.maxDate.getMonth();
            }
            return { minMonth: minMonth, maxMonth: maxMonth };
        };
        var _a = getMonthBounds(self.currentYear), minMonth = _a.minMonth, maxMonth = _a.maxMonth;
        if (self.currentMonth < minMonth)
            self.currentMonth = minMonth;
        if (self.currentMonth > maxMonth)
            self.currentMonth = maxMonth;
        clearNode(self.monthsDropdownContainer);
        for (var i = minMonth; i <= maxMonth; i++) {
            var option = createElement("option", "flatpickr-monthDropdown-month", monthToStr(i, self.config.shorthandCurrentMonth, self.l10n));
            option.value = i.toString();
            option.selected = i === self.currentMonth;
            self.monthsDropdownContainer.appendChild(option);
        }
        self.monthsDropdownContainer.value = self.currentMonth.toString();
    }
    function buildMonth(monthOffset) {
        if (monthOffset === void 0) { monthOffset = 0; }
        var container = createElement("div", "flatpickr-month");
        var monthNavFragment = window.document.createDocumentFragment();
        if (self.config.monthYearWheel) {
            var currentMonth_1 = createElement("div", "flatpickr-current-month");
            var monthElement_1 = createElement("span", "cur-month");
            var yearElement_1 = createElement("input", "cur-year");
            yearElement_1.setAttribute("aria-label", self.l10n.yearAriaLabel);
            yearElement_1.type = "number";
            yearElement_1.tabIndex = -1;
            if (self.config.minDate) {
                yearElement_1.setAttribute("min", self.config.minDate.getFullYear().toString());
            }
            if (self.config.maxDate) {
                yearElement_1.setAttribute("max", self.config.maxDate.getFullYear().toString());
            }
            if (monthOffset === 0) {
                monthYearWheelTrigger = createElement("button", "flatpickr-month-year-wheel-trigger");
                monthYearWheelTrigger.type = "button";
                monthYearWheelTrigger.setAttribute("aria-haspopup", "dialog");
                monthYearWheelTrigger.setAttribute("aria-expanded", "false");
                bind(monthYearWheelTrigger, "click", function () {
                    if (!monthYearWheelPopover)
                        return;
                    setMonthYearWheelPopoverOpen(!monthYearWheelPopover.classList.contains("is-open"));
                });
                monthYearWheelPopover = buildMonthYearWheelPopover();
                currentMonth_1.appendChild(monthYearWheelTrigger);
                currentMonth_1.appendChild(monthYearWheelPopover);
                syncMonthYearWheelPopover();
            }
            else {
                var staticMonthLabel = createElement("span", "cur-month flatpickr-month-year-static-label");
                yearElement_1.type = "hidden";
                yearElement_1.setAttribute("aria-hidden", "true");
                currentMonth_1.appendChild(staticMonthLabel);
                monthNavFragment.appendChild(currentMonth_1);
                container.appendChild(monthNavFragment);
                return {
                    container: container,
                    yearElement: yearElement_1,
                    monthElement: staticMonthLabel,
                };
            }
            monthNavFragment.appendChild(currentMonth_1);
            container.appendChild(monthNavFragment);
            return {
                container: container,
                yearElement: yearElement_1,
                monthElement: monthElement_1,
            };
        }
        var monthElement;
        if (self.config.showMonths > 1 ||
            self.config.monthSelectorType === "static") {
            monthElement = createElement("span", "cur-month");
        }
        else {
            var monthDropdown = createElement("div", "flatpickr-monthDropdown");
            self.monthsDropdownContainer = createElement("select", "flatpickr-monthDropdown-months");
            self.monthsDropdownContainer.id = "".concat(calendarInstanceId, "-month-toggle");
            self.monthsDropdownContainer.setAttribute("aria-label", self.l10n.monthAriaLabel);
            bind(self.monthsDropdownContainer, "change", function () {
                var selectedMonth = parseInt(self.monthsDropdownContainer.value, 10);
                if (!isNaN(selectedMonth)) {
                    self.changeMonth(selectedMonth, false);
                }
            });
            buildMonthSwitch();
            monthDropdown.appendChild(self.monthsDropdownContainer);
            monthElement = monthDropdown;
        }
        var yearInput = createNumberInput("cur-year", { tabindex: "0" });
        var yearElement = yearInput.getElementsByTagName("input")[0];
        yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);
        if (self.config.minDate) {
            yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
        }
        if (self.config.maxDate) {
            yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
            yearElement.disabled =
                !!self.config.minDate &&
                    self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
        }
        var currentMonth = createElement("div", "flatpickr-current-month");
        currentMonth.appendChild(monthElement);
        currentMonth.appendChild(yearInput);
        monthNavFragment.appendChild(currentMonth);
        container.appendChild(monthNavFragment);
        return {
            container: container,
            yearElement: yearElement,
            monthElement: monthElement,
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
        for (var m = 0; m < self.config.showMonths; m++) {
            var month = buildMonth(m);
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
        self.prevMonthNav = createElement("button", "flatpickr-prev-month");
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
            get: function () { return self.__hidePrevMonthArrow; },
            set: function (bool) {
                if (self.__hidePrevMonthArrow !== bool) {
                    toggleClass(self.prevMonthNav, "flatpickr-disabled", bool);
                    self.__hidePrevMonthArrow = bool;
                }
            },
        });
        Object.defineProperty(self, "_hideNextMonthArrow", {
            get: function () { return self.__hideNextMonthArrow; },
            set: function (bool) {
                if (self.__hideNextMonthArrow !== bool) {
                    toggleClass(self.nextMonthNav, "flatpickr-disabled", bool);
                    self.__hideNextMonthArrow = bool;
                }
            },
        });
        self.currentYearElement = self.yearElements[0];
        updateNavigationCurrentMonth();
        return self.monthNav;
    }
    function buildTime() {
        self.calendarContainer.classList.add("hasTime");
        if (self.config.noCalendar)
            self.calendarContainer.classList.add("noCalendar");
        var isTimeOnly = self.config.enableTime === true && self.config.noCalendar === true;
        var defaults = getDefaultHours(self.config);
        self.timeContainer = createElement("div", "flatpickr-time");
        self.timeContainer.classList.add("has-wheel-popover");
        self.timeContainer.tabIndex = -1;
        var separator = createElement("span", "flatpickr-time-separator", ":");
        var hourInput = createNumberInput("flatpickr-hour", {
            "aria-label": self.l10n.hourAriaLabel,
        });
        self.hourElement = hourInput.getElementsByTagName("input")[0];
        var minuteInput = createNumberInput("flatpickr-minute", {
            "aria-label": self.l10n.minuteAriaLabel,
        });
        self.minuteElement = minuteInput.getElementsByTagName("input")[0];
        self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
        self.hourElement.value = pad(self.latestSelectedDateObj
            ? self.latestSelectedDateObj.getHours()
            : self.config.time_24hr
                ? defaults.hours
                : military2ampm(defaults.hours));
        self.minuteElement.value = pad(self.latestSelectedDateObj
            ? self.latestSelectedDateObj.getMinutes()
            : defaults.minutes);
        self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
        self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
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
            var secondInput = createNumberInput("flatpickr-second");
            self.secondElement = secondInput.getElementsByTagName("input")[0];
            self.secondElement.value = pad(self.latestSelectedDateObj
                ? self.latestSelectedDateObj.getSeconds()
                : defaults.seconds);
            self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
            self.secondElement.setAttribute("min", "0");
            self.secondElement.setAttribute("max", "59");
            self.secondElement.setAttribute("maxlength", "2");
            self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
            self.timeContainer.appendChild(secondInput);
        }
        if (!self.config.time_24hr) {
            self.amPM = createElement("span", "flatpickr-am-pm", self.l10n.amPM[int((self.latestSelectedDateObj
                ? self.hourElement.value
                : self.config.defaultHour) > 11)]);
            self.amPM.title = self.l10n.toggleTitle;
            self.amPM.tabIndex = -1;
            self.timeContainer.appendChild(self.amPM);
        }
        if (!isTimeOnly) {
            var timeBar = createElement("div", "flatpickr-time-wheel-bar");
            var timeLabel = createElement("span", "flatpickr-time-wheel-label", self.l10n.timeLabel);
            timeWheelTrigger = createElement("button", "flatpickr-time-wheel-trigger");
            timeWheelTrigger.type = "button";
            timeWheelTrigger.setAttribute("aria-haspopup", "dialog");
            timeWheelTrigger.setAttribute("aria-expanded", "false");
            timeWheelTrigger.setAttribute("aria-controls", "".concat(calendarInstanceId, "-time-wheel-popover"));
            bind(timeWheelTrigger, "click", function () {
                if (!timeWheelPopover)
                    return;
                setTimeWheelPopoverOpen(!timeWheelPopover.classList.contains("is-open"));
            });
            timeBar.appendChild(timeLabel);
            timeBar.appendChild(timeWheelTrigger);
            self.timeContainer.appendChild(timeBar);
        }
        else {
            timeWheelTrigger = undefined;
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
            self.weekdayContainer = createElement("div", "flatpickr-weekdays");
        else
            clearNode(self.weekdayContainer);
        for (var i = self.config.showMonths; i--;) {
            var container = createElement("div", "flatpickr-weekdaycontainer");
            self.weekdayContainer.appendChild(container);
        }
        updateWeekdays();
        return self.weekdayContainer;
    }
    function updateWeekdays() {
        if (!self.weekdayContainer) {
            return;
        }
        var firstDayOfWeek = self.l10n.firstDayOfWeek;
        var weekdays = __spreadArray([], self.l10n.weekdays.shorthand, true);
        var weekdaysLong = __spreadArray([], self.l10n.weekdays.longhand, true);
        if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
            weekdays = __spreadArray(__spreadArray([], weekdays.splice(firstDayOfWeek, weekdays.length), true), weekdays.splice(0, firstDayOfWeek), true);
            weekdaysLong = __spreadArray(__spreadArray([], weekdaysLong.splice(firstDayOfWeek, weekdaysLong.length), true), weekdaysLong.splice(0, firstDayOfWeek), true);
        }
        for (var i = self.config.showMonths; i--;) {
            var weekdaysMarkup = weekdays
                .map(function (weekday, index) {
                return "<span class='flatpickr-weekday' role='columnheader' aria-label='".concat(weekdaysLong[index], "'>").concat(weekday, "</span>");
            })
                .join("");
            self.weekdayContainer.children[i].innerHTML = weekdaysMarkup;
        }
    }
    function buildWeeks() {
        self.calendarContainer.classList.add("hasWeeks");
        var weekWrapper = createElement("div", "flatpickr-weekwrapper");
        weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
        var weekNumbers = createElement("div", "flatpickr-weeks");
        weekWrapper.appendChild(weekNumbers);
        return {
            weekWrapper: weekWrapper,
            weekNumbers: weekNumbers,
        };
    }
    function changeMonth(value, isOffset, animateScroll) {
        if (isOffset === void 0) { isOffset = true; }
        if (animateScroll === void 0) { animateScroll = false; }
        var delta = isOffset ? value : value - self.currentMonth;
        if ((delta < 0 && self._hidePrevMonthArrow === true) ||
            (delta > 0 && self._hideNextMonthArrow === true))
            return;
        self.currentMonth += delta;
        if (animateScroll && self.daysContainer && delta !== 0) {
            if (monthScrollAnimationTimer !== undefined) {
                window.clearTimeout(monthScrollAnimationTimer);
            }
            self.daysContainer.classList.remove("is-month-scroll-prev", "is-month-scroll-next", "is-month-scroll-active");
            self.daysContainer.classList.add(delta > 0 ? "is-month-scroll-next" : "is-month-scroll-prev", "is-month-scroll-active");
            monthScrollAnimationTimer = window.setTimeout(function () {
                if (!self.daysContainer)
                    return;
                self.daysContainer.classList.remove("is-month-scroll-prev", "is-month-scroll-next", "is-month-scroll-active");
                monthScrollAnimationTimer = undefined;
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
    function clear(triggerChangeEvent, toInitial) {
        if (triggerChangeEvent === void 0) { triggerChangeEvent = true; }
        if (toInitial === void 0) { toInitial = true; }
        self.input.value = "";
        if (self.altInput !== undefined)
            self.altInput.value = "";
        if (self.mobileInput !== undefined)
            self.mobileInput.value = "";
        self.selectedDates = [];
        self.latestSelectedDateObj = undefined;
        if (toInitial === true) {
            self.currentYear = self._initialDate.getFullYear();
            self.currentMonth = self._initialDate.getMonth();
        }
        if (self.config.enableTime === true) {
            var _a = getDefaultHours(self.config), hours = _a.hours, minutes = _a.minutes, seconds = _a.seconds;
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
            if (self.calendarContainer !== undefined) {
                self.calendarContainer.classList.remove("open");
            }
            if (self._input !== undefined) {
                self._input.classList.remove("active");
                self._input.setAttribute("aria-expanded", "false");
            }
            self.calendarContainer.setAttribute("aria-hidden", "true");
        }
        triggerEvent("onClose");
    }
    function destroy() {
        if (self.config !== undefined)
            triggerEvent("onDestroy");
        if (monthScrollAnimationTimer !== undefined) {
            window.clearTimeout(monthScrollAnimationTimer);
            monthScrollAnimationTimer = undefined;
        }
        for (var i = self._handlers.length; i--;) {
            self._handlers[i].remove();
        }
        self._handlers = [];
        if (self.mobileInput) {
            if (self.mobileInput.parentNode)
                self.mobileInput.parentNode.removeChild(self.mobileInput);
            self.mobileInput = undefined;
        }
        else if (self.calendarContainer && self.calendarContainer.parentNode) {
            if (self.config.static && self.calendarContainer.parentNode) {
                var wrapper = self.calendarContainer.parentNode;
                wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);
                if (wrapper.parentNode) {
                    while (wrapper.firstChild)
                        wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
                    wrapper.parentNode.removeChild(wrapper);
                }
            }
            else
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
            "config",
        ].forEach(function (k) {
            try {
                delete self[k];
            }
            catch (_) { }
        });
    }
    function isCalendarElem(elem) {
        return self.calendarContainer.contains(elem);
    }
    function documentClick(e) {
        if (self.isOpen && !self.config.inline) {
            var eventTarget_1 = getEventTarget(e);
            var isCalendarElement = isCalendarElem(eventTarget_1);
            var isInput = eventTarget_1 === self.input ||
                eventTarget_1 === self.altInput ||
                self.element.contains(eventTarget_1) ||
                (e.path &&
                    e.path.indexOf &&
                    (~e.path.indexOf(self.input) ||
                        ~e.path.indexOf(self.altInput)));
            var lostFocus = !isInput &&
                !isCalendarElement &&
                !isCalendarElem(e.relatedTarget);
            var isIgnored = !self.config.ignoredFocusElements.some(function (elem) {
                return elem.contains(eventTarget_1);
            });
            if (lostFocus && isIgnored) {
                if (self.config.allowInput) {
                    self.setDate(self._input.value, false, self.config.altInput
                        ? self.config.altFormat
                        : self.config.dateFormat);
                }
                if (self.timeContainer !== undefined &&
                    self.minuteElement !== undefined &&
                    self.hourElement !== undefined &&
                    self.input.value !== "" &&
                    self.input.value !== undefined) {
                    updateTime();
                }
                self.close();
                if (self.config &&
                    self.config.mode === "range" &&
                    self.selectedDates.length === 1)
                    self.clear(false);
            }
        }
    }
    function changeYear(newYear) {
        if (!newYear ||
            (self.config.minDate && newYear < self.config.minDate.getFullYear()) ||
            (self.config.maxDate && newYear > self.config.maxDate.getFullYear()))
            return;
        var newYearNum = newYear, isNewYear = self.currentYear !== newYearNum;
        self.currentYear = newYearNum || self.currentYear;
        if (self.config.maxDate &&
            self.currentYear === self.config.maxDate.getFullYear()) {
            self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
        }
        else if (self.config.minDate &&
            self.currentYear === self.config.minDate.getFullYear()) {
            self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
        }
        if (isNewYear) {
            self.redraw();
            triggerEvent("onYearChange");
            buildMonthSwitch();
        }
    }
    function isEnabled(date, timeless) {
        var _a;
        if (timeless === void 0) { timeless = true; }
        var dateToCheck = self.parseDate(date, undefined, timeless);
        if ((self.config.minDate &&
            dateToCheck &&
            compareDates(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0) ||
            (self.config.maxDate &&
                dateToCheck &&
                compareDates(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0))
            return false;
        if (self.config.enableTime &&
            Array.isArray(self.config.timeRules) &&
            self.config.timeRules.length > 0 &&
            dateToCheck) {
            var weekdayRuleBounds = getWeekdayTimeRuleBounds(dateToCheck);
            if (weekdayRuleBounds.hasRules && !weekdayRuleBounds.hasMatch) {
                return false;
            }
        }
        if (!self.config.enable && self.config.disable.length === 0)
            return true;
        if (dateToCheck === undefined)
            return false;
        var bool = !!self.config.enable, array = (_a = self.config.enable) !== null && _a !== void 0 ? _a : self.config.disable;
        for (var i = 0, d = void 0; i < array.length; i++) {
            d = array[i];
            if (typeof d === "function" &&
                d(dateToCheck))
                return bool;
            else if (d instanceof Date &&
                dateToCheck !== undefined &&
                d.getTime() === dateToCheck.getTime())
                return bool;
            else if (typeof d === "string") {
                var parsed = self.parseDate(d, undefined, true);
                return parsed && parsed.getTime() === dateToCheck.getTime()
                    ? bool
                    : !bool;
            }
            else if (typeof d === "object" &&
                dateToCheck !== undefined &&
                d.from &&
                d.to &&
                dateToCheck.getTime() >= d.from.getTime() &&
                dateToCheck.getTime() <= d.to.getTime())
                return bool;
        }
        return !bool;
    }
    function isInView(elem) {
        if (self.daysContainer !== undefined)
            return (elem.className.indexOf("hidden") === -1 &&
                elem.className.indexOf("flatpickr-disabled") === -1 &&
                self.daysContainer.contains(elem));
        return false;
    }
    function onBlur(e) {
        var isInput = e.target === self._input;
        var valueChanged = self._input.value.trimEnd() !== getDateStr();
        if (isInput &&
            valueChanged &&
            !(e.relatedTarget && isCalendarElem(e.relatedTarget))) {
            self.setDate(self._input.value, true, e.target === self.altInput
                ? self.config.altFormat
                : self.config.dateFormat);
        }
    }
    function onKeyDown(e) {
        if (self.calendarContainer !== undefined) {
            self.calendarContainer.classList.add("is-keyboard-nav");
        }
        var eventTarget = getEventTarget(e);
        var isInput = self.config.wrap
            ? element.contains(eventTarget)
            : eventTarget === self._input;
        var isTimeOnlyInput = self.config.enableTime === true && self.config.noCalendar === true;
        var allowInput = self.config.allowInput;
        var allowKeydown = self.isOpen && (!allowInput || !isInput);
        var allowInlineKeydown = self.config.inline && isInput && !allowInput;
        if (e.keyCode === 13 && isInput) {
            if (allowInput) {
                e.preventDefault();
                self.setDate(self._input.value, true, eventTarget === self.altInput
                    ? self.config.altFormat
                    : self.config.dateFormat);
                self.close();
                return eventTarget.blur();
            }
            else {
                e.preventDefault();
                self.open();
                if (!self.config.noCalendar) {
                    if (self.config.monthYearWheel && monthYearWheelTrigger) {
                        monthYearWheelTrigger.focus();
                    }
                    else {
                        focusOnDay(undefined, 1);
                    }
                }
                return;
            }
        }
        else if (isCalendarElem(eventTarget) ||
            allowKeydown ||
            allowInlineKeydown ||
            (isTimeOnlyInput && isInput)) {
            var isTimeObj = !!self.timeContainer &&
                self.timeContainer.contains(eventTarget);
            var isMonthDropdown = eventTarget === self.monthsDropdownContainer;
            var isInsideTimeWheelPopover = timeWheelPopover !== undefined &&
                timeWheelPopover.contains(eventTarget);
            var isInsideMonthYearWheelPopover = monthYearWheelPopover !== undefined &&
                monthYearWheelPopover.contains(eventTarget);
            if ((isInsideTimeWheelPopover || isInsideMonthYearWheelPopover) &&
                [33, 34, 35, 36, 37, 38, 39, 40].indexOf(e.keyCode) !== -1) {
                return;
            }
            if (isMonthDropdown &&
                [13, 32, 37, 38, 39, 40].indexOf(e.keyCode) !== -1) {
                return;
            }
            switch (e.keyCode) {
                case 13:
                    if (eventTarget === keyboardHelpButton) {
                        e.preventDefault();
                        var isOpen = keyboardHelpButton.getAttribute("aria-expanded") === "true";
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
                    if (timeWheelPopover !== undefined &&
                        eventTarget.classList.contains("flatpickr-time-wheel-done")) {
                        e.preventDefault();
                        setTimeWheelPopoverOpen(false);
                        timeWheelTrigger === null || timeWheelTrigger === void 0 ? void 0 : timeWheelTrigger.focus();
                        break;
                    }
                    if (monthYearWheelPopover !== undefined &&
                        eventTarget.classList.contains("flatpickr-month-year-wheel-done")) {
                        e.preventDefault();
                        setMonthYearWheelPopoverOpen(false);
                        monthYearWheelTrigger === null || monthYearWheelTrigger === void 0 ? void 0 : monthYearWheelTrigger.focus();
                        break;
                    }
                    if (eventTarget === self.prevMonthNav ||
                        eventTarget === self.nextMonthNav) {
                        e.preventDefault();
                        changeMonth(eventTarget === self.prevMonthNav ? -1 : 1);
                        break;
                    }
                    if (isTimeObj) {
                        e.preventDefault();
                        updateTime();
                        focusAndClose();
                    }
                    else
                        selectDate(e);
                    break;
                case 32:
                    if (eventTarget === keyboardHelpButton) {
                        e.preventDefault();
                        var isOpen = keyboardHelpButton.getAttribute("aria-expanded") === "true";
                        setKeyboardHelpOpen(!isOpen);
                        break;
                    }
                    if (eventTarget === self.prevMonthNav ||
                        eventTarget === self.nextMonthNav) {
                        e.preventDefault();
                        changeMonth(eventTarget === self.prevMonthNav ? -1 : 1);
                    }
                    else if (!isInput && !isTimeObj && isInView(eventTarget)) {
                        e.preventDefault();
                        selectDate(e);
                    }
                    break;
                case 27:
                    if (keyboardHelpPanel &&
                        keyboardHelpButton &&
                        keyboardHelpPanel.getAttribute("hidden") === null) {
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
                    var target = eventTarget;
                    var isDayTarget = !!self.daysContainer &&
                        self.daysContainer.contains(target) &&
                        target.$i !== undefined;
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
                        var activeElement = getClosestActiveElement();
                        if (self.daysContainer !== undefined &&
                            (allowInput === false ||
                                (activeElement && isInView(activeElement)))) {
                            var delta_1 = e.keyCode === 39 ? 1 : -1;
                            if (!e.ctrlKey)
                                focusOnDay(undefined, delta_1);
                            else {
                                e.stopPropagation();
                                changeMonth(delta_1);
                                focusOnDay(getFirstAvailableDay(1), 0);
                            }
                        }
                    }
                    else if (self.hourElement)
                        self.hourElement.focus();
                    break;
                case 38:
                case 40:
                    e.preventDefault();
                    var delta = e.keyCode === 40 ? 1 : -1;
                    if ((self.daysContainer &&
                        eventTarget.$i !== undefined) ||
                        eventTarget === self.input ||
                        eventTarget === self.altInput) {
                        if (e.ctrlKey) {
                            e.stopPropagation();
                            changeYear(self.currentYear - delta);
                            focusOnDay(getFirstAvailableDay(1), 0);
                        }
                        else if (!isTimeObj)
                            focusOnDay(undefined, delta * 7);
                    }
                    else if (eventTarget === self.currentYearElement) {
                        changeYear(self.currentYear - delta);
                    }
                    else if (self.config.enableTime) {
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
                    if ((timeWheelPopover !== undefined &&
                        timeWheelPopover.contains(eventTarget)) ||
                        (monthYearWheelPopover !== undefined &&
                            monthYearWheelPopover.contains(eventTarget))) {
                        break;
                    }
                    if (self.isOpen ||
                        (self.config.enableTime === true && self.config.noCalendar === true)) {
                        var firstDay = !self.config.noCalendar
                            ? getPreferredTabDay()
                            : undefined;
                        var isDayInGrid = !self.config.noCalendar &&
                            !!self.daysContainer &&
                            self.daysContainer.contains(eventTarget);
                        var prevMonthEnabled = !self.config.noCalendar &&
                            self.config.showMonthNavArrows &&
                            self.prevMonthNav &&
                            !self.prevMonthNav.classList.contains("flatpickr-disabled")
                            ? self.prevMonthNav
                            : undefined;
                        var nextMonthEnabled = !self.config.noCalendar &&
                            self.config.showMonthNavArrows &&
                            self.nextMonthNav &&
                            !self.nextMonthNav.classList.contains("flatpickr-disabled")
                            ? self.nextMonthNav
                            : undefined;
                        var headerPrimary = !self.config.noCalendar
                            ? (self.config.monthYearWheel
                                ? monthYearWheelTrigger
                                : self.monthsDropdownContainer || self.currentYearElement || prevMonthEnabled)
                            : undefined;
                        var tabOrder = [
                            prevMonthEnabled,
                            headerPrimary,
                            nextMonthEnabled,
                            firstDay,
                            timeWheelTrigger || getTimeWheelFocusTarget(),
                            timeWheelTrigger ? undefined : self.minuteElement,
                            timeWheelTrigger ? undefined : self.secondElement,
                            timeWheelTrigger ? undefined : self.amPM,
                            timeWheelPopover
                                ? (timeWheelPopover.querySelector(".flatpickr-time-wheel-done") || undefined)
                                : undefined,
                            !self.config.noCalendar ? keyboardHelpButton : undefined,
                            !self.config.noCalendar ? self.closeButton : undefined,
                        ]
                            .concat(self.pluginElements)
                            .filter(function (el) {
                            if (!el)
                                return false;
                            var isDisabled = el.disabled === true ||
                                el.classList.contains("flatpickr-disabled");
                            var isHidden = el.closest("[hidden]") !== null;
                            var isConnected = el.isConnected;
                            var isProgrammaticDayTarget = el.classList.contains("flatpickr-day");
                            return (isConnected &&
                                !isDisabled &&
                                !isHidden &&
                                (el.tabIndex >= 0 || isProgrammaticDayTarget));
                        })
                            .filter(function (el, index, arr) { return arr.indexOf(el) === index; });
                        if (isInput && tabOrder.length > 0) {
                            e.preventDefault();
                            if (self.config.enableTime === true && self.config.noCalendar === true) {
                                setTimeWheelPopoverOpen(true);
                            }
                            (headerPrimary || tabOrder[0]).focus();
                        }
                        else if (isDayInGrid) {
                            e.preventDefault();
                            if (e.shiftKey) {
                                (nextMonthEnabled || headerPrimary || prevMonthEnabled || self._input).focus();
                            }
                            else {
                                (timeWheelTrigger ||
                                    getTimeWheelFocusTarget() ||
                                    self.hourElement ||
                                    self.minuteElement ||
                                    self.secondElement ||
                                    self.amPM ||
                                    self.closeButton ||
                                    self._input).focus();
                            }
                        }
                        else {
                            var i = tabOrder.indexOf(eventTarget);
                            if (i !== -1) {
                                e.preventDefault();
                                var next = tabOrder[i + (e.shiftKey ? -1 : 1)];
                                if (!next) {
                                    next = e.shiftKey
                                        ? tabOrder[tabOrder.length - 1]
                                        : tabOrder[0];
                                }
                                (next || self._input).focus();
                            }
                        }
                    }
                    break;
                case 77:
                    if (!isInput && !isTimeObj && !self.config.noCalendar) {
                        e.preventDefault();
                        (monthYearWheelTrigger ||
                            self.monthsDropdownContainer ||
                            self.currentYearElement ||
                            self.prevMonthNav ||
                            self._input).focus();
                    }
                    break;
                default:
                    break;
            }
        }
        if (self.amPM !== undefined && eventTarget === self.amPM) {
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
    function onMouseOver(elem, cellClass) {
        if (cellClass === void 0) { cellClass = "flatpickr-day"; }
        if (self.selectedDates.length !== 1 ||
            (elem &&
                (!elem.classList.contains(cellClass) ||
                    elem.classList.contains("flatpickr-disabled"))))
            return;
        var hoverDate = elem
            ? elem.dateObj.getTime()
            : self.days.firstElementChild.dateObj.getTime(), initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(), rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()), rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
        var containsDisabled = false;
        var minRange = 0, maxRange = 0;
        for (var t = rangeStartDate; t < rangeEndDate; t += duration.DAY) {
            if (!isEnabled(new Date(t), true)) {
                containsDisabled =
                    containsDisabled || (t > rangeStartDate && t < rangeEndDate);
                if (t < initialDate && (!minRange || t > minRange))
                    minRange = t;
                else if (t > initialDate && (!maxRange || t < maxRange))
                    maxRange = t;
            }
        }
        var hoverableCells = Array.from(self.rContainer.querySelectorAll("*:nth-child(-n+".concat(self.config.showMonths, ") > .").concat(cellClass)));
        hoverableCells.forEach(function (dayElem) {
            var date = dayElem.dateObj;
            var timestamp = date.getTime();
            var outOfRange = (minRange > 0 && timestamp < minRange) ||
                (maxRange > 0 && timestamp > maxRange);
            if (outOfRange) {
                dayElem.classList.add("notAllowed");
                ["inRange", "startRange", "endRange"].forEach(function (c) {
                    dayElem.classList.remove(c);
                });
                return;
            }
            else if (containsDisabled && !outOfRange)
                return;
            ["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
                dayElem.classList.remove(c);
            });
            if (elem !== undefined) {
                elem.classList.add(hoverDate <= self.selectedDates[0].getTime()
                    ? "startRange"
                    : "endRange");
                if (initialDate < hoverDate && timestamp === initialDate)
                    dayElem.classList.add("startRange");
                else if (initialDate > hoverDate && timestamp === initialDate)
                    dayElem.classList.add("endRange");
                if (timestamp >= minRange &&
                    (maxRange === 0 || timestamp <= maxRange) &&
                    isBetween(timestamp, initialDate, hoverDate))
                    dayElem.classList.add("inRange");
            }
        });
    }
    function onResize() {
        if (self.isOpen && !self.config.static && !self.config.inline)
            positionCalendar();
    }
    function open(e, positionElement) {
        if (positionElement === void 0) { positionElement = self._positionElement; }
        if (self.isMobile === true) {
            var isTimeOnlyInput = self.config.enableTime === true && self.config.noCalendar === true;
            if (e) {
                e.preventDefault();
                var eventTarget = getEventTarget(e);
                if (eventTarget) {
                    eventTarget.blur();
                }
            }
            if (self.mobileInput !== undefined) {
                if (isTimeOnlyInput) {
                    self.mobileInput.focus();
                }
                self.mobileInput.click();
            }
            triggerEvent("onOpen");
            return;
        }
        else if (self._input.disabled || self.config.inline) {
            return;
        }
        var wasOpen = self.isOpen;
        self.isOpen = true;
        if (!wasOpen) {
            self.calendarContainer.classList.add("open");
            self._input.classList.add("active");
            self._input.setAttribute("aria-expanded", "true");
            self.calendarContainer.setAttribute("aria-hidden", "false");
            triggerEvent("onOpen");
            positionCalendar(positionElement);
            announce("".concat(monthToStr(self.currentMonth, self.config.shorthandCurrentMonth, self.l10n), " ").concat(self.currentYear));
        }
        if (self.config.enableTime === true && self.config.noCalendar === true) {
            setTimeWheelPopoverOpen(true);
            if (self.config.allowInput === false &&
                (e === undefined ||
                    !self.timeContainer.contains(e.relatedTarget))) {
                setTimeout(function () { return self.hourElement.select(); }, 50);
            }
        }
    }
    function minMaxDateSetter(type) {
        return function (date) {
            var dateObj = (self.config["_".concat(type, "Date")] = self.parseDate(date, self.config.dateFormat));
            var inverseDateObj = self.config["_".concat(type === "min" ? "max" : "min", "Date")];
            if (dateObj !== undefined) {
                self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] =
                    dateObj.getHours() > 0 ||
                        dateObj.getMinutes() > 0 ||
                        dateObj.getSeconds() > 0;
            }
            if (self.selectedDates) {
                self.selectedDates = self.selectedDates.filter(function (d) { return isEnabled(d); });
                if (!self.selectedDates.length && type === "min")
                    setHoursFromDate(dateObj);
                updateValue();
            }
            if (self.daysContainer) {
                redraw();
                if (dateObj !== undefined)
                    self.currentYearElement[type] = dateObj.getFullYear().toString();
                else
                    self.currentYearElement.removeAttribute(type);
                self.currentYearElement.disabled =
                    !!inverseDateObj &&
                        dateObj !== undefined &&
                        inverseDateObj.getFullYear() === dateObj.getFullYear();
            }
        };
    }
    function parseConfig() {
        var boolOpts = [
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
            "yearWheelManualInput",
        ];
        var userConfig = __assign(__assign({}, JSON.parse(JSON.stringify(element.dataset || {}))), instanceConfig);
        var formats = {};
        self.config.parseDate = userConfig.parseDate;
        self.config.formatDate = userConfig.formatDate;
        Object.defineProperty(self.config, "enable", {
            get: function () { return self.config._enable; },
            set: function (dates) {
                self.config._enable = parseDateRules(dates);
            },
        });
        Object.defineProperty(self.config, "disable", {
            get: function () { return self.config._disable; },
            set: function (dates) {
                self.config._disable = parseDateRules(dates);
            },
        });
        var timeMode = userConfig.mode === "time";
        if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
            var defaultDateFormat = flatpickr.defaultConfig.dateFormat || defaultOptions.dateFormat;
            formats.dateFormat =
                userConfig.noCalendar || timeMode
                    ? "H:i" + (userConfig.enableSeconds ? ":S" : "")
                    : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
        }
        if (userConfig.altInput &&
            (userConfig.enableTime || timeMode) &&
            !userConfig.altFormat) {
            var defaultAltFormat = flatpickr.defaultConfig.altFormat || defaultOptions.altFormat;
            formats.altFormat =
                userConfig.noCalendar || timeMode
                    ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K")
                    : defaultAltFormat + " h:i".concat(userConfig.enableSeconds ? ":S" : "", " K");
        }
        Object.defineProperty(self.config, "minDate", {
            get: function () { return self.config._minDate; },
            set: minMaxDateSetter("min"),
        });
        Object.defineProperty(self.config, "maxDate", {
            get: function () { return self.config._maxDate; },
            set: minMaxDateSetter("max"),
        });
        var minMaxTimeSetter = function (type) { return function (val) {
            self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
        }; };
        Object.defineProperty(self.config, "minTime", {
            get: function () { return self.config._minTime; },
            set: minMaxTimeSetter("min"),
        });
        Object.defineProperty(self.config, "maxTime", {
            get: function () { return self.config._maxTime; },
            set: minMaxTimeSetter("max"),
        });
        if (userConfig.mode === "time") {
            self.config.noCalendar = true;
            self.config.enableTime = true;
        }
        Object.assign(self.config, formats, userConfig);
        for (var i = 0; i < boolOpts.length; i++)
            self.config[boolOpts[i]] =
                self.config[boolOpts[i]] === true ||
                    self.config[boolOpts[i]] === "true";
        self.config.monthYearWheel = true;
        if (userConfig.yearRange && typeof userConfig.yearRange === "object") {
            var range = userConfig.yearRange;
            self.config.yearRange = {
                past: Math.max(0, Number(range.past || self.config.yearRange.past)),
                future: Math.max(0, Number(range.future || self.config.yearRange.future)),
            };
        }
        if (self.config.enableTime) {
            self.config.disableMobile = true;
        }
        HOOKS.filter(function (hook) { return self.config[hook] !== undefined; }).forEach(function (hook) {
            self.config[hook] = arrayify(self.config[hook] || []).map(bindToInstance);
        });
        self.isMobile =
            !self.config.disableMobile &&
                !self.config.inline &&
                self.config.mode === "single" &&
                !self.config.disable.length &&
                !self.config.enable &&
                !self.config.weekNumbers &&
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        for (var i = 0; i < self.config.plugins.length; i++) {
            var pluginConf = self.config.plugins[i](self) || {};
            for (var key in pluginConf) {
                if (HOOKS.indexOf(key) > -1) {
                    self.config[key] = arrayify(pluginConf[key])
                        .map(bindToInstance)
                        .concat(self.config[key]);
                }
                else if (typeof userConfig[key] === "undefined")
                    self.config[key] = pluginConf[key];
            }
        }
        if (!userConfig.altInputClass) {
            self.config.altInputClass =
                getInputElem().className + " " + self.config.altInputClass;
        }
        triggerEvent("onParseConfig");
    }
    function getInputElem() {
        return self.config.wrap
            ? element.querySelector("[data-input]")
            : element;
    }
    function setupLocale() {
        if (typeof self.config.locale !== "object" &&
            typeof flatpickr.l10ns[self.config.locale] === "undefined")
            self.config.errorHandler(new Error("flatpickr: invalid locale ".concat(self.config.locale)));
        self.l10n = __assign(__assign({}, flatpickr.l10ns.default), (typeof self.config.locale === "object"
            ? self.config.locale
            : self.config.locale !== "default"
                ? flatpickr.l10ns[self.config.locale]
                : undefined));
        tokenRegex.D = "(".concat(self.l10n.weekdays.shorthand.join("|"), ")");
        tokenRegex.l = "(".concat(self.l10n.weekdays.longhand.join("|"), ")");
        tokenRegex.M = "(".concat(self.l10n.months.shorthand.join("|"), ")");
        tokenRegex.F = "(".concat(self.l10n.months.longhand.join("|"), ")");
        tokenRegex.K = "(".concat(self.l10n.amPM[0], "|").concat(self.l10n.amPM[1], "|").concat(self.l10n.amPM[0].toLowerCase(), "|").concat(self.l10n.amPM[1].toLowerCase(), ")");
        var userConfig = __assign(__assign({}, instanceConfig), JSON.parse(JSON.stringify(element.dataset || {})));
        if (userConfig.time_24hr === undefined &&
            flatpickr.defaultConfig.time_24hr === undefined) {
            self.config.time_24hr = self.l10n.time_24hr;
        }
        self.formatDate = createDateFormatter(self);
        self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
    }
    function positionCalendar(customPositionElement) {
        if (typeof self.config.position === "function") {
            return void self.config.position(self, customPositionElement);
        }
        if (self.calendarContainer === undefined)
            return;
        triggerEvent("onPreCalendarPosition");
        var positionElement = customPositionElement || self._positionElement;
        var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, (function (acc, child) { return acc + child.offsetHeight; }), 0), calendarWidth = self.calendarContainer.offsetWidth, configPos = self.config.position.split(" "), configPosVertical = configPos[0], configPosHorizontal = configPos.length > 1 ? configPos[1] : null, inputBounds = positionElement.getBoundingClientRect(), distanceFromBottom = window.innerHeight - inputBounds.bottom, showOnTop = configPosVertical === "above" ||
            (configPosVertical !== "below" &&
                distanceFromBottom < calendarHeight &&
                inputBounds.top > calendarHeight);
        var top = window.pageYOffset +
            inputBounds.top +
            (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
        toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
        toggleClass(self.calendarContainer, "arrowBottom", showOnTop);
        if (self.config.inline)
            return;
        var left = window.pageXOffset + inputBounds.left;
        var isCenter = false;
        var isRight = false;
        if (configPosHorizontal === "center") {
            left -= (calendarWidth - inputBounds.width) / 2;
            isCenter = true;
        }
        else if (configPosHorizontal === "right") {
            left -= calendarWidth - inputBounds.width;
            isRight = true;
        }
        toggleClass(self.calendarContainer, "arrowLeft", !isCenter && !isRight);
        toggleClass(self.calendarContainer, "arrowCenter", isCenter);
        toggleClass(self.calendarContainer, "arrowRight", isRight);
        var right = window.document.body.offsetWidth -
            (window.pageXOffset + inputBounds.right);
        var rightMost = left + calendarWidth > window.document.body.offsetWidth;
        var centerMost = right + calendarWidth > window.document.body.offsetWidth;
        toggleClass(self.calendarContainer, "rightMost", rightMost);
        if (self.config.static)
            return;
        self.calendarContainer.style.top = "".concat(top, "px");
        if (!rightMost) {
            self.calendarContainer.style.left = "".concat(left, "px");
            self.calendarContainer.style.right = "auto";
        }
        else if (!centerMost) {
            self.calendarContainer.style.left = "auto";
            self.calendarContainer.style.right = "".concat(right, "px");
        }
        else {
            var doc = getDocumentStyleSheet();
            if (doc === undefined)
                return;
            var bodyWidth = window.document.body.offsetWidth;
            var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
            var centerBefore = ".flatpickr-calendar.centerMost:before";
            var centerAfter = ".flatpickr-calendar.centerMost:after";
            var centerIndex = doc.cssRules.length;
            var centerStyle = "{left:".concat(inputBounds.left, "px;right:auto;}");
            toggleClass(self.calendarContainer, "rightMost", false);
            toggleClass(self.calendarContainer, "centerMost", true);
            doc.insertRule("".concat(centerBefore, ",").concat(centerAfter).concat(centerStyle), centerIndex);
            self.calendarContainer.style.left = "".concat(centerLeft, "px");
            self.calendarContainer.style.right = "auto";
        }
    }
    function getDocumentStyleSheet() {
        var editableSheet = null;
        for (var i = 0; i < document.styleSheets.length; i++) {
            var sheet = document.styleSheets[i];
            if (!sheet.cssRules)
                continue;
            try {
                sheet.cssRules;
            }
            catch (err) {
                continue;
            }
            editableSheet = sheet;
            break;
        }
        return editableSheet != null ? editableSheet : createStyleSheet();
    }
    function createStyleSheet() {
        var style = document.createElement("style");
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
        var nav = navigator;
        if (window.navigator.userAgent.indexOf("MSIE") !== -1 ||
            nav.msMaxTouchPoints !== undefined) {
            setTimeout(self.close, 0);
        }
        else {
            self.close();
        }
    }
    function selectDate(e) {
        e.preventDefault();
        e.stopPropagation();
        var isKeyboardSelection = e.type === "keydown";
        var isSelectable = function (day) {
            return day.classList &&
                day.classList.contains("flatpickr-day") &&
                !day.classList.contains("flatpickr-disabled") &&
                !day.classList.contains("notAllowed");
        };
        var t = findParent(getEventTarget(e), isSelectable);
        if (t === undefined)
            return;
        var target = t;
        var selectedDate = (self.latestSelectedDateObj = new Date(target.dateObj.getTime()));
        var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth ||
            selectedDate.getMonth() >
                self.currentMonth + self.config.showMonths - 1) &&
            self.config.mode !== "range";
        self.selectedDateElem = target;
        if (self.config.mode === "single")
            self.selectedDates = [selectedDate];
        else if (self.config.mode === "multiple") {
            var selectedIndex = isDateSelected(selectedDate);
            if (selectedIndex)
                self.selectedDates.splice(parseInt(selectedIndex), 1);
            else
                self.selectedDates.push(selectedDate);
        }
        else if (self.config.mode === "range") {
            if (self.selectedDates.length === 2) {
                self.clear(false, false);
            }
            self.latestSelectedDateObj = selectedDate;
            self.selectedDates.push(selectedDate);
            if (compareDates(selectedDate, self.selectedDates[0], true) !== 0)
                self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
        }
        setHoursFromInputs();
        if (shouldChangeMonth) {
            var isNewYear = self.currentYear !== selectedDate.getFullYear();
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
        var focusedDayAfterBuild = self.selectedDateElem;
        if (!shouldChangeMonth &&
            self.config.mode !== "range" &&
            self.config.showMonths === 1 &&
            focusedDayAfterBuild !== undefined)
            focusOnDayElem(focusedDayAfterBuild);
        else if (focusedDayAfterBuild !== undefined &&
            self.hourElement === undefined) {
            focusedDayAfterBuild.focus();
        }
        if (self.hourElement !== undefined && isKeyboardSelection)
            self.hourElement !== undefined && self.hourElement.focus();
        if (self.config.closeOnSelect) {
            var single = self.config.mode === "single" && !self.config.enableTime;
            var range = self.config.mode === "range" &&
                self.selectedDates.length === 2 &&
                !self.config.enableTime;
            if (single || range) {
                focusAndClose();
            }
        }
        triggerChange();
    }
    var CALLBACKS = {
        locale: [setupLocale, updateWeekdays],
        showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
        minDate: [jumpToDate],
        maxDate: [jumpToDate],
        positionElement: [updatePositionElement],
        clickOpens: [
            function () {
                if (self.config.clickOpens === true) {
                    bind(self._input, "focus", self.open);
                    bind(self._input, "click", self.open);
                }
                else {
                    self._input.removeEventListener("focus", self.open);
                    self._input.removeEventListener("click", self.open);
                }
            },
        ],
    };
    function set(option, value) {
        if (option !== null && typeof option === "object") {
            Object.assign(self.config, option);
            for (var key in option) {
                if (CALLBACKS[key] !== undefined)
                    CALLBACKS[key].forEach(function (x) { return x(); });
            }
        }
        else {
            self.config[option] = value;
            if (CALLBACKS[option] !== undefined)
                CALLBACKS[option].forEach(function (x) { return x(); });
            else if (HOOKS.indexOf(option) > -1)
                self.config[option] = arrayify(value);
        }
        self.redraw();
        updateValue(true);
    }
    function setSelectedDate(inputDate, format) {
        var dates = [];
        if (inputDate instanceof Array)
            dates = inputDate.map(function (d) { return self.parseDate(d, format); });
        else if (inputDate instanceof Date || typeof inputDate === "number")
            dates = [self.parseDate(inputDate, format)];
        else if (typeof inputDate === "string") {
            switch (self.config.mode) {
                case "single":
                case "time":
                    dates = [self.parseDate(inputDate, format)];
                    break;
                case "multiple":
                    dates = inputDate
                        .split(self.config.conjunction)
                        .map(function (date) { return self.parseDate(date, format); });
                    break;
                case "range":
                    dates = inputDate
                        .split(self.l10n.rangeSeparator)
                        .map(function (date) { return self.parseDate(date, format); });
                    break;
                default:
                    break;
            }
        }
        else
            self.config.errorHandler(new Error("Invalid date supplied: ".concat(JSON.stringify(inputDate))));
        self.selectedDates = (self.config.allowInvalidPreload
            ? dates
            : dates.filter(function (d) { return d instanceof Date && isEnabled(d, false); }));
        if (self.config.mode === "range")
            self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
    }
    function setDate(date, triggerChange, format) {
        if (triggerChange === void 0) { triggerChange = false; }
        if (format === void 0) { format = self.config.dateFormat; }
        if ((date !== 0 && !date) || (date instanceof Array && date.length === 0))
            return self.clear(triggerChange);
        setSelectedDate(date, format);
        self.latestSelectedDateObj =
            self.selectedDates[self.selectedDates.length - 1];
        self.redraw();
        jumpToDate(undefined, triggerChange);
        setHoursFromDate();
        if (self.selectedDates.length === 0) {
            self.clear(false);
        }
        updateValue(triggerChange);
        if (triggerChange)
            triggerEvent("onChange");
    }
    function parseDateRules(arr) {
        return arr
            .slice()
            .map(function (rule) {
            if (typeof rule === "string" ||
                typeof rule === "number" ||
                rule instanceof Date) {
                return self.parseDate(rule, undefined, true);
            }
            else if (rule &&
                typeof rule === "object" &&
                rule.from &&
                rule.to)
                return {
                    from: self.parseDate(rule.from, undefined),
                    to: self.parseDate(rule.to, undefined),
                };
            return rule;
        })
            .filter(function (x) { return x; });
    }
    function setupDates() {
        self.selectedDates = [];
        self.now = self.parseDate(self.config.now) || new Date();
        var preloadedDate = self.config.defaultDate ||
            ((self.input.nodeName === "INPUT" ||
                self.input.nodeName === "TEXTAREA") &&
                self.input.placeholder &&
                self.input.value === self.input.placeholder
                ? null
                : self.input.value);
        if (preloadedDate)
            setSelectedDate(preloadedDate, self.config.dateFormat);
        self._initialDate =
            self.selectedDates.length > 0
                ? self.selectedDates[0]
                : self.config.minDate &&
                    self.config.minDate.getTime() > self.now.getTime()
                    ? self.config.minDate
                    : self.config.maxDate &&
                        self.config.maxDate.getTime() < self.now.getTime()
                        ? self.config.maxDate
                        : self.now;
        self.currentYear = self._initialDate.getFullYear();
        self.currentMonth = self._initialDate.getMonth();
        if (self.selectedDates.length > 0)
            self.latestSelectedDateObj = self.selectedDates[0];
        if (self.config.minTime !== undefined)
            self.config.minTime = self.parseDate(self.config.minTime, "H:i");
        if (self.config.maxTime !== undefined)
            self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
        self.minDateHasTime =
            !!self.config.minDate &&
                (self.config.minDate.getHours() > 0 ||
                    self.config.minDate.getMinutes() > 0 ||
                    self.config.minDate.getSeconds() > 0);
        self.maxDateHasTime =
            !!self.config.maxDate &&
                (self.config.maxDate.getHours() > 0 ||
                    self.config.maxDate.getMinutes() > 0 ||
                    self.config.maxDate.getSeconds() > 0);
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
            self.altInput = createElement(self.input.nodeName, self.config.altInputClass);
            self._input = self.altInput;
            self.altInput.placeholder = self.input.placeholder;
            self.altInput.disabled = self.input.disabled;
            self.altInput.required = self.input.required;
            self.altInput.tabIndex = self.input.tabIndex;
            self.altInput.type = "text";
            self.input.setAttribute("type", "hidden");
            if (!self.config.static && self.input.parentNode)
                self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
        }
        if (!self.config.allowInput)
            self._input.setAttribute("readonly", "readonly");
        updatePositionElement();
    }
    function updatePositionElement() {
        self._positionElement = self.config.positionElement || self._input;
    }
    function setupMobile() {
        var inputType = self.config.enableTime
            ? self.config.noCalendar
                ? "time"
                : "datetime-local"
            : "date";
        self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
        self.mobileInput.tabIndex = 1;
        self.mobileInput.type = inputType;
        self.mobileInput.disabled = self.input.disabled;
        self.mobileInput.required = self.input.required;
        self.mobileInput.placeholder = self.input.placeholder;
        self.mobileFormatStr =
            inputType === "datetime-local"
                ? "Y-m-d\\TH:i:S"
                : inputType === "date"
                    ? "Y-m-d"
                    : "H:i:S";
        if (self.selectedDates.length > 0) {
            self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
        }
        if (self.config.minDate)
            self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
        if (self.config.maxDate)
            self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
        if (self.input.getAttribute("step"))
            self.mobileInput.step = String(self.input.getAttribute("step"));
        self.input.type = "hidden";
        if (self.altInput !== undefined)
            self.altInput.type = "hidden";
        try {
            if (self.input.parentNode)
                self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
        }
        catch (_a) { }
        bind(self.mobileInput, "change", function (e) {
            self.setDate(getEventTarget(e).value, false, self.mobileFormatStr);
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
        if (self.config === undefined)
            return;
        var hooks = self.config[event];
        if (hooks !== undefined && hooks.length > 0) {
            for (var i = 0; hooks[i] && i < hooks.length; i++)
                hooks[i](self.selectedDates, self.input.value, self, data);
        }
        if (event === "onChange") {
            self.input.dispatchEvent(createEvent("change"));
            self.input.dispatchEvent(createEvent("input"));
            var selectedDateText = getDateStr();
            if (selectedDateText) {
                announce("Selected date: ".concat(selectedDateText));
            }
        }
    }
    function createEvent(name) {
        var e = document.createEvent("Event");
        e.initEvent(name, true, true);
        return e;
    }
    function isDateSelected(date) {
        for (var i = 0; i < self.selectedDates.length; i++) {
            var selectedDate = self.selectedDates[i];
            if (selectedDate instanceof Date &&
                compareDates(selectedDate, date) === 0)
                return "" + i;
        }
        return false;
    }
    function isDateInRange(date) {
        if (self.config.mode !== "range" || self.selectedDates.length < 2)
            return false;
        return (compareDates(date, self.selectedDates[0]) >= 0 &&
            compareDates(date, self.selectedDates[1]) <= 0);
    }
    function updateNavigationCurrentMonth() {
        if (self.config.noCalendar || self.isMobile || !self.monthNav)
            return;
        self.yearElements.forEach(function (yearElement, i) {
            var d = new Date(self.currentYear, self.currentMonth, 1);
            d.setMonth(self.currentMonth + i);
            if (self.config.showMonths > 1 ||
                self.config.monthSelectorType === "static" ||
                self.config.monthYearWheel) {
                var monthText = monthToStr(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n);
                if (self.config.monthYearWheel && i > 0) {
                    self.monthElements[i].textContent = "".concat(monthText, " ").concat(d.getFullYear());
                }
                else {
                    self.monthElements[i].textContent = monthText + " ";
                }
            }
            else if (self.monthsDropdownContainer) {
                self.monthsDropdownContainer.value = d.getMonth().toString();
            }
            yearElement.value = d.getFullYear().toString();
        });
        if (self.config.monthYearWheel) {
            syncMonthYearWheelPopover();
        }
        self._hidePrevMonthArrow =
            self.config.minDate !== undefined &&
                (self.currentYear === self.config.minDate.getFullYear()
                    ? self.currentMonth <= self.config.minDate.getMonth()
                    : self.currentYear < self.config.minDate.getFullYear());
        self._hideNextMonthArrow =
            self.config.maxDate !== undefined &&
                (self.currentYear === self.config.maxDate.getFullYear()
                    ? self.currentMonth + 1 > self.config.maxDate.getMonth()
                    : self.currentYear > self.config.maxDate.getFullYear());
        announce("".concat(monthToStr(self.currentMonth, self.config.shorthandCurrentMonth, self.l10n), " ").concat(self.currentYear));
    }
    function getDateStr(specificFormat) {
        var format = specificFormat ||
            (self.config.altInput ? self.config.altFormat : self.config.dateFormat);
        return self.selectedDates
            .map(function (dObj) { return self.formatDate(dObj, format); })
            .filter(function (d, i, arr) {
            return self.config.mode !== "range" ||
                self.config.enableTime ||
                arr.indexOf(d) === i;
        })
            .join(self.config.mode !== "range"
            ? self.config.conjunction
            : self.l10n.rangeSeparator);
    }
    function updateValue(triggerChange) {
        if (triggerChange === void 0) { triggerChange = true; }
        if (self.mobileInput !== undefined && self.mobileFormatStr) {
            self.mobileInput.value =
                self.latestSelectedDateObj !== undefined
                    ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr)
                    : "";
        }
        self.input.value = getDateStr(self.config.dateFormat);
        if (self.altInput !== undefined) {
            self.altInput.value = getDateStr(self.config.altFormat);
        }
        if (triggerChange !== false)
            triggerEvent("onValueUpdate");
    }
    function onMonthNavClick(e) {
        var eventTarget = getEventTarget(e);
        var isPrevMonth = self.prevMonthNav.contains(eventTarget);
        var isNextMonth = self.nextMonthNav.contains(eventTarget);
        if (isPrevMonth || isNextMonth) {
            changeMonth(isPrevMonth ? -1 : 1);
        }
        else if (self.yearElements.indexOf(eventTarget) >= 0) {
            eventTarget.select();
        }
        else if (eventTarget.classList.contains("arrowUp")) {
            self.changeYear(self.currentYear + 1);
        }
        else if (eventTarget.classList.contains("arrowDown")) {
            self.changeYear(self.currentYear - 1);
        }
    }
    function timeWrapper(e) {
        e.preventDefault();
        var isKeyDown = e.type === "keydown", eventTarget = getEventTarget(e), input = eventTarget;
        if (self.amPM !== undefined && eventTarget === self.amPM) {
            self.amPM.textContent =
                self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
        }
        var min = parseFloat(input.getAttribute("min")), max = parseFloat(input.getAttribute("max")), step = parseFloat(input.getAttribute("step")), curValue = parseInt(input.value, 10), delta = e.delta ||
            (isKeyDown ? (e.which === 38 ? 1 : -1) : 0);
        var newValue = curValue + step * delta;
        if (typeof input.value !== "undefined" && input.value.length === 2) {
            var isHourElem = input === self.hourElement, isMinuteElem = input === self.minuteElement;
            if (newValue < min) {
                newValue =
                    max +
                        newValue +
                        int(!isHourElem) +
                        (int(isHourElem) && int(!self.amPM));
                if (isMinuteElem)
                    incrementNumInput(undefined, -1, self.hourElement);
            }
            else if (newValue > max) {
                newValue =
                    input === self.hourElement ? newValue - max - int(!self.amPM) : min;
                if (isMinuteElem)
                    incrementNumInput(undefined, 1, self.hourElement);
            }
            if (self.amPM &&
                isHourElem &&
                (step === 1
                    ? newValue + curValue === 23
                    : Math.abs(newValue - curValue) > step)) {
                self.amPM.textContent =
                    self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
            }
            input.value = pad(newValue);
        }
    }
    init();
    return self;
}
function _flatpickr(nodeList, config) {
    var nodes = Array.prototype.slice
        .call(nodeList)
        .filter(function (x) { return x instanceof HTMLElement; });
    var instances = [];
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        try {
            if (node.getAttribute("data-fp-omit") !== null)
                continue;
            if (node._flatpickr !== undefined) {
                node._flatpickr.destroy();
                node._flatpickr = undefined;
            }
            node._flatpickr = FlatpickrInstance(node, config || {});
            instances.push(node._flatpickr);
        }
        catch (e) {
            console.error(e);
        }
    }
    return instances.length === 1 ? instances[0] : instances;
}
if (typeof HTMLElement !== "undefined" &&
    typeof HTMLCollection !== "undefined" &&
    typeof NodeList !== "undefined") {
    HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
        return _flatpickr(this, config);
    };
    HTMLCollection.prototype.a11y_datetime =
        NodeList.prototype.a11y_datetime = function (config) {
            return _flatpickr(this, config);
        };
    HTMLElement.prototype.flatpickr = function (config) {
        return _flatpickr([this], config);
    };
    HTMLElement.prototype.a11y_datetime = function (config) {
        return _flatpickr([this], config);
    };
}
var flatpickr = function (selector, config) {
    if (typeof selector === "string") {
        return _flatpickr(window.document.querySelectorAll(selector), config);
    }
    else if (selector instanceof Node) {
        return _flatpickr([selector], config);
    }
    else {
        return _flatpickr(selector, config);
    }
};
flatpickr.defaultConfig = {};
flatpickr.l10ns = {
    en: __assign({}, English),
    default: __assign({}, English),
};
flatpickr.localize = function (l10n) {
    flatpickr.l10ns.default = __assign(__assign({}, flatpickr.l10ns.default), l10n);
};
flatpickr.setDefaults = function (config) {
    flatpickr.defaultConfig = __assign(__assign({}, flatpickr.defaultConfig), config);
};
flatpickr.parseDate = createDateParser({});
flatpickr.formatDate = createDateFormatter({});
flatpickr.compareDates = compareDates;
var a11y_datetime = flatpickr;
var jq = typeof window !== "undefined" ? window.jQuery : undefined;
if (jq && typeof jq.fn !== "undefined") {
    jq.fn.flatpickr = function (config) {
        return _flatpickr(this, config);
    };
    jq.fn.a11y_datetime = function (config) {
        return _flatpickr(this, config);
    };
}
Date.prototype.fp_incr = function (days) {
    return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
};
if (typeof window !== "undefined") {
    window.flatpickr = flatpickr;
    window.a11y_datetime = a11y_datetime;
}
export default a11y_datetime;
