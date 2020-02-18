const router = require("express").Router();
const productsController = require("../../controllers/productsController");

// Matches with "/api/products"
router
  .route("/")
  .post(productsController.create);

router
  .route("/?q")
  .get(productsController.findAllByName);

// Matches with "/api/products/:sku"
router
  .route("/:sku")
  .get(productsController.findBySKU)

// Matches with "/api/products/:id"
router
  .route("/:id")
  .put(productsController.update)
  .delete(productsController.remove);


// Matches with "/api/products/allcategory"
router
  .route("/allcategory")
  .get(productsController.findAllCategories);

// Matches with "/api/products/category/:id"
router
  .route("/category/:id")
  .get(productsController.findAllByCategory);

// Matches with "/api/products/popular"
router
  .route("/popular")
  .get(productsController.findPop);

// Matches with "/api/products/trendy"
router
  .route("/trendy")
  .get(productsController.findTrendy)

module.exports = router;
