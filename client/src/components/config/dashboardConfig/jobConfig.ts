import {fetchJobs, fetchAllJobs} from "../../../api/graph-api";
import { EntityConfig } from "../main/schema";

export interface job {
    id: string, //unique,
    originalId: string, //unique,
    operatingUnit: string,
    officePostalCode: string,
    totalHours: number,
    startDate: Date,
    endDate: Date,
    clientId: string,
    isUnassigned: boolean,
}

const jobConfig: EntityConfig = {
    fields:
    {
        Jobs_id: {
            name: 'Jobs_id',
            type: 'text',
            label: 'ID',
            searcheable: true,
            unique: true
        },
        originalId: {
            name: 'originalId',
            type: 'text',
            label: 'Original ID',
            unique: true
        },
        operatingUnit: {
            name: 'operatingUnit',
            type: 'text',
            label: 'Operating Unit'
        },
        officePostalCode: {
            name: 'officePostalCode',
            type: 'text',
            label: 'Office Postal Code'
        },
        totalHours: {
            name: 'totalHours',
            type: 'float',
            label: 'Total Hours'
        },
        clientId: {
            name: 'clientId',
            type: 'text',
            label: 'Client ID'
        },
        isUnassigned: {
            name: 'isUnassigned',
            type: 'boolean',
            label: 'Unassigned'
        },
    },
    stats: [
        {
            title: 'Dataset Insights',
            divClass: 'bg-secondary rounded',
            statsList: [
                {
                    comparisonArgs: [],
                    comparisonType: 'getDataSize',
                    description: 'Data size: '
                },
                {
                    comparisonArgs: ['operatingUnit'],
                    comparisonType: 'getAmount',
                    description: 'Number of operating units:'
                },
                {
                    comparisonArgs: ['clientId'],
                    comparisonType: 'getAmount',
                    description: 'Number of clients:'
                },
                {
                    comparisonArgs: ['isUnassigned', true],
                    comparisonType: 'getFilterBooleanAmount',
                    description: 'Unassigned jobs:'
                },
            ]
        },
        // {
        //     title: 'Top Priority',
        //     divClass: 'bg-warning rounded',
        //     statsList: [
        //         {
        //             comparisonArgs: ['requiredSkills', 'bookingGrade', 'Senior Manager'],
        //             comparisonType: 'getNestedFieldWithMostByField',
        //             description: 'Most in-demand skills for senior managers:'
        //         },
        //         {
        //             comparisonArgs: ['officeCity', 'clientId'],
        //             comparisonType: 'getFieldWithMostByTopField',
        //             description: 'Office city with the most jobs from the top client:'
        //         },
        //         {
        //             comparisonArgs: ["talentGrade", ""],
        //             comparisonType: 'getPercentage',
        //             description: 'Percentage of talent grades to be defined:'
        //         },
        //     ]
        // },
        // {
        //     title: 'Did you know?',
        //     divClass: 'bg-secondary rounded',
        //     statsList: [
        //         {
        //             comparisonArgs: ['requiredSkills'],
        //             comparisonType: 'getMostFrequentNestedArray',
        //             description: 'Most required skill:'
        //         },
        //         {
        //             comparisonArgs: ['optionalSkills'],
        //             comparisonType: 'getMostFrequentNestedArray',
        //             description: 'Most frequent optional skill:'
        //         },
        //         {
        //             comparisonArgs: ['clientId'],
        //             comparisonType: 'getTop',
        //             description: 'Client with the most positions:'
        //         },
        //         {
        //             comparisonArgs: ['officeCity', "Hamburg"],
        //             comparisonType: 'getPercentage',
        //             description: 'Percentage of jobs in Hamburg:'
        //         }
        //     ]
        // }
    ],
    fetch: fetchJobs,
    fetchAll: fetchAllJobs,
    infiniteQueryName: 'infiniteJobData',
    normalQueryName: 'allJobData'
}

export default jobConfig

