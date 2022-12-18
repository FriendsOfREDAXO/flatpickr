$(document).on('rex:ready', function () {
    var pickr_elements = document.querySelectorAll('.flatpickr');

    pickr_elements.forEach(function (element) {
        var clocale = element.getAttribute('data-locale') || 'de';
        var cenableTime = element.getAttribute('data-enableTime') || false;
        var caltFormat = element.getAttribute('data-altFormat') || "j. F, Y H:i";

        flatpickr(element,
            {
                enableTime: cenableTime,
                altInput: true,
                altFormat: caltFormat,
                time_24hr: true,
                locale: clocale
            }
        );
    });


var pickr_elements2 = document.querySelectorAll('.flatpickr_range');

pickr_elements2.forEach(function (element) {
    var clocale = element.getAttribute('data-locale') || 'de';
    var cenableTime = element.getAttribute('data-enableTime') || false;
    var caltFormat = element.getAttribute('data-altFormat') || "j. F, Y H:i";
    var rangeField = element.getAttribute('data-rangefield') || "";
    alert(rangeField);
    if (rangeField!="") {
        flatpickr(element,
           {
            enableTime: cenableTime,
            "plugins": [new rangePlugin({ input: rangeField})],
            altInput: true,
            altFormat: caltFormat,
            time_24hr: true,
            locale: clocale
        });
    }

});

});
