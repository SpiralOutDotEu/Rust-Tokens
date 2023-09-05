import './App.css';
import React, { useState } from 'react';
import ConnectWallet from './components/ConnectWallet';
import MintRustTokens from './components/MintRustTokens';
import MintSolidityTokens from './components/MintSolidityTokens';
// import cryptoImage from 'rustERC20tokens in arbitrum.png';

function App() {
  const [isWalletConnected, setWalletConnected] = useState(false);

  const handleWalletConnect = (status) => {
    setWalletConnected(status);
  };

  return (
    <div className="App">
 <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center">
      <header className="text-4xl font-extrabold text-indigo-500 mb-6">
        RUST Tokens 0.1
      </header>
      <img
        src="/rustERC20tokens in arbitrum.png"
        alt="Crypto"
        className="max-w-md w-full rounded-lg shadow-lg mb-8"
      />
      <div className="max-w-3xl text-center mb-8">
        <p className="text-lg text-gray-400">
          Explore the world of smart contracts with RUST Tokens. Join our
          experiment to compare Rust and Solidity.
        </p>
        <p className="text-lg text-gray-400 mt-4">
          Mint tokens and be a part of our journey. To learn more, visit our{' '}
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:underline"
          >
            GitHub
          </a>{' '}
          or follow us on{' '}
          <a
            href="https://twitter.com/your-twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:underline"
          >
            Twitter
          </a>
          .
        </p>
      </div>

      <ConnectWallet onWalletConnect={handleWalletConnect} />



      {isWalletConnected && (
        <>
        <div className="lg:flex">
          <MintRustTokens></MintRustTokens>
          <MintSolidityTokens></MintSolidityTokens>
        </div>
        </>
      )}
    </div>
    </div>
  );
}

export default App;
