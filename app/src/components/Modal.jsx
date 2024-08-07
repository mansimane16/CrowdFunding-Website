import React from "react";

export default function Modal({ setShowModal }) {
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center p-5">
      <div className="relative bg-gradient-to-b from-blue-200 to-white p-5 border-4 border-blue-500 rounded-lg max-w-xs max-h-60">
        <div className="pb-4">
          <h3 className="text-lg font-bold text-black">
            Bridge your Goerli Eth to zkEVM
          </h3>

          <a
  href="https://wallet.polygon.technology/zkEVM-Bridge/bridge"
  target="_blank"
  style={{
    background: 'linear-gradient(20deg, #14C1EE, #16E9ED)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'black', // Change to black
  }}
  className="italic"
>
  Bridge Link
</a>


        </div>

        <div>
          <h3 className="text-lg font-bold text-black">zkEVM faucet</h3>

          <a
            href="https://faucet.triangleplatform.com/polygonzkevm/testnet"
            target="_blank"
        
  style={{
    background: 'linear-gradient(20deg, #14C1EE, #16E9ED)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'black', // Change to black
  }}
            className="italic"
          >
            Faucet Link
          </a>
        </div>

        <button
          className="absolute top-0 right-0 mt-4 mr-4"
          onClick={() => setShowModal(false)}
        >
          X
        </button>
      </div>
    </div>
  );
}
