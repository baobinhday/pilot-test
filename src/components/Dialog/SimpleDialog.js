import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import './simpleDialog.scss';
import classNames from 'classnames';

function SimpleDialog(props) {
  const { onClose, open, title, classExt, children } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      className={classNames('simple-dialog', classExt)}
      onClose={handleClose}
      aria-labelledby="simple-dialog"
      open={open}
    >
      {!!title && (
        <DialogTitle
          disableTypography
          className="simple-dialog__header"
          onClose={handleClose}
        >
          <Typography variant="h6">{title}</Typography>
          {onClose ? (
            <IconButton
              className="simple-dialog__close"
              aria-label="close"
              onClick={onClose}
            >
              <CloseIcon />
            </IconButton>
          ) : null}
        </DialogTitle>
      )}
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}

SimpleDialog.defaultProps = {
  onClose: () => {},
  open: false,
  title: null,
  classExt: '',
};

export default SimpleDialog;
