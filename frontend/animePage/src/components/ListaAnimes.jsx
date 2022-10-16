import{ useEffect,useState } from "react";
import { Anime } from "./Anime";

export const ListaAnimes = () => {
    const [animes, setanimes] = useState([]);
    
  useEffect(() => {
    const consutlarApi =async()=>{
        const url = "http://localhost:3000/api/animes";
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setanimes(resultado.data)

    }
        
    consutlarApi()
  }, []);

  return (
    <>
    <h1>Listado animes</h1>
    <section>
    {
        
        animes.map((anime)=> (
            <Anime key={anime.id} anime={anime} />
            ))
        }
        
    </section>

    </>
  )
};
