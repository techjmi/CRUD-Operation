import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../hooks/Auth';
import { Box, Button, Container, Divider, Grid, TextField, Typography , styled} from '@mui/material'
import { toast } from 'react-toastify';
const AdminUpdate = () => {
  const navigate = useNavigate();
  const { AuthorizationToken } = useAuth();
  const params = useParams();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/admin/users/byid/${params.id}`, {
          method: 'GET',
          headers: {
            Authorization: AuthorizationToken,
          },
        });

        if (response.ok) {
          const userData = await response.json();
          console.log("the single user data is", userData)
          // Set the retrieved user data in the form
          setFormData({
            username: userData.username,
            email: userData.email,
            phone: userData.phone,
          });
        } else {
          console.log(`Error fetching user with ID ${params.id}. Status: ${response.status}`);
        }
      } catch (error) {
        console.error('Error fetching user:', error.message);
   
      }
    };
    fetchUserData();
  }, [params.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
 
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(`http://localhost:5000/admin/users/update/${params.id}`, {
        method: 'PATCH',
        headers: {
          // 'Content-Type': 'application/json',
          "Content-Type": "application/json",
          Authorization: AuthorizationToken,
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const updatedData = await response.json();
        console.log('The updated data is:', updatedData);
        toast.success('Data Update Sucessfully')
        setFormData({
          username: updatedData.username,
          phone: updatedData.phone,
          email: updatedData.email,
        });
  
        console.log(`User with ID ${params.id} has been successfully updated.`);
        setTimeout(() => {
          setFormData({
            username: '',
            phone: '',
            email: '',
          });
        }, 0);
  
        navigate('/admin/users');
      } else {
        console.log(`Error updating user with ID ${params.id}. Status: ${response.status}`);
        toast.error('Something went wrong while Updating The Data Please Try Again!')
      }
    } catch (error) {
      console.error('Error updating user:', error.message);
    }
  };
  
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Update User Field
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Phone No"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
};
export default AdminUpdate;
