import { MenuItem, SubMenu } from 'react-contextmenu';
import ReactContextMenu from './ReactContextMenu';

const emptyFun = () => {};

const CustomContextMenu = ({ data, list, id }) => {
  const generateMenu = (menu, index) => {
    if (menu.subMenu) {
      return (
        <SubMenu hoverDelay={100} key={menu.id} title={menu.title}>
          {menu.subMenu.map((sub) => generateMenu(sub))}
        </SubMenu>
      );
    } else {
      return menu.isDivider ? (
        <MenuItem key={`divider_${index}`} divider />
      ) : (
        <MenuItem onClick={menu.onClick || emptyFun} data={data} key={menu.id}>
          {menu.title}
        </MenuItem>
      );
    }
  };

  return (
    <ReactContextMenu id={id}>
      {list.map((menu) => generateMenu(menu))}
    </ReactContextMenu>
  );
};
CustomContextMenu.defaultProps = {
  id: '000',
  list: [],
  data: {}
};

export default CustomContextMenu;
