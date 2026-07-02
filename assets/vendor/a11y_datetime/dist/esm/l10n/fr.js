var fp = typeof window !== "undefined" && window.flatpickr !== undefined
    ? window.flatpickr
    : {
        l10ns: {},
    };
export var French = {
    firstDayOfWeek: 1,
    weekdays: {
        shorthand: ["dim", "lun", "mar", "mer", "jeu", "ven", "sam"],
        longhand: [
            "dimanche",
            "lundi",
            "mardi",
            "mercredi",
            "jeudi",
            "vendredi",
            "samedi",
        ],
    },
    months: {
        shorthand: [
            "janv",
            "févr",
            "mars",
            "avr",
            "mai",
            "juin",
            "juil",
            "août",
            "sept",
            "oct",
            "nov",
            "déc",
        ],
        longhand: [
            "janvier",
            "février",
            "mars",
            "avril",
            "mai",
            "juin",
            "juillet",
            "août",
            "septembre",
            "octobre",
            "novembre",
            "décembre",
        ],
    },
    ordinal: function (nth) {
        if (nth > 1)
            return "";
        return "er";
    },
    rangeSeparator: " au ",
    weekAbbreviation: "Sem",
    scrollTitle: "Défiler pour augmenter la valeur",
    toggleTitle: "Cliquer pour basculer",
    keyboardHelpAriaLabel: "Aide clavier",
    keyboardShortcutsTitle: "Raccourcis clavier",
    keyboardShortcutFocus: "Tab / Maj+Tab : déplacer le focus",
    keyboardShortcutArrows: "Flèches : naviguer entre jours ou valeurs du sélecteur",
    keyboardShortcutPage: "Page préc./Page suiv. : changer mois/année dans le sélecteur",
    keyboardShortcutHomeEnd: "Début / Fin : premier/dernier mois ou année",
    keyboardShortcutSelect: "Entrée / Espace : sélectionner ou confirmer",
    keyboardShortcutEscape: "Échap : fermer la fenêtre/calendrier",
    time_24hr: true,
};
fp.l10ns.fr = French;
export default fp.l10ns;
