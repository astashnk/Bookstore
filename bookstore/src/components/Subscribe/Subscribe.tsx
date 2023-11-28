import { useState } from "react"

const Subscribe = () => {
   const [search, setSub] = useState('')
   const handleClick = () => {
      setSub("")
   }
   return(
      <div style={{backgroundColor:"rgb(217, 203, 235)", marginBottom:"40px", boxShadow:"0px 0px 29px -14px rgba(0, 0, 0, 0.4)", padding:"60px 40px"}}>
         <div style={{fontFamily:"'Oswald', sans-serif", fontWeight:"500", fontSize:"24px", marginBottom:"6px", color:"black"}}>SUBSCRIBE TO NEWSLETTER</div>
         <div style={{fontFamily:"'Roboto Condensed', sans-serif", color:"#7d7d7d", marginBottom:"18px"}}>Be the first to know about new IT books, upcoming releases, exclusive offers and more.</div>
         <div style={{display:"flex", alignItems:"center"}}>
            <input value={search} onChange={(e)=> setSub(e.target.value)} style={{boxSizing:"border-box", height:"34px", width:"60%", backgroundColor:"#F3F3F3", border: "2px solid #7d7d7d", borderRadius:"5px"}}></input>
            <button onClick={handleClick} style={{boxSizing:"border-box", height:"34px", fontFamily:"'Oswald', sans-serif", fontWeight:"500", fontSize:"16px", backgroundColor:"black", border: "2px solid #7d7d7d", borderRadius:"5px", color:"white"}}>SUBSCRIBE</button>
         </div>
      </div>
   )
}

export {Subscribe}

