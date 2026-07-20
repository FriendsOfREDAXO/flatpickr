<?php

/**
 * @var rex_yform_value_flatpickr $this
 * @psalm-scope-this rex_yform_value_flatpickr
 */

$inputAttributes ??= [];
$configSummary ??= [];

$notice = [];
if ('' !== $this->getElement('notice')) {
    $notice[] = rex_i18n::translate($this->getElement('notice'), false);
}
if (isset($this->params['warning_messages'][$this->getId()]) && !$this->params['hide_field_warning_messages']) {
    $notice[] = '<span class="text-warning">' . rex_i18n::translate($this->params['warning_messages'][$this->getId()]) . '</span>';
}

$summaryBits = [];
if ('' !== (string) ($configSummary['type'] ?? '')) {
    $summaryBits[] = rex_i18n::msg('flatpickr_yform_summary_type', rex_escape((string) $configSummary['type']));
}
if ('' !== (string) ($configSummary['minuteIncrement'] ?? '')) {
    $summaryBits[] = rex_i18n::msg('flatpickr_yform_summary_minute_increment', rex_escape((string) $configSummary['minuteIncrement']));
}
if ('' !== (string) ($configSummary['locale'] ?? '')) {
    $summaryBits[] = rex_i18n::msg('flatpickr_yform_summary_locale', rex_escape((string) $configSummary['locale']));
}
if ('' !== (string) ($configSummary['calendarTitle'] ?? '')) {
    $summaryBits[] = rex_i18n::msg('flatpickr_yform_summary_calendar_title', rex_escape((string) $configSummary['calendarTitle']));
}
if ('' !== (string) ($configSummary['disableCallback'] ?? '')) {
    $summaryBits[] = rex_i18n::msg('flatpickr_yform_summary_disable_callback', rex_escape((string) $configSummary['disableCallback']));
}
if ('' !== (string) ($configSummary['expertJson'] ?? '')) {
    $summaryBits[] = rex_i18n::msg('flatpickr_yform_summary_expert_json');
}

if ([] !== $summaryBits) {
    $notice[] = implode(' | ', $summaryBits);
}

$noticeHtml = [] !== $notice ? '<p class="help-block small">' . implode('<br />', $notice) . '</p>' : '';
$classGroup = trim('form-group ' . $this->getHTMLClass() . ' ' . $this->getWarningClass());
?>
<div class="<?= $classGroup ?>" id="<?= $this->getHTMLId() ?>">
    <label class="control-label" for="<?= rex_escape((string) ($inputAttributes['id'] ?? '')) ?>"><?= $this->getLabel() ?></label>
    <input<?= rex_string::buildAttributes($inputAttributes) ?> />
    <?= $noticeHtml ?>
</div>