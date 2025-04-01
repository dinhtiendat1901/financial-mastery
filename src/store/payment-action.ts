import {Dispatch} from "react";
import {UnknownAction} from "@reduxjs/toolkit";
import axios from "axios";
import paymentSlice, {Payment} from "./payment-slice.ts";
import loadSlice from "./load-slice.ts";


export const fetchPayment = () => {
    return async (dispatch: Dispatch<UnknownAction>) => {
        dispatch(loadSlice.actions.setLoading(true))
        const response = await axios.get<Payment[]>(`${import.meta.env.VITE_PLAYWRIGHT_SERVER_URL}/get_all_payment`)
        dispatch(loadSlice.actions.setLoading(false))
        dispatch(paymentSlice.actions.setListPayment(response.data))
    }
}