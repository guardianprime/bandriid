import styles from './About.module.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Recomendation from "../components/Recomendation"

function About() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <section className={styles.section}>
                    <div className={styles.hero}>
                        <div className={styles.sideDiv}>
                            <h2>Our Story</h2>
                            <p>Launced in 2015, Exclusive is South Asia&apos;s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                            <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                        </div>
                        <div className={styles.heroImageContainer}>
                            <img className={styles.heroImage} src="aboutHeroImage.svg" alt="two afican women looking at something in their phone" />
                        </div>
                    </div>
                    <div className={styles.reviewStats}>
                        <div>
                            <div className={styles.smallIconContainer}>
                                <div><i className="fa-solid fa-sack-dollar"></i></div>
                            </div>
                            <h4 className={styles.number}>$33K</h4>
                            <p>Monthly productive sales</p>
                        </div>
                        <div>
                            <div className={styles.smallIconContainer}>
                                <div><i className="fa-solid fa-shop"></i></div>
                            </div>
                            <h4 className={styles.number}>$10.5K</h4>
                            <p>Sellers active at our site</p>
                        </div>
                        <div>
                            <div className={styles.smallIconContainer}>
                                <div><i className="fa-solid fa-bag-shopping"></i></div>
                            </div>
                            <h4 className={styles.number}>$45K</h4>
                            <p>Customers active on our site</p>
                        </div>
                        <div>
                            <div className={styles.smallIconContainer}>
                                <div><i className="fa-solid fa-circle-dollar-to-slot"></i></div>
                            </div>
                            <h4 className={styles.number}>$25K</h4>
                            <p>Annual gross sale on our site</p>
                        </div>
                    </div>
                    <div className={styles.profileContainer}>
                        <div className={styles.profileContainerWrapper}>
                            <div className={styles.imageWrapper}><img src="imageOne.png" /></div>
                            <div className={styles.profileInfoContainer}>
                                <h3>Tom Cruise</h3>
                                <p>Founder & Chairman</p>
                                <div>
                                    <span><i className="fa-brands fa-linkedin"></i></span>
                                    <span><i className="fa-brands fa-square-x-twitter"></i></span>
                                    <span><i className="fa-brands fa-square-instagram"></i></span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.profileContainerWrapper}>
                            <div className={styles.imageWrapper}><img src="imageTwo.png" /></div>
                            <div className={styles.profileInfoContainer}>
                                <h3>Tom Cruise</h3>
                                <p>Founder & Chairman</p>
                                <div>
                                    <span><i className="fa-brands fa-linkedin"></i></span>
                                    <span><i className="fa-brands fa-square-x-twitter"></i></span>
                                    <span><i className="fa-brands fa-square-instagram"></i></span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.profileContainerWrapper}>
                            <div className={styles.imageWrapper}><img src="imageThree.png" /></div>
                            <div className={styles.profileInfoContainer}>
                                <h3>Tom Cruise</h3>
                                <p>Founder & Chairman</p>
                                <div>
                                    <span><i className="fa-brands fa-linkedin"></i></span>
                                    <span><i className="fa-brands fa-square-x-twitter"></i></span>
                                    <span><i className="fa-brands fa-square-instagram"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Recomendation customHeight="24vh" customMarginBottom="50px" />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default About
