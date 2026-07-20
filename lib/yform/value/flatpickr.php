<?php

declare(strict_types=1);

class rex_yform_value_flatpickr extends rex_yform_value_abstract
{
    /**
     * @var array<string, string>
     */
    private const PICKER_TYPES = [
        'date' => 'flatpickr_yform_type_date',
        'datetime' => 'flatpickr_yform_type_datetime',
        'time' => 'flatpickr_yform_type_time',
        'date_range' => 'flatpickr_yform_type_date_range',
    ];

    public function enterObject(): void
    {
        $this->setValue((string) $this->getValue());

        if ('' === $this->getValue() && !$this->params['send']) {
            $defaultValue = trim((string) $this->getElement('default'));
            if ('' !== $defaultValue) {
                $this->setValue($defaultValue);
            } elseif ('1' === (string) $this->getElement('current_value')) {
                $this->setValue($this->getCurrentDefaultValue());
            }
        }

        $this->params['value_pool']['email'][$this->getName()] = $this->getValue();

        if ($this->saveInDb()) {
            $this->params['value_pool']['sql'][$this->getName()] = $this->getValue();
        }

        if (!$this->needsOutput() || !$this->isViewable()) {
            return;
        }

        if (!$this->isEditable()) {
            $this->params['form_output'][$this->getId()] = $this->parse(
                ['value.text-view.tpl.php', 'value.view.tpl.php'],
                ['type' => 'text', 'value' => $this->getValue()]
            );

            return;
        }

        $this->params['form_output'][$this->getId()] = $this->parse('value.flatpickr.tpl.php', [
            'inputAttributes' => $this->buildInputAttributes(),
            'configSummary' => $this->buildConfigSummary(),
        ]);
    }

    public function getDescription(): string
    {
        return 'flatpickr|name|label|type|default|[no_db]|[notice]';
    }

    public function getDefinitions(): array
    {
        return [
            'type' => 'value',
            'name' => 'flatpickr',
            'values' => [
                'name' => ['type' => 'name', 'label' => rex_i18n::msg('yform_values_defaults_name')],
                'label' => ['type' => 'text', 'label' => rex_i18n::msg('yform_values_defaults_label')],
                'picker_type' => [
                    'type' => 'choice',
                    'label' => rex_i18n::msg('flatpickr_yform_picker_type'),
                    'choices' => array_map(static fn (string $key): string => rex_i18n::rawMsg($key), self::PICKER_TYPES),
                    'default' => 'date',
                    'notice' => rex_i18n::msg('flatpickr_yform_picker_type_notice') . ' ' . rex_i18n::msg('flatpickr_yform_db_type_notice'),
                ],
                'default' => ['type' => 'text', 'label' => rex_i18n::msg('flatpickr_yform_default')],
                'current_value' => ['type' => 'boolean', 'label' => rex_i18n::msg('flatpickr_yform_current_value')],
                'locale' => ['type' => 'text', 'label' => rex_i18n::msg('flatpickr_yform_locale'), 'default' => 'de'],
                'calendar_title' => ['type' => 'text', 'label' => rex_i18n::msg('flatpickr_yform_calendar_title'), 'notice' => rex_i18n::msg('flatpickr_yform_calendar_title_notice')],
                'date_format' => ['type' => 'text', 'label' => rex_i18n::msg('flatpickr_yform_date_format'), 'notice' => rex_i18n::msg('flatpickr_yform_date_format_notice')],
                'alt_format' => ['type' => 'text', 'label' => rex_i18n::msg('flatpickr_yform_alt_format'), 'notice' => rex_i18n::msg('flatpickr_yform_alt_format_notice')],
                'minute_increment' => ['type' => 'text', 'label' => rex_i18n::msg('flatpickr_yform_minute_increment'), 'default' => '1'],
                'show_months' => [
                    'type' => 'text',
                    'label' => rex_i18n::msg('flatpickr_yform_show_months'),
                    'notice' => rex_i18n::msg('flatpickr_yform_show_months_notice'),
                ],
                'year_range' => [
                    'type' => 'text',
                    'label' => rex_i18n::msg('flatpickr_yform_year_range'),
                    'notice' => rex_i18n::msg('flatpickr_yform_year_range_notice'),
                    'default' => '{"past":10,"future":10}',
                ],
                'enable_seconds' => ['type' => 'boolean', 'label' => rex_i18n::msg('flatpickr_yform_enable_seconds')],
                'time_24hr' => ['type' => 'boolean', 'label' => rex_i18n::msg('flatpickr_yform_time_24hr'), 'default' => '1'],
                'allow_input' => ['type' => 'boolean', 'label' => rex_i18n::msg('flatpickr_yform_allow_input')],
                'focus_opens' => ['type' => 'boolean', 'label' => rex_i18n::msg('flatpickr_yform_focus_opens')],
                'inline' => ['type' => 'boolean', 'label' => rex_i18n::msg('flatpickr_yform_inline')],
                'month_year_wheel' => ['type' => 'boolean', 'label' => rex_i18n::msg('flatpickr_yform_month_year_wheel'), 'default' => '1'],
                'show_month_nav_arrows' => ['type' => 'boolean', 'label' => rex_i18n::msg('flatpickr_yform_show_month_nav_arrows')],
                'year_wheel_manual_input' => ['type' => 'boolean', 'label' => rex_i18n::msg('flatpickr_yform_year_wheel_manual_input'), 'default' => '1'],
                'disable_dates' => ['type' => 'textarea', 'label' => rex_i18n::msg('flatpickr_yform_disable_dates'), 'notice' => rex_i18n::msg('flatpickr_yform_disable_dates_notice')],
                'disable_callback' => ['type' => 'text', 'label' => rex_i18n::msg('flatpickr_yform_disable_callback'), 'notice' => rex_i18n::msg('flatpickr_yform_disable_callback_notice')],
                'expert_json' => ['type' => 'textarea', 'label' => rex_i18n::msg('flatpickr_yform_expert_json'), 'notice' => rex_i18n::msg('flatpickr_yform_expert_json_notice')],
                'attributes' => ['type' => 'text', 'label' => rex_i18n::msg('yform_values_defaults_attributes'), 'notice' => rex_i18n::msg('yform_values_defaults_attributes_notice')],
                'no_db' => ['type' => 'no_db', 'label' => rex_i18n::msg('yform_values_defaults_table'), 'default' => 0],
                'notice' => ['type' => 'text', 'label' => rex_i18n::msg('yform_values_defaults_notice')],
            ],
            'description' => rex_i18n::msg('flatpickr_yform_description'),
            'db_type' => [
                'varchar(191)',
                'text',
                'date',
                'datetime',
                'time',
            ],
            'famous' => false,
        ];
    }

