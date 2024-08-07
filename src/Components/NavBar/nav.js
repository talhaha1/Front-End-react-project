import React, { useState } from 'react';
import { AppBar, Toolbar, Grid, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './logo.png';
import './nav.css';
import './responsive.css';

const Nav = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const showDropdown = () => setDropdownVisible(true);
  const hideDropdown = () => setDropdownVisible(false);

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'black' }}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={6} sm={4}>
            <div className="logo">
              <a href="/">
                <img src={logo} alt="Analyzin Solutions" />
              </a>
            </div>
          </Grid>
          <Grid item xs={6} sm={8} className="nav-links">
            <Grid container justifyContent="flex-end">
              <Grid item>
                <ul className="nav-list">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li
                    className="dropdown"
                    onMouseOver={showDropdown}
                    onMouseLeave={hideDropdown}
                  >
                    <a href="/services">Services</a>
                    {dropdownVisible && (
                      <ul className="dropdown-menu">
                        <li>
                          <a href="/services/service1">Business Analytics</a>
                        </li>
                        <li>
                          <a href="/services/service2">Digital Marketing and Analytics</a>
                        </li>
                        <li>
                          <a href="/services/service3">Automation and Integration</a>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={8} className="menu-icon">
            <IconButton edge="end" color="inherit" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              keepMounted
            >
              <MenuItem onClick={handleMenuClose}>
                <a href="/">Home</a>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <a href="/services">Services</a>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <a href="/about">About</a>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <a href="/contact">Contact</a>
              </MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
