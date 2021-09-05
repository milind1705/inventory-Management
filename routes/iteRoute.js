const express = require('express');
const router = express.Router();
const item = require('../controller/itemController');

router.post('/add', item.create_item );
router.get('/', item.get_item);
router.get('/:id', item.get_item_byId);
router.put('/:id', item.update_item);
router.delete('/delete/:id', item.delete_Item)

module.exports = router;