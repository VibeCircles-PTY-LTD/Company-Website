"use client";

import { C } from "@/components/shared/vibeTheme";
import { Orb } from "@/components/shared/ui";

export default function NotFoundPage({setPage}){
  return(
    <div style={{background:C.bg,color:C.text,minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",overflow:"hidden",padding:"120px 24px"}}>
      <Orb top="10%" left="-5%" size={500} opacity={0.1}/><Orb bottom="10%" right="-5%" size={400} color={C.pink} opacity={0.08} delay="2s"/>
      <div style={{position:"relative",zIndex:2,textAlign:"center",maxWidth:"600px"}}>
        <div style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(80px,15vw,160px)",lineHeight:1,WebkitTextStroke:"2px rgba(255,107,0,0.25)",color:"rgba(255,107,0,0.08)",marginBottom:"-20px"}}>404</div>
        <h1 style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(32px,5vw,56px)",color:C.text,lineHeight:1,marginBottom:"18px"}}>This vibe<br/><span style={{color:C.orange}}>doesn't exist.</span></h1>
        <p style={{fontFamily:"'DM Sans',sans-serif",fontSize:"16px",color:C.dim,lineHeight:1.7,marginBottom:"36px"}}>The page you're looking for has either moved or never existed.</p>
        <div style={{display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap"}}>
          <button onClick={()=>{setPage("home");window.scrollTo(0,0);}} style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"14px",letterSpacing:"3px",padding:"13px 32px",background:C.orange,color:C.textOnAccent,border:"none",borderRadius:"2px",cursor:"pointer",transition:"transform .2s,box-shadow .2s"}} onMouseEnter={e=>{e.target.style.transform="translateY(-2px)";e.target.style.boxShadow=`0 12px 32px ${C.orange}40`;}} onMouseLeave={e=>{e.target.style.transform="";e.target.style.boxShadow="";}}>Back to Home</button>
          <button onClick={()=>{setPage("Contact");window.scrollTo(0,0);}} style={{fontFamily:"'Bebas Neue',sans-serif",fontSize:"14px",letterSpacing:"3px",padding:"13px 32px",background:"transparent",color:C.text,border:`1px solid ${C.border}`,borderRadius:"2px",cursor:"pointer",transition:"all .2s"}} onMouseEnter={e=>{e.currentTarget.style.borderColor=C.orange;e.currentTarget.style.color=C.orange;}} onMouseLeave={e=>{e.currentTarget.style.borderColor=C.border;e.currentTarget.style.color=C.text;}}>Report an Issue</button>
        </div>
      </div>
    </div>
  );
}
