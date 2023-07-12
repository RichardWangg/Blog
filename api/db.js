import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password: "angelbean5427G-!j",
    database: "blog"
})

