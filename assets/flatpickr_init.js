$(document).on('rex:ready',function() {
flatpickr(".flatpickr_date_time",  
{
    enableTime: true,
    altInput: true,    
    altFormat: "j. F, Y H:i",   
    time_24hr: true,
    "locale":  myDiv.getAttribute('data-locale') || 'en'
    }                 
);
});
