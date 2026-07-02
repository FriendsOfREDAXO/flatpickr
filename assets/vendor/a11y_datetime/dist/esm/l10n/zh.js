var fp = typeof window !== "undefined" && window.flatpickr !== undefined
    ? window.flatpickr
    : {
        l10ns: {},
    };
export var Mandarin = {
    weekdays: {
        shorthand: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
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
    weekAbbreviation: "周",
    scrollTitle: "滚动切换",
    toggleTitle: "点击切换 12/24 小时时制",
    keyboardHelpAriaLabel: "键盘帮助",
    keyboardShortcutsTitle: "键盘快捷键",
    keyboardShortcutFocus: "Tab / Shift+Tab：移动焦点",
    keyboardShortcutArrows: "方向键：导航日期或滚轮数值",
    keyboardShortcutPage: "Page Up / Page Down：在滚轮中切换月份/年份",
    keyboardShortcutHomeEnd: "Home / End：跳到首个/最后一个月份或年份",
    keyboardShortcutSelect: "Enter / 空格：选择或确认",
    keyboardShortcutEscape: "Esc：关闭弹出层/日历",
};
fp.l10ns.zh = Mandarin;
export default fp.l10ns;
