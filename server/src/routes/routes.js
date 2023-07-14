import bodyParser from "body-parser"
import { Router } from "express"
import cors from 'cors'

import {login, sigin, createSession} from "../controller/formControllers.js"

import {administrator, update} from "../controller/adminControl.js"

import {addCar, removeCar, calculatePrice, cancelPurchaseList, cleanPurchaseList} from "../controller/controlCar.js"


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

router.get('/create-checkout-session', createSession)

router.get('/success')

router.get('/cancel')

router.post('/cart/add', addCar)

// router.post('/logout', logout)

export default router