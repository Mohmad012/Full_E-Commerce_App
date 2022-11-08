const router = require("express").Router();
const Product = require("../models/Product");
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
router.delete("/delALL", async (req, res) => {
  try {
    let findByIdAndDelete = await Product.remove( { } );
    findByIdAndDelete !== null
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

// GET ALL
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;
    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory], // check if categories in qCategory if true will get it
        },
      });
    } else {
      products = await Product.find();
    }
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
// [
// {
//   _id: "6322274ad129f679ea6ba25e",
//   "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   "desc": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//   "img": "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
//   "categories": ["Women's clothing", "Men's clothing"],
//   "size": ["S", "M", "L"],
//   "color": ["Red"],
//   "price": 89,
//   "inStock": true,
//   "createdAt": "2022-09-14T19:11:06.141Z",
//   "updatedAt": "2022-09-14T19:11:06.141Z",
//   __v: 0,
// },
// {
//   _id: "6322279ad129f679ea6ba261",
//   "title": "Mens Casual Premium Slim Fit T-Shirts",
//   "desc": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//   "img": "https://pngimg.com/uploads/dress_shirt/dress_shirt_PNG8061.png",
//   "categories": ["Women's clothing", "Men's clothing"],
//   "size": ["S", "M", "L"],
//   "color": ["Red"],
//   "price": 22.3,
//   "inStock": true,
//   "createdAt": "2022-09-14T19:12:26.636Z",
//   "updatedAt": "2022-09-14T19:12:26.636Z",
//   __v: 0,
// },
// {
//   _id: "6322280ad129f679ea6ba265",
//   "title": "Mens Cotton Jacket",
//   "desc": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//   "img": "https://4.bp.blogspot.com/-DmWf6J7Kr-A/VPZfwq0ISwI/AAAAAAAAJjQ/MJ4Jf31dz5Q/s1600/www.fonxat.com-Design%2Band%2BGraphics%2Btshirt_PNG5431.png",
//   "categories": ["Men's clothing"],
//   "size": ["S", "M", "L"],
//   "color": ["Red"],
//   "price": 55.99,
//   "inStock": true,
//   "createdAt": "2022-09-14T19:14:18.382Z",
//   "updatedAt": "2022-09-14T19:14:18.382Z",
//   "__v": 0,
// },
// {
//   "_id": "63222836d129f679ea6ba267",
//   "title": "Mens Casual Slim Fit",
//   "desc": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
//   "img": "https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png",
//   "categories": ["Men's clothing"],
//   "size": ["S", "M", "L"],
//   "color": ["Red"],
//   "price": 15.99,
//   "inStock": true,
//   "createdAt": "2022-09-14T19:15:02.676Z",
//   "updatedAt": "2022-09-14T19:15:02.676Z",
//   "__v": 0,
// },
// {
//   "_id": "6322286fd129f679ea6ba269",
//   title:
//     "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
//   "desc": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
//   "img": "https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
//   "categories": ["jewelery"],
//   "size": ["S", "M", "L"],
//   "color": ["Red"],
//   "price": 695,
//   "inStock": true,
//   "createdAt": "2022-09-14T19:15:59.240Z",
//   "updatedAt": "2022-09-14T19:15:59.240Z",
//   "__v": 0,
// },
// {
//   "_id": "6322288bd129f679ea6ba26b",
//   "title": "Solid Gold Petite Micropave ",
//   "desc": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
//   "img": "https://i.pinimg.com/originals/1c/25/0f/1c250fab2cf879b4ebed9f0c1e585eaa.png",
//   "categories": ["jewelery"],
//   "size": ["S", "M", "L"],
//   "color": ["Red"],
//   "price": 168,
//   "inStock": true,
//   "createdAt": "2022-09-14T19:16:27.580Z",
//   "updatedAt": "2022-09-14T19:16:27.580Z",
//   "__v": 0,
// },
// {
//   "_id": "632228a9d129f679ea6ba26d",
//   "title": "White Gold Plated Princess",
//   "desc": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
//   "img": "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
//   "categories": ["jewelery"],
//   "size": ["S", "M", "L"],
//   "color": ["Red"],
//   "price": 9.99,
//   "inStock": true,
//   "createdAt": "2022-09-14T19:16:57.664Z",
//   "updatedAt": "2022-09-14T19:16:57.664Z",
//   "__v": 0,
// },
// ];
