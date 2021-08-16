import React from 'react';

const DashboardItem = ({ width, height, classExt, classHandle, children}) => (
  <div
    style={{
      width,
      height,
    }}
    className={`dashboard-item-wrapper ${classExt} ${classHandle}`}
  >
    {children}
  </div>
);

DashboardItem.defaultProps = {
  classExt: '',
  classHandle: '',
  width: '100%',
  height: '100%'
};

export default DashboardItem;