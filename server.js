const express = require('express');
const app = express();
const PORT = 4000;

const rappers = {
    'lana del rey': {
        'age': 30,
        'heightNum': '6',
        'musicCla': 'country'
    },
    'slayer': {
        'age': 31,
        'heightNum': '4',
        'musicCla': 'country'
    },
    'slipknot': {
        'age': 30,
        'heightNum': '3',
        'musicCla': 'country'
    }
};

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/api', (req, res) => {
    res.json(rappers);
});

app.get('/api/:rapperName', (req, res) => {
    console.log(req.params.rapperName);
    res.json(rappers[req.params.rapperName.toLowerCase()] || { error: 'Rapper not found' });
});

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}!`);
});


