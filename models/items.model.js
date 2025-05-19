const { createConnection, closeConnection } = require('../database');

const getItemsQuery = async (id) => {
  const connection = await createConnection();
  let query = 'SELECT * FROM `items`';
  let params = [];
  if (id) {
    query += ' WHERE id = ?';
    params.push(id);
  }
  const [results] = await connection.query(query, params);
  if (results.length === 0) {
    closeConnection();
    throw new Error('No items found');
  }
  const items = results.map((item) => ({
    id: item.id,
    nama: item.name,
    quantity: item.quantity,
    description: item.description,
    price: item.price,
    createdAt: item.created_at,
    updatedAt: item.updated_at
  }));
  closeConnection();
  return items;
};

const createItemQuery = async (item) => {
  const connection = await createConnection();
  const query = 'INSERT INTO `items` (name, description, quantity, price) VALUES (?, ?, ?, ?)';
  const params = [item.name, item.description, item.quantity, item.price];
  const [result] = await connection.query(query, params);
  closeConnection();
  return result;
};

const updateItemQuery = async (id, item) => {
  const connection = await createConnection();
  const query = 'UPDATE `items` SET name = ?, description = ?, quantity = ?, price = ?, updatedAt = NOW() WHERE id = ?';
  const params = [item.name, item.description, item.quantity, item.price, id];
  const [result] = await connection.query(query, params);
  closeConnection();
  return result;
};

const deleteItemQuery = async (id) => {
  const connection = await createConnection();
  const query = 'DELETE FROM `items` WHERE id = ?';
  const params = [id];
  const [result] = await connection.query(query, params);
  closeConnection();
  return result;
};

module.exports = { getItemsQuery, createItemQuery, updateItemQuery, deleteItemQuery };
