import React from "react";
import Footer from "../Components/Block/Footer";
import Hero from "../Components/Block/Hero";
import HeroLikes from "../Components/Block/HeroLikes";
import MoreProps from "../Components/Block/MoreProps";
import ProductsView from "../Components/Block/ProductsView";
import Support from "../Components/Block/Support";

const LandingScreen = () => {
  const [image, setImage] = React.useState("");

  return (
    <div>
      <Hero />
      <ProductsView />
      <HeroLikes />
      <MoreProps />
    </div>
  );
};

export default LandingScreen;
