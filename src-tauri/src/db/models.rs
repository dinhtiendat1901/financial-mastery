use diesel::{AsChangeset, Insertable, Queryable};
use serde::{Deserialize, Serialize};

use super::schema::student;

#[derive(Queryable, Insertable, AsChangeset, Serialize, Deserialize, Debug)]
#[diesel(table_name = student)]
pub struct Student {
    pub id: i32,
    pub name: String,
    pub age: i32,
}

#[derive(Insertable, Serialize, Deserialize)]
#[diesel(table_name = student)]
pub struct NewStudent {
    pub name: String,
    pub age: i32,
}
