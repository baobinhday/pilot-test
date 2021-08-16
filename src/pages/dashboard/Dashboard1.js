import React from 'react';
import { ResizeDashboard } from 'components'
import './dashboard.scss';
import { LIST_CARD_1, LIST_CARD_2 } from './mockData';


const Dashboard1 = () => {
  const listItemComponent = LIST_CARD_1.map(item => (
    <Item
      key={item.id}
      title={item.title}
    />
  ))
  return (
    <div className="dashboard-1">
      <ResizeDashboard
        listData={LIST_CARD_1}
        listItemComponent={listItemComponent}
      />
      <ResizeDashboard
        listData={LIST_CARD_2}
        listItemComponent={listItemComponent}
      />
    </div>
  );
};

export default Dashboard1;

const Item = ({ title }) => (
  <div className="card-order">
    <div className="card-order__title">{title}</div>
  </div>
)