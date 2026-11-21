export type Language = 'es' | 'en';

export const UCN_LOGO_URL = 'https://ucn.edu.co/wp-content/uploads/2023/12/ucn-logosimbolo.svg';
export const CALENDAR_IMAGE_PATH = '/assets/aistudio/CALENDARIO_COHORTE_6_-_2026_9028e24e.png';
export const METHODOLOGY_PDF_PATH = '/assets/aistudio/METODOLOGIA_DEL_CURSO_VACACIONAL_75efa68a.pdf';
export const INSTRUCTOR_EMAIL = 'jcarcilah@ucn.edu.co';
export const MIN_PASSING_GRADE = 3.5;

export interface EvaluationItem {
  id: string;
  unitNumber?: number;
  label: { es: string; en: string };
  category: 'tracking' | 'task';
  weight: number;
  startDate: { es: string; en: string };
  endDate: { es: string; en: string };
  description: { es: string; en: string };
}

export const EVALUATION_ITEMS: EvaluationItem[] = [
  {
    id: 'tracking',
    label: {
      es: 'Sesión de seguimiento académico',
      en: 'Academic Follow-up Session',
    },
    category: 'tracking',
    weight: 5,
    startDate: { es: '23 de noviembre', en: '23 November' },
    endDate: { es: '18 de diciembre', en: '18 December' },
    description: {
      es: 'Única sesión durante toda la cohorte; puede programarse en cualquier momento del mes de clase.',
      en: 'Single follow-up session across the entire cohort; may be scheduled at any point during the course month.',
    },
  },
  {
    id: 'task-1',
    unitNumber: 1,
    label: { es: 'Tarea 1 (Task 1)', en: 'Task 1 (Tarea 1)' },
    category: 'task',
    weight: 15,
    startDate: { es: '23 de noviembre', en: '23 November' },
    endDate: { es: '18 de diciembre', en: '18 December' },
    description: {
      es: 'Actividad de producción Unidad 1 creada y calificada por el docente.',
      en: 'Unit 1 production activity created and marked by the tutor.',
    },
  },
  {
    id: 'task-2',
    unitNumber: 2,
    label: { es: 'Tarea 2 (Task 2)', en: 'Task 2 (Tarea 2)' },
    category: 'task',
    weight: 15,
    startDate: { es: '23 de noviembre', en: '23 November' },
    endDate: { es: '18 de diciembre', en: '18 December' },
    description: {
      es: 'Actividad de producción Unidad 2 creada y calificada por el docente.',
      en: 'Unit 2 production activity created and marked by the tutor.',
    },
  },
  {
    id: 'task-3',
    unitNumber: 3,
    label: { es: 'Tarea 3 (Task 3)', en: 'Task 3 (Tarea 3)' },
    category: 'task',
    weight: 15,
    startDate: { es: '23 de noviembre', en: '23 November' },
    endDate: { es: '18 de diciembre', en: '18 December' },
    description: {
      es: 'Actividad de producción Unidad 3 creada y calificada por el docente.',
      en: 'Unit 3 production activity created and marked by the tutor.',
    },
  },
  {
    id: 'task-4',
    unitNumber: 4,
    label: { es: 'Tarea 4 (Task 4)', en: 'Task 4 (Tarea 4)' },
    category: 'task',
    weight: 15,
    startDate: { es: '23 de noviembre', en: '23 November' },
    endDate: { es: '18 de diciembre', en: '18 December' },
    description: {
      es: 'Actividad de producción Unidad 4 creada y calificada por el docente.',
      en: 'Unit 4 production activity created and marked by the tutor.',
    },
  },
  {
    id: 'task-5',
    unitNumber: 5,
    label: { es: 'Tarea 5 (Task 5)', en: 'Task 5 (Tarea 5)' },
    category: 'task',
    weight: 15,
    startDate: { es: '23 de noviembre', en: '23 November' },
    endDate: { es: '18 de diciembre', en: '18 December' },
    description: {
      es: 'Actividad de producción Unidad 5 creada y calificada por el docente.',
      en: 'Unit 5 production activity created and marked by the tutor.',
    },
  },
  {
    id: 'task-6',
    unitNumber: 6,
    label: { es: 'Tarea 6 (Task 6)', en: 'Task 6 (Tarea 6)' },
    category: 'task',
    weight: 20,
    startDate: { es: '23 de noviembre', en: '23 November' },
    endDate: { es: '18 de diciembre', en: '18 December' },
    description: {
      es: 'Actividad de producción final Unidad 6 (mayor ponderación: 20%).',
      en: 'Final Unit 6 production activity (highest weighting: 20%).',
    },
  },
];

