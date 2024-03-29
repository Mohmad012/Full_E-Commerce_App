const StripePayment = async (req, res) => {
  try {
    const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
    const charge = await stripe.charges.create({
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: req.body.currency,
    });
    res.status(200).json(charge);
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = {
  StripePayment
}
