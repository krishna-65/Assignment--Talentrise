import React, { useState } from "react";
import AboutUs from "./components/About";

import Contact from "./components/Contact";
import { RiNotification3Line } from "react-icons/ri";
const App = () => {
   const [showContact, setShowContact] = useState(false);
  return (
    <div className="w-[100vw] h-[100vh]">
      <div className=" flex justify-center items-center h-screen bg-gray-100 p-4">
          <div className="max-w-md w-full bg-white shadow-lg h-[100%] rounded-lg overflow-hidden flex flex-col justify-between">
                           <div>
                                {/* Header */}
                                <div className="bg-purple-800 text-white px-6 py-4 flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <img
                                    src="https://cbx-prod.b-cdn.net/COLOURBOX63787808.jpg?width=800&height=800&quality=70"
                                    alt="Profile"
                                    className="w-10 h-10 rounded-full border-2 border-white"
                                    />
                                    <div>
                                    <p className="text-sm">Hello, Welcome 🎉</p>
                                    <h3 className="text-lg font-semibold">John Weak</h3>
                                    </div>
                                </div>
                                <button>
                                         <RiNotification3Line />
                                </button>
                                </div>
                               {showContact? <Contact/> : <AboutUs handleContact={setShowContact}/>}
                           </div>

                             {/* Bottom Navigation */}
                            <div className="bg-gray-100 flex justify-between px-6 py-3 text-gray-600 text-sm">
                              <p>Home</p>
                              <p>Compliance</p>
                              <p>Eligibility</p>
                              <p>Resource</p>
                              <p>Reminder</p>
                            </div>
              </div>
          </div>

      </div>
  );
};

export default App;
