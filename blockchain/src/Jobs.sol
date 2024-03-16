// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

contract Jobs {
    event JobAdded(
        uint256 id,
        string originalId,
        string operatingUnit,
        string officePostalCode,
        uint256 totalHours,
        uint256 startDate,
        uint256 endDate,
        string clientId,
        bool isUnassigned
    );

    uint256 public number;
    struct Job {
        uint256 id;
        string originalId;
        string operatingUnit;
        string officePostalCode;
        uint256 totalHours;
        uint256 startDate;
        uint256 endDate;
        string clientId;
        bool isUnassigned;
    }

    Job[] public jobs;

    function addJob(
        string memory originalId,
        string memory operatingUnit,
        string memory officePostalCode,
        uint256 totalHours,
        uint256 startDate,
        uint256 endDate,
        string memory clientId,
        bool isUnassigned
    ) public {
        number++;
        Job memory newJob = Job({
            id: number,
            originalId: originalId,
            operatingUnit: operatingUnit,
            officePostalCode: officePostalCode,
            totalHours: totalHours,
            startDate: startDate,
            endDate: endDate,
            clientId: clientId,
            isUnassigned: isUnassigned
        });

        jobs.push(newJob);
        emit JobAdded(
            number,
            originalId,
            operatingUnit,
            officePostalCode,
            totalHours,
            startDate,
            endDate,
            clientId,
            isUnassigned
        );
    }

    function setNumber(uint256 newNumber) public {
        number = newNumber;
    }

    function increment() public {
        number++;
    }
}
