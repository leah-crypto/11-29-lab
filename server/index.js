const express = require('express');
const cors = require('cors');
const {getHouse, deleteHouse, createHouse, updateHouse} = require('./controller.js')

const app = express();
//const { appendFile } = require('fs');

app.use(express.json());
app.use(cors());

app.listen(4004, () => console.log('Listening on port 4004...'));

app.get('/api/houses', getHouse);
app.delete('/api/houses/:id', deleteHouse);
app.put('/api/houses/:id', updateHouse);
app.post('/api/houses', createHouse);
