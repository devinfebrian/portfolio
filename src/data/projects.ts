export type EvidenceImage = {
  src: string
  alt: string
  caption: string
}

export type Project = {
  id: string
  caseId: string
  title: string
  subtitle: string
  year: string
  status: string
  abstract: string
  findings: string[]
  stack: string[]
  links: { label: string; href: string }[]
  note?: string
  image?: EvidenceImage
  trace?: string[]
}

export const projects: Project[] = [
  {
    id: 'sentinel',
    caseId: 'DF-09-01',
    title: 'Sentinel',
    subtitle: 'AI financial audit platform',
    year: '2026',
    status: 'Live / three services',
    abstract:
      'A proactive audit system. Seven deterministic Python detectors flag transaction anomalies; a three-agent Gemini pipeline investigates only the candidates that survive; finance staff resolve evidence-backed findings on a dashboard or ask the ledger questions in plain language.',
    findings: [
      'Seven deterministic detectors and a two-layer risk score — the AI narrates and verifies, but never computes the number.',
      'Next.js client, Express API, FastAPI agent server, and one PostgreSQL database across three deployed services.',
      'Ask Sentinel runs a plan → execute → narrate loop with a post-answer figure audit that flags unsourced numbers.',
    ],
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Express', 'FastAPI', 'Python', 'PostgreSQL', 'Gemini'],
    links: [
      { label: 'Open live build', href: 'https://sentinel-sentry.vercel.app/' },
      { label: 'Frontend source', href: 'https://github.com/devinfebrian/sentinel' },
    ],
    note: 'Backend and agent server are separate repositories linked from the project README.',
    image: {
      src: '/evidence/sentinel.png',
      alt: 'Sentinel landing page: a dark green interface with a magnifying glass and floating coins.',
      caption: 'Live interface capture · 26 Oct 2026 · sentinel-sentry.vercel.app',
    },
  },
  {
    id: 'gameforge',
    caseId: 'DF-09-02',
    title: 'GameForge',
    subtitle: 'Natural-language game studio',
    year: '2026',
    status: 'Live / four agents',
    abstract:
      'Describe a game in plain English and a pipeline of spec, asset, coder, and debug agents writes a playable Phaser 4 scene, injects a foundation engine for physics and HUD, and runs the result inside an isolated sandbox.',
    findings: [
      'Four-agent orchestration with one-click failover across Anthropic, Groq, OpenAI, and Gemini.',
      'A pre-injected engine layer supplies platformer physics, state machine, HUD, and game-feel primitives.',
      'Sandboxed iframe preview with a strict CSP, plus a one-click offline standalone export.',
    ],
    stack: ['Bun', 'Next.js 16', 'TypeScript', 'Phaser 4', 'Supabase', 'LLM orchestration'],
    links: [
      { label: 'Open live build', href: 'https://game-forge-rho.vercel.app/' },
      { label: 'Source', href: 'https://github.com/devinfebrian/GameForge' },
    ],
    image: {
      src: '/evidence/gameforge.png',
      alt: 'GameForge landing page: a dark interface with orange accent and the headline Turn any idea into a playable game in seconds.',
      caption: 'Live interface capture · 26 Oct 2026 · game-forge-rho.vercel.app',
    },
  },
  {
    id: 'file-sorter',
    caseId: 'DF-09-03',
    title: 'Download Sorter',
    subtitle: 'Python file utility',
    year: '2025',
    status: 'Source / packaged',
    abstract:
      'A small cross-platform script that sorts a Downloads folder by file extension into labelled categories, skips its own output, and reports every failure instead of assuming success.',
    findings: [
      'Twelve categories covering images, video, audio, documents, code, data, design files, installers, and folders.',
      'Skip logic protects existing category folders so a second run does not re-sort the archive.',
      'Packaged as a standalone Windows executable with PyInstaller; duplicate filenames fail loudly and stay in place.',
    ],
    stack: ['Python', 'PyInstaller', 'Cross-platform paths'],
    links: [
      { label: 'Source', href: 'https://github.com/devinfebrian/Download-Sorting-Automation' },
    ],
    trace: [
      'Downloads/',
      '  _Code/        .py  .js  .ts  .html  .css',
      '  _Docs/        .pdf  .docx  .txt  .pptx',
      '  _Data/        .csv  .xlsx  .sql',
      '  _Images/      .jpg  .png  .gif',
      '  _Folders/     existing directories',
      '  _Others/      everything unnamed',
    ],
  },
]

export const strayLinks = [
  { label: 'WALLX / Next.js app', href: 'https://wall-x.vercel.app/login' },
  {
    label: 'expense_tracker / JavaScript',
    href: 'https://github.com/devinfebrian/expense_tracker',
  },
  {
    label: 'Public repositories',
    href: 'https://github.com/devinfebrian?tab=repositories',
  },
]
