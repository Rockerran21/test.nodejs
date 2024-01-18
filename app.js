const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/submit-form', (req, res) => {
    const username = req.body.username;
    res.send(`Username is ${username}`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
