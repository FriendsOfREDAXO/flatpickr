<?php

declare(strict_types=1);

namespace FriendsOfREDAXO\Flatpickr;

use rex_addon;

final class FrontendHelper
{
    private static bool $assetsIncluded = false;

    public static function getAssetsHtml(string $locale = 'de', bool $includeDarkTheme = true, bool $includeRangePlugin = true): string
    {
        $addon = rex_addon::get('flatpickr');

        $tags = [];
        $tags[] = self::cssTag($addon->getAssetsUrl('vendor/a11y_datetime/dist/a11y_datetime.min.css'));

        if ($includeDarkTheme) {
            $tags[] = self::cssTag($addon->getAssetsUrl('vendor/a11y_datetime/dist/themes/dark.css'));
        }

        $tags[] = self::jsTag($addon->getAssetsUrl('vendor/a11y_datetime/dist/a11y_datetime.min.js'));

        if ('' !== $locale) {
            $tags[] = self::jsTag($addon->getAssetsUrl('vendor/a11y_datetime/dist/l10n/' . $locale . '.js'));
        }

        if ($includeRangePlugin) {
            $tags[] = self::jsTag($addon->getAssetsUrl('vendor/a11y_datetime/dist/plugins/rangePlugin.js'));
        }

        $tags[] = self::jsTag($addon->getAssetsUrl('flatpickr_init.js'));

        return implode(PHP_EOL, $tags) . PHP_EOL;
    }

    public static function includeAssets(string $locale = 'de', bool $includeDarkTheme = true, bool $includeRangePlugin = true): void
    {
        if (self::$assetsIncluded) {
            return;
        }

        echo self::getAssetsHtml($locale, $includeDarkTheme, $includeRangePlugin);
        self::$assetsIncluded = true;
    }

    private static function cssTag(string $url): string
    {
        return '<link rel="stylesheet" href="' . self::escapeHtml($url) . '">';
    }

    private static function jsTag(string $url): string
    {
        return '<script src="' . self::escapeHtml($url) . '"></script>';
    }

    private static function escapeHtml(string $value): string
    {
        return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
    }
}
