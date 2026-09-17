'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { VelaIntroDynamicScenes } from './VelaIntroDynamicScenes';

type SceneKey = 'dark' | 'cream' | 'grain' | 'end';

const LOOP_DURATION = 47500;

const timeline = [
  { at: 0,     action: 'intro-in' },
  { at: 1800,  action: 'intro-out' },
  { at: 2400,  action: 'vela-in' },
  { at: 4700,  action: 'vela-out' },
  { at: 5300,  action: 'anyq-in' },
  { at: 8000,  action: 'anyq-out' },
  { at: 8600,  action: 'power-in' },
  { at: 11500, action: 'power-out' },
  { at: 12100, action: 'dashboard-in' },
  { at: 13000, action: 'dashboard-type' },
  { at: 16500, action: 'dashboard-out' },
  { at: 17200, action: 'chat1-in' },
  { at: 18400, action: 'status1-2' },
  { at: 19600, action: 'status1-3' },
  { at: 21000, action: 'answer1' },
  { at: 25500, action: 'chat1-out' },
  { at: 26200, action: 'pill-in' },
  { at: 27000, action: 'pill-type' },
  { at: 30000, action: 'send-pulse' },
  { at: 30500, action: 'pill-out' },
  { at: 31200, action: 'chat2-in' },
  { at: 33500, action: 'answer2' },
  { at: 37500, action: 'chat2-out' },
  { at: 38200, action: 'vela-end-in' },
  { at: 40200, action: 'vela-end-out' },
  { at: 40800, action: 'nowin-in' },
  { at: 43500, action: 'nowin-out' },
  { at: 44100, action: 'endcard-in' },
  { at: 46800, action: 'endcard-out' },
];

function splitLetters(text: string) {
  return text.split('').map((ch, i) => (
    <span key={i} className="v-char" style={{ transitionDelay: `${i * 30}ms` }}>
      {ch === ' ' ? '\u00A0' : ch}
    </span>
  ));
}

