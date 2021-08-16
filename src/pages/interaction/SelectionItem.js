import React from 'react';
import classNames from 'classnames';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

const SelectionItem = ({ title, sub, des, classExt, onClose }) => (
  <div
    className={classNames(
      'selected-item',
      classExt,
      des ? 'selected-item--show' : 'selected-item--hidden'
    )}
  >
    <div className="selected-item__header">
      <IconButton
        onClick={onClose}
        className="selected-item__close"
        aria-label="close"
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </div>
    <div className="selected-item__content">
      <div className="selected-item__title">{title}</div>
      <div className="selected-item__sub">{sub}</div>
      <div className="selected-item__des">{des}</div>
    </div>
    <IconButton className="selected-item__more" aria-label="settings">
      <MoreVertIcon />
    </IconButton>
  </div>
);

SelectionItem.defaultProps = {
  title: '',
  sub: '',
  des: '',
  classExt: '',
  onClose: () => {},
};
export default SelectionItem;
