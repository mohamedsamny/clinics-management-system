const findAll = async (pool) => {
  return await pool.query('SELECT * FROM diagnosis ORDER BY id ASC')
}
const find = async (pool, id) => {
  return await pool.query(`SELECT * FROM diagnosis WHERE id = ${id}`)
}


module.exports = {
  findAll,
  find
}