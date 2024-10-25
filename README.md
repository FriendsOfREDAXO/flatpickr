# flatpickr for REDAXO

A powerful and flexible datetime picker for REDAXO based on [flatpickr](https://flatpickr.js.org/).

## Features

- 🎯 Easy integration with YForm and modules
- ⚡️ Quick implementation of common use cases
- 🔧 Full support for all flatpickr features
- 🌍 Multilingual support (Default: de)

## Installation

Simply install through the REDAXO installer.

## Common Use Cases

### 1. Simple Date Selection

#### In YForm
```json
{
    "class": "flatpickr",
    "data-config": {
        "dateFormat": "Y-m-d",
        "altFormat": "j. F Y",
        "altInput": true
    }
}
```

#### In Modules
```html
<input 
    class="flatpickr" 
    data-config='{"dateFormat": "Y-m-d", "altFormat": "j. F Y", "altInput": true}'
    type="text"
    name="REX_INPUT_VALUE[1]" 
    value="REX_VALUE[1]">
```

### 2. Date and Time Selection (from today)

#### In YForm
```json
{
    "class": "flatpickr",
    "data-config": {
        "enableTime": true,
        "dateFormat": "Y-m-d H:i",
        "altFormat": "j. F Y H:i",
        "minDate": "today",
        "defaultHour": 12
    }
}
```

#### In Modules
```html
<input 
    class="flatpickr" 
    data-config='{"enableTime": true, "dateFormat": "Y-m-d H:i", "altFormat": "j. F Y H:i", "minDate": "today", "defaultHour": 12}'
    type="text">
```

### 3. Date Range Selection

#### In YForm
```json
{
    "class": "flatpickr",
    "data-rangefield": "#end_date",
    "data-config": {
        "dateFormat": "Y-m-d",
        "altFormat": "j. F Y",
        "minDate": "today"
    }
}
```

#### In Modules
```html
<input 
    class="flatpickr" 
    data-rangefield="#end_date"
    data-config='{"dateFormat": "Y-m-d", "altFormat": "j. F Y", "minDate": "today"}'
    type="text">
<input id="end_date" type="text">
```

### 4. Time Range Selection (Range with Time)

```html
<input 
    class="flatpickr" 
    data-rangefield="#end_datetime"
    data-config='{
        "enableTime": true,
        "dateFormat": "Y-m-d H:i",
        "altFormat": "j. F Y H:i",
        "minDate": "today",
        "defaultHour": 12
    }'
    type="text">
<input id="end_datetime" type="text">
```

## Advanced Configurations

### Date/Time Restrictions

#### Exclude Specific Dates
```json
{
    "class": "flatpickr",
    "data-config": {
        "disable": ["2024-12-24", "2024-12-25", "2024-12-31"],
        "dateFormat": "Y-m-d"
    }
}
```

#### Allow Workdays Only
```json
{
    "class": "flatpickr",
    "data-config": {
        "disable": [
            function(date) {
                return date.getDay() === 0 || date.getDay() === 6;
            }
        ],
        "dateFormat": "Y-m-d"
    }
}
```

#### Time Restrictions
```json
{
    "class": "flatpickr",
    "data-min-max-time": "true",
    "data-min-max-time-config": {
        "minTime": "09:00",
        "maxTime": "17:30"
    },
    "data-config": {
        "enableTime": true,
        "dateFormat": "Y-m-d H:i"
    }
}
```

## Special Use Cases

### Week Selection

```html
<input 
    class="flatpickr" 
    data-week-select="true"
    data-week-target="#week_number"
    data-config='{
        "dateFormat": "W/Y",
        "altFormat": "Week W, Y"
    }'
    type="text">
<input type="hidden" id="week_number">
```

### Month Selection

```html
<input 
    class="flatpickr" 
    data-month-select="true"
    data-month-select-config='{
        "shorthand": true,
        "dateFormat": "Y-m",
        "altFormat": "F Y"
    }'
    type="text">
```

## Complex Configurations

### Business Hours with Different Daily Rules

```html
<input 
    class="flatpickr" 
    data-min-max-time="true"
    data-min-max-time-config='{
        "getMinMaxHours": "function(date, type) {
            const day = date.getDay();
            if (type === \"min\") {
                return (day === 0 || day === 6) ? \"10:00\" : \"08:00\";
            }
            switch(day) {
                case 5: return \"15:00\";  // Friday
                case 6: return \"14:00\";  // Saturday
                case 0: return \"12:00\";  // Sunday
                default: return \"18:00\"; // Mon-Thu
            }
        }"
    }'
    data-config='{
        "enableTime": true,
        "dateFormat": "Y-m-d H:i",
        "altFormat": "j. F Y H:i"
    }'
    type="text">
```

## Important Notes

### YForm vs. Modules
- In YForm: Use pure JSON
- In Modules/Templates: Use single quotes outside and double quotes inside
  ```html
  data-config='{"key": "value"}'
  ```

### Available Plugins
- `rangePlugin` - for date ranges
- `monthSelectPlugin` - for month selection
- `weekSelect` - for week selection
- `minMaxTime` - for time restrictions
- `confirmDate` - for date confirmation

## Support & License

### Support
Please use the [GitHub Issues](https://github.com/FriendsOfREDAXO/flatpickr/issues) section

### License
MIT License

### Authors
**Friends Of REDAXO**
* http://www.redaxo.org
* https://github.com/FriendsOfREDAXO

**Project Lead**  
[Thomas Skerbis](https://github.com/skerbis)

**Vendor**  
https://flatpickr.js.org
