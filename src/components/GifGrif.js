import React from 'react'

export const GifGrif = ({category}) => {

    const getGifs=async()=>{
        /*para obtener ese url se uso postman
            se busco el search en la pagina de gifdeveloper 
            se coloco un limite de 10 imagenes, se coloco el api key
            y se realizo una busqueda de rick and morty
            pd: REEMPLAZA LOS ESPACIOS POR " + " y colcoa el https://
        */
        const url='https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=13EO7hsC5VDKZ6AU4rWId9SysAk3t1cR'
        const resp= await fetch(url);
        const {data}= await resp.json();
        const gifs= data.map( img=>{
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            };
        }

        )

        console.log(gifs);
    }
    getGifs();
    return (
        <div>
            <h3>{category}</h3>
        </div>
    )
}
