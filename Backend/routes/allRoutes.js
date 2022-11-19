const router = require("express").Router();
const { Register, Login } = require("../controller/auth");
const { CreateCart, UpdateCart, DeleteCart, GetUserCart, GetAllCarts } = require("../controller/cart");
const { CreateOrder, UpdateOrder, DeleteOrder, GetUserOrders, GetAllOrders, GetMonthlyIncome } = require("../controller/order");
const { CreateProduct, UpdateProduct, DeleteProduct, DeleteAllProducts, GetProduct, GetCategoriesOfAllProducts, GETAllProductsByCategory, GETSomeOfProductsByCategory, GETBestProducts } = require("../controller/product");
const { CreateSlider, UpdateSlider, DeleteSlider, GetAllSliders } = require("../controller/Slider");
const { StripePayment } = require("../controller/stripe");
const { UpdateUser, DeleteUser, GetUser, GetStatsOfUser, GetAllUsers } = require("../controller/users");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("../controller/verifyToken");

// Auth
router.post("/auth/register", Register);
router.post("/auth/login", Login);

// Slider
router.post("/Sliders/" ,verifyToken , CreateSlider)
router.put("/Sliders/:id" , verifyTokenAndAuthorization , UpdateSlider)
router.delete("/Sliders/:id" , verifyTokenAndAuthorization , DeleteSlider)
router.get("/Sliders/"  , GetAllSliders)

// Cart
router.post("/carts/" , verifyToken , CreateCart)
router.put("/carts/:id" , verifyTokenAndAuthorization , UpdateCart)
router.delete("/carts/:id" , verifyTokenAndAuthorization , DeleteCart)
router.get("/carts/find/:userId" , verifyTokenAndAuthorization , GetUserCart)
router.get("/carts/" , verifyTokenAndAdmin , GetAllCarts)

// Orders
router.post("/orders/" , verifyToken , CreateOrder)
router.put("/orders/:id" , verifyTokenAndAdmin , UpdateOrder)
router.delete("/orders/:id" , verifyTokenAndAdmin , DeleteOrder)
router.get("/orders/find/:userId" , verifyTokenAndAuthorization , GetUserOrders)
router.get("/orders/" , verifyTokenAndAdmin , GetAllOrders)
router.get("/orders/income" , verifyTokenAndAdmin , GetMonthlyIncome)

// Products
// verifyTokenAndAdmin 
router.post("/products/" , CreateProduct);
router.put("/products/:id", verifyTokenAndAdmin, UpdateProduct);
// verifyTokenAndAdmin
router.delete("/products/:id", DeleteProduct);
router.get("/products/delALL", verifyTokenAndAdmin, DeleteAllProducts);
router.get("/products/find/:id", GetProduct);
router.get("/products/findCategories", GetCategoriesOfAllProducts);
router.get("/products/findAllProductsByCategories", GETAllProductsByCategory);
router.get("/products/findSomeOfProductsByCategories", GETSomeOfProductsByCategory);
router.get("/products/findBestProducts", GETBestProducts);

// Payments
router.post("/checkout/payment", StripePayment);

// Users
router.put("/users/:id" , verifyTokenAndAuthorization , UpdateUser)
router.delete("/users/:id" , verifyTokenAndAuthorization , DeleteUser)
router.get("/users/find/:id" , verifyTokenAndAdmin , GetUser)
router.get("/users/" , verifyTokenAndAdmin , GetAllUsers)
router.get("/users/stats" , verifyTokenAndAdmin , GetStatsOfUser)


module.exports = router;