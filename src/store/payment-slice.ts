import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface Payment {
    name: string | null,
    value: string | null,
    time: string | null,
    status: string | null
}


interface PaymentState {
    listPayment: Payment[]
}

const initialState: PaymentState = {
    listPayment: []
}


const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        setListPayment(state, action: PayloadAction<Payment[]>) {
            state.listPayment = action.payload
        }
    }
})


export default paymentSlice;