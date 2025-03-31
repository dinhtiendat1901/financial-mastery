use crate::db::models::{NewStudent, Student};
use crate::repository::student_repository;
use diesel::result::Error;

pub fn get_all_students() -> Result<Vec<Student>, Error> {
    student_repository::get_all_students()
}

pub fn create_student(new_student: NewStudent) -> Result<(), Error> {
    student_repository::create_student(new_student)
}

pub fn delete_student(student_id: i32) -> Result<(), Error> {
    student_repository::delete_student(student_id)
}
