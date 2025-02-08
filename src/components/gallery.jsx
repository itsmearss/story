export default function GallerySection() {
  const images = [
    "/images/annur.jpg",
    "/images/IMG_2979_1.JPG",
    "/images/fida.jpg",
    "/images/IMG_2980_1.JPG",
    "/images/fida2.jpg",
    "/images/IMG_2981_1.JPG",
  ];

  return (
    <section className="p-10 bg-teal-100 scroll-mt-16" id="Gallery">
      <h2 className="text-6xl font-bold text-black mb-10 mt-10">📸 Gallery</h2>

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
