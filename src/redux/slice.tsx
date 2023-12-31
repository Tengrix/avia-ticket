import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {SearchTicketType} from "./../shared/utils/zodSchemas/searchTicketSchema";

const initialState = {
    ticketInfo: {
        departure: 'Moscow',
        arrival: 'Mersin',
        depDate: new Date(0),
        arrDate: new Date(0) as Date|undefined
    }
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchParams: (state, action: PayloadAction<SearchTicketType>) => {
            state.ticketInfo = {...action.payload,arrDate:action.payload.arrDate?action.payload.arrDate:undefined}
        },
    }
})

export const {reducer: searchReducer, actions: searchActions} = searchSlice;