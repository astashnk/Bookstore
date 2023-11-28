const Footer = () => {
   return (
      <div className="color" style={{fontFamily:"'Roboto Condensed', sans-serif", boxShadow:"0px 0px 8px 0px rgba(0, 0, 0, 0.2)", padding:"12px 10px", height:"40px", boxSizing:"border-box"}}>
         <div style={{display:"flex", justifyContent:"space-between", maxWidth:"1020px", margin:"0 auto", fontSize:"14px", color:"black"}}>
            <div>©2022 The Bookshelf</div>
            <div>All rights reserved</div>
         </div>
      </div>
   )
}

export {Footer}