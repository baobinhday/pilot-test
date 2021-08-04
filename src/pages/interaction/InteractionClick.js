import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './interactionClick.scss';
import {
  CustomTable,
  SimpleDialog,
  CustomRadioGroup,
  CustomCard,
  NodeInteraction,
} from 'components';

import SelectionItem from './SelectionItem';
import {
  LIST_CARD,
  RADIO_OPTIONS,
  TABLE_HEADER,
  TABLE_TASK,
  CONTEXT_ROW_MENU,
  CONTEXT_CARD_MENU,
  CONTEXT_TABLE
} from './config';

const InteractionClick = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedPopupItem, setSelectedPopupItem] = useState(null);
  const [usePopup, toggleUsePopup] = useState(true);
  const history = useHistory();

  const handleClickRow = (item) => {
    setSelectedRow(item);
  };

  const handleClickCard = (e, item) => {
    setSelectedCard(item);
  };

  const togglePopup = (e, item) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (usePopup) {
      setSelectedPopupItem(item);
    } else {
      handleOpenUrl(item);
    }
  };

  const onCloseRowPanel = () => {
    setSelectedRow(null);
  };

  const onCloseCardPanel = () => {
    setSelectedCard(null);
  };

  const handleOpenUrl = (item) => {
    history.push({
      pathname: `/detail`,
      search: `?id=${item.id}`,
    });
  };

  const tableRows = TABLE_TASK.map((item) => ({
    ...item,
    rawname: item.name,
    name: (
      <NodeInteraction
        className="type-click"
        nodeClick={togglePopup}
        nodeTag="span"
        dataClickOutput={item}
        key={item.id}
      >
        {item.name}
      </NodeInteraction>
    ),
  }));

  const listCard = LIST_CARD.map((item) => ({
    ...item,
    title: (
      <NodeInteraction
        className="type-click"
        nodeClick={togglePopup}
        nodeTag="span"
        dataClickOutput={item}
        key={`title_${item.id}`}
      >
        {item.name}
      </NodeInteraction>
    ),
    sub: item.status,
  }));
  const genCardContextMenu = (cardContextMenu, uniId) => ({
    ...cardContextMenu,
    id: `${uniId}-${cardContextMenu.id}`
  });
  return (
    <>
      <div className="interation-click">
        <CustomRadioGroup
          options={RADIO_OPTIONS}
          title="Open by"
          value={usePopup ? RADIO_OPTIONS[0].value : RADIO_OPTIONS[1].value}
          handleChange={() => {
            usePopup ? toggleUsePopup(false) : toggleUsePopup(true);
          }}
          classExt="interation-click__select-type"
        />
        <div className="table-zone">
          <NodeInteraction
            nodeTag="div"
            className="table-item"
            contextMenu={CONTEXT_TABLE}
          >
            <span className="interation-click__title">Table viewer</span>
            <CustomTable
              header={TABLE_HEADER}
              rows={tableRows}
              onRowClick={handleClickRow}
              contextMenu={CONTEXT_ROW_MENU}
            />
          </NodeInteraction>
          <SelectionItem
            title="Selected row"
            sub="Additional description"
            des={(selectedRow && selectedRow.des) || ''}
            onClose={onCloseRowPanel}
          />
        </div>
        <div className="card-zone">
          <div className="card-item">
            <span className="interation-click__title">Mosaic card viewer</span>
            <div className="card-item__list">
              {listCard.map((card) => (
                <NodeInteraction
                  nodeTag="div"
                  className="card-item__node"
                  key={card.id}
                  nodeClick={handleClickCard}
                  dataClickOutput={card}
                  dataRightClickOutput={card}
                  contextMenu={genCardContextMenu(CONTEXT_CARD_MENU, card.id)}
                  // customContextMenu
                >
                  <CustomCard key={card.id} card={card}>
                    <div className="card-item__des">
                      {(card && card.des) || ''}
                    </div>
                  </CustomCard>
                </NodeInteraction>
              ))}
            </div>
          </div>
          <SelectionItem
            title="Selected card"
            sub="Additional description"
            des={(selectedCard && selectedCard.des) || ''}
            onClose={onCloseCardPanel}
          />
        </div>
        {/* <CustomContextMenu {...CONTEXT_CARD_MENU} /> */}
      </div>
      <SimpleDialog
        open={!!selectedPopupItem}
        onClose={() => {
          togglePopup();
        }}
        title="Dialog"
        classExt="interation-click__dialog"
      >
        <div className="selected-popup-item__des">
          {(selectedPopupItem && selectedPopupItem.des) || ''}
        </div>
      </SimpleDialog>
    </>
  );
};

InteractionClick.defaultProps = {};
export default InteractionClick;
