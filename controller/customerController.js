const Customer = require('../models/customer');

module.exports.create_customer = (req, res) => {
    const {name, mobile, address} = req.body;
    if( !name || !mobile){
        return res.status(400).json('Please enter the name and mobile No.')
    }

    const newCustomer = new Customer(req.body);
    newCustomer
        .save()
        .then((data) => {
            return res.status(200).json(data)
        })
        .catch((err) => {
            return res.status(400).json({
                message: err.message|| "something went wrong"
            })
        })

}

module.exports.get_customer = (req, res) =>{
    Customer.find({}).then((data) => {
      return  res.status(200).json(data)
    })
    .catch((err) => {
        return res.status(400).json({
            message: err.message|| "something went wrong"
        })
    })
}

module.exports.get_customer_byId = (req, res) => {
    Customer.findById({
        _id: req.params.id
    }).then((data) => {
        return  res.status(200).json(data)
      })
      .catch((err) => {
          return res.status(400).json({
              message: err.message|| "something went wrong"
          })
      })
}

module.exports.update_customer = (req, res) => {
    Customer.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
        Customer.findOne({_id: req.params.id}).then((data) => {
            return  res.status(200).json(data)
        })
      })
      .catch((err) => {
          return res.status(400).json({
              message: err.message|| "something went wrong"
          })
      })
}

module.exports.delete_customer = (req, res) =>{
    Customer.findByIdAndDelete({_id: req.params.id}).then(() => {
        return  res.status(200).json("Customer details successfully deleted")
      })
      .catch((err) => {
          return res.status(400).json({
              message: err.message|| "something went wrong"
          })
      })
}