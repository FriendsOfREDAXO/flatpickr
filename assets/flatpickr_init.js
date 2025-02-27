$(document).on('rex:ready', function () {
    var pickr_elements = document.querySelectorAll('.flatpickr');

    pickr_elements.forEach(function (element) {
        var clocale = element.getAttribute('data-locale') || 'de';
        var cenableTime = element.getAttribute('data-enableTime') || false;
        var caltFormat = element.getAttribute('data-altFormat') || "j. F, Y H:i";
        var disabled = element.getAttribute('data-disabled') || "";
        var isMultiple = element.getAttribute('data-multiple') || false;
        var mode = isMultiple ? 'multiple' : 'single';
        var conjunction = element.getAttribute('data-conjunction') || ',';

        if (disabled && disabled != "") {
            var disabled_list = disabled.split(',');
        }
        else { disabled_list = []; }
        
        flatpickr(element,
            {
                enableTime: cenableTime,
                altInput: true,
                altFormat: caltFormat,
                time_24hr: true,
                disable: disabled_list,
                locale: clocale,
                mode: mode,
                conjunction: conjunction
            }
        );
    });

    var pickr_elements2 = document.querySelectorAll('.flatpickr_range');

    pickr_elements2.forEach(function (element) {
        var clocale = element.getAttribute('data-locale') || 'de';
        var cenableTime = element.getAttribute('data-enableTime') || false;
        var caltFormat = element.getAttribute('data-altFormat') || "j. F, Y H:i";
        var rangeField = element.getAttribute('data-rangefield') || "";
        var disabled = element.getAttribute('data-disabled') || "";

        if (disabled && disabled != "") {
            var disabled_list = disabled.split(',');
        }
        else { disabled_list = []; }
        if (rangeField != "") {
            flatpickr(element,
                {
                    enableTime: cenableTime,
                    "plugins": [new rangePlugin({ input: rangeField })],
                    altInput: true,
                    altFormat: caltFormat,
                    time_24hr: true,
                    disable: disabled_list,
                    locale: clocale
                });
        }
    });
    
    // Neuer Code für Multiple-Datumsauswahl
    var pickr_elements3 = document.querySelectorAll('.flatpickr_multiple');
    
    pickr_elements3.forEach(function (element) {
        var clocale = element.getAttribute('data-locale') || 'de';
        var cenableTime = element.getAttribute('data-enableTime') || false;
        var caltFormat = element.getAttribute('data-altFormat') || "j. F, Y";
        var disabled = element.getAttribute('data-disabled') || "";
        var conjunction = element.getAttribute('data-conjunction') || ',';
        
        if (disabled && disabled != "") {
            var disabled_list = disabled.split(',');
        }
        else { disabled_list = []; }
        
        flatpickr(element,
            {
                mode: 'multiple',
                enableTime: cenableTime,
                altInput: true,
                altFormat: caltFormat,
                dateFormat: 'Y-m-d',
                time_24hr: true,
                disable: disabled_list,
                locale: clocale,
                conjunction: conjunction,
                onChange: function(selectedDates, dateStr) {
                    // Stellen Sie sicher, dass der Wert im Original-Input korrekt gesetzt wird
                    element.value = dateStr;
                    
                    // Optional: Ein Change-Event auslösen
                    var event = new Event('change', { bubbles: true });
                    element.dispatchEvent(event);
                }
            }
        );
    });
});
