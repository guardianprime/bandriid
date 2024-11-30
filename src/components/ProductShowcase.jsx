import styles from './ProductShowcase.module.css'

function ProductShowcase() {
    return (
        <div className={styles.container}>
            <div className={styles.children}>bread</div>
            <div className={styles.children}>bread</div>
            <div className={styles.children}>bread</div>
            <div className={styles.children}>bread</div>
        </div>
    )
}

export default ProductShowcase
