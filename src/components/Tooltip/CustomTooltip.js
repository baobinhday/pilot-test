import { useState } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import "./customTooltip.scss";

const CustomTooltip = ({ children, ...other }) => {
  const [position, setPosition] = useState({ x: undefined, y: undefined });
  return (
    <Tooltip
      {...other}
      onMouseMove={e => setPosition({ x: e.pageX, y: e.pageY })}
        PopperProps={{
          anchorEl: {
            clientHeight: 0,
            clientWidth: 0,
            getBoundingClientRect: () => ({
              top: position.y,
              left: position.x,
              right: position.x,
              bottom: position.y,
              width: 0,
              height: 0,
            })
          }
        }}
    >
      {children}
    </Tooltip>
  );
};

export default CustomTooltip;