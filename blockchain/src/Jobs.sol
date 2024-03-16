// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract Jobs {
    uint256 public number;

    struct Job {
        uint256 id;
        string originalId;
        string talentId;
        string talentName;
        string talentGrade;
        string bookingGrade;
        string operatingUnit;
        string officeCity;
        string officePostalCode;
        string jobManagerName;
        string jobManagerId;
        uint256 totalHours;
        uint256 startDate;
        uint256 endDate;
        string clientName;
        string clientId;
        string industry;
        bool isUnassigned;
    }
    Job[] public jobs;

    function addJob(
        uint256 id,
        string memory originalId,
        string memory talentId,
        string memory talentName,
        string memory talentGrade,
        string memory bookingGrade,
        string memory operatingUnit,
        string memory officeCity,
        string memory officePostalCode,
        string memory jobManagerName,
        string memory jobManagerId,
        uint256 totalHours,
        uint256 startDate,
        uint256 endDate,
        string memory clientName,
        string memory clientId,
        string memory industry,
        bool isUnassigned
    ) public {
        Job memory newJob = Job({
            id: id,
            originalId: originalId,
            talentId: talentId,
            talentName: talentName,
            talentGrade: talentGrade,
            bookingGrade: bookingGrade,
            operatingUnit: operatingUnit,
            officeCity: officeCity,
            officePostalCode: officePostalCode,
            jobManagerName: jobManagerName,
            jobManagerId: jobManagerId,
            totalHours: totalHours,
            startDate: startDate,
            endDate: endDate,
            clientName: clientName,
            clientId: clientId,
            industry: industry,
            isUnassigned: isUnassigned
        });

        jobs.push(newJob);
    }

    function setNumber(uint256 newNumber) public {
        number = newNumber;
    }

    function increment() public {
        number++;
    }
}
