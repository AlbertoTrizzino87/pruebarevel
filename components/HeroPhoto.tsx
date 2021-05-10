import styles from '../styles/HeroPhoto.module.css';

const HeroPhoto = (): JSX.Element => (
    <div className={styles.herophoto}>
        <div className={styles.herophoto__container}>
            <img
                src="/assets/images/perrete.jpg"
                alt="Perrete "
                width={315.44}
                height={315.44}
                className={styles.herophoto__container__photo}
            />
        </div>
        <div className={styles.herophoto__container} />
        <div className={styles.herophoto__container} />
    </div>
)

export default HeroPhoto;