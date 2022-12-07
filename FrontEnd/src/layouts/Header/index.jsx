import { useState } from "react";

import {
  Container,
  Wrapper,
  Left,
  Logo,
  Right,
  Icon,
} from "./style";

import Favorite from "components/Icons/Favorite";
import Account from "components/Icons/Account"
import Langs from "components/Icons/Langs"
import Cart from "components/Icons/Cart"
import List from "components/Icons/List"
import { Badge } from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { removeUser } from "store/userReducer";
import { changeMode } from "store/modeReducer";
import Dark from "./Dark";
import Light from "./Light";
import CustomDropdown from "./CustomDropdown";

const Header = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  let user = useSelector((state) => state.user.currentUser);
  const isDark = useSelector((state) => state.mode.isDark);
  const [showMenu, setShowMenu] = useState(false);
  const [showAccountState, setShowAccountState] = useState(false);
  const [showLang, setShowLang] = useState(false);
  const [subLang, setSubLang] = useState(false);
  const [subAccount, setSubAccount] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory()

  const handleClose = (e, setOpen) => {
    e.stopPropagation()
    setOpen(false);
  }

  const handleToggle = (setOpen) => setOpen((prev) => !prev);

  const handleLogin = (e) => {
    handleClose(e, setShowAccountState)
    history.push("/login");
  };

  const handleSignIn = (e) => {
    handleClose(e, setShowAccountState)
    history.push("/register");
  };

  const handleLogOut = (e) => {
    handleClose(e, setShowAccountState)
    dispatch(removeUser());
  };

  const handleSubMenu = (e, setSubMenu) => {
    e.stopPropagation()
    setSubMenu((prev) => !prev);
  }

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/">
            <Logo isDark={isDark}>Buy&amp;Sale</Logo>
          </Link>
        </Left>
        <Right>
          {!isDark ?
            <Dark
              dispatch={dispatch}
              changeMode={changeMode}
            />
            :
            <Light
              dispatch={dispatch}
              changeMode={changeMode}
            />
          }

          <CustomDropdown
            showMenu={showLang}
            handleToggle={() => handleToggle(setShowLang)}
            isDark={isDark}
            Icon={Langs}
            styleCs={isDark ? "#000" : "#fff"}
          >
            <ul>
              <li
                onClick={(e) => handleClose(e, setShowLang)}>
                AR
              </li>
              <li
                onClick={(e) => handleClose(e, setShowLang)}>
                EN
              </li>

            </ul>

          </CustomDropdown>

          <Link to="/favorite">
            <Icon isDark={isDark} type="icon">
              <Favorite style={isDark ? "#000" : "#fff"} />
            </Icon>
          </Link>

          <CustomDropdown
            showMenu={showAccountState}
            handleToggle={() => handleToggle(setShowAccountState)}
            isDark={isDark}
            Icon={Account}
            styleCs={isDark ? "#000" : "#fff"}
          >
            <ul>
              {user ? (
                <li
                  onClick={handleLogOut}>
                  Logout
                </li>
              ) : (
                <>
                  <li
                    onClick={handleSignIn}>
                    REGISTER
                  </li>
                  <li
                    onClick={handleLogin}>
                    SIGN IN
                  </li>
                </>
              )}

            </ul>

          </CustomDropdown>

          <CustomDropdown
            showMenu={showMenu}
            handleToggle={() => handleToggle(setShowMenu)}
            isDark={isDark}
            Icon={List}
            styleCs={isDark ? "#000" : "#fff"}
            Class="iconMenuBtn"
          >
            <ul>
              <li onClick={(e) => handleSubMenu(e, setSubAccount)}>
                Account
                <div style={{ opacity: subAccount ? "1" : "0", zIndex: subAccount ? "13" : "-1" }}>
                  {user ? (
                    <span
                      onClick={handleLogOut}>
                      Logout
                    </span>
                  ) : (
                    <>
                      <span
                        onClick={handleSignIn}>
                        REGISTER
                      </span>
                      <span
                        onClick={handleLogin}>
                        SIGN IN
                      </span>
                    </>
                  )}
                </div>
              </li>
              <li onClick={(e) => handleSubMenu(e, setSubLang)}>
                Language
                <div style={{ opacity: subLang ? "1" : "0", zIndex: subLang ? "13" : "-1" }}>
                  <span>AR</span>
                  <span>EN</span>
                </div>
              </li>
              <li onClick={() => history.push("/favorite")}>Favorite</li>
              <li onClick={() => history.push("/cart")}>Cart</li>
            </ul>

          </CustomDropdown>
          <Link to="/cart" type="icon">
            <Icon isDark={isDark}>
              <Badge badgeContent={quantity} color="primary">
                <Cart
                   style={isDark ? "#000" : "#fff"}
                />
              </Badge>
            </Icon>
          </Link>
        </Right>
      </Wrapper>
    </Container >
  );
};

export default Header;
