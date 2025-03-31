use crate::db::connection::establish_connection;
use crate::db::models::{NewStudent, Student};
use crate::db::schema::student::dsl::*;
use diesel::prelude::*;
use diesel::result::Error;

pub fn create_student(new_student: NewStudent) -> Result<(), Error> {
    let mut conn = establish_connection();
    diesel::insert_into(student)
        .values(&new_student)
        .execute(&mut conn)?;
    Ok(())
}

pub fn get_all_students() -> Result<Vec<Student>, Error> {
    let mut conn = establish_connection();
    student.load::<Student>(&mut conn)
}

pub fn delete_student(student_id: i32) -> Result<(), Error> {
    let mut conn = establish_connection();
    diesel::delete(student.filter(id.eq(student_id))).execute(&mut conn)?;
    Ok(())
}
