/* eslint-disable react/prop-types */
import styles from './BestSelling.module.css';


function BestSelling({ height }) {
    return (
        <div className={`${styles.container} ${height}`}>
            <div className={styles.children}>groundnut</div>
            <div className={styles.children}>groundnut</div>
            <div className={styles.children}>groundnut</div>
            <div className={styles.children}>groundnut</div>
        </div>
    )
}

export default BestSelling
