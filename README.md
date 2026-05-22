# a11y_datetime for REDAXO

a11y_datetime is an accessibility-focused fork of flatpickr.

## Why the addon is still named flatpickr

The addon package name stays `flatpickr` on purpose to keep existing REDAXO installations, installer updates, and project references fully compatible.
Internally, the frontend assets have been migrated to `a11y_datetime`.

## a11y_datetime Links

Website: https://friendsofredaxo.github.io/a11y_datetime/

GitHub: https://github.com/FriendsOfREDAXO/a11y_datetime

## Howto install

Just install it from the REDAXO installer

## Howto use in YForm

```json
{"class": "flatpickr","data-locale":"de","data-enableTime":"true"}
```

You can also use the new class name:

```json
{"class": "a11y_datetime","data-locale":"de","data-enableTime":"true"}
```

## Howto use in Modules

```html
<input type="date" class="form-control flatpickr" data-locale="de" data-enableTime="true" name="REX_INPUT_VALUE[1]" value="REX_VALUE[1]">
```

## Howto RangeField over 2 input fields 

```json
{"class": "flatpickr_range","data-locale":"de","data-enableTime":"true", "data-rangefield":"#id"}
```

or

```json
{"class": "a11y_datetime_range","data-locale":"de","data-enableTime":"true", "data-rangefield":"#id"}
```

## Set the view just for date fields. 

If you don't want to see the time in a date-field, don't use the timepicker and set an alternative View.

Just set the data-altFormat. 😀

```json 
{"class":"flatpickr","data-altFormat":"j. F, Y"}
```

## Disable dates

You can disable dates via a comma seprated list. 
The attribute ist data-disabled. 

Example: 

```json
{"class": "flatpickr","data-locale":"de","data-enableTime":"true", "data-disabled":"2022-12-11,2022-12-24,2022-12-25"}
```


## Author

**Friends Of REDAXO**

* http://www.redaxo.org
* https://github.com/FriendsOfREDAXO

**Project lead**
[Thomas Skerbis](https://github.com/skerbis)

**Vendor**
https://github.com/FriendsOfREDAXO/a11y_datetime
