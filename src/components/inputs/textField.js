import React from "react";
import TextField from "@material-ui/core/TextField";
import { useImperativeHandle } from "react";



const TextFieldComponent=({label,type,handle,name,value,defaultdate})=>{
    var currentDate=new Date();
    return(
        <TextField onChange={handle} required type={type} label={label} name={name} value={value} margin="normal" fullWidth autoComplete="off"/>
    )
};

export default TextFieldComponent;