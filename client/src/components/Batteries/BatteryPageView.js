import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Grid,
    Typography,
    TablePagination,
    TableFooter,
    Button
} from '@material-ui/core';
import '../shreadComponents/Tables/Pagination/styles.scss';
import Pagination from '../shreadComponents/Tables/Pagination/Pagination';
import useStyles from './styles';
import BatteryConditionPage from './components/BatteryConditionPage';

const BatteryPageView = (props) => {
    const {
        batteryData,
        getData,
        limit,
        setOffset,
        total,
        updateCondition
    } = props;

    const classes = useStyles();

    const setNewOffset = (event) => {
        const newOffset = (event.selected * limit) % total;
        setOffset(newOffset);
    }

    return (
        <div>
            <Button onClick={getData}>See All Batteries</Button>
            <TableContainer component={Paper} className={classes.tableContainer}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tableHeaderCell}>Battery Info</TableCell>
                            <TableCell className={classes.tableHeaderCell}>Transfer Info</TableCell>
                            <TableCell className={classes.tableHeaderCell}>Arrived Date</TableCell>
                            <TableCell className={classes.tableHeaderCell}>Location</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            batteryData.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>
                                        <Grid container>
                                            <Grid item lg={2}>
                                                <BatteryConditionPage row={row} updateCondition={updateCondition} />
                                            </Grid>
                                            <Grid item lg={10}>
                                                <Typography className={classes.name}>{row.serial_number_one}</Typography>
                                                <Typography color="textSecondary" variant="body2">{row.serial_number_two}</Typography>
                                                <Typography color="textSecondary" variant="body2">{row.serial_number_three}</Typography>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell>
                                        <Typography color="primary" variant="subtitle2">{row.invoice}</Typography>
                                        <Typography color="textSecondary" variant="body2">{row.ccd}</Typography>
                                    </TableCell>
                                    <TableCell>{row.arrived}</TableCell>
                                    <TableCell>
                                        <Typography className={classes.status}>{row.location}</Typography>
                                        <Typography className={classes.container} variant="body2">{row.container}</Typography>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination
                limit={limit}
                total={total}
                handleChange={setNewOffset}
            />
        </div>
    );
}

export default BatteryPageView;