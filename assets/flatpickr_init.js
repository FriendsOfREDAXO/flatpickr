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

    var pickr_elements = document.querySelectorAll('.flatpickr, .a11y_datetime');

    pickr_elements.forEach(function (element) {
        var clocale = element.getAttribute('data-locale') || 'de';
        var cenableTime = parseBool(element.getAttribute('data-enableTime'), false);
        var cnoCalendar = parseBool(element.getAttribute('data-noCalendar'), false);
        var cfocusOpens = parseBool(element.getAttribute('data-focusOpens'), false);
        var cmonthYearWheel = parseBool(element.getAttribute('data-monthYearWheel'), true);
        var cshowMonthNavArrows = parseBool(element.getAttribute('data-showMonthNavArrows'), false);
        var cshowMonths = Math.max(1, parseInt(element.getAttribute('data-showMonths'), 10) || 1);
        var cyearWheelManualInput = parseBool(element.getAttribute('data-yearWheelManualInput'), true);
        var cyearRange = parseJsonObject(element.getAttribute('data-yearRange'), {});
        var cparsedYearRange = {
            past: 10,
            future: 10
        };
        cparsedYearRange.past = parseInt(cyearRange.past, 10) || 10;
        cparsedYearRange.future = parseInt(cyearRange.future, 10) || 10;
        var cdefaultAltFormat = (cnoCalendar && cenableTime) ? "H:i" : "j. F, Y H:i";
        var caltFormat = element.getAttribute('data-altFormat') || cdefaultAltFormat;
        var cdateFormat = element.getAttribute('data-dateFormat') || ((cnoCalendar && cenableTime) ? "H:i" : null);
        var ctimeRules = parseJsonArray(element.getAttribute('data-timeRules'), []);
        var disabled = element.getAttribute('data-disabled') || "";

        if (disabled && disabled != "") {
            var disabled_list = disabled.split(',');
        }
        else { disabled_list = []; }
        var pickerOptions = {
                enableTime: cenableTime,
                noCalendar: cnoCalendar,
                focusOpens: cfocusOpens,
                monthYearWheel: cmonthYearWheel,
                showMonthNavArrows: cshowMonthNavArrows,
                showMonths: cshowMonths,
                yearWheelManualInput: cyearWheelManualInput,
                yearRange: cparsedYearRange,
                altInput: true,
                altFormat: caltFormat,
                time_24hr: true,
                timeRules: ctimeRules,
                disable: disabled_list,
                locale: clocale,
                onReady: function (_, __, instance) {
                    applyAccessibilityPatches(instance, clocale);
                },
                onOpen: function (_, __, instance) {
                    applyAccessibilityPatches(instance, clocale);
                }
            };
        if (cdateFormat) {
            pickerOptions.dateFormat = cdateFormat;
        }
        pickerFactory(element, pickerOptions);
    });




    var pickr_elements2 = document.querySelectorAll('.flatpickr_range, .a11y_datetime_range');

    pickr_elements2.forEach(function (element) {
        var clocale = element.getAttribute('data-locale') || 'de';
        var cenableTime = parseBool(element.getAttribute('data-enableTime'), false);
        var cnoCalendar = parseBool(element.getAttribute('data-noCalendar'), false);
        var cfocusOpens = parseBool(element.getAttribute('data-focusOpens'), false);
        var cmonthYearWheel = parseBool(element.getAttribute('data-monthYearWheel'), true);
        var cshowMonthNavArrows = parseBool(element.getAttribute('data-showMonthNavArrows'), false);
        var cshowMonths = Math.max(1, parseInt(element.getAttribute('data-showMonths'), 10) || 1);
        var cyearWheelManualInput = parseBool(element.getAttribute('data-yearWheelManualInput'), true);
        var cyearRange = parseJsonObject(element.getAttribute('data-yearRange'), {});
        var cparsedYearRange = {
            past: 10,
            future: 10
        };
        cparsedYearRange.past = parseInt(cyearRange.past, 10) || 10;
        cparsedYearRange.future = parseInt(cyearRange.future, 10) || 10;
        var cdefaultAltFormat = (cnoCalendar && cenableTime) ? "H:i" : "j. F, Y H:i";
        var caltFormat = element.getAttribute('data-altFormat') || cdefaultAltFormat;
        var cdateFormat = element.getAttribute('data-dateFormat') || ((cnoCalendar && cenableTime) ? "H:i" : null);
        var ctimeRules = parseJsonArray(element.getAttribute('data-timeRules'), []);
        var rangeField = element.getAttribute('data-rangefield') || "";
        var disabled = element.getAttribute('data-disabled') || "";

        if (disabled && disabled != "") {
            var disabled_list = disabled.split(',');
        }
        else { disabled_list = []; }
        if (rangeField != "" && rangePluginFactory) {
            var pickerOptions = {
                    enableTime: cenableTime,
                    noCalendar: cnoCalendar,
                    focusOpens: cfocusOpens,
                    monthYearWheel: cmonthYearWheel,
                    showMonthNavArrows: cshowMonthNavArrows,
                    showMonths: cshowMonths,
                    yearWheelManualInput: cyearWheelManualInput,
                    yearRange: cparsedYearRange,
                    "plugins": [new rangePluginFactory({ input: rangeField })],
                    altInput: true,
                    altFormat: caltFormat,
                    time_24hr: true,
                    timeRules: ctimeRules,
                    disable: disabled_list,
                    locale: clocale,
                    onReady: function (_, __, instance) {
                        applyAccessibilityPatches(instance, clocale);
                    },
                    onOpen: function (_, __, instance) {
                        applyAccessibilityPatches(instance, clocale);
                    }
                };
            if (cdateFormat) {
                pickerOptions.dateFormat = cdateFormat;
            }
            pickerFactory(element, pickerOptions);
        }
    });

});
