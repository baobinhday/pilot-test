import React from 'react';

const DashboardItem = ({ id, width, height, classHandle, children}) => (
  <div
    style={{
      width,
      height,
    }}
    className={`resize-item-wrapper ${classHandle}`}
  >
    {children}
  </div>
);

export default DashboardItem;