export interface TrackingRow {
  rowNumber: number;
  concept: { es: string; en: string };
  period: { es: string; en: string };
  isMilestone?: boolean;
}

export const TRACKING_TABLE_ROWS: TrackingRow[] = [
  {
    rowNumber: 1,
    concept: { es: 'Inicio del curso', en: 'Course Start' },
    period: { es: '23 de noviembre', en: '23 November' },
    isMilestone: true,
  },
  {
    rowNumber: 2,
    concept: { es: 'Tema Unidad 1', en: 'Unit 1 Topic' },
    period: { es: '23 de noviembre a 18 de diciembre', en: '23 November to 18 December' },
  },
  {
    rowNumber: 3,
    concept: { es: 'Tema Unidad 2', en: 'Unit 2 Topic' },
    period: { es: '23 de noviembre a 18 de diciembre', en: '23 November to 18 December' },
  },
  {
    rowNumber: 4,
    concept: { es: 'Tema Unidad 3', en: 'Unit 3 Topic' },
    period: { es: '23 de noviembre a 18 de diciembre', en: '23 November to 18 December' },
  },
  {
    rowNumber: 5,
    concept: { es: 'Tema Unidad 4', en: 'Unit 4 Topic' },
    period: { es: '23 de noviembre a 18 de diciembre', en: '23 November to 18 December' },
  },
  {
    rowNumber: 6,
    concept: { es: 'Tema Unidad 5', en: 'Unit 5 Topic' },
    period: { es: '23 de noviembre a 18 de diciembre', en: '23 November to 18 December' },
  },
  {
    rowNumber: 7,
    concept: { es: 'Tema Unidad 6', en: 'Unit 6 Topic' },
    period: { es: '23 de noviembre a 18 de diciembre', en: '23 November to 18 December' },
  },
  {
    rowNumber: 8,
    concept: { es: 'Cierre', en: 'Course Closing' },
    period: { es: '18 de diciembre', en: '18 December' },
    isMilestone: true,
  },
];

export interface WeekSchedule {
  week: number;
  range: { es: string; en: string };
  syncSessions: { es: string; en: string };
  hasSync: boolean;
  focus: { es: string; en: string };
}

export const VACATION_WEEKS: WeekSchedule[] = [
  {
    week: 1,
    range: { es: '23 nov – 29 nov', en: '23 Nov – 29 Nov' },
    syncSessions: { es: 'Lunes 23 nov y Sábado 28 nov (Opcional)', en: 'Mon 23 Nov & Sat 28 Nov (Optional)' },
    hasSync: true,
    focus: {
      es: 'Encuesta «Conducta Pedagógica» (obligatoria primero) · Inicio Unidades 1–2',
      en: '“Conducta Pedagógica” survey (mandatory first) · Begin Units 1–2',
    },
  },
  {
    week: 2,
    range: { es: '30 nov – 6 dic', en: '30 Nov – 6 Dec' },
    syncSessions: { es: 'Lunes 30 nov y Sábado 5 dic (Opcional)', en: 'Mon 30 Nov & Sat 5 Dec (Optional)' },
    hasSync: true,
    focus: {
      es: 'Avance en Unidades interactivas y Tareas · Programar Seguimiento Académico (5%)',
      en: 'Progress on interactive units & Tasks · Book Academic Follow-up Session (5%)',
    },
  },
  {
    week: 3,
    range: { es: '7 dic – 13 dic', en: '7 Dec – 13 Dec' },
    syncSessions: { es: 'Lunes 7 dic y Sábado 12 dic (Opcional)', en: 'Mon 7 Dec & Sat 12 Dec (Optional)' },
    hasSync: true,
    focus: {
      es: 'Consolidación Unidades 4–5 · Revisión de retroalimentación en Canvas',
      en: 'Consolidate Units 4–5 · Review tutor feedback in Canvas',
    },
  },
  {
    week: 4,
    range: { es: '14 dic – 18 dic', en: '14 Dec – 18 Dec' },
    syncSessions: {
      es: 'Última semana: sin encuentros sincrónicos',
      en: 'Final week: no synchronous sessions',
    },
    hasSync: false,
    focus: {
      es: 'Entrega final de Tarea 6 (20%) y actividades pendientes · Cierre total el viernes 18 de dic',
      en: 'Final submission of Task 6 (20%) & pending work · Official close Friday 18 Dec',
    },
  },
];

