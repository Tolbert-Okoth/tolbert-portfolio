export const projects = [
  {
    "id": "hurst-dfa",
    "title": "Hurst & DFA Research",
    "subtitle": "Statistical estimators & hypothesis testing",
    "categoryLabel": "QUANT RESEARCH / STATISTICAL TESTING",
    "categories": [
      "Quant research"
    ],
    "visual": "statistics",
    "description": "A research framework testing whether daily gold-price regime estimates provide predictive information, using rolling statistical estimators and explicit checks for lookahead.",
    "highlights": [
      "Vectorized R/S and detrended fluctuation analysis estimators",
      "Strictly trailing windows and a lookahead perturbation test",
      "Synthetic-process checks and documented hypothesis outcomes"
    ],
    "evaluation": "The recorded study rejected its predictive hypotheses. The useful output is a testable framework and a documented negative finding.",
    "notes": "Public source includes the estimator implementation, synthetic-process tests, and a results summary. A rejected hypothesis is retained as a research result; it is not presented as a profitable strategy. Results have not been independently rerun for this portfolio.",
    "tech": [
      "Python",
      "NumPy",
      "Time series",
      "Statistical testing"
    ],
    "github": "https://github.com/Tolbert-Okoth/Gold--hurst--daily-classifier",
    "sourceLabel": "Public research source"
  },
  {
    "id": "volatility-lab",
    "title": "Time-Series Research Lab",
    "subtitle": "Data preparation, walk-forward evaluation & calibration",
    "categoryLabel": "QUANT RESEARCH / DATA WORKFLOWS",
    "categories": [
      "Quant research",
      "Data systems"
    ],
    "visual": "validation",
    "description": "Python tooling for preparing market data, generating walk-forward forecasts, and examining probability calibration across separate discovery and confirmation periods.",
    "highlights": [
      "Zipped CSV ingestion, deduplication, OHLC resampling, and Parquet caching",
      "A held-out-period guard that restricts access to confirmation years",
      "Brier-score and calibration-error diagnostics with tabular outputs"
    ],
    "evaluation": "Evaluation code separates discovery from confirmation. Recorded timestamp-alignment caveats still require correction and re-evaluation.",
    "notes": "Reviewed in a local research checkout. The code includes timezone handling, but its data notes also record unresolved daylight-saving clock conventions. No forecast-performance or production-readiness claim is made, and no matching public source has been verified.",
    "tech": [
      "Python",
      "pandas",
      "NumPy",
      "Parquet",
      "Walk-forward evaluation"
    ],
    "sourceLabel": "Local research"
  },
  {
    "id": "osus-features",
    "title": "OSUS Feature Pipeline",
    "subtitle": "Vectorized features & cached model inference",
    "categoryLabel": "QUANT ENGINEERING / PYTHON",
    "categories": [
      "Quant research",
      "Applied ML"
    ],
    "visual": "features",
    "description": "A Python feature and inference layer for quantitative experiments, connecting a defined feature schema to cached LightGBM models and paired candidate scoring.",
    "highlights": [
      "Vectorized pandas/NumPy feature construction across time-series bars",
      "Cached LightGBM loading and explicit feature-column definitions",
      "Separate long/short candidate inference and deeper context features"
    ],
    "evaluation": "Implementation reviewed locally. Runtime gains, live/backtest parity, and trading performance have not been independently verified.",
    "notes": "This case study focuses on feature preparation and inference code. It does not claim a measured speedup, successful trading strategy, or production deployment. The public Osus repository is empty, so this portfolio does not link it as available source.",
    "tech": [
      "Python",
      "pandas",
      "NumPy",
      "LightGBM",
      "Feature engineering"
    ],
    "sourceLabel": "Local engineering project"
  },
  {
    "id": "sauti",
    "title": "SautiYaAfya",
    "subtitle": "Audio processing & model evaluation",
    "categoryLabel": "APPLIED ML / AUDIO ANALYSIS",
    "categories": [
      "Applied ML"
    ],
    "visual": "audio",
    "description": "A respiratory sound-analysis prototype combining shared preprocessing, PyTorch classification, audio quality checks, and asynchronous FastAPI analysis jobs.",
    "highlights": [
      "Sound-pattern classification for normal, wheeze-type, and crackle findings",
      "Multi-recording analysis and noise-robustness experiments",
      "Tests for silence rejection, deterministic inference, and upload validation"
    ],
    "evaluation": "The model detects sound patterns. Recorded research benchmarks do not establish clinical diagnostic accuracy or deployment.",
    "notes": "The current analyzer separates acoustic probabilities from symptom-based escalation. Tests and benchmark files are available in the repository, but they were not rerun for this portfolio. Clinical validation and full offline operation are not claimed.",
    "tech": [
      "Python",
      "PyTorch",
      "FastAPI",
      "NumPy",
      "pytest"
    ],
    "github": "https://github.com/Tolbert-Okoth/sauti-ya-afya",
    "sourceLabel": "Public prototype source"
  },
  {
    "id": "ghoul",
    "title": "Ghoul System",
    "subtitle": "Market-data integration & service fallbacks",
    "categoryLabel": "DATA SYSTEMS / MARKET INTELLIGENCE",
    "categories": [
      "Data systems"
    ],
    "visual": "market",
    "description": "A market-intelligence prototype connecting external price feeds, financial news, Python analysis, database persistence, and real-time dashboard updates.",
    "highlights": [
      "Alpaca-to-Yahoo provider failover with a flagged simulation fallback",
      "Python analysis behind a Node.js service and Socket.io event feed",
      "PostgreSQL signal history and scheduled retention cleanup"
    ],
    "evaluation": "A data-integration example. Simulated fallbacks and AI-generated confidence are not evidence of trading accuracy.",
    "notes": "Source review found deployment-hardening work still needed around administrative routes. The focus here is orchestration, provider failures, and data delivery. Automated execution, profitability, and production readiness are not claimed.",
    "tech": [
      "Python",
      "pandas",
      "Flask",
      "Node.js",
      "Socket.io",
      "PostgreSQL"
    ],
    "github": "https://github.com/Tolbert-Okoth/ghoul-system",
    "sourceLabel": "Public prototype source"
  },
  {
    "id": "afya",
    "title": "Afya-Pulse",
    "subtitle": "Database-backed queues & service integration",
    "categoryLabel": "DATA SYSTEMS / APPLICATION WORKFLOWS",
    "categories": [
      "Data systems"
    ],
    "visual": "pulse",
    "description": "A healthcare intake prototype connecting React interfaces, Node.js APIs, PostgreSQL reports, and a Flask/Groq symptom-analysis service.",
    "highlights": [
      "Active-report updates and persisted triage queues",
      "Socket.io queue events and Firebase token handling",
      "Python-service calls with timeout and fallback handling"
    ],
    "evaluation": "Service integration and queue workflows are present in source. Clinical outcomes and operating scale have not been verified.",
    "notes": "The source illustrates cross-service data flow and authentication integration. Shared-secret configuration and free-form AI-response parsing need hardening before production use.",
    "tech": [
      "PostgreSQL",
      "Node.js",
      "Python",
      "Flask",
      "Socket.io",
      "React"
    ],
    "github": "https://github.com/Tolbert-Okoth/afya-pulse",
    "sourceLabel": "Public prototype source"
  },
  {
    "id": "farmconnect",
    "title": "FarmConnect",
    "subtitle": "Relational workflows & payment callbacks",
    "categoryLabel": "SUPPORTING SOFTWARE / COMMERCE",
    "categories": [
      "Data systems"
    ],
    "visual": "commerce",
    "description": "A multi-vendor marketplace prototype with order records, M-Pesa sandbox checkout, payout requests, and refund workflows.",
    "highlights": [
      "Database-derived payment amounts and buyer-owned order lookups",
      "M-Pesa sandbox STK Push and checkout-to-order mapping",
      "Payout summaries, refund requests, and role-based interfaces"
    ],
    "evaluation": "Payments use the sandbox. Callback verification and concurrent payout handling require further validation.",
    "notes": "This independent prototype supports the relational-data and API story. It is separate from confirmed freelance work, and is not presented as a live financial platform.",
    "tech": [
      "SQL",
      "PostgreSQL",
      "Node.js",
      "Express",
      "React",
      "M-Pesa Sandbox"
    ],
    "github": "https://github.com/Tolbert-Okoth/farmconnect",
    "sourceLabel": "Public prototype source"
  }
];

