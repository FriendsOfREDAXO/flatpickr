"use strict";
var plugins_confirmDatePlugin = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/plugins/confirmDate/confirmDate.ts
  var confirmDate_exports = {};
  __export(confirmDate_exports, {
    default: () => confirmDate_default
  });

  // src/utils/dom.ts
  function getEventTarget(event) {
    try {
      if (typeof event.composedPath === "function") {
        const path = event.composedPath();
        return path[0];
      }
      return event.target;
    } catch (error) {
      return event.target;
    }
  }

  // src/plugins/confirmDate/confirmDate.ts
  var defaultConfig = {
    confirmIcon: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='17' height='17' viewBox='0 0 17 17'> <g> </g> <path d='M15.418 1.774l-8.833 13.485-4.918-4.386 0.666-0.746 4.051 3.614 8.198-12.515 0.836 0.548z' fill='#000000' /> </svg>",
    confirmText: "OK ",
    showAlways: false,
    theme: "light"
  };
  function confirmDatePlugin(pluginConfig) {
    const config = { ...defaultConfig, ...pluginConfig };
    let confirmContainer;
    const confirmButtonCSSClass = "flatpickr-confirm";
    return function(fp) {
      if (fp.config.noCalendar || fp.isMobile)
        return {};
      return {
        onKeyDown(_, __, ___, e) {
          const eventTarget = getEventTarget(e);
          const isTargetLastFocusableElement = !fp.config.time_24hr && eventTarget === fp.amPM || fp.config.time_24hr && (fp.config.enableSeconds && eventTarget === fp.secondElement || !fp.config.enableSeconds && eventTarget === fp.minuteElement);
          if (fp.config.enableTime && e.key === "Tab" && isTargetLastFocusableElement) {
            e.preventDefault();
            confirmContainer.focus();
          } else if (e.key === "Enter" && eventTarget === confirmContainer)
            fp.close();
        },
        onReady() {
          confirmContainer = fp._createElement(
            "div",
            `${confirmButtonCSSClass} ${config.showAlways ? "visible" : ""} ${config.theme}Theme`,
            config.confirmText
          );
          confirmContainer.tabIndex = -1;
          confirmContainer.innerHTML += config.confirmIcon;
          confirmContainer.addEventListener("click", fp.close);
          fp.calendarContainer.appendChild(confirmContainer);
          fp.loadedPlugins.push("confirmDate");
        },
        ...!config.showAlways ? {
          onChange: function(_, dateStr) {
            const showCondition = fp.config.enableTime || fp.config.mode === "multiple" || fp.loadedPlugins.indexOf("monthSelect") !== -1;
            const localConfirmContainer = fp.calendarContainer.querySelector(
              `.${confirmButtonCSSClass}`
            );
            if (!localConfirmContainer)
              return;
            if (dateStr && !fp.config.inline && showCondition && localConfirmContainer)
              return localConfirmContainer.classList.add("visible");
            localConfirmContainer.classList.remove("visible");
          }
        } : {}
      };
    };
  }
  var confirmDate_default = confirmDatePlugin;
  return __toCommonJS(confirmDate_exports);
})();
