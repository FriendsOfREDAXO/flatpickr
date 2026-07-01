<?php
$addon = rex_addon::get('flatpickr');
if (rex::isBackend() && is_object(rex::getUser())) {
    rex_view::addCssFile($addon->getAssetsUrl('vendor/a11y_datetime/dist/a11y_datetime.min.css'));
    rex_view::addCssFile($addon->getAssetsUrl('vendor/a11y_datetime/dist/themes/dark.css'));
    rex_view::addJsFile($addon->getAssetsUrl('vendor/a11y_datetime/dist/a11y_datetime.min.js'));
    rex_view::addJsFile($addon->getAssetsUrl('vendor/a11y_datetime/dist/l10n/de.js'));
    rex_view::addJsFile($addon->getAssetsUrl('vendor/a11y_datetime/dist/plugins/rangePlugin.js'));
    rex_view::addJsFile($addon->getAssetsUrl('flatpickr_init.js'));
}
