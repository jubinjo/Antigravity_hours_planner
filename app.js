/* AetherHours - Premium JavaScript Data & UI Engine */

// ==========================================
// 1. STATE, STORAGE & TRANSLATIONS MANAGEMENT
// ==========================================

const TRANSLATIONS = {
  en: {
    app_title: "AetherHours",
    app_subtitle: "Academic Year Workload Planner",
    app_title_full: "AetherHours - Academic Year Workload Planner",
    total_allocated: "Total Allocated",
    teaching_prepared: "Teaching (Prepared)",
    research_projects: "Research Projects",
    other_tasks: "Other Tasks",
    raw: "Raw",
    multiplier_effect: "Multiplier effect",
    includes_prep: "Includes preparation ratios",
    of_total_alloc: "of total allocation",
    of_total_sched: "of total scheduled hours",
    fill_rate_title: "Monthly Workload Fill Rate",
    fill_rate_subtitle: "Monthly workload comparison as a percentage of capacity target ({hours}h = 100%)",
    capacity_exceeded: "Capacity Exceeded",
    planned_entries: "Planned Entries",
    add_entry: "Add Entry",
    tab_active: "Active in Year",
    tab_all: "All Entries",
    tab_teaching: "Teaching",
    tab_research: "Research",
    tab_other: "Other",
    config_title: "Configuration & Settings",
    config_subtitle: "Customize course multipliers and annual targets.",
    annual_target: "Annual Target (Hours)",
    teaching_multipliers: "Teaching Prep Multipliers",
    multipliers_subtitle: "Multiplies teaching hours based on program type:",
    aps_multiplier: "APS Multiplier",
    ba_multiplier: "BA Multiplier",
    pg_multiplier: "PG Multiplier",
    save_config: "Save Configuration",
    toast_config_saved: "Configuration saved successfully!",
    data_portability: "Data Portability",
    portability_subtitle: "Backup your planner database or import a previous configuration.",
    export_plan: "Export Plan (JSON)",
    import_plan: "Import Plan (JSON)",
    reset_data: "Reset All Data",
    modal_add_title: "Add Planned Entry",
    modal_edit_title: "Edit Planned Entry",
    activity_category: "Activity Category",
    cat_course: "Teaching Course",
    cat_research: "Research Project",
    cat_other: "Other Task / Admin",
    name_label_course: "Course Name",
    name_label_research: "Research Project Name",
    name_label_other: "Task Name",
    course_project_name_placeholder: "e.g. Machine Learning I",
    program_level: "Program Level",
    annual_hours: "Annual Hours of Teaching",
    total_hours_research: "Total Allocated Research Hours",
    total_hours_other: "Total Allocated Task Hours",
    total_hours: "Total Allocated Hours",
    time_frame: "Time Frame Type",
    frame_duration: "Duration (Start Month to End Month)",
    frame_fixed: "Fixed Single Month",
    start_month: "Start Month",
    end_month: "End Month",
    planned_month: "Planned Month",
    cancel: "Cancel",
    save_entry: "Save Entry",
    critical_reset_title: "Critical: Reset Database?",
    reset_warning: "This action will completely wipe all courses, research projects, settings, and custom configurations from your planner.",
    reset_step_1: "Step 1 of 2: Are you sure you want to clear your entire database?",
    reset_tip: "Tip: Remember to Export Plan (JSON) to back up your current work!",
    reset_proceed: "Yes, Proceed",
    reset_step_2: "Step 2 of 2: This is your last warning! All unsaved progress will be permanently lost.",
    reset_confirm_prompt: "Type RESET below to confirm:",
    reset_confirm_placeholder: "Type RESET",
    reset_confirm_btn: "I Understand, Clear Everything",
    import_title: "Import Configuration",
    import_subtitle: "Select a previously exported .json plan file to restore your planner.",
    import_dropzone: "Drag and drop your exported plan file here, or click to choose a file.",
    browse_files: "Browse Files",
    toast_import_error: "Invalid JSON file. Please make sure the file was exported from AetherHours.",
    empty_no_match: "No planned entries found matching this filter.",
    empty_add_first: "Add your first entry",
    theme_light: "Light",
    theme_dark: "Dark",
    theme_institution: "Institution",
    hide_non_overlapping: "Hide Out of Year",
    show_non_overlapping: "Show Out of Year",
    
    // Dynamic text strings
    status_no_entries: "No entries added for this academic year.",
    status_need_more: "Need {hours}h more to meet target workload.",
    status_perfect: "Perfect! Allocation matches target exactly.",
    status_over: "Over-allocated by {hours}h (+{percent}%)!",
    tooltip_over_limit: "⚠️ OVER LIMIT",
    tooltip_teaching: "Teaching:",
    tooltip_research: "Research:",
    tooltip_other: "Other:",
    tooltip_total_load: "Total Load:",
    tooltip_target_capacity: "Target capacity:",
    share_academic: "academic share",
    share_total: "total alloc",
    this_year: "This year:",
    confirm_delete: "Are you sure you want to remove \"{name}\" from your plan?",
    alert_invalid_dates: "Invalid Dates: The End Month must be equal to or later than the Start Month.",
    alert_reset_success: "Database wiped out. All entries have been reset to empty.",
    alert_import_success: "Planner configuration loaded successfully!",
    copy_suffix: "(Copy)",
    prep_factor: "Prep factor",
    alloc: "Alloc",
    total_global_alloc: "Total global allocation",
    monthly_slice: "Monthly slice",
    footer_mention: "Developed by Jonathan Jubin in collaboration with Antigravity. This tool is available free of charge: you may use and modify it as you see fit. It is provided ‘as is’, without warranty. The author accepts no liability for the accuracy of the calculations or the use made of them, nor any other issue related to this tool.",
    footer_last_edit: "Version of May 30, 2026, 2:42 PM",
    apply_settings: "Apply parameters changes"
  },
  fr: {
    app_title: "AetherHours",
    app_subtitle: "Planificateur de Charge de Travail Académique",
    app_title_full: "AetherHours - Planificateur de Charge de Travail Académique",
    total_allocated: "Total Alloué",
    teaching_prepared: "Enseignement (Préparé)",
    research_projects: "Projets de Recherche",
    other_tasks: "Autres Tâches",
    raw: "Brut",
    multiplier_effect: "Effet multiplicateur",
    includes_prep: "Inclut les ratios de préparation",
    of_total_alloc: "de l'allocation totale",
    of_total_sched: "des heures planifiées",
    fill_rate_title: "Taux de Remplissage Mensuel",
    fill_rate_subtitle: "Charge mensuelle en pourcentage de la capacité cible ({hours}h = 100%)",
    capacity_exceeded: "Capacité Dépassée",
    planned_entries: "Entrées Planifiées",
    add_entry: "Ajouter",
    tab_active: "Actif dans l'Année",
    tab_all: "Toutes les Entrées",
    tab_teaching: "Enseignement",
    tab_research: "Recherche",
    tab_other: "Autre",
    config_title: "Configuration & Paramètres",
    config_subtitle: "Personnalisez les multiplicateurs et la cible annuelle.",
    annual_target: "Cible Annuelle (Heures)",
    teaching_multipliers: "Multiplicateurs de Préparation",
    multipliers_subtitle: "Multiplie les heures de cours selon le programme :",
    aps_multiplier: "Multiplicateur APS",
    ba_multiplier: "Multiplicateur BA",
    pg_multiplier: "Multiplicateur PG",
    save_config: "Sauvegarder la Configuration",
    toast_config_saved: "Configuration enregistrée avec succès !",
    data_portability: "Portabilité des Données",
    portability_subtitle: "Sauvegardez votre base de données ou importez un plan.",
    export_plan: "Exporter le Plan (JSON)",
    import_plan: "Importer le Plan (JSON)",
    reset_data: "Réinitialiser Toutes les Données",
    modal_add_title: "Ajouter une Entrée Planifiée",
    modal_edit_title: "Modifier l'Entrée Planifiée",
    activity_category: "Catégorie d'Activité",
    cat_course: "Cours d'Enseignement",
    cat_research: "Projet de Recherche",
    cat_other: "Autre Tâche / Admin",
    name_label_course: "Nom du Cours",
    name_label_research: "Nom du Projet de Recherche",
    name_label_other: "Nom de la Tâche",
    course_project_name_placeholder: "ex: Apprentissage Automatique I",
    program_level: "Niveau du Programme",
    annual_hours: "Heures Annuelles d'Enseignement",
    total_hours_research: "Total des Heures de Recherche Allouées",
    total_hours_other: "Total des Heures de Tâche Allouées",
    total_hours: "Total des Heures Allouées",
    time_frame: "Type de Période",
    frame_duration: "Durée (Mois de Début à Mois de Fin)",
    frame_fixed: "Mois Unique Fixe",
    start_month: "Mois de Début",
    end_month: "Mois de Fin",
    planned_month: "Mois Planifié",
    cancel: "Annuler",
    save_entry: "Enregistrer l'Entrée",
    critical_reset_title: "Critique : Réinitialiser la Base de Données ?",
    reset_warning: "Cette action effacera complètement tous les cours, projets de recherche, paramètres et configurations de votre planificateur.",
    reset_step_1: "Étape 1 sur 2 : Voulez-vous vraiment vider toute votre base de données ?",
    reset_tip: "Conseil : N'oubliez pas d'Exporter le Plan (JSON) pour sauvegarder votre travail !",
    reset_proceed: "Oui, Continuer",
    reset_step_2: "Étape 2 sur 2 : Dernier avertissement ! Toutes les modifications non sauvegardées seront définitivement perdues.",
    reset_confirm_prompt: "Saisissez RESET ci-dessous pour confirmer :",
    reset_confirm_placeholder: "Saisissez RESET",
    reset_confirm_btn: "Je Comprends, Tout Effacer",
    import_title: "Importer une Configuration",
    import_subtitle: "Sélectionnez un fichier .json exporté pour restaurer votre planificateur.",
    import_dropzone: "Glissez-déposez votre fichier de plan exporté ici, ou cliquez pour choisir.",
    browse_files: "Parcourir les Fichiers",
    toast_import_error: "Fichier JSON invalide. Assurez-vous que le fichier provient de AetherHours.",
    empty_no_match: "Aucune entrée planifiée ne correspond à ce filtre.",
    empty_add_first: "Ajoutez votre première entrée",
    theme_light: "Light",
    theme_dark: "Dark",
    theme_institution: "Institution",
    hide_non_overlapping: "Masquer hors année",
    show_non_overlapping: "Afficher hors année",
    
    // Dynamic text strings
    status_no_entries: "Aucune entrée ajoutée pour cette année académique.",
    status_need_more: "Besoin de {hours}h de plus pour atteindre la charge cible.",
    status_perfect: "Parfait ! L'allocation correspond exactement à la cible.",
    status_over: "Surcharge de {hours}h (+{percent}%) !",
    tooltip_over_limit: "⚠️ HORS LIMITE",
    tooltip_teaching: "Enseignement :",
    tooltip_research: "Recherche :",
    tooltip_other: "Autre :",
    tooltip_total_load: "Charge Totale :",
    tooltip_target_capacity: "Capacité cible :",
    share_academic: "part académique",
    share_total: "alloc totale",
    this_year: "Cette année :",
    confirm_delete: "Êtes-vous sûr de vouloir supprimer \"{name}\" de votre plan ?",
    alert_invalid_dates: "Dates Invalides : Le mois de fin doit être égal ou postérieur au mois de début.",
    alert_reset_success: "Base de données vidée. Toutes les entrées ont été réinitialisées.",
    alert_import_success: "Configuration du planificateur chargée avec succès !",
    copy_suffix: "(Copie)",
    prep_factor: "Facteur prép",
    alloc: "Alloc",
    total_global_alloc: "Allocation globale",
    monthly_slice: "Tranche mensuelle",
    footer_mention: "Développé par Jonathan Jubin en collaboration avec Antigravity. Cet outil est disponible gratuitement : vous pouvez l'utiliser et le modifier comme bon vous semble. Il est fourni « tel quel », sans aucune garantie. L'auteur décline toute responsabilité quant à l'exactitude des calculs ou à l'usage qui en est fait, ainsi qu'à tout autre problème lié à cet outil.",
    footer_last_edit: "Version du 30 mai 2026 à 14:42",
    apply_settings: "Appliquer les modifications de paramètres"
  }
};

