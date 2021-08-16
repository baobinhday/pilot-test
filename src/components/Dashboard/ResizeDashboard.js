import React from 'react';
import { MuuriComponent } from 'muuri-react';
import './/resizeDashboard.scss';

const ResizeDashboard = ({ listData, listItemComponent, classExt, customOptions }) => {
  const children = listData.map(({ id, width, height }, index) => (
    <div
      key={id}
      style={{
        width,
        height
      }}
      className="resize-item-wrapper"
    >
      {listItemComponent[index]}
    </div>
  ));
  return (
    <div className={`resize-dashboard-wrapper ${classExt}`}>
      <MuuriComponent
        { ...options }
        { ...customOptions }
        dragStartPredicate={{ handle: ".resize-item-wrapper" }}
      >
        {children}
      </MuuriComponent>
    </div>
  );
};

ResizeDashboard.defaultsProps = {
  classExt: "",
  listData: [],
  listItemComponent: [],
  customOptions: {}
};

export default ResizeDashboard;

const options = {
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