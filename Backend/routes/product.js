const router = require("express").Router();
const Product = require("../models/Product");
const { getUniqeItems } = require("../utilities");
const {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} = require("./verifyToken");

// CREATE verifyTokenAndAdmin
router.post("/", async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body, // set all data in body to the selected collection by id
      },
      {
        new: true,
      }
    );

    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE verifyTokenAndAdmin
router.delete("/:id", async (req, res) => {
  try {
    let findByIdAndDelete = await Product.findByIdAndDelete(req.params.id);
    findByIdAndDelete !== null
      ? res.status(200).json("Product has been deleted...")
      : res.status(500).json("Can Not Find Id To Delete it...");
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE ALL verifyTokenAndAdmin
router.get("/delALL", async (req, res) => {
  try {
    let deleteAll = await Product.remove( { } );
    deleteAll !== null
      ? res.status(200).json("Products has been deleted...")
      : res.status(500).json("Can Not Find Products To Delete them...");
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ONLY Categories
router.get("/findCategories", async (req, res) => {
  try {
    const categories = await Product.distinct("category")
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET All Products By Category
router.get("/findAllProductsByCategories", async (req, res) => {
  const qCategory = req.query.category;

  try {
    let ProductsCategories = await Product.find({ category: { "$eq": qCategory } }).sort({ createdAt: -1 });; // 1988.10 ms
    // const ProductsCategories = await Product.find({ category: { "$in": [ qCategory ] } }); // 5524.20 ms
    
    res.status(200).json(ProductsCategories);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET Some of Products By Category
router.get("/findSomeOfProductsByCategories", async (req, res) => {
  const qCategory = req.query.category;
  const numberOfProducts = req.query.numberOfProducts;

  try {
    let ProductsCategories = await Product.find( 
      {
        category: { "$eq": qCategory }
      }).sort({ createdAt: -1 }).limit(numberOfProducts)

    res.status(200).json(ProductsCategories);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET Best Products
router.get("/findBestProducts", async (req, res) => {
  
  try {

  //   const aggregateRatings = await Product.aggregate([
  //     {
  //       $match:
  //         { $expr:
  //           { $gte: [ { $getField: "rating" }, 0 ] }
  //         }
  //      },
  //     { $group:{ _id:'$rating'} }
  //   ])

  
    // await Product.createIndex({ rating: 1 })

    
    const allRatings = await Product.find({},{rating:1})
    const ratings = allRatings.map((itme) => itme.rating)
    if(ratings.length){
      const averageRatings = ratings.reduce((a, c) => a + c , 0) / ratings.length
      const bestProducts = await Product.find( { rating: { $gte: averageRatings } } ).sort({ createdAt: -1 });
      res.status(200).json(bestProducts);
    }else{
      res.status(200).json("There Is no Products");
    }

  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;