import { createContext } from 'react';
import Photo from '../utils/interfaces/Photo';

interface IContextProps {
    filteredPhotos: Photo [],
    getFirstPhotoArray: Function
}

const PhotosContext = createContext({} as IContextProps);

export default PhotosContext;