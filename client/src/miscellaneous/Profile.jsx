import React, { useState } from "react";
import { useAuth } from "../hooks/Auth";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { IconButton, styled } from "@mui/material";
// import Dialog from "./Dialog";
const stackStyle= styled(Stack)({
  margin:0
})
const Profile = () => {
  const { user } = useAuth();
  if (!user) {
    return null;
  }
  const initials = user.username
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
  const [menuOpen, setMenuOpen] = useState(false);
  const handleAvatarClick = () => {
    console.log("Avatar clicked");
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <stackStyle direction="row" spacing={1}>
        <IconButton onClick={handleAvatarClick}>
          <Avatar alt={initials} src="/static/images/avatar/1.jpg" />
        </IconButton>
        {/* {menuOpen && <Dialog />} */}
      </stackStyle>
    </>
  );
};
export default Profile;
