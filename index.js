import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'

import uploadRoutes from './routes/uploadRoutes.js'



const app = express();

dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());


app.use('/upload', uploadRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port : ${PORT}`))