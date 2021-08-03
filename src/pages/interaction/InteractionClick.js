import { useState } from 'react';
import { useHistory } from "react-router-dom";

import "./interactionClick.scss";
import CustomTable from '../../components/Table/CustomTable';
import SimpleDialog from '../../components/Dialog/SimpleDialog';
import CustomRadioGroup from '../../components/Radio/CustomRadioGroup';
import SelectionItem from './SelectionItem';
import CustomCard from '../../components/Card/CustomCard';
import { LIST_CARD, RADIO_OPTIONS, TABLE_HEADER, TABLE_TASK } from './config';

const InteractionClick = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedPopupItem, setSelectedPopupItem] = useState(null);
  const [usePopup, toggleUsePopup] = useState(true);
  const history = useHistory();

  const handleClickRow = (item) => {
    setSelectedRow(item);
  };

  const handleClickCard = (item) => {
    setSelectedCard(item);
  };

  const togglePopup = (item) => (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (usePopup) {
      setSelectedPopupItem(item);
    } else {
      handleOpenUrl(item);
    }
  }

  const handleOpenUrl = (item) => {
    history.push({
      pathname: "detail",
      state: {
        data: item
      }
    })
  }

  const tableRows = TABLE_TASK.map(item => ({
    ...item,
    id: item.name,
    name: <span className="type-click" onClick={togglePopup(item)}>{item.name}</span>
  }));

  const listCard = LIST_CARD.map(item => ({
    ...item,
    title: <span className="type-click" onClick={togglePopup(item)}>{item.name}</span>,
    sub: item.status,
    id: item.name,
  }))
  return (
    <>
      <div className="interation-click">
        <CustomRadioGroup
          options={RADIO_OPTIONS}
          title="Open by"
          value={usePopup ? RADIO_OPTIONS[0].value : RADIO_OPTIONS[1].value}
          handleChange={() => { usePopup ? toggleUsePopup(false) : toggleUsePopup(true) }}
          classExt="interation-click__select-type"
        />
        <div className="table-zone">
          <div className="table-item">
            <CustomTable
              header={TABLE_HEADER}
              rows={tableRows}
              onRowClick={handleClickRow}
            />
          </div>
          <SelectionItem
            title="Selected row"
            sub="Additional description"
            des={(selectedRow && selectedRow.des) || ""}
          />
        </div>
        <div className="card-zone">
          <div className="card-item">
            {listCard.map(card => (
              <CustomCard
                key={card.name}
                card={card}
                onClickCard={handleClickCard}
              >
                <div className="card-item__des">{(card && card.des) || ""}</div>
              </CustomCard>
            ))}
          </div>
          <SelectionItem
            title="Selected card"
            sub="Additional description"
            des={(selectedCard && selectedCard.des) || ""}
          />
        </div>
      </div>
      <SimpleDialog
        open={!!selectedPopupItem}
        onClose={togglePopup(null)}
        title="Dialog"
        classExt="interation-click__dialog"
      >
        <div className="selected-popup-item__des">{(selectedPopupItem && selectedPopupItem.des) || ""}</div>
      </SimpleDialog>
    </>
  );
};

InteractionClick.defaultProps = {
}
export default InteractionClick;