export interface ChecklistItem {
  id: string;
  priority?: boolean;
  label: { es: string; en: string };
  detail: { es: string; en: string };
}

export const COURSE_CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: 'conducta-pedagogica',
    priority: true,
    label: {
      es: 'Responder la encuesta «CONDUCTA PEDAGÓGICA»',
      en: 'Complete the “CONDUCTA PEDAGÓGICA” (Pedagogical Behaviour) survey',
    },
    detail: {
      es: 'Actividad obligatoria #1 antes de comenzar a desarrollar cualquier tarea.',
      en: 'Mandatory #1 activity before starting any assessed task.',
    },
  },
  {
    id: 'anuncios-diarios',
    label: {
      es: 'Revisar la sección «Anuncios» diariamente',
      en: 'Check the “Announcements” (Anuncios) section daily',
    },
    detail: {
      es: 'Recomendación institucional de la FUCN para comunicados y avisos del docente.',
      en: 'FUCN institutional recommendation for all course updates and notices.',
    },
  },
  {
    id: 'seguimiento-academico',
    label: {
      es: 'Programar y cumplir la Sesión de Seguimiento Académico (5%)',
      en: 'Book and attend the Academic Follow-up Session (5%)',
    },
    detail: {
      es: 'Única sesión durante la cohorte; puede agendarse en cualquier momento del mes.',
      en: 'One single session for the entire cohort; may be scheduled at any point during the month.',
    },
  },
  {
    id: 'unidades-interactivas',
    label: {
      es: 'Estudiar las 6 Unidades Interactivas en plataforma (0%)',
      en: 'Practise all 6 Interactive Units on Canvas (0%)',
    },
    detail: {
      es: 'Componente de aprendizaje base; no tienen calificación pero preparan tus Tareas.',
      en: 'Core learning component; unassessed, designed to prepare you for the marked Tasks.',
    },
  },
  {
    id: 'tareas-1-5',
    label: {
      es: 'Entregar Tareas 1 a 5 en la sección «Tareas» (15% c/u · 75%)',
      en: 'Submit Tasks 1 to 5 in “Assignments” (15% each · 75%)',
    },
    detail: {
      es: 'Disponibles del 23 de noviembre al 18 de diciembre de 2026.',
      en: 'Available from 23 November to 18 December 2026.',
    },
  },
  {
    id: 'tarea-6',
    label: {
      es: 'Entregar la Tarea 6 antes del 18 de diciembre (20%)',
      en: 'Submit Task 6 before 18 December (20%)',
    },
    detail: {
      es: 'Actividad de mayor peso porcentual. A partir del 19 de dic no se habilitan tareas.',
      en: 'Highest-weighted task. From 19 Dec onwards no tasks will be reopened.',
    },
  },
];

