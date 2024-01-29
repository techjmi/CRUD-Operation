
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/Auth";
import { Button, styled } from "@mui/material";
import { toast } from "react-toastify";
const TableContainer = {
  maxHeight: "75vh",
  overflow: "auto",
  scrollbarWidth: "none",
};
const StyleTable = {
  borderCollapse: "collapse",
  width: "100%",
};

const thStyle = {
  border: "1px solid black",
  padding: "10px",
  textAlign: "center",
};

const ButtonStyle = styled(Button)({
  textTransform: "none",
  color: "black",
  // backgroundColor: "green",
  borderRadius: "2px",
  "&:hover": {
    backgroundColor: "gray",
  },
});

const Users = () => {
  const { AuthorizationToken } = useAuth();
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      const response = await fetch(`http://localhost:5000/admin/users`, {
        method: "GET",
        headers: {
          Authorization: AuthorizationToken,
        },
      });
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.log("The error in fetching the data is ", error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: AuthorizationToken,
          },
        }
      );

      if (response.ok) {
        console.log(`User with ID ${id} has been successfully deleted.`);
        toast.success("Record Deleted Successfully");
        fetchUser();
      } else {
        console.log(
          `Error deleting user with ID ${id}. Status: ${response.status}`
        );
        toast.error(
          "Something Went Wrong While Deleting The Record Please Try Again!"
        );
      }
    } catch (error) {
      console.error("Error deleting user:", error.message);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div style={TableContainer} className="tableContainer">
    <table style={StyleTable}>
      <thead>
        <tr>
          <th style={thStyle}>Username</th>
          <th style={thStyle}>Email</th>
          <th style={thStyle}>Phone</th>
          <th style={thStyle}>Edit</th>
          <th style={thStyle}>Delete</th>
        </tr>
      </thead>
      <tbody>
        {user.map((user) => (
          <tr key={user.id}>
            <td style={thStyle}>{user.username}</td>
            <td style={thStyle}>{user.email}</td>
            <td style={thStyle}>{user.phone}</td>
            <td style={thStyle}>
              <Link to={`/admin/users/${user._id}`} style={{ textDecoration: "none" }}>
                Edit User
              </Link>
            </td>
            <td style={thStyle}>
              <ButtonStyle variant="outlined" onClick={() => handleDelete(user._id)}>
                Delete
              </ButtonStyle>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Users;
