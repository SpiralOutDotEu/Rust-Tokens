// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import "openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";

contract SolidityERC20Token is ERC20{
    constructor() ERC20("Solidity ERC20 Token", "S20T") {}

    function mint() public {
        _mint(msg.sender, 10 ether);
    }
}