export const COPY = {
  es: {
    brandWordmark: 'FUCN · ESL 2026-4',
    nav: {
      overview: 'Inicio',
      evaluation: 'Evaluación',
      schedule: 'Cronograma',
      policies: 'Normas',
      contact: 'Contacto',
    },
    ctaTop: 'Simulador de nota',
    langLabel: 'Idioma',
    heroKicker: 'Fundación Universitaria Católica del Norte (FUCN) · Periodo 2026-4 · Cohorte 6 - 2026',
    heroTitle: 'Información general del curso vacacional y criterios de evaluación',
    heroLead:
      'Bienvenido al curso vacacional de inglés (4 semanas). Aquí encontrarás la metodología oficial, la distribución exacta de porcentajes, el cronograma de la Cohorte 6 y las normas de comunicación en Canvas.',
    metrics: [
      { label: 'Nota mínima aprobatoria', value: '3.5 / 5.0', sub: 'Escala oficial FUCN' },
      { label: 'Duración del curso', value: '4 semanas', sub: '23 nov – 18 dic 2026' },
      { label: 'Encuentros sincrónicos', value: 'Lun y Sáb', sub: 'Asistencia opcional · No última sem.' },
      { label: 'Cierre definitivo', value: '18 dic', sub: 'Desde 19 dic no se habilitan tareas' },
    ],
    mandatoryAlertLabel: 'Primera actividad obligatoria',
    mandatoryAlertTitle: 'Encuesta «CONDUCTA PEDAGÓGICA»',
    mandatoryAlertBody:
      'IMPORTANTE: Antes de comenzar a desarrollar las tareas, deben responder la encuesta denominada «CONDUCTA PEDAGÓGICA». Es fundamental que realicen esta actividad al iniciar el curso. Insisto: esta debe ser la primera actividad que desarrollen.',
    checklistTitle: 'Ruta de seguimiento del estudiante',
    checklistSubtitle:
      'Marca tus avances durante las cuatro semanas. Tu progreso se guarda localmente en este navegador.',
    checklistReset: 'Reiniciar lista',
    checklistComplete: 'completados',
    evalSectionIndex: '01. Criterios y porcentajes de evaluación',
    evalSectionTitle: 'Distribución oficial de la nota final (100%)',
    evalSectionIntro:
      'En la Fundación Universitaria Católica del Norte (FUCN), institución en la que usted se ha inscrito para estudiar, la nota mínima aprobatoria es 3.5. La nota final se compone de una sesión de seguimiento académico (5%) y seis actividades de producción o Tasks (95%). Las seis unidades interactivas hacen parte del componente de aprendizaje (0%) y no tienen calificación.',
    evalSummaryCards: [
      {
        pct: '5%',
        title: 'Sesión de seguimiento académico',
        detail:
          'Corresponde a 1 única sesión de seguimiento académico durante toda la cohorte (el mes de duración del curso). Puede programarse en cualquier momento a lo largo del mes de clase.',
        tone: 'blue' as const,
      },
      {
        pct: '0%',
        title: '6 Unidades interactivas en plataforma',
        detail:
          'Montadas en plataforma como componente de aprendizaje temático. No tienen calificación y no se ubican como tareas calificables.',
        tone: 'green' as const,
      },
      {
        pct: '95%',
        title: '6 Tareas creadas y calificadas por el docente',
        detail:
          'Actividades de producción (Tareas o Tasks) disponibles en la sección «Tareas»: Tareas 1 a 5 valen 15% cada una (75%) y Tarea 6 vale 20% (Total: 95%).',
        tone: 'orange' as const,
      },
    ],
    calcTitle: 'Simulador interactivo de nota final',
    calcSubtitle:
      'Ajusta las calificaciones estimadas u obtenidas (0.0 a 5.0) para proyectar tu nota definitiva frente al mínimo aprobatorio de 3.5.',
    calcPresets: {
      minPass: 'Meta mínima (3.5)',
      high: 'Desempeño alto (4.5)',
      reset: 'Reiniciar a 0.0',
    },
    calcResultLabel: 'Nota definitiva proyectada',
    calcPassStatus: 'Aprobado · Alcanza el mínimo de 3.5',
    calcFailPrefix: 'Pendiente · Faltan',
    calcFailSuffix: 'puntos para llegar a 3.5',
    calcContribution: 'Aporte',
    scheduleSectionIndex: '02. Organización y cronograma Cohorte 6 - 2026',
    scheduleSectionTitle: 'Calendario de cuatro semanas y fechas de entrega',
    scheduleSectionIntro:
      'Es muy importante que tengan presentes las fechas de cierre de todas las unidades para evitar inconvenientes al presentar las actividades. El calendario oficial también se encuentra en la sección «Cronograma del curso» de Canvas.',
    viewOfficialCalendar: 'Ver imagen oficial Cohorte 6',
    downloadPdf: 'Abrir PDF oficial',
    tabs: {
      unified: 'Resumen por unidad',
      tracking: 'Seguimiento (5%)',
      interactive: 'Unidades interactivas (0%)',
      tasks: 'Tareas calificadas (95%)',
    },
    weeksHeading: 'Encuentros sincrónicos por semana (Lunes y Sábado)',
    weeksNote:
      'Durante cada semana tendremos dos encuentros sincrónicos (lunes y sábado), excepto durante la última semana. La asistencia a los encuentros sincrónicos es opcional.',
    cutoffLabel: 'Aviso crítico de cierre',
    cutoffDate: 'Sábado 19 de diciembre de 2026',
    cutoffText:
      'A PARTIR DEL SÁBADO 19 DE DICIEMBRE NO HABILITARÉ NINGUNA TAREA NI RESPONDERÉ NINGÚN MENSAJE RELACIONADO CON EL CURSO. AGRADEZCO SU COMPRENSIÓN.',
    policiesSectionIndex: '03. Metodología, normativa y comunicación',
    policiesSectionTitle: 'Reglas de Canvas, situaciones especiales y contacto',
    canvasGuideTitle: 'Comunicación e información dentro de Canvas',
    canvasItems: [
      {
        area: 'Sección «Anuncios»',
        rule: 'Toda la información y los comunicados relacionados con el curso estarán disponibles aquí. La FUCN recomienda revisar esta sección diariamente.',
      },
      {
        area: 'Sección «Tareas»',
        rule: 'Todas las actividades que tengan calificación estarán disponibles aquí, con excepción de las actividades interactivas de las seis unidades temáticas (componente de aprendizaje sin calificación).',
      },
      {
        area: 'Sección «Cronograma del curso»',
        rule: 'Contiene el calendario oficial con las fechas de apertura (23 de noviembre) y cierre (18 de diciembre) de todas las unidades.',
      },
      {
        area: 'Bandeja de entrada de Canvas',
        rule: 'Canal oficial y exclusivo para la comunicación directa con el docente durante el curso.',
      },
    ],
    specialSituationsTitle: 'Situaciones especiales y solicitudes',
    specialSituationsBody:
      'Cuando se les presenten dificultades que les impidan cumplir con las actividades dentro de los plazos establecidos, como incapacidades médicas u otras situaciones contempladas en el Reglamento Estudiantil, deberán informar oportunamente y presentar los respectivos soportes dentro de los tiempos establecidos.',
    specialSituationsStrict:
      'Condición estricta: Las solicitudes que no incluyan las evidencias requeridas o que se envíen por fuera de los plazos establecidos no serán atendidas.',
    contactTitle: 'Medios de comunicación con el docente',
    contactPrimaryHeading: 'Canal exclusivo: Bandeja de entrada de Canvas',
    contactPrimaryBody:
      'Nuestro medio de comunicación será exclusivamente la bandeja de entrada de Canvas. De esta manera, evitaremos la pérdida de mensajes y podré brindarles una atención más organizada y oportuna.',
    contactInstitutionalNote:
      'Recuerden utilizar siempre su correo electrónico institucional para las comunicaciones relacionadas con la FUCN.',
    contactEmailLabel: 'Correo electrónico institucional del docente (solo contingencia)',
    contactClarificationTitle: 'Nota aclaratoria',
    contactClarificationBody:
      'Este correo podrá utilizarse únicamente en caso de que la función de mensajes de la plataforma Canvas presente inconvenientes.',
    copyEmail: 'Copiar correo',
    copiedEmail: 'Correo copiado',
    closingWish: '¡Les deseo muchos éxitos en este proceso de formación!',
    footerText: 'Fundación Universitaria Católica del Norte (FUCN) · Curso Vacacional ESL · Periodo 2026-4 · Cohorte 6',
    modalClose: 'Cerrar vista previa',
    modalTitle: 'Calendario Oficial · Cohorte 6 - 2026',
    tableHeaders: {
      unit: 'Unidad',
      item: 'N.º',
      concept: 'Componente / Actividad',
      weight: 'Porcentaje',
      from: 'Desde',
      until: 'Hasta',
      period: 'Fechas vigentes',
      interactiveCol: 'Unidad interactiva (0%)',
      taskCol: 'Tarea calificada (95%)',
      total: 'Total tareas',
    },
  },
  en: {
    brandWordmark: 'FUCN · ESL 2026-4',
    nav: {
      overview: 'Overview',
      evaluation: 'Assessment',
      schedule: 'Timetable',
      policies: 'Regulations',
      contact: 'Contact',
    },
    ctaTop: 'Mark Simulator',
    langLabel: 'Language',
    heroKicker: 'Fundación Universitaria Católica del Norte (FUCN) · Term 2026-4 · Cohort 6 - 2026',
    heroTitle: 'Vacation Course Overview, Methodology & Assessment Criteria',
    heroLead:
      'Welcome to your 4-week ESL vacation course. Here you will find the official FUCN methodology, exact assessment weightings, the Cohort 6 timetable, and Canvas communication rules.',
    metrics: [
      { label: 'Minimum pass mark', value: '3.5 / 5.0', sub: 'Official FUCN scale' },
      { label: 'Course duration', value: '4 weeks', sub: '23 Nov – 18 Dec 2026' },
      { label: 'Synchronous sessions', value: 'Mon & Sat', sub: 'Optional attendance · Not final wk' },
      { label: 'Final closing date', value: '18 Dec', sub: 'No reopenings from 19 Dec onwards' },
    ],
    mandatoryAlertLabel: 'Mandatory First Activity',
    mandatoryAlertTitle: '“CONDUCTA PEDAGÓGICA” Survey',
    mandatoryAlertBody:
      'IMPORTANT: Before starting any assignments, you must complete the survey entitled “CONDUCTA PEDAGÓGICA” (Pedagogical Behaviour). It is essential that you complete this activity at the start of the course. Please note: this must be the very first activity you complete.',
    checklistTitle: 'Student Readiness & Progress Checklist',
    checklistSubtitle:
      'Tick off your milestones across the four-week vacation term. Your progress is saved locally in this browser.',
    checklistReset: 'Reset list',
    checklistComplete: 'completed',
    evalSectionIndex: '01. Assessment Criteria & Weightings',
    evalSectionTitle: 'Official Final Mark Distribution (100%)',
    evalSectionIntro:
      'At Fundación Universitaria Católica del Norte (FUCN), the institution in which you have enrolled to study, the minimum pass mark is 3.5. Your final mark comprises one Academic Follow-up Session (5%) and six production activities / Tasks (95%). The six interactive units form part of the learning component (0%) and are not assessed.',
    evalSummaryCards: [
      {
        pct: '5%',
        title: 'Academic Follow-up Session',
        detail:
          'Corresponds to 1 single academic follow-up session throughout the entire cohort (the one-month course duration). It may be scheduled at any point during the month.',
        tone: 'blue' as const,
      },
      {
        pct: '0%',
        title: '6 Interactive Platform Units',
        detail:
          'Hosted on the platform as the thematic learning component. They carry no mark and are not listed as assessed assignments.',
        tone: 'green' as const,
      },
      {
        pct: '95%',
        title: '6 Tutor-Created & Marked Tasks',
        detail:
          'Production activities (Tareas / Tasks) located in the “Assignments” (Tareas) section: Tasks 1–5 are worth 15% each (75%) and Task 6 is worth 20% (Total: 95%).',
        tone: 'orange' as const,
      },
    ],
    calcTitle: 'Interactive Final Mark Simulator',
    calcSubtitle:
      'Adjust your expected or achieved marks (0.0 to 5.0) to project your final result against FUCN’s 3.5 minimum pass mark.',
    calcPresets: {
      minPass: 'Pass target (3.5)',
      high: 'Distinction (4.5)',
      reset: 'Reset to 0.0',
    },
    calcResultLabel: 'Projected final mark',
    calcPassStatus: 'Pass · Meets the 3.5 minimum mark',
    calcFailPrefix: 'Below pass mark · Requires',
    calcFailSuffix: 'more points to reach 3.5',
    calcContribution: 'Weighted',
    scheduleSectionIndex: '02. Course Organisation & Cohort 6 - 2026 Timetable',
    scheduleSectionTitle: 'Four-Week Timetable & Submission Deadlines',
    scheduleSectionIntro:
      'It is essential to keep the closing dates of all units in mind to avoid any inconvenience when submitting activities. The official calendar is also available in the “Cronograma del curso” section in Canvas.',
    viewOfficialCalendar: 'View Official Cohort 6 Image',
    downloadPdf: 'Open Official PDF',
    tabs: {
      unified: 'Unified Unit View',
      tracking: 'Follow-up (5%)',
      interactive: 'Interactive Units (0%)',
      tasks: 'Marked Tasks (95%)',
    },
    weeksHeading: 'Weekly Synchronous Meetings (Monday & Saturday)',
    weeksNote:
      'Each week we will hold two synchronous sessions (Monday and Saturday), except during the final week. Attendance at synchronous sessions is optional.',
    cutoffLabel: 'Critical Closing Notice',
    cutoffDate: 'Saturday, 19 December 2026',
    cutoffText:
      'FROM SATURDAY, 19 DECEMBER ONWARDS, NO ASSIGNMENTS WILL BE REOPENED AND NO COURSE-RELATED MESSAGES WILL BE ANSWERED. THANK YOU FOR YOUR UNDERSTANDING.',
    policiesSectionIndex: '03. Methodology, Regulations & Communication',
    policiesSectionTitle: 'Canvas Navigation, Special Requests & Tutor Contact',
    canvasGuideTitle: 'Course Information & Navigation in Canvas',
    canvasItems: [
      {
        area: '“Announcements” (Anuncios)',
        rule: 'All course information and official notices are published here. FUCN recommends checking this section daily.',
      },
      {
        area: '“Assignments” (Tareas)',
        rule: 'All assessed activities are available here, with the exception of the interactive activities in the six thematic units (unassessed learning component).',
      },
      {
        area: '“Course Schedule” (Cronograma del curso)',
        rule: 'Displays the official Cohort 6 timetable with opening (23 November) and closing (18 December) dates for every unit.',
      },
      {
        area: 'Canvas Inbox (Mensajes)',
        rule: 'The exclusive, official channel for direct communication with your tutor throughout the course.',
      },
    ],
    specialSituationsTitle: 'Special Situations & Requests',
    specialSituationsBody:
      'Should difficulties arise that prevent you from completing activities within the established deadlines—such as medical certificates (incapacidades médicas) or other circumstances set out in the Student Regulations (Reglamento Estudiantil)—you must notify the tutor promptly and submit the relevant supporting evidence within the established timeframes.',
    specialSituationsStrict:
      'Strict condition: Requests that do not include the required supporting evidence or are submitted outside the established deadlines will not be considered.',
    contactTitle: 'Communication Channels',
    contactPrimaryHeading: 'Exclusive Channel: Canvas Inbox',
    contactPrimaryBody:
      'Our communication channel will be exclusively the Canvas Inbox. This avoids lost messages and enables me to provide more organised and timely support.',
    contactInstitutionalNote:
      'Please remember to always use your institutional email address for any FUCN-related correspondence.',
    contactEmailLabel: 'Tutor Institutional Email (contingency only)',
    contactClarificationTitle: 'Clarifying Note',
    contactClarificationBody:
      'This email address may be used ONLY if the Canvas messaging feature experiences technical difficulties.',
    copyEmail: 'Copy email',
    copiedEmail: 'Email copied',
    closingWish: 'Wishing you every success in this learning process!',
    footerText: 'Fundación Universitaria Católica del Norte (FUCN) · ESL Vacation Course · Term 2026-4 · Cohort 6',
    modalClose: 'Close preview',
    modalTitle: 'Official Timetable · Cohort 6 - 2026',
    tableHeaders: {
      unit: 'Unit',
      item: 'No.',
      concept: 'Component / Activity',
      weight: 'Weighting',
      from: 'From',
      until: 'Until',
      period: 'Active Dates',
      interactiveCol: 'Interactive Unit (0%)',
      taskCol: 'Marked Task (95%)',
      total: 'Tasks Total',
    },
  },
} as const;
