import { FetchOptions } from "../../../api/jobs-api"
import { UPDATE_SORTING, UPDATE_FILTERS } from "./jobReducerTypes"

export const initialState: FetchOptions = {
    itemsPerPage: 9, sortOptions: {
        sortBy: 'Jobs_id',
        sortOrder: 'asc'
    }, filterOptions: [
        {
            filterBy: 'q',
            filterParam: ''
        }
    ]
}

export const reducer = (state = initialState, action: { type: string; payload: any }) => {
    switch (action.type) {

        case UPDATE_FILTERS:
            return {
                ...state,
                filterOptions: action.payload
            }

        case UPDATE_SORTING:
            return {
                ...state,
                sortOptions: action.payload
            }

        default:
            return state
    }
}

