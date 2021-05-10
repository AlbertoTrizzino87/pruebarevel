import type { AppProps } from 'next/app';
import PhotosContext from '../context/PhotosContext';
import FilterContext from '../context/FilterContext';
import HandlePhoto from '../hooks/usePhoto';
import useFilter from '../hooks/useFilter';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const photo = HandlePhoto.usePhoto();
  const filter = useFilter();
  return (
    <PhotosContext.Provider value={photo}>
      <FilterContext.Provider value={filter}>
         <Component {...pageProps} />
      </FilterContext.Provider>
    </PhotosContext.Provider>
    );
}

export default MyApp;
