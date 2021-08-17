import { useRef, useState } from 'react';

const useAsyncState = (value) => {
  const ref = useRef(value);
  const [, forceRender] = useState(false);
  const updateState = (newValue) => {
    ref.current = newValue;
    forceRender((r) => !r);
  };
  return [ref.current, updateState];
};

export default useAsyncState;
