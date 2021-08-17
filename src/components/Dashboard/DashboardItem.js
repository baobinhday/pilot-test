import React from 'react';

const DashboardItem = ({ width, height, classExt, classHandle, children}) => (
  <div
    style={{
      width,
      height,
    }}
    className={`dashboard-item-wrapper ${classExt}`}
  >
    {children}
  </div>
);

DashboardItem.defaultProps = {
  classExt: '',
  width: '100%',
  height: '100%'
};

export default DashboardItem;