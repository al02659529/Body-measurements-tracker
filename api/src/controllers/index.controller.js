const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'Venomsony7',
    database: 'apitest',
    port: 5432
})

const getUsers = async (req, res) => {
   const response = await pool.query('SELECT * FROM users');
    console.log(response.rows)
    res.status(200).json(response.rows)
}

const getUserById = async (req, res) => {
    const id = req.params.id
    try{
        const response = await pool.query('SELECT * FROM users WHERE id = $1', [id])
        response.rows.length < 1 ? res.status(404).send('User not found') : res.json(response.rows)
    } catch (error) {
        res.status(404).send('Error with database')
    }

}
const updateUser = async (req, res) => {
    const id = req.params.id
    const { name, email } = req.body
    const response = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id])
    console.log(response)
    res.json('User updated successfully')
}
const deleteUserById = async (req, res) => {
    const response = await pool.query('DELETE FROM users WHERE id = $1', [req.params.id])
    res.send('User deleted')
}
const createUser = async (req, res) => {
    const { name, email } = req.body;
    const response = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email])
    console.log(response)
    res.json({
        message: 'User Added Succesfully',
        body: {
            user: {name, email}
        }
    })
}

module.exports = {
    getUsers,
    createUser,
    getUserById,
    deleteUserById,
    updateUser
}