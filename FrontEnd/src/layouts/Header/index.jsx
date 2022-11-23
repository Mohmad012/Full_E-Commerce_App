import { useState } from "react";

import {
  Container,
  Wrapper,
  Left,
  Logo,
  Right,
  Icon,
} from "./style";

import {
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { Badge } from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PublicIcon from "@material-ui/icons/Public";
import ReorderIcon from "@material-ui/icons/Reorder";
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
            Icon={PublicIcon}
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
            <Icon isDark={isDark}>
              <FavoriteBorderOutlined
                style={{ width: "1.5rem", height: "1.5rem" }}
              />
            </Icon>
          </Link>

          <CustomDropdown
            showMenu={showAccountState}
            handleToggle={() => handleToggle(setShowAccountState)}
            isDark={isDark}
            Icon={AccountCircleIcon}
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
            Icon={ReorderIcon}
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
          <Link to="/cart">
            <Icon isDark={isDark}>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined
                  style={{ width: "1.5rem", height: "1.5rem" }}
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
