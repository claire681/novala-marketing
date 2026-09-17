'use client';

import { useState, useEffect, useRef, FormEvent } from 'react';
import { useTranslations } from 'next-intl';

interface Message { role: 'vela' | 'user'; text: string; id: string; }

const SUGGESTED = ['whatIsNovala', 'howDoesVelaWork', 'features', 'pricing'] as const;

export default function VelaChat() {
  const t = useTranslations('velaChat');
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([{ role: 'vela', text: t('greeting'), id: 'greeting' }]);
  }, [t]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#vela-chat') {
        setOpen(true);
        window.history.replaceState(null, '', window.location.pathname);
      }
    };
    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const findResponse = (userInput: string): string => {
    const lower = userInput.toLowerCase();
    if ((lower.includes('what') || lower.includes('tell me about')) && lower.includes('novala')) return t('suggested.whatIsNovala.response');
    if (lower.includes('vela') && (lower.includes('work') || lower.includes('how') || lower.includes('do'))) return t('suggested.howDoesVelaWork.response');
    if (lower.includes('feature') || lower.includes('include') || lower.includes('offer')) return t('suggested.features.response');
    if (lower.includes('price') || lower.includes('cost') || lower.includes('pricing') || lower.includes('plan') || lower.includes('trial')) return t('suggested.pricing.response');
    if (lower.includes('secure') || lower.includes('security') || lower.includes('safe') || lower.includes('encryption')) return t('security');
    if (lower.includes('support') || lower.includes('help') || lower.includes('contact')) return t('support');
    if (lower.includes('cra') || lower.includes('compliance') || lower.includes('canadian')) return t('compliance');
    return t('defaultResponse');
  };

  const sendMessage = (userText: string, matchedResponse?: string) => {
    if (!userText.trim()) return;
    const userMsg: Message = { role: 'user', text: userText.trim(), id: `u-${Date.now()}` };
    setMessages(prev => [...prev, userMsg]);
    setShowSuggestions(false);
    setInput('');
    setTimeout(() => {
      const response = matchedResponse || findResponse(userText);
      const velaResp: Message = { role: 'vela', text: response, id: `v-${Date.now()}` };
      setMessages(prev => [...prev, velaResp]);
    }, 700);
  };

  const handleSubmit = (e: FormEvent) => { e.preventDefault(); sendMessage(input); };
  const handleSuggested = (key: typeof SUGGESTED[number]) => sendMessage(t(`suggested.${key}.question`), t(`suggested.${key}.response`));

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!open && (
        <button onClick={() => setOpen(true)} aria-label={t('openLabel')} className="w-16 h-16 rounded-full bg-emerald-rich shadow-2xl flex items-center justify-center hover:bg-emerald-deep transition-colors cursor-pointer">
          <span className="text-white font-bold text-2xl">V</span>
        </button>
      )}
      {open && (
        <div className="bg-white rounded-2xl shadow-2xl w-[420px] max-w-[calc(100vw-3rem)] flex flex-col overflow-hidden" style={{ height: '600px', animation: 'popup-slide-up 300ms cubic-bezier(0.16, 1, 0.3, 1)' }}>
          <div className="bg-emerald-rich text-white px-5 py-4 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-white text-emerald-rich flex items-center justify-center font-bold text-xl">V</div>
              <div>
                <div className="font-bold text-lg leading-tight">Vela</div>
                <div className="text-xs opacity-80">{t('role')}</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label={t('closeLabel')} className="text-white hover:text-white cursor-pointer text-lg">✕</button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-3">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${msg.role === 'user' ? 'bg-emerald-rich text-white rounded-br-sm' : 'bg-mint-pale text-near-black rounded-bl-sm'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {showSuggestions && (
              <>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold pt-2">{t('suggestedLabel')}</div>
                {SUGGESTED.map((key) => (
                  <button key={key} onClick={() => handleSuggested(key)} className="block w-full text-left text-sm text-emerald-rich bg-white border border-mint-pale hover:bg-mint-pale hover:border-emerald-rich rounded-xl px-4 py-2.5 transition-all cursor-pointer">
                    {t(`suggested.${key}.question`)}
                  </button>
                ))}
              </>
            )}
          </div>

          <div className="border-t border-gray-200 px-4 pt-3 pb-2 flex-shrink-0">
            <form onSubmit={handleSubmit} className="flex gap-2 items-center">
              <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder={t('placeholder')} className="flex-1 px-4 py-2.5 rounded-xl border border-gray-300 focus:border-emerald-rich focus:outline-none text-sm" />
              <button type="submit" aria-label={t('sendLabel')} disabled={!input.trim()} className="bg-emerald-rich text-white w-10 h-10 rounded-full hover:bg-emerald-deep disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer flex items-center justify-center text-lg flex-shrink-0">→</button>
            </form>
            <div className="text-center text-[11px] text-gray-500 mt-2">
              <a href="https://www.getnovala.com/pricing" className="text-emerald-rich font-semibold hover:text-emerald-deep">{t('signupLink')} →</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
