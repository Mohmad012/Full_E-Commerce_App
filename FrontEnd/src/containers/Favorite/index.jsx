import Layout from "layouts";
import Announcement from "components/Announcement";

import {
  Container,
  Wrapper,
  Title,
  Top,
  TopButton,
  Bottom,
  Info,
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
  RemoveBtn,
  Button,
} from "./style";

import { Add, Remove } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { clearFavs, removeFav, updateFav } from "store/favReducer";
import { addProduct } from "store/cartReducer";
import { useState } from "react";
import { decrypt } from "utils/encryptions";

const FavoriteContainer = () => {
  const cart = useSelector((state) => state.cart);
  const fav = useSelector((state) => state.fav);
  const [favs, setFavs] = useState(fav);

  // console.log("favs", favs);
  let user = useSelector((state) => state.user.currentUser);
  // user = JSON.parse(decrypt(user));
  const isDark = useSelector((state) => state.mode.isDark);

  const dispatch = useDispatch();

  const history = useHistory();

  const handleQuantity = (_id, type) => dispatch(updateFav({ _id, type }));
  const handleRemoveAllItems = () => dispatch(clearFavs());
  const handleRemoveItems = (id) => dispatch(removeFav(id));

  const handleAddToCard = () => {
    dispatch(
      addProduct({
        // ...product,
        // quantity,
        // color,
        // size,
      })
    );
  };

  return (
    <Container isDark={isDark}>
      <Layout>
        <Announcement />
        <Wrapper isDark={isDark}>
          <Title isDark={isDark}>your favorite items</Title>
          <Top isDark={isDark}>
            <TopButton
              onClick={() => history.push("/")}
              type="TopButton"
              isDark={isDark}
            >
              CONTINUE SHOPPING
            </TopButton>
          </Top>
          <Bottom isDark={isDark}>
            <Info isDark={isDark}>
              {Object.values(cart?.products).length ? (
                Object.values(cart?.products)?.map((product) => (
                  <>
                    <Product isDark={isDark}>
                      <ProductDetail isDark={isDark}>
                        <Image isDark={isDark} src={product.img} />
                        <Details isDark={isDark}>
                          <ProductName isDark={isDark}>
                            {" "}
                            <b> Product: </b> {product.title}
                          </ProductName>
                          <ProductId isDark={isDark}>
                            {" "}
                            <b> ID:</b> {product._id}
                          </ProductId>
                          <ProductColor isDark={isDark} color={product.color} />
                          <ProductSize isDark={isDark}>
                            {" "}
                            <b> Size: </b> {product.size}
                          </ProductSize>
                          <RemoveBtn
                            isDark={isDark}
                            onClick={() => handleRemoveItems(product._id)}
                          >
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
                        <Button
                          pos="ltf"
                          addWidth
                          isDark={isDark}
                          onClick={handleAddToCard}
                        >
                          ADD TO CART
                        </Button>
                      </PriceDetail>
                    </Product>
                    <Hr isDark={isDark} />
                  </>
                ))
              ) : (
                <NoItemFuond isDark={isDark}>
                  there is no item in your favorite page right now!!
                </NoItemFuond>
              )}
            </Info>
          </Bottom>
        </Wrapper>
      </Layout>
    </Container>
  );
};

export default FavoriteContainer;