let state = {
  entries: [],
  settings: {
    target: 1868,
    aps: 1.75,
    ba: 1.75,
    pg: 1.2,
    language: "fr",
    theme: "light"
  },
  selectedYear: "2026-2027"
};

// Default seed data to populate the planner with a realistic academic schedule
const SEED_DATA = {
  settings: {
    target: 1868,
    aps: 1.75,
    ba: 1.75,
    pg: 1.2,
    language: "fr",
    theme: "light"
  },
  entries: [
    {
      id: "seed-course-1",
      type: "course",
      name: "Deep Learning & Neural Nets",
      program: "PG",
      annualHours: 60.5,
      dateType: "duration",
      startDate: "2026-09",
      endDate: "2026-12"
    },
    {
      id: "seed-course-2",
      type: "course",
      name: "Object-Oriented Architecture",
      program: "BA",
      annualHours: 80,
      dateType: "duration",
      startDate: "2027-02",
      endDate: "2027-06"
    },
    {
      id: "seed-course-3",
      type: "course",
      name: "Advanced Research Seminar",
      program: "PG",
      annualHours: 80,
      dateType: "duration",
      startDate: "2026-10",
      endDate: "2026-11"
    },
    {
      id: "seed-course-4",
      type: "course",
      name: "Introduction to Apprenticeship Programming",
      program: "APS",
      annualHours: 120,
      dateType: "duration",
      startDate: "2026-09",
      endDate: "2027-01"
    },
    {
      id: "seed-research-1",
      type: "research",
      name: "Quantum Machine Learning Frameworks (H2020 Grant)",
      totalHours: 450.5,
      startDate: "2026-01",
      endDate: "2027-06"
    },
    {
      id: "seed-research-2",
      type: "research",
      name: "Collaborative European AI Security Initiative",
      totalHours: 1200,
      startDate: "2025-09",
      endDate: "2028-08"
    },
    {
      id: "seed-other-1",
      type: "other",
      name: "Faculty Board Committee Chair",
      totalHours: 120,
      dateType: "duration",
      startDate: "2026-09",
      endDate: "2027-08"
    },
    {
      id: "seed-other-2",
      type: "other",
      name: "Curriculum Reform Taskforce",
      totalHours: 150,
      dateType: "duration",
      startDate: "2027-03",
      endDate: "2027-05"
    }
  ]
};

// Translate strings dynamically
function getTranslation(key, params = {}) {
  const lang = state.settings.language || "fr";
  const dict = TRANSLATIONS[lang] || TRANSLATIONS["fr"];
  let val = dict[key] || TRANSLATIONS["fr"][key] || key;
  
  Object.keys(params).forEach(k => {
    val = val.replace(`{${k}}`, params[k]);
  });
  return val;
}

