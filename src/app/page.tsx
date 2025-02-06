import Navbar from "./component/navbar";
import First from "./component/first";
import Featured from "./component/featured";
import Categories from "./component/categories";
import Explore from "./component/explore";
import Product from "./component/product";
import Footer from "./component/footer";

const home = () => {
  return (
    <div className="overflow-hidden">
      <Navbar/>
      <First/>
      <Featured/>
      <Categories/>
      <Explore/>
      <Product/>
      <Footer/>
    </div>
  )
}
export default home;