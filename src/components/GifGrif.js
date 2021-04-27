import React, { useEffect, useState } from 'react'

export const GifGrif = ({category}) => {
    /*
    El problema es que si se colocan mas componentes o mas funciones 
    al querer hacerlas todo se setea de nuevo y eso no es lo que queremos
    queremos que cada cosa funcione 1 vez.. eso se logra con useEfect
    */
    
    const [count, setcount] = useState(0);
    useEffect( ()=>{
        getGifs();
    },[]);


    const getGifs=async()=>{

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
    return (
        <div>
            <h3>{category}</h3>
            <h3>{count}</h3>
            <button onClick={ ()=>{
                setcount(count+1)
            }}> + </button>
        </div>
    )
}
