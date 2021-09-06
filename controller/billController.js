const Bill = require('../models/bill');
const Item = require('../models/item')
const customer = require('../models/customer');

module.exports.create_bill = (req, res) =>{
  const newBill = new Bill(req.body);

  newBill
    .save()
    .then((data) => {
        return res.status(200).json(data)
    })
    .catch((err) => {
        return res.status(400).json(err)
    })
}

module.exports.get_bills = (req, res) =>{
Bill.find({}).then((data) => {
    return res.status(200).json(data)
})
.catch((err) => {
    return res.status(400).json(err)
})
}