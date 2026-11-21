import { useState } from 'react';
import {
  AlertOctagon,
  Calendar,
  ExternalLink,
  FileText,
  Image as ImageIcon,
  X,
} from 'lucide-react';
import {
  CALENDAR_IMAGE_PATH,
  COPY,
  EVALUATION_ITEMS,
  Language,
  METHODOLOGY_PDF_PATH,
  TRACKING_TABLE_ROWS,
  VACATION_WEEKS,
} from '../data/courseData';

interface ScheduleExplorerProps {
  lang: Language;
}

type ScheduleTab = 'unified' | 'tracking' | 'interactive' | 'tasks';

export function ScheduleExplorer({ lang }: ScheduleExplorerProps) {
  const t = COPY[lang];
  const [activeTab, setActiveTab] = useState<ScheduleTab>('unified');
  const [showCalendarModal, setShowCalendarModal] = useState(false);

  const taskItems = EVALUATION_ITEMS.filter((item) => item.category === 'task');
  const openDate = lang === 'es' ? '23 de noviembre' : '23 November';
  const closeDate = lang === 'es' ? '18 de diciembre' : '18 December';

  return (
    <section id="cronograma" className="scroll-mt-20 space-y-6">
      {/* Header + Official Document Actions */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
        <div className="space-y-2 max-w-3xl">
          <p className="text-xs font-semibold text-[#0273B5] tracking-wide">
            {t.scheduleSectionIndex}
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1B2A4E] tracking-tight">
            {t.scheduleSectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {t.scheduleSectionIntro}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={() => setShowCalendarModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-[#1B2A4E] bg-white border border-slate-300 hover:border-[#0273B5] hover:text-[#0273B5] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <ImageIcon className="w-4 h-4" aria-hidden="true" />
            {t.viewOfficialCalendar}
          </button>
          <a
            href={METHODOLOGY_PDF_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#1B2A4E] hover:bg-[#0273B5] rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            <FileText className="w-4 h-4" aria-hidden="true" />
            {t.downloadPdf}
            <ExternalLink className="w-3.5 h-3.5 opacity-80" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Interactive Cohort 6 Table Card */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        {/* Segmented Filter Control */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm font-bold text-[#1B2A4E]">
            <Calendar className="w-4 h-4 text-[#0273B5] shrink-0" aria-hidden="true" />
            <span>COHORTE 6 - 2026</span>
            <span className="text-slate-300" aria-hidden="true">·</span>
            <span className="font-mono text-xs font-medium text-slate-500 tabular-nums">
              {openDate} – {closeDate}
            </span>
          </div>

          <div
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-lg"
            role="tablist"
            aria-label={lang === 'es' ? 'Vistas del cronograma Cohorte 6' : 'Cohort 6 timetable views'}
          >
            {(
              [
                { id: 'unified', label: t.tabs.unified },
                { id: 'tracking', label: t.tabs.tracking },
                { id: 'interactive', label: t.tabs.interactive },
                { id: 'tasks', label: t.tabs.tasks },
              ] as const
            ).map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-white text-[#1B2A4E] shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto">
          {activeTab === 'unified' && (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-600">
                  <th className="py-3 px-4 sm:px-5">{t.tableHeaders.unit}</th>
                  <th className="py-3 px-4">{t.tableHeaders.interactiveCol}</th>
                  <th className="py-3 px-4">{t.tableHeaders.taskCol}</th>
                  <th className="py-3 px-4 text-right">{t.tableHeaders.weight}</th>
                  <th className="py-3 px-4">{t.tableHeaders.from}</th>
                  <th className="py-3 px-4 sm:px-5">{t.tableHeaders.until}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                <tr className="bg-[#0273B5]/5">
                  <td className="py-3.5 px-4 sm:px-5 font-semibold text-[#1B2A4E]">
                    {lang === 'es' ? 'Cohorte completa' : 'Full Cohort'}
                  </td>
                  <td className="py-3.5 px-4 text-slate-500">
                    {lang === 'es' ? 'Transversal (Temas 1–6)' : 'Cross-unit (Topics 1–6)'}
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-[#0273B5]">
                    {lang === 'es'
                      ? '1 Sesión de seguimiento académico'
                      : '1 Academic Follow-up Session'}
                  </td>
                  <td className="py-3.5 px-4 text-right font-mono font-semibold text-[#0273B5] tabular-nums">
                    5%
                  </td>
                  <td className="py-3.5 px-4 font-mono text-xs text-slate-700 tabular-nums whitespace-nowrap">
                    {openDate}
                  </td>
                  <td className="py-3.5 px-4 sm:px-5 font-mono text-xs font-semibold text-slate-900 tabular-nums whitespace-nowrap">
                    {closeDate}
                  </td>
                </tr>

                {taskItems.map((task) => (
                  <tr key={task.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4 sm:px-5 font-semibold text-[#1B2A4E] whitespace-nowrap">
                      {lang === 'es' ? `Unidad ${task.unitNumber}` : `Unit ${task.unitNumber}`}
                    </td>
                    <td className="py-3.5 px-4 text-slate-600">
                      <span className="text-emerald-700 font-medium">
                        {lang === 'es'
                          ? `Unidad interactiva ${task.unitNumber}`
                          : `Interactive Unit ${task.unitNumber}`}
                      </span>{' '}
                      <span className="font-mono text-xs text-slate-400">(0%)</span>
                    </td>
                    <td className="py-3.5 px-4 font-medium text-slate-900">
                      {task.label[lang]}
                    </td>
                    <td className="py-3.5 px-4 text-right font-mono font-semibold text-orange-700 tabular-nums">
                      {task.weight}%
                    </td>
                    <td className="py-3.5 px-4 font-mono text-xs text-slate-600 tabular-nums whitespace-nowrap">
                      {task.startDate[lang]}
                    </td>
                    <td className="py-3.5 px-4 sm:px-5 font-mono text-xs font-semibold text-slate-900 tabular-nums whitespace-nowrap">
                      {task.endDate[lang]}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-slate-50 border-t border-slate-200 text-sm font-bold text-[#1B2A4E]">
                  <td colSpan={3} className="py-3.5 px-4 sm:px-5">
                    {lang === 'es'
                      ? 'Total evaluación del curso (5% seguimiento + 95% tareas)'
                      : 'Total Course Assessment (5% follow-up + 95% tasks)'}
                  </td>
                  <td className="py-3.5 px-4 text-right font-mono tabular-nums">100%</td>
                  <td colSpan={2} className="py-3.5 px-4 sm:px-5 font-mono text-xs text-slate-600 tabular-nums">
                    {lang === 'es' ? 'Nota mínima: 3.5' : 'Minimum pass mark: 3.5'}
                  </td>
                </tr>
              </tfoot>
            </table>
          )}

          {activeTab === 'tracking' && (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0273B5] text-white text-xs font-semibold">
                  <th className="py-3 px-4 sm:px-5 w-16">{t.tableHeaders.item}</th>
                  <th className="py-3 px-4">
                    {lang === 'es'
                      ? 'Sesión de seguimiento académico (5%)'
                      : 'Academic Follow-up Session (5%)'}
                  </th>
                  <th className="py-3 px-4 sm:px-5">{t.tableHeaders.period}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {TRACKING_TABLE_ROWS.map((row) => (
                  <tr
                    key={row.rowNumber}
                    className={row.isMilestone ? 'bg-slate-50 font-semibold' : 'hover:bg-slate-50/70'}
                  >
                    <td className="py-3 px-4 sm:px-5 font-mono text-xs text-slate-500 tabular-nums">
                      {row.rowNumber}
                    </td>
                    <td className="py-3 px-4 text-[#1B2A4E]">{row.concept[lang]}</td>
                    <td className="py-3 px-4 sm:px-5 font-mono text-xs text-slate-700 tabular-nums">
                      {row.period[lang]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {activeTab === 'interactive' && (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-emerald-700 text-white text-xs font-semibold">
                  <th className="py-3 px-4 sm:px-5">{t.tableHeaders.unit}</th>
                  <th className="py-3 px-4">{t.tableHeaders.concept}</th>
                  <th className="py-3 px-4">{t.tableHeaders.from}</th>
                  <th className="py-3 px-4 sm:px-5">{t.tableHeaders.until}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {[1, 2, 3, 4, 5, 6].map((unit) => (
                  <tr key={unit} className="hover:bg-slate-50/70">
                    <td className="py-3 px-4 sm:px-5 font-mono font-semibold text-emerald-800 tabular-nums">
                      {unit}
                    </td>
                    <td className="py-3 px-4 text-slate-800">
                      {lang === 'es'
                        ? `Unidad interactiva ${unit} montada en plataforma (sin calificación · 0%)`
                        : `Interactive Unit ${unit} hosted on platform (unassessed · 0%)`}
                    </td>
                    <td className="py-3 px-4 font-mono text-xs text-slate-700 tabular-nums">
                      {openDate}
                    </td>
                    <td className="py-3 px-4 sm:px-5 font-mono text-xs font-semibold text-slate-900 tabular-nums">
                      {closeDate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {activeTab === 'tasks' && (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#D95F0E] text-white text-xs font-semibold">
                  <th className="py-3 px-4 sm:px-5">{t.tableHeaders.unit}</th>
                  <th className="py-3 px-4">{t.tableHeaders.concept}</th>
                  <th className="py-3 px-4 text-right">{t.tableHeaders.weight}</th>
                  <th className="py-3 px-4">{t.tableHeaders.from}</th>
                  <th className="py-3 px-4 sm:px-5">{t.tableHeaders.until}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {taskItems.map((task) => (
                  <tr key={task.id} className="hover:bg-slate-50/70">
                    <td className="py-3 px-4 sm:px-5 font-mono font-semibold text-orange-800 tabular-nums">
                      {task.unitNumber}
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-semibold text-slate-900">{task.label[lang]}</div>
                      <div className="text-xs text-slate-500">{task.description[lang]}</div>
                    </td>
                    <td className="py-3 px-4 text-right font-mono font-semibold text-orange-700 tabular-nums">
                      {task.weight}%
                    </td>
                    <td className="py-3 px-4 font-mono text-xs text-slate-700 tabular-nums whitespace-nowrap">
                      {task.startDate[lang]}
                    </td>
                    <td className="py-3 px-4 sm:px-5 font-mono text-xs font-semibold text-slate-900 tabular-nums whitespace-nowrap">
                      {task.endDate[lang]}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-orange-50/60 border-t border-orange-200 font-bold text-sm text-[#1B2A4E]">
                  <td colSpan={2} className="py-3 px-4 sm:px-5">
                    {t.tableHeaders.total}
                  </td>
                  <td className="py-3 px-4 text-right font-mono text-orange-800 tabular-nums">
                    95%
                  </td>
                  <td colSpan={2} className="py-3 px-4 sm:px-5 font-mono text-xs text-slate-600 tabular-nums">
                    {openDate} – {closeDate}
                  </td>
                </tr>
              </tfoot>
            </table>
          )}
        </div>
      </div>

      {/* 4-Week Vacation Roadmap & Synchronous Sessions */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 space-y-4">
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-[#1B2A4E]">{t.weeksHeading}</h3>
          <p className="text-sm text-slate-600">{t.weeksNote}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {VACATION_WEEKS.map((w) => (
            <div
              key={w.week}
              className={`rounded-lg border p-4 flex flex-col justify-between gap-3 ${
                w.hasSync
                  ? 'bg-[#F7F9FC] border-slate-200'
                  : 'bg-amber-50/50 border-amber-200'
              }`}
            >
              <div className="space-y-1.5">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-display font-bold text-sm text-[#1B2A4E]">
                    {lang === 'es' ? `Semana ${w.week}` : `Week ${w.week}`}
                  </span>
                  <span className="font-mono text-xs text-slate-500 tabular-nums">
                    {w.range[lang]}
                  </span>
                </div>
                <p
                  className={`text-xs font-semibold ${
                    w.hasSync ? 'text-[#0273B5]' : 'text-amber-900'
                  }`}
                >
                  {w.syncSessions[lang]}
                </p>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-200/70">
                {w.focus[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Critical Hard Cutoff Notice (Saturday 19 December) */}
      <div
        role="alert"
        className="bg-red-50 border border-red-200 rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-start gap-4"
      >
        <div className="w-10 h-10 rounded-lg bg-red-100 text-red-700 flex items-center justify-center shrink-0">
          <AlertOctagon className="w-5 h-5" aria-hidden="true" />
        </div>
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs font-semibold text-red-800">
            <span>{t.cutoffLabel}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono tabular-nums">{t.cutoffDate}</span>
          </div>
          <p className="text-sm sm:text-base font-bold text-red-950 leading-snug">
            {t.cutoffText}
          </p>
        </div>
      </div>

      {/* Official Cohort 6 Calendar Image Modal */}
      {showCalendarModal && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="calendar-modal-title"
          onClick={() => setShowCalendarModal(false)}
        >
          <div
            className="bg-white rounded-xl max-w-5xl w-full overflow-hidden border border-slate-200 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200">
              <h3 id="calendar-modal-title" className="font-display font-bold text-base text-[#1B2A4E]">
                {t.modalTitle}
              </h3>
              <button
                type="button"
                onClick={() => setShowCalendarModal(false)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" aria-hidden="true" />
                {t.modalClose}
              </button>
            </div>
            <div className="p-4 sm:p-6 bg-slate-50 max-h-[80vh] overflow-auto">
              <img
                src={CALENDAR_IMAGE_PATH}
                alt={t.modalTitle}
                referrerPolicy="no-referrer"
                className="w-full h-auto rounded-lg border border-slate-200 bg-white"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
