import Avatar from '@material-ui/core/Avatar';

export const LIST_CARD = [
  {
    id: 'c1',
    name: 'Card name 01',
    status: 'Status',
    des: 'Card 01',
    avatar: <Avatar aria-label="recipe">1</Avatar>,
  },
  {
    id: 'c2',
    name: 'Card name 02',
    status: 'Status',
    des: 'Card 02',
    avatar: <Avatar aria-label="recipe">2</Avatar>,
  },
  {
    id: 'c3',
    name: 'Card name 03',
    status: 'Status',
    des: 'Card 03',
    avatar: <Avatar aria-label="recipe">3</Avatar>,
  },
];

export const TABLE_TASK = [
  {
    id: 't1',
    name: 'Task 01',
    label: 'Label 01',
    owner: 'Owner 01',
    des: 'The nonprofit Wikimedia Foundation provides the essential infrastructure for free knowledge. We host Wikipedia, the free online encyclopedia, created, edited, and verified by volunteers around the world, as well as many other vital community projects. All of which is made possible thanks to donations from individuals like you. We welcome anyone who shares our vision to join us in collecting and sharing knowledge that fully represents human diversity.',
  },
  {
    id: 't2',
    name: 'Task 02',
    label: 'Label 02',
    owner: 'Owner 02',
    des: 'We do not sell your email address or any of your personal information to third parties. More information about our privacy practices are available at the Wikimedia Foundation privacy policy, donor privacy policy, and data retention guidelines.',
  },
  {
    id: 't3',
    name: 'Task 03',
    label: 'Label 03',
    owner: 'Owner 03',
    des: 'Readers verify the facts. Articles are collaboratively created and edited by a community of volunteers using reliable sources, so no single person or company owns a Wikipedia article. The Wikimedia Foundation does not write or edit, but you and everyone you know can help.',
  },
  {
    id: 't4',
    name: 'Task 04',
    label: 'Label 04',
    owner: 'Owner 04',
    des: 'The word “wiki” refers to a website built using collaborative editing software. Projects with no past or existing affiliation with Wikipedia or the Wikimedia Foundation, such as Wikileaks and wikiHow, also use the term. Although these sites also use wiki in their name, they have nothing to do with Wikimedia.',
  },
  {
    id: 't5',
    name: 'Task 05',
    label: 'Label 05',
    owner: 'Owner 05',
    des: 'Our volunteers build tools, share photos, write articles, and are working to connect all the knowledge that exists.',
  },
];

export const TABLE_HEADER = [
  {
    id: 'name',
    headerName: 'Task name',
    width: 150,
    sortable: true,
  },
  {
    id: 'label',
    headerName: 'Task label',
    width: 150,
  },
  {
    id: 'owner',
    headerName: 'Owner',
    width: 150,
  },
  {
    id: 'des',
    headerName: 'Description',
    width: 150,
    trunk: true,
  },
];

export const RADIO_OPTIONS = [
  {
    value: 'popup',
    text: 'Popup',
  },
  {
    value: 'new_tab',
    text: 'New tab',
  },
];

export const CONTEXT_TABLE = {
  id: 'context-table',
  list: [
    {
      id: 'Import',
      title: 'Import'
    },
    {
      id: 'Export',
      title: 'Export'
    }
  ]
}

export const CONTEXT_ROW_MENU = {
  id: 'context-row',
  list: [
    {
      id: 'rename',
      title: 'Rename',
      onClick: (e, data) => {
        console.log('Rename', data);
      },
    },
    {
      id: 'duplicate',
      title: 'Duplicate',
      onClick: (e, data) => {
        console.log('Duplicate', data);
      },
    },
    {
      id: 'move-to',
      title: 'Move to ...',
      onClick: (e, data) => {
        console.log('Move to ...', data);
      },
    },
    {
      id: 'export',
      title: 'Export',
      onClick: (e, data) => {
        console.log('Export', data);
      },
    },
    {
      id: 'slice',
      title: 'Slice',
      onClick: (e, data) => {
        console.log('Slice', data);
      },
    },
    {
      id: 'divider',
      title: 'Divider',
      isDivider: true,
    },
    {
      id: 'delete',
      title: 'Delete this item',
      onClick: (e, data) => {
        console.log('Delete this item', data);
      },
    },
  ],
};

export const CONTEXT_CARD_MENU = {
  id: 'context-card',
  list: [
    {
      id: 'rename',
      title: 'Rename',
      onClick: (e, data) => {
        console.log('Rename', data);
      },
    },
    {
      id: 'duplicate',
      title: 'Duplicate',
      onClick: (e, data) => {
        console.log('Duplicate', data);
      },
    },
    {
      id: 'move-to',
      title: 'Move to ...',
      onClick: (e, data) => {
        console.log('Move to', data);
      },
    },
    {
      id: 'export',
      title: 'Export',
      subMenu: [
        {
          id: 'png',
          title: 'PNG',
          onClick: (e, data) => {
            console.log('Export PNG', data);
          },
        },
        {
          id: 'jpeg',
          title: 'JPEG',
          onClick: (e, data) => {
            console.log('Export JPEG', data);
          },
        },
      ],
    },
    {
      id: 'slice',
      title: 'Slice',
      onClick: (e, data) => {
        console.log('Slice', data);
      },
    },
    {
      id: 'divider',
      title: 'Divider',
      isDivider: true,
    },
    {
      id: 'delete',
      title: 'Delete this item',
      onClick: (e, data) => {
        console.log('Delete this item', data);
      },
    },
  ],
};
