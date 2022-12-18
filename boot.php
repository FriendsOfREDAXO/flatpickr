<?php
$addon = rex_addon::get('flatpckr');
if (rex::isBackend() && is_object(rex::getUser())) {
    rex_view::addCssFile($addon->getAssetsUrl('vendor/flatpickr/dist/flatpickr.min.css'));
    rex_view::addJsFile($addon->getAssetsUrl('vendor/flatpickr/dist/themes/dark.css'));
    rex_view::addJsFile($addon->getAssetsUrl('vendor/flatpickr/dist/flatpickr/dist/flatpickr.min.js'));
    rex_view::addJsFile($addon->getAssetsUrl('vendor/flatpickr/dist/flatpickr/dist/l10n/de.js'));
    rex_view::addJsFile($addon->getAssetsUrl('flatpckr_init.js'));
}
