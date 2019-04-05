const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const {handleSignin} = require('./controllers/signin');
const {handleRegister} = require('./controllers/register');
const {handleGetProfile} = require('./controllers/profile');

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('server started')
});

app.get('/profile/:id', (req, res) => handleGetProfile(req, res));
app.post('/signin', (req, res) => handleSignin(req, res));
app.post('/register', (req, res) => handleRegister(req, res));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server ready on port ${port}`);
});