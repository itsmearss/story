export default function GallerySection() {
  const images = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
  ];

  return (
    <section className="p-10 bg-white">
      <h2 className="text-5xl font-bold text-center text-black mb-10">
        📸 Gallery
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="border-4 border-black shadow-[6px_6px_0px_black] overflow-hidden hover:scale-105 transition-transform"
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
