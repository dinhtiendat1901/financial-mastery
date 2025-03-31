import {configureStore} from "@reduxjs/toolkit";
import StudentSlice from "./student-slice.ts";
import {useDispatch, useSelector} from "react-redux";

const store = configureStore({
    reducer: {
        student: StudentSlice.reducer
    }
})


export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>()
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>()

export default store;