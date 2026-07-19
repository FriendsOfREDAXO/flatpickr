$(document).on('rex:ready', function () {
    var pickerFactory = null;
    if (typeof a11y_datetime === 'function') {
        pickerFactory = a11y_datetime;
    } else if (typeof flatpickr === 'function') {
        pickerFactory = flatpickr;
    }

    if (!pickerFactory) {
        return;
    }

    var rangePluginFactory = null;
    if (typeof rangePlugin === 'function') {
        rangePluginFactory = rangePlugin;
    } else if (
        typeof plugins_rangePlugin !== 'undefined' &&
        plugins_rangePlugin &&
        typeof plugins_rangePlugin.default === 'function'
    ) {
        rangePluginFactory = plugins_rangePlugin.default;
    }

    var parseBool = function (value, fallbackValue) {
        if (value === null || value === undefined || value === '') {
            return fallbackValue;
        }

        if (typeof value === 'boolean') {
            return value;
        }

        return String(value).toLowerCase() === 'true';
    };

    var parseJsonArray = function (value, fallbackValue) {
        if (value === null || value === undefined || value === '') {
            return fallbackValue;
        }

        if (Array.isArray(value)) {
            return value;
        }

        try {
            var parsed = JSON.parse(value);
            return Array.isArray(parsed) ? parsed : fallbackValue;
        } catch (e) {
            return fallbackValue;
        }
    };

    var parseJsonObject = function (value, fallbackValue) {
        if (value === null || value === undefined || value === '') {
            return fallbackValue;
        }

        if (typeof value === 'object' && !Array.isArray(value)) {
            return value;
        }

        try {
            var parsed = JSON.parse(value);
            return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : fallbackValue;
        } catch (e) {
            return fallbackValue;
        }
    };

    var getTimeWheelLocaleTexts = function (localeValue) {
        var normalized = '';

        if (typeof localeValue === 'string') {
            normalized = localeValue.toLowerCase();
        }

        if (normalized.indexOf('de') === 0) {
            return {
                timeLabel: 'Zeit',
                doneLabel: 'Fertig',
                closeLabel: 'Zeitauswahl schließen',
                popoverLabel: 'Zeitauswahl'
            };
        }

        return {
            timeLabel: 'Time',
            doneLabel: 'Done',
            closeLabel: 'Close time picker',
            popoverLabel: 'Time picker popover'
        };
    };

    var localizeTimeWheel = function (instance, localeValue) {
        if (!instance || !instance.calendarContainer) {
            return;
        }

        var texts = getTimeWheelLocaleTexts(localeValue);
        var container = instance.calendarContainer;
        var timeLabel = container.querySelector('.flatpickr-time-wheel-label');
        var doneButton = container.querySelector('.flatpickr-time-wheel-done');
        var popover = container.querySelector('.flatpickr-time-wheel-popover');

        if (timeLabel) {
            timeLabel.textContent = texts.timeLabel;
        }

        if (doneButton) {
            doneButton.textContent = texts.doneLabel;
            doneButton.setAttribute('aria-label', texts.closeLabel);
        }

        if (popover) {
            popover.setAttribute('aria-label', texts.popoverLabel);
        }
    };

    var ensureTimeOnlyTabCycle = function (instance) {
        if (!instance || !instance.calendarContainer || !instance.config) {
            return;
        }

        if (instance.config.enableTime !== true || instance.config.noCalendar !== true) {
            return;
        }

        var container = instance.calendarContainer;
        if (container.getAttribute('data-time-only-tab-cycle') === '1') {
            return;
        }

        container.setAttribute('data-time-only-tab-cycle', '1');
        container.addEventListener('keydown', function (event) {
            if (event.key !== 'Tab') {
                return;
            }

            var popover = container.querySelector('.flatpickr-time-wheel-popover');
            if (!popover || popover.hasAttribute('hidden')) {
                return;
            }

            var target = event.target;
            if (!popover.contains(target)) {
                return;
            }

            var tabStops = Array.prototype.slice.call(
                popover.querySelectorAll('.flatpickr-time-wheel-option[tabindex="0"], .flatpickr-time-wheel-done')
            );

            if (tabStops.length === 0) {
                return;
            }

            var first = tabStops[0];
            var last = tabStops[tabStops.length - 1];

            if (!event.shiftKey && target === last) {
                event.preventDefault();
                first.focus();
                return;
            }

            if (event.shiftKey && target === first) {
                event.preventDefault();
                last.focus();
            }
        });
    };

    var applyAccessibilityPatches = function (instance, localeValue) {
        localizeTimeWheel(instance, localeValue);
        ensureTimeOnlyTabCycle(instance);
    };

    var parseInteger = function (value, fallbackValue) {
        if (value === null || value === undefined || value === '') {
            return fallbackValue;
        }

        var parsed = parseInt(value, 10);
        return isNaN(parsed) ? fallbackValue : parsed;
    };

    var parseCommaList = function (value) {
        if (value === null || value === undefined || value === '') {
            return [];
        }

        return String(value).split(',').map(function (item) {
            return item.trim();
        }).filter(function (item) {
            return item !== '';
        });
    };

    // Pass-through options: only forwarded when the corresponding data-* attribute
    // is present on the element. Vendor defaults apply otherwise.
    var passthroughBooleanOptions = [
        'allowInput',
        'allowInvalidPreload',
        'altInput',
        'animate',
        'announceChanges',
        'autoFillDefaultTime',
        'clickOpens',
        'closeOnSelect',
        'disableMobile',
        'enableSeconds',
        'inline',
        'shorthandCurrentMonth',
        'showCloseButton',
        'showTitleBar',
        'static',
        'time_24hr',
        'weekNumbers',
        'wrap'
    ];

    var passthroughStringOptions = [
        'altInputClass',
        'ariaDateFormat',
        'calendarTitle',
        'conjunction',
        'dateFormat',
        'defaultDate',
        'initialDayFocus',
        'maxDate',
        'maxTime',
        'minDate',
        'minTime',
        'mode',
        'monthSelectorType',
        'nextArrow',
        'now',
        'position',
        'prevArrow'
    ];

    var passthroughIntegerOptions = [
        'defaultHour',
        'defaultMinute',
        'defaultSeconds',
        'hourIncrement',
        'minuteIncrement'
    ];

    var buildBaseOptions = function (element) {
        var locale = element.getAttribute('data-locale') || 'de';
        var enableTime = parseBool(element.getAttribute('data-enableTime'), false);
        var noCalendar = parseBool(element.getAttribute('data-noCalendar'), false);
        var focusOpens = parseBool(element.getAttribute('data-focusOpens'), false);
        var monthYearWheel = parseBool(element.getAttribute('data-monthYearWheel'), true);
        var showMonthNavArrows = parseBool(element.getAttribute('data-showMonthNavArrows'), false);
        var showMonths = Math.max(1, parseInteger(element.getAttribute('data-showMonths'), 1));
        var yearWheelManualInput = parseBool(element.getAttribute('data-yearWheelManualInput'), true);
        var yearRangeRaw = parseJsonObject(element.getAttribute('data-yearRange'), {});
        var yearRange = {
            past: parseInteger(yearRangeRaw.past, 10),
            future: parseInteger(yearRangeRaw.future, 10)
        };
        var defaultAltFormat = (noCalendar && enableTime) ? 'H:i' : 'j. F, Y H:i';
        var altFormat = element.getAttribute('data-altFormat') || defaultAltFormat;
        var timeRules = parseJsonArray(element.getAttribute('data-timeRules'), []);
        var disableList = parseCommaList(element.getAttribute('data-disabled'));
        var enableList = parseCommaList(element.getAttribute('data-enable'));

        var options = {
            enableTime: enableTime,
            noCalendar: noCalendar,
            focusOpens: focusOpens,
            monthYearWheel: monthYearWheel,
            showMonthNavArrows: showMonthNavArrows,
            showMonths: showMonths,
            yearWheelManualInput: yearWheelManualInput,
            yearRange: yearRange,
            altInput: true,
            altFormat: altFormat,
            time_24hr: true,
            timeRules: timeRules,
            disable: disableList,
            locale: locale,
            onReady: function (_, __, instance) {
                applyAccessibilityPatches(instance, locale);
            },
            onOpen: function (_, __, instance) {
                applyAccessibilityPatches(instance, locale);
            }
        };

        // Time-only default for dateFormat, may be overridden by data-dateFormat below.
        if (noCalendar && enableTime) {
            options.dateFormat = 'H:i';
        }

        if (enableList.length > 0) {
            options.enable = enableList;
        }

        passthroughBooleanOptions.forEach(function (name) {
            var raw = element.getAttribute('data-' + name);
            if (raw !== null && raw !== '') {
                options[name] = parseBool(raw, undefined);
            }
        });

        passthroughStringOptions.forEach(function (name) {
            var raw = element.getAttribute('data-' + name);
            if (raw !== null && raw !== '') {
                options[name] = raw;
            }
        });

        passthroughIntegerOptions.forEach(function (name) {
            var raw = element.getAttribute('data-' + name);
            if (raw !== null && raw !== '') {
                options[name] = parseInteger(raw, undefined);
            }
        });

        return options;
    };

    var pickr_elements = document.querySelectorAll('.flatpickr, .a11y_datetime');

    pickr_elements.forEach(function (element) {
        pickerFactory(element, buildBaseOptions(element));
    });

    var pickr_elements2 = document.querySelectorAll('.flatpickr_range, .a11y_datetime_range');

    pickr_elements2.forEach(function (element) {
        var rangeField = element.getAttribute('data-rangefield') || '';
        if (rangeField === '' || !rangePluginFactory) {
            return;
        }

        var options = buildBaseOptions(element);
        options.plugins = [new rangePluginFactory({ input: rangeField })];
        pickerFactory(element, options);
    });

});
