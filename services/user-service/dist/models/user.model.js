import pool from '../config/db.js';
export const createUser = async (user) => {
    const result = await pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *', [user.name, user.email, user.password]);
    return result.rows[0];
};
export const getAllUsers = async () => {
    const result = await pool.query('SELECT id, name, email FROM users');
    return result.rows;
};
