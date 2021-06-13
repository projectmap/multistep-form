import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";



const  AccordionComponent=({summary,details,children})=>{
    let {firstName,lastName,fatherName,motherName,grandFatherName}=details;
    return(
        <Accordion>
            <AccordionSummary><h2>{summary}</h2></AccordionSummary>
            <AccordionDetails>
          {children}

            </AccordionDetails>
        </Accordion>
    )
}

export default AccordionComponent;