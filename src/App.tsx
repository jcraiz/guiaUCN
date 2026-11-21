import { useEffect, useState } from 'react';
import { AlertCircle, Globe } from 'lucide-react';
import { COPY, Language } from './data/courseData';
import { Header } from './components/Header';
import { CourseChecklist } from './components/CourseChecklist';
import { GradeCalculator } from './components/GradeCalculator';
import { ScheduleExplorer } from './components/ScheduleExplorer';
import { PoliciesAndContact } from './components/PoliciesAndContact';

export default function App() {
  const [lang, setLang] = useState<Language>('es');
  const t = COPY[lang];

  useEffect(() => {
    document.documentElement.lang = lang === 'es' ? 'es' : 'en-GB';
  }, [lang]);

  const handleJumpToCalculator = () => {
    const el = document.getElementById('simulador-nota');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F9FC] text-slate-900">
      <Header lang={lang} onJumpToCalculator={handleJumpToCalculator} />

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-12">
        {/* Hero & Overview Section */}
        <section id="inicio" className="scroll-mt-20 space-y-6">
          {/* Workspace utility row: bilingual switcher (ES / BR_EN) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200/80">
            <p className="text-xs font-medium text-slate-500 leading-relaxed">
              {t.heroKicker}
            </p>

            <div className="flex items-center gap-2.5 shrink-0">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
                <Globe className="w-3.5 h-3.5" aria-hidden="true" />
                {t.langLabel}:
              </span>
              <div
                className="inline-flex items-center p-0.5 bg-slate-200/70 rounded-lg"
                role="group"
                aria-label="Selector de idioma ES y BR_EN"
              >
                <button
                  type="button"
                  onClick={() => setLang('es')}
                  aria-pressed={lang === 'es'}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    lang === 'es'
                      ? 'bg-white text-[#1B2A4E] shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  ES · Español
                </button>
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  aria-pressed={lang === 'en'}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    lang === 'en'
                      ? 'bg-white text-[#1B2A4E] shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  BR_EN · English (UK)
                </button>
              </div>
            </div>
          </div>

          {/* Primary Hero Typography */}
          <div className="space-y-3 max-w-4xl">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1B2A4E] tracking-tight leading-[1.15]">
              {t.heroTitle}
            </h1>
            <p className="text-base text-slate-600 leading-relaxed max-w-3xl">
              {t.heroLead}
            </p>
          </div>

          {/* 4-Column Key Course Metrics Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.metrics.map((m) => (
              <div
                key={m.label}
                className="bg-white border border-slate-200 rounded-xl p-4 space-y-1"
              >
                <p className="text-xs font-medium text-slate-500">{m.label}</p>
                <p className="font-mono text-2xl font-bold text-[#1B2A4E] tabular-nums">
                  {m.value}
                </p>
                <p className="text-xs text-slate-600">{m.sub}</p>
              </div>
            ))}
          </div>

          {/* Emphatic Priority #1 Action Banner: CONDUCTA PEDAGÓGICA */}
          <div
            role="region"
            aria-label={t.mandatoryAlertTitle}
            className="bg-[#1B2A4E] text-white rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-start gap-4"
          >
            <div className="w-10 h-10 rounded-lg bg-[#0273B5] text-white flex items-center justify-center shrink-0">
              <AlertCircle className="w-5 h-5" aria-hidden="true" />
            </div>
            <div className="space-y-1.5">
              <div className="text-xs font-semibold text-sky-300 tracking-wide">
                {t.mandatoryAlertLabel} · {t.mandatoryAlertTitle}
              </div>
              <p className="text-sm sm:text-[15px] text-slate-100 leading-relaxed font-medium">
                {t.mandatoryAlertBody}
              </p>
            </div>
          </div>

          {/* Interactive Student Progress Checklist */}
          <CourseChecklist lang={lang} />
        </section>

        {/* Section 1: Assessment Weights & Interactive Mark Simulator */}
        <GradeCalculator lang={lang} />

        {/* Section 2: Cohort 6 Schedule & 4-Week Vacation Roadmap */}
        <ScheduleExplorer lang={lang} />

        {/* Section 3: Canvas Methodology, Regulations & Contact */}
        <PoliciesAndContact lang={lang} />
      </main>

      <footer className="mt-8 border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <p>{t.footerText}</p>
          <p className="font-mono tabular-nums">
            2026-4 · 23/11/2026 – 18/12/2026
          </p>
        </div>
      </footer>
    </div>
  );
}