export const projectFilters = [
  "All work",
  "Quant research",
  "Applied ML",
  "Data systems"
];

export const certifications = [
  {
    "name": "Data Analysis with Python",
    "date": "Jan 2026",
    "link": "https://www.freecodecamp.org/certification/tolbert/data-analysis-with-python-v7"
  },
  {
    "name": "Scientific Computing with Python",
    "date": "Oct 2025",
    "link": "https://www.freecodecamp.org/certification/tolbert/scientific-computing-with-python-v7"
  },
  {
    "name": "Quality Assurance (Node.js)",
    "date": "Aug 2025",
    "link": "https://www.freecodecamp.org/certification/tolbert/quality-assurance-v7"
  },
  {
    "name": "Relational Database (PostgreSQL)",
    "date": "Jul 2025",
    "link": "https://www.freecodecamp.org/certification/tolbert/relational-database-v8"
  },
  {
    "name": "Back End Development and APIs",
    "date": "Jul 2025",
    "link": "https://www.freecodecamp.org/certification/tolbert/back-end-development-and-apis"
  },
  {
    "name": "Data Visualization",
    "date": "Jun 2025",
    "link": "https://www.freecodecamp.org/certification/tolbert/data-visualization"
  },
  {
    "name": "Front End Development Libraries",
    "date": "Jun 2025",
    "link": "https://www.freecodecamp.org/certification/tolbert/front-end-development-libraries"
  },
  {
    "name": "JavaScript Algorithms and Data Structures",
    "date": "Jun 2025",
    "link": "https://www.freecodecamp.org/certification/tolbert/javascript-algorithms-and-data-structures-v8"
  },
  {
    "name": "Responsive Web Design",
    "date": "Jun 2025",
    "link": "https://www.freecodecamp.org/certification/tolbert/responsive-web-design"
  }
];

