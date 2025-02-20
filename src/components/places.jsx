export default function PlacesSection() {
  const places = [
    {
      name: "UNU",
      img: "/images/unu.jpg",
      desc: "Exhibition Under The Same Sun",
      color: "bg-red-400",
    },
    {
      name: "Museum Sonobudoyo",
      img: "/images/sonobudoyo.jpg",
      desc: "Puppet museum with traditional Javanese puppets",
      color: "bg-yellow-400",
    },
    {
      name: "Museum Benteng Vredeburg",
      img: "/images/vredeburg.jpg",
      desc: "The historic fortress of Vredeburg Museum",
      color: "bg-blue-400",
    },
    {
      name: "Museum Kotagede",
      img: "/images/kotagede.jpg",
      desc: "Traditional culture museum in Kotagede",
      color: "bg-purple-400",
    },
    {
      name: "Embung Giwangan",
      img: "/images/giwangan.jpg",
      desc: "The beauty of the reservoir in the middle of the city",
      color: "bg-green-400",
    },
    {
      name: "Tamansari",
      img: "/images/tamansari.jpg",
      desc: "The beauty of the water palace in Yogyakarta",
      color: "bg-orange-400",
    },
  ];

  return (
    <section className="p-10 bg-yellow-200 scroll-mt-16" id="Place">
      <h2 className="text-6xl font-bold text-black mb-10 mt-10">
        🌍 Places We've Visited
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
