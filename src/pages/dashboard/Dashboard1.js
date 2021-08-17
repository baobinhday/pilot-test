import React from 'react';
import { ResizeDashboard, DashboardItem, ResizableWrapper } from 'components';
import './dashboard.scss';
import { LIST_CARD_1, RESIZE_OPTIONS } from './mockData';

const Dashboard1 = () => (
  <div className='dashboard-1'>
    <ResizeDashboard
      classExt='dashboard-1-0'
    >
      <ResizableWrapper
        width={200}
        height={200}
        { ...RESIZE_OPTIONS }
      >
        <DashboardItem
          id={1}
        >
          <Item title={1} />
        </DashboardItem>
      </ResizableWrapper>
      <ResizableWrapper
        width={200}
        height={200}
        { ...RESIZE_OPTIONS }
      >
        <DashboardItem
          id={2}
        >
          <Item title={2} />
        </DashboardItem>
      </ResizableWrapper>
      <ResizableWrapper
        width={200}
        height={200}
        { ...RESIZE_OPTIONS }
      >
        <DashboardItem
          key={3}
          id={3}
        >
          <Item title={3} />
        </DashboardItem>
      </ResizableWrapper>
      <ResizableWrapper
        width={200}
        height={200}
        { ...RESIZE_OPTIONS }
      >
        <DashboardItem
          id={4}
        >
          <Item title={4} />
        </DashboardItem>
      </ResizableWrapper>
    </ResizeDashboard>

    <ResizeDashboard
      classExt='dasboard-1-1'
    >
      {LIST_CARD_1.map((item) => (
        <DashboardItem
          key={item.id}
          id={item.id}
          width={item.width}
          height={item.height}
        >
          <Item title={item.title} />
        </DashboardItem>
      ))}
    </ResizeDashboard>

    <ResizeDashboard
      classExt='dashboard-1-2'
    >
      <DashboardItem
        id={1}
        width={400}
        height={200}
      >
        <Item title={1} />
      </DashboardItem>
      <DashboardItem
        id={2}
        width={200}
        height={200}
      >
        <Item title={2} />
      </DashboardItem>
      <DashboardItem
        id={3}
        width={400}
        height={200}
      >
        <Item title={3} />
      </DashboardItem>
      <DashboardItem
        id={4}
        width={200}
        height={200}
      >
        <Item title={4} />
      </DashboardItem>
      <DashboardItem
        id={5}
        width={200}
        height={200}
      >
        <Item title={5} />
      </DashboardItem>
      <DashboardItem
        key={6}
        id={6}
        width={200}
        height={200}
      >
        <Item title={6} />
      </DashboardItem>
      <DashboardItem
        id={7}
        width={200}
        height={200}
      >
        <Item title={7} />
      </DashboardItem>
    </ResizeDashboard>
  </div>
);

export default Dashboard1;

const Item = ({ title }) => (
  <div className='card-order dashboard-item-move'>
    <div className='card-order__title'>{title}</div>
  </div>
);
