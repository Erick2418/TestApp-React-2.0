import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrif } from './components/GifGrif';


const GifExperApp = ()=>{

    const [categories, setCategories] = useState(['One Punch']);

    return (
        <>
        <h2>GifExperApp</h2>
        
        <AddCategory setCategories={setCategories}/>
        <hr></hr>
       
        <ol>
            {
                categories.map(category=>(
                    <GifGrif 
                    key={category }
                    category= {category} 
                    />
                ))
            }
            
        </ol>



        </>
    );

};
export default GifExperApp;











