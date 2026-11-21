import { useState } from 'react';
import {
  Check,
  Copy,
  FileWarning,
  Inbox,
  Info,
  Mail,
  ShieldCheck,
} from 'lucide-react';
import { COPY, INSTRUCTOR_EMAIL, Language } from '../data/courseData';

interface PoliciesAndContactProps {
  lang: Language;
}

export function PoliciesAndContact({ lang }: PoliciesAndContactProps) {
  const t = COPY[lang];
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(INSTRUCTOR_EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback copy method inside restricted iframes
      const textarea = document.createElement('textarea');
      textarea.value = INSTRUCTOR_EMAIL;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    }
  };

  return (
    <section id="normas" className="scroll-mt-20 space-y-8">
      {/* Section Header */}
      <div className="space-y-2 max-w-3xl">
        <p className="text-xs font-semibold text-[#0273B5] tracking-wide">
          {t.policiesSectionIndex}
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1B2A4E] tracking-tight">
          {t.policiesSectionTitle}
        </h2>
      </div>

      {/* Grid: Canvas Navigation + Special Situations */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Canvas Navigation Guide */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-5 sm:p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-[#1B2A4E] pb-3 border-b border-slate-100">
              {t.canvasGuideTitle}
            </h3>
            <dl className="divide-y divide-slate-100 mt-1">
              {t.canvasItems.map((item) => (
                <div key={item.area} className="py-3.5 grid grid-cols-1 sm:grid-cols-12 gap-2">
                  <dt className="sm:col-span-4 text-sm font-bold text-[#1B2A4E]">
                    {item.area}
                  </dt>
                  <dd className="sm:col-span-8 text-sm text-slate-600 leading-relaxed">
                    {item.rule}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Special Situations & Student Regulations */}
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-xl p-5 sm:p-6 flex flex-col justify-between gap-5">
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
              <ShieldCheck className="w-5 h-5 text-[#0273B5] shrink-0" aria-hidden="true" />
              <h3 className="text-lg font-bold text-[#1B2A4E]">
                {t.specialSituationsTitle}
              </h3>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              {t.specialSituationsBody}
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
            <FileWarning className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-xs sm:text-sm font-semibold text-amber-950 leading-relaxed">
              {t.specialSituationsStrict}
            </p>
          </div>
        </div>
      </div>

      {/* Section 6: Communication Channels & Instructor Contact */}
      <div
        id="contacto"
        className="scroll-mt-20 bg-white border border-slate-200 rounded-xl p-5 sm:p-7 space-y-6"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Primary Exclusive Channel: Canvas Inbox */}
          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#1B2A4E] text-white flex items-center justify-center shrink-0">
                <Inbox className="w-4 h-4" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-[#1B2A4E]">
                {t.contactPrimaryHeading}
              </h3>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              {t.contactPrimaryBody}
            </p>
            <p className="text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
              {t.contactInstitutionalNote}
            </p>
          </div>

          {/* Contingency Email + Clarifying Note */}
          <div className="lg:col-span-6 bg-[#F7F9FC] border border-slate-200 rounded-xl p-5 space-y-4">
            <div className="space-y-1.5">
              <p className="text-xs font-semibold text-slate-500">
                {t.contactEmailLabel}
              </p>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <a
                  href={`mailto:${INSTRUCTOR_EMAIL}`}
                  className="inline-flex items-center gap-2 font-mono text-sm sm:text-base font-semibold text-[#0273B5] hover:text-[#1B2A4E] underline underline-offset-4 break-all"
                >
                  <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                  {INSTRUCTOR_EMAIL}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    copied
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                      : 'bg-white border-slate-300 text-[#1B2A4E] hover:border-[#0273B5] hover:text-[#0273B5]'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" aria-hidden="true" />
                      {t.copiedEmail}
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      {t.copyEmail}
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Nota Aclaratoria */}
            <div className="pt-3 border-t border-slate-200 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-[#0273B5] shrink-0 mt-0.5" aria-hidden="true" />
              <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                <span className="font-bold text-[#1B2A4E]">
                  {t.contactClarificationTitle}:{' '}
                </span>
                {t.contactClarificationBody}
              </div>
            </div>
          </div>
        </div>

        {/* Warm Instructor Closing Wish */}
        <div className="pt-5 border-t border-slate-100 text-center">
          <p className="font-display text-base sm:text-lg font-bold text-[#1B2A4E]">
            {t.closingWish}
          </p>
        </div>
      </div>
    </section>
  );
}
