import React from 'react';
import { MuuriComponent } from 'muuri-react';
import './resizeDashboard.scss';

const ResizeDashboard = ({
  children,
  classExt,
  customOptions,
  classHandle,
  customRef
}) => (
  <div className={`resize-dashboard-wrapper ${classExt}`} ref={customRef}>
    <MuuriComponent
      {...options}
      {...customOptions}
      dragStartPredicate={{ handle: `.${classHandle}` }}
    >
      {children}
    </MuuriComponent>
  </div>
);

ResizeDashboard.defaultProps = {
  classExt: '',
  customOptions: {},
  classHandle: 'dashboard-item-move'
};

export default ResizeDashboard;

const options = {
  dragSortHeuristics: {
    sortInterval: 70,
    minDragDistance: 5,
    minBounceBackAngle: Math.PI / 2,
  },
  dragSortPredicate: {
    threshold: 40,
    action: 'move',
    migrateAction: 'move',
  },
  dragRelease: {
    duration: 200,
    easing: 'ease-out',
  },
  dragEnabled: true,
  dragContainer: document.body,
  // The placeholder of an item that is being dragged.
  dragPlaceholder: {
    enabled: true,
    createElement: function (item) {
      // The element will have the Css class '.muuri-item-placeholder'.
      return item.getElement().cloneNode(true);
    },
  },
  layout: {
    fillGaps: true,
  },
  layoutOnResize: true,
  layoutDuration: 200,
  layoutEasing: 'ease',
};
