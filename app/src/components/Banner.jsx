import React, { useState } from "react";
import banner from "../assets/banner4.png";
import Modal from "./Modal";

export default function Banner() {
  const [showModal, setShowModal] = useState(false);

  const textStyles = {
    position: "absolute",
    top: "150px",
    left: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
    width: "100%",
  };

  return (
    <div className="bg-white text-black flex flex-col items-center justify-center relative">
      <div className="md:w-full h-2/5 mt-4 md:mt-0 border-8 rounded-md">
        <img src={banner} alt="Banner Image" />
      </div>

      <div style={textStyles}>
        <p className="font-sans italic font-bold text-7xl text-black">
          Together, We Create Change
        </p>
        <p className="text-lg text-black md:font-semibold">
          Campaigns, secured by{" "}
          <span
            className="underline text-purple-600 font-thin md:font-semibold cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            Blockchain
          </span>
        </p>
      </div>

      {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  );
}
