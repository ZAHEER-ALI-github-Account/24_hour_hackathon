import Navbar from "./component/navbar";
import First from "./component/first";
import FeaturedComponent from "./component/featured";
import CategoriesComponent from "./component/categories";
import Explore from "./component/explore";
import ProductComponent from "./component/product";
import Footer from "./component/footer";

export default async function home() {
  return (
    <div className="overflow-hidden">
      <Navbar/>
      <First/>
      <FeaturedComponent/>
      <Categories/>
      <Explore/>
      <Product/>
      <Footer/>
    </div>
  )
}
