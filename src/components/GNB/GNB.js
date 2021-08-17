import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import MenuBar from './MenuDropdown';
import './gnb.scss';
import classNames from 'classnames';

const MENU = [
  {
    id: 'menu-1',
    title: 'Menu 1',
    url: null,
    sub: [
      {
        id: 'sub-menu-101',
        title: 'Sub menu 101',
        url: '/',
      },
      {
        id: 'sub-menu-102',
        title: 'Sub menu 102',
        url: '/',
      },
    ],
  },
  {
    id: 'menu-2',
    title: 'Menu 2',
    sub: [
      {
        id: 'sub-menu-201',
        title: 'Sub menu 201',
        url: '/',
      },
      {
        id: 'sub-menu-202',
        title: 'Sub menu 202',
        url: '/',
      },
    ],
  },
  {
    id: 'menu-3',
    title: 'Menu 3',
    sub: [
      {
        id: 'sub-menu-301',
        title: 'Sub menu 301',
        url: '/',
      },
      {
        id: 'sub-menu-302',
        title: 'Sub menu 302',
        url: '/',
      },
    ],
  },
  {
    id: 'menu-4',
    title: 'Menu 4',
    url: '/click',
  },
];

const GNB = ({ listMenu, classExt }) => {
  const [stateMenu, setStateMenu] = useState({});
  const [openMegaMenu, setOpenMegaMenu] = useState(false);
  const history = useHistory();

  const onToggleMenu = (menuItem) => (action) => {
    if (menuItem.sub && menuItem.sub.length && action === 'hover') {
      setStateMenu((prevState) => ({
        ...stateMenu,
        [menuItem.id]: !prevState[menuItem.id],
      }));
    } else if (menuItem.url && action === 'click') {
      history.push(menuItem.url);
    }
  };

  const onClickSubMenu = (menuItem) => () => {
    if (openMegaMenu) {
      setOpenMegaMenu((prev) => !prev);
    }
  };

  const onClickMegaMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenMegaMenu((prev) => !prev);
  };

  useEffect(() => {
    setStateMenu({});
  }, [openMegaMenu]);

  return (
    <div className={classNames('gnb-wrapper', classExt)}>
      <div className='gnb__logo'>Logo</div>
      <div
        className={classNames(
          'gnb__menu',
          openMegaMenu ? 'gnb__menu--mega' : ''
        )}
      >
        {listMenu.map((menu) => (
          <MenuBar
            key={menu.id}
            {...menu}
            isOpen={stateMenu[menu.id]}
            onToggle={onToggleMenu(menu)}
            onClickSubMenu={onClickSubMenu}
            openMegaMenu={openMegaMenu}
          />
        ))}
      </div>
      <div className='gnb__mega'>
        <Button onClick={onClickMegaMenu}>Mega menu</Button>
      </div>
      <div className='gnb__info'>User Info</div>
    </div>
  );
};

GNB.defaultProps = {
  listMenu: MENU,
  classExt: '',
};

export default GNB;
