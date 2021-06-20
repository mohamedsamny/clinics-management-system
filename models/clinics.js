const pool = require("express");
const findAll = async (pool) => {
  return await pool.query('SELECT * FROM clinics ORDER BY id ASC')
}
const find = async (pool, id) => {
  return await pool.query(`SELECT * FROM clinics WHERE id = ${id}`)
}

// very easy
const destroy = async(pool, id) => {
  return await pool.query(`DELETE FROM clinics WHERE id = ${id}`)
}

const create = async(pool, data) => {
  return await pool.query(`insert into clinics(speciality, address, name)
values ('${data.speciality}', '${data.address}', '${data.name}')`)
}
// const createUser = (request, response) => {
//   const { speciality, address, name } = request.body
//
//   pool.query('INSERT INTO clinics (speciality, address, name) VALUES (das, sa,dsa)', [speciality, address,name ], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(201).send(`User added with ID: ${result.insertId}`)
//   })
// }






 // hard
const update = async(pool, id, data) => {
  return await pool.query(`UPDATE clinics
SET speciality = ${data.speciality}, address = ${data.address}, name = ${data.name}
WHERE id = ${id};`)
}




module.exports = {
  findAll,
  find,
  destroy,
  update,
  create
}