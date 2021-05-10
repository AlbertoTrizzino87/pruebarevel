import { useContext, useRef, useCallback, useMemo , useState, useEffect} from 'react';
import ApiConf from '../conf/ApiConf';
import PhotosContext from '../context/PhotosContext';
import Photo from '../utils/interfaces/Photo';

import styles from '../styles/FormSearch.module.css';

const FormSearch = ({data} : {data: Photo[]}): JSX.Element => {
    const photoConf: any = useContext(PhotosContext);
    const getFirstPhotoArray  = photoConf.getFirstPhotoArray;

    // Programando la funcionalidad del buscador
    const [search, setSearch] = useState('');
    const sercher = useRef(null);

    const handleSearch = useCallback(() => {
        let res : any = sercher.current; 
        setSearch(res.value);
    }, [search]);
    
    // Utilizamos el Hook useMemo para evitar calculos innecesarios
    const filteredAuthor = useMemo(() => {
        if (data.length > 0) {
            return data.filter((photo: Photo) => {
                const author = `${photo.author}`;
                return author.toLowerCase().includes(search.toLowerCase());
            });
           
        } 
        return [];
        
    }, [data, search]);

    useEffect(() => {
        const length = (filteredAuthor.length > 0 && filteredAuthor.length < ApiConf.maxNum) ? filteredAuthor.length : ApiConf.minNum;
        getFirstPhotoArray(filteredAuthor, length)
    }, [filteredAuthor])


    return(
        <form  className={styles.formsearch} >
            <input 
                type="text" 
                value={search}
                ref={sercher}
                onChange={handleSearch}
                placeholder="Search by author" 
                className={styles.formsearch__input}/>
            <img
                className={styles.formsearch__img}
                src="/assets/svg/lupa.svg" 
                alt="Lupa" />
        </form>
    )
}

export default FormSearch;