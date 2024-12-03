import styles from './Recomendation.module.css'

function Recomendation() {
    return (
        <section className={styles.section}>

            <div className={styles.containers}>
                <div className={styles.iconContainer}>
                    <div><i className="fa-solid fa-truck"></i></div>
                </div>
                <div>
                    <p>FREE AND FAST SERVICE</p>
                    <p>free delivery for all items over $140</p>
                </div>
            </div>
            <div className={styles.containers}>
                <div className={styles.iconContainer}>
                    <div><i className="fa-solid fa-headphones"></i></div>
                </div>
                <div>
                    <p>24/7 CUSTOMER SERVICE</p>
                    <p>Friendly 24/7 customer support</p>
                </div>
            </div>
            <div className={styles.containers}>
                <div className={styles.iconContainer}>
                    <div><i className="fa-solid fa-shield"></i></div>
                </div>
                <div>
                    <p>MONEY BACK GURANTEE</p>
                    <p>We return money back within 30 days.</p>
                </div>
            </div>
        </section >
    )
}

export default Recomendation
