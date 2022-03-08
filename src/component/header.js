import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import { Avatar, IconButton } from "@material-ui/core";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import AddIcon from '@material-ui/icons/Add'
import ForumIcon from '@material-ui/icons/Forum'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import './header.css'

const header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://drive.google.com/uc?export=view&id=1ceL8REZM32uyrq5mXPy-AF8p7To0gE2x"
          alt="Logo"
        />
      </div>
      <div className="header__input">
        <SearchIcon />
        <input
          placeholder="Search
    Backengg"
          type="text"
        />
      </div>
      <div className="header_center">
        <div className="header_option header_option--active">
          <HomeIcon fontsize="large" />
        </div>
        <div className="header_option">
          <FlagIcon fontsize="large" />
        </div>
        <div className="header_option">
          <SubscriptionsOutlinedIcon fontsize="large" />
        </div>
        <div className="header_option">
          <StorefrontOutlinedIcon fontsize="large" />
        </div>
        <div className="header_option">
          <SupervisedUserCircleIcon fontsize="large" />
        </div>
        <div className="header_right">
          <div className="header_info">
            <Avatar /> &nbsp;
            <h4>Rijvan</h4>
          </div>

          <IconButton>
            <AddIcon />
          </IconButton>
          <IconButton>
            <ForumIcon />
          </IconButton>
          <IconButton>
            <NotificationsActiveIcon />
          </IconButton>
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </div>
      </div>

    </div>
  );
};

export default header;
