import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Timeline from "./components/timeline";
import About from "./components/about";
import GallerySection from "./components/gallery";
import PlacesSection from "./components/places";
import ReelsSection from "./components/reels";

function App() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto lg:border-x-4 border-black">
          <Navbar />
          <Hero startDate="2024-12-20T21:58:00" />
          <Timeline />
          <GallerySection />
          <PlacesSection />
          <ReelsSection />
        </div>
      </div>
    </>
  );
}

export default App;
