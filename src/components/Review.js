import React from "react";
import Container from "@material-ui/core/Container"
import SubmitButton from "./buttons/submit";
import BackButton from "./buttons/backButton";
import AccordionComponent from "./accordion/accordion";


const Review=({formData,navigation,status,validateForm})=>{
    
     return(
     <Container maxWidth="sm">
         <h2>Review</h2>
        <AccordionComponent summary="Names" details={formData}>
           <ul> <li  style={{listStyle:"none"}}><h4>First Name:{formData.firstName}</h4></li>
            <li  style={{listStyle:"none"}}><h4>Last Name:{formData.lastName}</h4></li>
            <li  style={{listStyle:"none"}}><h4>Grand Father's Name:{formData.grandFatherName}</h4></li>
            <li  style={{listStyle:"none"}}> <h4>Father's Name:{formData.fatherName}</h4></li>
            <li  style={{listStyle:"none"}}><h4>Mother's Name:{formData.motherName}</h4></li>
            <li  style={{listStyle:"none"}}><h4>Date of birth:{formData.birthDate}</h4></li>
            <li  style={{listStyle:"none"}}><h4>Gender:{formData.gender}</h4></li>
            </ul>
        </AccordionComponent>


        <AccordionComponent summary="Address" details={formData}>
           <ul> <li  style={{listStyle:"none"}}><h4>State:{formData.state}</h4></li>
            <li  style={{listStyle:"none"}}><h4>City:{formData.city}</h4></li>
            <li  style={{listStyle:"none"}}><h4>Tole:{formData.tole}</h4></li>
            <li  style={{listStyle:"none"}}> <h4>Ward:{formData.ward}</h4></li>
           
            </ul>
        </AccordionComponent>

        <AccordionComponent summary="Contact" details={formData}>
           <ul> <li  style={{listStyle:"none"}}><h4>Phone:{formData.phone}</h4></li>
            <li  style={{listStyle:"none"}}><h4>Mobile:{formData.mobile}</h4></li>
            <li  style={{listStyle:"none"}}><h4>Email:{formData.email}</h4></li>
           
           
            </ul>
        </AccordionComponent>
          
      <BackButton navigation={navigation}/>
     <SubmitButton navigation={navigation} handle={validateForm}/>
      </Container>
    )
  
   
}

export default Review;
