import Photo from './Photo';

export default interface Filter {
    filteredPhotos: Photo[],
    getFirstPhotoArray: any
};