    public static function getSearchField($params): void
    {
        self::getSearchHandlerClass($params)::getSearchField($params);
    }

    public static function getSearchFilter($params)
    {
        return self::getSearchHandlerClass($params)::getSearchFilter($params);
    }

    private static function getSearchHandlerClass(array $params): string
    {
        $pickerType = (string) ($params['field']->getElement('picker_type') ?? 'date');

        return match ($pickerType) {
            'datetime' => rex_yform_value_datetime::class,
            'time' => rex_yform_value_time::class,
            'date_range', 'date' => rex_yform_value_date::class,
            default => rex_yform_value_text::class,
        };
    }

    public static function getListValue($params): string
    {
        $value = trim((string) $params['subject']);
        if ('' === $value) {
            return '<span>-</span>';
        }

        $pickerType = (string) ($params['params']['field']['picker_type'] ?? 'date');
        $altFormat = trim((string) ($params['params']['field']['alt_format'] ?? ''));

        return '<span>' . rex_escape(self::formatListValue($value, $pickerType, $altFormat)) . '</span>';
    }

    private function getCurrentDefaultValue(): string
    {
        return match ((string) $this->getElement('picker_type')) {
            'datetime' => date('Y-m-d H:i'),
            'time' => date('H:i'),
            'date' => date('Y-m-d'),
            default => '',
        };
    }

