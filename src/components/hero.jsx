import { useState, useEffect } from "react";

export default function Hero({ startDate }) {
  const [elapsedTime, setElapsedTime] = useState("");

  useEffect(() => {
    const updateElapsedTime = () => {
      const start = new Date(startDate).getTime();
      const now = new Date().getTime();
      const diff = now - start;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setElapsedTime(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    updateElapsedTime();
    const interval = setInterval(updateElapsedTime, 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <section className="flex flex-col md:flex-row items-center border-b-4 border-black justify-center text-black bg-white">
      {/* Kolom 1 */}
      <div className="flex-1 p-10 lg:border-r-4 w-full border-black bg-blue-400 text-white relative flex justify-center items-center">
        <img
          src="/images/2.png"
          alt="Gambar 2"
          className="w-1/2 md:w-1/3 lg:w-auto max-w-xs object-contain"
        />
        <h2 className="absolute bottom-5 left-5 text-5xl font-bold text-black opacity-50">
          Annur
        </h2>
      </div>

      {/* Kolom 2 */}
      <div className="flex-1 p-4 md:p-6 lg:p-10 w-full border-black text-center max-w-xs sm:max-w-sm py-10 md:max-w-md lg:max-w-lg mx-auto">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold">❤️</h2>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          We Fall In Love
        </h2>
        <p className="mt-2 text-lg sm:text-xl md:text-2xl mb-4">
          20th December 2024
        </p>
        <div className="relative p-4 md:p-6 border-4 border-black bg-white shadow-[6px_6px_0px_black] rounded-lg">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mt-2">
            {elapsedTime}
          </p>
        </div>
      </div>

      {/* Kolom 3 */}
      <div className="flex-1 p-10 w-full lg:border-l-4 border-black bg-orange-800 text-white relative flex justify-center items-center">
        <img
          src="/images/1.png"
          alt="Gambar 1"
          className="w-1/2 md:w-1/3 lg:w-auto max-w-xs object-contain items-center"
        />
        <h2 className="absolute bottom-5 left-5 text-5xl font-bold text-black opacity-50">
          Fida
        </h2>
      </div>
    </section>
  );
}
