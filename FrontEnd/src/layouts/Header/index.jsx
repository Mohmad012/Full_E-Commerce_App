import { useState, useRef, useEffect } from "react";

import {
  Container,
  Wrapper,
  Left,
  Language,
  SearchContainer,
  Input,
  Center,
  Logo,
  Right,
  MenuItemLink,
} from "./style";

import { Search, ShoppingCartOutlined } from "@material-ui/icons";

import { Badge } from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PublicIcon from "@material-ui/icons/Public";
// import PublicIcon from "@mui/icons-material/Public";
import { removeUser } from "../../store/userReducer";

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
  const user = useSelector((state) => state.user.currentUser);

  const dispatch = useDispatch();

  const classesSignBx = useStyles();
  const classesLangBx = useStyles();
  const [openSignBx, setOpenSignBx] = useState(false);
  const [openLangBx, setOpenLangBx] = useState(false);
  const anchorLangBxRef = useRef(null);
  const anchorSignBxRef = useRef(null);

  const history = useHistory();

  const handleToggleSignBx = () => {
    setOpenSignBx((prevOpenSignBx) => !prevOpenSignBx);
  };

  const handleToggleLangBx = () => {
    setOpenLangBx((prevOpenLangBx) => !prevOpenLangBx);
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

  const handleCloseLangBx = (event) => {
    if (
      anchorLangBxRef.current &&
      anchorLangBxRef.current.contains(event.target)
    ) {
      return;
    }

    setOpenLangBx(false);
  };

  const handleLangBx = (e) => handleCloseLangBx(e);

  const handleLogin = (e) => {
    handleCloseSignBx(e);
    history.push("/login");
  };

  const handleSignIn = (e) => {
    handleCloseSignBx(e);
    history.push("/register");
  };

  const handleLogOut = (e) => {
    handleCloseSignBx(e);
    dispatch(removeUser());
    localStorage.removeItem("persist:rootUser");
  };

  function handleListKeyDownSignBx(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpenSignBx(false);
    }
  }

  function handleListKeyDownLangBx(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpenLangBx(false);
    }
  }

  // return focus to the button when we transitioned from !openSignBx -> openSignBx
  const prevOpenSignBx = useRef(openSignBx);
  const prevOpenLangBx = useRef(openLangBx);
  useEffect(() => {
    if (prevOpenSignBx.current === true && openSignBx === false) {
      anchorSignBxRef.current.focus();
    }

    prevOpenSignBx.current = openSignBx;

    if (prevOpenLangBx.current === true && openLangBx === false) {
      anchorSignBxRef.current.focus();
    }

    prevOpenLangBx.current = openLangBx;
  }, [openSignBx, openLangBx, history]);

  return (
    <Container>
      <Wrapper>
        <Left>
          <div className={classesLangBx.root}>
            <div>
              <Button
                ref={anchorLangBxRef}
                aria-controls={openLangBx ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                onClick={handleToggleLangBx}>
                <PublicIcon />
              </Button>
              <Popper
                style={{ zIndex: 1 }}
                open={openLangBx}
                anchorEl={anchorLangBxRef.current}
                role={undefined}
                transition
                disablePortal>
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom" ? "center top" : "center bottom",
                    }}>
                    <Paper>
                      <ClickAwayListener onClickAway={handleCloseLangBx}>
                        <MenuList
                          autoFocusItem={openLangBx}
                          id="menu-list-grow"
                          onKeyDown={handleListKeyDownLangBx}>
                          <MenuItem onClick={handleLangBx}>AR</MenuItem>
                          <MenuItem onClick={handleLangBx}>EN</MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
          </div>

          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Link to="/">
          <Center>
            <Logo>Buy&amp;Sale</Logo>
          </Center>
        </Link>
        <Right>
          <div className={classesSignBx.root}>
            <div>
              <Button
                ref={anchorSignBxRef}
                aria-controls={openSignBx ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                onClick={handleToggleSignBx}>
                <AccountCircleIcon />
              </Button>
              <Popper
                style={{ zIndex: 1 }}
                open={openSignBx}
                anchorEl={anchorSignBxRef.current}
                role={undefined}
                transition
                disablePortal>
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom" ? "center top" : "center bottom",
                    }}>
                    <Paper>
                      <ClickAwayListener onClickAway={handleCloseSignBx}>
                        <MenuList
                          autoFocusItem={openSignBx}
                          id="menu-list-grow"
                          onKeyDown={handleListKeyDownSignBx}>
                          {user ? (
                            <MenuItem onClick={handleLogOut}>Logout</MenuItem>
                          ) : (
                            <>
                              <MenuItem onClick={handleSignIn}>
                                REGISTER
                              </MenuItem>
                              <MenuItem onClick={handleLogin}>SIGN IN</MenuItem>
                            </>
                          )}
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
          </div>

          <Link to="/cart">
            <MenuItemLink>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItemLink>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Header;
