const findAll = async (pool) => {
  return await pool.query('SELECT * FROM patients ORDER BY id ASC')
}
const find = async (pool, id) => {
  return await pool.query(`SELECT * FROM patients WHERE id = ${id}`)
}


module.exports = {
  findAll,
  find
}