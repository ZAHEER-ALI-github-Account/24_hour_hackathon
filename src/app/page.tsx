import Navbar from "./component/navbar";
import First from "./component/first";
import Featured from "./component/featured";
import Explore from "./component/explore";
import Product from "./component/product";
import Footer from "./component/footer";
const home = () => {
  return (
    <div>
      <Navbar/>
      <First/>
      <Featured/>
      <Explore/>
      <Product/>
      <Footer/>
    </div>
  )
}
export default home;