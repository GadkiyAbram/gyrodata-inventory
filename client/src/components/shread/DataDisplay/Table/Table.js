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
import useStyles from './styles';
import Pagination from '../Pagination/Pagination';

const Table = ({
  columns,
  data,
  limit,
  offset,
  total,
  setOffset,
  withPagination
}) => {
  const defaultFormat = (value) => value;

  const styles = useStyles();

  return (
    <div>
      <TableContainer component={Paper} className={styles.tableContainer}>
        <BaseTable className={styles.table} >
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  className={styles.tableHeaderCell}
                  key={column?.key}>{column?.title}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {
              data.map((row, idx) => (
              <TableRow key={idx}>
                {columns.map((column) => (
                  <TableCell key={column.key}>
                    {(column.format || defaultFormat)(row[column.key])}
                  </TableCell>
                ))}
              </TableRow>
            ))
            }
          </TableBody>
        </BaseTable>
      </TableContainer>
      {
        withPagination && (
          <Pagination
            limit={limit}
            total={total}
            handleChange={setOffset}
          />
        )
      }
    </div>
  );
};

Table.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  withPagination: PropTypes.bool,
  total: PropTypes.number,
  limit: PropTypes.number,
  offset: PropTypes.number,
  setOffset: PropTypes.func
}

export default Table;