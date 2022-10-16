import { Router } from 'express'
import { listar } from '../controllers/anime.js'
import cors from "cors";


const corsOption = {
    origin:"http://localhost:5173",
    optionsSuccessStatus:200
  }

const router = Router()


router.get('/animes',cors(corsOption),listar)



export default router
