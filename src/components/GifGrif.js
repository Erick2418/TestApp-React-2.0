import React, { useEffect, useState} from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrif = ({category}) => {

    const [images, setimages] = useState([]);
   
    useEffect( ()=>{
        getGifs(category)
        .then(setimages)// Forma extensa:imgs=>{ setimages(imgs)}
    },[category]);



    return (    
        <>
        <h3>{category}</h3>
        <div className="card-grid">       
                {
                    images.map( img=>(
                      <GifGridItem
                        key={img.id}  
                        {...img }// se envian de manera independiente
                      />
                     ))
                } 
        </div>
        </>
    )
}
