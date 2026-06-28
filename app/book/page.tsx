'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { RELICS } from '../../src/lib/relics';

export default function BookOfWeapons() {
  const [page, setPage] = useState(0);
  const [unlocked, setUnlocked] = useState(false);
  const [readPages, setReadPages] = useState<number[]>([]);
  const relic = RELICS;
  const totalPages = RELICS.length;
  const progress = ((page + 1) / totalPages) * 100;

  useEffect(() => {
    if (!readPages.includes(page)) {
      setReadPages([...readPages, page]);
    }
  }, );

  const playSound = () => {
    const audio = new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU');
    audio.volume = 0.2;
    audio.play().catch(() => {});
  };

  const nextPage = () => {
    if (page < totalPages - 1) {
      playSound();
      setPage(page + 1);
      setUnlocked(false);
      window.speechSynthesis.cancel();
    }
  };

  const prevPage = () => {
    if (page > 0) {
      playSound();
      setPage(page - 1);
      setUnlocked(false);
      window.speechSynthesis.cancel();
    }
  };

  const speakPage = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const text = `${relic.title}. ${relic.scripture}. ${relic.prophecy}`;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.85;
      utterance.pitch = 0.7;
      window.speechSynthesis.speak(utterance);
    }
  };

  const revealSecret = () => {
    setUnlocked(true);
    playSound();
  };

  return (
    <div style={{
      background:'#000',
      color:'#fff',
      minHeight:'100vh',
      fontFamily:'Georgia, serif',
      overflow:'hidden'
    }}>
      <div style={{
        position:'fixed',
        top:0,
        left:0,
        width:`${progress}%`,
        height:'3px',
        background:'linear-gradient(90deg, #d4af37, #f4d03f)',
        transition:'width 0.5s ease',
        zIndex:100,
        boxShadow:'0 0 10px #d4af37'
      }}></div>

      <div style={{
        padding:'24px',
        borderBottom:'1px solid #1a1a1a',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        backdropFilter:'blur(10px)',
        background:'rgba(0,0,0,0.8)'
      }}>
        <Link href="/" style={{ color:'#d4af37', textDecoration:'none', fontFamily:'system-ui, sans-serif' }}>
          ← RUNNINGWOLF
        </Link>
        <div style={{ display:'flex', gap:'16px', alignItems:'center' }}>
          <div style={{ fontSize:'11px', color:'#666', fontFamily:'system-ui, sans-serif' }}>
            🔥 {readPages.length}/{totalPages} READ
          </div>
          <div style={{ font
