import bodyParser from "body-parser"
import { Router } from "express"
import cors from 'cors'

import {checkInventory, login, sigin, createSession, logout} from "../controller/formControllers.js"

import {administrator, update} from "../controller/adminControl.js"

import { getProducts, getProductsById } from "../controller/productControl.js"



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

router.get('/productsList', getProducts)

router.get('/productsList/:id', getProductsById)

export default router