import React, { useEffect, useState } from 'react'
import { useAuth } from '../hooks/Auth';
import { Button, styled } from '@mui/material'
import { toast } from "react-toastify";

const cardStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "1rem",
  height:"75vh",
  overflow: "scroll",
  scrollbarWidth: "none"
};
const ButtonStyle = styled(Button)({
  textTransform: "none",
  color:"black",
  // backgroundColor:"blue",
  borderRadius:"2px",
  "&:hover": {
      backgroundColor: "gray",
     
  },
});
const AdminContacts = () => {
  const { AuthorizationToken } = useAuth();
  const [contactData, setContactData]= useState([])
  const fetchContact = async () => {
    try {
      const response = await fetch(`http://localhost:5000/admin/users/contact`, {
        method: "GET",
        headers: {
          Authorization: AuthorizationToken,
        },
      });
  
      if (response.ok) {
        const data = await response.json(); // Properly invoking json() to get the data
        console.log("contacts data is", data);
        setContactData(data)
      } else {
        console.log("Error fetching contacts. Status:", response.status);
      }
    } catch (error) {
      console.log("the error in getting the contact is ", error.message);
    }
  };
  
  useEffect(() => {
    fetchContact();
  }, []);
  const deleteContactByid = async(id)=>{
    try {
      const response= await fetch(`http://localhost:5000/admin/contact/delete/${id}`,{
        method:"DELETE",
        headers:{
          Authorization: AuthorizationToken
        }
      })
      if(response.ok){
        console.log("The message deleted sucessfully")
        toast.success("Message Deleted Sucessfully")
        fetchContact()

      }
      else{
        toast.error("Something Went Wrong")
      }
      
    } catch (error) {
      console.log("The Error in deleting the contact is ", error.message)
    }
  }
  return (
<div className='cardStyle' style={cardStyle} >
      {contactData.map((ele) => (
        <div key={ele.id} className="card" style={{ width: '18rem', marginBottom: '10px', display:"flex", flexDirection:"row"}}>
          <div className="card-body">
            <h5 className="card-title">{ele.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
            <p>{ele.message}</p>
           <ButtonStyle variant='outlined' onClick={()=>deleteContactByid(ele._id)}>Delete</ButtonStyle>
          </div>
        </div>
      ))}
    </div>

  )
}

export default AdminContacts