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

    var pickr_elements = document.querySelectorAll('.flatpickr, .a11y_datetime');

    pickr_elements.forEach(function (element) {
        var clocale = element.getAttribute('data-locale') || 'de';
        var cenableTime = parseBool(element.getAttribute('data-enableTime'), false);
        var caltFormat = element.getAttribute('data-altFormat') || "j. F, Y H:i";
        var disabled = element.getAttribute('data-disabled') || "";

        if (disabled && disabled != "") {
            var disabled_list = disabled.split(',');
        }
        else { disabled_list = []; }
        pickerFactory(element,
            {
                enableTime: cenableTime,
                altInput: true,
                altFormat: caltFormat,
                time_24hr: true,
                disable: disabled_list,
                locale: clocale
            }
        );
    });




    var pickr_elements2 = document.querySelectorAll('.flatpickr_range, .a11y_datetime_range');

    pickr_elements2.forEach(function (element) {
        var clocale = element.getAttribute('data-locale') || 'de';
        var cenableTime = parseBool(element.getAttribute('data-enableTime'), false);
        var caltFormat = element.getAttribute('data-altFormat') || "j. F, Y H:i";
        var rangeField = element.getAttribute('data-rangefield') || "";
        var disabled = element.getAttribute('data-disabled') || "";

        if (disabled && disabled != "") {
            var disabled_list = disabled.split(',');
        }
        else { disabled_list = []; }
        if (rangeField != "" && rangePluginFactory) {
            pickerFactory(element,
                {
                    enableTime: cenableTime,
                    "plugins": [new rangePluginFactory({ input: rangeField })],
                    altInput: true,
                    altFormat: caltFormat,
                    time_24hr: true,
                    disable: disabled_list,
                    locale: clocale
                });
        }
    });

});