export default function VelaIntro() {
  const t = useTranslations('velaIntro');
  const cardRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(true);
  const [inView, setInView] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [bg, setBg] = useState<SceneKey>('dark');
  const [visibleScene, setVisibleScene] = useState<string>('intro');
  const [revealStates, setRevealStates] = useState<Record<string, 'in' | 'out' | 'idle'>>({});
  const [typed1, setTyped1] = useState('');
  const [typed2, setTyped2] = useState('');
  const [status1Idx, setStatus1Idx] = useState(0);
  const [showStatus1, setShowStatus1] = useState(true);
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showStatus2, setShowStatus2] = useState(true);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [dashIn, setDashIn] = useState(false);
  const [chat1In, setChat1In] = useState(false);
  const [chat2In, setChat2In] = useState(false);
  const [pillIn, setPillIn] = useState(false);
  const [sparkDrawn, setSparkDrawn] = useState(false);
  const [logoIn, setLogoIn] = useState(false);
  const [sendPulse, setSendPulse] = useState(false);
  const [currentSceneNum, setCurrentSceneNum] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);

  const clockStartRef = useRef(performance.now());
  const pauseAtRef = useRef(0);
  const lastAtRef = useRef(-1);
  const typingRef = useRef<{ target: 1 | 2 | null; text: string; speed: number; start: number }>({ target: null, text: '', speed: 60, start: 0 });

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (!cardRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => setInView(entries[0].isIntersecting),
      { threshold: 0.35 }
    );
    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  // Reset timeline to start when scrolling into view
  useEffect(() => {
    if (inView) {
      clockStartRef.current = performance.now();
      lastAtRef.current = -1;
      typingRef.current = { target: null, text: '', speed: 60, start: 0 };
    }
  }, [inView]);

  useEffect(() => {
    const handler = () => setInView(!document.hidden && inView);
    document.addEventListener('visibilitychange', handler);
    return () => document.removeEventListener('visibilitychange', handler);
  }, [inView]);

  const setReveal = useCallback((key: string, state: 'in' | 'out' | 'idle') => {
    setRevealStates((prev) => ({ ...prev, [key]: state }));
  }, []);

  const runAction = useCallback((action: string) => {
    switch (action) {
      case 'intro-in': setBg('dark'); setVisibleScene('intro'); setReveal('introducing', 'in'); break;
      case 'intro-out': setReveal('introducing', 'out'); break;
      case 'vela-in': setBg('cream'); setVisibleScene('vela'); setReveal('vela', 'in'); break;
      case 'vela-out': setReveal('vela', 'out'); break;
      case 'anyq-in': setVisibleScene('anyq'); setReveal('anyq1', 'in'); setTimeout(() => setReveal('anyq2', 'in'), 500); break;
      case 'anyq-out': setReveal('anyq1', 'out'); setReveal('anyq2', 'out'); break;
      case 'power-in': setVisibleScene('power'); setReveal('power1', 'in'); setTimeout(() => setReveal('power2', 'in'), 500); break;
      case 'power-out': setReveal('power1', 'out'); setReveal('power2', 'out'); break;
      case 'dashboard-in': setBg('grain'); setVisibleScene('dashboard'); setDashIn(true); setTyped1(''); break;
      case 'dashboard-type': typingRef.current = { target: 1, text: t('qa1.question'), speed: 55, start: performance.now() }; break;
      case 'dashboard-out': setDashIn(false); break;
      case 'chat1-in': setVisibleScene('chat1'); setChat1In(true); setStatus1Idx(0); setShowStatus1(true); setShowAnswer1(false); setSparkDrawn(false); break;
      case 'status1-2': setStatus1Idx(1); break;
      case 'status1-3': setStatus1Idx(2); break;
      case 'answer1': setShowStatus1(false); setShowAnswer1(true); setTimeout(() => setSparkDrawn(true), 300); break;
      case 'chat1-out': setChat1In(false); break;
      case 'pill-in': setVisibleScene('pill'); setPillIn(true); setTyped2(''); break;
      case 'pill-type': typingRef.current = { target: 2, text: t('qa2.question'), speed: 60, start: performance.now() }; break;
      case 'send-pulse': setSendPulse(true); setTimeout(() => setSendPulse(false), 900); break;
      case 'pill-out': setPillIn(false); break;
      case 'chat2-in': setVisibleScene('chat2'); setChat2In(true); setShowStatus2(true); setShowAnswer2(false); break;
      case 'answer2': setShowStatus2(false); setShowAnswer2(true); break;
      case 'chat2-out': setChat2In(false); break;
      case 'vela-end-in': setBg('dark'); setVisibleScene('vela-end'); setReveal('vela-end', 'in'); break;
      case 'vela-end-out': setReveal('vela-end', 'out'); break;
      case 'nowin-in': setVisibleScene('nowin'); setReveal('nowin1', 'in'); setTimeout(() => setReveal('nowin2', 'in'), 500); break;
      case 'nowin-out': setReveal('nowin1', 'out'); setReveal('nowin2', 'out'); break;
      case 'endcard-in': setBg('end'); setVisibleScene('endcard'); setTimeout(() => setLogoIn(true), 200); break;
      case 'endcard-out': setLogoIn(false); break;
    }
  }, [t, setReveal]);

  useEffect(() => {
    if (!playing || !inView || reducedMotion) return;
    let raf: number;
    const tick = (now: number) => {
      const elapsed = (now - clockStartRef.current) % LOOP_DURATION;
      if (elapsed < lastAtRef.current) lastAtRef.current = -1;
      for (const evt of timeline) {
        if (evt.at > lastAtRef.current && evt.at <= elapsed) {
          runAction(evt.action);
          lastAtRef.current = evt.at;
        }
      }
      const ts = typingRef.current;
      if (ts.target) {
        const dt = now - ts.start;
        const n = Math.min(ts.text.length, Math.floor(dt / ts.speed));
        const partial = ts.text.substring(0, n);
        if (ts.target === 1) setTyped1(partial);
        else setTyped2(partial);
        if (n >= ts.text.length) typingRef.current = { ...ts, target: null };
      }
      let sn = 1;
      if (elapsed < 2400) sn = 1;
      else if (elapsed < 5300) sn = 2;
      else if (elapsed < 8600) sn = 3;
      else if (elapsed < 12100) sn = 4;
      else if (elapsed < 17200) sn = 5;
      else if (elapsed < 21000) sn = 6;
      else if (elapsed < 26200) sn = 7;
      else if (elapsed < 31200) sn = 8;
      else if (elapsed < 33500) sn = 9;
      else if (elapsed < 38200) sn = 10;
      else if (elapsed < 40800) sn = 11;
      else if (elapsed < 44100) sn = 12;
      else if (elapsed < 46800) sn = 13;
      else sn = 14;
      setCurrentSceneNum(sn);
      setCurrentTime(elapsed);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing, inView, reducedMotion, runAction]);

  useEffect(() => {
    if (reducedMotion) {
      setBg('grain'); setVisibleScene('chat1'); setChat1In(true); setShowStatus1(false); setShowAnswer1(true); setSparkDrawn(true);
    }
  }, [reducedMotion]);

  const togglePlay = () => {
    if (playing) { pauseAtRef.current = performance.now(); setPlaying(false); }
    else { clockStartRef.current += performance.now() - pauseAtRef.current; if (typingRef.current.target) typingRef.current.start += performance.now() - pauseAtRef.current; setPlaying(true); }
  };

  const cardBgStyle = { backgroundColor: bg === 'dark' ? '#0E2A2A' : bg === 'cream' ? '#FAF7F2' : bg === 'grain' ? '#F5F5F7' : '#023E22' };
  const revealClass = (key: string) => `v-reveal ${revealStates[key] === 'in' ? 'v-in' : revealStates[key] === 'out' ? 'v-out' : ''}`;
  const sceneClass = (name: string) => `v-scene ${visibleScene === name ? 'v-visible' : ''}`;

  return (
    <section className="w-full py-16 md:py-24" style={{ background: '#0E2A2A' }}>
      <div className="max-w-6xl mx-auto px-4">
        <div ref={cardRef} className="v-card relative w-full mx-auto rounded-3xl overflow-hidden" style={{ aspectRatio: '16/9', maxWidth: '1100px', boxShadow: '0 30px 80px rgba(0,0,0,0.5), 0 12px 32px rgba(0,0,0,0.3)', transition: 'background-color 900ms cubic-bezier(0.16, 1, 0.3, 1)', ...cardBgStyle }} aria-label="Vela introduction animation">

          {bg === 'grain' && <div className="absolute inset-0" style={{ backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.9"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/></filter><rect width="200" height="200" filter="url(%23n)"/></svg>')`, opacity: 0.6 }} />}
          {bg === 'dark' && <div className="absolute pointer-events-none" style={{ top: '-100px', right: '-100px', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(29,158,117,0.45), transparent 70%)' }} />}

          <div className={sceneClass('intro')} style={{ justifyContent: 'center' }}>
            <span className={revealClass('introducing')} style={{ fontFamily: 'var(--font-jakarta), system-ui, sans-serif', fontSize: 'clamp(32px, 5.5vw, 68px)', fontWeight: 200, color: '#FFF', letterSpacing: '-0.02em', whiteSpace: 'pre' }}>{splitLetters(t('scenes.introducing'))}</span>
          </div>

          <div className={sceneClass('vela')} style={{ justifyContent: 'center' }}>
            <span className={revealClass('vela')} style={{ fontFamily: 'var(--font-jakarta), system-ui, sans-serif', fontSize: 'clamp(72px, 13vw, 160px)', fontWeight: 300, color: '#161616', letterSpacing: '-0.05em', lineHeight: 1, whiteSpace: 'pre' }}>{splitLetters(t('scenes.vela'))}</span>
          </div>

          <div className={sceneClass('anyq')} style={{ flexDirection: 'column', justifyContent: 'center', gap: '8px' }}>
            <span className={revealClass('anyq1')} style={{ fontFamily: 'var(--font-jakarta), system-ui, sans-serif', fontSize: 'clamp(28px, 4.5vw, 56px)', fontWeight: 200, color: '#161616', letterSpacing: '-0.03em', whiteSpace: 'pre' }}>{splitLetters(t('scenes.anyQuestion'))}</span>
            <span className={revealClass('anyq2')} style={{ fontFamily: 'var(--font-jakarta), system-ui, sans-serif', fontSize: 'clamp(28px, 4.5vw, 56px)', fontWeight: 200, color: '#161616', letterSpacing: '-0.03em', whiteSpace: 'pre' }}>{splitLetters(t('scenes.answeredInstantly'))}</span>
          </div>

          <div className={sceneClass('power')} style={{ flexDirection: 'column', justifyContent: 'center', gap: '8px' }}>
            <span className={revealClass('power1')} style={{ fontFamily: 'var(--font-jakarta), system-ui, sans-serif', fontSize: 'clamp(28px, 4.5vw, 56px)', fontWeight: 200, color: '#161616', letterSpacing: '-0.03em', whiteSpace: 'pre' }}>{splitLetters(t('scenes.usingPowerOf'))}</span>
            <span className={revealClass('power2')} style={{ fontFamily: 'var(--font-jakarta), system-ui, sans-serif', fontSize: 'clamp(28px, 4.5vw, 56px)', fontWeight: 200, color: '#161616', letterSpacing: '-0.03em', whiteSpace: 'pre' }}>{splitLetters(t('scenes.yourBusinessData'))}</span>
          </div>

          <div className={sceneClass('vela-end')} style={{ justifyContent: 'center' }}>
            <span className={revealClass('vela-end')} style={{ fontFamily: 'var(--font-jakarta), system-ui, sans-serif', fontSize: 'clamp(72px, 13vw, 160px)', fontWeight: 300, color: '#FFF', letterSpacing: '-0.05em', lineHeight: 1, whiteSpace: 'pre' }}>{splitLetters(t('scenes.vela'))}</span>
          </div>

          <div className={sceneClass('nowin')} style={{ flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
            <span className={revealClass('nowin1')} style={{ fontFamily: 'var(--font-jakarta), system-ui, sans-serif', fontSize: 'clamp(11px, 1.6vw, 18px)', fontWeight: 300, color: 'rgba(255,255,255,0.75)', letterSpacing: '0.12em', textTransform: 'uppercase', whiteSpace: 'pre' }}>{splitLetters(t('scenes.nowAvailableIn'))}</span>
            <span className={revealClass('nowin2')} style={{ fontFamily: 'var(--font-jakarta), system-ui, sans-serif', fontSize: 'clamp(40px, 7vw, 88px)', fontWeight: 300, color: '#FFF', letterSpacing: '-0.03em', whiteSpace: 'pre' }}>{splitLetters(t('scenes.novala'))}</span>
          </div>

          <div className={sceneClass('endcard')} style={{ justifyContent: 'center' }}>
            <div style={{ opacity: logoIn ? 1 : 0, transform: `scale(${logoIn ? 1 : 0.94})`, transition: 'opacity 1100ms cubic-bezier(0.16, 1, 0.3, 1), transform 1100ms cubic-bezier(0.16, 1, 0.3, 1)', filter: 'drop-shadow(0 0 40px rgba(0,166,81,0.4))' }}>
              <Image src="/logo-mark.svg" alt="Novala" width={400} height={99} priority unoptimized style={{ height: 'clamp(48px, 8vw, 96px)', width: 'auto' }} />
            </div>
          </div>

          {/* Scenes 6, 8, 10, 12 continue in next file — split for readability */}
          <VelaIntroDynamicScenes visibleScene={visibleScene} sceneClass={sceneClass} dashIn={dashIn} chat1In={chat1In} chat2In={chat2In} pillIn={pillIn} typed1={typed1} typed2={typed2} showStatus1={showStatus1} showAnswer1={showAnswer1} status1Idx={status1Idx} sparkDrawn={sparkDrawn} showStatus2={showStatus2} showAnswer2={showAnswer2} sendPulse={sendPulse} t={t} />

          <button onClick={togglePlay} aria-label={t('playButton')} className="absolute bottom-3 right-3 rounded-full flex items-center justify-center cursor-pointer z-30" style={{ width: '36px', height: '36px', border: '1px solid rgba(255,255,255,0.25)', background: 'rgba(0,0,0,0.5)', color: '#FFF', fontSize: '13px', backdropFilter: 'blur(10px)' }}>
            {playing ? '⏸' : '▶'}
          </button>
        </div>

        </div>

      <style jsx global>{`
        .v-char { display: inline-block; opacity: 0; filter: blur(6px); transition: opacity 500ms cubic-bezier(0.16, 1, 0.3, 1), filter 500ms cubic-bezier(0.16, 1, 0.3, 1); }
        .v-reveal.v-in .v-char { opacity: 1; filter: blur(0); }
        .v-reveal.v-out .v-char { opacity: 0; filter: blur(6px); }
        .v-scene { position: absolute; inset: 0; opacity: 0; pointer-events: none; transition: opacity 700ms cubic-bezier(0.16, 1, 0.3, 1); display: flex; align-items: center; }
        .v-scene.v-visible { opacity: 1; }
        @media (prefers-reduced-motion: reduce) {
          .v-scene, .v-char, .v-reveal { transition: none !important; }
        }
      `}</style>
    </section>
  );
}
