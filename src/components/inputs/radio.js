import React from "react";
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormLabel from "@material-ui/core/FormLabel";


const RaddioComponent=({setForm,formData})=>{
    return(
        <span>
        <FormLabel component="legend" style={{float:"left",marginButton:"50px"}}>Gender</FormLabel>
        <RadioGroup onChange={setForm} style={{marginTop:"30px"}} value={formData.gender} aria-label="gender"  name="gender" >
    <FormControlLabel value="female"   control={<Radio />} label="Female" />
    <FormControlLabel value="male"  control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
    <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
  </RadioGroup>
  </span>
    )
}

export default RaddioComponent;