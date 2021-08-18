import React from 'react';
import { ResizeDashboard, ResizableWrapper } from 'components';
import './dashboard.scss';
import { LIST_CARD_1, RESIZE_OPTIONS } from './mockData';
import CardSettings from 'pages/MenuSettings/MenuSettings';

const Dashboard1 = () => (
  <div className='dashboard-1'>
    <CardSettings />
    <ResizeDashboard
      classExt='dashboard-1-0'
    >
      <ResizableWrapper
        width={200}
        height={200}
        { ...RESIZE_OPTIONS }
        resizable
        dragable={false}
      >
        <Item title={1} />
      </ResizableWrapper>
      <ResizableWrapper
        width={200}
        height={200}
        { ...RESIZE_OPTIONS }
        resizable
        dragable={false}
      >
        <Item title={2} />
      </ResizableWrapper>
      <ResizableWrapper
        width={200}
        height={200}
        { ...RESIZE_OPTIONS }
        resizable
        dragable={false}
      >
        <Item title={3} />
      </ResizableWrapper>
      <ResizableWrapper
        width={200}
        height={200}
        { ...RESIZE_OPTIONS }
        resizable
        dragable={false}
      >
        <Item title={4} />
      </ResizableWrapper>
    </ResizeDashboard>

    <ResizeDashboard
      classExt='dasboard-1-1'
    >
      {LIST_CARD_1.map((item) => (
        <ResizableWrapper
          key={item.id}
          width={item.width}
          height={item.height}
          { ...RESIZE_OPTIONS }
        >
          <Item title={item.title} />
        </ResizableWrapper>
      ))}
    </ResizeDashboard>

    <ResizeDashboard
      classExt='dashboard-1-2'
    >
      <ResizableWrapper
        width={400}
        height={200}
        { ...RESIZE_OPTIONS }
      >
        <Item title={1} />
      </ResizableWrapper>
      <ResizableWrapper
        width={200}
        height={200}
        { ...RESIZE_OPTIONS }
      >
        <Item title={2} />
      </ResizableWrapper>
      <ResizableWrapper
        width={400}
        height={200}
        { ...RESIZE_OPTIONS }
      >
        <Item title={3} />
      </ResizableWrapper>
      <ResizableWrapper
        width={200}
        height={200}
        { ...RESIZE_OPTIONS }
      >
        <Item title={4} />
      </ResizableWrapper>
      <ResizableWrapper
        width={200}
        height={200}
        { ...RESIZE_OPTIONS }
      >
        <Item title={5} />
      </ResizableWrapper>
      <ResizableWrapper
        width={200}
        height={200}
        { ...RESIZE_OPTIONS }
      >
        <Item title={6} />
      </ResizableWrapper>
      <ResizableWrapper
        width={200}
        height={200}
        { ...RESIZE_OPTIONS }
      >
        <Item title={7} />
      </ResizableWrapper>
    </ResizeDashboard>

  </div>
);

export default Dashboard1;

const Item = ({ title }) => (
  <div className='card-order dashboard-item-move'>
    <div className='card-order__parent'>
      <div className='card-order__title'>{title}</div>
    </div>
  </div>
);
