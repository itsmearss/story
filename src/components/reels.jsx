export default function ReelsSection() {
  const videos = ["/videos/video1.mp4", "/videos/video2.mp4", "/videos/3.mp4"];

  return (
    <section className="p-10 bg-blue-200 scroll-mt-16" id="Video">
      <h2 className="text-6xl font-bold text-black mb-10 mt-10">
        🎥 Our Videos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div
            key={index}
            className="border-4 border-black shadow-[6px_6px_0px_black] p-2 bg-yellow-400 flex justify-center items-center"
          >
            <div className="relative w-full pb-[177.77%] border-4 border-black shadow-[4px_4px_0px_black]">
              <video
                src={video}
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover hover:scale-105 transition-all"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
