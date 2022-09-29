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

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const history = useHistory();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleLogin = (e) => {
    handleClose(e);
    history.push("/login");
  };

  const handleSignIn = (e) => {
    handleClose(e);
    history.push("/register");
  };

  const handleLogOut = (e) => {
    handleClose(e);
    dispatch(removeUser());
    localStorage.removeItem("persist:rootUser");
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open, history]);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language> EN </Language>
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
          <div className={classes.root}>
            <div>
              <Button
                ref={anchorRef}
                aria-controls={open ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                onClick={handleToggle}>
                <AccountCircleIcon />
              </Button>
              <Popper
                style={{ zIndex: 1 }}
                open={open}
                anchorEl={anchorRef.current}
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
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          autoFocusItem={open}
                          id="menu-list-grow"
                          onKeyDown={handleListKeyDown}>
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
