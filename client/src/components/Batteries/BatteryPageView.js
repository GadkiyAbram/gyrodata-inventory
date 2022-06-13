import faker from '@faker-js/faker';
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
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
    TableFooter, Button
} from '@material-ui/core';
import ReactPaginate from 'react-paginate';
import '../Batteries/styles.css';
import Pagination from "../shreadComponents/Tables/Pagination/Pagination";

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 1200,
    },
    tableContainer: {
        borderRadius: 5
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor: '#cf3213',
        color: theme.palette.getContrastText(theme.palette.primary.dark)
    },
    avatar: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.getContrastText(theme.palette.primary.light)
    },
    name: {
        fontWeight: 'bold',
        color: '#4a4847'
    },
    status: {
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        backgroundColor: 'grey',
        borderRadius: 8,
        padding: '3px 10px',
        display: 'inline-block'
    },
    container: {
        color: 'textSecondary',
        margin: '0px 5px'
    }
}));

let USERS = [], STATUSES = ['Active', 'Pending', 'Blocked'];
for(let i=0;i<14;i++) {
    USERS[i] = {
        name: faker.name.findName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
        jobTitle: faker.name.jobTitle(),
        company: faker.company.companyName(),
        joinDate: faker.date.past().toLocaleDateString('en-US'),
        status: STATUSES[Math.floor(Math.random() * STATUSES.length)]
    }
}

const BatteryPageView = (props) => {
    const {
        batteryData,
        getData,
        limit,
        setOffset,
        total
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
                                                <Avatar
                                                    alt={row.condition} src='.'
                                                    className={classes.avatar}
                                                    style={{
                                                        backgroundColor:
                                                            ((row.condition === 1 && 'green') ||
                                                                (row.condition === 0 && 'orange'))
                                                    }}
                                                />
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