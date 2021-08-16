import React, { useEffect, useRef, useState, useCallback } from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import './menuDropdown.scss';
import classNames from 'classnames';

const MenuDropdown = ({
  id,
  title,
  onClickSubMenu,
  openMegaMenu,
  onToggle,
  isOpen,
  sub,
}) => {
  const anchorRef = useRef(null);

  const handleClose = useCallback(
    (event) => {
      if (openMegaMenu) return;
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }
      onToggle();
    },
    [openMegaMenu]
  );

  const handleListKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      onToggle();
    }
  };

  const onClickMenu = () => {
    onToggle('click');
  };

  const onMouseOver = useCallback(() => {
    if (openMegaMenu) return;
    if (!isOpen) onToggle('hover');
  }, [openMegaMenu, isOpen]);

  const onMouseOut = useCallback(
    (event) => {
      if (openMegaMenu) return;
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        if (isOpen) {
          onToggle('hover');
        }
      }
    },
    [openMegaMenu, isOpen]
  );

  const open = isOpen || openMegaMenu;
  return (
    <div
      ref={anchorRef}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      className={classNames('menu-item', open ? 'menu-item--active' : '')}
    >
      <div className="menu-item__header">
        <Button
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          className="menu-item__header__title"
          onClick={onClickMenu}
        >
          {title}
        </Button>
        {!!(sub && sub.length) && (
          <Popper
            className="menu-item__popover"
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                timeout={50}
                style={{
                  transformOrigin:
                    placement === 'bottom' ? 'center top' : 'center bottom',
                }}
              >
                <div className="menu-item__sub">
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={isOpen}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      {sub.map((item) => (
                        <MenuItem
                          className="menu-item__child"
                          key={item.id}
                          onClick={onClickSubMenu(item.id)}
                        >
                          {item.title}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </div>
              </Grow>
            )}
          </Popper>
        )}
      </div>
    </div>
  );
};

MenuDropdown.defaultProps = {
  id: '-1',
  title: '',
  sub: [],
  onClickSubMenu: () => {},
  onToggle: () => {},
  isOpen: false,
  openMegaMenu: false,
};

export default MenuDropdown;
