'use client';

import Image from 'next/image';

type Props = {
  visibleScene: string;
  sceneClass: (name: string) => string;
  dashIn: boolean;
  chat1In: boolean;
  chat2In: boolean;
  pillIn: boolean;
  typed1: string;
  typed2: string;
  showStatus1: boolean;
  showAnswer1: boolean;
  status1Idx: number;
  sparkDrawn: boolean;
  showStatus2: boolean;
  showAnswer2: boolean;
  sendPulse: boolean;
  t: (key: string) => string;
};

export function VelaIntroDynamicScenes(props: Props) {
  const { visibleScene, sceneClass, dashIn, chat1In, chat2In, pillIn, typed1, typed2, showStatus1, showAnswer1, status1Idx, sparkDrawn, showStatus2, showAnswer2, sendPulse, t } = props;

  const status1Msgs = [t('qa1.status.0'), t('qa1.status.1'), t('qa1.status.2')];
  const monthLabels = [t('qa1.monthLabels.0'), t('qa1.monthLabels.1'), t('qa1.monthLabels.2'), t('qa1.monthLabels.3'), t('qa1.monthLabels.4')];
  const invoices = [
    { customer: t('qa2.invoices.0.customer'), days: t('qa2.invoices.0.days'), amount: t('qa2.invoices.0.amount') },
    { customer: t('qa2.invoices.1.customer'), days: t('qa2.invoices.1.days'), amount: t('qa2.invoices.1.amount') },
    { customer: t('qa2.invoices.2.customer'), days: t('qa2.invoices.2.days'), amount: t('qa2.invoices.2.amount') },
  ];

  return (
    <>
      <div className={sceneClass('dashboard')} style={{ padding: '3%' }}>
        <div style={{ width: '100%', height: '100%', background: '#FFF', borderRadius: '14px', boxShadow: '0 12px 40px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.04)', overflow: 'hidden', display: 'flex', flexDirection: 'column', transform: dashIn ? 'scale(1)' : 'scale(0.96)', opacity: dashIn ? 1 : 0, transition: 'transform 900ms cubic-bezier(0.16, 1, 0.3, 1), opacity 900ms cubic-bezier(0.16, 1, 0.3, 1)' }}>
          <div style={{ background: '#0E2A2A', padding: '10px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Image src="/logo-mark.svg" alt="Novala" width={80} height={20} unoptimized style={{ height: '16px', width: 'auto' }} />
              <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'rgba(255,255,255,0.35)' }} />
              <span style={{ fontFamily: 'var(--font-jakarta), system-ui, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.85)' }}>{t('dashboard.clientName')}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontFamily: 'system-ui, sans-serif', fontSize: '10px', color: 'rgba(255,255,255,0.75)' }}>{t('dashboard.date')}</span>
              <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'linear-gradient(135deg, #00A651, #046A38)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontSize: '9px', fontWeight: 600 }}>CN</div>
            </div>
          </div>
          <div style={{ display: 'flex', padding: '0 18px', borderBottom: '1px solid #E8E8E8', gap: '24px' }}>
            <div style={{ padding: '11px 0', position: 'relative' }}>
              <span style={{ fontFamily: 'system-ui, sans-serif', fontSize: '11px', color: '#000', fontWeight: 600 }}>{t('dashboard.tabs.payroll')}</span>
              <div style={{ position: 'absolute', left: 0, right: 0, bottom: '-1px', height: '2px', background: '#046A38' }} />
            </div>
            {['accounting', 'salesAndGetPaid', 'workforce', 'reports'].map((k) => (
              <div key={k} style={{ padding: '11px 0' }}>
                <span style={{ fontFamily: 'system-ui, sans-serif', fontSize: '11px', color: '#333', fontWeight: 500 }}>{t(`dashboard.tabs.${k}`)}</span>
              </div>
            ))}
          </div>
          <div style={{ padding: '12px 18px 4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '9px 14px', background: '#FAFAFA', borderRadius: '999px', border: '1px solid #EAEAEA' }}>
              <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'linear-gradient(135deg, #00A651, #046A38)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontSize: '9px', fontWeight: 600 }}>V</div>
              <span style={{ fontFamily: 'system-ui, sans-serif', fontSize: '12px', color: '#000', flex: 1 }}>{typed1}</span>
              <span className="v-caret" style={{ width: '1px', height: '13px', background: '#000' }} />
              <span style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#00A651', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontSize: '10px' }}>➤</span>
            </div>
          </div>
          <div style={{ padding: '10px 22px 14px', flex: 1, display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '22px', overflow: 'hidden' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: '10px', color: '#555', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600, marginBottom: '5px' }}>{t('dashboard.todayLabel')}</div>
              {[
                { k: 'payrollRun', tick: true, color: '#046A38' },
                { k: 'transactionsCategorized', tick: true, color: '#046A38' },
                { k: 'bankReconciled', tick: true, color: '#046A38' },
                { k: 'timesheetsToReview', tick: false, num: '3', color: '#B45309' },
                { k: 'invoicesToSend', tick: false, num: '2', color: '#B45309' },
                { k: 'gstFilingDue', tick: false, num: '1', color: '#C1272D' },
              ].map((item) => (
                <div key={item.k} style={{ display: 'flex', alignItems: 'center', gap: '11px', padding: '6px 0' }}>
                  <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontSize: '9px', fontWeight: 700, flexShrink: 0 }}>
                    {item.tick ? '✓' : item.num}
                  </div>
                  <span style={{ fontFamily: 'system-ui, sans-serif', fontSize: '11px', color: '#000', fontWeight: 500, flex: 1 }}>{t(`dashboard.tasks.${item.k}.text`)}</span>
                  <span style={{ fontFamily: 'system-ui, sans-serif', fontSize: '11px', color: item.tick ? '#333' : item.color, fontWeight: item.tick ? 400 : 600 }}>{t(`dashboard.tasks.${item.k}.meta`)}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: '10px', color: '#555', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>{t('dashboard.monthLabel')}</div>
              {['revenue', 'expenses', 'netProfit'].map((k) => {
                const isNet = k === 'netProfit';
                return (
                  <div key={k}>
                    <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: '10px', color: isNet ? '#046A38' : '#555', marginBottom: '2px', fontWeight: isNet ? 600 : 400 }}>{t(`dashboard.stats.${k}.label`)}</div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                      <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: '15px', fontWeight: isNet ? 700 : 600, color: isNet ? '#046A38' : '#000', lineHeight: 1 }}>{t(`dashboard.stats.${k}.value`)}</div>
                      <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: '10px', color: k === 'expenses' ? '#C1272D' : '#046A38', fontWeight: 600 }}>{t(`dashboard.stats.${k}.delta`)}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className={sceneClass('chat1')} style={{ padding: '3%' }}>
        <div style={{ width: '100%', height: '100%', background: '#FFF', borderRadius: '14px', boxShadow: '0 12px 40px rgba(0,0,0,0.1)', padding: '16px 22px', display: 'flex', flexDirection: 'column', gap: '10px', transform: chat1In ? 'scale(1)' : 'scale(0.96)', opacity: chat1In ? 1 : 0, transition: 'transform 900ms cubic-bezier(0.16, 1, 0.3, 1), opacity 900ms cubic-bezier(0.16, 1, 0.3, 1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingBottom: '8px', borderBottom: '1px solid #F0F0F0' }}>
            <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'linear-gradient(135deg, #00A651, #046A38)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontSize: '10px', fontWeight: 600 }}>V</div>
            <span style={{ fontFamily: 'system-ui, sans-serif', fontSize: '13px', fontWeight: 500, color: '#000' }}>{t('velaHeader')}</span>
          </div>
          <div style={{ alignSelf: 'flex-end', background: '#0E2A2A', color: '#FFF', fontFamily: 'system-ui, sans-serif', fontSize: '12px', padding: '8px 13px', borderRadius: '14px 14px 3px 14px', maxWidth: '65%' }}>{t('qa1.question')}</div>
          {showStatus1 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '7px', fontFamily: 'system-ui, sans-serif', fontSize: '12px' }}>
              <span className="v-tdot" /><span className="v-tdot" /><span className="v-tdot" />
              <span className="v-shim">{status1Msgs[status1Idx]}</span>
            </div>
          )}
          {showAnswer1 && (
            <div style={{ opacity: 1, display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
              <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: '10px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>{t('qa1.label')}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                <div style={{ fontFamily: 'var(--font-jakarta), system-ui, sans-serif', fontSize: 'clamp(36px, 5.5vw, 60px)', fontWeight: 300, color: '#000', lineHeight: 0.9, letterSpacing: '-0.02em' }}>{t('qa1.percentage')}<span style={{ fontSize: '0.6em', color: '#666' }}>{t('qa1.percentageSuffix')}</span></div>
                <div style={{ background: '#ECFDF5', color: '#059669', padding: '4px 11px', borderRadius: '999px', fontFamily: 'system-ui, sans-serif', fontSize: '11px', fontWeight: 600 }}>{t('qa1.delta')}</div>
              </div>
              <div style={{ flex: 1, position: 'relative', paddingTop: '6px', minHeight: '60px' }}>
                <svg viewBox="0 0 480 60" style={{ width: '100%', height: '100%' }} preserveAspectRatio="none">
                  <defs><linearGradient id="v-spg" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#4F46E5" stopOpacity="0.25" /><stop offset="100%" stopColor="#4F46E5" stopOpacity="0" /></linearGradient></defs>
                  <path d={sparkDrawn ? 'M0 45 L60 42 L120 38 L180 32 L240 28 L300 22 L360 16 L420 10 L480 6 L480 60 L0 60 Z' : 'M0 60 L0 60 L0 60 L0 60 L0 60 L0 60 L0 60 L0 60 L0 60 L0 60 Z'} fill="url(#v-spg)" style={{ transition: 'd 1500ms cubic-bezier(0.16, 1, 0.3, 1)' }} />
                  <path d={sparkDrawn ? 'M0 45 L60 42 L120 38 L180 32 L240 28 L300 22 L360 16 L420 10 L480 6' : 'M0 60 L0 60 L0 60 L0 60 L0 60 L0 60 L0 60 L0 60 L0 60'} fill="none" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" style={{ transition: 'd 1500ms cubic-bezier(0.16, 1, 0.3, 1)' }} />
                  <circle cx={sparkDrawn ? 480 : 0} cy={sparkDrawn ? 6 : 60} r="3" fill="#4F46E5" style={{ transition: 'cx 1500ms cubic-bezier(0.16, 1, 0.3, 1), cy 1500ms cubic-bezier(0.16, 1, 0.3, 1)' }} />
                </svg>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', justifyContent: 'space-between', fontFamily: 'system-ui, sans-serif', fontSize: '9px', color: '#999' }}>
                  {monthLabels.map((m, i) => <span key={i}>{m}</span>)}
                </div>
              </div>
              <div style={{ display: 'flex', gap: '20px', paddingTop: '8px', borderTop: '1px solid #F0F0F0' }}>
                {[['incomeLabel', 'incomeValue', '#000'], ['expensesLabel', 'expensesValue', '#000'], ['netLabel', 'netValue', '#059669']].map(([lk, vk, color]) => (
                  <div key={lk}>
                    <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: '9px', color: '#888', textTransform: 'uppercase' }}>{t(`qa1.${lk}`)}</div>
                    <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: '13px', fontWeight: 600, color }}>{t(`qa1.${vk}`)}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={sceneClass('pill')} style={{ padding: '3%', alignItems: 'center' }}>
        <div style={{ width: '65%', background: '#FFF', borderRadius: '999px', padding: '15px 22px', display: 'flex', alignItems: 'center', gap: '11px', boxShadow: '0 12px 40px rgba(0,0,0,0.1)', border: '1px solid #EDEDED', transform: pillIn ? 'scale(1)' : 'scale(0.96)', opacity: pillIn ? 1 : 0, transition: 'transform 900ms cubic-bezier(0.16, 1, 0.3, 1), opacity 900ms cubic-bezier(0.16, 1, 0.3, 1)' }}>
          <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'linear-gradient(135deg, #00A651, #046A38)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontSize: '11px', fontWeight: 600 }}>V</div>
          <span style={{ fontFamily: 'system-ui, sans-serif', fontSize: '13px', color: '#000', flex: 1 }}>{typed2}</span>
          <span className="v-caret" style={{ width: '1px', height: '15px', background: '#000' }} />
          <span className={sendPulse ? 'v-pulse' : ''} style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#00A651', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontSize: '11px' }}>➤</span>
        </div>
      </div>

      <div className={sceneClass('chat2')} style={{ padding: '3%' }}>
        <div style={{ width: '100%', height: '100%', background: '#FFF', borderRadius: '14px', boxShadow: '0 12px 40px rgba(0,0,0,0.1)', padding: '16px 22px', display: 'flex', flexDirection: 'column', gap: '10px', transform: chat2In ? 'scale(1)' : 'scale(0.96)', opacity: chat2In ? 1 : 0, transition: 'transform 900ms cubic-bezier(0.16, 1, 0.3, 1), opacity 900ms cubic-bezier(0.16, 1, 0.3, 1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingBottom: '8px', borderBottom: '1px solid #F0F0F0' }}>
            <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'linear-gradient(135deg, #00A651, #046A38)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontSize: '10px', fontWeight: 600 }}>V</div>
            <span style={{ fontFamily: 'system-ui, sans-serif', fontSize: '13px', fontWeight: 500, color: '#000' }}>{t('velaHeader')}</span>
          </div>
          <div style={{ alignSelf: 'flex-end', background: '#0E2A2A', color: '#FFF', fontFamily: 'system-ui, sans-serif', fontSize: '12px', padding: '8px 13px', borderRadius: '14px 14px 3px 14px', maxWidth: '65%' }}>{t('qa2.question')}</div>
          {showStatus2 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '7px', fontFamily: 'system-ui, sans-serif', fontSize: '12px' }}>
              <span className="v-tdot" /><span className="v-tdot" /><span className="v-tdot" />
              <span className="v-shim">{t('qa2.status')}</span>
            </div>
          )}
          {showAnswer2 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: '13px', fontWeight: 600, color: '#000' }}>{t('qa2.heading')}</div>
              <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: '12px', color: '#000', lineHeight: 1.5 }}>
                {t('qa2.summaryPre')}<strong style={{ color: '#C1272D' }}>{t('qa2.summaryAmount')}</strong>{t('qa2.summaryPost')}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {invoices.map((inv, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 0', borderTop: i > 0 ? '1px solid #F0F0F0' : 'none' }}>
                    <div>
                      <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: '11px', fontWeight: 500, color: '#000' }}>{inv.customer}</div>
                      <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: '10px', color: '#C1272D' }}>{inv.days}</div>
                    </div>
                    <div style={{ fontFamily: 'system-ui, sans-serif', fontSize: '12px', fontWeight: 600, color: '#000' }}>{inv.amount}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        @keyframes v-tdot-anim { 0%, 100% { opacity: 0.3; transform: translateY(0); } 50% { opacity: 1; transform: translateY(-2px); } }
        @keyframes v-shim-anim { 0% { background-position: -300px 0; } 100% { background-position: 300px 0; } }
        @keyframes v-pulse-anim { 0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0,166,81,0.5); } 50% { transform: scale(1.08); box-shadow: 0 0 0 10px rgba(0,166,81,0); } }
        @keyframes v-caret-anim { 0%, 50% { opacity: 1; } 51%, 100% { opacity: 0; } }
        .v-tdot { display: inline-block; width: 5px; height: 5px; border-radius: 50%; background: #999; animation: v-tdot-anim 1.4s ease-in-out infinite; }
        .v-tdot:nth-child(2) { animation-delay: 0.18s; }
        .v-tdot:nth-child(3) { animation-delay: 0.36s; }
        .v-shim { background: linear-gradient(90deg, #666 0%, #000 50%, #666 100%); background-size: 400px 100%; -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent; animation: v-shim-anim 2.2s linear infinite; }
        .v-pulse { animation: v-pulse-anim 900ms ease-out; }
        .v-caret { animation: v-caret-anim 800ms infinite; }
      `}</style>
    </>
  );
}
