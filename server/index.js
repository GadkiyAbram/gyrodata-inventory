const express = require('express');
const app = express();
const cors = require('cors');

const PORT = 5000;

//middleware

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

//ROUTES
//register and login routes
app.use('/auth', require('./routes/authRoutes'));
app.use('/batteries', require('./routes/batteryRoutes'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})