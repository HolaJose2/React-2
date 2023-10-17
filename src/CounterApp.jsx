import { useState } from "react"; /*useState es un Hook de react, que permite agregar o cambiar el estado de un componente */
import PropTypes from "prop-types";
export const CounterApp = ({ value }) => {
    /*Cuando cambiamos el estado de un componente, se vuelve a renderizar.
    Por ejemplo: cada vez que oprimas un boton pasa sumar, restar o resetear el contador, se va a ejecutar el siguiente mensaje: 
    Mensaje -> */ console.log("render");

    

    /*useState devuelve un array con dos elementos:
        - El valor actual del estado, es decir, el valor que se pasa a la funcion useState(valor)    
        - La funcion para actualizar el estado de ese valor
    */

    //Por ejemplo:
    const [counter, setCounter] = useState(value);

    const handleAdd = () => setCounter(counter + 1);
    const handleSubstract = () => setCounter(counter - 1);
    const handleReset = () => setCounter(value);

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            {/*Mostramos el valor que devuelve el useState*/}
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleSubstract}>-1</button>
            <button onClick={handleReset}>Reset</button>
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
};
