export default function PlacesSection() {
  const places = [
    {
      name: "Paris, France",
      img: "/images/paris.jpg",
      desc: "City of Love and Lights",
      color: "bg-red-400",
    },
    {
      name: "Kyoto, Japan",
      img: "/images/kyoto.jpg",
      desc: "The Land of Temples and Sakura",
      color: "bg-yellow-400",
    },
    {
      name: "Bali, Indonesia",
      img: "/images/bali.jpg",
      desc: "Paradise Island with Beautiful Beaches",
      color: "bg-blue-400",
    },
    {
      name: "Santorini, Greece",
      img: "/images/santorini.jpg",
      desc: "Blue Domes & Stunning Sunsets",
      color: "bg-purple-400",
    },
    {
      name: "New York, USA",
      img: "/images/nyc.jpg",
      desc: "The City That Never Sleeps",
      color: "bg-green-400",
    },
    {
      name: "Cappadocia, Turkey",
      img: "/images/cappadocia.jpg",
      desc: "Hot Air Balloons & Magical Landscapes",
      color: "bg-orange-400",
    },
  ];

  return (
    <section className="p-10 bg-white">
      <h2 className="text-5xl font-bold text-center text-black mb-10">
        🌍 Places We Have to Go
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {places.map((place, index) => (
          <div
            key={index}
            className={`border-4 border-black shadow-[6px_6px_0px_black] p-4 ${place.color} hover:scale-105 hover:shadow-[8px_8px_0px_black] transition-all`}
          >
            <img
              src={place.img}
              alt={place.name}
              className="w-full h-48 object-cover border-b-4 border-black"
            />
            <h3 className="text-2xl font-bold text-white mt-4">{place.name}</h3>
            <p className="text-black text-lg">{place.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
