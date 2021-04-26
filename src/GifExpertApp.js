import React, { useState } from 'react'


const GifExperApp = ()=>{

    //const categories=['One Punch','Samurai X','Dragon Ball'];
    // para aniadir un elemento al arreglo no podremos por que es const
    // pero al usar un hook de useState se hace dinamico
    const [categories, setCategories] = useState(['One Punch','Samurai X','Dragon Ball']);
    //en este caso lo inicializamos con los valores que ya tiene el arreglo.


    //TAREA
    /* cuando se toque e l boton la funcion handleadd agrega un elemnto al arreglo
    Usando el SetCategories
    */
    const handleAdd=()=>{
        setCategories( ['Torre de Dios',...categories,'One Piece'] );
      //Tambien puede ser  setCategories( cats=>[...cats,'HundetXHunter']);
        
    }
    return (
        <>
        <h2>GifExperApp</h2>
        <hr></hr>
        <button onClick={handleAdd}>Agregar</button>
        <ol>
            {
                categories.map(category=>{
                    return <li key={category}> {category}</li>;
                    // El key no tiene que ser el indice, tiene que ser la misma categoria
                    // es obligatorio dijo el prof
                })
                
            }
            
        </ol>



        </>
    );

};
export default GifExperApp;











