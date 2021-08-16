import React, { useRef } from "react";
import { useRefresh } from "muuri-react";
import { ResizableBox } from "react-resizable";
import { debounce } from "underscore";

const ResizableWrapper = ({ width, height, handleIcon, children }) => {

  const ref = useRef();
  const refresh = useRefresh();

  const refreshWithdebounce = debounce(
    () => requestAnimationFrame(refresh),
    50
  );

  const onResize = (e, { size }) => {
    ref.current.style.width = size.width + "px";
    ref.current.style.height = size.height + "px";

    refreshWithdebounce();
  }

  return (
    <div
      ref={ref}
      className="resize-wrapper"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div className="resize-wrapper__box">
        <ResizableBox
          width={width}
          height={height}
          minConstraints={[width, height]}
          onResize={onResize}
          handle={handleIcon}
          draggableOpts={{grid: [50, 50]}}
        >
          {children}
        </ResizableBox>
      </div>
    </div>
  );
};

// const ResizableWrapper = (Component, { width, height, handleIcon }) => {

//   return function WrappedComponent(props) {

//     const ref = useRef();
//     const refresh = useRefresh();

//     const refreshWithdebounce = debounce(
//       () => requestAnimationFrame(refresh),
//       50
//     );

//     const onResize = (e, { size }) => {
//       ref.current.style.width = size.width + "px";
//       ref.current.style.height = size.height + "px";

//       refreshWithdebounce();
//     }

  
//     return (
//       <div
//         ref={ref}
//         className="resize-wrapper"
//         style={{ width: `${width}px`, height: `${height}px` }}
//       >
//         <div className="resize-wrapper__box">
//           <ResizableBox
//             width={width}
//             height={height}
//             minConstraints={[width, height]}
//             onResize={onResize}
//             handle={handleIcon}
//             draggableOpts={{grid: [50, 50]}}
//           >
//             <Component {...props} />
//           </ResizableBox>
//         </div>
//       </div>
//     );
//   };
// };

export default ResizableWrapper;