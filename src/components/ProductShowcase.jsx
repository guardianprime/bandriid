import ProductDisplay from './ProductDisplay'
import styles from './ProductShowcase.module.css'

function ProductShowcase() {
    return (
        <div className={styles.container}>
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

export default ProductShowcase
