import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import AllReviews from "../AllReviews/AllReviews";
import Banner from "../Banner/Banner";
import Faq from "../Faq/Faq";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner></Banner>
      <Products />
      <AllReviews />
      <Faq />
      <Footer></Footer>
    </div>
  );
};

export default Home;
