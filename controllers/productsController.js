const db = require("../models");
const axios = require("axios");
// Defining methods for the productsController
module.exports = {
  findPop: function (req,res){
    axios
    .get(`https://api.bestbuy.com/beta/products/mostViewed?apiKey=${process.env.BEST_BUY_API_KEY}`)
    .then(data =>{
      console.log("Popular items: " + data.results);
      res.json([...data.results]);
    })
    .catch(err => console.log(err));
  },

  findTrendy: function(req,res) {
    axios
    .get(`https://api.bestbuy.com/beta/products/trendingViewed?apiKey=${process.env.BEST_BUY_API_KEY}`)
    .then(data=>{
      console.log("Trendy items: " + data.results);
      res.json([...data.results]);
    })
    .catch(err => console.log(err));

  },

  findAllCategories: function(req,res) {
    axios
    .get(`https://api.bestbuy.com/v1/categories(id=abcat*)?apiKey=${process.env.BEST_BUY_API_KEY}&pageSize=20&show=id,name&format=json`)
    .then(data=>{
      console.log("All Top Categories: " + data.categories);
      res.json([...data.categories]);
    })
    .catch(err => console.log(err));
  },

  findAllByCategory: function(req,res) {
    axios
    .get(`https://api.bestbuy.com/v1/products((categoryPath.id=${req.params.id}))?apiKey=${process.env.BEST_BUY_API_KEY}&pageSize=20&format=json`)
  },

  findAllByName: function(req,res) {
    axios
      .get(
        `https://api.bestbuy.com/v1/products(longDescription=${
          req.query.q
        }*)?format=json&apiKey=${process.env.BEST_BUY_API_KEY}`
      )
      .then(results => {
        console.log("RESULTS: ", results.data);
        res.json([...results.data.products]);
      })
      .catch(err => console.log(err));
  },
  findBySKU: function(req, res) {
    axios
      .get(
        `https://api.bestbuy.com/v1/products(sku=${
          req.params.sku
        })?format=json&apiKey=${process.env.BEST_BUY_API_KEY}`
      )
      .then(results => {
        res.json(results.data.products[0]);
      })
      .catch(err => console.log(err));
  },
  create: function(req, res) {
    db.Product.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Product.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Product.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
