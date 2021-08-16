import React from 'react';
import { ResizeDashboard, DashboardItem, ResizableWrapper } from 'components';
import './dashboard.scss';
import { LIST_CARD_1, LIST_CARD_2, RESIZE_OPTIONS } from './mockData';

const Dashboard1 = () => {
  const classMove0 = 'resize-item-wrapper-0';
  const classMove1 = 'resize-item-wrapper-1';
  const classMove2 = 'resize-item-wrapper-2';
  const listItemComponent = LIST_CARD_1.map((item) => (
    <DashboardItem
      key={item.id}
      id={item.id}
      width={item.width}
      height={item.height}
      classHandle={classMove1}
    >
      <Item title={item.title} />
    </DashboardItem>
  ));

  return (
    <div className='dashboard-1'>
      <ResizeDashboard
        listData={LIST_CARD_1}
        classExt='dashboard-1-0'
        classHandle={classMove0}
      >
        <ResizableWrapper
          width={200}
          height={200}
          { ...RESIZE_OPTIONS }
        >
          <DashboardItem
            key={1}
            id={1}
            classHandle={classMove0}
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
            key={2}
            id={2}
            classHandle={classMove0}
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
            classHandle={classMove0}
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
            key={4}
            id={4}
            classHandle={classMove0}
          >
            <Item title={4} />
          </DashboardItem>
        </ResizableWrapper>
      </ResizeDashboard>

      <ResizeDashboard
        listData={LIST_CARD_1}
        classExt='dasboard-1-1'
        classHandle={classMove1}
      >
        {listItemComponent}
      </ResizeDashboard>

      <ResizeDashboard
        listData={LIST_CARD_2}
        listItemComponent={listItemComponent}
        classExt='dashboard-1-2'
        classHandle={classMove2}
      >
        <DashboardItem
          key={1}
          id={1}
          width={400}
          height={200}
          classHandle={classMove2}
        >
          <Item title={1} />
        </DashboardItem>
        <DashboardItem
          key={2}
          id={2}
          width={200}
          height={200}
          classHandle={classMove2}
        >
          <Item title={2} />
        </DashboardItem>
        <DashboardItem
          key={3}
          id={3}
          width={400}
          height={200}
          classHandle={classMove2}
        >
          <Item title={3} />
        </DashboardItem>
        <DashboardItem
          key={4}
          id={4}
          width={200}
          height={200}
          classHandle={classMove2}
        >
          <Item title={4} />
        </DashboardItem>
        <DashboardItem
          key={5}
          id={5}
          width={200}
          height={200}
          classHandle={classMove2}
        >
          <Item title={5} />
        </DashboardItem>
        <DashboardItem
          key={6}
          id={6}
          width={200}
          height={200}
          classHandle={classMove2}
        >
          <Item title={6} />
        </DashboardItem>
        <DashboardItem
          key={7}
          id={7}
          width={200}
          height={200}
          classHandle={classMove2}
        >
          <Item title={7} />
        </DashboardItem>
      </ResizeDashboard>
    </div>
  );
};

export default Dashboard1;

const Item = ({ title }) => (
  <div className='card-order'>
    <div className='card-order__title'>{title}</div>
  </div>
);
