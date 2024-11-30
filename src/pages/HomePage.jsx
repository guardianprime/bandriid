import Advert from "../components/Advert";
import Aside from "../components/Aside";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import HeroAdvert from "../components/HeroAdvert";
import Navbar from "../components/Navbar";
import ProductShowcase from "../components/ProductShowcase"
import Promo from "../components/Promo";


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
                    <p>Today</p>
                    <h3>Flash sales</h3>
                    <ProductShowcase />
                </section>
                <section>
                    <p>Categories</p>
                    <h3>Browse by cateogories</h3>
                    <Categories />
                </section>
                <section>
                    <p>This Month</p>
                    <h3>Best Selling Products</h3>
                </section>
                <Advert />
                <section>
                    <p>Our products</p>
                    <h3>Explore our products</h3>
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