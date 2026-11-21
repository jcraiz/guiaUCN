import { useState } from 'react';
import { COPY, Language, UCN_LOGO_URL } from '../data/courseData';

interface HeaderProps {
  lang: Language;
  onJumpToCalculator: () => void;
}

export function Header({ lang, onJumpToCalculator }: HeaderProps) {
  const [logoError, setLogoError] = useState(false);
  const t = COPY[lang];

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand mark + single-line wordmark */}
        <a
          href="#inicio"
          className="flex items-center gap-3 whitespace-nowrap shrink-0 focus-visible:rounded"
          aria-label="Fundación Universitaria Católica del Norte - Inicio"
        >
          {!logoError ? (
            <img
              src={UCN_LOGO_URL}
              alt="Logo Fundación Universitaria Católica del Norte"
              referrerPolicy="no-referrer"
              onError={() => setLogoError(true)}
              className="h-9 w-auto object-contain shrink-0"
            />
          ) : (
            <div className="h-9 w-9 rounded-lg bg-[#1B2A4E] text-white flex items-center justify-center font-display font-bold text-sm shrink-0">
              UCN
            </div>
          )}
          <span className="font-display font-bold text-[15px] tracking-tight text-[#1B2A4E] hidden sm:inline whitespace-nowrap shrink-0">
            {t.brandWordmark}
          </span>
        </a>

        {/* Zone 2: 5 concise single-line text navigation links */}
        <nav
          aria-label="Navegación principal del curso"
          className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600"
        >
          <a
            href="#inicio"
            className="hover:text-[#1B2A4E] hover:underline underline-offset-4 decoration-[#0273B5] transition-colors whitespace-nowrap shrink-0"
          >
            {t.nav.overview}
          </a>
          <a
            href="#evaluacion"
            className="hover:text-[#1B2A4E] hover:underline underline-offset-4 decoration-[#0273B5] transition-colors whitespace-nowrap shrink-0"
          >
            {t.nav.evaluation}
          </a>
          <a
            href="#cronograma"
            className="hover:text-[#1B2A4E] hover:underline underline-offset-4 decoration-[#0273B5] transition-colors whitespace-nowrap shrink-0"
          >
            {t.nav.schedule}
          </a>
          <a
            href="#normas"
            className="hover:text-[#1B2A4E] hover:underline underline-offset-4 decoration-[#0273B5] transition-colors whitespace-nowrap shrink-0"
          >
            {t.nav.policies}
          </a>
          <a
            href="#contacto"
            className="hover:text-[#1B2A4E] hover:underline underline-offset-4 decoration-[#0273B5] transition-colors whitespace-nowrap shrink-0"
          >
            {t.nav.contact}
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={onJumpToCalculator}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#1B2A4E] hover:bg-[#0273B5] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
          >
            {t.ctaTop}
          </button>
        </div>
      </div>
    </header>
  );
}
