import styles from '../../src/styles/Hero/slid.module.css';
import Image from 'next/image'; // Use next/image for optimized images
import img1 from '../../public/Hero/img1.png'; 
import { FiAlignJustify, FiSearch } from 'react-icons/fi';

const slid = [
    { id: 1, image: img1 },
    { id: 2, image: img1 },
    { id: 3, image: img1 },
    { id: 4, image: img1 },
    { id: 5, image: img1 },
];

const Slid = () => {
    return (
        <div className={styles.sliderWrapperContainer}>
            
            <div className={styles.sliderContainer}>
                <div className={styles.slider}>
                    {slid.concat(slid).map((slide) => ( // Duplicate the slides to ensure smooth continuous scroll
                        <div key={slide.id} className={styles.slide}>
                            <Image src={slide.image} alt={`Slide ${slide.id}`} width={50} height={50} />
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.nextButton}>
                    +100k <FiAlignJustify />
                    <FiSearch className={styles.searchIcon} />
                </button>
            </div>
        </div>
    );
}

export default Slid;
