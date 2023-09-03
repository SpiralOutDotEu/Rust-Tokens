import './App.css';
import React, { useState } from 'react';
import ConnectWallet from './components/ConnectWallet';

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
          {/* <MintTokens />
          <TransactionHistory />
          <TokenBalance /> */}
        </>
      )}
    </div>
  );
}

export default App;
