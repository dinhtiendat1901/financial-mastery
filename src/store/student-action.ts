import {Dispatch} from "react";
import {UnknownAction} from "@reduxjs/toolkit";
import {invoke} from "@tauri-apps/api/core";
import studentSlice, {Student} from "./student-slice.ts";

export const fetchStudent = () => {
    return async (dispatch: Dispatch<UnknownAction>) => {
        const response = await invoke<Student[]>('get_all_students')
        dispatch(studentSlice.actions.setListStudent(response))
    }
}


export const createStudent = (newStudent: Student) => {
    return async (dispatch: Dispatch<UnknownAction>) => {
        await invoke('create_student', {newStudent})
        const response = await invoke<Student[]>('get_all_students')
        dispatch(studentSlice.actions.setListStudent(response))
    }
}

export const deleteStudent = (studentId: number) => {
    return async (dispatch: Dispatch<UnknownAction>) => {
        await invoke('delete_student', {studentId})
        const response = await invoke<Student[]>('get_all_students')
        dispatch(studentSlice.actions.setListStudent(response))
    }
}