import React, { useState } from 'react'

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('Hola Mundo');
    const handleInputChange=(e)=>{
        console.log(e.target.value);
        setInputValue(e.target.value);
        //permite escribir en el txtbox, actualiza a medida que se escriba
        // los cambios solo se realizaran en el input
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        /*Nos permit eque no se actualize la pagina completa al hacer el submit
        si hace eso se reinicial el useState y pues no es optimo..
        Con esto inclusive se conserva lo que hemos escrito
        */

        console.log('Submit ECHO');
    }
    return (
        <form onSubmit={handleSubmit} > 
           <h2>Add Category</h2>
            <input
                type= "text"
                value={inputValue} // valor por defecto usamos un hook
                onChange={handleInputChange}//aqui para poder cambiar
                /*
                Debido a que usamos un hook en el valor por defecto
                 este no nos permite hacer cambios por ello usamos el onChange
                 el permite que se cambien los valores usando el setInputValue
                 del useState
                 */
            ></input>
        </form>
    )


}
