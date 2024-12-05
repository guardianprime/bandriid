/* eslint-disable react/prop-types */
import ProductDisplay from './ProductDisplay';
import styles from './BestSelling.module.css';


function BestSelling({ height, customMargin }) {
    return (
        <div className={`${styles.container} ${height}`} style={{ marginTop: customMargin }}>
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
        </div >
    )
}

export default BestSelling
