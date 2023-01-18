# flatpickr for REDAXO

flatpickr is a lightweight and powerful datetime picker.

## Howto install

Just install it from the REDAXO installer

## Howto use in YForm

```json
{"class": "flatpickr","data-locale":"de","data-enableTime":"true"}
```

## Howto use in Modules

```html
<input type="date" class="form-control flatpickr" data-locale="de" data-enableTime="true" name="REX_INPUT_VALUE[1]" value="REX_VALUE[1]">
```

## Howto RangeField over 2 input fields 

```json
{"class": "flatpickr_range","data-locale":"de","data-enableTime":"true", "data-rangefield":"#id"}
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
https://flatpickr.js.org
