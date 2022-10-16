import React from 'react'

export const Anime = ({anime}) => {
    const {title,synopsis,img,url} = anime
  return (
    <div>
        <img src={img}/>
        <h1>{title}</h1>
        <p>{synopsis}</p>
        <a href={url}>{anime.title}</a>
        
    </div>
  )
}
