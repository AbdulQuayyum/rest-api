import express from "express";
import bodyParser from 'body-Parser';

const app = express();
const PORT = 5500;

app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Server is running on port: http://locathost:${PORT} `))