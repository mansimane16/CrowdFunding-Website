import React from "react";
import logo from "../assets/logo.png";
import { ConnectWallet } from "@thirdweb-dev/react";

export default function Navbar() {
  const customTealColor = "bg-teal"; // Define a custom CSS class

  return (
    <nav className={`flex items-center justify-between px-4 py-3 ${customTealColor} md:px-12 flex-nowrap w-auto`}>
      <style>
        {`
          .${customTealColor} {
            background: #003738; // Set the background color to teal blue
            color: white; // Set text color to white for contrast
          `}
      </style>
      <div className="flex items-center">
        <img className="h-20 w-20 mr-3" src={logo} alt="Logo" /> {/* Place the logo here */}
        <span className="text-white text-2xl">CROWDSY</span> {/* Place "CROWDSY" after the logo */}
      </div>

      <div className="flex items-center ml-auto"> {/* Added ml-auto for right alignment */}
        <a href="/" className="text-white mr-6 hover:underline text-xl"> {/* Home link */}
          Home
        </a>
        <a href="/About-us" className="text-white mr-6 hover:underline text-xl"> {/* About Us link */}
          About Us
        </a>
        <a href="" className="text-white mr-6 hover:underline text-xl"> {/* Contact Us link with email */}
          Contact Us
        </a>
        <ConnectWallet
          theme="dark"
          auth={{
            loginOptional: false,
          }}
        />
      </div>
    </nav>
  );
}
