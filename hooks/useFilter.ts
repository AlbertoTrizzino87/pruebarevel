import { useState } from 'react';

// Creo un custom hook para manejar el filtro de las fotos

const useFilter = () => {
    // En primer istancia seteamos el filtro color como filtro por defecto
    const [filterActive, setFilterActive] = useState('color');

    // El metodo changeFilter recibe como parametro:
    // filter: es un string con el filtro elegido por un usuario
    // Modifica el contexto con el filtro selecionado
    const changeFilter = (filter: string) => {
        setFilterActive(filter);
    }

    return {
        filterActive,
        changeFilter
    };
}

export default useFilter;