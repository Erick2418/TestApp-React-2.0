import React, { useEffect, useState} from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrif = ({category}) => {

    const [images, setimages] = useState([]);
   
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
        setimages(gifs);
    }
    return (    
        <>
            <h3>{category}</h3>
                {
                    images.map( img=>(
                      <GifGridItem
                        key={img.id}  
                        {...img }// se envian de manera independiente
                      />
                     ))
                }
               

            
        </>
    )
}
