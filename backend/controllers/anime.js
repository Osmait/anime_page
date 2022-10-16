import { db } from "../config/db.js";

const listar = async (req,res)=> {
    
    try {
        const listaAnimes =await db.query("SELECT * FROM anime")
        res.status(200).json({
            data:listaAnimes[0]
        })
    } catch (error) {
        console.log(error)
        
    }
   
}


export {
    listar
}