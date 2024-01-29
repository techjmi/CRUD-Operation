import React from "react";
import { NavLink, Navigate, Outlet, useNavigate } from "react-router-dom";
import { FaHome, FaRegListAlt, FaUser } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";
import Users from "./Users";
import { Box, Button, Divider, Grid, Typography, styled } from "@mui/material";
import { useAuth } from "../hooks/Auth";

const GridLeft = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  alignSelf: "start",
  marginTop: "1rem",
  padding: "1rem 3rem",
  marginBottom: 0,
  height: "83vh",
  boxShadow: "rgba(0, 0, 0, 0.4) 0px 30px 90px",
  borderRadius: "5px",
});

const TypoStyle = styled(Typography)({
  fontWeight: "bold",
  textAlign: "center",
});

const Component = styled(Grid)({
  display: "flex",
});

const GridRight = styled(Grid)({
  flexGrow: 1,
});

const BoxStyle = styled(Box)({
  
});

const AdminLayout = () => {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  if (!user.isAdmin) {
    return navigate("/");
  }

  return (
    <Component container>
      <GridLeft item lg={2} md={2} xs={12} sm={12}>
        <TypoStyle>Dashboard</TypoStyle>
        <BoxStyle>
          <header>
            <nav>
              <ul
                style={{
                  listStyle: "none",
                  margin: "1rem",
                  padding: "0",
                  display: "flex",
                  gap: "2rem",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <li>
                  <NavLink to="/admin/users" style={{ textDecoration: "none" }}>
                    <FaUser /> User
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/admin/contact" style={{ textDecoration: "none" }}>
                    <TiContacts /> Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" style={{ textDecoration: "none" }}>
                    <FaHome /> Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/service" style={{ textDecoration: "none" }}>
                    <FaRegListAlt /> Services
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
        </BoxStyle>
      </GridLeft>

      <GridRight
        item
        lg={10}
        md={10}
        xs={12}
        sm={12}
        style={{ padding: "1rem 3rem", marginTop: "1rem" }}
      >
        <Outlet />
      </GridRight>
    </Component>
  );
};

export default AdminLayout;
