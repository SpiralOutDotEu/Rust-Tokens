# Arbitrum Stylus Rust Tokens

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

```