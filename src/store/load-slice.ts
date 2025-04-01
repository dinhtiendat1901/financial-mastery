import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface LoadState {
    loading: boolean
}

const initialState = {
    loading: false
}


const loadSlice = createSlice({
    name: 'load',
    initialState,
    reducers: {
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload
        }
    }
})


export default loadSlice;