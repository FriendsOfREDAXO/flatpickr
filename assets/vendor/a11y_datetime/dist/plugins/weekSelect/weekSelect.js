"use strict";
var plugins_weekSelect = (() => {
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

  // src/plugins/weekSelect/weekSelect.ts
  var weekSelect_exports = {};
  __export(weekSelect_exports, {
    default: () => weekSelect_default
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

  // src/plugins/weekSelect/weekSelect.ts
  function weekSelectPlugin() {
    return function(fp) {
      function onDayHover(event) {
        const day = getEventTarget(event);
        if (!day.classList.contains("flatpickr-day"))
          return;
        const days = fp.days.childNodes;
        const dayIndex = day.$i;
        const dayIndSeven = dayIndex / 7;
        const weekStartDay = days[7 * Math.floor(dayIndSeven)].dateObj;
        const weekEndDay = days[7 * Math.ceil(dayIndSeven + 0.01) - 1].dateObj;
        for (let i = days.length; i--; ) {
          const day2 = days[i];
          const date = day2.dateObj;
          if (date > weekEndDay || date < weekStartDay)
            day2.classList.remove("inRange");
          else
            day2.classList.add("inRange");
        }
      }
      function highlightWeek() {
        const selDate = fp.latestSelectedDateObj;
        if (selDate !== void 0 && selDate.getMonth() === fp.currentMonth && selDate.getFullYear() === fp.currentYear) {
          fp.weekStartDay = fp.days.childNodes[7 * Math.floor(fp.selectedDateElem.$i / 7)].dateObj;
          fp.weekEndDay = fp.days.childNodes[7 * Math.ceil(fp.selectedDateElem.$i / 7 + 0.01) - 1].dateObj;
        }
        const days = fp.days.childNodes;
        for (let i = days.length; i--; ) {
          const date = days[i].dateObj;
          if (date >= fp.weekStartDay && date <= fp.weekEndDay)
            days[i].classList.add("week", "selected");
        }
      }
      function clearHover() {
        const days = fp.days.childNodes;
        for (let i = days.length; i--; )
          days[i].classList.remove("inRange");
      }
      function onReady() {
        if (fp.daysContainer !== void 0)
          fp.daysContainer.addEventListener("mouseover", onDayHover);
      }
      function onDestroy() {
        if (fp.daysContainer !== void 0)
          fp.daysContainer.removeEventListener("mouseover", onDayHover);
      }
      return {
        onValueUpdate: highlightWeek,
        onMonthChange: highlightWeek,
        onYearChange: highlightWeek,
        onOpen: highlightWeek,
        onClose: clearHover,
        onParseConfig: function() {
          fp.config.mode = "single";
          fp.config.enableTime = false;
          fp.config.dateFormat = fp.config.dateFormat ? fp.config.dateFormat : "\\W\\e\\e\\k #W, Y";
          fp.config.altFormat = fp.config.altFormat ? fp.config.altFormat : "\\W\\e\\e\\k #W, Y";
        },
        onReady: [
          onReady,
          highlightWeek,
          () => {
            fp.loadedPlugins.push("weekSelect");
          }
        ],
        onDestroy
      };
    };
  }
  var weekSelect_default = weekSelectPlugin;
  return __toCommonJS(weekSelect_exports);
})();
