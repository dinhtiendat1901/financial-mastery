import {Dispatch} from "react";
import {UnknownAction} from "@reduxjs/toolkit";
import axios from "axios";
import loadSlice from "./load-slice.ts";
import balanceSlice, {Balance} from "./balance-slice.ts";


export const searchBalance = (startDate: string, endDate: string) => {
    return async (dispatch: Dispatch<UnknownAction>) => {
        dispatch(loadSlice.actions.setLoading(true))
        const response = await axios.get<Balance[]>(`${import.meta.env.VITE_PLAYWRIGHT_SERVER_URL}/search_balance`, {
            params: {
                startDate,
                endDate
            }
        });
        dispatch(loadSlice.actions.setLoading(false))
        dispatch(balanceSlice.actions.setListBalance(response.data))
    }
}