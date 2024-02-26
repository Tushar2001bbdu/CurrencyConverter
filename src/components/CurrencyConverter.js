import React,{useState} from 'react'

export default function CurrencyConverter() {
function convert1(){

changedollar(rupees*0.012)
changeausdollar(rupees*0.018)
changecana(rupees*0.016)    
}
function convert2(){
changerupee(dollar*82.18)
changeausdollar(dollar*1.53)    
changecana(dollar*1.35)
}
function convert3(){
 changerupee(ausdollar*54.16)
 changedollar(ausdollar*0.65)
 changecana(ausdollar*0.88)   
}
function convert4(){
    changerupee(cana*61.30)
    changedollar(cana*0.74)
    changeausdollar(cana*1.13)
}
const[rupees,changerupee]=useState(0);
const[dollar,changedollar]=useState(0);
const[ausdollar,changeausdollar]=useState(0);
const[cana,changecana]=useState(0);
  return (
    <div classNameName='container bg-dark text-light p-3 w-100 align-center'>
     <htmlForm>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="htmlForm-label">Currency in Rupees</label>
    <input type="email" className="htmlForm-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event)=>{changerupee(event.target.value);convert1();}} value={rupees}/>
    
  </div> 
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="htmlForm-label">Currency in American Dollars</label>
    <input type="email" className="htmlForm-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={(event)=>{changedollar(event.target.value);convert2();}}value={dollar}/>
    
  </div> 
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="htmlForm-label">Currency in Australian Dollars</label>
    <input type="email" className="htmlForm-control" id="exampleInputEmail1" aria-describedby="emailHelp"onChange={(event)=>{changeausdollar(event.target.value);convert3();}} value={ausdollar}/>
    
  </div> 
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="htmlForm-label">Canadian Currency</label>
    <input type="email" className="htmlForm-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event)=>{changecana(event.target.value);convert4();}} value={cana}/>
    
  </div> 
  </htmlForm>
    </div>
   
  )
}
