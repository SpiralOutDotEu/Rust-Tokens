import './App.css';
import React, { useState } from 'react';
import ConnectWallet from './components/ConnectWallet';
import MintTokens from './components/MintTokens';

function App() {
  const [isWalletConnected, setWalletConnected] = useState(false);

  const handleWalletConnect = (status) => {
    setWalletConnected(status);
  };

  return (
    <div className="App">
      <ConnectWallet onWalletConnect={handleWalletConnect}></ConnectWallet>
      {isWalletConnected && (
        <>
        all ok, go on
        <MintTokens></MintTokens>
          {/* <MintTokens />
          <TransactionHistory />
          <TokenBalance /> */}
        </>
      )}
    </div>
  );
}

export default App;
