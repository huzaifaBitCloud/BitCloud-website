// import Link from "next/link";
// import { FaLinkedin, FaYoutube } from "react-icons/fa";

// const Footer = () => {
//   const currentYear = new Date().getFullYear(); // Get the current year dynamically

//   return (
//     <footer className="bg-white dark:bg-gray-900 border-t w-full">
//       <div className="container mx-auto px-4 py-6">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between">
//           {/* Logo Section */}
//           <div className="flex items-center mb-4 md:mb-0 py-6">
//             <img
//               src="/images/logo.svg"
//               alt="BitCloud Logo"
//               className="h-14 mr-3 md:ml-4"
//             />
//           </div>

//           {/* Rights Section */}
//           <div className="text-center mb-4 md:mb-0">
//             <span className="text-sm text-gray-500 dark:text-gray-400">
//               © {currentYear}{" "}
//               <Link
//                 href="https://bitcloudsolution.com/"
//                 className="hover:underline"
//               >
//                 BitCloud Solution
//               </Link>
//               . All Rights Reserved.
//             </span>
//           </div>

//           {/* Follow Us Section */}
//           <div className="flex flex-col items-center md:items-end">
//             <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
//               Follow Us
//             </h2>
//             <div className="flex space-x-4">
//               <Link
//                 href="https://www.linkedin.com/company/bitcloud-solution-software/"
//                 aria-label="LinkedIn"
//                 className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
//               >
//                 <FaLinkedin className="w-6 h-6" />
//               </Link>
//               <Link
//                 href="http://www.youtube.com/@BitCloudSolution"
//                 aria-label="YouTube"
//                 className="text-gray-500 hover:text-red-600 dark:hover:text-red-400"
//               >
//                 <FaYoutube className="w-6 h-6" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import Link from "next/link";
import { FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="bg-white dark:bg-gray-900 border-t w-full">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          {/* Logo Section */}
          <div className="flex items-center mb-4 md:mb-0 md:ml-6">
            <Link href="/">
              <img
                src="/images/logo.svg"
                alt="BitCloud Logo"
                className="h-14 mr-3"
              />
            </Link>
          </div>

          {/* Rights Section */}
          <div className="text-center mb-4 md:mb-0">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              © {currentYear}{" "}
              <Link
                href="https://bitcloudsolution.com/"
                className="hover:underline"
              >
                BitCloud Solution
              </Link>
              . All Rights Reserved.
            </span>
          </div>

          {/* Follow Us Section */}
          <div className="flex flex-col items-center md:items-end md:mr-6">
            <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Follow Us
            </h2>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/company/bitcloud-solution-software/"
                aria-label="LinkedIn"
                className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-6 h-6" />
              </Link>
              <Link
                href="http://www.youtube.com/@BitCloudSolution"
                aria-label="YouTube"
                className="text-gray-500 hover:text-red-600 dark:hover:text-red-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
