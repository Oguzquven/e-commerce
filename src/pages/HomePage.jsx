import HeroSection from "../components/HeroSection";
import EditorsPick from "../components/EditorsPick";
import BestsellerProducts from "../components/BestsellerProducts";
import VitaClassicProduct from "../components/VitaClassicProduct";
import NeuralUniverse from "../components/NeuralUniverse";
import FeaturedPosts from "../components/FeaturedPosts";

function HomePage() {
  return (
    <div className="w-full overflow-hidden">
      <HeroSection />
      <EditorsPick />
      <BestsellerProducts />
      <VitaClassicProduct />
      <NeuralUniverse />
      <FeaturedPosts />
    </div>
  );
}

export default HomePage;
