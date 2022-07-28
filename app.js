const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/envelopes', (req, res) => {
    res.send('You got Envelopes!');
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})