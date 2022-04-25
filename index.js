import express from "express";
import bodyParser from 'body-Parser';

import usersRoutes from './routes/users.js'

const app = express(); 
const PORT = 5500;

app.use(bodyParser.json());

app.use("/people", usersRoutes);
app.get("/", (req, res) => res.send("Welcome to the Users API!"));
app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));

app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT} `))
