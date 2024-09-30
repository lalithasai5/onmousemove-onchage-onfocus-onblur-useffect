import React, { useEffect } from 'react'
import { useRef } from 'react';

function TenthMarksheet() {

          let engInputRef = useRef();
          let telInputRef = useRef();
          let telSpanRef = useRef();
          let hinSpanRef = useRef();
          let engSpanRef = useRef();
          let matSpanRef = useRef();
          let sciSpanRef = useRef();
          let socSpanRef = useRef();
          let hinInputRef = useRef();
          let matInputRef = useRef();
          let sciInputRef = useRef();
          let socInputRef = useRef();
          let firstInputRef =useRef();
          let lastInputRef =useRef();
          let reslabRef =useRef();
          useEffect(()=>{
            
            alert("total");
            
          },[]);
          
  
  return (
    <div>
      <h1>Tenth Marks Sheet</h1>
      <form>
        <div>
          <label>First Nme</label>
          <input ref={firstInputRef}></input>
        </div>
        <div>
          <label>Last Nme</label>
          <input ref={lastInputRef}></input>
        </div>
        <div>
            <label>Telugu</label>
            <input type="number" ref={telInputRef} onFocus={()=>{
              telInputRef.current.style.backgroundColor ="Orange" 
            }} onChange={()=>{
              console.log("tel onchange");
              telInputRef.current.style.backgroundColor ="Yellow"
          let telugu = Number(telInputRef.current.value);
              telSpanRef.current.innerHTML =  telugu >=35 ? "Pass":"Fail" ;
              telSpanRef.current.style.backgroundColor =  telugu >=35 ? "Green":"Red" ;
              
            }} onBlur={()=>{
              console.log("tel onblur");
              telInputRef.current.style.backgroundColor =""
            }}></input>
            <span ref={telSpanRef}></span>
        </div>
        <div>
            <label>Hindi</label>
            <input type="number" ref={hinInputRef} onFocus={()=>{
              console.log("hin onfocus");
              hinInputRef.current.style.backgroundColor ="Orange" 
            }} onChange={()=>{
              console.log("hin onchange");
              let hindi = Number(hinInputRef.current.value);
              hinSpanRef.current.innerHTML =  hindi >=35 ? "😄":"😔" ;
              hinSpanRef.current.style.backgroundColor =  hindi >=35 ? "Green":"Red" ;
              hinInputRef.current.style.backgroundColor ="Yellow"
              
              
            }} onBlur={()=>{
              console.log("hin onblur");
              hinInputRef.current.style.backgroundColor =""
            }}></input>
            <span ref={hinSpanRef}></span>

        </div>
        <div>
            <label>English</label>
            <input type="number" ref={engInputRef} onFocus={()=>{
              console.log("eng onfocus");
              engInputRef.current.style.backgroundColor ="Orange" 
            }} onChange={()=>{
              console.log("eng onchange");
              let english = Number(engInputRef.current.value);
              engSpanRef.current.innerHTML =  english >=35 ? "Pass":"Fail" ;
              engSpanRef.current.style.backgroundColor =  english >=35 ? "Green":"Red" ;
              engInputRef.current.style.backgroundColor ="Yellow"
              
              
            }} onBlur={()=>{
              console.log("eng onblur");
              engInputRef.current.style.backgroundColor =""
            }}></input>
            <span ref={engSpanRef}></span>

        </div>
        <div>
            <label>Maths</label>
            <input type="number" ref={matInputRef} onFocus={()=>{
              console.log("mat onfocus");
              matInputRef.current.style.backgroundColor ="Orange" 
            }} onChange={()=>{
              console.log("mat onchange");
              let maths = Number(matInputRef.current.value);
              matSpanRef.current.innerHTML =  maths >=35 ? "😄":"😔" ;
              matSpanRef.current.style.backgroundColor =  maths >=35 ? "Green":"Red" ;
              matInputRef.current.style.backgroundColor ="Yellow"
              
            }} onBlur={()=>{
              console.log("mat onblur");
              matInputRef.current.style.backgroundColor ="" 
            }}></input>
            <span ref={matSpanRef}></span>

        </div>
        <div>
            <label>Science</label>
            <input type="number" ref={sciInputRef}onFocus={()=>{
              console.log("sci onfocus");
             sciInputRef.current.style.backgroundColor ="Orange" 
            }} onChange={()=>{
              console.log("sci onchange");
              let science = Number(sciInputRef.current.value);
              sciSpanRef.current.innerHTML =  science >=35 ? "Pass":"Fail" ;
              sciSpanRef.current.style.backgroundColor =  science >=35 ? "Green":"Red" ;
              sciInputRef.current.style.backgroundColor ="Yellow"
              
            }} onBlur={()=>{
              console.log("sci onblur");
              sciInputRef.current.style.backgroundColor ="" 
            }} ></input>
            <span ref={sciSpanRef}></span>

        </div>
        <div>
            <label>Social</label>
            <input type="number" ref={socInputRef} onFocus={()=>{
              console.log("soc onfocus");
              socInputRef.current.style.backgroundColor ="Orange" 
            }} onChange={()=>{
              console.log("soc onchange");
              let social = Number(socInputRef.current.value);
              socSpanRef.current.innerHTML =  social >=35 ? "😄":"😔" ;
              socSpanRef.current.style.backgroundColor =  social >=35 ? "Green":"Red" ;
              socInputRef.current.style.backgroundColor ="Yellow"
              
            }} onBlur={()=>{
              console.log("soc onblur");
              socInputRef.current.style.backgroundColor =""
            }}></input>
            <span ref={socSpanRef}></span>

        </div>
        <button type="button" onMouseMove={()=>{
          alert("welcome")
          let FirstName =firstInputRef.current.value;
          let LastName =lastInputRef.current.value;
          let english = Number(engInputRef.current.value);
          let telugu = Number(telInputRef.current.value);
          let hindi = Number(hinInputRef.current.value);
          let maths =Number(matInputRef.current.value);
          let science = Number(sciInputRef.current.value);
          let social = Number(socInputRef.current.value);
          let totalmarks = english+telugu+hindi+maths+science+social;
          reslabRef.current.innerHTML= `total marks of ${FirstName} ${LastName} are ${totalmarks}`
          
        }}> total marks</button>
        <button type='button' onClick={()=>{
          let a = 20;
          console.log(a);
        }}> scope of variables</button>
        <br></br>
        <label ref={reslabRef}></label>
      </form>
    </div>
  )
}

export default TenthMarksheet
