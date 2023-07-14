import bodyParser from "body-parser"
import { Router } from "express"
import cors from 'cors'

import {login, sigin, createSession} from "../controller/formControllers.js"

import {administrator, update} from "../controller/adminControl.js"


const router = Router()

router.use(bodyParser.urlencoded({extended: false}))
router.use(bodyParser.json())
router.use(cors())

router.get("/", (req, res) => {
    res.sendFile(path.resolve("../index.html"));
  });


router.post('/register',sigin)

router.post('/login', login);

router.get('/administrator', administrator);

router.put('/administrator', update);

router.post('/checkout', createSession)

export default router