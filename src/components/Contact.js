import React,{useRef} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import SignaturePad from "react-signature-canvas";
import TextFieldComponent from "./inputs/textField";
import NextButton from "./buttons/nextButton";
import BackButton from "./buttons/backButton";


const Contact=({formData,setForm,navigation})=>{
    const sig=useRef({})
    return(<div>
        <Container maxWidth="sm"><form name="testForm">
        <h2>Contact</h2>
        <TextFieldComponent handle={setForm} label="Phone" type="number" name="phone" value={formData.phone} />
        <TextFieldComponent handle={setForm} label="Mobile" type="number" name="mobile" value={formData.mobile} />
        
        <TextFieldComponent handle={setForm} label="Email" type="email" name="email" value={formData.email} />
        <h5>Your Signature Here:-</h5><div style={{border:"solid black" ,width:"500px",heitht:"150px"}}>
        <SignaturePad backgroundColor="#d6d3c9"  canvasProps={{width: 500, height: 200, className: 'sigCanvas'}}   ref={sig}/>
        </div>
       
     <BackButton navigation={navigation}/>
     <NextButton navigation={navigation}/>
        </form></Container>
       
        </div>
    )
}

export default Contact;
