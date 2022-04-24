import express from "express";
import bodyParser from 'body-Parser';

const app = express(); 
const PORT = 5500;

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello from Homepage.'))

app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT} `))