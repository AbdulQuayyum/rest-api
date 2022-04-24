import express from "express";
import bodyParser from 'body-Parser';

import usersRoutes from './routes/users.js'

const app = express(); 
const PORT = 5500;

app.use(bodyParser.json());

app.use('/users' , usersRoutes)

app.get('/', (req, res) => res.send('Hello from Homepage.'))

app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT} `))