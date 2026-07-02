var fp = typeof window !== "undefined" && window.flatpickr !== undefined
    ? window.flatpickr
    : {
        l10ns: {},
    };
export var Spanish = {
    weekdays: {
        shorthand: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
        longhand: [
            "Domingo",
            "Lunes",
            "Martes",
            "Miércoles",
            "Jueves",
            "Viernes",
            "Sábado",
        ],
    },
    months: {
        shorthand: [
            "Ene",
            "Feb",
            "Mar",
            "Abr",
            "May",
            "Jun",
            "Jul",
            "Ago",
            "Sep",
            "Oct",
            "Nov",
            "Dic",
        ],
        longhand: [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
        ],
    },
    ordinal: function () {
        return "º";
    },
    firstDayOfWeek: 1,
    rangeSeparator: " a ",
    keyboardHelpAriaLabel: "Ayuda de teclado",
    keyboardShortcutsTitle: "Atajos de teclado",
    keyboardShortcutFocus: "Tab / Mayús+Tab: mover el foco",
    keyboardShortcutArrows: "Flechas: navegar días o valores de rueda",
    keyboardShortcutPage: "RePág / AvPág: cambiar mes/año en la rueda",
    keyboardShortcutHomeEnd: "Inicio / Fin: primer/último mes o año",
    keyboardShortcutSelect: "Enter / Espacio: seleccionar o confirmar",
    keyboardShortcutEscape: "Esc: cerrar ventana emergente/calendario",
    time_24hr: true,
};
fp.l10ns.es = Spanish;
export default fp.l10ns;
