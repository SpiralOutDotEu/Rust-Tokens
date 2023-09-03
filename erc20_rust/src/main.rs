#![cfg_attr(not(feature = "export-abi"), no_main, no_std)]
extern crate alloc;

use crate::erc20::{Erc20, Erc20Params};
use alloc::vec::Vec;
use stylus_sdk::{alloy_primitives::U256, msg, prelude::*};

#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

mod erc20;

struct RustTokenParams;

/// Immutable definitions
impl Erc20Params for RustTokenParams {
    const NAME: &'static str = "Rust ERC20 Token";
    const SYMBOL: &'static str = "R20T";
    const DECIMALS: u8 = 18;
}

// The contract
sol_storage! {
    #[entrypoint] // Makes Rtoken the entrypoint
    struct Rtoken {
        #[borrow] // Allows erc20 to access Rtoken's storage and make calls
        Erc20<RustTokenParams> erc20;
    }
}

// Another contract we'd like to call
sol_interface! {
    interface IMath {
        function sum(uint256[] values) pure returns (string, uint256);
    }
}

#[external]
#[inherit(Erc20<RustTokenParams>)]
impl Rtoken {
    pub fn mint(&mut self) -> Result<(), Vec<u8>> {
        let amount = U256::from(10*10*18);
        self.erc20.mint(msg::sender(), amount);
        Ok(())
    }
}