import { useEffect, useState, useRef } from 'react';
import Photo from '../utils/interfaces/Photo';
import ApiConf from '../conf/ApiConf';

// Creo un custom hooke que permite manejar todo el tema de las fotos

const usePhoto = ()  => {
    const array : Photo[] = [];
    const [filteredPhotos , setFilteredPhotos] = useState(array);

    // El metodo getFirstPhotoArray recibe como parametros:
    // data: es el array devuelto por la petición inicial
    // number: el numero de fotos que hay que visualizar en primera instancia
    // El metodo devuelve un nuevo array con solo los elementos que hay que visualizr en pantalla

    const getFirstPhotoArray = ( data : Photo[], number: number) => {
        const firstPhotoArray : Photo[] = [];
        const length = (data.length < number) ? data.length : number;
        for(let i = 0; i < length; i += 1){
            firstPhotoArray.push(data[i]);
        }

        setFilteredPhotos(firstPhotoArray);
    }

    

    return {
        filteredPhotos,
        getFirstPhotoArray
    };
}

// Creo un metodo que permite hacer el fetch inicial de las fotos

const getPhotos = async () => {

    const res = await fetch(ApiConf.url);
    const data = await res.json();

    return { props: { data } };
}

// Creo un metodo que permite hacer el lazy load utilizando el Intersection Observer

const loadLazy = () => {
    interface RefObject<T> {
        readonly current: T | null
    }
    const element : RefObject<HTMLElement> = useRef(null)
    const [show, setShow] = useState(false)
    useEffect(() => {
        const observer = new window.IntersectionObserver((entries) => {
            const { isIntersecting } = entries[0];
      
            if (isIntersecting) {
              setShow(true);
              observer.disconnect();
            }
          })
          const el : any = element;
          observer.observe(el.current);
    }, [element])
  
    return [show, element]
}

export default {
    usePhoto,
    getPhotos,
    loadLazy
};