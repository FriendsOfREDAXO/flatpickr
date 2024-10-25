$(document).on('rex:ready', function () {
    // Common callback definitions
    const commonCallbacks = {
        weekSelect: function(selectedDates, dateStr, instance) {
            const weekNumber = selectedDates[0] 
                ? instance.config.getWeek(selectedDates[0]) 
                : null;
            
            if (instance.element.dataset.weekTarget) {
                document.querySelector(instance.element.dataset.weekTarget).value = weekNumber;
            }
            
            instance.element.dispatchEvent(new CustomEvent('weekSelect', { 
                detail: { week: weekNumber, date: selectedDates[0] }
            }));
            
            return weekNumber;
        }
    };

    function parseConfig(configString) {
        return JSON.parse(configString, function(key, value) {
            if (typeof value === 'string') {
                if (value.startsWith('@callback.') && commonCallbacks[value.slice(10)]) {
                    return commonCallbacks[value.slice(10)];
                }
                if (value.startsWith('function(') && value.endsWith('}')) {
                    return new Function('return ' + value)();
                }
            }
            return value;
        });
    }

    document.querySelectorAll('.flatpickr').forEach(function (element) {
        // Initialize plugins array
        const plugins = [];
        
        // Range Plugin
        if (element.dataset.rangefield) {
            plugins.push(new rangePlugin({ 
                input: element.dataset.rangefield 
            }));
        }
        
        // Confirm Date Plugin
        if (element.dataset.confirmDate === 'true') {
            plugins.push(new confirmDatePlugin({
                confirmIcon: "<i class='fa fa-check'></i>",
                confirmText: "OK ",
                showAlways: true,
                ...JSON.parse(element.dataset.confirmConfig || '{}')
            }));
        }
        
        // Month Select Plugin
        if (element.dataset.monthSelect === 'true') {
            plugins.push(new monthSelectPlugin({
                shorthand: true,
                dateFormat: "Y-m",
                altFormat: "F Y",
                ...JSON.parse(element.dataset.monthSelectConfig || '{}')
            }));
        }
        
        // Week Select Plugin
        if (element.dataset.weekSelect === 'true') {
            plugins.push(new weekSelect({
                ...(element.dataset.weekSelectConfig ? parseConfig(element.dataset.weekSelectConfig) : {})
            }));
            
            // Automatically add week selection callback if not otherwise specified
            if (!element.dataset.config || !element.dataset.config.includes('"onChange"')) {
                element.dataset.config = JSON.stringify({
                    ...JSON.parse(element.dataset.config || '{}'),
                    onChange: ['@callback.weekSelect']
                });
            }
        }

        // MinMaxTime Plugin
        if (element.dataset.minMaxTime === 'true') {
            plugins.push(new minMaxTime({
                ...(element.dataset.minMaxTimeConfig ? parseConfig(element.dataset.minMaxTimeConfig) : {})
            }));
        }

        // Create base config
        const config = {
            // Default settings
            altInput: true,
            time_24hr: true,
            locale: 'de',
            ...(element.dataset.config ? parseConfig(element.dataset.config) : {})
        };

        // Add plugins if any were configured
        if (plugins.length > 0) {
            config.plugins = plugins;
        }
        
        flatpickr(element, config);
    });
});
