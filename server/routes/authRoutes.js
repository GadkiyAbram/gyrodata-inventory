const router = require('express').Router();
const pool = require('../db');
const bcrypt = require('bcrypt');
const jwtGenerator = require('../utils/jwtGenerator');
const validInfo = require('../middleware/validinfo');
const authorize = require('../middleware/authorize');

//registering
router.post('/register', validInfo, async (req, res) => {
    try {
        // 1. destructure the req.body (name, email, password)
        const {name, email, password} = req.body;

        // 2. check if user exists (throw error if it is)
        const user = await pool.query('SELECT * FROM users WHERE user_email = $1', [email]);

        if (user.rows.length !== 0) {
            return res.status(401).send('User already exists');
        }

        // 3. bcrypt the user's password
        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);
        const bcryptedPassword = await bcrypt.hash(password, salt);

        console.log(bcryptedPassword);

        // 4. insert new user to DB
        const newUser = await pool.query(
            'INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *',
            [name, email, bcryptedPassword]
        );

        // 5. generate new jwt token
        const token = jwtGenerator(newUser.rows[0].id);
        res.json({token});
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

//login route
router.post('/login', validInfo, async (req, res) => {
    try {
        //1. destructure the req.body
        const {email, password} = req.body;

        //2. check id user doesn't exist (if not throw error)
        const user = await pool.query('SELECT * FROM users WHERE user_email = $1', [email]);

        if (user.rows.length === 0) {
            return res.status(401).json(`Password for ${email} is incorrect`);
        }

        //3. check if incoming password is the same the database password
        const validPassword = await bcrypt.compare(password, user.rows[0].user_password);

        if (!validPassword) {
            return res.status(401).json(`Password for ${email} is incorrect`);
        }

        //4. give them the jwt token
        const token = jwtGenerator(user.rows[0].id);
        res.json({token});
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})

router.post('/verify', authorize, async (req, res) => {
    try {
        res.json(true);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }
});

router.get('/getall', async (req, res) => {
    try {
        const batteries = await pool.query('SELECT * FROM batteries');

        res.json({data: batteries});
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;