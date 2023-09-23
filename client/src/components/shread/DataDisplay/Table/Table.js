import React from 'react';
import PropTypes from 'prop-types';
import {
  Paper,
  TableContainer,
  TableHead,
  Table as BaseTable,
  TableRow,
  TableCell,
  TableBody
} from '@material-ui/core';
import s from './styles.scss';

const Table = ({ columns, data, classes}) => {
  const defaultFormat = (value) => value;

  return (
    <TableContainer component={Paper} className={s.tableContainer}>
      <BaseTable className={s.table} >
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                className={s.tableHeaderCell}
                key={column?.key}>{column?.title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, idx) => (
            <TableRow key={idx}>
              {columns.map((column) => (
                <TableCell key={column.key}>
                  {(column.format || defaultFormat)(row[column.key])}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </BaseTable>
    </TableContainer>
  );
};

Table.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  classes: PropTypes.object
}

export default Table;