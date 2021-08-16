import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
import { TABLE_TASK, LIST_CARD } from './config';
import './interactionDetail.scss';

const InteractionDetail = () => {
  const location = useLocation();
  const history = useHistory();
  const param = new URLSearchParams(location.search);
  const id = param.get('id');
  let dataResult = TABLE_TASK.filter((item) => item.id === id);
  if (!dataResult || !dataResult.length) {
    dataResult = LIST_CARD.filter((item) => item.id === id);
  }
  const data = dataResult && dataResult.length ? dataResult[0] : null;

  const onBack = () => {
    history.push({
      pathname: `/click`,
    });
  };
  return (
    <div className="interaction-detail">
      <div className="interaction-detail__title">
        <IconButton
          onClick={onBack}
          className="interaction-detail__back"
          aria-label="back"
        >
          <ChevronLeftIcon fontSize="small" />
        </IconButton>
        {(data && data.name) || ''}
      </div>
      <div className="interaction-detail__des">{(data && data.des) || ''}</div>
    </div>
  );
};

export default InteractionDetail;