// Dom translation scanning engine
function translatePage() {
  const lang = state.settings.language || "fr";
  document.documentElement.setAttribute("lang", lang);
  
  // Translate elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (key === "fill_rate_subtitle") {
      const monthlyCapacity = (Number(state.settings.target) / 12).toFixed(1);
      el.textContent = getTranslation("fill_rate_subtitle", { hours: monthlyCapacity });
    } else if (key === "app_title_full") {
      document.title = getTranslation("app_title_full");
    } else {
      el.textContent = getTranslation(key);
    }
  });

  // Translate placeholders with data-i18n-placeholder
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.setAttribute("placeholder", getTranslation(key));
  });
}

// Theme applier
function applyTheme() {
  const theme = state.settings.theme || "light";
  document.documentElement.setAttribute("data-theme", theme);
  
  const themeSelect = document.getElementById("themeSelect");
  if (themeSelect) {
    themeSelect.value = theme;
  }
}

// Saves the entire planner state to browser localStorage
function saveStateToLocalStorage() {
  localStorage.setItem("aether_hours_planner_state", JSON.stringify(state));
}

// Loads state from localStorage, or seeds premium default entries if empty
function loadStateFromLocalStorage() {
  const stored = localStorage.getItem("aether_hours_planner_state");
  if (stored) {
    try {
      state = JSON.parse(stored);
      if (!state.entries) state.entries = [];
      if (!state.settings) state.settings = { ...SEED_DATA.settings };
      if (!state.settings.language) state.settings.language = "fr";
      if (!state.settings.theme) state.settings.theme = "light";
      if (!state.selectedYear) state.selectedYear = "2026-2027";
    } catch (e) {
      console.error("Error parsing stored state, resorting to seed data.", e);
      state = { ...SEED_DATA, selectedYear: "2026-2027" };
    }
  } else {
    state = {
      entries: [...SEED_DATA.entries],
      settings: { ...SEED_DATA.settings },
      selectedYear: "2026-2027"
    };
    saveStateToLocalStorage();
  }
}

// ==========================================
// 2. MATHEMATICAL CALCULATION ENGINE
// ==========================================

function escapeHTML(str) {
  if (typeof str !== "string") return str;
  return str.replace(/[&<>"']/g, match => {
    const escapeMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;'
    };
    return escapeMap[match];
  });
}

function parseYearMonth(ymString) {
  const [year, month] = ymString.split("-").map(Number);
  return new Date(year, month - 1, 1);
}

function formatYearMonth(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  return `${y}-${m}`;
}

function getMonthsInRange(startYM, endYM) {
  const months = [];
  let current = parseYearMonth(startYM);
  const end = parseYearMonth(endYM);
  
  if (current > end) return [startYM];

  while (current <= end) {
    months.push(formatYearMonth(current));
    current.setMonth(current.getMonth() + 1);
  }
  return months;
}

function getMonthsForAcademicYear(academicYearString) {
  const [startYear] = academicYearString.split("-").map(Number);
  const months = [];
  
  for (let m = 9; m <= 12; m++) {
    months.push(`${startYear}-${String(m).padStart(2, '0')}`);
  }
  const endYear = startYear + 1;
  for (let m = 1; m <= 8; m++) {
    months.push(`${endYear}-${String(m).padStart(2, '0')}`);
  }
  
  return months;
}

function getMonthShortName(ymString) {
  const [, month] = ymString.split("-").map(Number);
  const locale = state.settings.language === "fr" ? "fr-FR" : "en-US";
  const date = new Date(2000, month - 1, 1);
  const shortName = date.toLocaleString(locale, { month: 'short' });
  return shortName.charAt(0).toUpperCase() + shortName.slice(1);
}

function getEntryMonthlyRate(entry) {
  let multiplier = 1.0;
  let rawHours = 0;
  let totalCalculatedHours = 0;
  let activeMonths = [];

  if (entry.type === "course") {
    const program = entry.program || "APS";
    multiplier = Number(state.settings[program.toLowerCase()]) || 1.75;
    rawHours = Number(entry.annualHours) || 0;
    totalCalculatedHours = rawHours + (multiplier * rawHours);
    
    if (entry.dateType === "fixed") {
      activeMonths = [entry.startDate];
    } else {
      activeMonths = getMonthsInRange(entry.startDate, entry.endDate);
    }
  } else if (entry.type === "research") {
    totalCalculatedHours = Number(entry.totalHours) || 0;
    activeMonths = getMonthsInRange(entry.startDate, entry.endDate);
    rawHours = totalCalculatedHours;
  } else {
    totalCalculatedHours = Number(entry.totalHours) || 0;
    rawHours = totalCalculatedHours;
    if (entry.dateType === "fixed") {
      activeMonths = [entry.startDate];
    } else {
      activeMonths = getMonthsInRange(entry.startDate, entry.endDate);
    }
  }

  const monthsCount = activeMonths.length || 1;
  const ratePerMonth = totalCalculatedHours / monthsCount;

  return {
    rawHours,
    multiplier,
    totalCalculatedHours,
    activeMonths,
    ratePerMonth
  };
}

function calculateMonthlyAggregates(academicYearString) {
  const academicMonths = getMonthsForAcademicYear(academicYearString);
  
  const monthlyData = academicMonths.reduce((acc, monthYM) => {
    acc[monthYM] = {
      teaching: 0,
      research: 0,
      other: 0,
      total: 0,
      entriesBreakdown: []
    };
    return acc;
  }, {});

  state.entries.forEach(entry => {
    const calc = getEntryMonthlyRate(entry);
    
    calc.activeMonths.forEach(monthYM => {
      if (monthlyData[monthYM] !== undefined) {
        const rate = calc.ratePerMonth;
        
        if (entry.type === "course") {
          monthlyData[monthYM].teaching += rate;
        } else if (entry.type === "research") {
          monthlyData[monthYM].research += rate;
        } else {
          monthlyData[monthYM].other += rate;
        }
        
        monthlyData[monthYM].total += rate;
        
        monthlyData[monthYM].entriesBreakdown.push({
          name: entry.name,
          type: entry.type,
          hours: rate,
          program: entry.program || null,
          multiplier: calc.multiplier
        });
      }
    });
  });

  return monthlyData;
}

function calculateYearlyStats(academicYearString) {
  const monthlyData = calculateMonthlyAggregates(academicYearString);
  let totalScheduled = 0;
  let teaching = 0;
  let research = 0;
  let other = 0;
  let rawTeaching = 0;

  Object.values(monthlyData).forEach(month => {
    totalScheduled += month.total;
    teaching += month.teaching;
    research += month.research;
    other += month.other;
  });

  const academicMonths = getMonthsForAcademicYear(academicYearString);
  state.entries.forEach(entry => {
    if (entry.type === "course") {
      const calc = getEntryMonthlyRate(entry);
      calc.activeMonths.forEach(monthYM => {
        if (academicMonths.includes(monthYM)) {
          const rawRate = calc.rawHours / calc.activeMonths.length;
          rawTeaching += rawRate;
        }
      });
    }
  });

  return {
    totalScheduled: Math.round(totalScheduled * 10) / 10,
    teaching: Math.round(teaching * 10) / 10,
    research: Math.round(research * 10) / 10,
    other: Math.round(other * 10) / 10,
    rawTeaching: Math.round(rawTeaching * 10) / 10,
    multiplierEffect: Math.max(0, Math.round((teaching - rawTeaching) * 10) / 10)
  };
}

