import styles from './Categories.module.css';

function Categories() {
    return (
        <div className={styles.container}>
            <div className={styles.children}>
                <span className={styles.icon}><i className="fa-solid fa-mobile-screen"></i></span>
                <span>Phone</span>
            </div>
            <div className={styles.children}>
                <span className={styles.icon}><i className="fa-solid fa-desktop"></i></span>
                <span>Computers</span>
            </div>
            <div className={styles.children}>
                <span className={styles.icon}><i className="fa-solid fa-camera"></i></span>
                <span>Camera</span>
            </div>
            <div className={styles.children}>
                <span className={styles.icon}><i className="fa-solid fa-headphones"></i></span>
                <span>Headphones</span>
            </div>
            <div className={styles.children}>
                <span className={styles.icon}><i className="fa-solid fa-gamepad"></i></span>
                <span>Games</span>
            </div>
            <div className={styles.children}>
                <span className={styles.icon}><i className="fa-solid fa-mobile-screen"></i></span>
                <span>Watch</span>
            </div>
        </div>
    )
}

export default Categories
