import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');
    const handleInputChange=(e)=>{
     //   console.log(e.target.value);
        setInputValue(e.target.value);

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        //TAREA LLAMAR AL SET CATEGORIES
        /*El TRIM permite que no se envien valores vacios por detras y por delante */
        
        if(inputValue.trim().length>2){
            setCategories(cats=>[...cats,inputValue]);
            setInputValue('');
        }

    }
    return (
        <form onSubmit={handleSubmit} > 
           <h2>Add Category</h2>
            <input
                type= "text"
                value={inputValue} 
                onChange={handleInputChange}
  
            ></input>
        </form>
    )

}
// TAREA propsType colocar "set categorie es obligatorio"
AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}