// ==========================================
// 3. SVG CHART GENERATOR (INTERACTIVE & RESPONSIVE)
// ==========================================

function renderSVGChart() {
  const container = document.getElementById("svgChartContainer");
  if (!container) return;

  const monthlyData = calculateMonthlyAggregates(state.selectedYear);
  const academicMonths = getMonthsForAcademicYear(state.selectedYear);
  
  const containerWidth = container.clientWidth || 760;
  const containerHeight = 280;
  
  const paddingLeft = 45;
  const paddingRight = 15;
  const paddingTop = 25;
  const paddingBottom = 35;
  
  const chartWidth = containerWidth - paddingLeft - paddingRight;
  const chartHeight = containerHeight - paddingTop - paddingBottom;
  
  const monthlyCapacity = Number(state.settings.target) / 12;
  
  const maxVal = Math.max(...Object.values(monthlyData).map(m => m.total));
  const maxPercent = (maxVal / monthlyCapacity) * 100;
  let yAxisMaxPercent = Math.max(120, maxPercent * 1.1);
  
  const step = yAxisMaxPercent > 200 ? 50 : 25;
  yAxisMaxPercent = Math.ceil(yAxisMaxPercent / step) * step;

  let svgHTML = `
    <svg class="svg-chart" viewBox="0 0 ${containerWidth} ${containerHeight}" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="teachingGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="var(--teaching-grad-start)" />
          <stop offset="100%" stop-color="var(--teaching-grad-end)" />
        </linearGradient>
        <linearGradient id="researchGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="var(--research-grad-start)" />
          <stop offset="100%" stop-color="var(--research-grad-end)" />
        </linearGradient>
        <linearGradient id="otherGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="var(--other-grad-start)" />
          <stop offset="100%" stop-color="var(--other-grad-end)" />
        </linearGradient>
        
        <filter id="barGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
  `;

  for (let val = 0; val <= yAxisMaxPercent; val += step) {
    const y = paddingTop + chartHeight - (val / yAxisMaxPercent) * chartHeight;
    svgHTML += `
      <line class="chart-grid-line" x1="${paddingLeft}" y1="${y}" x2="${containerWidth - paddingRight}" y2="${y}" />
      <text class="chart-label" x="${paddingLeft - 8}" y="${y + 4}" text-anchor="end">${val}%</text>
    `;
  }

  const capacityY = paddingTop + chartHeight - (100 / yAxisMaxPercent) * chartHeight;
  svgHTML += `
    <rect class="capacity-threshold-rect" x="${paddingLeft}" y="${paddingTop}" width="${chartWidth}" height="${capacityY - paddingTop}" />
  `;

  const barWidth = Math.max(16, Math.floor(chartWidth / 12 * 0.58));
  const colSpacing = chartWidth / 12;

  let yearExceededCapacity = false;

  academicMonths.forEach((monthYM, i) => {
    const data = monthlyData[monthYM];
    const colCenterX = paddingLeft + (i * colSpacing) + (colSpacing / 2);
    const barX = colCenterX - (barWidth / 2);
    const bottomY = paddingTop + chartHeight;
    
    const isExceeded = data.total > monthlyCapacity;
    if (isExceeded) yearExceededCapacity = true;

    const teachPercent = (data.teaching / monthlyCapacity) * 100;
    const resPercent = (data.research / monthlyCapacity) * 100;
    const otherPercent = (data.other / monthlyCapacity) * 100;
    const totalPercent = (data.total / monthlyCapacity) * 100;

    const teachH = (teachPercent / yAxisMaxPercent) * chartHeight;
    const resH = (resPercent / yAxisMaxPercent) * chartHeight;
    const otherH = (otherPercent / yAxisMaxPercent) * chartHeight;
    
    let currentY = bottomY;

    if (isExceeded) {
      const fullBarH = (totalPercent / yAxisMaxPercent) * chartHeight;
      svgHTML += `
        <!-- Warning Glow Backing -->
        <rect class="chart-warning-glow" x="${barX - 4}" y="${bottomY - fullBarH - 4}" width="${barWidth + 8}" height="${fullBarH + 8}" rx="6" />
        <!-- Warning Dash Outline -->
        <rect class="chart-warning-outline" x="${barX - 4}" y="${bottomY - fullBarH - 4}" width="${barWidth + 8}" height="${fullBarH + 8}" rx="6" />
      `;
    }

    if (teachH > 0) {
      svgHTML += `
        <rect class="chart-bar-rect gradient-teaching" x="${barX}" y="${currentY - teachH}" width="${barWidth}" height="${teachH}" rx="3" data-month="${monthYM}" />
      `;
      currentY -= teachH;
    }

    if (resH > 0) {
      svgHTML += `
        <rect class="chart-bar-rect gradient-research" x="${barX}" y="${currentY - resH}" width="${barWidth}" height="${resH}" rx="3" data-month="${monthYM}" />
      `;
      currentY -= resH;
    }

    if (otherH > 0) {
      svgHTML += `
        <rect class="chart-bar-rect gradient-other" x="${barX}" y="${currentY - otherH}" width="${barWidth}" height="${otherH}" rx="3" data-month="${monthYM}" />
      `;
      currentY -= otherH;
    }

    const monthLabel = getMonthShortName(monthYM);
    svgHTML += `
      <text class="chart-label chart-label-x" x="${colCenterX}" y="${containerHeight - 12}" text-anchor="middle">${monthLabel}</text>
      ${isExceeded ? `
        <circle cx="${colCenterX}" cy="${paddingTop - 10}" r="6" fill="var(--capacity-color)" />
        <text x="${colCenterX}" y="${paddingTop - 7}" font-family="var(--font-primary)" font-size="9px" font-weight="900" fill="#fff" text-anchor="middle">!</text>
      ` : ''}
    `;

    svgHTML += `
      <rect class="chart-hotspot" x="${colCenterX - colSpacing/2}" y="${paddingTop}" width="${colSpacing}" height="${chartHeight}" fill="transparent" style="cursor: pointer;" data-month="${monthYM}" />
    `;
  });

  svgHTML += `
    <line class="capacity-line" x1="${paddingLeft}" y1="${capacityY}" x2="${containerWidth - paddingRight}" y2="${capacityY}" />
    <line class="chart-axis-line" x1="${paddingLeft}" y1="${paddingTop + chartHeight}" x2="${containerWidth - paddingRight}" y2="${paddingTop + chartHeight}" />
  </svg>
  `;

  container.innerHTML = svgHTML;

  const alertPill = document.getElementById("chartExceededAlert");
  if (alertPill) {
    if (yearExceededCapacity) {
      alertPill.classList.remove("hide");
    } else {
      alertPill.classList.add("hide");
    }
  }

  setupChartInteractions(container);
}

