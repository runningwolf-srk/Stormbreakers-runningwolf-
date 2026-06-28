'use client';
import { useState } from 'react';
import Link from 'next/link';
import { RELICS } from '../../src/lib/relics';

export default function BookOfWeapons() {
  const [page, setPage] = useState(0);
  const relic = RELICS[page];
  const totalPages = RELICS.length;

  const nextPage = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 0) setPage(page - 1);
  };

  return (
    <div style={{
      background:'#000',
      color:'#fff',
      minHeight:'100vh',
      fontFamily:'Georgia, serif',
      display:'flex',
      flexDirection:'column'
    }}>
      {/* Header */}
      <div style={{
        padding:'24px',
        borderBottom:'1px solid #1a1a1a',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
      }}>
        <Link href="/" style={{ color:'#d4af37', textDecoration:'none', fontFamily:'system-ui, sans-serif' }}>
          ← RUNNINGWOLF
        </Link>
        <div style={{ fontSize:'12px', letterSpacing:'4px', color:'#666', fontFamily:'system-ui, sans-serif' }}>
          PAGE {page + 1} OF {totalPages}
        </div>
      </div>

      {/* Book Page */}
      <div style={{
        flex:1,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        padding:'40px 24px'
      }}>
        <div style={{ maxWidth:'800px', width:'100%' }}>

          {/* Image */}
          <div style={{
            width:'100%',
            aspectRatio:'16/9',
            backgroundImage:`url(${relic.cover})`,
            backgroundSize:'cover',
            backgroundPosition:'center',
            backgroundColor:'#0a0a0a',
            border:'2px solid #1a1a1a',
            marginBottom:'40px',
            position:'relative'
          }}>
            <div style={{
              position:'absolute',
              top:'16px',
              left:'16px',
              background:'rgba(0,0,0,0.8)',
              padding:'8px 16px',
              border:'1px solid #d4af37',
              fontSize:'11px',
              letterSpacing:'2px',
              fontFamily:'system-ui, sans-serif'
            }}>
              {relic.subtitle}
            </div>
          </div>

          {/* Text */}
          <div style={{ textAlign:'center', marginBottom:'60px' }}>
            <div style={{
              fontSize:'12px',
              letterSpacing:'4px',
              color:'#d4af37',
              marginBottom:'16px',
              fontFamily:'system-ui, sans-serif'
            }}>
              {relic.scripture}
            </div>
            <h1 style={{
              fontSize:'56px',
              color:'#fff',
              margin:'0 0 32px 0',
              letterSpacing:'3px',
              lineHeight:'1.1'
            }}>
              {relic.title}
            </h1>
            <div style={{
              background:'#0a0a0a',
              border:'1px solid #1a1a1a',
              borderLeft:'3px solid #d4af37',
              padding:'32px',
              margin:'0 auto',
              maxWidth:'600px'
            }}>
              <p style={{
                fontSize:'20px',
                fontStyle:'italic',
                color:'#d4af37',
                lineHeight:'1.8',
                margin:0
              }}>
                "{relic.prophecy}"
              </p>
            </div>
          </div>

          {/* Page Turn Controls */}
          <div style={{
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            maxWidth:'400px',
            margin:'0 auto'
          }}>
            <button
              onClick={prevPage}
              disabled={page === 0}
              style={{
                background: page === 0? '#0a0a0a' : '#d4af37',
                color: page === 0? '#333' : '#000',
                border:'none',
                padding:'16px 32px',
                fontSize:'14px',
                letterSpacing:'2px',
                cursor: page === 0? 'not-allowed' : 'pointer',
                fontFamily:'system-ui, sans-serif',
                fontWeight:'bold'
              }}
            >
              ← PREV
            </button>

            <div style={{ fontSize:'14px', color:'#666', fontFamily:'system-ui, sans-serif' }}>
              {page + 1} / {totalPages}
            </div>

            <button
              onClick={nextPage}
              disabled={page === totalPages - 1}
              style={{
                background: page === totalPages - 1? '#0a0a0a' : '#d4af37',
                color: page === totalPages - 1? '#333' : '#000',
                border:'none',
                padding:'16px 32px',
                fontSize:'14px',
                letterSpacing:'2px',
                cursor: page === totalPages - 1? 'not-allowed' : 'pointer',
                fontFamily:'system-ui, sans-serif',
                fontWeight:'bold'
              }}
            >
              NEXT →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
                  }
