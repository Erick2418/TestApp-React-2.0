import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';


const GifExperApp = ()=>{

    const [categories, setCategories] = useState(['One Punch','Samurai X','Dragon Ball']);
 
    // const handleAdd=()=>{
    //     setCategories( ['Torre de Dios',...categories,'One Piece'] );     
    // }
    return (
        <>
        <h2>GifExperApp</h2>
        {//Dato de vital importancia, se pueden enviar funciones a los componenetes
        }
        <AddCategory setCategories={setCategories}/>
        <hr></hr>
       
        <ol>
            {
                categories.map(category=>{
                    return <li key={category}> {category}</li>;
 
                })
                
            }
            
        </ol>



        </>
    );

};
export default GifExperApp;