function setupChartInteractions(chartContainer) {
  const tooltip = document.getElementById("chartTooltip");
  if (!tooltip) return;

  const hotspots = chartContainer.querySelectorAll(".chart-hotspot");
  const monthlyCapacity = Number(state.settings.target) / 12;

  hotspots.forEach(hotspot => {
    hotspot.addEventListener("mouseenter", (e) => {
      const monthYM = hotspot.getAttribute("data-month");
      const monthlyData = calculateMonthlyAggregates(state.selectedYear);
      const data = monthlyData[monthYM];
      const activeMonths = getMonthsForAcademicYear(state.selectedYear);
      const monthIndex = activeMonths.indexOf(monthYM);

      if (!data) return;

      const [year, month] = monthYM.split("-");
      const locale = state.settings.language === "fr" ? "fr-FR" : "en-US";
      const fullMonthName = new Date(year, month - 1).toLocaleString(locale, { month: 'long', year: 'numeric' });
      const fillPercent = Math.round((data.total / monthlyCapacity) * 100);

      let tooltipContent = `
        <div class="tooltip-title">
          <span>${fullMonthName}</span>
          ${data.total > monthlyCapacity ? `<span style="color:var(--capacity-color); font-size:10px; font-weight:700;">${getTranslation("tooltip_over_limit")}</span>` : ''}
        </div>
        <div class="tooltip-row">
          <span><span class="tooltip-dot bg-teaching"></span>${getTranslation("tooltip_teaching")}</span>
          <span class="tooltip-val">${Math.round(data.teaching * 10) / 10}h</span>
        </div>
        <div class="tooltip-row">
          <span><span class="tooltip-dot bg-research"></span>${getTranslation("tooltip_research")}</span>
          <span class="tooltip-val">${Math.round(data.research * 10) / 10}h</span>
        </div>
        <div class="tooltip-row">
          <span><span class="tooltip-dot bg-other"></span>${getTranslation("tooltip_other")}</span>
          <span class="tooltip-val">${Math.round(data.other * 10) / 10}h</span>
        </div>
        <div class="tooltip-total-row">
          <span>${getTranslation("tooltip_total_load")}</span>
          <span class="tooltip-val">${Math.round(data.total * 10) / 10}h (${fillPercent}%)</span>
        </div>
        <div class="tooltip-row" style="color:var(--text-muted); font-size:9px; margin-top:2px;">
          <span>${getTranslation("tooltip_target_capacity")}</span>
          <span>${Math.round(monthlyCapacity * 10) / 10}h</span>
        </div>
      `;

      tooltip.innerHTML = tooltipContent;
      tooltip.classList.add("show");

      const rect = chartContainer.getBoundingClientRect();
      const colSpacing = (rect.width - 60) / 12;
      const colCenterX = 45 + (monthIndex * colSpacing) + (colSpacing / 2);
      
      tooltip.style.left = `${colCenterX}px`;
      
      const maxVal = Math.max(...Object.values(monthlyData).map(m => m.total));
      const maxPercent = (maxVal / monthlyCapacity) * 100;
      let yAxisMaxPercent = Math.max(120, maxPercent * 1.1);
      const step = yAxisMaxPercent > 200 ? 50 : 25;
      yAxisMaxPercent = Math.ceil(yAxisMaxPercent / step) * step;

      const totalPercent = (data.total / monthlyCapacity) * 100;
      const totalColHeight = (totalPercent / yAxisMaxPercent) * 220;
      const colTopY = 280 - 35 - totalColHeight;
      tooltip.style.top = `${colTopY - 10}px`;
    });

    hotspot.addEventListener("mouseleave", () => {
      tooltip.classList.remove("show");
    });
  });
}

// ==========================================
// 4. DASHBOARD & METRICS INITIATOR
// ==========================================

function updateDashboardMetrics() {
  const stats = calculateYearlyStats(state.selectedYear);
  const target = Number(state.settings.target);
  
  document.getElementById("totalAllocatedHours").textContent = stats.totalScheduled;
  document.getElementById("teachingHours").textContent = stats.teaching;
  document.getElementById("rawTeachingHours").textContent = stats.rawTeaching;
  document.getElementById("multiplierEffectHours").textContent = stats.multiplierEffect;
  document.getElementById("researchHours").textContent = stats.research;
  document.getElementById("otherHours").textContent = stats.other;
  
  document.querySelectorAll(".target-hours-label").forEach(el => el.textContent = target);
  document.querySelectorAll(".monthly-target-hours-label").forEach(el => el.textContent = (target / 12).toFixed(1));

  const totalPercent = Math.min(100, Math.round((stats.totalScheduled / target) * 100));
  const progressBar = document.getElementById("totalHoursProgress");
  progressBar.style.width = `${totalPercent}%`;

  progressBar.className = "progress-bar";
  if (totalPercent > 100) {
    progressBar.style.background = "linear-gradient(90deg, #ef4444 0%, #f97316 100%)";
  } else {
    progressBar.style.background = "linear-gradient(90deg, var(--teaching-primary) 0%, var(--research-primary) 100%)";
  }

  const statusText = document.getElementById("targetStatusText");
  if (stats.totalScheduled === 0) {
    statusText.textContent = getTranslation("status_no_entries");
    statusText.className = "status-neutral";
  } else if (stats.totalScheduled < target) {
    const remaining = Math.round(target - stats.totalScheduled);
    statusText.textContent = getTranslation("status_need_more", { hours: remaining });
    statusText.className = "status-neutral";
  } else if (stats.totalScheduled === target) {
    statusText.textContent = getTranslation("status_perfect");
    statusText.className = "status-success";
  } else {
    const overage = Math.round(stats.totalScheduled - target);
    const overPercent = Math.round((overage / target) * 100);
    statusText.textContent = getTranslation("status_over", { hours: overage, percent: overPercent });
    statusText.className = "status-warning";
  }

  const researchPercent = stats.totalScheduled > 0 ? Math.round((stats.research / stats.totalScheduled) * 100) : 0;
  document.getElementById("researchPercentageBar").style.width = `${researchPercent}%`;
  document.getElementById("researchPercentageText").textContent = `${researchPercent}% ${getTranslation("of_total_sched")}`;

  const otherPercent = stats.totalScheduled > 0 ? Math.round((stats.other / stats.totalScheduled) * 100) : 0;
  document.getElementById("otherPercentageBar").style.width = `${otherPercent}%`;
  document.getElementById("otherPercentageText").textContent = `${otherPercent}% ${getTranslation("of_total_sched")}`;
}

// ==========================================
// 5. DATABASE & CRUD UI ENGINE
// ==========================================

let activeTab = "active";

