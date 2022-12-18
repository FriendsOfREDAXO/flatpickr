(document).on('rex:ready', function () {
    var elements = document.querySelectorAll('.flatpickr');

    elements.forEach(function (element) {
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
});
