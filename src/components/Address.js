
import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import NextButton from "./buttons/nextButton";
import BackButton from "./buttons/backButton";
import MenuItem from '@material-ui/core/MenuItem';
 

const Address=({setForm,navigation,formData})=>{
  

    return(
    <Container maxWidth="sm"><form name="testForm">
        <h2>Address</h2>
        <label style={{float:"left",color:"#abb0ac"}} for="state">Choose your state:</label>
<Select onChange={setForm} fullWidth style={{float:"left",marginLeft:"20px",height:"30px",width:"100px"}} name="state" value={formData.state} id="state">
  <MenuItem value="state1">state 1</MenuItem>
  <MenuItem value="state2">state 2</MenuItem>
  <MenuItem value="state3">state 3</MenuItem>
  <MenuItem value="state4">state 4</MenuItem>
  <MenuItem value="state5">state 5</MenuItem>
</Select>




<div >
<label style={{color:"#abb0ac"}} for="city">Choose your city:</label>
<Select onChange={setForm} style={{marginLeft:"20px",height:"30px",width:"100px"}} value={formData.city} name="city" id="city">
  <MenuItem value="Kathmandu">Kathmandu</MenuItem>
  <MenuItem value="Birendranagar">Birendrenagar</MenuItem>
  <MenuItem value="Narayanghat">Narayanghat</MenuItem>
  <MenuItem value="Pokhara">Pokhara</MenuItem>
  <MenuItem value="Biratnagar">Biratnagar</MenuItem>
</Select>
</div>
      
        <TextField label="Tole" style={{marginButton:"30px"}} fullWidth value={formData.tole} onChange={setForm} margin="normal" autoComplete="off" name="tole"/> 
        <label style={{float:"left",color:"#abb0ac"}} for="state">Choose your ward No:</label>
<Select onChange={setForm} fullWidth style={{float:"left",marginLeft:"20px",marginButton:"50px" ,display:"block",height:"30px",width:"100px"}} name="ward" id="ward" value={formData.ward}>
  <MenuItem value="1"> 1</MenuItem>
  <MenuItem value="2"> 2</MenuItem>
  <MenuItem value="3"> 3</MenuItem>
  <MenuItem value="4"> 4</MenuItem>
  <MenuItem value="5"> 5</MenuItem>
  <MenuItem value="6"> 6</MenuItem>
  <MenuItem value="7"> 7</MenuItem>
  <MenuItem value="8"> 8</MenuItem>
</Select>
<div>
<BackButton navigation={navigation}/>
     <NextButton navigation={navigation}/></div>

   </form> </Container>
    )
}

export default Address;
