import React from "react";
import Button from "@material-ui/core/Button";



const SubmitButton=({handle,navigation})=>{
  
    return(
        <Button  onClick={()=>{handle();
        navigation.next();}
        }
        
        
        
        type="submit" style={{marginTop:"50px"}} color="primary" variant="contained">Submit</Button>
    )
}

export default SubmitButton;