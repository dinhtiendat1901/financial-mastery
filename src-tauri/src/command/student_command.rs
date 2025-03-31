use crate::db::models::{NewStudent, Student};
use crate::service::student_service;
use tauri::command;

#[command]
#[allow(dead_code)]
pub fn get_all_students() -> Result<Vec<Student>, String> {
    student_service::get_all_students().map_err(|e| e.to_string())
}

#[command]
#[allow(dead_code)]
pub fn create_student(new_student: NewStudent) -> Result<(), String> {
    student_service::create_student(new_student).map_err(|e| e.to_string())
}

#[command]
#[allow(dead_code)]
pub fn delete_student(student_id: i32) -> Result<(), String> {
    student_service::delete_student(student_id).map_err(|e| e.to_string())
}
