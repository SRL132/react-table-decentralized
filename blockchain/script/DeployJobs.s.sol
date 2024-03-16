// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {Jobs} from "../src/Jobs.sol";

contract DeployJobs is Script {
    uint256 public DEFAULT_ANVIL_PRIVATE_KEY = 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80;
    uint256 public deployerKey;
    function run() public returns (Jobs) {
        if (block.chainid == 31337) {
            deployerKey = DEFAULT_ANVIL_PRIVATE_KEY;
        } else {
            deployerKey = vm.envUint("PRIVATE_KEY");
        }

        deployerKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast();
        Jobs jobs = new Jobs();
        vm.stopBroadcast();
        return jobs;
    }
}
