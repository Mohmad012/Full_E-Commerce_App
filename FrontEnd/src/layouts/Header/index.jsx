import { useState, useRef, useEffect } from "react";

import {
  Container,
  Wrapper,
  Left,
  Logo,
  Right,
  Icon,
  WrapperIcon,
  BtnListBx,
} from "./style";

import {
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";

import { Badge } from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PublicIcon from "@material-ui/icons/Public";
import ReorderIcon from "@material-ui/icons/Reorder";
import { removeUser } from "../../store/userReducer";
import { changeMode } from "store/modeReducer";
import BtnList from "./BtnList";
import Dark from "./Dark";
import Light from "./Light";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

const Header = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  let user = useSelector((state) => state.user.currentUser);
  // user = JSON.parse(decrypt(user));
  const isDark = useSelector((state) => state.mode.isDark);

  const dispatch = useDispatch();
  const history = useHistory();

  const classesSignBx = useStyles();
  const classesLangBx = useStyles();
  const [openSignBx, setOpenSignBx] = useState(false);
  const [openLangBx, setOpenLangBx] = useState(false);
  const [openBtnList, setOpenBtnList] = useState(false);
  const anchorLangBxRef = useRef(null);
  const anchorSignBxRef = useRef(null);
  const anchorBtnListRef = useRef(null);

  const handleToggle = (setOpen) => {
    setOpen((prev) => !prev);
  };

  const handleClose = (anchorRef, event, setOpen) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) return;
    setOpen(false);
  };

  const handleCloseSignBx = (event) => {
    if (
      anchorSignBxRef.current &&
      anchorSignBxRef.current.contains(event.target)
    ) {
      return;
    }

    setOpenSignBx(false);
  };

  const handleLogin = (anchorSignBxRef, e, setOpenSignBx) => {
    handleClose(anchorSignBxRef, e, setOpenSignBx);
    history.push("/login");
  };

  const handleSignIn = (anchorSignBxRef, e, setOpenSignBx) => {
    handleClose(anchorSignBxRef, e, setOpenSignBx);
    history.push("/register");
  };

  const handleLogOut = (anchorSignBxRef, e, setOpenSignBx) => {
    handleClose(anchorSignBxRef, e, setOpenSignBx);
    dispatch(removeUser());
  };

  function handleListKeyDown(event, setOpen) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  function handleListKeyDownSignBx(event) {
    handleListKeyDown(event, setOpenSignBx);
  }

  function handleListKeyDownLangBx(event) {
    handleListKeyDown(event, setOpenLangBx);
  }
  function handleListKeyDownBtnList(event) {
    handleListKeyDown(event, setOpenBtnList);
  }

  // return focus to the button when we transitioned from !openSignBx -> openSignBx
  const prevOpenSignBx = useRef(openSignBx);
  const prevOpenLangBx = useRef(openLangBx);
  const prevOpenBtnList = useRef(openBtnList);
  useEffect(() => {
    if (prevOpenSignBx.current === true && openSignBx === false) {
      anchorSignBxRef.current.focus();
    }

    prevOpenSignBx.current = openSignBx;

    if (prevOpenLangBx.current === true && openLangBx === false) {
      anchorSignBxRef.current.focus();
    }

    prevOpenLangBx.current = openLangBx;

    if (prevOpenBtnList.current === true && openBtnList === false) {
      anchorBtnListRef.current.focus();
    }

    prevOpenBtnList.current = openBtnList;
  }, [openSignBx, openLangBx, openBtnList, history]);

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

          <BtnList
            ClassList={"classesLangBxRoot"}
            classes={classesLangBx}
            anchorBtn={anchorLangBxRef}
            openBtn={openLangBx}
            setOpenBtn={setOpenLangBx}
            WrapperIcon={WrapperIcon}
            isDark={isDark}
            handleToggle={handleToggle}
            IconBtn={PublicIcon}
            BtnListBx={BtnListBx}>
            <ClickAwayListener
              onClickAway={(e) =>
                handleClose(anchorLangBxRef, e, setOpenLangBx)
              }>
              <MenuList
                autoFocusItem={openLangBx}
                id="menu-list-grow"
                onKeyDown={handleListKeyDownLangBx}>
                <MenuItem
                  onClick={(e) =>
                    handleClose(anchorLangBxRef, e, setOpenLangBx)
                  }>
                  AR
                </MenuItem>
                <MenuItem
                  onClick={(e) =>
                    handleClose(anchorLangBxRef, e, setOpenLangBx)
                  }>
                  EN
                </MenuItem>
              </MenuList>
            </ClickAwayListener>
          </BtnList>

          <Link to="/favorite">
            <Icon isDark={isDark}>
              <FavoriteBorderOutlined
                style={{ width: "1.5rem", height: "1.5rem" }}
              />
            </Icon>
          </Link>
          <BtnList
            classes={classesSignBx}
            anchorBtn={anchorSignBxRef}
            openBtn={openSignBx}
            setOpenBtn={setOpenSignBx}
            WrapperIcon={WrapperIcon}
            isDark={isDark}
            handleToggle={handleToggle}
            IconBtn={AccountCircleIcon}
            BtnListBx={BtnListBx}>
            <ClickAwayListener onClickAway={handleCloseSignBx}>
              <MenuList
                autoFocusItem={openSignBx}
                id="menu-list-grow"
                onKeyDown={handleListKeyDownSignBx}>
                {user ? (
                  <MenuItem
                    onClick={(e) =>
                      handleLogOut(anchorSignBxRef, e, setOpenSignBx)
                    }>
                    Logout
                  </MenuItem>
                ) : (
                  <>
                    <MenuItem
                      onClick={(e) =>
                        handleSignIn(anchorSignBxRef, e, setOpenSignBx)
                      }>
                      REGISTER
                    </MenuItem>
                    <MenuItem
                      onClick={(e) =>
                        handleLogin(anchorSignBxRef, e, setOpenSignBx)
                      }>
                      SIGN IN
                    </MenuItem>
                  </>
                )}
              </MenuList>
            </ClickAwayListener>
          </BtnList>

          <BtnList
            classes={classesLangBx}
            anchorBtn={anchorBtnListRef}
            openBtn={openBtnList}
            setOpenBtn={setOpenBtnList}
            WrapperIcon={WrapperIcon}
            isDark={isDark}
            handleToggle={handleToggle}
            IconBtn={ReorderIcon}
            BtnListBx={BtnListBx}
            type="list">
            <ClickAwayListener
              onClickAway={(e) =>
                handleClose(anchorBtnListRef, e, setOpenBtnList)
              }>
              <MenuList
                autoFocusItem={openBtnList}
                id="menu-list-grow"
                onKeyDown={handleListKeyDownBtnList}>
                <MenuItem
                  onClick={(e) =>
                    handleClose(anchorBtnListRef, e, setOpenBtnList)
                  }>
                  <Link to="/favorite">Favorite Products</Link>
                </MenuItem>
                <MenuItem
                  onClick={(e) =>
                    handleClose(anchorBtnListRef, e, setOpenBtnList)
                  }>
                  AR
                </MenuItem>

                <MenuItem
                  onClick={(e) =>
                    handleClose(anchorBtnListRef, e, setOpenBtnList)
                  }>
                  EN
                </MenuItem>

                {user ? (
                  <MenuItem
                    onClick={(e) =>
                      handleLogOut(anchorSignBxRef, e, setOpenSignBx)
                    }>
                    Logout
                  </MenuItem>
                ) : (
                  <>
                    <MenuItem
                      onClick={(e) =>
                        handleSignIn(anchorSignBxRef, e, setOpenSignBx)
                      }>
                      REGISTER
                    </MenuItem>
                    <MenuItem
                      onClick={(e) =>
                        handleLogin(anchorSignBxRef, e, setOpenSignBx)
                      }>
                      SIGN IN
                    </MenuItem>
                  </>
                )}

                <MenuItem
                  onClick={(e) =>
                    handleClose(anchorBtnListRef, e, setOpenBtnList)
                  }>
                  <Link to="/cart">You Bag</Link>
                </MenuItem>
              </MenuList>
            </ClickAwayListener>
          </BtnList>

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
