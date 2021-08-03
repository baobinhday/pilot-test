import Avatar from '@material-ui/core/Avatar';

export const LIST_CARD = [
  {
    name: "Card name 01",
    status: "Status",
    des: "Card 01",
    avatar: (
      <Avatar aria-label="recipe">
        1
      </Avatar>
    )
  }, {
    name: "Card name 02",
    status: "Status",
    des: "Card 02",
    avatar: (
      <Avatar aria-label="recipe">
        2
      </Avatar>
    )
  }, {
    name: "Card name 03",
    status: "Status",
    des: "Card 03",
    avatar: (
      <Avatar aria-label="recipe">
        3
      </Avatar>
    )
  }
];

export const TABLE_TASK = [
  {
    name: "Task 01",
    label: "Label 01",
    owner: "Owner 01",
    des: "01"
  }, {
    name: "Task 02",
    label: "Label 02",
    owner: "Owner 02",
    des: "02"
  }, {
    name: "Task 03",
    label: "Label 03",
    owner: "Owner 03",
    des: "03"
  }, {
    name: "Task 04",
    label: "Label 04",
    owner: "Owner 04",
    des: "04"
  }, {
    name: "Task 05",
    label: "Label 05",
    owner: "Owner 05",
    des: "05"
  }
];

export const TABLE_HEADER = [{
  id: 'name',
  headerName: 'Task name',
  width: 150,
  sortable: true
}, {
  id: 'label',
  headerName: 'Task label',
  width: 150,
}, {
  id: 'owner',
  headerName: 'Owner',
  width: 150,
}];

export const RADIO_OPTIONS = [
  {
    value: "popup",
    text: "Popup"
  }, {
    value: "new_tab",
    text: "New tab"
  }
];