export const skills = {
  "Python & data": [
    "Python",
    "SQL",
    "pandas",
    "NumPy",
    "PostgreSQL",
    "Parquet"
  ],
  "Research methods": [
    "Time-series features",
    "Walk-forward evaluation",
    "Held-out checks",
    "Probability calibration"
  ],
  "Models & evaluation": [
    "LightGBM",
    "PyTorch",
    "Audio preprocessing",
    "Synthetic-process tests"
  ],
  "Software systems": [
    "FastAPI",
    "Flask",
    "Node.js",
    "Git",
    "pytest",
    "React & Next.js"
  ]
};

export const experience = [
  {
    "id": "research-engineering",
    "kind": "Independent research",
    "context": "Time-series labs · Hurst/DFA study",
    "title": "Research workflows & evaluation",
    "summary": "Quantitative projects connecting data preparation, explicit hypotheses, statistical estimators, and evaluation code.",
    "highlights": [
      "Market-data parsing, deduplication, resampling, and Parquet caches in the local research lab.",
      "Walk-forward tooling with a guard separating discovery from held-out confirmation.",
      "Synthetic-process and lookahead tests in the public Hurst/DFA study, including documented negative findings."
    ],
    "tools": [
      "Python",
      "pandas",
      "NumPy",
      "Time series",
      "Statistical testing"
    ],
    "link": "https://github.com/Tolbert-Okoth/Gold--hurst--daily-classifier"
  },
  {
    "id": "feature-inference",
    "kind": "Independent projects",
    "context": "OSUS · SautiYaAfya",
    "title": "Feature pipelines & applied ML",
    "summary": "Implementation experience spanning numerical feature preparation, model inference, and API-backed analysis.",
    "highlights": [
      "Vectorized feature matrices and cached LightGBM inference in OSUS.",
      "Shared audio preprocessing, sound-pattern classification, and asynchronous FastAPI jobs in SautiYaAfya.",
      "Evaluation code and tests that expose model limitations and unusable inputs."
    ],
    "tools": [
      "Python",
      "LightGBM",
      "PyTorch",
      "FastAPI",
      "pytest"
    ],
    "link": "https://github.com/Tolbert-Okoth/sauti-ya-afya"
  },
  {
    "id": "data-services",
    "kind": "Independent projects",
    "context": "Ghoul System · Afya-Pulse",
    "title": "APIs & data delivery",
    "summary": "Project work moving data between Python services, Node.js APIs, PostgreSQL storage, and real-time interfaces.",
    "highlights": [
      "Market-feed provider fallbacks, signal persistence, and scheduled retention in Ghoul System.",
      "Persisted report queues and Socket.io updates in Afya-Pulse.",
      "Service timeouts, failure paths, and authenticated application workflows."
    ],
    "tools": [
      "SQL",
      "PostgreSQL",
      "Python",
      "Node.js",
      "Socket.io"
    ],
    "link": "https://github.com/Tolbert-Okoth/ghoul-system"
  },
  {
    "id": "freelance-commerce",
    "kind": "Freelance",
    "context": "Spare-parts commerce prototype",
    "title": "Full stack software delivery",
    "summary": "Confirmed freelance work on a spare-parts catalogue and ordering prototype, with a relational product model and administration workflows.",
    "highlights": [
      "Product search and many-to-many equipment compatibility in Prisma/PostgreSQL.",
      "Server-side checkout validation, database-priced totals, and transactional order creation.",
      "Admin sessions and a simulated checkout flow. Other private engagements remain confidential."
    ],
    "tools": [
      "TypeScript",
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS"
    ]
  }
];
