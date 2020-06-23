import { Application } from "./application";
import "../css/index.css";

(function iife() {
  new Application({
    showHelpers: true,
    showRays: true,
    helpers: ["floor", "axis"], //floor, axis, light
    showGUI: true,
  });
})();
