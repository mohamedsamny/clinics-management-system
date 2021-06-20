const findAll = async (pool) => {
  return await pool.query('SELECT * FROM users ORDER BY id ASC')
}
const find = async (pool, id) => {
  return await pool.query(`SELECT * FROM users WHERE id = ${id}`)
}


module.exports = {
  findAll,
  find
}