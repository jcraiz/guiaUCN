import { useMemo, useState } from 'react';
import { AlertTriangle, CheckCircle2, RotateCcw } from 'lucide-react';
import {
  COPY,
  EVALUATION_ITEMS,
  Language,
  MIN_PASSING_GRADE,
} from '../data/courseData';

interface GradeCalculatorProps {
  lang: Language;
}

const DEFAULT_SCORES: Record<string, number> = {
  tracking: 4.0,
  'task-1': 3.8,
  'task-2': 3.8,
  'task-3': 3.5,
  'task-4': 3.8,
  'task-5': 3.8,
  'task-6': 4.0,
};

export function GradeCalculator({ lang }: GradeCalculatorProps) {
  const t = COPY[lang];
  const [scores, setScores] = useState<Record<string, number>>(DEFAULT_SCORES);

  const handleScoreChange = (id: string, rawValue: number) => {
    const clamped = Math.max(0, Math.min(5, Math.round(rawValue * 10) / 10));
    setScores((prev) => ({ ...prev, [id]: clamped }));
  };

  const applyPreset = (value: number) => {
    const next: Record<string, number> = {};
    for (const item of EVALUATION_ITEMS) {
      next[item.id] = value;
    }
    setScores(next);
  };

  const { totalGrade, passing, deficit } = useMemo(() => {
    const sum = EVALUATION_ITEMS.reduce((acc, item) => {
      const score = scores[item.id] ?? 0;
      return acc + score * (item.weight / 100);
    }, 0);
    const rounded = Math.round(sum * 100) / 100;
    const isPassing = rounded >= MIN_PASSING_GRADE;
    const missing = Math.max(0, Math.round((MIN_PASSING_GRADE - rounded) * 100) / 100);
    return { totalGrade: rounded, passing: isPassing, deficit: missing };
  }, [scores]);

  return (
    <section id="evaluacion" className="scroll-mt-20 space-y-6">
      {/* Section Header */}
      <div className="space-y-2">
        <p className="text-xs font-semibold text-[#0273B5] tracking-wide">
          {t.evalSectionIndex}
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1B2A4E] tracking-tight">
          {t.evalSectionTitle}
        </h2>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          {t.evalSectionIntro}
        </p>
      </div>

      {/* 3-Column Official Percentage Overview (matches Cohorte 6 summary table) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {t.evalSummaryCards.map((card) => {
          const accentText =
            card.tone === 'blue'
              ? 'text-[#0273B5]'
              : card.tone === 'green'
              ? 'text-emerald-700'
              : 'text-orange-700';
          const barColor =
            card.tone === 'blue'
              ? 'bg-[#0273B5]'
              : card.tone === 'green'
              ? 'bg-emerald-600'
              : 'bg-orange-600';

          return (
            <div
              key={card.title}
              className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between gap-3"
            >
              <div>
                <div className="flex items-baseline justify-between gap-2 pb-3 border-b border-slate-100">
                  <span className={`font-mono text-3xl font-semibold tabular-nums ${accentText}`}>
                    {card.pct}
                  </span>
                  <span className="text-xs font-medium text-slate-500">
                    {card.tone === 'green'
                      ? lang === 'es'
                        ? 'Componente aprendizaje'
                        : 'Learning component'
                      : lang === 'es'
                      ? 'Calificable'
                      : 'Assessed'}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#1B2A4E] mt-3">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                  {card.detail}
                </p>
              </div>
              <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                <div
                  className={`h-full ${barColor}`}
                  style={{
                    width:
                      card.pct === '95%' ? '95%' : card.pct === '5%' ? '5%' : '100%',
                    opacity: card.pct === '0%' ? 0.35 : 1,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Stacked Visual Weight Distribution Bar */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 space-y-5">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <span className="text-xs font-semibold text-slate-700">
              {lang === 'es'
                ? 'Ponderación total de la nota definitiva (100%)'
                : 'Total final mark weighting breakdown (100%)'}
            </span>
            <span className="font-mono text-xs text-slate-500 tabular-nums">
              5% + (5 × 15%) + 20% = 100%
            </span>
          </div>
          <div
            className="w-full h-8 rounded-lg overflow-hidden flex border border-slate-200 text-[11px] font-mono font-semibold text-white tabular-nums"
            aria-label="Distribución de porcentajes de evaluación"
          >
            <div
              className="bg-[#0273B5] flex items-center justify-center px-1 border-r border-white/30"
              style={{ width: '5%' }}
              title={lang === 'es' ? 'Seguimiento académico: 5%' : 'Academic Follow-up: 5%'}
            >
              <span className="hidden sm:inline">5%</span>
            </div>
            {[1, 2, 3, 4, 5].map((n) => (
              <div
                key={n}
                className="bg-[#D95F0E] flex items-center justify-center border-r border-white/30"
                style={{ width: '15%' }}
                title={`Tarea ${n}: 15%`}
              >
                <span>T{n} · 15%</span>
              </div>
            ))}
            <div
              className="bg-[#1B2A4E] flex items-center justify-center"
              style={{ width: '20%' }}
              title="Tarea 6: 20%"
            >
              <span>T6 · 20%</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1 mt-2 text-xs text-slate-500">
            <span>
              <strong className="text-[#0273B5] font-semibold">5%</strong>{' '}
              {lang === 'es' ? 'Sesión de seguimiento académico' : 'Academic Follow-up Session'}
            </span>
            <span>
              <strong className="text-[#D95F0E] font-semibold">75%</strong>{' '}
              {lang === 'es' ? 'Tareas 1–5 (15% c/u)' : 'Tasks 1–5 (15% each)'}
            </span>
            <span>
              <strong className="text-[#1B2A4E] font-semibold">20%</strong>{' '}
              {lang === 'es' ? 'Tarea 6 (Actividad final)' : 'Task 6 (Final task)'}
            </span>
            <span>
              <strong className="text-emerald-700 font-semibold">0%</strong>{' '}
              {lang === 'es' ? '6 Unidades interactivas (sin calificación)' : '6 Interactive units (unassessed)'}
            </span>
          </div>
        </div>

        {/* Interactive Two-Zone Grade Simulator */}
        <div
          id="simulador-nota"
          className="scroll-mt-24 pt-5 border-t border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
        >
          {/* Left Zone: Interactive Sliders */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h3 className="text-lg font-bold text-[#1B2A4E]">{t.calcTitle}</h3>
                <p className="text-sm text-slate-600 mt-0.5">{t.calcSubtitle}</p>
              </div>
            </div>

            {/* Preset Action Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => applyPreset(3.5)}
                className="px-3 py-1.5 text-xs font-semibold text-[#1B2A4E] bg-slate-100 hover:bg-slate-200 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                {t.calcPresets.minPass}
              </button>
              <button
                type="button"
                onClick={() => applyPreset(4.5)}
                className="px-3 py-1.5 text-xs font-semibold text-[#1B2A4E] bg-slate-100 hover:bg-slate-200 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                {t.calcPresets.high}
              </button>
              <button
                type="button"
                onClick={() => applyPreset(0)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                {t.calcPresets.reset}
              </button>
            </div>

            {/* Slider Rows */}
            <div className="divide-y divide-slate-100 border-t border-slate-100">
              {EVALUATION_ITEMS.map((item) => {
                const score = scores[item.id] ?? 0;
                const contribution = (score * item.weight) / 100;
                return (
                  <div
                    key={item.id}
                    className="py-3 grid grid-cols-1 sm:grid-cols-12 gap-3 items-center"
                  >
                    <div className="sm:col-span-5">
                      <label
                        htmlFor={`slider-${item.id}`}
                        className="text-sm font-semibold text-slate-900 block"
                      >
                        {item.label[lang]}
                      </label>
                      <span className="text-xs text-slate-500 font-mono tabular-nums">
                        {item.weight}% · {t.calcContribution}:{' '}
                        <strong className="text-slate-700">{contribution.toFixed(2)}</strong>
                      </span>
                    </div>

                    <div className="sm:col-span-5 flex items-center gap-3">
                      <input
                        id={`slider-${item.id}`}
                        type="range"
                        min={0}
                        max={5}
                        step={0.1}
                        value={score}
                        onChange={(e) => handleScoreChange(item.id, parseFloat(e.target.value))}
                        className="ucn-slider w-full"
                        aria-label={`${item.label[lang]} (${item.weight}%)`}
                      />
                    </div>

                    <div className="sm:col-span-2 flex items-center justify-end gap-1.5">
                      <input
                        type="number"
                        min={0}
                        max={5}
                        step={0.1}
                        value={score}
                        onChange={(e) => {
                          const parsed = parseFloat(e.target.value);
                          handleScoreChange(item.id, Number.isNaN(parsed) ? 0 : parsed);
                        }}
                        aria-label={`Nota numérica ${item.label[lang]}`}
                        className="w-16 px-2 py-1 text-right font-mono text-sm font-semibold text-[#1B2A4E] bg-slate-50 border border-slate-200 rounded-md tabular-nums focus:bg-white focus:border-[#0273B5]"
                      />
                      <span className="font-mono text-xs text-slate-400">/5.0</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Zone: Live Result Readout */}
          <div className="lg:col-span-4 bg-[#F7F9FC] border border-slate-200 rounded-xl p-5 space-y-5">
            <div>
              <p className="text-xs font-semibold text-slate-500">
                {t.calcResultLabel}
              </p>
              <div className="mt-2 flex items-baseline gap-2">
                <span
                  className={`font-mono text-5xl font-bold tracking-tight tabular-nums ${
                    passing ? 'text-emerald-700' : 'text-red-700'
                  }`}
                >
                  {totalGrade.toFixed(2)}
                </span>
                <span className="font-mono text-lg text-slate-400 tabular-nums">/ 5.00</span>
              </div>
            </div>

            {/* Threshold Visual Gauge */}
            <div className="space-y-1.5">
              <div className="relative h-3 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-transform duration-200 origin-left ${
                    passing ? 'bg-emerald-600' : 'bg-red-600'
                  }`}
                  style={{ transform: `scaleX(${Math.min(1, totalGrade / 5)})` }}
                />
                {/* 3.5 passing marker at 70% */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-[#1B2A4E]"
                  style={{ left: '70%' }}
                  title="Mínimo aprobatorio: 3.5"
                />
              </div>
              <div className="flex justify-between font-mono text-[11px] text-slate-500 tabular-nums">
                <span>0.0</span>
                <span className="font-semibold text-[#1B2A4E]">
                  {lang === 'es' ? 'Mín. 3.5' : 'Min 3.5'}
                </span>
                <span>5.0</span>
              </div>
            </div>

            {/* Dual-coded Status (Icon + Explicit Text, never hue-only) */}
            <div
              className={`rounded-lg p-3.5 border flex items-start gap-2.5 text-sm ${
                passing
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                  : 'bg-red-50 border-red-200 text-red-900'
              }`}
              role="status"
              aria-live="polite"
            >
              {passing ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />
              ) : (
                <AlertTriangle className="w-5 h-5 text-red-700 shrink-0 mt-0.5" aria-hidden="true" />
              )}
              <div className="font-medium leading-snug">
                {passing ? (
                  t.calcPassStatus
                ) : (
                  <>
                    {t.calcFailPrefix}{' '}
                    <span className="font-mono font-bold tabular-nums">{deficit.toFixed(2)}</span>{' '}
                    {t.calcFailSuffix}
                  </>
                )}
              </div>
            </div>

            {/* Summary Breakdown inside readout */}
            <dl className="pt-3 border-t border-slate-200 space-y-2 text-xs">
              <div className="flex justify-between">
                <dt className="text-slate-600">
                  {lang === 'es' ? 'Seguimiento (5%)' : 'Follow-up (5%)'}
                </dt>
                <dd className="font-mono font-semibold text-slate-900 tabular-nums">
                  {((scores['tracking'] ?? 0) * 0.05).toFixed(2)} pts
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-slate-600">
                  {lang === 'es' ? 'Tareas 1–5 (75%)' : 'Tasks 1–5 (75%)'}
                </dt>
                <dd className="font-mono font-semibold text-slate-900 tabular-nums">
                  {(
                    (['task-1', 'task-2', 'task-3', 'task-4', 'task-5'].reduce(
                      (s, k) => s + (scores[k] ?? 0) * 0.15,
                      0
                    ))
                  ).toFixed(2)}{' '}
                  pts
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-slate-600">
                  {lang === 'es' ? 'Tarea 6 (20%)' : 'Task 6 (20%)'}
                </dt>
                <dd className="font-mono font-semibold text-slate-900 tabular-nums">
                  {((scores['task-6'] ?? 0) * 0.2).toFixed(2)} pts
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
