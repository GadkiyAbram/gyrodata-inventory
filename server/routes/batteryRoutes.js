const batteryRouter = require('express').Router();
const {knexDb} = require('../db');
const {DB_TABLES} = require('../constants');

batteryRouter.get('/getall', async (req, res) => {
    try {
        knexDb.select('*')
            .from(DB_TABLES.TABLE_BATTERIES)
            .orderBy('id')
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

    const id = req.body.params.id;
    const condition = req.body.params.condition;

    console.log(id);

    try {
        knexDb(DB_TABLES.TABLE_BATTERIES)
            .update({condition: condition})
            .where('id', id)
            .then((rows) => {
                console.log(rows);
            })
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = batteryRouter;