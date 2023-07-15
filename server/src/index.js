import express from "express";
//import path, { dirname } from "path";
import bodyParser from "body-parser";
import cors from 'cors'
// import { error } from "console";

import indexRoutes from "./routes/routes.js"
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
//const PORT = 9000;
const PORT = process.env.PORT || 9000;

app.use(bodyParser.json())
app.use(cors())

app.set('routes' , join(__dirname, 'routes'))
app.use(indexRoutes)

app.use(express.static(join(__dirname, '../public')))


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

