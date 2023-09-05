// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.21;

import {Test, console2} from "forge-std/Test.sol";
import {SolidityERC20Token} from "../src/SolidityERC20Token.sol";

contract S20TTest is Test {
    SolidityERC20Token public solidityERC20Token;

    function setUp() public {
        solidityERC20Token = new SolidityERC20Token();
    }

    function testMint() public {
        address someRandomUser = vm.addr(1);
        vm.prank(someRandomUser);
        solidityERC20Token.mint();
        assertEq(solidityERC20Token.balanceOf(someRandomUser), 10 ether);
    }
}
