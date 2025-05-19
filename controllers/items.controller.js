const { itemsService } = require('../services');
const { response } = require('../utils/response.util');

const getItems = async (req, res, next) => {
  try {
    const data = await itemsService.getItems();
    response(res, 200, 'Items fetched successfully', data);
    next();
  } catch (exception) {
    console.log(exception.message);
    response(res, 500, 'Error fetching items: ' + exception.message, null);
    next(exception);
  }
};

const getItemById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await itemsService.getItems(id);
    if (!data) {
      return response(res, 404, 'Item not found');
    }
    response(res, 200, 'Item fetched successfully', data);
    next();
  } catch (exception) {
    console.log(exception.message);
    response(res, 500, 'Error fetching item: ' + exception.message, null);
    next(exception);
  }
};

const createItem = async (req, res, next) => {
  try {
    const { name, description, quantity, price } = req.body;
    const data = await itemsService.createItem({ name, description, quantity, price });
    response(res, 201, 'Item created successfully', data);
    next();
  } catch (exception) {
    console.log(exception.message);
    response(res, 500, 'Error creating items: ' + exception.message, null);
    next(exception);
  }
};

const updateItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, description, quantity, price } = req.body;
    const data = await itemsService.updateItem(id, { name, description, quantity, price });
    response(res, 200, 'Item updated successfully', data);
    next();
  } catch (exception) {
    console.log(exception.message);
    response(res, 500, 'Error updating items: ' + exception.message, null);
    next(exception);
  }
};

const deleteItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    await itemsService.deleteItem(id);
    response(res, 200, 'Item deleted successfully');
    next();
  } catch (exception) {
    console.log(exception.message);
    response(res, 500, 'Error deleting items: ' + exception.message, null);
    next(exception);
  }
};

module.exports = { getItems, getItemById, createItem, updateItem, deleteItem };
