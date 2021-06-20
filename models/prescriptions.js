const findAll = async (pool) => {
  return await pool.query('SELECT * FROM prescriptions ORDER BY id ASC')
}
const find = async (pool, id) => {
  return await pool.query(`SELECT * FROM prescriptions WHERE id = ${id}`)
}


module.exports = {
  findAll,
  find
}