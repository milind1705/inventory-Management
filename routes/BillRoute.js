const express = require('express');
const router = express.Router();
const bill = require('../controller/billController');

router.post('/add', bill.create_bill);
router.get('/', bill.get_bills);
// router.get('/:id', customer.get_customer_byId);
// router.put('/:id', customer.update_customer);
// router.delete('/delete/:id', customer.delete_customer)

module.exports = router;