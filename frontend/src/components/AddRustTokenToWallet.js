import React, { useState, useEffect } from 'react';
import {
    RUST_TOKEN_ADDRESS as TOKEN_ADDRESS,
    RUST_TOKEN_SYMBOL as TOKEN_SYMBOL,
    RUST_TOKEN_DECIMALS as TOKEN_DECIMALS,
} from './constants'; // Import token details from your constants file

const AddRustTokenToWallet = () => {
  const [isAdded, setIsAdded] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  // Check if the token is already added to the wallet
  useEffect(() => {
    async function checkTokenAdded() {
      if (window.ethereum && window.ethereum.isMetaMask) {
        try {
          const tokenAdded = await window.ethereum.request({
            method: 'wallet_watchAsset',
            params: {
              type: 'ERC20',
              options: {
                address: TOKEN_ADDRESS,
                symbol: TOKEN_SYMBOL,
                decimals: TOKEN_DECIMALS,
              },
            },
          });
          setIsAdded(tokenAdded);
        } catch (error) {
          console.error('Error checking token:', error);
        }
      }
    }

    checkTokenAdded();
  }, []);

  const handleAddToken = async () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      try {
        // Request to add the token to the wallet
        await window.ethereum.request({
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20',
            options: {
              address: TOKEN_ADDRESS,
              symbol: TOKEN_SYMBOL,
              decimals: TOKEN_DECIMALS,
            },
          },
        });
        setIsAdded(true);
        setIsDisabled(true);
      } catch (error) {
        console.error('Error adding token:', error);
      }
    }
  };

  return (
    <div>
      {isAdded ? (
        <button
          disabled
          className="bg-green-500 text-white font-bold py-2 px-4 rounded"
        >
          Rust Token Added to Wallet
        </button>
      ) : (
        <button
          onClick={handleAddToken}
          disabled={isDisabled}
          className={`${
            isDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'
          } text-white font-bold py-2 px-4 rounded`}
        >
          {isDisabled ? 'Token Added to Wallet' : 'Add Token to Wallet'}
        </button>
      )}
    </div>
  );
};

export default AddRustTokenToWallet;
