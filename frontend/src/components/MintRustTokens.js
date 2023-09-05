import React, { useState } from 'react';
import { ethers } from 'ethers';
import { RUST_TOKEN_ADDRESS } from './constants'

var abi = [
    "function mint()",
];
const TOKEN_ADDRESS = RUST_TOKEN_ADDRESS;


const MintRustTokens = () => {
    const [isWaiting, setIsWaiting] = useState(false);
    const [transactionHash, setTransactionHash] = useState('');
    const [error, setError] = useState('');



    const handleMintTokens = async () => {
        const provider = new ethers.BrowserProvider(window.ethereum); // Replace with your Ethereum JSON-RPC URL
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(TOKEN_ADDRESS, abi, signer);
        
        setIsWaiting(true);
        setError('');

        try {
            // Call the mint function (assuming it's a public function without parameters)
            const tx = await contract.mint();
            await tx.wait();

            // Transaction successful
            setIsWaiting(false);
            setTransactionHash(tx.hash);
        } catch (err) {
            // Transaction failed
            setError(err.message);
            setIsWaiting(false);
        }
    };

    return (
        <div>
            {transactionHash ? (
                <div>
                    <div className="bg-green-100 p-4 rounded-md max-w-md mx-auto">
                        <p className="text-green-800">
                            Transaction successful! Transaction hash:
                            <span className="inline-block break-all text-xs max-w-xs text-blue-700">
                                {transactionHash}
                            </span>
                        </p>
                        <a
                            href={"https://stylus-testnet-explorer.arbitrum.io/tx/" + transactionHash}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline mt-2 block"
                        >
                            View on Block Explorer
                        </a>
                    </div>
                    <button
                        disabled
                        className="bg-gray-300 text-gray-600 cursor-not-allowed"
                    >
                        Refresh the page to mint again
                    </button>
                </div>
            ) : error ? (
                <div className="bg-red-100 p-4 rounded-md max-w-md mx-auto">
                    <p className="text-red-800 break-words">
                        Error: {error}
                    </p>
                    <button
                        onClick={() => setError('')}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2 w-full"
                    >
                        Dismiss
                    </button>
                </div>
            ) : isWaiting ? (
                <button
                    disabled
                    className="bg-gray-300 text-gray-600 cursor-not-allowed"
                >
                    Waiting...
                </button>
            ) : (
                <button onClick={handleMintTokens} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Mint Rust Tokens
                </button>
            )}
        </div>
    );
};

export default MintRustTokens;
