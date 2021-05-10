import { useContext } from 'react';
import FilterContext from '../context/FilterContext';

import styles from '../styles/PhotoElement.module.css';

const PhotoElement = ({author, id, index} : {author: string, id: string, index:number}) : JSX.Element => {
    const filterConf : any = useContext(FilterContext); 
    const filterActive  = filterConf.filterActive; 
    const normalizeIndex = index + 1;
    const photoIndex = (normalizeIndex < 10) ? `#0${normalizeIndex}` : `#${normalizeIndex}`;
    return(
        <div className={styles.photoelement}>
            <div className={styles.photoelement__indexcontainer}>
                <span className={styles.photoelement__indexcontainer__text}>{photoIndex}</span>
            </div>
            <div className={styles.photoelement__imgcontainer} >
                <picture>
                    <source srcSet={`https://picsum.photos/id/${id}/387.webp?${filterActive}`} type="image/webp" />
                    <source srcSet={`https://picsum.photos/id/${id}/387.jpg?${filterActive}`} type="image/jpeg"/> 
                    <img 
                        src={`https://picsum.photos/id/${id}/387.jpg?${filterActive}`} 
                        alt={author}
                        width={387}
                        className={styles.photoelement__imgcontainer__img}
                    />
                </picture>
            </div>
            <div className={styles.photoelement__authorcontainer}>
                <h4 className={styles.photoelement__authorcontainer__author}>{author}</h4>
            </div>
        </div>
    )
}

export default PhotoElement;