import React, { useRef, useState } from 'react';
import { useRefresh } from 'muuri-react';
import { ResizableBox } from 'react-resizable';
import { debounce } from 'underscore';
import './resizableWrapper.scss';

const ResizableWrapper = ({ width, height, handleIcon, classWrapper, gap, children, ...others }) => {

  const ref = useRef();
  const resizeRef = useRef();
  const refresh = useRefresh();

  const [initSize, setInitSize] = useState({
    width, height
  });
  const [, setResizing] = useState(false);

  const refreshWithDebounce = debounce(
    () => requestAnimationFrame(refresh),
    20
  );

  const calculatorSize = (size) => {
    let newWidth = size.width === initSize.width ? initSize.width : Math.floor((size.width + gap[0]) / gap[0]) * gap[0];
    let newHeight = size.height === initSize.height ? initSize.height : Math.floor((size.height + gap[1]) / gap[1]) * gap[1];
    newWidth = newWidth < others.minConstraints[0] ? others.minConstraints[0] : newWidth;
    newHeight = newHeight < others.minConstraints[1] ? others.minConstraints[1] : newHeight;
    return {
      width: newWidth,
      height: newHeight
    };
  };

  const onResize = (e, { size }) => {
    refreshWithDebounce();
    if (ref.current) {
      const newSize = calculatorSize(size);
      ref.current.style.width = newSize.width + 'px';
      ref.current.style.height = newSize.height + 'px';
    }
  };

  const onResizeStop = (e, { size }) => {
    if (ref.current && resizeRef.current) {
      const newSize = calculatorSize(size);
      setInitSize({
        width: newSize.width,
        height: newSize.height
      });
      if (resizeRef.current.state.width < newSize.width) {
        resizeRef.current.state.width = newSize.width;
      }
      if (resizeRef.current.state.height < newSize.height) {
        resizeRef.current.state.height = newSize.height;
      }
      setResizing(false);
    }
  };

  const onResizeStart = (e, { size }) => {
    setResizing(true);
  };


  return (
    <div
      ref={ref}
      className={`resize-wrapper ${classWrapper}`}
      style={{ width, height }}
    >
      <div className='resize-wrapper__box'>
        <ResizableBox
          ref={resizeRef}
          width={initSize.width}
          height={initSize.height}
          onResize={onResize}
          handle={handleIcon}
          onResizeStop={onResizeStop}
          onResizeStart={onResizeStart}
          { ...others }
        >
            <div className='react-resizable__item'>
              {children}
            </div>
        </ResizableBox>
      </div>
      <div className='react-resizable__placehover'><div className='react-resizable__placehover__item' /></div>
    </div>
  );
};

ResizableWrapper.defaultProps = {
  minConstraints: [50, 50],
  maxConstraints: [1000, 1000],
  width: '100',
  height: '100',
  resizeHandles: ['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's'],
  classWrapper: '',
  gap: [100, 100]
};

export default ResizableWrapper;