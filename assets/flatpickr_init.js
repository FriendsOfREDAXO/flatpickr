document.addEventListener('rex:ready', function() {
  var elements = document.querySelectorAll('.flatpickr_date_time');

  elements.forEach(function(element) {
    var locale = element.getAttribute('data-locale') || 'en';

    flatpickr(element,  
    {
        enableTime: true,
        altInput: true,    
        altFormat: "j. F, Y H:i",   
        time_24hr: true,
        "locale":  locale
    }                 
    );
  });
});

