import './App.css'
import { useState } from 'react'
export default function App() {
  const [checked1,setChecked1]=useState(false)
  const [checked2,setChecked2]=useState(false)
  const [checked3,setChecked3]=useState(false)
  const [color1,setColor1]=useState("white")
  const [color2,setColor2]=useState("white")
  const [color3,setColor3]=useState("white")
  const [bordercolor1,setBordercolor1]=useState("darkgrey")
  const [bordercolor2,setBordercolor2]=useState("darkgrey")
  const [bordercolor3,setBordercolor3]=useState("darkgrey")
  const [status1,setStatus1]=useState(false)
  const [status2,setStatus2]=useState(false)
  const [status3,setStatus3]=useState(false)
  function handleClick1(){
    setChecked1(true)
    setChecked2(false)
    setChecked3(false)
    setStatus1(true)
    setStatus2(false)
    setStatus3(false)
    setColor1("#d7fff1")
    setColor2("white")
    setColor3("white")
    setBordercolor1("teal")
    setBordercolor2("darkgrey")
    setBordercolor3("darkgrey")
  }
  function handleClick2(){
    setChecked1(false)
    setChecked2(true)
    setChecked3(false)
    setStatus1(false)
    setStatus2(true)
    setStatus3(false)
    setColor2("#d7fff1")
    setColor1("white")
    setColor3("white")
    setBordercolor2("teal")
    setBordercolor1("darkgrey")
    setBordercolor3("darkgrey")
  }
  function handleClick3(){
    setChecked1(false)
    setChecked2(false)
    setChecked3(true)
    setStatus1(false)
    setStatus2(false)
    setStatus3(true)
    setColor3("#d7fff1")
    setColor1("white")
    setColor2("white")
    setBordercolor3("teal")
    setBordercolor1("darkgrey")
    setBordercolor2("darkgrey")
  }
  return (
    <>
    <div className="container">
      <h2 class="hr-lines">Bundle & Save</h2>
      <div onClick={handleClick1} className='box' style={{backgroundColor:color1,border:`2px solid ${bordercolor1}`}}>
        <div>
          <div className="flexbox">
            <div className="innerbox">
              <input type="radio" checked={checked1} name="one"></input>
              <p>1 Pair<br /> DKK 195.00</p>
            </div>
            <p>50% OFF</p>
          </div>
          {status1?<div className="flex">
            <div style={{marginTop:"1rem",marginLeft:"1rem"}}>
              <p style={{padding:"0",marginLeft:"1.2rem"}}>Size</p>
              <div><span>#1 </span><select style={{width:"50px"}}>
                <option>S</option>
                <option>M</option>
                <option>L</option>
              </select></div>
            </div>
             <div style={{marginTop:"1rem",marginLeft:"1rem"}}>
              <p>Colour</p>
              <div><select>
                <option>Red</option>
                <option>White</option>
                <option>Black</option>
              </select></div>
            </div>
          </div>:""}
        </div>
      </div>
      <div onClick={handleClick2} className='box' style={{backgroundColor:color2,border:`2px solid ${bordercolor2}`}}>
        <div>
          <div className="flexbox">
            <div className="innerbox">
              <input type="radio"  checked={checked2} name="one"></input>
              <p>2 Pair<br /> DKK 345.00</p>
            </div>
            <p style={{ textAlign: "right" }}><span style={{color:"teal"}}>Most Popular</span><br />40% OFF</p>
          </div>
          {status2?<div className="flex">
            <div style={{marginTop:"1rem",marginLeft:"1rem"}}>
              <p style={{padding:"0",marginLeft:"1.2rem"}}>Size</p>
              <div><span>#1 </span><select style={{width:"50px"}}>
                <option>S</option>
                <option>M</option>
                <option>L</option>
              </select></div>
               <div style={{marginTop:"5px"}}><span>#2 </span><select style={{width:"50px"}}>
                <option>S</option>
                <option>M</option>
                <option>L</option>
              </select></div>
            </div>
             <div style={{marginTop:"1rem",marginLeft:"1rem"}}>
              <p>Colour</p>
              <div><select>
                <option>Red</option>
                <option>White</option>
                <option>Black</option>
              </select></div>
               <div style={{marginTop:"5px"}}><select>
                <option>Red</option>
                <option>White</option>
                <option>Black</option>
              </select></div>
            </div>
          </div>:""}
        </div>
      </div>
      <div onClick={handleClick3} className='box' style={{backgroundColor:color3,border:`2px solid ${bordercolor3}`}}>
        <div>
          <div className="flexbox">
            <div className="innerbox">
              <input type="radio"  checked={checked3} name="one"></input>
              <p>3 Pair<br /> DKK 528.00</p>
            </div>
            <p>60% OFF</p>
          </div>
          {status3?<div className="flex">
            <div style={{marginTop:"1rem",marginLeft:"1rem"}}>
              <p style={{padding:"0",marginLeft:"1.2rem"}}>Size</p>
              <div><span>#1 </span><select style={{width:"50px"}}>
                <option>S</option>
                <option>M</option>
                <option>L</option>
              </select></div>
               <div style={{marginTop:"5px"}}><span>#2 </span><select style={{width:"50px"}}>
                <option>S</option>
                <option>M</option>
                <option>L</option>
              </select></div>
              <div style={{marginTop:"5px"}}><span>#3 </span><select style={{width:"50px"}}>
                <option>S</option>
                <option>M</option>
                <option>L</option>
              </select></div>
            </div>
             <div style={{marginTop:"1rem",marginLeft:"1rem"}}>
              <p>Colour</p>
              <div><select>
                <option>Red</option>
                <option>White</option>
                <option>Black</option>
              </select></div>
               <div style={{marginTop:"5px"}}><select>
                <option>Red</option>
                <option>White</option>
                <option>Black</option>
              </select></div>
               <div style={{marginTop:"5px"}}><select>
                <option>Red</option>
                <option>White</option>
                <option>Black</option>
              </select></div>
            </div>
          </div>:""}
        </div>
      </div>
      <div className="bottomflex">
        <p style={{color:"#097969"}}>Free 2 Day Shipping</p>
        <p>{`Total: DKK ${checked1?"195.00":checked2?"345.00":"528.00"}`}</p>
      </div>
      <button className="btn1">&#x2B; Add to Cart</button>
    </div>
    </>
  )
}
