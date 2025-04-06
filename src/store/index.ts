import {configureStore} from "@reduxjs/toolkit";
import StudentSlice from "./student-slice.ts";
import {useDispatch, useSelector} from "react-redux";
import PaymentSlice from "./payment-slice.ts";
import LoadSlice from "./load-slice.ts";
import BalanceSlice from "./balance-slice.ts";

const store = configureStore({
    reducer: {
        student: StudentSlice.reducer,
        payment: PaymentSlice.reducer,
        load: LoadSlice.reducer,
        balance: BalanceSlice.reducer
    }
})


export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>()
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>()

export default store;