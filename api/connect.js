import mysql from 'mysql'
export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Chandra@123",
    database:"socialsync"
})