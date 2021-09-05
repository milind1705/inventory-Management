const Item = require('../models/item');

module.exports.create_item = (req, res) => {
    const newItem = new Item(req.body);
    newItem
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

module.exports.get_item = (req, res) =>{
    Item.find({}).then((data) => {
      return  res.status(200).json(data)
    })
    .catch((err) => {
        return res.status(400).json({
            message: err.message|| "something went wrong"
        })
    })
}

module.exports.get_item_byId = (req, res) => {
    Item.findById({
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

module.exports.update_item = (req, res) => {
    Item.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
        Item.findOne({_id: req.params.id}).then((data) => {
            return  res.status(200).json(data)
        })
      })
      .catch((err) => {
          return res.status(400).json({
              message: err.message|| "something went wrong"
          })
      })
}

module.exports.delete_Item = (req, res) =>{
    Item.findByIdAndDelete({_id: req.params.id}).then(() => {
        return  res.status(200).json("Item details successfully deleted")
      })
      .catch((err) => {
          return res.status(400).json({
              message: err.message|| "something went wrong"
          })
      })
}