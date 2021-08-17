/* React */
import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';

import { makeStyles } from '@material-ui/core/styles';
/* Muuri-react */
import { MuuriComponent } from 'muuri-react';
/* Utils & components */
import { useFilter, generateItems, options } from './utils';
import { Footer, Button, Demo } from './components';
/* Style */
import './style.scss';
import { ResizableWrapper } from 'components';

const useStyles = makeStyles(() => ({
  cardItem: props => ({
    width: props.width,
    height: props.height
  })
}));

// App.
const App = () => {
  // Items state.
  const [nextWidth, setNextWidth] = useState(1);
  const [items, setItems] = useState(generateItems(1, nextWidth));
  const listItemComponent = items.map(({ id, color, title, width, height }) => (
    <ResizableWrapper
      key={id}
      id={id}
      height={height}
      width={width}
    >
      <Item
        color={color}
        title={title}
      />
    </ResizableWrapper>
  ));
  // const listItemComponent = items.map(({ id, color, title, width, height }) => (
  //   <ResizeItemTest
  //     key={id}
  //     id={id}
  //     color={color}
  //     title={title}
  //     width={width}
  //     height={height}
  //   />
  // ));

  return (
    <Demo>
      <Dashboard
        items={items}
        listItemComponent={listItemComponent}
      />
      <Footer>
        <input type='number' value={nextWidth} onChange={e => setNextWidth(e.target.value)} />
        <Button onClick={() => setItems(items.concat(generateItems(items.length + 1, nextWidth)))} />
      </Footer>
    </Demo>
  );
};

const Dashboard = ({ listItemComponent }) => {
  //
  return (
    <MuuriComponent
      {...options}
      dragStartPredicate={{ handle: '.card' }}
    >
      {listItemComponent}
    </MuuriComponent>
  );
};

Dashboard.defaultsProps = {
  isResize: true,
  listItemComponent: []
};

// const ResizeItemTest = ResizableWrapper(
//   ({ color, title, remove }) => {
//     return (
//       <Item
//         color={color}
//         title={title}
//         remove={remove}
//       />
//     )
//   },
//   {
//     width: 200,
//     height: 200
//   }
// );

const Item = ({ color, title, remove }) => (
  <div className='card-wrapper'>
    <div className={`card ${color}`}>
      <div className='card-title'>{title}</div>
      <div className='card-remove'>
        <i className='material-icons' onMouseDown={remove}>
          &#xE5CD;
        </i>
      </div>
    </div>
  </div>
)

const ItemGrid = ({ id, color, title, remove, width, height }) => {
  const classes = useStyles({ width, height });

  useEffect(() => {
    window.$(`#card-id-${id}`).resizable({
      grid: 50
    });
  }, []);
  return (
    <div className={`card-wrapper ${classes.cardItem}`} id={`card-id-${id}`}>
      <div className={`card ${color}`} >
        <div className='card-title'>{title}</div>
        {/* <div className='card-remove'>
          <i className='material-icons' onMouseDown={remove}>
            &#xE5CD;
          </i>
        </div> */}
      </div>
    </div>
  );
};

export default App;