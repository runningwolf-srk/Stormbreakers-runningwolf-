"use client";
import { useEffect, useState } from "react";
export default function Home(){
  const p = useState({x:0,y:0});
  const pos = p.at(0) as any;
  const setPos = p.at(1) as any;
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

      <div style={{width:'100%', maxWidth:380, padding:'0 24px', marginTop:28, display:'flex', flexDirection:'column', alignItems:'center', position:'relative', zIndex:1}}>
        <h1 style={{fontSize:40, fontWeight:900, letterSpacing:2, lineHeight:1}}>STORMBREAKERS</h1>
        <p style={{fontSize:13, letterSpacing:6, color:'#b88a3a', marginTop:8, fontWeight:700}}>THE OPEN CHRONICLE</p>

        <div style={{marginTop:22, background:'rgba(20,18,16,0.6)', border:'1px solid #1e1a14', borderRadius:12, padding:'14px 16px', textAlign:'left', width:'100%'}}>
          <p style={{fontSize:12.5, lineHeight:1.6, color:'#c8b896'}}>Stormbreakers is a cinematic Christian music chronicle.</p>
          <p style={{fontSize:12.5, lineHeight:1.6, color:'#a89a82', marginTop:8}}>The songs are artifacts. Scripture is their foundation. The Chronicle tells the stories behind them. RunningWolf is the Keeper—not the King.</p>
          <p style={{fontSize:11, letterSpacing:2, color:'#b88a3a', marginTop:10, fontWeight:700}}>The King is at the center.</p>
        </div>

        <p style={{fontSize:9, marginTop:18, color:'#6a5a42', letterSpacing:3}}>THE KING → THE WORD → THE CHRONICLE → THE KEEPER → THE RELICS</p>

        <div style={{marginTop:20, display:'grid', gap:12, width:'100%', textAlign:'left'}}>
          <a href="/hall" className="door" style={{padding:'14px 16px', background:'#141210', border:'1px solid #2a2318', borderRadius:12, color:'#e8e0c8', textDecoration:'none', display:'block'}}>
            <div style={{fontSize:12, letterSpacing:2, fontWeight:800}}>⚔️ HALL OF RELICS</div>
            <div style={{fontSize:11, color:'#8a7a62', marginTop:4}}>Discover the music and the artifacts. 3 Revealed / 16 Sealed</div>
          </a>
          <a href="/word" className="door" style={{padding:'14px 16px', background:'#141210', border:'1px solid #2a2318', borderRadius:12, color:'#e8e0c8', textDecoration:'none', display:'block'}}>
            <div style={{fontSize:12, letterSpacing:2, fontWeight:800}}>✝️ THE WORD</div>
            <div style={{fontSize:11, color:'#8a7a62', marginTop:4}}>Read the Scripture that gives each artifact its foundation.</div>
          </a>
          <a href="/chronicle" className="door" style={{padding:'14px 16px', background:'#141210', border:'1px solid #2a2318', borderRadius:12, color:'#e8e0c8', textDecoration:'none', display:'block'}}>
            <div style={{fontSize:12, letterSpacing:2, fontWeight:800}}>📖 THE CHRONICLE</div>
            <div style={{fontSize:11, color:'#8a7a62', marginTop:4}}>Discover the stories behind the artifacts.</div>
          </a>
          <a href="/library" className="door" style={{padding:'14px 16px', background:'#141210', border:'1px solid #2a2318', borderRadius:12, color:'#e8e0c8', textDecoration:'none', display:'block'}}>
            <div style={{fontSize:12, letterSpacing:2, fontWeight:800}}>📚 THE LIBRARY</div>
            <div style={{fontSize:11, color:'#8a7a62', marginTop:4}}>Go deeper through studies, devotionals, artwork, and future volumes.</div>
          </a>
        </div>

        <div style={{marginTop:36, width:'100%', textAlign:'left'}}>
          <p style={{fontSize:11, letterSpacing:4, color:'#7a6a4e'}}>3 REVEALED RELICS</p>
          <div style={{marginTop:12, display:'grid', gap:10}}>
            <div style={{background:'#0e0c0a', border:'1px solid #1e1a14', borderRadius:10, padding:'12px 14px'}}>
              <div style={{fontSize:12, fontWeight:800}}>⚔️ RunningWolf Blade — Hebrews 4:12</div>
              <div style={{fontSize:11, color:'#b8a88a', marginTop:6, lineHeight:1.5, fontStyle:'italic'}}>For the word of God is alive and active. Sharper than any double-edged sword, it penetrates even to dividing soul and spirit, joints and marrow; it judges the thoughts and attitudes of the heart.</div>
              <div style={{fontSize:10, color:'#b88a3a', marginTop:6}}>The Word guides the blade.</div>
            </div>
            <div style={{background:'#0e0c0a', border:'1px solid #1e1a14', borderRadius:10, padding:'12px 14px'}}>
              <div style={{fontSize:12, fontWeight:800}}>👑 Lord of Lords — Revelation 19:16</div>
              <div style={{fontSize:11, color:'#b8a88a', marginTop:6, lineHeight:1.5, fontStyle:'italic'}}>On his robe and on his thigh he has this name written: KING OF KINGS AND LORD OF LORDS.</div>
              <div style={{fontSize:10, color:'#b88a3a', marginTop:6}}>When the Keeper kneels, the King stands.</div>
            </div>
            <div style={{background:'#0e0c0a', border:'1px solid #1e1a14', borderRadius:10, padding:'12px 14px'}}>
              <div style={{fontSize:12, fontWeight:800}}>✝️ Blood of Cross — Colossians 1:20</div>
              <div style={{fontSize:11, color:'#b8a88a', marginTop:6, lineHeight:1.5, fontStyle:'italic'}}>And through him to reconcile to himself all things, whether things on earth or things in heaven, by making peace through his blood, shed on the cross.</div>
              <div style={{fontSize:10, color:'#b88a3a', marginTop:6}}>Peace was bought by blood.</div>
            </div>
          </div>
          <p style={{fontSize:10, color:'#5a4a32', marginTop:10, fontStyle:'italic'}}>16 sealed relics remain completely unnamed.</p>
        </div>

        <div style={{marginTop:32, width:'100%', textAlign:'left', background:'rgba(14,12,10,0.8)', border:'1px solid #1e1a14', borderRadius:12, padding:'16px'}}>
          <p style={{fontSize:11, letterSpacing:3, color:'#b88a3a', fontWeight:800}}>📖 THE CHRONICLE</p>
          <p style={{fontSize:12, marginTop:8, fontWeight:700}}>Chapter I — The Keeper&apos;s Oath</p>
          <p style={{fontSize:11, color:'#a89a82', marginTop:8, lineHeight:1.6}}>The Chronicle is being written. The stories behind the artifacts are being preserved here. Chapter I — The Keeper&apos;s Oath — is currently being written from the Keeper&apos;s real testimony.</p>
        </div>

        <div style={{marginTop:20, width:'100%', textAlign:'left', border:'1px solid #1e1a14', borderRadius:12, padding:'14px 16px'}}>
          <p style={{fontSize:11, letterSpacing:3, color:'#7a6a4e', fontWeight:800}}>📚 THE LIBRARY — EXPANDING</p>
          <p style={{fontSize:11, color:'#8a7a62', marginTop:6}}>Volumes, Devotionals, Study Guides, Artwork, Timeline. Deeper material coming as the Chronicle unfolds.</p>
        </div>

        <p style={{fontSize:9, marginTop:32, marginBottom:24, color:'#6a5a42', letterSpacing:3}}>THE KING IS THE CENTER • THE WORD IS THE FOUNDATION</p>
      </div>
    </div>
  )
          }
