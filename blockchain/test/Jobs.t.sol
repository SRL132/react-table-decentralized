// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {Jobs} from "../src/Jobs.sol";

contract JobsTest is Test {
    Jobs public jobs;

    function setUp() public {
        jobs = new Jobs();
        jobs.setNumber(0);
    }

    function test_Increment() public {
        jobs.increment();
        assertEq(jobs.number(), 1);
    }

    function testFuzz_SetNumber(uint256 x) public {
        jobs.setNumber(x);
        assertEq(jobs.number(), x);
    }
}
