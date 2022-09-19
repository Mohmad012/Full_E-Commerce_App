import SearchoutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

import DarkModeoutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";

import FullscreenExitoutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneQutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleoutlineoutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListoutlinedIcon from "@mui/icons-material/ListOutlined";
import "./style.scss";
import { DarkModeContext } from "../../context/darkMode";
import { useContext } from "react";

const Header = () => {
  const { darkMode, dispatch } = useContext(DarkModeContext);

  return (
    <nav className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search. . ." />
          <SearchoutlinedIcon className="icon" />
        </div>

        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>

          <div
            className="item"
            style={{ cursor: "pointer" }}
            onClick={() => dispatch({ type: "TOGGLE" })}>
            {darkMode ? (
              <LightModeIcon className="icon" />
            ) : (
              <DarkModeoutlinedIcon className="icon" />
            )}
          </div>

          <div className="item">
            <FullscreenExitoutlinedIcon className="icon" />
          </div>

          <div className="item">
            <NotificationsNoneQutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>

          <div className="item">
            <ChatBubbleoutlineoutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>

          <div className="item">
            <ListoutlinedIcon className="icon" />
          </div>

          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
