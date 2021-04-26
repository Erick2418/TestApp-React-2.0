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
        <AddCategory/>
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











