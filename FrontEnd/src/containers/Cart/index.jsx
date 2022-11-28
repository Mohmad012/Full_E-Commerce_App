import { useState } from "react";
import Layout from "layouts";
import Announcement from "components/Announcement";

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
  NoItemFuond,
  SummaryTitle,
  SummaryItem,
  SummaryItemText,
  SummaryItemPrice,
  SummaryButton,
  RemoveBtn,
  Clear,
} from "./style";

import { Add, Remove } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct, clearProducts, removeProduct } from "store/cartReducer";
import { useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import { useHistory } from "react-router-dom";
import { checkoutPayment } from "utils/apis";

const StripeKEY = process.env.REACT_APP_STRIPE_PUBLIC_KEY;

const CartContainer = () => {
  const cart = useSelector((state) => state.cart);
  let user = useSelector((state) => state.user.currentUser);
  const isDark = useSelector((state) => state.mode.isDark);

  const dispatch = useDispatch();

  const [StripeToken, setStripeToken] = useState(null);

  const history = useHistory();

  const onToken = (token) => setStripeToken(token);

  useEffect(() => {
    const makeCheckout = async () => {
      try {
        const res = await checkoutPayment(
          {
            tokenId: StripeToken.id,
            amount: cart.total * 100,
          }
        )
        if (res.status === 200) {
          dispatch(clearProducts());
          history.push("/success", { data: res.data });
        }
      } catch (e) {
        console.log("Error: ", e);
      }
    };

    StripeToken && cart.total >= 1 && makeCheckout();
  }, [StripeToken, cart.total, history]);

  const handleQuantity = (_id, type) => dispatch(updateProduct({ _id, type }));
  const handleRemoveAllItems = () => dispatch(clearProducts());
  const handleRemoveItems = (id) => dispatch(removeProduct(id));

  return (
    <Container isDark={isDark}>
      <Layout isDark={isDark}>
        <Announcement />
        <Wrapper isDark={isDark}>
          <Title isDark={isDark}>your bag</Title>
          <Top isDark={isDark}>
            <TopButton
              onClick={() => history.push("/")}
              type="TopButton"
              isDark={isDark}>
              CONTINUE SHOPPING
            </TopButton>
            <TopTexts isDark={isDark}>
              <TopText isDark={isDark}> Shopping Bag (2) </TopText>
              <TopText isDark={isDark}> Your Wishlist (0) </TopText>
            </TopTexts>
            {/* <TopButton type="filled">CHECKOUT NOW</TopButton> */}
          </Top>
          <Bottom isDark={isDark}>
            <Info isDark={isDark}>
              {Object.values(cart?.products).length ? (
                Object.values(cart?.products)?.map((product) => (
                  <>
                    <Product isDark={isDark}>
                      <ProductDetail isDark={isDark}>
                        <Image loading="lazy" isDark={isDark} src={product.img} />
                        <Details isDark={isDark}>
                          <ProductName isDark={isDark}>
                            {" "}
                            <b> Product: </b> {product.title}
                          </ProductName>
                          <ProductId isDark={isDark}>
                            {" "}
                            <b> ID:</b> {product._id}
                          </ProductId>
                          {/* <ProductColor isDark={isDark} color={product.color} /> */}
                          {/* <ProductSize isDark={isDark}>
                            {" "}
                            <b> Size: </b> {product.size}
                          </ProductSize> */}
                          <RemoveBtn
                            isDark={isDark}
                            onClick={() => handleRemoveItems(product._id)}>
                            remove
                          </RemoveBtn>
                        </Details>
                      </ProductDetail>
                      <PriceDetail isDark={isDark}>
                        <ProductAmountContainer isDark={isDark}>
                          <Add
                            isDark={isDark}
                            style={{ cursor: "pointer" }}
                            onClick={() => handleQuantity(product._id, "inc")}
                          />
                          <ProductAmount isDark={isDark}>
                            {product.quantity}
                          </ProductAmount>
                          <Remove
                            isDark={isDark}
                            style={{ cursor: "pointer" }}
                            onClick={() => handleQuantity(product._id, "dec")}
                          />
                        </ProductAmountContainer>
                        <ProductPrice isDark={isDark}>
                          {Number(product.price * product.quantity).toFixed(2)}{" "}
                          $
                        </ProductPrice>
                      </PriceDetail>
                    </Product>
                    <Hr isDark={isDark} />
                  </>
                ))
              ) : (
                <NoItemFuond isDark={isDark}>
                  there is no item in your bag right now!!
                </NoItemFuond>
              )}
            </Info>
            {Object.values(cart?.products).length ? (
              <Summary isDark={isDark}>
                <SummaryTitle isDark={isDark}> ORDER SUMMARY </SummaryTitle>
                <SummaryItem isDark={isDark}>
                  <SummaryItemText isDark={isDark}> Subtotal </SummaryItemText>
                  <SummaryItemPrice isDark={isDark}>
                    {" "}
                    $ {Number(cart.total).toFixed(2)}{" "}
                  </SummaryItemPrice>
                </SummaryItem>

                <SummaryItem isDark={isDark}>
                  <SummaryItemText isDark={isDark}>
                    {" "}
                    Estimated Shipping{" "}
                  </SummaryItemText>
                  <SummaryItemPrice isDark={isDark}> $ 5.90 </SummaryItemPrice>
                </SummaryItem>

                <SummaryItem isDark={isDark}>
                  <SummaryItemText isDark={isDark}>
                    {" "}
                    Shipping Discount{" "}
                  </SummaryItemText>
                  <SummaryItemPrice isDark={isDark}> $ -5.90 </SummaryItemPrice>
                </SummaryItem>

                <SummaryItem type="total" isDark={isDark}>
                  <SummaryItemText isDark={isDark}> Total </SummaryItemText>
                  <SummaryItemPrice isDark={isDark}>
                    {" "}
                    $ {Number(cart.total).toFixed(2)}{" "}
                  </SummaryItemPrice>
                </SummaryItem>
                <Clear>
                  <RemoveBtn
                    type="all"
                    isDark={isDark}
                    onClick={handleRemoveAllItems}>
                    Clear
                  </RemoveBtn>
                </Clear>
                {!user ? (
                  <SummaryButton
                    pos="cnt"
                    isDark={isDark}
                    onClick={() => history.push("/login")}>
                    CHECKOUT NOW
                  </SummaryButton>
                ) : (
                  <StripeCheckout
                    name="Buy & Sale"
                    image="./logo.webp"
                    billingAddress
                    shippingAddress
                    description={`Your total is $${cart.total}`}
                    amount={cart.total * 100}
                    token={onToken}
                    stripeKey={StripeKEY}>
                    <SummaryButton pos="cnt" isDark={isDark}>
                      CHECKOUT NOW
                    </SummaryButton>
                  </StripeCheckout>
                )}
              </Summary>
            ) : (
              ""
            )}
          </Bottom>
        </Wrapper>
      </Layout>
    </Container>
  );
};

export default CartContainer;
