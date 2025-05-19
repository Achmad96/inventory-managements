const express = require('express');

const { itemsController } = require('./controllers');

const router = express.Router();

router.get('/items', itemsController.getItems);
router.get('/items/:id', itemsController.getItemById);
router.post('/items', itemsController.createItem);
router.put('/items/:id', itemsController.updateItem);
router.delete('/items/:id', itemsController.deleteItem);

module.exports = router;
