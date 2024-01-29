
import { Avatar, Box, Menu, MenuItem, Stack, Typography, styled } from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import React, { useState } from 'react';
const MenuStyled = styled(Menu)({
  marginTop: "1rem",
  marginRight: "1rem"
});
const MenuItemStyled = styled(MenuItem)({
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Logout = styled(Typography)({
  marginLeft: ".5rem"
});

const Dialog = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }
  return (
    <>
      <div onClick={handleClick} style={{ cursor: "pointer" }}>
      </div>
      <MenuStyled
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItemStyled onClick={handleClose}>Profile</MenuItemStyled>
        <MenuItemStyled onClick={() => { /* Logout logic */ handleClose(); }}>
          <PowerSettingsNewIcon color='primary' />
          <Logout>logout</Logout>
        </MenuItemStyled>
      </MenuStyled>
    </>
  )
}
export default Dialog;
