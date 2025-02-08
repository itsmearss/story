import { useState } from "react";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Timeline from "./components/timeline";
import GallerySection from "./components/gallery";
import PlacesSection from "./components/places";
import ReelsSection from "./components/reels";
import Footer from "./components/footer";
import MusicPlayer from "./components/music";

function App() {
  const [pin, setPin] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [error, setError] = useState("");

  const correctPin = "1234"; // PIN yang benar

  const handlePinSubmit = () => {
    if (pin === correctPin) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("❌ PIN salah, coba lagi!");
    }
  };

  return (
    <>
      {!isAuthenticated ? (
        // PIN SCREEN
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="bg-yellow-300 p-8 border-4 border-black shadow-[6px_6px_0px_black] rounded-lg text-center">
            <h2 className="text-3xl font-bold text-black">🔒 Masukkan PIN</h2>
            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="mt-4 p-3 border-4 border-black rounded-md w-32 text-center text-xl"
              maxLength={4}
            />
            <button
              onClick={handlePinSubmit}
              className="block mt-4 bg-black text-white px-6 py-2 rounded-lg shadow-[3px_3px_0px_white] border-2 border-white"
            >
              Masuk
            </button>
            {error && <p className="mt-2 text-red-500">{error}</p>}
          </div>
        </div>
      ) : (
        // WEBSITE SETELAH LOGIN
        <div className="relative min-h-screen bg-[url('/images/bg-2.jpeg')] bg-repeat bg-center">
          <div className="container mx-auto lg:border-x-4 border-black">
            <Navbar />
            <Hero startDate="2024-12-20T21:58:00" />
            <Timeline />
            <GallerySection />
            <PlacesSection />
            <ReelsSection />
            <MusicPlayer />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
