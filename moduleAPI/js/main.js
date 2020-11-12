// Imports
import { apiGet, loadMore } from './xml.js';
import { toggleNightMode } from './generalFunc.js'

// Function Calls
apiGet();
window.toggleNightMode = toggleNightMode;
window.loadMore = loadMore;
