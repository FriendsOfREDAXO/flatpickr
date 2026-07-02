var fp = typeof window !== "undefined" && window.flatpickr !== undefined
    ? window.flatpickr
    : {
        l10ns: {},
    };
export var Slovenian = {
    weekdays: {
        shorthand: ["Ned", "Pon", "Tor", "Sre", "Čet", "Pet", "Sob"],
        longhand: [
            "Nedelja",
            "Ponedeljek",
            "Torek",
            "Sreda",
            "Četrtek",
            "Petek",
            "Sobota",
        ],
    },
    months: {
        shorthand: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "Maj",
            "Jun",
            "Jul",
            "Avg",
            "Sep",
            "Okt",
            "Nov",
            "Dec",
        ],
        longhand: [
            "Januar",
            "Februar",
            "Marec",
            "April",
            "Maj",
            "Junij",
            "Julij",
            "Avgust",
            "September",
            "Oktober",
            "November",
            "December",
        ],
    },
    firstDayOfWeek: 1,
    rangeSeparator: " do ",
    keyboardHelpAriaLabel: "Pomoč za tipkovnico",
    keyboardShortcutsTitle: "Bližnjice na tipkovnici",
    keyboardShortcutFocus: "Tab / Shift+Tab: premik fokusa",
    keyboardShortcutArrows: "Puščice: krmarjenje po dnevih ali vrednostih kolesca",
    keyboardShortcutPage: "Page Up / Page Down: menjava meseca/leta v kolescu",
    keyboardShortcutHomeEnd: "Home / End: prvi/zadnji mesec ali leto",
    keyboardShortcutSelect: "Enter / Preslednica: izberi ali potrdi",
    keyboardShortcutEscape: "Esc: zapri pojavno okno/koledar",
    time_24hr: true,
    ordinal: function () {
        return ".";
    },
};
fp.l10ns.sl = Slovenian;
export default fp.l10ns;
