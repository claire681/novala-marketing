'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState, useRef } from 'react';

type Tint = 'success' | 'warning';

interface GridItem {
  k: string;
  v: string;
  tint?: Tint;
}

interface Question {
  pill: string;
  text: string;
  working: string;
  label: string;
  value: string;
  sub: string;
  grid: GridItem[];
}

const QUESTIONS: Question[] = [
  {
    pill: 'Payroll',
    text: 'How much will payroll cost this Friday?',
    working: 'Analyzing hours and rates',
    label: 'PAYROLL · FRIDAY',
    value: '$142,540',
    sub: 'Projected total',
    grid: [
      { k: 'EMPLOYEES', v: '47' },
      { k: 'HOURS', v: '3,720' },
      { k: 'OVERTIME', v: '184', tint: 'warning' },
      { k: 'FUNDING', v: '✓ Ready', tint: 'success' },
    ],
  },
  {
    pill: 'Accounting',
    text: 'What are my profit margins this year?',
    working: 'Analyzing revenue vs expenses',
    label: 'PROFIT · YTD',
    value: '+24%',
    sub: 'vs prior year',
    grid: [
      { k: 'REVENUE', v: '$1.2M' },
      { k: 'EXPENSES', v: '$912K' },
      { k: 'NET', v: '$288K', tint: 'success' },
      { k: 'TREND', v: '↑ Growing' },
    ],
  },
  {
    pill: 'Sales & Get Paid',
    text: 'Which invoices are overdue?',
    working: 'Checking accounts receivable',
    label: 'OVERDUE INVOICES',
    value: '$12,180',
    sub: '3 past due',
    grid: [
      { k: 'OLDEST', v: '42 days' },
      { k: 'AVG DAYS', v: '18' },
      { k: 'AT RISK', v: '$4,200', tint: 'warning' },
      { k: 'ACTION', v: 'Send reminder' },
    ],
  },
];

const PILLS = ['Accounting', 'Sales & Get Paid', 'Payroll', 'Workforce'];

const TINT_MAP: Record<Tint, { bg: string; text: string }> = {
  success: { bg: '#E8F5EA', text: '#046A38' },
  warning: { bg: '#FEF3C7', text: '#B45309' },
};

const wait = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

export default function MeetVela() {
  const t = useTranslations('meetVela');
  const [activePill, setActivePill] = useState<string>('Accounting');
  const [typedText, setTypedText] = useState<string>('');
  const [questionVisible, setQuestionVisible] = useState<boolean>(false);
  const [workingVisible, setWorkingVisible] = useState<boolean>(false);
  const [workingDetail, setWorkingDetail] = useState<string>('');
  const [answerVisible, setAnswerVisible] = useState<boolean>(false);
  const [currentAnswer, setCurrentAnswer] = useState<Question | null>(null);
  const runningRef = useRef<boolean>(false);

  useEffect(() => {
    if (runningRef.current) return;
    runningRef.current = true;
    let idx = 0;

    const runQuestion = async (q: Question) => {
      setActivePill(q.pill);
      setQuestionVisible(true);
      await wait(400);

      setTypedText('');
      for (let i = 0; i < q.text.length; i++) {
        setTypedText(q.text.substring(0, i + 1));
        await wait(45);
      }
      await wait(500);

      setWorkingDetail(q.working);
      setWorkingVisible(true);
      await wait(1800);
      setWorkingVisible(false);
      await wait(500);

      setCurrentAnswer(q);
      setAnswerVisible(true);
      await wait(3500);

      setAnswerVisible(false);
      setQuestionVisible(false);
      await wait(900);
      setTypedText('');
      await wait(400);
    };

    const cycle = async () => {
      while (true) {
        await runQuestion(QUESTIONS[idx]);
        idx = (idx + 1) % QUESTIONS.length;
      }
    };
    cycle();
  }, []);

  return (
    <section className="bg-[#0E2A2A] py-24 px-8 md:px-16">
      <div className="text-center mb-16">
        <div className="text-xs font-bold text-emerald-bright uppercase tracking-widest mb-4">
          {t('eyebrow')}
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-2">
          {t('headline1')}
        </h2>
        <h2 className="text-4xl md:text-6xl font-extrabold text-emerald-bright leading-tight">
          {t('headline2')}
        </h2>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="flex flex-wrap gap-2.5 justify-center mb-6">
          {PILLS.map((p) => {
            const isActive = p === activePill;
            return (
              <span
                key={p}
                className="px-3.5 py-2 rounded-full text-xs font-semibold border transition-all"
                style={{
                  background: isActive ? '#046A38' : '#023E22',
                  color: isActive ? '#fff' : '#B8D5C0',
                  borderColor: '#046A38',
                }}
              >
                {p}
              </span>
            );
          })}
        </div>

        <div
          className="bg-white rounded-2xl p-5 mb-3.5"
          style={{
            opacity: questionVisible ? 1 : 0,
            transform: questionVisible ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), transform 700ms cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-emerald-rich text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
              V
            </div>
            <div className="flex-1 text-lg text-near-black min-h-[24px]">
              {typedText}
              <span
                className="inline-block w-0.5 h-5 bg-emerald-rich align-[-4px] ml-0.5"
                style={{ animation: 'vela-blink 1s infinite' }}
              ></span>
            </div>
          </div>
        </div>

        <div
          className="bg-emerald-deep border border-emerald-rich rounded-xl px-5 py-4 mb-3.5"
          style={{ opacity: workingVisible ? 1 : 0, transition: 'opacity 500ms' }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-2.5 h-2.5 rounded-full bg-emerald-bright"
              style={{ animation: 'vela-pulse 1s ease-in-out infinite' }}
            ></div>
            <div>
              <div className="text-sm font-bold text-white">Working…</div>
              <div className="text-xs text-[#B8D5C0]">{workingDetail}</div>
            </div>
          </div>
        </div>

        <div
          className="bg-white rounded-2xl p-6"
          style={{
            opacity: answerVisible ? 1 : 0,
            transform: answerVisible ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 800ms cubic-bezier(0.16, 1, 0.3, 1), transform 800ms cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {currentAnswer && (
            <>
              <div className="text-xs font-bold text-emerald-rich uppercase tracking-widest mb-2">
                {currentAnswer.label}
              </div>
              <div className="text-5xl font-extrabold text-near-black leading-none mb-1">
                {currentAnswer.value}
              </div>
              <div className="text-sm text-[#5A6970] mb-4">{currentAnswer.sub}</div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {currentAnswer.grid.map((item, i) => {
                  const tint = item.tint ? TINT_MAP[item.tint] : null;
                  return (
                    <div
                      key={i}
                      className="p-3 rounded-lg"
                      style={{ background: tint ? tint.bg : '#F4FBF7' }}
                    >
                      <div className="text-[10px] font-bold text-[#5A6970] tracking-wider">
                        {item.k}
                      </div>
                      <div
                        className="text-base font-extrabold mt-1"
                        style={{ color: tint ? tint.text : '#0E2A2A' }}
                      >
                        {item.v}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>

      <div className="text-center mt-14">
        <button className="bg-emerald-bright hover:bg-emerald-rich text-white px-8 py-4 rounded-lg font-bold transition-colors cursor-pointer">
          {t('cta')} →
        </button>
      </div>
    </section>
  );
}
