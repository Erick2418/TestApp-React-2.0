import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrif = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);
   /*
   DE ESTA MANERA YA QUEDA EL COMPONENTE MUY LIMPIO
   TODO LO PESADO QUEDA EN EL CUSTOM HOOK
   */
    return (    
        <>
        <h3 className='animate__animated animate__fadeIn'>{category}</h3>
        {loading && <p className= 'animate__animated animate__flash'>Loading</p>}
        <div className="card-grid">       
                {
                    images.map( img=>(
                      <GifGridItem
                        key={img.id}  
                        {...img }
                      />
                     ))
                } 
        </div>
        </>
    )
}
