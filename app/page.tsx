"use client";
import { useEffect, useState } from "react";
export default function Home(){
  const = useState({x:0,y:0});
  useEffect(()=>{
    const handleMove=(e:any)=>{
      const x=(e.clientX / window.innerWidth - 0.5)*12;
      const y=(e.clientY / window.innerHeight - 0.5)*12;
      setPos({x,y});
    };
    window.addEventListener("mousemove",handleMove);
    return()=>window.removeEventListener("mousemove",handleMove);
  },[]);
  return(
    <div style={{background:'#050507', color:'#e8e0c8', minHeight:'100vh', position:'relative', overflow:'hidden', display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center'}}>
      <style>{`@keyframes lightDrift{0%{transform:translate(-15%,-10%) scale(1);opacity:0.35}50%{transform:translate(15%,10%) scale(1.1);opacity:0.55}100%{transform:translate(-15%,-10%) scale(1);opacity:0.35}}@keyframes glowPulse{0%{box-shadow:0 0 20px rgba(184,138,58,0.15),0 0 60px rgba(60,100,200,0.1)}50%{box-shadow:0 0 35px rgba(184,138,58,0.28),0 0 90px rgba(60,100,200,0.18)}100%{box-shadow:0 0 20px rgba(184,138,58,0.15),0 0 60px rgba(60,100,200,0.1)}}@keyframes dust{0%{transform:translateY(0) translateX(0);opacity:0}10%{opacity:0.4}90%{opacity:0.4}100%{transform:translateY(-600px) translateX(20px);opacity:0}}.door:hover{border-color:#b88a3a!important;box-shadow:0 0 18px rgba(184,138,58,0.35);transform:translateY(-1px)}.door{transition:all 0.4s ease}`}</style>
      <div style={{position:'absolute', top:'-20%', left:'-20%', width:'140%', height:'140%', background:'radial-gradient(ellipse at 30% 40%, rgba(90,140,255,0.18) 0%, rgba(184,138,58,0.12) 25%, transparent 60%)', animation:'lightDrift 22s ease-in-out infinite', pointerEvents:'none', zIndex:0}}></div>
      <div style={{position:'absolute', top:0, left:0, width:'100%', height:'100%', pointerEvents:'none', zIndex:0}}>
        <div style={{position:'absolute', top:'30%', left:'15%', width:2, height:2, background:'#b88a3a', borderRadius:'50%', animation:'dust 18s linear infinite'}}></div>
        <div style={{position:'absolute', top:'60%', left:'70%', width:1.5, height:1.5, background:'#9a8a6e', borderRadius:'50%', animation:'dust 22s linear infinite', animationDelay:'4s'}}></div>
        <div style={{position:'absolute', top:'80%', left:'40%', width:2, height:2, background:'#6a7ab0', borderRadius:'50%', animation:'dust 26s linear infinite', animationDelay:'8s'}}></div>
      </div>
      <div style={{width:'100%', maxWidth:480, margin:'0 auto', padding:'12px 12px 0 12px', position:'relative', zIndex:1, transform:`translate(${pos.x*0.3}px, ${pos.y*0.3}px)`}}>
        <div style={{width:'100%', borderRadius:16, overflow:'hidden', border:'1px solid #2a2318', background:'#0a0806', animation:'glowPulse 6s ease-in-out infinite'}}>
          <img src="/763847743_1664822977910376_5098702148838621819_n-1.webp" alt="RunningWolf Keeper" style={{width:'100%', height:'auto', display:'block', objectFit:'cover', transform:`translate(${pos.x*0.6}px, ${pos.y*0.6}px) scale(1.03)`, transition:'transform 0.8s ease-out'}} />
        </div>
        <p style={{fontSize:11, letterSpacing:4, color:'#7a6a4e', marginTop:16}}>RUNNINGWOLF — KEEPER OF THE CHRONICLE</p>
        <p style={{fontSize:10, letterSpacing:1, color:'#5a4a32', marginTop:4, fontStyle:'italic'}}>Guide • Witness • Storyteller • Keeper of Pages</p>
        <p style={{fontSize:10, color:'#6a5a42', marginTop:10, maxWidth:320, marginLeft:'auto', marginRight:'auto', lineHeight:1.4}}>Not the hero above the story. The power comes from the King, not the warrior.</p>
      </div>
      <div style={{width:'100%', maxWidth:360, padding:'0 24px', marginTop:28, display:'flex', flexDirection:'column', alignItems:'center', position:'relative', zIndex:1, transform:`translate(${pos.x*0.15}px, ${pos.y*0.15}px)`}}>
        <h1 style={{fontSize:40, fontWeight:900, letterSpacing:2, lineHeight:1}}>STORMBREAKERS</h1>
        <p style={{fontSize:13, letterSpacing:6, color:'#b88a3a', marginTop:8, fontWeight:700}}>THE OPEN CHRONICLE</p>
        <div style={{marginTop:20, borderLeft:'2px solid #2a2318', paddingLeft:12, textAlign:'left', width:'100%'}}>
          <p style={{fontSize:13, lineHeight:1.5}}>Viking is the binding. Scripture is the pages. The King is the center.</p>
          <p style={{fontSize:11, color:'#b88a3a', marginTop:8, fontStyle:'italic'}}>The Word guides the blade.</p>
        </div>
        <div style={{marginTop:22, display:'grid', gap:10, width:'100%'}}>
          <a href="/hall" className="door" style={{padding:'14px', background:'#141210', border:'1px solid #2a2318', borderRadius:12, color:'#e8e0c8', textDecoration:'none'}}>Hall of Relics — 3 Revealed</a>
          <a href="/word" className="door" style={{padding:'14px', background:'#141210', border:'1px solid #2a2318', borderRadius:12, color:'#e8e0c8', textDecoration:'none'}}>The Word — Scripture Live</a>
          <a href="/chronicle" className="door" style={{padding:'14px', background:'#141210', border:'1px solid #2a2318', borderRadius:12, color:'#e8e0c8', textDecoration:'none'}}>Chapter I — The Keepers Oath</a>
          <a href="/library" className="door" style={{padding:'14px', background:'#141210', border:'1px solid #2a2318', borderRadius:12, color:'#e8e0c8', textDecoration:'none'}}>The Library — Expanding</a>
        </div>
        <p style={{fontSize:9, marginTop:22, color:'#6a5a42', letterSpacing:3}}>THE KING → THE WORD → THE CHRONICLE → THE KEEPER → THE RELICS</p>
      </div>
    </div>
  )
}[pos][setPos]
