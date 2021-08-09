import React, { useCallback } from 'react';
import { ContextMenuTrigger } from 'react-contextmenu';
import PropTypes from 'prop-types';
import CustomTooltip from 'components/Tooltip/CustomTooltip';
import './nodeInteraction.scss';
import CustomContextMenu from './CustomContextMenu';

const collect = (props) => (props && props.data) || {};

const NodeInteraction = ({
  nodeClick,
  dataClickOutput,
  children,
  tooltipData,
  tooltipPlacement,
  contextMenu,
  customContextMenu,
  dataRightClickOutput,
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
    const { id } = contextMenu;
    const getAtt = (onClick, other) => ({
      onClick,
      ...other,
    });
    return (
      <>
        <ContextMenuTrigger
          renderTag={C}
          id={id}
          holdToDisplay={1000}
          attributes={getAtt(handleClick, other)}
          collect={collect}
          data={dataRightClickOutput}
        >
          {children}
        </ContextMenuTrigger>

        {!customContextMenu && <CustomContextMenu data={dataRightClickOutput} { ...contextMenu } />}
      </>
    );
  } else {
    return (
      <C onClick={handleClick} {...other}>
        {tooltipData ? (
          <CustomTooltip tooltipComponent={<div>1</div>} title={tooltipData}>{children}</CustomTooltip>
        ) : (
          children
        )}
      </C>
    );
  }
};

NodeInteraction.propTypes = {
  contextMenu: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    list: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        title: PropTypes.string,
        onClick: PropTypes.func,
        subMenu: PropTypes.array,
        isDivider: PropTypes.bool,
      })
    ),
  }),
  nodeTag: PropTypes.string,
  nodeClick: PropTypes.func,
  tooltipData: PropTypes.string,
  dataClickOutput: PropTypes.any,
  dataRightClickOutput: PropTypes.any,
  customContextMenu: PropTypes.bool,
};

NodeInteraction.defaultProps = {
  nodeTag: 'div',
  nodeClick: null,
  tooltipData: null,
  dataClickOutput: {},
  dataRightClickOutput: {},
  contextMenu: null,
  customContextMenu: false,
};

export default NodeInteraction;
