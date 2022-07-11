// Draggable - a lightweight, responsive, modern drag & drop library: https://shopify.github.io/draggable/

import '@shopify/draggable/lib/draggable.bundle.js';
import '@shopify/draggable/lib/draggable.bundle.legacy.js';
import '@shopify/draggable/lib/draggable.js';
import Sortable from '@shopify/draggable/lib/sortable.js';
window.Sortable = Sortable;
import Droppable from '@shopify/draggable/lib/droppable.js';
window.Droppable = Droppable;
import Swappable from '@shopify/draggable/lib/swappable.js';
window.Swappable = Swappable;
import '@shopify/draggable/lib/plugins.js';
import '@shopify/draggable/lib/plugins/collidable.js';
import '@shopify/draggable/lib/plugins/resize-mirror.js';
import '@shopify/draggable/lib/plugins/snappable.js';
import '@shopify/draggable/lib/plugins/swap-animation.js';
