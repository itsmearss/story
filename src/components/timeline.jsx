export default function Timeline() {
  return (
    <div className="min-h-screen bg-lime-300 px-10 py-10">
      <h1 className="text-5xl font-bold text-black text-center mb-10">
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
              <div className="bg-white p-4 rounded-lg shadow-neo border-2 border-yellow-400">
                <h2 className="text-xl font-bold text-primary">First Meet</h2>
                <p className="text-secondary text-sm mt-1">
                  We met at a coffee shop on a rainy day.
                </p>
                <p className="text-accent text-xs mt-1">📅 12 March 2020</p>
              </div>
            </div>
            <div className="w-1/2"></div>
          </div>

          {/* Momen 2 */}
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2"></div>
            <div className="w-1/2 pl-6">
              <div className="bg-white p-4 rounded-lg shadow-neo border-2 border-yellow-400">
                <h2 className="text-xl font-bold text-secondary">First Date</h2>
                <p className="text-primary text-sm mt-1">
                  We had our first date at the beach.
                </p>
                <p className="text-accent text-xs mt-1">📅 20 April 2020</p>
              </div>
            </div>
          </div>

          {/* Momen 3 */}
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2 pr-6">
              <div className="bg-white p-4 rounded-lg shadow-neo border-2 border-yellow-400">
                <h2 className="text-xl font-bold text-accent">First Kiss</h2>
                <p className="text-primary text-sm mt-1">
                  We shared our first kiss under the stars.
                </p>
                <p className="text-secondary text-xs mt-1">📅 15 May 2020</p>
              </div>
            </div>
            <div className="w-1/2"></div>
          </div>

          {/* Momen 4 */}
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2"></div>
            <div className="w-1/2 pl-6">
              <div className="bg-white p-4 rounded-lg shadow-neo border-2 border-yellow-400 hover:bg-lime-200 transition-all duration-300">
                <h2 className="text-xl font-bold text-primary">Engagement</h2>
                <p className="text-secondary text-sm mt-1">
                  We got engaged on a beautiful sunset.
                </p>
                <p className="text-accent text-xs mt-1">📅 10 June 2021</p>
              </div>
            </div>
          </div>
        </div>

        {/* Titik (Bullet) pada Timeline */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-3 h-3 bg-black rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
