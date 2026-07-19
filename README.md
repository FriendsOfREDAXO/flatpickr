# a11y_datetime for REDAXO

a11y_datetime is an accessibility-focused fork of flatpickr.

## Why the addon is still named flatpickr

The addon package name stays `flatpickr` on purpose to keep existing REDAXO installations, installer updates, and project references fully compatible.
Internally, the frontend assets have been migrated to `a11y_datetime`.

## Differences from original flatpickr

This addon uses the `a11y_datetime` fork and is no longer a strict visual/behavioral 1:1 clone of original flatpickr in every detail.

Key differences:

- Accessibility-first behavior (ARIA, keyboard flow, live announcements).
- Additional fork options are passed through via `data-*` attributes.
- Some defaults intentionally differ from original flatpickr.

Examples of changed/new defaults:

- `focusOpens`: default `false`
- `announceChanges`: default `true`
- `monthYearWheel`: default `true`
- `showMonthNavArrows`: default `false` (arrows are optional)

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

Optional: enable opening on focus for a field:

```html
<input type="text" class="form-control a11y_datetime" data-focusOpens="true" name="event_start">
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

## Only time picker (no calendar)

If you only want a time picker without a calendar, set `data-enableTime="true"` and `data-noCalendar="true"`.
When both are set, the default `dateFormat` and `altFormat` fall back to `H:i`.

```json
{"class":"flatpickr","data-locale":"de","data-enableTime":"true","data-noCalendar":"true"}
```

## Open on focus (optional)

By default, the picker does not open automatically when the input receives focus via Tab.
If you want the legacy behavior for a specific field, enable it explicitly:

```json
{"class":"flatpickr","data-focusOpens":"true"}
```

## Weekday time windows (data-timeRules)

You can pass the new `timeRules` option as JSON via `data-timeRules`.

Example: Monday-Friday 08:00-17:00, Saturday 10:00-14:00.

```json
{"class":"flatpickr","data-enableTime":"true","data-timeRules":"[{\"days\":[1,2,3,4,5],\"from\":\"08:00\",\"to\":\"17:00\"},{\"days\":[6],\"from\":\"10:00\",\"to\":\"14:00\"}]"}
```

Note: weekday indices follow JavaScript (`0`=Sunday, `1`=Monday, ..., `6`=Saturday).

Important: If `data-timeRules` is set and a weekday has no matching rule, that weekday becomes not selectable.
In the example above, Sunday (`0`) is disabled.

## Month/year wheel (data-monthYearWheel)

You can enable the header month/year wheel per field.

```json
{"class":"flatpickr","data-monthYearWheel":"true","data-yearRange":"{\"past\":10,\"future\":10}","data-yearWheelManualInput":"true"}
```

`data-yearRange` expects a JSON object with `past` and `future`.

You can re-enable header arrows explicitly:

```json
{"class":"flatpickr","data-monthYearWheel":"true","data-showMonthNavArrows":"true"}
```

Show multiple calendar pages side-by-side (useful for ranges):

```json
{"class":"flatpickr_range","data-showMonths":"3","data-rangefield":"#id"}
```

## Supported `data-*` attributes

All relevant options of the vendor (a11y_datetime / flatpickr) can be set per field via `data-*` attributes.
The attribute name mirrors the option name (e.g. `data-enableTime`, `data-time_24hr`).

### Addon defaults (differ from vendor defaults)

These options are always applied by the addon and can be overridden by the corresponding `data-*` attribute:

| Attribute | Option | Type | Default |
|---|---|---|---|
| `data-locale` | `locale` | Locale key (e.g. `de`, `en`) | `de` |
| `data-altInput` | `altInput` | `true`/`false` | `true` |
| `data-altFormat` | `altFormat` | Format string | `j. F, Y H:i` (or `H:i` for time-only) |
| `data-time_24hr` | `time_24hr` | `true`/`false` | `true` |
| `data-focusOpens` | `focusOpens` | `true`/`false` | `false` |
| `data-monthYearWheel` | `monthYearWheel` | `true`/`false` | `true` |
| `data-showMonthNavArrows` | `showMonthNavArrows` | `true`/`false` | `false` |
| `data-showMonths` | `showMonths` | Integer (`1`, `2`, `3`, ...) | `1` |
| `data-yearWheelManualInput` | `yearWheelManualInput` | `true`/`false` | `true` |
| `data-yearRange` | `yearRange` | JSON object `{"past":N,"future":N}` | `{"past":10,"future":10}` |
| `data-enableTime` | `enableTime` | `true`/`false` | `false` |
| `data-noCalendar` | `noCalendar` | `true`/`false` | `false` |
| `data-timeRules` | `timeRules` | JSON array | `[]` |
| `data-disabled` | `disable` | Comma-separated list of dates | `[]` |

### Pass-through options (only applied when the attribute is present)

For every other supported vendor option, add a `data-<option>` attribute and the value is forwarded to the picker. If the attribute is omitted, the vendor default applies.

**Boolean options** (`true`/`false`):

`data-allowInput`, `data-allowInvalidPreload`, `data-animate`, `data-announceChanges`, `data-autoFillDefaultTime`, `data-clickOpens`, `data-closeOnSelect`, `data-disableMobile`, `data-enableSeconds`, `data-inline`, `data-shorthandCurrentMonth`, `data-showCloseButton`, `data-showTitleBar`, `data-static`, `data-weekNumbers`, `data-wrap`

**String options**:

| Attribute | Option | Allowed values / format |
|---|---|---|
| `data-altInputClass` | `altInputClass` | CSS class name |
| `data-ariaDateFormat` | `ariaDateFormat` | Format string |
| `data-calendarTitle` | `calendarTitle` | Text |
| `data-conjunction` | `conjunction` | Text between multiple dates |
| `data-dateFormat` | `dateFormat` | Format string |
| `data-defaultDate` | `defaultDate` | Date string |
| `data-initialDayFocus` | `initialDayFocus` | `today` / `selected` / `firstAvailable` |
| `data-maxDate` | `maxDate` | Date string |
| `data-maxTime` | `maxTime` | Time string (`HH:MM`) |
| `data-minDate` | `minDate` | Date string |
| `data-minTime` | `minTime` | Time string (`HH:MM`) |
| `data-mode` | `mode` | `single` / `multiple` / `range` / `time` |
| `data-monthSelectorType` | `monthSelectorType` | `dropdown` / `static` |
| `data-nextArrow` | `nextArrow` | HTML/text for next arrow |
| `data-now` | `now` | Date string |
| `data-position` | `position` | `auto`, `above`, `below`, `auto left`, ..., `below right` |
| `data-prevArrow` | `prevArrow` | HTML/text for previous arrow |

**Integer/number options**:

`data-defaultHour`, `data-defaultMinute`, `data-defaultSeconds`, `data-hourIncrement`, `data-minuteIncrement`

**List options** (comma-separated):

| Attribute | Option |
|---|---|
| `data-disabled` | `disable` |
| `data-enable` | `enable` |

Range pickers (`.flatpickr_range` / `.a11y_datetime_range`) accept the same attributes plus `data-rangefield` (CSS selector of the second input).

Hooks (`onChange`, `onOpen`, ...) cannot be configured via `data-*` attributes.

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
