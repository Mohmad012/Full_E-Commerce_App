import { useState } from "react";
import Layout from "../../layouts";
import Announcement from "../../components/Announcement";

import {
  Container,
  Wrapper,
  Title,
  Top,
  TopTexts,
  TopText,
  TopButton,
  Bottom,
  Info,
  Summary,
  Product,
  ProductDetail,
  Image,
  Details,
  ProductName,
  ProductId,
  ProductColor,
  ProductSize,
  PriceDetail,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
  Hr,
  SummaryTitle,
  SummaryItem,
  SummaryItemText,
  SummaryItemPrice,
  SummaryButton,
} from "./style";

import { Add, Remove } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct } from "../../store/cartReducer";
import { useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../../requestApi";
import { useHistory } from "react-router-dom";

const StripeKEY = process.env.REACT_APP_STRIPE_PUBLIC_KEY;

const CartContainer = () => {
  const cart = useSelector((state) => state.cart);

  const [updateQuantity, setUpdateQuantity] = useState(1);
  const [idProd, setIdProd] = useState(0);
  const [priceProd, setPriceProd] = useState(0);

  const dispatch = useDispatch();

  const handleQuantity = (type, product) => {
    // setIdProd(id);
    // setPriceProd(price);
    // let newQuantity = 1;
    // let currProduct = { ...product };
    // type === "dec"
    //   ? currProduct.quantity > 1 && setUpdateQuantity((prev) => prev - 1)
    //   : setUpdateQuantity((prev) => prev + 1);
    // console.log("newQuantity before", newQuantity);
    // if (newQuantity > 1) {
    //   if (type === "dec") {
    //     newQuantity -= 1;
    //   } else {
    //     newQuantity += 1;
    //   }
    // }
    // // type === "dec"
    // //   ? currProduct.quantity > 1 && currProduct.quantity--
    // //   : currProduct.quantity++;
    // console.log("newQuantity after", newQuantity);
  };

  // useEffect(() => {
  //   updateQuantity &&
  //     idProd &&
  //     priceProd &&
  //     dispatch(
  //       updateProduct({
  //         id: idProd,
  //         updateQuantity,
  //         price: priceProd,
  //       })
  //     );
  // }, [updateQuantity, idProd, priceProd]);

  const [StripeToken, setStripeToken] = useState(null);

  const history = useHistory();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeCheckout = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: StripeToken.id,
          amount: cart.total * 100,
        });

        history.push("/success", { data: res.data });
      } catch (e) {
        console.log("Error: ", e);
      }
    };

    StripeToken && cart.total >= 1 && makeCheckout();
  }, [StripeToken, cart.total, history]);

  return (
    <Container>
      <Layout>
        <Announcement />
        <Wrapper>
          <Title>YOUR BAG</Title>
          <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
              <TopText> Shopping Bag (2) </TopText>
              <TopText> Your Wishlist (0) </TopText>
            </TopTexts>
            {/* <TopButton type="filled">CHECKOUT NOW</TopButton> */}
          </Top>
          <Bottom>
            <Info>
              {cart?.products.length ? (
                cart?.products?.map((product) => (
                  <>
                    <Product>
                      <ProductDetail>
                        <Image src={product.img} />
                        <Details>
                          <ProductName>
                            {" "}
                            <b> Product: </b> {product.title}
                          </ProductName>
                          <ProductId>
                            {" "}
                            <b> ID:</b> {product._id}
                          </ProductId>
                          <ProductColor color={product.color} />
                          <ProductSize>
                            {" "}
                            <b> Size: </b> {product.size}
                          </ProductSize>
                        </Details>
                      </ProductDetail>
                      <PriceDetail>
                        <ProductAmountContainer>
                          <Add
                            style={{ cursor: "pointer" }}
                            onClick={() => handleQuantity("inc", product)}
                          />
                          <ProductAmount>{product.quantity}</ProductAmount>
                          <Remove
                            style={{ cursor: "pointer" }}
                            onClick={() => handleQuantity("dec", product)}
                          />
                        </ProductAmountContainer>
                        <ProductPrice>
                          $ {product.price * product.quantity}
                        </ProductPrice>
                      </PriceDetail>
                    </Product>
                    <Hr />
                  </>
                ))
              ) : (
                <p>No Item Fuond!!</p>
              )}
            </Info>
            <Summary>
              <SummaryTitle> ORDER SUMMARY </SummaryTitle>
              <SummaryItem>
                <SummaryItemText> Subtotal </SummaryItemText>
                <SummaryItemPrice> $ {cart.total} </SummaryItemPrice>
              </SummaryItem>

              <SummaryItem>
                <SummaryItemText> Estimated Shipping </SummaryItemText>
                <SummaryItemPrice> $ 5.90 </SummaryItemPrice>
              </SummaryItem>

              <SummaryItem>
                <SummaryItemText> Shipping Discount </SummaryItemText>
                <SummaryItemPrice> $ -5.90 </SummaryItemPrice>
              </SummaryItem>

              <SummaryItem type="total">
                <SummaryItemText> Total </SummaryItemText>
                <SummaryItemPrice> $ {cart.total} </SummaryItemPrice>
              </SummaryItem>

              {/* <SummaryButton> CHECKOUT NOW </SummaryButton> */}

              {/* <StripeCheckout
                name="Lama Shop"
                image="https://avatars.githubusercontent.com/u/1486366?v=4"
                billingAddress
                shippingAddress
                description={`Your total is ${cart.total}`}
                amount={cart.total * 100}
                token={onToken}
                stripekey={StripeKEY}>
                <SummaryButton> CHECKOUT NOW </SummaryButton>
              </StripeCheckout> */}

              <StripeCheckout
                name="Lama Shop"
                image="https://avatars.githubusercontent.com/u/1486366?v=4"
                billingAddress
                shippingAddress
                description={`Your total is $${cart.total}`}
                amount={cart.total * 100}
                token={onToken}
                stripeKey={StripeKEY}>
                <SummaryButton>CHECKOUT NOW</SummaryButton>
              </StripeCheckout>
            </Summary>
          </Bottom>
        </Wrapper>
      </Layout>
    </Container>
  );
};

export default CartContainer;
