import { useContext, useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import ApiConf from '../conf/ApiConf';
import PhotosContext from '../context/PhotosContext';
import Photo from '../utils/interfaces/Photo';
import HandlePhoto from '../hooks/usePhoto';

import MainLayout from '../components/MainLayout';
import LargeButton from '../components/Buttons/LargeButton';
import HeroPhoto from '../components/HeroPhoto';
import FormSearch from '../components/FormSearch';
import FilterRow from '../components/FiltersRow';
import PhotoElement from '../components/PhotoElement';
import MediumButton from '../components/Buttons/MediumButton';
import Error from '../components/Error';

import styles from '../styles/Home.module.css'

const Home = ({data, error} : {data: Photo[], error: boolean}): JSX.Element => {
  const { filteredPhotos, getFirstPhotoArray } = useContext(PhotosContext);
  const [apiError] = useState(error);

  useEffect(() => {
    if(!apiError){
      getFirstPhotoArray(data,ApiConf.minNum);
    }
  }, []);

  const loadMorePhoto = () => {
    const currentLength = filteredPhotos.length;
    const nextLength = currentLength + ApiConf.minNum;
    getFirstPhotoArray(data,nextLength);
  }

  return(
    <MainLayout>
      <section className={styles.hero}>
        <div className="container container--flex">
          <div className={`${styles.hero__column} ${styles.hero__column__left}`}>
            <h1 className={styles.hero__title}>Are you bored?</h1>
            <p className={styles.hero__paragraph}>CoolPics helps you to spend hours of your day scrolling down and sharing a big list of random images. </p>
            <LargeButton />
          </div>
          <div className={`${styles.hero__column} ${styles.hero__column__right}`}>
            <HeroPhoto />
          </div>
        </div>
      </section>
      <section id="photogrid" className={styles.photogrid}>
        <div className={`container ${styles.photogrid__container}`}>
            <h2 className={styles.photogrid__container__title}>Random Images</h2>
        </div>
        {
          !apiError && (
            <div className={`container container--flex ${styles.photogrid__container}`}>
                <FormSearch data={data}/>
                <FilterRow />
            </div>
          )
        }
        {
          filteredPhotos.length === 0 && !apiError && (
            <Error 
              title="Not Found!"
              description="The author you are looking for is not in our database."
            />
          )
        }
        {
          apiError && (
            <Error 
              title="We are sorry!"
              description="At this moment there is a problem, try again later."
            />
          )
        }
        {
          !apiError && (
            <div className="container container--grid">
              {
                filteredPhotos.map((photo: Photo, index: number) => (
                  <PhotoElement 
                    key={photo.id}
                    author={photo.author}
                    id={photo.id}
                    index={index}
                  />
                ))
              }
            </div>
          )
        }
      </section>
      {
        filteredPhotos.length >= ApiConf.minNum && filteredPhotos.length < ApiConf.maxNum && (
          <section className="container container--flex container--flex--center" >
            <MediumButton 
              anchorText="Load More"
              handleClick={loadMorePhoto}
            />
          </section>
        )
      }
    </MainLayout>
  )
};

export const getServerSideProps: GetServerSideProps = async () => {
  try{
    const data = await HandlePhoto.getPhotos()
    return data; 
  }catch{
    return {
      props: {
        error: true
      }
    }
  }
}

export default Home;
