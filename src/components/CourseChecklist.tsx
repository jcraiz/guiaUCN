import { useEffect, useState } from 'react';
import { Check, RotateCcw } from 'lucide-react';
import { COPY, COURSE_CHECKLIST_ITEMS, Language } from '../data/courseData';

interface CourseChecklistProps {
  lang: Language;
}

const STORAGE_KEY = 'ucn_esl_2026_4_checklist_v1';

export function CourseChecklist({ lang }: CourseChecklistProps) {
  const t = COPY[lang];
  const [checkedIds, setCheckedIds] = useState<string[]>(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {
      // Ignore storage errors inside restricted iframes
    }
    return [];
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedIds));
    } catch {
      // Ignore storage errors inside restricted iframes
    }
  }, [checkedIds]);

  const toggleItem = (id: string) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const resetChecklist = () => {
    setCheckedIds([]);
  };

  const total = COURSE_CHECKLIST_ITEMS.length;
  const completedCount = checkedIds.length;
  const progressPercent = Math.round((completedCount / total) * 100);

  return (
    <section
      aria-labelledby="checklist-heading"
      className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 border-b border-slate-100">
        <div>
          <h2 id="checklist-heading" className="text-lg font-bold text-[#1B2A4E]">
            {t.checklistTitle}
          </h2>
          <p className="text-sm text-slate-600 mt-0.5">{t.checklistSubtitle}</p>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <div className="font-mono text-sm font-semibold text-[#1B2A4E] tabular-nums whitespace-nowrap">
            {completedCount} / {total} {t.checklistComplete} ({progressPercent}%)
          </div>
          {completedCount > 0 && (
            <button
              type="button"
              onClick={resetChecklist}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-[#1B2A4E] transition-colors whitespace-nowrap shrink-0 cursor-pointer py-1 px-2 rounded hover:bg-slate-100"
            >
              <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
              {t.checklistReset}
            </button>
          )}
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden my-4" role="progressbar" aria-valuenow={progressPercent} aria-valuemin={0} aria-valuemax={100}>
        <div
          className="h-full bg-[#0273B5] transition-transform duration-200 origin-left"
          style={{ transform: `scaleX(${progressPercent / 100})` }}
        />
      </div>

      <ul className="divide-y divide-slate-100">
        {COURSE_CHECKLIST_ITEMS.map((item, idx) => {
          const isChecked = checkedIds.includes(item.id);
          return (
            <li key={item.id} className="py-3 first:pt-1 last:pb-1">
              <label className="flex items-start gap-3.5 cursor-pointer group">
                <span className="relative flex items-center justify-center mt-0.5 shrink-0">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleItem(item.id)}
                    className="peer sr-only"
                  />
                  <span
                    className={`w-5 h-5 rounded border flex items-center justify-center transition-colors duration-150 ${
                      isChecked
                        ? 'bg-[#0273B5] border-[#0273B5] text-white'
                        : item.priority
                        ? 'border-amber-600 bg-amber-50 group-hover:border-[#0273B5]'
                        : 'border-slate-300 bg-white group-hover:border-[#0273B5]'
                    }`}
                  >
                    {isChecked && <Check className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />}
                  </span>
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                    <span className="font-mono text-xs text-slate-400 tabular-nums">
                      0{idx + 1}.
                    </span>
                    <span
                      className={`text-sm font-semibold transition-colors ${
                        isChecked
                          ? 'line-through text-slate-400'
                          : item.priority
                          ? 'text-[#1B2A4E]'
                          : 'text-slate-900'
                      }`}
                    >
                      {item.label[lang]}
                    </span>
                    {item.priority && !isChecked && (
                      <span className="text-xs font-semibold text-amber-800">
                        · {lang === 'es' ? 'Prioridad #1' : 'Priority #1'}
                      </span>
                    )}
                  </div>
                  <p className={`text-xs mt-0.5 leading-relaxed ${isChecked ? 'text-slate-400' : 'text-slate-600'}`}>
                    {item.detail[lang]}
                  </p>
                </div>
              </label>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
