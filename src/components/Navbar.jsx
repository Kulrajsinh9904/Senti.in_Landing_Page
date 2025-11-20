import React from "react";

export default function Navbar(){
  return (
    <header className="nav container">
      <div style={{display:"flex",alignItems:"center",gap:12}}>
        <div style={{
          width:44,height:44,borderRadius:10,background:"linear-gradient(135deg,#6a4fff,#2d8cff)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700
        }}>S</div>
        <div style={{fontWeight:700,fontSize:18}}>Senti</div>
      </div>

      <nav style={{display:"flex",gap:18,alignItems:"center"}}>
        <a href="#how" style={{color:"var(--muted)",textDecoration:"none"}}>How it works</a>
        <a href="#features" style={{color:"var(--muted)",textDecoration:"none"}}>Features</a>
        <a href="#security" style={{color:"var(--muted)",textDecoration:"none"}}>Security</a>
        <a href="#security" style={{color:"var(--muted)",textDecoration:"none"}}>Roadmap</a>
        <a href="#whitepaper" style={{color:"var(--muted)",textDecoration:"none"}}>Whitepaper</a>
        <button className="btn">Join Waitlist</button>
      </nav>
    </header>
  );
}
