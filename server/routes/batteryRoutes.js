const batteryRouter = require('express').Router();
const {knexDb} = require('../db');
const {DB_TABLES} = require('../constants');

batteryRouter.get('/getall', async (req, res) => {
    try {
        knexDb.select('*')
            .from(DB_TABLES.TABLE_BATTERIES)
            .orderBy('serialOne')
            .then(batteries => {
                const totalRows = batteries.length;
                res.json({
                    data: batteries.splice(req.query.offset, req.query.limit),
                    total: totalRows
                });
            });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

batteryRouter.put('/updateCondition', async (req, res) => {

    const id = req.body.params.serialOne;
    const condition = Number(req.body.params.condition);

    console.log(`serialOne = ${id}`);
    console.log(`condition = ${condition}`);

    try {
        knexDb(DB_TABLES.TABLE_BATTERIES)
            .where({serialOne: id})
            .update({condition: condition})
            .then((rows) => {
                console.log(rows);
            })
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = batteryRouter;