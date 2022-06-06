const router = require('express').Router();
const pool = require('../db');

//getting all batteries data
router.get('/getall', async (req, res) => {
    try {
        const batteries = await pool.query('SELECT * FROM batteries');
        res.json(batteries.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;