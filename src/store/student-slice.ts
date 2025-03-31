import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface Student {
    id?: number,
    name: string,
    age: number
}

interface StudentState {
    listStudent: Student[]
}

const initialState: StudentState = {
    listStudent: []
}

const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        setListStudent(state, action: PayloadAction<Student[]>) {
            state.listStudent = action.payload
        }
    }
})


export default studentSlice;