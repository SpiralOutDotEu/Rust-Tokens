# Arbitrum Stylus Rust Tokens

Mint you own Arbitrum Stylus Rust Tokens: [Rust Tokens Website](https://rust-tokens.vercel.app/)

![Arbitrum Stylus Rust Tokens](https://github.com/SpiralOutDotEu/Rust-Tokens/blob/d107254c17c2dd19bb3a5749085616c2e5101fac/frontend/public/rustERC20tokens%20in%20arbitrum.png)

## Introduction
This repo is an exploration on building tokens with Rust for Arbitrum Stylus network.

> ⚠️ The code has not been audited, and should not be used in production.

## Prerequisites

Follow the guide here: https://docs.arbitrum.io/stylus/stylus-quickstart

## Building log

Here I log the steps as I build:

```bash
cargo stylus new --minimal erc20_rust
#  Copy code from https://github.com/OffchainLabs/stylus-sdk-rs/tree/stylus/examples/erc20
cd erc20_rust
cargo stylus check
# Uncompressed WASM size: 67.8 KB
# Compressed WASM size to be deployed onchain: 23.7 KB

# add private key to .env

cargo stylus deploy \
  --private-key-path=.env \
  --estimate-gas-only

# Now that checked that WETH code works ok I convert it to be a free mint ERC20 and checking again

cargo stylus check
# Uncompressed WASM size: 38.4 KB
# Compressed WASM size to be deployed onchain: 13.5 KB

cargo stylus deploy \
  --private-key-path=.env \
  --estimate-gas-only
# Deploying program to address 0xe41ae9376e984d117d273d8386e90f278a0860b4
# Estimated gas for deployment: 4058188

cargo stylus deploy \
  --private-key-path=.env

# Deployer address: 0x4f6f611a6d05892518c6c21617c76d336b857a7c
# Deploying program to address 0xe41ae9376e984d117d273d8386e90f278a0860b4
# Estimated gas for deployment: 4058188
# Submitting deployment tx...
# Confirmed deployment tx 0x51abc70c3c43d431b6a017779314605bfdf4446248513370384afb5a85a0ee88, gas used 3947674
# Activating program at address e41ae9376e984d117d273d8386e90f278a0860b4
# Estimated gas for activation: 14058829
# Submitting activation tx...
# Confirmed activation tx 0x0ad1a790e1979109dd89278211221647e3c68dd4bb094483b8a23b45c4bc7007, gas used 14055691
# 
# Contract token at https://stylus-testnet-explorer.arbitrum.io/address/0xE41aE9376E984D117D273d8386E90F278A0860B4

# Generate a front end to mint tokens
npx create-react-app

# add wallet connect components and mint function

# Create a forge project for classic solidity ERC20 token
forge init --no-git --vscode erc20_solidity

# Deploy in Arbitrum Stylus
forge create --rpc-url https://stylus-testnet.arbitrum.io/rpc \
--interactive  src/SolidityERC20Token.sol:SolidityERC20Token \

# Deployed to: 0x4a0Aa1d4d3f679A91Beea81722b83CF5A9e83056
# Transaction hash: 0xdfe7847807d330627e1db7981b9f16dadaea13d47ac7a4417301f25339ea82e7

```
