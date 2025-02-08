export default function Timeline() {
  return (
    <div
      className="min-h-screen bg-lime-300 px-10 py-10 scroll-mt-16"
      id="Journey"
    >
      <h1 className="text-6xl font-bold text-black text-center mb-10 mt-10">
        Our Love Journey.
      </h1>
      <div className="relative">
        {/* Garis Timeline */}
        <div className="absolute left-1/2 w-1 h-full bg-black transform -translate-x-1/2"></div>

        {/* Card Timeline */}
        <div className="space-y-6">
          {/* Momen 1 */}
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2 pr-6">
              <div className="bg-white p-4 rounded-lg shadow-neo border-2 border-yellow-400 hover:bg-blue-200 transition-all duration-300">
                <h2 className="text-xl font-bold text-primary">First Meet</h2>
                <p className="text-secondary text-sm mt-1">lupa</p>
                <p className="text-accent text-xs mt-1">📅 lupa</p>
              </div>
            </div>
            <div className="w-1/2"></div>
          </div>

          {/* Momen 2 */}
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2"></div>
            <div className="w-1/2 pl-6">
              <div className="bg-white p-4 rounded-lg shadow-neo border-2 border-yellow-400 hover:bg-blue-200 transition-all duration-300">
                <h2 className="text-xl font-bold text-secondary">
                  First Date (Mungkin)
                </h2>
                <p className="text-primary text-sm mt-1">
                  Ga sengaja jalan berdua ke kotagede, giwangan.
                </p>
                <p className="text-accent text-xs mt-1">📅 7 Desember 2024</p>
              </div>
            </div>
          </div>

          {/* Momen 3 */}
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2 pr-6">
              <div className="bg-white p-4 rounded-lg shadow-neo border-2 border-yellow-400 hover:bg-blue-200 transition-all duration-300">
                <h2 className="text-xl font-bold text-accent">Confess</h2>
                <p className="text-primary text-sm mt-1">
                  fida type: "kita cb dulu aja"
                </p>
                <p className="text-secondary text-xs mt-1">
                  📅 20 Desember 2024
                </p>
              </div>
            </div>
            <div className="w-1/2"></div>
          </div>

          {/* Momen 4 */}
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2"></div>
            <div className="w-1/2 pl-6">
              <div className="bg-white p-4 rounded-lg shadow-neo border-2 border-yellow-400 hover:bg-blue-200 transition-all duration-300">
                <h2 className="text-xl font-bold text-primary">First Date</h2>
                <p className="text-secondary text-sm mt-1">
                  nonton 1 kakak 7 ponakan sambil nangid
                </p>
                <p className="text-accent text-xs mt-1">📅 5 Februari 2025</p>
              </div>
            </div>
          </div>
        </div>

        {/* Momen 5 */}
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2 pr-6">
            <div className="bg-white p-4 rounded-lg shadow-neo border-2 border-yellow-400 hover:bg-blue-200 transition-all duration-300">
              <h2 className="text-xl font-bold text-accent">Jadian</h2>
              <p className="text-primary text-sm mt-1">
                mau g jdi pacar aku, ya x ga kuy
              </p>
              <p className="text-secondary text-xs mt-1">📅 20 Februari 2025</p>
            </div>
          </div>
          <div className="w-1/2"></div>
        </div>

        {/* Titik (Bullet) pada Timeline */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-3 h-3 bg-black rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
