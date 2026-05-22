"use strict";
var plugins_momentPlugin = (() => {
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

  // src/plugins/momentPlugin.ts
  var momentPlugin_exports = {};
  __export(momentPlugin_exports, {
    default: () => momentPlugin_default
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

  // src/plugins/momentPlugin.ts
  function momentPlugin(config) {
    const moment = config.moment;
    return function(fp) {
      function captureIncrement(e) {
        const event = e;
        event.stopPropagation();
        const date = moment(fp.selectedDates[0]);
        const input = getEventTarget(event);
        const unit = Array.from(input.classList).filter((name) => name.startsWith("flatpickr-")).map((name) => name.substring(10))[0];
        const step = parseFloat(input.getAttribute("step"));
        date.add(step * event.delta, unit);
        fp.setDate(date.toDate());
      }
      return {
        parseDate: (datestr, format) => {
          return moment(datestr, format, true).toDate();
        },
        formatDate: (date, format) => {
          const momentDate = moment(date);
          if (typeof fp.config.locale === "string") {
            momentDate.locale(fp.config.locale);
          }
          return momentDate.format(format);
        },
        onReady() {
          [fp.hourElement, fp.minuteElement, fp.secondElement].forEach(
            (element) => element && element.addEventListener("increment", captureIncrement, {
              capture: true
            })
          );
        },
        onDestroy() {
          [fp.hourElement, fp.minuteElement, fp.secondElement].forEach(
            (element) => element && element.removeEventListener("increment", captureIncrement, {
              capture: true
            })
          );
        }
      };
    };
  }
  var momentPlugin_default = momentPlugin;
  return __toCommonJS(momentPlugin_exports);
})();