    /**
     * @return array<string, string>
     */
    private function buildInputAttributes(): array
    {
        $pickerType = (string) $this->getElement('picker_type');
        $locale = trim((string) $this->getElement('locale'));
        $calendarTitle = trim((string) $this->getElement('calendar_title'));
        $dateFormat = trim((string) $this->getElement('date_format'));
        $altFormat = trim((string) $this->getElement('alt_format'));
        $disableDates = trim((string) $this->getElement('disable_dates'));
        $disableCallback = trim((string) $this->getElement('disable_callback'));
        $expertJson = trim((string) $this->getElement('expert_json'));

        $attributes = $this->decodeAttributes((string) $this->getElement('attributes'));
        $attributes['type'] = 'text';
        $attributes['name'] = $this->getFieldName();
        $attributes['id'] = $this->getFieldId();
        $attributes['value'] = $this->getValue();
        $attributes['class'] = trim(((string) ($attributes['class'] ?? '')) . ' form-control flatpickr flatpickr-yform-input');
        $attributes['data-locale'] = '' !== $locale ? $locale : 'de';
        $attributes['data-time_24hr'] = $this->boolAttribute('time_24hr', true);
        $attributes['data-allowInput'] = $this->boolAttribute('allow_input');
        $attributes['data-focusOpens'] = $this->boolAttribute('focus_opens');
        $attributes['data-inline'] = $this->boolAttribute('inline');
        $attributes['data-monthYearWheel'] = $this->boolAttribute('month_year_wheel', true);
        $attributes['data-showMonthNavArrows'] = $this->boolAttribute('show_month_nav_arrows');
        $attributes['data-yearWheelManualInput'] = $this->boolAttribute('year_wheel_manual_input', true);
        $attributes['data-enableSeconds'] = $this->boolAttribute('enable_seconds');

        if ('' !== $calendarTitle) {
            $attributes['data-calendarTitle'] = $calendarTitle;
        }

        $minuteIncrement = max(1, (int) $this->getElement('minute_increment'));
        $showMonths = max(1, (int) $this->getElement('show_months'));
        $attributes['data-minuteIncrement'] = (string) $minuteIncrement;
        $attributes['data-showMonths'] = (string) $showMonths;

        $yearRange = trim((string) $this->getElement('year_range'));
        if ('' !== $yearRange) {
            $attributes['data-yearRange'] = $yearRange;
        }

        if ('datetime' === $pickerType) {
            $attributes['data-enableTime'] = 'true';
        } elseif ('time' === $pickerType) {
            $attributes['data-enableTime'] = 'true';
            $attributes['data-noCalendar'] = 'true';
        } elseif ('date_range' === $pickerType) {
            $attributes['data-mode'] = 'range';
        }

        if ('' !== $dateFormat) {
            $attributes['data-dateFormat'] = $dateFormat;
        }

        if ('' !== $altFormat) {
            $attributes['data-altFormat'] = $altFormat;
        }

        if ('' !== $disableDates) {
            $attributes['data-disabled'] = preg_replace('/\s+/', '', $disableDates) ?? $disableDates;
        }

        if ('' !== $disableCallback) {
            $attributes['data-flatpickr-disable-callback'] = $disableCallback;
        }

        if ('' !== $expertJson) {
            $attributes['data-flatpickr-expert-json'] = $expertJson;
        }

        if (!isset($attributes['placeholder']) || '' === trim((string) $attributes['placeholder'])) {
            $attributes['placeholder'] = $this->getDefaultPlaceholder($pickerType);
        }

        return array_map(static fn ($value): string => (string) $value, $attributes);
    }

    /**
     * @return array<string, string>
     */
    private function buildConfigSummary(): array
    {
        $pickerType = (string) $this->getElement('picker_type');

        return [
            'type' => rex_i18n::msg(self::PICKER_TYPES[$pickerType] ?? self::PICKER_TYPES['date']),
            'minuteIncrement' => (string) max(1, (int) $this->getElement('minute_increment')),
            'locale' => trim((string) $this->getElement('locale')) ?: 'de',
            'calendarTitle' => trim((string) $this->getElement('calendar_title')),
            'disableCallback' => trim((string) $this->getElement('disable_callback')),
            'expertJson' => trim((string) $this->getElement('expert_json')),
        ];
    }

    /**
     * @return array<string, mixed>
     */
    private function decodeAttributes(string $attributes): array
    {
        if ('' === trim($attributes)) {
            return [];
        }

        $decoded = json_decode($attributes, true);
        return is_array($decoded) ? $decoded : [];
    }

    private function boolAttribute(string $elementName, bool $default = false): string
    {
        $value = (string) $this->getElement($elementName);
        if ('' === $value) {
            return $default ? 'true' : 'false';
        }

        return in_array($value, ['1', 'true'], true) ? 'true' : 'false';
    }

    private function getDefaultPlaceholder(string $pickerType): string
    {
        return match ($pickerType) {
            'datetime' => 'YYYY-MM-DD HH:mm',
            'time' => 'HH:mm',
            'date_range' => 'YYYY-MM-DD to YYYY-MM-DD',
            default => 'YYYY-MM-DD',
        };
    }

    private static function formatListValue(string $value, string $pickerType, string $altFormat): string
    {
        $displayFormat = '' !== $altFormat ? $altFormat : self::getDefaultListFormat($pickerType);

        if ('date_range' === $pickerType) {
            $parts = preg_split('/\s+to\s+/i', $value);
            if (is_array($parts) && 2 === count($parts)) {
                $formattedParts = array_map(
                    static fn (string $part): string => self::formatDateValue(trim($part), $displayFormat),
                    $parts
                );

                if ('' !== $formattedParts[0] && '' !== $formattedParts[1]) {
                    return implode(' to ', $formattedParts);
                }
            }

            return $value;
        }

        return self::formatDateValue($value, $displayFormat);
    }

    private static function getDefaultListFormat(string $pickerType): string
    {
        return match ($pickerType) {
            'datetime' => 'Y-m-d H:i',
            'time' => 'H:i',
            'date_range', 'date' => 'Y-m-d',
            default => 'Y-m-d',
        };
    }

    private static function formatDateValue(string $value, string $displayFormat): string
    {
        $candidateFormats = [
            'Y-m-d H:i:s',
            'Y-m-d H:i',
            'Y-m-d',
            'H:i:s',
            'H:i',
        ];

        foreach ($candidateFormats as $candidateFormat) {
            $date = DateTime::createFromFormat($candidateFormat, $value);
            if ($date instanceof DateTime) {
                return $date->format($displayFormat);
            }
        }

        return $value;
    }
}