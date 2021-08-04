import React, { useCallback } from 'react';
import { ContextMenu, MenuItem, ContextMenuTrigger, SubMenu } from "react-contextmenu";
import PropTypes from 'prop-types';
import CustomTooltip from 'components/Tooltip/CustomTooltip';
import "./nodeClick.scss";

const emptyFun = () => {};

const NodeClick = ({
  nodeClick,
  dataClickOutput,
  children,
  tooltipData,
  tooltipPlacement,
  contextMenu,
  nodeTag: C,
  ...other
}) => {
  const handleClick = useCallback(
    (e) => {
      if (nodeClick) {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        nodeClick(e, dataClickOutput);
      }
    },
    [nodeClick, dataClickOutput]
  );

  if (contextMenu) {
    const { id, list } = contextMenu;
    const generateContextMenu = (listMenu) => {
      const generateMenu = (menu, index) => {
        if (menu.subMenu) {
          return (
            <SubMenu key={menu.id} title={menu.title}>
              {menu.subMenu.map(sub => generateMenu(sub))}
            </SubMenu>
          )
        } else {
          return menu.isDivider ? (
            <MenuItem key={`divider_${index}`} divider />
          ) : (
            <MenuItem
              onClick={menu.onClick || emptyFun}
              data={menu}
              key={menu.id}
            >
              {menu.title}
              </MenuItem>
          )
        }
      };
      return (
        <ContextMenu id={id}>
          {listMenu.map(menu => generateMenu(menu))}
        </ContextMenu>
      );
    };
    const getAtt = (onClick, other) => ({
      onClick,
      ...other
    });
    return (
      <>
        <ContextMenuTrigger
          renderTag={C}
          id={id}
          attributes={getAtt(handleClick, other)}
        >
          {children}
        </ContextMenuTrigger>

        {generateContextMenu(list)}
      </>
    );
  } else {
    return (
      <C onClick={handleClick} {...other}>
        {tooltipData ? (
          <CustomTooltip title={tooltipData}>{children}</CustomTooltip>
        ) : (
          children
        )}
      </C>
    );
  }

};

NodeClick.propTypes = {
  contextMenu: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    list: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
      title: PropTypes.string,
      onClick: PropTypes.func,
      subMenu: PropTypes.array,
      isDivider: PropTypes.bool
    }))
  }),
  nodeTag: PropTypes.string,
  nodeClick: PropTypes.func,
  tooltipData: PropTypes.string,
  dataClickOutput: PropTypes.any
};

NodeClick.defaultProps = {
  nodeTag: 'div',
  nodeClick: null,
  tooltipData: null,
  dataClickOutput: {},
  contextMenu: null
};

export default NodeClick;
