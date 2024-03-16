// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {Jobs} from "../src/Jobs.sol";

contract JobsTest is Test {
    event JobAdded(
        uint256 id,
        string originalId,
        string operatingUnit,
        string officePostalCode,
        uint256 totalHours,
        string clientId,
        bool isUnassigned
    );

    Jobs public jobs;

    function setUp() public {
        jobs = new Jobs();
    }

    function testAddJob(
        string memory originalId,
        string memory operatingUnit,
        string memory officePostalCode,
        uint256 totalHours,
        string memory clientId,
        bool isUnassigned
    ) public {
        vm.expectEmit();
        jobs.addJob(
            originalId,
            operatingUnit,
            officePostalCode,
            totalHours,
            clientId,
            isUnassigned
        );

        emit JobAdded(
            1,
            originalId,
            operatingUnit,
            officePostalCode,
            totalHours,
            clientId,
            isUnassigned
        );
        
        (
            ,
            string memory jobOriginalId,
            string memory jobOperatingUnit,
            string memory jobOfficePostalCode,
            uint256 jobTotalHours,
            string memory jobClientId,
            bool jobIsUnassigned
        ) = jobs.jobs(0);

        assertEq(jobOriginalId, originalId);
        assertEq(jobOperatingUnit, operatingUnit);
        assertEq(jobOfficePostalCode, officePostalCode);
        assertEq(jobTotalHours, totalHours);
        assertEq(jobClientId, clientId);
        assertEq(jobIsUnassigned, isUnassigned);
    }
}
