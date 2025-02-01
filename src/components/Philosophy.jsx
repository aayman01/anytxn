import Image from "next/image";

const Philosophy = () => {
  return (
    <section className="flex flex-col items-center justify-center py-12 bg-white">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <h2 className="text-blue-600 text-lg font-bold">CORE TECH</h2>
          <h3 className="text-2xl font-semibold mt-2">
            Artificial Intelligence
          </h3>
          <p className="text-gray-600 mt-2">
            Using AI/ML to upgrade legacy processes, reduce cost, and improve
            efficiency
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-10 h-1 bg-gradient-to-r from-orange-400 to-blue-600"></div>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <h2 className="text-orange-500 text-lg font-bold">MECHANISM</h2>
          <h3 className="text-2xl font-semibold mt-2">Blockchain</h3>
          <p className="text-gray-600 mt-2">
            Enhanced security by eliminating intermediaries
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-12 mt-8">
        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <h2 className="text-green-500 text-lg font-bold">INFRASTRUCTURE</h2>
          <h3 className="text-2xl font-semibold mt-2">Cloud</h3>
          <p className="text-gray-600 mt-2">Scale resources easily on-demand</p>
        </div>
        <div className="w-10 h-1 bg-gradient-to-b from-orange-400 to-blue-600 md:w-1 md:h-10"></div>
        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <h2 className="text-yellow-500 text-lg font-bold">RESOURCE</h2>
          <h3 className="text-2xl font-semibold mt-2">Data</h3>
          <p className="text-gray-600 mt-2">
            Valuable, actionable insights from mass data sources
          </p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;