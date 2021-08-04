import { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import classNames from 'classnames';
import './customTable.scss';
import NodeClick from 'components/NodeClick/NodeClick';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const CustomTable = ({ rows, header, classExt, ...other }) => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('');
  const [data, setData] = useState(rows);

  const createSortHandler = (property) => () => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const onRowClick = (e, data) => {
    if (e && other.onRowClick) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (other.onRowClick) {
      other.onRowClick(data);
    }
  };

  useEffect(() => {
    const row0 = rows.length ? rows[0] : null;
    let newOrderBy = orderBy;
    if (row0 && row0[`raw${orderBy}`]) {
      newOrderBy = `raw${orderBy}`;
    }
    const newData = stableSort(rows, getComparator(order, newOrderBy));
    setData(newData);
  }, [rows, order, orderBy]);

  return (
    <Table
      className={classNames('table-container', classExt)}
      aria-label="table"
    >
      <TableHead>
        <TableRow>
          {header.map((headCell) => (
            <TableCell
              key={headCell.id}
              sortDirection={
                orderBy === headCell.id && headCell.sortable ? order : false
              }
            >
              {headCell.sortable ? (
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : 'asc'}
                  onClick={createSortHandler(headCell.id)}
                >
                  {headCell.headerName}
                </TableSortLabel>
              ) : (
                headCell.headerName
              )}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <NodeClick
            nodeTag="tr"
            className="MuiTableRow-root"
            key={`row_${row.id}`}
            nodeClick={onRowClick}
            dataClickOutput={row}
            contextMenu={other.contextMenu}
          >
            {header.map((item) =>
              item.trunk ? (
                <NodeClick
                  className="MuiTableCell-root MuiTableCell-body table-cell--trunk"
                  nodeTag="td"
                  key={`${row.id}_cell_${item.id}`}
                  tooltipData={row[item.id]}
                >
                  <span>{row[item.id]}</span>
                </NodeClick>
              ) : (
                <TableCell key={item.id}>{row[item.id]}</TableCell>
              )
            )}
          </NodeClick>
        ))}
      </TableBody>
    </Table>
  );
};

CustomTable.defaultProps = {
  rows: [],
  header: [],
  classExt: '',
  onRowClick: null,
  contextMenu: null
};

export default CustomTable;