function renderEntriesList() {
  const listContainer = document.getElementById("entriesList");
  const countBadge = document.getElementById("entriesCountBadge");
  if (!listContainer) return;

  const academicMonths = getMonthsForAcademicYear(state.selectedYear);
  
  let filtered = [];

  if (activeTab === "active") {
    filtered = state.entries.filter(entry => {
      const calc = getEntryMonthlyRate(entry);
      return calc.activeMonths.some(m => academicMonths.includes(m));
    });
  } else if (activeTab === "all") {
    filtered = [...state.entries];
  } else {
    filtered = state.entries.filter(e => e.type === activeTab);
  }

  countBadge.textContent = filtered.length;

  if (filtered.length === 0) {
    listContainer.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon-wrapper">
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
        </div>
        <p>${getTranslation("empty_no_match")}</p>
        <button type="button" class="btn btn-outline btn-sm" onclick="openAddModal()">${getTranslation("empty_add_first")}</button>
      </div>
    `;
    return;
  }

  filtered.sort((a, b) => a.name.localeCompare(b.name));

  let listHTML = "";

  filtered.forEach(entry => {
    const calc = getEntryMonthlyRate(entry);
    const locale = state.settings.language === "fr" ? "fr-FR" : "en-US";
    
    let durationText = "";
    if (entry.startDate === entry.endDate || entry.dateType === "fixed") {
      const date = parseYearMonth(entry.startDate);
      durationText = date.toLocaleString(locale, { month: 'short', year: 'numeric' });
    } else {
      const sDate = parseYearMonth(entry.startDate);
      const eDate = parseYearMonth(entry.endDate);
      durationText = `${sDate.toLocaleString(locale, { month: 'short', year: 'numeric' })} - ${eDate.toLocaleString(locale, { month: 'short', year: 'numeric' })} (${calc.activeMonths.length}m)`;
    }

    let badgeHTML = "";
    let rateDetailHTML = "";
    let totalLabelHTML = "";

    if (entry.type === "course") {
      badgeHTML = `
        <span class="badge badge-course">${getTranslation("tab_teaching")}</span>
        <span class="badge badge-program">${entry.program}</span>
      `;
      rateDetailHTML = `
        <span>${getTranslation("raw")} : <strong>${entry.annualHours}h</strong></span>
        <span class="meta-dot"></span>
        <span>${getTranslation("prep_factor")} : <strong>x${calc.multiplier}</strong></span>
        <span class="meta-dot"></span>
        <span>${getTranslation("alloc")} : <strong>${calc.ratePerMonth.toFixed(1)}h/mo</strong></span>
      `;
      totalLabelHTML = `${calc.totalCalculatedHours.toFixed(1)}h`;
    } else if (entry.type === "research") {
      badgeHTML = `<span class="badge badge-research">${getTranslation("tab_research")}</span>`;
      rateDetailHTML = `
        <span>${getTranslation("total_global_alloc")} : <strong>${entry.totalHours}h</strong></span>
        <span class="meta-dot"></span>
        <span>${getTranslation("monthly_slice")} : <strong>${calc.ratePerMonth.toFixed(1)}h/mo</strong></span>
      `;
      
      let academicHours = 0;
      calc.activeMonths.forEach(m => {
        if (academicMonths.includes(m)) academicHours += calc.ratePerMonth;
      });

      totalLabelHTML = `${academicHours.toFixed(1)}h`;
      rateDetailHTML += `
        <span class="meta-dot"></span>
        <span style="color: var(--research-text)">${getTranslation("this_year")} <strong>${academicHours.toFixed(1)}h</strong></span>
      `;
    } else {
      badgeHTML = `<span class="badge badge-other">${getTranslation("tab_other")}</span>`;
      rateDetailHTML = `
        <span>${getTranslation("alloc")} : <strong>${calc.ratePerMonth.toFixed(1)}h/mo</strong></span>
      `;
      totalLabelHTML = `${calc.totalCalculatedHours.toFixed(1)}h`;
    }

    const itemClass = `entry-item entry-item-${entry.type}`;

    listHTML += `
      <div class="${itemClass}" id="entry-card-${entry.id}">
        <div class="entry-icon-wrapper">
          ${getEntryIconMarkup(entry.type)}
        </div>
        
        <div class="entry-main-info">
          <div class="entry-name">${escapeHTML(entry.name)}</div>
          <div class="entry-meta-details">
            ${badgeHTML}
            <span class="meta-dot"></span>
            <span>${durationText}</span>
          </div>
          <div class="entry-meta-details" style="margin-top: 2px; color: var(--text-muted);">
            ${rateDetailHTML}
          </div>
        </div>
        
        <div class="entry-right-block">
          <div class="entry-hours-block">
            <span class="entry-total-hours-label">${totalLabelHTML}</span>
            <span class="entry-rate-label">${entry.type === "research" ? getTranslation("share_academic") : getTranslation("share_total")}</span>
          </div>
          <div class="entry-actions">
            <button class="btn-icon" onclick="editEntry('${entry.id}')" aria-label="Edit entry">
              <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2.5" fill="none"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
            </button>
            <button class="btn-icon" onclick="duplicateEntry('${entry.id}')" aria-label="Duplicate entry">
              <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2.5" fill="none"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            </button>
            <button class="btn-icon btn-icon-danger" onclick="deleteEntry('${entry.id}')" aria-label="Delete entry">
              <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2.5" fill="none"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>
          </div>
        </div>
      </div>
    `;
  });

  listContainer.innerHTML = listHTML;
}

function getEntryIconMarkup(type) {
  if (type === "course") {
    return `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`;
  } else if (type === "research") {
    return `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><path d="M2 22h20M8 22V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v18"></path><path d="M18 22V10a2 2 0 0 1 2-2h2M6 22V14a2 2 0 0 0-2-2H2"></path></svg>`;
  } else {
    return `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`;
  }
}

function setupModalFormLogic() {
  const typeSelector = document.getElementById("entryType");
  const dateTypeSelector = document.getElementById("entryDateType");
  const courseFields = document.getElementById("courseFields");
  const generalHoursFields = document.getElementById("generalHoursFields");
  const endDateGroup = document.getElementById("endDateGroup");
  const nameLabel = document.getElementById("nameLabel");
  const hoursLabel = document.getElementById("hoursLabel");
  
  const handleTypeChange = () => {
    const selectedType = typeSelector.value;
    
    if (selectedType === "course") {
      courseFields.classList.remove("hide");
      generalHoursFields.classList.add("hide");
      nameLabel.textContent = getTranslation("name_label_course");
      
      document.getElementById("dateTypeContainer").classList.remove("hide");
      handleDateTypeChange();
    } else if (selectedType === "research") {
      courseFields.classList.add("hide");
      generalHoursFields.classList.remove("hide");
      nameLabel.textContent = getTranslation("name_label_research");
      hoursLabel.textContent = getTranslation("total_hours_research");
      
      document.getElementById("dateTypeContainer").classList.add("hide");
      dateTypeSelector.value = "duration";
      endDateGroup.classList.remove("hide");
      document.getElementById("startDateLabel").textContent = getTranslation("start_month");
    } else {
      courseFields.classList.add("hide");
      generalHoursFields.classList.remove("hide");
      nameLabel.textContent = getTranslation("name_label_other");
      hoursLabel.textContent = getTranslation("total_hours_other");
      
      document.getElementById("dateTypeContainer").classList.remove("hide");
      handleDateTypeChange();
    }
  };

  const handleDateTypeChange = () => {
    const dateType = dateTypeSelector.value;
    if (dateType === "fixed") {
      endDateGroup.classList.add("hide");
      document.getElementById("startDateLabel").textContent = getTranslation("planned_month");
      document.getElementById("entryEndDate").removeAttribute("required");
    } else {
      endDateGroup.classList.remove("hide");
      document.getElementById("startDateLabel").textContent = getTranslation("start_month");
      document.getElementById("entryEndDate").setAttribute("required", "required");
    }
  };

  typeSelector.addEventListener("change", handleTypeChange);
  dateTypeSelector.addEventListener("change", handleDateTypeChange);
}

function openAddModal() {
  const modal = document.getElementById("entryModal");
  const form = document.getElementById("entryForm");
  
  form.reset();
  document.getElementById("entryId").value = "";
  document.getElementById("modalTitle").textContent = getTranslation("modal_add_title");
  
  const [startYear] = state.selectedYear.split("-");
  document.getElementById("entryStartDate").value = `${startYear}-09`;
  document.getElementById("entryEndDate").value = `${startYear}-12`;
  
  document.getElementById("entryType").value = "course";
  document.getElementById("courseProgram").value = "BA";
  document.getElementById("entryDateType").value = "duration";
  
  document.getElementById("entryType").dispatchEvent(new Event("change"));
  
  modal.classList.remove("hide");
}

window.openAddModal = openAddModal;

function editEntry(id) {
  const entry = state.entries.find(e => e.id === id);
  if (!entry) return;

  const modal = document.getElementById("entryModal");
  const form = document.getElementById("entryForm");
  
  form.reset();
  
  document.getElementById("entryId").value = entry.id;
  document.getElementById("modalTitle").textContent = getTranslation("modal_edit_title");
  
  document.getElementById("entryType").value = entry.type;
  document.getElementById("entryName").value = entry.name;
  document.getElementById("entryStartDate").value = entry.startDate;
  
  document.getElementById("entryType").dispatchEvent(new Event("change"));

  if (entry.type === "course") {
    document.getElementById("courseProgram").value = entry.program;
    document.getElementById("courseHours").value = entry.annualHours;
    document.getElementById("entryDateType").value = entry.dateType;
  } else if (entry.type === "research") {
    document.getElementById("entryHours").value = entry.totalHours;
  } else {
    document.getElementById("entryHours").value = entry.totalHours;
    document.getElementById("entryDateType").value = entry.dateType;
  }
  
  document.getElementById("entryDateType").dispatchEvent(new Event("change"));
  
  if (entry.dateType === "duration" || entry.type === "research") {
    document.getElementById("entryEndDate").value = entry.endDate;
  }

  modal.classList.remove("hide");
}

window.editEntry = editEntry;

function handleEntrySubmit(e) {
  e.preventDefault();
  
  const id = document.getElementById("entryId").value;
  const type = document.getElementById("entryType").value;
  const name = document.getElementById("entryName").value.trim();
  const dateType = document.getElementById("entryDateType").value;
  const startDate = document.getElementById("entryStartDate").value;
  
  let endDate = startDate;
  if (type === "research" || dateType === "duration") {
    endDate = document.getElementById("entryEndDate").value;
    
    if (parseYearMonth(startDate) > parseYearMonth(endDate)) {
      alert(getTranslation("alert_invalid_dates"));
      return;
    }
  }

  const newEntry = {
    id: id || "entry-" + Date.now() + "-" + Math.random().toString(36).substr(2, 9),
    type,
    name,
    startDate,
    endDate,
    dateType: type === "research" ? "duration" : dateType
  };

  if (type === "course") {
    newEntry.program = document.getElementById("courseProgram").value;
    newEntry.annualHours = Number(document.getElementById("courseHours").value);
  } else {
    newEntry.totalHours = Number(document.getElementById("entryHours").value);
  }

  if (id) {
    const idx = state.entries.findIndex(ent => ent.id === id);
    if (idx !== -1) {
      state.entries[idx] = newEntry;
    }
  } else {
    state.entries.push(newEntry);
  }

  saveStateToLocalStorage();
  document.getElementById("entryModal").classList.add("hide");
  
  updateDashboardMetrics();
  renderSVGChart();
  renderEntriesList();
}

function deleteEntry(id) {
  const entry = state.entries.find(e => e.id === id);
  if (!entry) return;

  const confirmDelete = confirm(getTranslation("confirm_delete", { name: entry.name }));
  if (confirmDelete) {
    state.entries = state.entries.filter(e => e.id !== id);
    saveStateToLocalStorage();
    
    updateDashboardMetrics();
    renderSVGChart();
    renderEntriesList();
  }
}

window.deleteEntry = deleteEntry;

function duplicateEntry(id) {
  const original = state.entries.find(e => e.id === id);
  if (!original) return;

  const duplicate = {
    ...original,
    id: "entry-" + Date.now() + "-" + Math.random().toString(36).substr(2, 9),
    name: `${original.name} ${getTranslation("copy_suffix")}`
  };

  state.entries.push(duplicate);
  saveStateToLocalStorage();
  
  updateDashboardMetrics();
  renderSVGChart();
  renderEntriesList();
}

window.duplicateEntry = duplicateEntry;

// ==========================================
// 6. SETTINGS MANAGEMENT
// ==========================================

function checkSettingsForChanges() {
  const btn = document.getElementById("applySettingsBtn");
  if (!btn) return;

  const targetInput = document.getElementById("settingTarget");
  const apsInput = document.getElementById("settingAPS");
  const baInput = document.getElementById("settingBA");
  const pgInput = document.getElementById("settingPG");

  if (!targetInput || !apsInput || !baInput || !pgInput) return;

  const targetVal = Number(targetInput.value);
  const apsVal = Number(apsInput.value);
  const baVal = Number(baInput.value);
  const pgVal = Number(pgInput.value);

  const hasChanges = 
    targetVal !== state.settings.target ||
    apsVal !== state.settings.aps ||
    baVal !== state.settings.ba ||
    pgVal !== state.settings.pg;

  if (hasChanges) {
    btn.classList.add("glowing");
  } else {
    btn.classList.remove("glowing");
  }
}

function applySettingsChanges() {
  const targetInput = document.getElementById("settingTarget");
  const apsInput = document.getElementById("settingAPS");
  const baInput = document.getElementById("settingBA");
  const pgInput = document.getElementById("settingPG");

  if (!targetInput || !apsInput || !baInput || !pgInput) return;

  const targetVal = Number(targetInput.value);
  const apsVal = Number(apsInput.value);
  const baVal = Number(baInput.value);
  const pgVal = Number(pgInput.value);

  // Validate values before saving to avoid corruption
  if (!isNaN(targetVal) && targetVal > 0) {
    state.settings.target = targetVal;
  }
  if (!isNaN(apsVal) && apsVal >= 0) {
    state.settings.aps = apsVal;
  }
  if (!isNaN(baVal) && baVal >= 0) {
    state.settings.ba = baVal;
  }
  if (!isNaN(pgVal) && pgVal >= 0) {
    state.settings.pg = pgVal;
  }

  saveStateToLocalStorage();
  updateDashboardMetrics();
  renderSVGChart();
  renderEntriesList();
  translatePage(); // Updates UI strings like monthly capacities that depend on target hours

  // Remove the glow
  const btn = document.getElementById("applySettingsBtn");
  if (btn) {
    btn.classList.remove("glowing");
  }
}

// ==========================================
// 7. PORTABILITY & RESET UTILITIES (WITH DOUBLE SAFETY)
// ==========================================

// EXPORT TO JSON: bundles both settings AND entries, with Selected Year, Date, and Time in the filename
function exportPlannerData() {
  const now = new Date();
  const formattedDateTime = now.getFullYear() + "-" + 
    String(now.getMonth() + 1).padStart(2, '0') + "-" + 
    String(now.getDate()).padStart(2, '0') + "_" + 
    String(now.getHours()).padStart(2, '0') + "-" + 
    String(now.getMinutes()).padStart(2, '0') + "-" + 
    String(now.getSeconds()).padStart(2, '0');

  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
  const downloadAnchor = document.createElement("a");
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `aetherhours_plan_${formattedDateTime}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

// IMPORT FROM JSON: restores both entries AND custom configurations
function handleJSONImport(file) {
  const reader = new FileReader();
  const errorToast = document.getElementById("importError");

  reader.onload = function(e) {
    try {
      const importedData = JSON.parse(e.target.result);
      
      if (!importedData.entries || !Array.isArray(importedData.entries)) {
        throw new Error("Invalid structure: 'entries' array missing");
      }

      state.entries = importedData.entries;
      if (importedData.settings) {
        state.settings = {
          target: Number(importedData.settings.target) || 1868,
          aps: Number(importedData.settings.aps) || 1.75,
          ba: Number(importedData.settings.ba) || 1.75,
          pg: Number(importedData.settings.pg) || 1.2,
          language: importedData.settings.language || "fr",
          theme: importedData.settings.theme || "light"
        };
      }
      
      if (importedData.selectedYear) {
        state.selectedYear = importedData.selectedYear;
      }

      saveStateToLocalStorage();
      
      // Update form values
      document.getElementById("settingTarget").value = state.settings.target;
      document.getElementById("settingAPS").value = state.settings.aps;
      document.getElementById("settingBA").value = state.settings.ba;
      document.getElementById("settingPG").value = state.settings.pg;
      document.getElementById("academicYearSelect").value = state.selectedYear;
      document.getElementById("languageSelect").value = state.settings.language;
      document.getElementById("themeSelect").value = state.settings.theme;
      
      checkSettingsForChanges();

      document.getElementById("importModal").classList.add("hide");
      errorToast.classList.add("hide");

      // Set options & translations
      translatePage();
      applyTheme();

      updateDashboardMetrics();
      renderSVGChart();
      renderEntriesList();
      alert(getTranslation("alert_import_success"));
    } catch (err) {
      console.error(err);
      errorToast.classList.remove("hide");
    }
  };

  reader.readAsText(file);
}

// WIPE DATABASE WITH CONFIRMATION STEPS
function setupResetWorkflow() {
  const resetBtn = document.getElementById("resetBtn");
  const resetModal = document.getElementById("resetModal");
  const step1 = document.getElementById("resetStep1");
  const step2 = document.getElementById("resetStep2");
  
  const proceed1 = document.getElementById("resetProceed1");
  const confirmInput = document.getElementById("resetConfirmInput");
  const finalBtn = document.getElementById("resetFinalBtn");

  const cancel1 = document.getElementById("resetCancel1");
  const cancel2 = document.getElementById("resetCancel2");
  const modalClose = document.getElementById("resetModalCloseBtn");

  const closeResetModal = () => {
    resetModal.classList.add("hide");
    confirmInput.value = "";
    finalBtn.setAttribute("disabled", "disabled");
  };

  resetBtn.addEventListener("click", () => {
    step1.classList.remove("hide");
    step2.classList.add("hide");
    confirmInput.value = "";
    finalBtn.setAttribute("disabled", "disabled");
    resetModal.classList.remove("hide");
  });

  proceed1.addEventListener("click", () => {
    step1.classList.add("hide");
    step2.classList.remove("hide");
    confirmInput.focus();
  });

  confirmInput.addEventListener("input", () => {
    if (confirmInput.value.trim() === "RESET") {
      finalBtn.removeAttribute("disabled");
    } else {
      finalBtn.setAttribute("disabled", "disabled");
    }
  });

  finalBtn.addEventListener("click", () => {
    if (confirmInput.value.trim() === "RESET") {
      state.entries = [];
      state.settings = { 
        target: 1868, 
        aps: 1.75, 
        ba: 1.75, 
        pg: 1.2, 
        language: "fr", 
        theme: "light"
      };
      
      saveStateToLocalStorage();
      
      document.getElementById("settingTarget").value = 1868;
      document.getElementById("settingAPS").value = 1.75;
      document.getElementById("settingBA").value = 1.75;
      document.getElementById("settingPG").value = 1.2;
      document.getElementById("languageSelect").value = "fr";
      document.getElementById("themeSelect").value = "light";
      
      checkSettingsForChanges();
      
      closeResetModal();

      translatePage();
      applyTheme();

      updateDashboardMetrics();
      renderSVGChart();
      renderEntriesList();
      
      alert(getTranslation("alert_reset_success"));
    }
  });

  cancel1.addEventListener("click", closeResetModal);
  cancel2.addEventListener("click", closeResetModal);
  modalClose.addEventListener("click", closeResetModal);
}

function setupImportDragDrop() {
  const dropZone = document.getElementById("dropZone");
  const fileInput = document.getElementById("importFileInput");

  dropZone.addEventListener("click", () => fileInput.click());
  
  fileInput.addEventListener("change", (e) => {
    if (e.target.files.length > 0) {
      handleJSONImport(e.target.files[0]);
    }
  });

  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.classList.add("drag-over");
  });

  dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("drag-over");
  });

  dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.classList.remove("drag-over");
    if (e.dataTransfer.files.length > 0) {
      handleJSONImport(e.dataTransfer.files[0]);
    }
  });
}

