/* eslint-disable no-undef */
import { toggleDropdown } from "./src/js/utils/interact.js";
import { highlightActiveLink } from "./src/js/utils/interact.js";

// Set initial hash to #home
window.location.hash = "home";

// Main execution
toggleDropdown();
highlightActiveLink()