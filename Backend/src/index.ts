import 'dotenv/config'
import express, { application } from 'express'
import http from 'http'
import compression from 'compression'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from "cookie-parser";

import { info } from './utils/helper'
import router from './routes'


const app = express()

const corsOptions = {
    origin: '*',
    credentials: true
};

app.use(cors(corsOptions))
app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

app.use('/', router)

const server = http.createServer(app)

server.listen(process.env.PORT, info)