import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BestSelling from "../components/BestSelling";
import styles from './Wishlist.module.css'


function Wishlist() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <section className={styles.wishlistSection}>
                    <div className={styles.wishlistContainer}>
                        <div className="section-wrapper">
                            <div className="design-container">
                                <p>WishList (4)</p>
                            </div>
                            <button>Move all to bag</button>
                        </div>
                        <BestSelling height="semi" customMargin="10px" />
                    </div>
                </section>
                <section className={styles.wishlistSection}>
                    <div className={styles.wishlistContainer}>
                        <div className="section-wrapper">
                            <div className="design-container">
                                <div className="design"></div>
                                <p>Just for you</p>
                            </div>
                            <button>See All</button>
                        </div>
                        <BestSelling height="semi" customMargin="10px" />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Wishlist
