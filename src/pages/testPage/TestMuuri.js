/* React */
import React, { useState } from "react";
import ReactDom from "react-dom";
/* Muuri-react */
import { MuuriComponent } from "muuri-react";
/* Utils & components */
import { useFilter, generateItems, options } from "./utils";
import { Footer, Button, Demo } from "./components";
/* Style */
import "./style.scss";
import { ResizableWrapper } from "components";

// App.
const App = () => {
  // Items state.
  const [nextWidth, setNextWidth] = useState(1);
  const [items, setItems] = useState(generateItems(1, nextWidth));

  const listItemComponent = items.map(({ id, color, title, width, height }) => (
    <ResizeItemTest
      key={id}
      color={color}
      title={title}
      width={width}
      height={height}
    />
  ));

  return (
    <Demo>
      <Dashboard
        items={items}
        listItemComponent={listItemComponent}
      />
      <Footer>
        <input type="number" value={nextWidth} onChange={e => setNextWidth(e.target.value)} />
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
      dragStartPredicate={{ handle: ".card-wrapper" }}
    >
      {listItemComponent}
    </MuuriComponent>
  );
};

Dashboard.defaultsProps = {
  isResize: true,
  listItemComponent: []
};

const ResizeItemTest = ResizableWrapper(
  ({ color, title, remove }) => {
    return (
      <Item
        color={color}
        title={title}
        remove={remove}
      />
    )
  },
  {
    width: 200,
    height: 200
  }
);
// const ResizeItem = ResizableWrapper(
//   ({ color, title, remove }) => {
//     return (
//       <div className="card-wrapper">
//         <div className={`card ${color}`}>
//           <div className="card-title">{title}</div>
//           <div className="card-remove">
//             <i className="material-icons" onMouseDown={remove}>
//               &#xE5CD;
//             </i>
//           </div>
//         </div>
//       </div>
//     )
//   },
//   {
//     width: 200,
//     height: 200
//   }
// );

const Item = ({ color, title, remove }) => (
  <div className="card-wrapper">
    <div className={`card ${color}`}>
      <div className="card-title">{title}</div>
      <div className="card-remove">
        <i className="material-icons" onMouseDown={remove}>
          &#xE5CD;
        </i>
      </div>
    </div>
  </div>
)

export default App;