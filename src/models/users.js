const dbPool = require("../config/database");

// Mendapatkan semua pengguna
const getAllUsers = () => {
  const SQLQuery = "SELECT * FROM users";
  return dbPool.execute(SQLQuery);
};

// Membuat pengguna baru
const createNewUser = (body) => {
  const SQLQuery = `INSERT INTO users (name, email, address) VALUES (?, ?, ?)`;
  const values = [body.name, body.email, body.address];
  return dbPool.execute(SQLQuery, values);
};

// Memperbarui pengguna
const updateUser = (body, idUser) => {
  const SQLQuery = `UPDATE users SET name = ?, email = ?, address = ? WHERE id = ?`;
  const values = [body.name, body.email, body.address, idUser];
  return dbPool.execute(SQLQuery, values);
};

// Menghapus pengguna
const deleteUser = (idUser) => {
  const SQLQuery = `DELETE FROM users WHERE id = ?`;
  const values = [idUser];
  return dbPool.execute(SQLQuery, values);
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
