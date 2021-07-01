import React,{useRef} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import SignaturePad from "react-signature-canvas";
import TextFieldComponent from "./inputs/textField";
import NextButton from "./buttons/nextButton";
import BackButton from "./buttons/backButton";
//

const Contact=({formData,setForm,navigation})=>{
    let sig=useRef({})
    let canvas= document.getElementById('signature');
    let signature=new SignaturePad (canvas);
    const handleSig=()=>{
        sig.clear();
        console.log("dataUrl",sig.toDataURL());

        console.log("dataUrl",sig.toData());
    }
    let trimmedDataURL;
    const handleSigdraw=()=>{
       
        let s=localStorage.getItem('signature');
        
       //  trimmedDataURL=sig.getTrimmedCanvas();
        sig.fromDataURL(s);
        
    }

    const saveSig=()=>{
        let s=sig.toDataURL("img/png");
        console.log("signature",s);
       

       
        localStorage.setItem('signature', s);
        fetch(s)
.then(res => res.blob())
.then(blob => {console.log("blob",blob)
const fd = new window.FormData()
        fd.append('signature', blob, 'signature.png')
        console.log("signature",FormData);
        console.log("get formdata",fd.get("signature"));
})
        const canvas = sig.getCanvas()
        
    }
    return(<div>
        <Container maxWidth="sm"><form name="testForm">
        <h2>Contact</h2>
        <TextFieldComponent handle={setForm} label="Phone" type="number" name="phone" value={formData.phone} />
        <TextFieldComponent handle={setForm} label="Mobile" type="number" name="mobile" value={formData.mobile} />
        
        <TextFieldComponent handle={setForm} label="Email" type="email" name="email" value={formData.email} />
        <h5>Your Signature Here:-</h5><div style={{border:"solid black" ,width:"500px",heitht:"150px"}}>
        <SignaturePad id="signature"  backgroundColor="#d6d3c9"  canvasProps={{width: 500, height: 200, className: 'sigCanvas'}}   ref={(ref)=>sig=ref}/>

        <button onClick={()=>handleSig()}>clear</button>
        <button onClick={()=>handleSigdraw()}>draw</button>
        <button onClick={()=>saveSig()}>save and append</button>
        {/* <div>{
        trimmedDataURL
        ? <img 
          src={trimmedDataURL} />
        : "nothing"}</div> */}
        </div>
       
     <BackButton navigation={navigation}/>
     <NextButton navigation={navigation}/>
        </form></Container>
       
        </div>
    )
}

export default Contact;
