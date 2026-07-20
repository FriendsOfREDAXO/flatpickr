export var english = {
    weekdays: {
        shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        longhand: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ],
    },
    months: {
        shorthand: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        longhand: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ],
    },
    daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    firstDayOfWeek: 0,
    ordinal: function (nth) {
        var s = nth % 100;
        if (s > 3 && s < 21)
            return "th";
        switch (s % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    },
    rangeSeparator: " to ",
    weekAbbreviation: "Wk",
    scrollTitle: "Scroll to increment",
    toggleTitle: "Click to toggle",
    amPM: ["AM", "PM"],
    yearAriaLabel: "Year",
    monthAriaLabel: "Month",
    hourAriaLabel: "Hour",
    minuteAriaLabel: "Minute",
    secondAriaLabel: "Second",
    timeLabel: "Time",
    timePickerAriaLabel: "Time picker popover",
    doneButtonLabel: "Done",
    closeTimePickerAriaLabel: "Close time picker",
    selectedTimeAriaLabel: "Selected time",
    keyboardHelpAriaLabel: "Keyboard help",
    keyboardShortcutsTitle: "Keyboard shortcuts",
    keyboardShortcutFocus: "Tab / Shift+Tab: Move focus",
    keyboardShortcutArrows: "Arrow keys: Navigate days or wheel values",
    keyboardShortcutPage: "PageUp / PageDown: Month/Year step in wheel",
    keyboardShortcutHomeEnd: "Home / End: Jump to first/last month or year",
    keyboardShortcutSelect: "Enter / Space: Select or confirm",
    keyboardShortcutEscape: "Esc: Close popover/calendar",
    time_24hr: false,
};
export default english;
