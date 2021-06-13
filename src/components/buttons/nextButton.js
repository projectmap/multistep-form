import React from "react";
import Button from "@material-ui/core/Button";



const NextButton=({navigation,status})=>{


    
    return(<Button  onClick={()=>navigation.next()} style={{marginTop:"50px"}} color="primary" variant="contained">Next</Button>)

}
       
    


export default NextButton;