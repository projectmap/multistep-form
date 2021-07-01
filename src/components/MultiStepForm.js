import React, { useState } from "react";
import { useForm,useStep}  from "react-hooks-helper";
import Names from "./Names";
import Address from "./Address";
import Review from "./Review";
import Contact from "./Contact";
import Success from "./success";


const defaultData={
    firstName:"",
    lastName:"",
    fatherName:"",
    grandFatherName:"",
    motherName:"",
    nationality:"",
    birthDate:"",
    gender:"",
    gendera:"male",
    genderb:"female",
    genderc:"other",
    city:"",
    ward:"",
    state:"",
    tole:"",
    phone:"",
    mobile:"",
    email:"",
    age:"",
    education:"",
    signatureURL:""
}


const steps=[
    {id:"names"},
    {id:"address"},
    {id:"contact"},
    {id:"review"},
    {id:"submit"},
]


const MultiStepForm=()=>{
    const [formData,setForm]=useForm(defaultData);
    const [checkValid,setValid]=useState(0);
    const [status,setEnable]=useState("true");
    const {step,navigation}=useStep({steps,initialStep:0});
   let props={formData,setForm,navigation,validateForm,status};
   const fd = new window.FormData()
  console.log("formdata",fd);
   function validateForm() {
   // var x = document.forms["testForm"]["firstName"].value;

    if (formData.firstName== "") {
      alert("Name must be filled out");
    //   setValid(checkValid+1)
    //   setEnable("true")
      return false;
    }
   
    }
  

    switch (step.id){
        case"names":
        return <Names {...props}/>
        case "address":
            return <Address {...props}/>
        case "contact":
            return <Contact {...props}/>
            case "review":
                return <Review {...props}/>
                case "submit":
                    return <Success {...props}/>
   }
    return(
 
   <h1>this is form</h1>
  

        
      

    
)}

export default MultiStepForm;