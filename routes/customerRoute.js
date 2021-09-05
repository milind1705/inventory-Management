const express = require('express');
const router = express.Router();
const customer = require('../controller/customerController');

router.post('/add', customer.create_customer );
router.get('/', customer.get_customer);
router.get('/:id', customer.get_customer_byId);
router.put('/:id', customer.update_customer);
router.delete('/delete/:id', customer.delete_customer)

module.exports = router;