// ==========================================
// 8. BOOTSTRAP INITIALIZATION
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  // 1. Load Data
  loadStateFromLocalStorage();

  // 2. Populate Academic Year Selector Dropdown
  const yearSelect = document.getElementById("academicYearSelect");
  const years = ["2024-2025", "2025-2026", "2026-2027", "2027-2028", "2028-2029", "2029-2030"];
  
  years.forEach(year => {
    const opt = document.createElement("option");
    opt.value = year;
    opt.textContent = `A.Y. ${year}`;
    yearSelect.appendChild(opt);
  });
  
  yearSelect.value = state.selectedYear;

  // 3. Load values into UI inputs
  document.getElementById("settingTarget").value = state.settings.target;
  document.getElementById("settingAPS").value = state.settings.aps;
  document.getElementById("settingBA").value = state.settings.ba;
  document.getElementById("settingPG").value = state.settings.pg;
  
  // Set up language selector value
  const languageSelect = document.getElementById("languageSelect");
  if (languageSelect) {
    languageSelect.value = state.settings.language;
  }

  // Set up theme selector value
  const themeSelect = document.getElementById("themeSelect");
  if (themeSelect) {
    themeSelect.value = state.settings.theme;
  }

  // 4. Initial Rendering, Translation & Theme Loop
  translatePage();
  applyTheme();

  // 5. Register Action Event Listeners
  
  // Year selector changes
  yearSelect.addEventListener("change", () => {
    state.selectedYear = yearSelect.value;
    saveStateToLocalStorage();
    
    updateDashboardMetrics();
    renderSVGChart();
    renderEntriesList();
  });

  // Language selector changes
  if (languageSelect) {
    languageSelect.addEventListener("change", () => {
      state.settings.language = languageSelect.value;
      saveStateToLocalStorage();
      translatePage();
      
      updateDashboardMetrics();
      renderSVGChart();
      renderEntriesList();
    });
  }

  // Theme select changes
  if (themeSelect) {
    themeSelect.addEventListener("change", () => {
      state.settings.theme = themeSelect.value;
      saveStateToLocalStorage();
      applyTheme();
      renderSVGChart();
    });
  }

  // Modal handlers
  document.getElementById("addEntryBtn").addEventListener("click", openAddModal);
  document.getElementById("modalCloseBtn").addEventListener("click", () => document.getElementById("entryModal").classList.add("hide"));
  document.getElementById("modalCancelBtn").addEventListener("click", () => document.getElementById("entryModal").classList.add("hide"));
  document.getElementById("entryForm").addEventListener("submit", handleEntrySubmit);
  
  setupModalFormLogic();

  // Settings live updates on input change
  const configInputs = ["settingTarget", "settingAPS", "settingBA", "settingPG"];
  configInputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", checkSettingsForChanges);
    }
  });

  const applyBtn = document.getElementById("applySettingsBtn");
  if (applyBtn) {
    applyBtn.addEventListener("click", applySettingsChanges);
  }

  // Tab Filtering handlers
  const tabBtns = document.querySelectorAll(".tab-btn");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeTab = btn.getAttribute("data-tab");
      renderEntriesList();
    });
  });

  // Portability & safety triggers
  document.getElementById("exportBtn").addEventListener("click", exportPlannerData);
  document.getElementById("importBtn").addEventListener("click", () => {
    document.getElementById("importError").classList.add("hide");
    document.getElementById("importModal").classList.remove("hide");
  });
  document.getElementById("importModalCloseBtn").addEventListener("click", () => {
    document.getElementById("importModal").classList.add("hide");
  });

  setupImportDragDrop();
  setupResetWorkflow();

  // Window resizing handles chart re-draw
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      renderSVGChart();
    }, 200);
  });

  // Render main layout elements
  updateDashboardMetrics();
  renderSVGChart();
  renderEntriesList();
});
