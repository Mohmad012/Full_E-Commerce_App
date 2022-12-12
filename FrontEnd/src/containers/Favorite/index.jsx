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
import { removeFav, updateFav } from "store/favReducer";
import { addProduct } from "store/cartReducer";
import { useTranslation } from "react-i18next";

const FavoriteContainer = () => {
  const fav = useSelector((state) => state.fav);
  const { t } = useTranslation();

  const isDark = useSelector((state) => state.mode.isDark);

  const dispatch = useDispatch();

  const history = useHistory();

  const handleQuantity = (_id, type) => dispatch(updateFav({ _id, type }));
  const handleRemoveItems = (id) => dispatch(removeFav(id));

  const handleAddToCard = (product) => {
    dispatch(
      addProduct({
        ...product,
        quantity: fav.quantity
      })
    );
  };

  return (
    <Container isDark={isDark}>
      <Layout>
        <Announcement />
        <Wrapper isDark={isDark}>
          <Title isDark={isDark}>{t("your_favorite_items_key")}</Title>
          <Top isDark={isDark}>
            <TopButton
              onClick={() => history.push("/")}
              type="TopButton"
              isDark={isDark}>
              {t("continue_shopping_key")}
            </TopButton>
          </Top>
          <Bottom isDark={isDark}>
            <Info isDark={isDark}>
              {Object.values(fav?.products).length ? (
                Object.values(fav?.products)?.map((product) => (
                  <>
                    <Product isDark={isDark}>
                      <ProductDetail isDark={isDark}>
                        <Image loading="lazy" isDark={isDark} src={product.img} />
                        <Details isDark={isDark}>
                          <ProductName isDark={isDark}>
                            {" "}
                            <b> Title: </b> {product.title}
                          </ProductName>
                          <ProductId isDark={isDark}>
                            {" "}
                            <b> ID:</b> {product._id}
                          </ProductId>
                          <RemoveBtn
                            isDark={isDark}
                            onClick={() => handleRemoveItems(product._id)}>
                            {t("remove_key")}
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
                          onClick={() => handleAddToCard(product)}>
                          {t("add_to_cart_key")}
                        </Button>
                      </PriceDetail>
                    </Product>
                    <Hr isDark={isDark} />
                  </>
                ))
              ) : (
                <NoItemFuond isDark={isDark}>
                  {t("there_is_no_item_in_your_favorite_page_right_now_key")}
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
