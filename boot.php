<?php
if (rex::isBackend() && is_object(rex::getUser())) {
    rex_view::addCssFile($plyr->getAssetsUrl('vendor/flatpickr/dist/flatpickr.min.css'));
    rex_view::addJsFile($plyr->getAssetsUrl('vendor/flatpickr/dist/themes/dark.css'));
    rex_view::addJsFile($plyr->getAssetsUrl('vendor/flatpickr/dist/flatpickr/dist/flatpickr.min.js'));
    rex_view::addJsFile($plyr->getAssetsUrl('vendor/flatpickr/dist/flatpickr/dist/l10n/de.js'));
    rex_view::addJsFile($plyr->getAssetsUrl('flatpckr_init.js'));
}
