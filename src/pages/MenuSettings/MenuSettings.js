import React, { useState } from 'react';
import { Button, Popover } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Dropdown } from 'components';
import './menuSettings.scss';

const MenuSettings = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleApply = () => {
    setAnchorEl(null);
  };

  const handleCancel = () => {
    setAnchorEl(null);
  };

  const open = !!anchorEl;
  const id = open ? 'popover-menu' : undefined;

  return (
    <span className="popover-menu-wrapper">
      <i className="material-icons menu-icon">
        <MoreHorizIcon aria-describedby={id} onClick={handleClick} />
      </i>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleCancel}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <div className="menu-popover">
          <div className="menu-popover__actions">
            <span className="menu-popover__actions__action">Action</span>
            <span className="menu-popover__actions__action">Action</span>
          </div>
          <div className="menu-popover__dropdowns">
            <span className="menu-popover__dropdowns__title">Value</span>
            <Dropdown
              classExt="menu-popover__dropdowns__dropdown"
              value={1}
              listItems={[
                {
                  id: 1,
                  value: 1,
                  text: 'Dropdown list item',
                },
                {
                  id: 2,
                  value: 2,
                  text: 'Item 1',
                },
              ]}
            />
            <span className="menu-popover__dropdowns__title">Value</span>
            <Dropdown
              classExt="menu-popover__dropdowns__dropdown"
              value={1}
              listItems={[
                {
                  id: 1,
                  value: 1,
                  text: 'Dropdown list item',
                },
                {
                  id: 2,
                  value: 2,
                  text: 'Item 2',
                },
              ]}
            />
          </div>
          <div className="menu-popover__buttons">
            <Button variant="outlined" color="primary" onClick={handleCancel}>
              Cancel
            </Button>
            <Button variant="contained" color="primary" onClick={handleApply}>
              Apply
            </Button>
          </div>
        </div>
      </Popover>
    </span>
  );
};

MenuSettings.defaultProps = {};

export default MenuSettings;
