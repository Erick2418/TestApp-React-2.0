import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs';
//import { GifGridItem } from './GifGridItem';

export const GifGrif = ({category}) => {

    // const [images, setimages] = useState([]);
    const {data, loading} = useFetchGifs();
    console.log(data,loading);
    // useEffect( ()=>{
    //     getGifs(category)
    //     .then(setimages)// Forma extensa:imgs=>{ setimages(imgs)}
    // },[category]);



    return (    
        <>
        <h3>{category}</h3>
        {loading? 'Cargando...': 'Data cargada con exito!'}
        {/* <div className="card-grid">       
                {
                    images.map( img=>(
                      <GifGridItem
                        key={img.id}  
                        {...img }// se envian de manera independiente
                      />
                     ))
                } 
        </div> */}
        </>
    )
}
