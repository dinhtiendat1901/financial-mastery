import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface Balance {
    time: string | null,
    couple: string | null,
    asset: string | null,
    type: string | null,
    status: string | null,
    value: string | null
}


interface BalanceState {
    listBalance: Balance[]
}

const initialState: BalanceState = {
    listBalance: []
}


const balanceSlice = createSlice({
    name: 'balance',
    initialState,
    reducers: {
        setListBalance(state, action: PayloadAction<Balance[]>) {
            state.listBalance = action.payload
        }
    }
})


export default balanceSlice;