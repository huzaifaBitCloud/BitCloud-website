import { FaHandsHelping, FaCog, FaUserGraduate } from "react-icons/fa";

const Achievements = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        {/* Title */}
        {/* <div className="mt-16">
          <div>
            <p className="font-playfair font-semibold text-4xl mb-5 text-center">
              Our <span className="text-yellow">Achievements</span>
            </p>
          </div>
        </div> */}
        <h2 className="text-4xl font-bold text-center text-black mb-10">
          Our Achievements
        </h2>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
          <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-2xl shadow-lg text-center transform transition duration-700 hover:-translate-y-3">
            <div className="flex justify-center items-center mb-6">
              <FaHandsHelping className="w-14 h-14 text-green-500" />
            </div>
            <h3 className="text-4xl font-bold text-gray-900">120+</h3>
            <p className="text-gray-600 mt-4 text-lg">Implementations</p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-r from-red-50 via-red-100 to-red-50 p-6 rounded-lg shadow-md text-center transform transition duration-500 hover:scale-105">
            <div className="flex justify-center items-center mb-4">
              <FaCog className="w-12 h-12 text-red-500" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800">$1.1M+</h3>
            <p className="text-gray-600 mt-2">Rev Managed</p>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 p-6 rounded-lg shadow-md text-center transform transition duration-500 hover:scale-105">
            <div className="flex justify-center items-center mb-4">
              <FaUserGraduate className="w-12 h-12 text-gray-500" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800">602+</h3>
            <p className="text-gray-600 mt-2">Trained Users</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
