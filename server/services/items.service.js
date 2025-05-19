const { itemsModel } = require('../models');

const { getItemsQuery, createItemQuery, updateItemQuery, deleteItemQuery } = itemsModel;

const getItems = (id = '') => {
  try {
    return getItemsQuery(id);
  } catch (exception) {
    throw new Error(exception.message);
  }
};

const createItem = async (item) => {
  try {
    return await createItemQuery(item);
  } catch (exception) {
    throw new Error(exception.message);
  }
};

const updateItem = async (id, item) => {
  try {
    return await updateItemQuery(id, item);
  } catch (exception) {
    throw new Error(exception.message);
  }
};

const deleteItem = async (id) => {
  try {
    return await deleteItemQuery(id);
  } catch (exception) {
    throw new Error(exception.message);
  }
};

module.exports = { getItems, createItem, updateItem, deleteItem };
