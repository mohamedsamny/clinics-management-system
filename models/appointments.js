const findAll = async (pool) => {
  return await pool.query('SELECT * FROM appointments ORDER BY id ASC')
}
const find = async (pool, id) => {
  return await pool.query(`SELECT * FROM appointments WHERE id = ${id}`)
}


module.exports = {
  findAll,
  find
}