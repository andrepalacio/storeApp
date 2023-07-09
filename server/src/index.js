import express from "express";
import mysql from "mysql";
import path, { dirname } from "path";
import bodyParser from "body-parser";
import cors from 'cors'
import { error } from "console";

import indexRoutes from "./routes/index.js"

const app = express();
const PORT = 9000;

app.use(bodyParser.json())
app.use(cors())
app.use(indexRoutes)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

