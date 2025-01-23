import { FaHandsHelping, FaCog, FaUserGraduate } from "react-icons/fa";

const Achievements = () => {
  return (

    <section className="bg-gray-50 py-12">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-bold text-center text-black mb-10">
      Our Achievements
    </h2>

    {/* Achievements Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl shadow-lg text-center transform transition duration-700 hover:-translate-y-3 custom-cards-ourClient">
        <div className="flex justify-center items-center mb-4">
          <FaHandsHelping className="w-12 h-12 text-gray-500" />
        </div>
        <h3 className="text-3xl font-bold text-gray-900">120+</h3>
        <p className="text-gray-600 mt-2 text-lg">Implementations</p>
      </div>

      {/* Card 2 */}
      <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-xl shadow-lg text-center transform transition duration-700 hover:-translate-y-3 custom-card-2-achievements">
        <div className="flex justify-center items-center mb-4">
          <FaCog className="w-12 h-12 text-gray-500" />
        </div>
        <h3 className="text-3xl font-bold text-gray-900">$1.1M+</h3>
        <p className="text-gray-600 mt-2 text-lg">Rev Managed</p>
      </div>

      {/* Card 3 */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl shadow-lg text-center transform transition duration-700 hover:-translate-y-3 custom-card-3-achievements">
        <div className="flex justify-center items-center mb-4">
          <FaUserGraduate className="w-12 h-12 text-gray-500" />
        </div>
        <h3 className="text-3xl font-bold text-gray-900">602+</h3>
        <p className="text-gray-600 mt-2 text-lg">Trained Users</p>
      </div>
    </div>
  </div>
</section>


    // <section className="bg-gray-50 py-12">
    //   <div className="container mx-auto px-6">
    //     <h2 className="text-4xl font-bold text-center text-black mb-10">
    //       Our Achievements
    //     </h2>

    //     {/* Achievements Grid */}
    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl ml-[196px]">
    //       {/* Card 1 */}
    //       <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl shadow-lg text-center transform transition duration-700 hover:-translate-y-3 custom-cards-ourClient">
    //         {" "}
    //         {/* Reduced padding and rounded the corners */}
    //         <div className="flex justify-center items-center mb-4">
    //           <FaHandsHelping className="w-12 h-12 text-gray-500" />
    //         </div>
    //         <h3 className="text-3xl font-bold text-gray-900">120+</h3>
    //         <p className="text-gray-600 mt-2 text-lg">Implementations</p>
    //       </div>

    //       {/* Card 2 */}
    //       <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-xl shadow-lg text-center transform transition duration-700 hover:-translate-y-3 custom-card-2-achievements">
    //         {" "}
    //         {/* Reduced padding and rounded the corners */}
    //         <div className="flex justify-center items-center mb-4">
    //           <FaCog className="w-12 h-12 text-gray-500" />
    //         </div>
    //         <h3 className="text-3xl font-bold text-gray-900">$1.1M+</h3>
    //         <p className="text-gray-600 mt-2 text-lg">Rev Managed</p>
    //       </div>

    //       {/* Card 3 */}
    //       <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl shadow-lg text-center transform transition duration-700 hover:-translate-y-3 custom-card-3-achievements">
    //         {" "}
    //         {/* Reduced padding and rounded the corners */}
    //         <div className="flex justify-center items-center mb-4">
    //           <FaUserGraduate className="w-12 h-12 text-gray-500" />
    //         </div>
    //         <h3 className="text-3xl font-bold text-gray-900">602+</h3>
    //         <p className="text-gray-600 mt-2 text-lg">Trained Users</p>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Achievements;
