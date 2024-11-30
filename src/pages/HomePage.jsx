import Advert from "../components/Advert";
import Aside from "../components/Aside";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import HeroAdvert from "../components/HeroAdvert";
import Navbar from "../components/Navbar";
import ProductShowcase from "../components/ProductShowcase"
import Promo from "../components/Promo";
import BestSelling from "./BestSelling";


function HomePage() {
    return (
        <>
            <header>
                <Promo />
                <Navbar />
            </header>
            <main>
                <section className="hero">
                    <Aside />
                    <HeroAdvert />
                </section>
                <section className="section-two">
                    <div className="design-container">
                        <div className="design"></div>
                        <p>Today</p>
                    </div>
                    <h3>Flash sales</h3>
                    <ProductShowcase />
                    <button>View all products</button>
                </section>
                <section className="section-three">
                    <div className="design-container">
                        <div className="design"></div>
                        <p>Categories</p>
                    </div>
                    <h3>Browse by cateogories</h3>
                    <Categories />
                </section>
                <section className="section-four">
                    <div className="section-wrapper">
                        <div className="design-container">
                            <div className="design"></div>
                            <p>This Month</p>
                        </div>
                        <button>View All</button>
                    </div>
                    <h3>Best Selling Products</h3>
                    <BestSelling height="semi" />
                </section>
                <Advert />
                <section className="section-five">
                    <div className="design-container">
                        <div className="design"></div>
                        <p>Our products</p>
                    </div>
                    <h3>Explore our products</h3>
                    <div className="section-five-container"> <BestSelling height="full" /></div>
                    <div className="section-five-container">  <BestSelling height="full" /></div>
                </section>
                <section>
                    <p>featured</p>
                    <h3>New Arrival</h3>
                    <div>
                        <div>FREE AND FAST SERVICE</div>
                        <div>24/7 CUSTOMER SERVICE</div>
                        <div>MONEY BACK GURANTEE</div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default HomePage;