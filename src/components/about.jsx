import Button from "./button";

export default function AboutSection() {
  return (
    <section className="flex flex-col md:flex-row items-center border-4 border-black bg-white shadow-[6px_6px_0px_black] p-6 md:p-10">
      {/* Kolom Foto */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/images/2.png"
          alt="Profile"
          className="w-3/4 md:w-2/3 lg:w-1/2 border-4 border-black shadow-[4px_4px_0px_black] object-cover"
        />
      </div>

      {/* Kolom Deskripsi */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0 text-center md:text-left">
        <h2 className="text-4xl font-bold text-black">Tentang Saya</h2>
        <p className="text-lg mt-4 text-gray-700 mb-4">
          Saya adalah seorang developer yang berfokus pada desain yang menarik
          dan fungsional. Menggunakan konsep{" "}
          <span className="font-bold">Neobrutalism</span> untuk menciptakan
          tampilan unik.
        </p>

        <Button />
      </div>
    </section>
  );
}
