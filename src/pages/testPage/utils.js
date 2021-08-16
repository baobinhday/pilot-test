import { useCallback } from "react";

// Return the filter method.
export function useFilter(value, search) {
  return useCallback(
    function(data) {
      var isSearchMatch = !search
        ? true
        : data.title.toLowerCase().indexOf(search) > -1;
      var isFilterMatch = value === "all" ? true : data.color === value;
      return isSearchMatch && isFilterMatch;
    },
    [value, search]
  );
}

// Return one of the values of the array.
export function oneOf(array) {
  return array[Math.floor(Math.random() * Math.floor(array.length))];
}

let uuid = 3;
// Generate 3 items.
export const generateItems = (num, nextWidth) => {
  const items = [];
  console.log(num)
  for (let i = 0; i < 1; i++) {
    const color = oneOf(["red", "green", "blue"]);
    const width = nextWidth * 100;
    const height = 100;

    //const title = oneOf(alphabet) + oneOf(alphabet);
    const title = num || 1;
    const id = uuid++;

    items.push({ id, color, width, height, title });
  }

  return items;
}

// Grid static options.
export const options = {
  dragSortHeuristics: {
    sortInterval: 70,
    minDragDistance: 5,
    minBounceBackAngle: Math.PI / 2,
  },
  // dragStartPredicate: () => false,
  dragSortPredicate: {
    threshold: 40,
    action: 'move',
    migrateAction: 'move'
  },
  dragRelease: {
    duration: 200,
    easing: "ease-out"
  },
  dragEnabled: true,
  dragContainer: document.body,
  // The placeholder of an item that is being dragged.
  dragPlaceholder: {
    enabled: true,
    createElement: function(item) {
      // The element will have the Css class ".muuri-item-placeholder".
      return item.getElement().cloneNode(true);
    }
  },
  layout: {
    fillGaps: true,
    height: 1000
    // horizontal: true,
  },
  layoutOnResize: true,
  layoutDuration: 200,
  layoutEasing: 'ease',
};
