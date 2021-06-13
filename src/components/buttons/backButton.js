import React from "react";
import Button from "@material-ui/core/Button";



const BackButton=({navigation})=>{
    return(
        <Button onClick={()=>navigation.previous()} style={{marginTop:"50px", marginRight:"80px"}} color="secondary" variant="contained">Back</Button>
    )
}

export default BackButton;