import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import TextFieldComponent from "./inputs/textField";
import RadioComponent from "./inputs/radio";
import NextButton from "./buttons/nextButton";

const Names=({formData,status,setForm,navigation,validateForm})=>{
 var currentDate=new Date();
    return(
        <Container maxWidth="sm"><form name="testForm" onsubmit={validateForm}>
        <h2>Names</h2>
        <TextFieldComponent handle={setForm} type="text" label="First Name" name="firstName" value={formData.firstName}/>
        
        <TextFieldComponent handle={setForm} type="text" label="Last Name" name="lastName" value={formData.lastName}/>
        <TextFieldComponent handle={setForm} type="text" label="Grand Father's Name"  name="grandFatherName" value={formData.grandFatherName}/>
        <TextFieldComponent handle={setForm} type="text" label="Father's Name"  name="fatherName" value={formData.fatherName}/>
        <TextFieldComponent handle={setForm} type="text" style={{marginButton:"30px"}} label="Mother's Name" name="motherName" value={formData.motherName}/>
    
        <TextFieldComponent handle={setForm} type="date" defaultdate={currentDate} style={{marginButton:"30px"}} label="Date of birth" name="birthDate" value={formData.birthDate}/>
        
       <RadioComponent setForm={setForm} />
     <NextButton status={status} navigation={navigation} />
       </form> </Container>
    )
}

export default Names;
