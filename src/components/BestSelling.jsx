/* eslint-disable react/prop-types */
import ProductDisplay from './ProductDisplay';
import styles from './BestSelling.module.css';


function BestSelling({ height }) {
    return (
        <div className={`${styles.container} ${height}`}>
            <div className={styles.children}>
                <ProductDisplay />
            </div>
            <div className={styles.children}>
                <ProductDisplay />
            </div>
            <div className={styles.children}>
                <ProductDisplay />
            </div>
            <div className={styles.children}>
                <ProductDisplay />
            </div>
        </div>
    )
}

export default BestSelling
