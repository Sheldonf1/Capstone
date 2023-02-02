import { useState } from "react";
import img1 from "../images/mentally-logo.png";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="bg-ally9">
      <div className="justify-between px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="/" aria-label="Company" title="Company" className="inline-flex items-center mr-8">
              <img src={img1} alt="Company Logo" className="w-40"></img>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
              }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-xl tracking-wide text-ally7 transition-colors duration-200 hover:text-ally1">
                <a href="/">Home</a>
              </li>
              <li className="text-xl tracking-wide text-ally7 transition-colors duration-200 hover:text-ally1">
                <a href="/MyHealth360">MyHealth360</a>
              </li>
              <li className="text-xl tracking-wide text-ally7 transition-colors duration-200 hover:text-ally1">
                <a href="/Contact">Contact</a>
              </li>
              <li className="text-xl tracking-wide text-ally7 transition-colors duration-200 hover:text-ally1">
                <a href="/mentAllyForm">myMind360</a>
              </li>
              <li className="text-xl tracking-wide text-ally7 transition-colors duration-200 hover:text-ally1">
                <a href="/chat">Chat With A Specialist</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}






// import React, { useContext } from 'react';
// import { Link } from "react-router-dom";
// import { AuthContext } from '../context/authContext';
// import img1 from "../images/mentally-logo.png";
// import { useNavigate } from 'react-router-dom';
// const NavigationBar = () => {
// const { currentUser, logout } = useContext(AuthContext);
// let navigate = useNavigate();
// const logouttt = () => {
//   navigate('/');
//   logout();
// }

// return (
// <div class="bg-ally6">
// <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
// <div class="relative flex items-center justify-between">
// <div class="flex items-center">
// <a href="/" aria-label="Company" title="Company" class="inline-flex items-center mr-8">
//     <img src={img1} alt="Company Logo" class="w-40"></img>
// </a>

// <ul class="flex items-center hidden space-x-8 lg:flex">
// <li>
//  <Link
// to="/"
// aria-label="Our product"
// title="Our product"
// class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
// >
// Home
// </Link>
// </li>
// <li>
//  <Link
// to="/MyHealth360"
// aria-label="Our product"
// title="Our product"
// class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
// >
// myHealth360
// </Link>
// </li>
// <li>
// <Link
// to="/contact"
// aria-label="Our product"
// title="Our product"
// class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
// >
// Contact
// </Link>
// </li>
// <li>
// <Link
// to="/mentAllyForm"
// aria-label="Our product"
// title="Our product"
// class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
// >
// myMind360
// </Link>
// </li>
// <li>
// <Link
// to="/chat"
// aria-label="Our product"
// title="Our product"
// class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
// >
// Chat
// </Link>
// </li>
// </ul>
// </div>
// <div class="flex items-center hidden space-x-8 lg:flex text-white">
// <span>{currentUser?.username}</span>
//           {currentUser ? (
//             <span onClick={logouttt}>Logout</span>
//           ) : (
//             <Link class="color-white" to="/login">
//                   Login
//                 </Link>
//           )}
// </div>
// <div class="lg:hidden">
// <button
//                 aria-label="Open Menu"
//                 title="Open Menu"
//                 class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
//               >
//                 <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
//                   <path
//                     fill="currentColor"
//                     d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
//                   />
//                   <path
//                     fill="currentColor"
//                     d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
//                   />
//                   <path
//                     fill="currentColor"
//                     d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   export default NavigationBar;