import { useState, useRef, useEffect } from "react";

import {
  Container,
  Wrapper,
  Left,
  WrapperIcon,
  SearchContainer,
  Input,
  Center,
  Logo,
  Right,
  Icon,
  MenuItemLink,
} from "./style";

import {
  FavoriteBorderOutlined,
  Search,
  ShoppingCartOutlined,
} from "@material-ui/icons";

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
import ReorderIcon from "@material-ui/icons/Reorder";
import ToggleOnIcon from "@material-ui/icons/ToggleOn";
// import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import { removeUser } from "../../store/userReducer";
import { changeMode } from "store/modeReducer";
import { decrypt } from "utils/encryptions";
// import ReorderIcon from "@mui/icons-material/Reorder";

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
  user = JSON.parse(decrypt(user));
  const isDark = useSelector((state) => state.mode.isDark);

  const dispatch = useDispatch();
  const history = useHistory();

  const classesSignBx = useStyles();
  const classesLangBx = useStyles();
  const [openSignBx, setOpenSignBx] = useState(false);
  const [openLangBx, setOpenLangBx] = useState(false);
  const anchorLangBxRef = useRef(null);
  const anchorSignBxRef = useRef(null);

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

  const handleCloseLangBx = (event) => {
    if (
      anchorLangBxRef.current &&
      anchorLangBxRef.current.contains(event.target)
    ) {
      return;
    }

    setOpenLangBx(false);
  };

  const handleLangBx = (anchorLangBxRef, e, setOpenLangBx) =>
    handleClose(anchorLangBxRef, e, setOpenLangBx);

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
                onClick={() => handleToggle(setOpenLangBx)}
              >
                <WrapperIcon isDark={isDark}>
                  <PublicIcon />
                </WrapperIcon>
              </Button>
              <Popper
                style={{ zIndex: 1 }}
                open={openLangBx}
                anchorEl={anchorLangBxRef.current}
                role={undefined}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom" ? "center top" : "center bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener
                        onClickAway={(e) =>
                          handleClose(anchorLangBxRef, e, setOpenLangBx)
                        }
                      >
                        <MenuList
                          autoFocusItem={openLangBx}
                          id="menu-list-grow"
                          onKeyDown={handleListKeyDownLangBx}
                        >
                          <MenuItem
                            onClick={(e) =>
                              handleClose(anchorLangBxRef, e, setOpenLangBx)
                            }
                          >
                            AR
                          </MenuItem>
                          <MenuItem
                            onClick={(e) =>
                              handleClose(anchorLangBxRef, e, setOpenLangBx)
                            }
                          >
                            EN
                          </MenuItem>
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
        <Center>
          <Link to="/">
            <Logo isDark={isDark}>Buy&amp;Sale</Logo>
          </Link>
        </Center>
        <Right>
          <button
            onClick={() => dispatch(changeMode())}
            style={{
              backgroundColor: "transparent",
              border: "none",
              marginRight: "0.5rem",
            }}
          >
            <Icon isDark={isDark}>
              <ToggleOnIcon style={{ width: "1.5rem", height: "1.5rem" }} />
            </Icon>
          </button>
          {/* // onClick={() => dispatch(changeMode())} */}
          <button style={{ backgroundColor: "transparent", border: "none" }}>
            <Icon isDark={isDark}>
              <ReorderIcon style={{ width: "1rem", height: "1rem" }} />
            </Icon>
          </button>
          <div className={classesSignBx.root}>
            <div>
              <Button
                style={{ minWidth: "40px" }}
                ref={anchorSignBxRef}
                aria-controls={openSignBx ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                onClick={() => handleToggle(setOpenSignBx)}
              >
                <WrapperIcon isDark={isDark}>
                  <AccountCircleIcon />
                </WrapperIcon>
              </Button>
              <Popper
                style={{ zIndex: 1 }}
                open={openSignBx}
                anchorEl={anchorSignBxRef.current}
                role={undefined}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom" ? "center top" : "center bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleCloseSignBx}>
                        <MenuList
                          autoFocusItem={openSignBx}
                          id="menu-list-grow"
                          onKeyDown={handleListKeyDownSignBx}
                        >
                          {user ? (
                            <MenuItem
                              onClick={(e) =>
                                handleLogOut(anchorSignBxRef, e, setOpenSignBx)
                              }
                            >
                              Logout
                            </MenuItem>
                          ) : (
                            <>
                              <MenuItem
                                onClick={(e) =>
                                  handleSignIn(
                                    anchorSignBxRef,
                                    e,
                                    setOpenSignBx
                                  )
                                }
                              >
                                REGISTER
                              </MenuItem>
                              <MenuItem
                                onClick={(e) =>
                                  handleLogin(anchorSignBxRef, e, setOpenSignBx)
                                }
                              >
                                SIGN IN
                              </MenuItem>
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
          <Link to="/favorite">
            <Icon isDark={isDark}>
              <FavoriteBorderOutlined
                style={{ width: "1rem", height: "1rem" }}
              />
            </Icon>
          </Link>
          <Link to="/cart">
            <MenuItemLink isDark={isDark}>
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
