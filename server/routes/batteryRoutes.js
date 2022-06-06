const batteryRouter = require('express').Router();
const pool = require('../db');

//getting all batteries data
batteryRouter.get('/getall', async (req, res) => {
    try {
        const {rows} = await pool.query('SELECT * FROM batteries');

        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = batteryRouter;