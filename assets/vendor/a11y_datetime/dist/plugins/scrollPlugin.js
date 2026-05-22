"use strict";
var plugins_scrollPlugin = (() => {
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

  // src/plugins/scrollPlugin.ts
  var scrollPlugin_exports = {};
  __export(scrollPlugin_exports, {
    default: () => scrollPlugin_default
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

  // src/plugins/scrollPlugin.ts
  if (typeof window.CustomEvent !== "function") {
    const CustomEvent2 = function(typeArg, eventInitDict) {
      eventInitDict = eventInitDict || {
        bubbles: false,
        cancelable: false,
        detail: void 0
      };
      const evt = document.createEvent("CustomEvent");
      evt.initCustomEvent(
        typeArg,
        eventInitDict.bubbles,
        eventInitDict.cancelable,
        eventInitDict.detail
      );
      return evt;
    };
    CustomEvent2.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent2;
  }
  function delta(e) {
    return Math.max(-1, Math.min(1, e.wheelDelta || -e.deltaY));
  }
  var scroll = (e) => {
    e.preventDefault();
    const ev = new CustomEvent("increment", {
      bubbles: true
    });
    ev.delta = delta(e);
    getEventTarget(e).dispatchEvent(ev);
  };
  function scrollMonth(fp) {
    return (e) => {
      e.preventDefault();
      const mDelta = delta(e);
      fp.changeMonth(mDelta);
    };
  }
  function scrollPlugin() {
    return function(fp) {
      const monthScroller = scrollMonth(fp);
      return {
        onReady() {
          if (fp.timeContainer) {
            fp.timeContainer.addEventListener("wheel", scroll);
          }
          if (fp.yearElements) {
            fp.yearElements.forEach(
              (yearElem) => yearElem.addEventListener("wheel", scroll)
            );
          }
          if (fp.monthElements) {
            fp.monthElements.forEach(
              (monthElem) => monthElem.addEventListener("wheel", monthScroller)
            );
          }
          fp.loadedPlugins.push("scroll");
        },
        onDestroy() {
          if (fp.timeContainer) {
            fp.timeContainer.removeEventListener("wheel", scroll);
          }
          if (fp.yearElements) {
            fp.yearElements.forEach(
              (yearElem) => yearElem.removeEventListener("wheel", scroll)
            );
          }
          if (fp.monthElements) {
            fp.monthElements.forEach(
              (monthElem) => monthElem.removeEventListener("wheel", monthScroller)
            );
          }
        }
      };
    };
  }
  var scrollPlugin_default = scrollPlugin;
  return __toCommonJS(scrollPlugin_exports);
})();
