var fp = typeof window !== "undefined" && window.flatpickr !== undefined
    ? window.flatpickr
    : {
        l10ns: {},
    };
export var MandarinTraditional = {
    weekdays: {
        shorthand: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"],
        longhand: [
            "星期日",
            "星期一",
            "星期二",
            "星期三",
            "星期四",
            "星期五",
            "星期六",
        ],
    },
    months: {
        shorthand: [
            "一月",
            "二月",
            "三月",
            "四月",
            "五月",
            "六月",
            "七月",
            "八月",
            "九月",
            "十月",
            "十一月",
            "十二月",
        ],
        longhand: [
            "一月",
            "二月",
            "三月",
            "四月",
            "五月",
            "六月",
            "七月",
            "八月",
            "九月",
            "十月",
            "十一月",
            "十二月",
        ],
    },
    rangeSeparator: " 至 ",
    weekAbbreviation: "週",
    scrollTitle: "滾動切換",
    toggleTitle: "點擊切換 12/24 小時時制",
    keyboardHelpAriaLabel: "鍵盤說明",
    keyboardShortcutsTitle: "鍵盤快速鍵",
    keyboardShortcutFocus: "Tab / Shift+Tab：移動焦點",
    keyboardShortcutArrows: "方向鍵：導覽日期或滾輪數值",
    keyboardShortcutPage: "Page Up / Page Down：在滾輪中切換月份/年份",
    keyboardShortcutHomeEnd: "Home / End：跳到第一個/最後一個月份或年份",
    keyboardShortcutSelect: "Enter / 空白鍵：選取或確認",
    keyboardShortcutEscape: "Esc：關閉彈出層/日曆",
};
fp.l10ns.zh_tw = MandarinTraditional;
export default fp.l10ns;
