import { Course } from '../types';

export const COURSES_DATA: Course[] = [
  {
    id: 'gst-tally-pro',
    slug: 'executive-gst-practitioner-tally-prime',
    title: 'Executive GST Practitioner & Advanced TallyPrime 4.0',
    tagline: 'Master Goods & Services Tax e-Filing, GSTR reconciliations, e-Way bills, and accounting compliance with live portal training.',
    category: 'Accounting & GST',
    level: 'Beginner to Advanced',
    duration: '8 Weeks (60 Hours)',
    totalHours: 60,
    originalPrice: 12500,
    discountedPrice: 8999,
    tokenFee: 999,
    image: '/src/assets/images/course_business_finance_1793859145402.jpg',
    rating: 4.9,
    reviewCount: 382,
    certificationBody: 'NSDC & Smartskills Bits & Bytes (P) Ltd.',
    isFeatured: true,
    isPopular: true,
    fab: {
      features: {
        title: 'Core Course Features',
        description: 'End-to-end practical accounting on official GSTN sandbox and real corporate books.',
        highlights: [
          'Live simulation of GST Portal: GSTR-1, GSTR-3B, GSTR-9 annual return filings',
          'Complete TallyPrime 4.0 module with Bank Reconciliation, TDS, TCS & Payroll',
          'Automated e-Invoicing & e-Way Bill generation protocols',
          'Audit scrutiny handling and notice reply drafting templates',
          'Hands-on lab access at Raipur campus with live CA mentor supervision'
        ]
      },
      advantages: {
        title: 'The Smart Skills Advantage',
        description: 'Why Smart Skills India is Chhattisgarh’s foremost accounting academy since 1991.',
        highlights: [
          '34+ years of training pedigree formerly known as Bits & Bytes Computers',
          'Trainers are practicing Chartered Accountants and empanelled NSDC Master Assessors',
          '100% practical lab workstation ratio—no passive textbook lectures',
          'Direct tie-up with 85+ Raipur industrial firms, retail houses, and CA offices',
          'Lifetime access to updated GST law amendments and e-filing webinars'
        ]
      },
      benefits: {
        title: 'Your Career Benefits',
        description: 'Transform into a certified independent GST Consultant or Senior Corporate Accountant.',
        highlights: [
          'Average immediate salary jump to ₹30,000–₹45,000/month or independent consultancy',
          'Nationally recognized NSDC Certificate with Skill India QR-code verification',
          'Guaranteed 3 corporate interview opportunities upon course completion',
          'Confidence to manage end-to-end accounting for MSMEs and private limited firms',
          'Free 1-year advisory support from our senior faculty for complex real-world client filings'
        ]
      }
    },
    modules: [
      {
        number: '01',
        title: 'Foundations of Modern Business Accounting & TallyPrime 4.0',
        duration: '12 Hours',
        topics: ['Chart of Accounts', 'Voucher entry types', 'Cost Centers & Profit Centers', 'Inventory management with batch details']
      },
      {
        number: '02',
        title: 'GST Law, Registration & Calculation Framework',
        duration: '14 Hours',
        topics: ['CGST, SGST, IGST rules', 'Input Tax Credit (ITC) eligibility & restrictions (Rule 36/4)', 'Place of supply rules', 'Reverse Charge Mechanism (RCM)']
      },
      {
        number: '03',
        title: 'Return Filing & Portal Demonstration',
        duration: '18 Hours',
        topics: ['GSTR-1 upload via JSON', 'GSTR-3B monthly payment & ITC set-off', 'GSTR-2B vs 3B live matching', 'Annual return GSTR-9 & audit reconciliation 9C']
      },
      {
        number: '04',
        title: 'E-Invoicing, E-Way Bill & TDS/TCS Operations',
        duration: '16 Hours',
        topics: ['IRN generation API workflow', 'Part A & B e-Way Bill', 'TDS deduction under Sec 194Q', 'Practical assessment & client interview preparation']
      }
    ],
    upcomingBatches: [
      {
        id: 'b-gst-01',
        startDate: 'Nov 18, 2026',
        timing: '8:00 AM - 10:00 AM (Morning)',
        mode: 'Classroom Raipur',
        seatsTotal: 25,
        seatsLeft: 4,
        days: 'Monday to Friday'
      },
      {
        id: 'b-gst-02',
        startDate: 'Nov 22, 2026',
        timing: '5:30 PM - 7:30 PM (Evening)',
        mode: 'Online Live',
        seatsTotal: 30,
        seatsLeft: 7,
        days: 'Monday to Friday'
      },
      {
        id: 'b-gst-03',
        startDate: 'Dec 05, 2026',
        timing: '10:00 AM - 2:00 PM (Weekend)',
        mode: 'Hybrid (Lab + Live)',
        seatsTotal: 20,
        seatsLeft: 9,
        days: 'Saturday & Sunday'
      }
    ],
    targetAudience: ['B.Com / BBA / MBA Students', 'Practicing Accountants', 'Business Owners & Entrepreneurs', 'Career Switchers seeking Finance roles'],
    prerequisites: 'Basic knowledge of accounting principles (Debit & Credit).',
    toolsCovered: ['TallyPrime 4.0', 'GSTN Offline Tool', 'ClearTax', 'MS Excel Advanced', 'e-Way Bill Portal']
  },
  {
    id: 'fullstack-web-ai',
    slug: 'full-stack-web-development-modern-ai',
    title: 'Full-Stack Web Development with React, Node & AI APIs',
    tagline: 'Build production-ready web applications, microservices, and AI integrations with guaranteed placement interviews.',
    category: 'IT & Software',
    level: 'Beginner to Advanced',
    duration: '16 Weeks (160 Hours)',
    totalHours: 160,
    originalPrice: 28000,
    discountedPrice: 19999,
    tokenFee: 999,
    image: '/src/assets/images/course_tech_lab_1793859145078.jpg',
    rating: 4.95,
    reviewCount: 460,
    certificationBody: 'NSDC & Industry Partner Network',
    isFeatured: true,
    isPopular: true,
    fab: {
      features: {
        title: 'Core Course Features',
        description: 'Comprehensive software engineering stack aligned with modern product companies.',
        highlights: [
          'Full-stack mastery: React 19, TypeScript, Tailwind CSS, Node.js, Express & PostgreSQL',
          'Hands-on AI integration: Building apps with Google Gemini API and modern LLM pipelines',
          'Git/GitHub collaboration with pull requests, CI/CD, and Dockerized deployments',
          '6 portfolio capstone projects published live on individual domains',
          'Daily coding sprints in Raipur Tech Lab with gigabit fiber and dual monitors'
        ]
      },
      advantages: {
        title: 'The Smart Skills Advantage',
        description: 'Mentorship led by senior engineering architects with real product delivery experience.',
        highlights: [
          '34-year educational institution trusted by over 35,000 technology graduates',
          '1:1 weekly code reviews and architecture teardowns',
          'Dedicated offline laboratory in Ashirwad Towers, Raipur with mentor assistance',
          'Mock technical whiteboard interviews and Data Structures & Algorithms sprints',
          'Placement network of 120+ software agencies, SaaS firms, and MNC hiring partners'
        ]
      },
      benefits: {
        title: 'Your Career Benefits',
        description: 'Step into junior to mid-level Software Engineer roles with verified engineering portfolios.',
        highlights: [
          'Average starting CTC package ranging from ₹4.8 LPA to ₹8.5 LPA',
          'Guaranteed 5 corporate interview calls with tech recruiters upon graduation',
          'Verifiable NSDC certificate recognized across public and private sectors',
          'Strong GitHub portfolio that replaces traditional resume guesswork',
          'Lifetime access to Smart Skills developer alumni network and hiring referrals'
        ]
      }
    },
    modules: [
      {
        number: '01',
        title: 'Modern Frontend Architecture: React 19 & TypeScript',
        duration: '40 Hours',
        topics: ['TypeScript strict typing', 'Component architecture', 'Tailwind CSS system', 'State management & Hooks', 'Next.js App Router basics']
      },
      {
        number: '02',
        title: 'Scalable Backend Engineering with Node.js & Express',
        duration: '40 Hours',
        topics: ['RESTful API design', 'Authentication & JWT/OAuth', 'PostgreSQL with Drizzle ORM', 'Redis caching', 'API security & rate-limiting']
      },
      {
        number: '03',
        title: 'AI Integration & Intelligent Applications',
        duration: '35 Hours',
        topics: ['Gemini API TypeScript SDK', 'Function calling & structured JSON output', 'Streaming responses', 'Building agentic workflows', 'Vector embeddings']
      },
      {
        number: '04',
        title: 'DevOps, Capstone Launch & Hiring Sprints',
        duration: '45 Hours',
        topics: ['Docker containerization', 'Cloud Run / Vercel deployment', 'Git branching strategies', 'Whiteboard DSA interview preparation', 'Live client capstone']
      }
    ],
    upcomingBatches: [
      {
        id: 'b-fs-01',
        startDate: 'Nov 20, 2026',
        timing: '10:00 AM - 1:00 PM (Morning)',
        mode: 'Classroom Raipur',
        seatsTotal: 20,
        seatsLeft: 3,
        days: 'Monday to Friday'
      },
      {
        id: 'b-fs-02',
        startDate: 'Dec 01, 2026',
        timing: '6:30 PM - 9:30 PM (Evening Live)',
        mode: 'Online Live',
        seatsTotal: 35,
        seatsLeft: 8,
        days: 'Monday to Friday'
      }
    ],
    targetAudience: ['Engineering (B.E./B.Tech/BCA/MCA) Graduates', 'Self-taught coders wanting structured mentoring', 'Career switchers transitioning into Tech'],
    prerequisites: 'Basic familiarity with computer concepts. No prior programming degree needed.',
    toolsCovered: ['React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'Google Gemini API', 'Tailwind CSS', 'Git & GitHub']
  },
  {
    id: 'data-science-analytics',
    slug: 'data-science-business-analytics-python',
    title: 'Data Science & Business Intelligence with Python and Power BI',
    tagline: 'Transform raw datasets into executive insights, automated dashboards, and predictive models.',
    category: 'Data Science & AI',
    level: 'Beginner to Advanced',
    duration: '12 Weeks (90 Hours)',
    totalHours: 90,
    originalPrice: 24000,
    discountedPrice: 16999,
    tokenFee: 999,
    image: '/src/assets/images/course_tech_lab_1793859145078.jpg',
    rating: 4.88,
    reviewCount: 295,
    certificationBody: 'NSDC & Analytics Council Empanelled',
    isFeatured: true,
    fab: {
      features: {
        title: 'Core Course Features',
        description: 'Real-world data manipulation, SQL query optimization, Power BI modeling, and Machine Learning.',
        highlights: [
          'Python data stack: Pandas, NumPy, Matplotlib, Seaborn for deep exploratory data analysis',
          'Enterprise SQL querying: Window functions, CTEs, indexing, and joins on multi-million row datasets',
          'Power BI Pro dashboards: DAX calculations, interactive drill-downs, and automated refresh',
          'Predictive modeling: Linear/Logistic regression, Decision Trees, and Random Forests',
          '10 real business datasets from retail, logistics, healthcare, and banking'
        ]
      },
      advantages: {
        title: 'The Smart Skills Advantage',
        description: 'Industry-first business analytics curriculum rooted in practical corporate decision-making.',
        highlights: [
          'Empanelled training partner with deep regional corporate data tie-ups',
          'Curriculum designed by Lead Data Scientists with 12+ years experience',
          'Weekly hackathons and business case study presentation competitions',
          'Direct mentorship on crafting data portfolios that demonstrate tangible ROI',
          'Mock interview panels featuring corporate Analytics Managers'
        ]
      },
      benefits: {
        title: 'Your Career Benefits',
        description: 'Qualify for lucrative Data Analyst, BI Developer, and Analytics Consultant roles.',
        highlights: [
          'Entry salaries from ₹4.2 LPA to ₹7.2 LPA with accelerated growth trajectory',
          'Verifiable NSDC co-branded Certificate with Skill India authentication',
          'Ability to solve real commercial problems using predictive analytics',
          'Placement referrals to top MNCs and high-growth Indian business groups',
          'Ongoing career counseling and resume crafting by our placement cell'
        ]
      }
    },
    modules: [
      {
        number: '01',
        title: 'Advanced Excel & Business Data Analysis',
        duration: '15 Hours',
        topics: ['Pivot Tables & Power Query', 'VLOOKUP / XLOOKUP', 'Statistical summaries', 'Business forecasting basics']
      },
      {
        number: '02',
        title: 'SQL for Data Science & Relational Databases',
        duration: '25 Hours',
        topics: ['Complex Joins', 'Window functions', 'Subqueries & CTEs', 'Database schema design', 'Performance optimization']
      },
      {
        number: '03',
        title: 'Python for Data Analysis & Visualization',
        duration: '30 Hours',
        topics: ['Pandas dataframes', 'Data cleaning & imputation', 'Seaborn & Plotly charts', 'Feature engineering', 'Scikit-Learn models']
      },
      {
        number: '04',
        title: 'Power BI Business Intelligence & Capstone',
        duration: '20 Hours',
        topics: ['Data modeling & star schema', 'DAX measures', 'Dashboard storytelling', 'Executive presentation of live Capstone']
      }
    ],
    upcomingBatches: [
      {
        id: 'b-ds-01',
        startDate: 'Nov 25, 2026',
        timing: '8:00 AM - 10:00 AM (Morning)',
        mode: 'Classroom Raipur',
        seatsTotal: 20,
        seatsLeft: 5,
        days: 'Monday to Friday'
      },
      {
        id: 'b-ds-02',
        startDate: 'Dec 08, 2026',
        timing: '7:00 PM - 9:00 PM (Evening)',
        mode: 'Online Live',
        seatsTotal: 25,
        seatsLeft: 11,
        days: 'Monday to Friday'
      }
    ],
    targetAudience: ['Graduates from Maths/Stats/CS/Commerce', 'Business Analysts seeking technical elevation', 'Professionals wanting to transition into Data Careers'],
    prerequisites: 'Basic numeracy and logical aptitude. No prior coding experience required.',
    toolsCovered: ['Python', 'Pandas', 'Power BI', 'SQL Server / PostgreSQL', 'Excel Advanced', 'Scikit-Learn']
  },
  {
    id: 'digital-marketing-pro',
    slug: 'advanced-digital-marketing-performance-seo',
    title: 'Certified Performance Digital Marketing & Growth SEO',
    tagline: 'Master Meta Ads, Google PPC campaigns, technical SEO, content funnels, and marketing analytics.',
    category: 'Digital Marketing',
    level: 'Beginner to Advanced',
    duration: '10 Weeks (80 Hours)',
    totalHours: 80,
    originalPrice: 16000,
    discountedPrice: 11499,
    tokenFee: 999,
    image: '/src/assets/images/hero_smart_skills_campus_1793859144760.jpg',
    rating: 4.85,
    reviewCount: 312,
    certificationBody: 'RASCI Accredited & Google Partner Certified',
    isPopular: true,
    fab: {
      features: {
        title: 'Core Course Features',
        description: 'Hands-on live campaign budget execution on Google, Meta, and LinkedIn ads.',
        highlights: [
          'Live ad campaign budget allocated to students to run real Meta & Google Ads',
          'Comprehensive SEO: Keyword research with Ahrefs/SEMrush, on-page, and technical audits',
          'Social media marketing: Reel/Shorts video strategy, influencer outreach, and brand positioning',
          'Marketing automation: WhatsApp Business API, Mailchimp email funnels, and lead CRM integration',
          'Google Analytics 4 (GA4) custom event tracking and conversion rate optimization (CRO)'
        ]
      },
      advantages: {
        title: 'The Smart Skills Advantage',
        description: 'Real client case studies and hands-on ad money spent during training—not theoretical slides.',
        highlights: [
          'Instructors are agency founders running multi-crore annual digital ad campaigns',
          'Smart Skills India’s dedicated digital studio for podcasting and content creation in Raipur',
          'Official partner training curriculum with Google and Meta certification exam prep',
          'Direct client internships arranged through Smart Skills agency wing',
          'Freelancing guidance: How to pitch, price, and sign ₹25,000–₹50,000/month agency retainers'
        ]
      },
      benefits: {
        title: 'Your Career Benefits',
        description: 'Step into in-demand Digital Marketing Executive or Growth Manager positions.',
        highlights: [
          'Immediate job eligibility with salary packages of ₹3.6 LPA to ₹5.5 LPA',
          'Dual certification: Smart Skills India + Google Ads & Meta Certified Media Associate',
          'Freelance readiness: Start earning while learning through domestic and international client work',
          'Guaranteed campus interview rounds with Chhattisgarh & national marketing agencies',
          'Full portfolio of live client ad campaigns with documented ROAS proofs'
        ]
      }
    },
    modules: [
      {
        number: '01',
        title: 'Strategic Marketing Foundations & Content Creation',
        duration: '16 Hours',
        topics: ['Audience personas', 'Brand voice & copywriting', 'Canva Pro for marketing', 'Short-form video storytelling']
      },
      {
        number: '02',
        title: 'Search Engine Optimization (SEO) & Google Analytics',
        duration: '22 Hours',
        topics: ['Technical SEO & Core Web Vitals', 'On-page keyword mapping', 'Backlink acquisition', 'GA4 setup & conversion funnels']
      },
      {
        number: '03',
        title: 'Performance Advertising: Meta & Google Ads',
        duration: '26 Hours',
        topics: ['Meta Business Suite & Pixel', 'Search, Display & YouTube campaigns', 'Bidding strategies & CBO', 'A/B creative testing']
      },
      {
        number: '04',
        title: 'Automation, Freelance Blueprint & Final Review',
        duration: '16 Hours',
        topics: ['WhatsApp & Email drip sequences', 'Freelance contract drafting', 'Portfolio creation', 'Placement interviews']
      }
    ],
    upcomingBatches: [
      {
        id: 'b-dm-01',
        startDate: 'Nov 19, 2026',
        timing: '4:00 PM - 6:00 PM (Evening)',
        mode: 'Classroom Raipur',
        seatsTotal: 20,
        seatsLeft: 6,
        days: 'Monday to Friday'
      },
      {
        id: 'b-dm-02',
        startDate: 'Dec 02, 2026',
        timing: '7:30 PM - 9:30 PM (Night Live)',
        mode: 'Online Live',
        seatsTotal: 30,
        seatsLeft: 12,
        days: 'Monday to Friday'
      }
    ],
    targetAudience: ['College Students & Freshers', 'Marketing Executives wanting Performance Ad skills', 'Small Business Owners & Entrepreneurs', 'Aspiring Freelancers'],
    prerequisites: 'Basic internet literacy and enthusiasm for marketing creativity.',
    toolsCovered: ['Google Ads', 'Meta Ads Manager', 'GA4', 'Ahrefs', 'Canva Pro', 'Mailchimp', 'WordPress']
  },
  {
    id: 'logistics-supply-chain',
    slug: 'logistics-supply-chain-management-specialist',
    title: 'Diploma in Logistics & Supply Chain Operations',
    tagline: 'Certified by Logistics Sector Skill Council (LSC). Fast-track career into warehousing, 3PL, and freight management.',
    category: 'Logistics & Supply Chain',
    level: 'Professional Certification',
    duration: '12 Weeks (100 Hours)',
    totalHours: 100,
    originalPrice: 18500,
    discountedPrice: 13999,
    tokenFee: 999,
    image: '/src/assets/images/course_tech_lab_1793859145078.jpg',
    rating: 4.82,
    reviewCount: 215,
    certificationBody: 'Logistics Sector Skill Council (LSC) & IISC',
    isPopular: false,
    fab: {
      features: {
        title: 'Core Course Features',
        description: 'Industry-standard training mapped to National Occupational Standards (NOS).',
        highlights: [
          'Curriculum certified by Logistics Sector Skill Council (LSC) and NSDC',
          'Warehouse Management Systems (WMS) software and barcode/RFID operations',
          'Freight forwarding, customs clearance, EXIM documentation, and container logistics',
          'Cold chain logistics, hazardous materials handling (HAZMAT), and reverse logistics',
          'Industrial field visits to Raipur Inland Container Depot (ICD) and regional distribution centers'
        ]
      },
      advantages: {
        title: 'The Smart Skills Advantage',
        description: 'Accredited India International Skill Centre (IISC) with global overseas mobility opportunities.',
        highlights: [
          'One of Central India’s premier empanelled training centers for logistics since 1991',
          'Empanelled master assessors who have managed national supply chain fleets',
          'Real warehouse simulation lab with racking, inventory picking, and dispatch workflow',
          'Placement agreements with 45+ logistics giants (Blue Dart, Delhivery, DTDC, DHL, Flipkart Supply)',
          'Assistance with Gulf and Middle East international logistics migration processes'
        ]
      },
      benefits: {
        title: 'Your Career Benefits',
        description: 'High-growth supervisory and management roles in India’s booming logistics sector.',
        highlights: [
          'Starting salary packages of ₹3.5 LPA to ₹5.5 LPA with rapid supervisory promotions',
          'Nationally and internationally recognized LSC & NSDC Skill Card certification',
          '100% placement interview support at our Raipur campus placement drives',
          'Direct qualification for Warehouse Supervisor, Dispatch Coordinator, and Logistics Planner roles',
          'Strong demand driven by regional multi-modal logistics parks in Chhattisgarh'
        ]
      }
    },
    modules: [
      {
        number: '01',
        title: 'Supply Chain Fundamentals & Material Flow',
        duration: '20 Hours',
        topics: ['Supply chain cycles', 'Procurement & vendor management', 'Inbound & outbound logistics', 'Demand forecasting']
      },
      {
        number: '02',
        title: 'Modern Warehousing & Inventory Control',
        duration: '30 Hours',
        topics: ['WMS software navigation', 'Barcoding & RFID picking', 'ABC/XYZ inventory analysis', 'Forklift safety & dock management']
      },
      {
        number: '03',
        title: 'Transportation & Freight Forwarding',
        duration: '25 Hours',
        topics: ['Fleet tracking & GPS telematics', 'Route optimization', 'Multimodal transport', 'B/L, Air Waybill & transport documentation']
      },
      {
        number: '04',
        title: 'EXIM Procedures, Field Study & Placement',
        duration: '25 Hours',
        topics: ['Customs tariff regulations', 'ICD Raipur site visit', 'Health & Safety SOPs', 'Corporate recruitment interviews']
      }
    ],
    upcomingBatches: [
      {
        id: 'b-log-01',
        startDate: 'Nov 24, 2026',
        timing: '11:00 AM - 1:00 PM (Midday)',
        mode: 'Classroom Raipur',
        seatsTotal: 25,
        seatsLeft: 7,
        days: 'Monday to Friday'
      },
      {
        id: 'b-log-02',
        startDate: 'Dec 07, 2026',
        timing: '6:00 PM - 8:00 PM (Evening)',
        mode: 'Hybrid (Lab + Live)',
        seatsTotal: 20,
        seatsLeft: 8,
        days: 'Monday to Friday'
      }
    ],
    targetAudience: ['Graduates looking for high-growth operations careers', 'Diploma holders in Engineering or Commerce', 'Personnel seeking warehouse supervisory qualifications'],
    prerequisites: 'Higher secondary (10+2) or equivalent qualification.',
    toolsCovered: ['WMS Software', 'ERP Inventory Modules', 'MS Excel Logistical Modeling', 'Barcode Systems', 'GPS Tracking Dashboards']
  },
  {
    id: 'retail-store-management',
    slug: 'retail-sales-store-operations-management',
    title: 'Retail Sales Excellence & Store Operations Management',
    tagline: 'Accredited by RASCI (Retailers Association’s Skill Council of India). Direct entry into organized modern retail.',
    category: 'Retail & Sales',
    level: 'Beginner to Intermediate',
    duration: '8 Weeks (60 Hours)',
    totalHours: 60,
    originalPrice: 14000,
    discountedPrice: 9999,
    tokenFee: 999,
    image: '/src/assets/images/hero_smart_skills_campus_1793859144760.jpg',
    rating: 4.79,
    reviewCount: 184,
    certificationBody: 'RASCI & NSDC Empanelled Partner',
    isPopular: false,
    fab: {
      features: {
        title: 'Core Course Features',
        description: 'End-to-end retail store operation, visual merchandising, and high-ticket customer selling.',
        highlights: [
          'Certified by Retailers Association’s Skill Council of India (RASCI)',
          'Retail Point of Sale (POS) software billing, cash reconciliation, and card settlement',
          'Visual merchandising techniques, planogram execution, and product categorization',
          'Customer delight, objection handling, upselling, and conflict resolution drills',
          'Mock retail shop floor setup inside Raipur training facility'
        ]
      },
      advantages: {
        title: 'The Smart Skills Advantage',
        description: 'Decades of direct recruitment tie-ups with India’s leading retail conglomerates.',
        highlights: [
          'Official training partner for RASCI with proven candidate placement track record',
          'Practical roleplay sessions recorded on video with personalized coaching',
          'Campus interview drives attended by Reliance Retail, Aditya Birla, Shoppers Stop & DMart',
          'Comprehensive grooming, corporate etiquette, and verbal confidence building',
          'Experienced retail store managers as guest faculty'
        ]
      },
      benefits: {
        title: 'Your Career Benefits',
        description: 'Immediate appointment in fast-growing retail malls, lifestyle chains, and luxury outlets.',
        highlights: [
          'Starting packages of ₹2.8 LPA to ₹4.2 LPA plus sales incentives and bonuses',
          'Accelerated promotion pathway to Floor Supervisor and Assistant Store Manager within 18 months',
          'Government approved RASCI Skill Certificate valid all across India',
          'Zero recruitment fees: direct placement assistance through Smart Skills placement cell',
          'Permanent membership in the Smart Skills Retail Alumni Club'
        ]
      }
    },
    modules: [
      {
        number: '01',
        title: 'Retail Ecosystem & Customer Service Standards',
        duration: '15 Hours',
        topics: ['Modern retail formats', 'Customer journey mapping', 'Grooming & personal presentation', 'Active listening & empathy']
      },
      {
        number: '02',
        title: 'Store Operations & POS Billing Systems',
        duration: '15 Hours',
        topics: ['POS software mastery', 'Shift opening and closing cash reconciliation', 'Stock audit & inventory receiving', 'Shrinkage & loss prevention']
      },
      {
        number: '03',
        title: 'Visual Merchandising & Consultative Selling',
        duration: '15 Hours',
        topics: ['Planograms & shelf facings', 'Promotional displays', 'Cross-selling & upselling tactics', 'Handling difficult customers']
      },
      {
        number: '04',
        title: 'Retail Simulations & Campus Placement Sprints',
        duration: '15 Hours',
        topics: ['Simulated store mock sales', 'Retail arithmetic (GMROI, sales per sq. ft)', 'HR interview coaching', 'Placement interviews']
      }
    ],
    upcomingBatches: [
      {
        id: 'b-ret-01',
        startDate: 'Nov 27, 2026',
        timing: '9:00 AM - 11:00 AM (Morning)',
        mode: 'Classroom Raipur',
        seatsTotal: 25,
        seatsLeft: 9,
        days: 'Monday to Friday'
      }
    ],
    targetAudience: ['10+2 and College Graduates seeking immediate careers', 'Sales professionals wanting organized retail certification', 'Aspiring Store Managers'],
    prerequisites: 'Higher secondary school certificate (10+2).',
    toolsCovered: ['Retail POS Systems', 'Barcode Scanners', 'Planogram Design', 'MS Excel Retail Metrics']
  },
  {
    id: 'spoken-english-corporate-comm',
    slug: 'spoken-english-corporate-communication-skills',
    title: '"Let\'s Talk in English" - Corporate Fluency & Interview Mastery',
    tagline: 'Overcome hesitation, master fluent spoken English, ace corporate GDs, and command boardroom communication.',
    category: 'Spoken English & Communication',
    level: 'Beginner to Advanced',
    duration: '6 Weeks (45 Hours)',
    totalHours: 45,
    originalPrice: 8500,
    discountedPrice: 5999,
    tokenFee: 999,
    image: '/src/assets/images/course_business_finance_1793859145402.jpg',
    rating: 4.92,
    reviewCount: 540,
    certificationBody: 'Smartskills Bits & Bytes (P) Ltd. Established 1991',
    isPopular: true,
    fab: {
      features: {
        title: 'Core Course Features',
        description: 'Immersive verbal practice, vocabulary enrichment, and public speaking labs.',
        highlights: [
          'Daily speaking drills in small intimate cohorts (maximum 15 candidates per batch)',
          'Phonetics, accent neutralization, and syllable stress correction',
          'Professional business correspondence: Email drafting, reports, and memo structures',
          'Group Discussion (GD) mastery and extempore speech training',
          'Mock HR interview simulations with recorded video playback and structured critique'
        ]
      },
      advantages: {
        title: 'The Smart Skills Advantage',
        description: 'Over 34 years of language mastery coaching that has transformed over 20,000 students.',
        highlights: [
          'Pioneered the famous "Let’s Talk in English" system across Chhattisgarh since 1991',
          'Compassionate, supportive instructors who eliminate the psychological fear of English',
          'Dedicated language lab with speech recording and pronunciation analysis software',
          'Real corporate case studies and boardroom debate topics',
          'Lifetime free entry to Smart Skills English Saturday Conversation Club'
        ]
      },
      benefits: {
        title: 'Your Career Benefits',
        description: 'Unshakable confidence to pass MNC interviews, lead client meetings, and get promoted.',
        highlights: [
          'Qualify for corporate roles where fluent English communication is a strict prerequisite',
          'Dramatic reduction in interview rejection rates due to verbal nervousness',
          'Verifiable Certificate of Professional Communication Excellence',
          'Enhanced interpersonal presence that commands respect in corporate settings',
          'Clear, persuasive speech that accelerates managerial promotion reviews'
        ]
      }
    },
    modules: [
      {
        number: '01',
        title: 'Breaking the Barrier: Fluency & Daily Conversational Habits',
        duration: '10 Hours',
        topics: ['Removing mother-tongue influence', 'Essential sentence structuring', 'Daily colloquial phrases', 'Impromptu 60-second speaking']
      },
      {
        number: '02',
        title: 'Pronunciation, Phonetics & Accent Neutralization',
        duration: '10 Hours',
        topics: ['Vowel and consonant sound clarity', 'Intonation & rhythm in English', 'Eliminating filler words ("um", "ah", "like")', 'Active listening drills']
      },
      {
        number: '03',
        title: 'Corporate Communication & Business Etiquette',
        duration: '12 Hours',
        topics: ['Professional email drafting', 'Meeting participation & voicing opinions', 'Presentation slide delivery', 'Handling conflict diplomatically']
      },
      {
        number: '04',
        title: 'Group Discussions, HR Interview Drills & Final Showcase',
        duration: '13 Hours',
        topics: ['GD entry/exit strategies', 'Answering "Tell Me About Yourself" with impact', 'Salary negotiation roleplays', 'Final graduation showcase']
      }
    ],
    upcomingBatches: [
      {
        id: 'b-eng-01',
        startDate: 'Nov 17, 2026',
        timing: '7:30 AM - 9:00 AM (Early Bird Morning)',
        mode: 'Classroom Raipur',
        seatsTotal: 15,
        seatsLeft: 2,
        days: 'Monday to Friday'
      },
      {
        id: 'b-eng-02',
        startDate: 'Nov 20, 2026',
        timing: '6:00 PM - 7:30 PM (Evening)',
        mode: 'Online Live',
        seatsTotal: 18,
        seatsLeft: 4,
        days: 'Monday to Friday'
      }
    ],
    targetAudience: ['Job Seekers facing rejection in HR interviews', 'Working Professionals needing better presentation skills', 'College Students preparing for campus placements'],
    prerequisites: 'Basic ability to read elementary English.',
    toolsCovered: ['Speech Recording Labs', 'Business Email Templates', 'Interview Video Feedback', 'Grammar AI Tools']
  },
  {
    id: 'cloud-aws-devops',
    slug: 'cloud-computing-aws-devops-solutions-architect',
    title: 'Cloud Solutions Architect & DevOps Engineering with AWS',
    tagline: 'Architect resilient cloud infrastructure on AWS, automate with Docker & Kubernetes, and build CI/CD pipelines.',
    category: 'Cloud & DevOps',
    level: 'Intermediate to Advanced',
    duration: '14 Weeks (110 Hours)',
    totalHours: 110,
    originalPrice: 32000,
    discountedPrice: 22999,
    tokenFee: 999,
    image: '/src/assets/images/course_tech_lab_1793859145078.jpg',
    rating: 4.94,
    reviewCount: 224,
    certificationBody: 'AWS Certification Aligned & NSDC Partner',
    isFeatured: false,
    fab: {
      features: {
        title: 'Core Course Features',
        description: 'Hands-on enterprise cloud infrastructure automation on live AWS accounts.',
        highlights: [
          'AWS core infrastructure: VPC, EC2, S3, RDS, IAM, ALB, Route53 & CloudFront',
          'Infrastructure as Code (IaC) with Terraform for automated server provisioning',
          'Containerization and orchestration with Docker and Kubernetes (EKS)',
          'Automated CI/CD pipelines with GitHub Actions and GitLab CI',
          'High availability, disaster recovery, and cloud cost optimization strategies'
        ]
      },
      advantages: {
        title: 'The Smart Skills Advantage',
        description: 'Guided by Certified AWS Solutions Architects with multi-million dollar cloud infrastructure experience.',
        highlights: [
          'Real AWS sandbox accounts provided to every student—no simulation shortcuts',
          '34-year educational governance ensuring rigorous practical lab curriculum',
          'Simulated chaos engineering drills: Recovery from server crashes and database failovers',
          'Comprehensive preparation for the official AWS Solutions Architect Associate exam (SAA-C03)',
          'Direct referral network to top DevOps consultancies across India'
        ]
      },
      benefits: {
        title: 'Your Career Benefits',
        description: 'Step directly into high-paying Cloud Engineer and Site Reliability Engineer roles.',
        highlights: [
          'Top-tier starting and lateral salary packages from ₹6.5 LPA to ₹12.5 LPA',
          'Highest demand technology vertical in modern software companies',
          'Verifiable certification co-endorsed by Smart Skills India',
          'Real production infrastructure projects in your portfolio to prove capability',
          'Alumni support group for on-the-job cloud troubleshooting'
        ]
      }
    },
    modules: [
      {
        number: '01',
        title: 'Linux Systems Administration & Networking',
        duration: '20 Hours',
        topics: ['Linux shell commands', 'Bash scripting', 'SSH security', 'TCP/IP, DNS, Subnets & Firewalls']
      },
      {
        number: '02',
        title: 'AWS Core Services & Cloud Architecture',
        duration: '35 Hours',
        topics: ['IAM permissions', 'VPC architecture', 'EC2 auto-scaling', 'S3 & RDS backups', 'Serverless AWS Lambda']
      },
      {
        number: '03',
        title: 'Containers & Kubernetes Orchestration',
        duration: '30 Hours',
        topics: ['Docker images & multi-stage builds', 'Docker Compose', 'Kubernetes pods, services, ingress', 'Helm charts']
      },
      {
        number: '04',
        title: 'Terraform, CI/CD Pipelines & Capstone',
        duration: '25 Hours',
        topics: ['Terraform state management', 'GitHub Actions workflow', 'Monitoring with Prometheus/Grafana', 'Production capstone deployment']
      }
    ],
    upcomingBatches: [
      {
        id: 'b-cld-01',
        startDate: 'Dec 01, 2026',
        timing: '8:00 AM - 10:30 AM (Morning)',
        mode: 'Classroom Raipur',
        seatsTotal: 20,
        seatsLeft: 4,
        days: 'Monday to Friday'
      },
      {
        id: 'b-cld-02',
        startDate: 'Dec 12, 2026',
        timing: '10:00 AM - 2:00 PM (Weekend Intensive)',
        mode: 'Online Live',
        seatsTotal: 25,
        seatsLeft: 9,
        days: 'Saturday & Sunday'
      }
    ],
    targetAudience: ['System Administrators & Developers', 'IT Graduates wanting Cloud specialization', 'Tech professionals wanting AWS Certification'],
    prerequisites: 'Basic knowledge of operating systems and command-line interfaces.',
    toolsCovered: ['AWS', 'Terraform', 'Docker', 'Kubernetes', 'GitHub Actions', 'Linux Bash', 'Prometheus']
  }
];

export const CATEGORIES = [
  'All Courses',
  'IT & Software',
  'Accounting & GST',
  'Data Science & AI',
  'Digital Marketing',
  'Logistics & Supply Chain',
  'Retail & Sales',
  'Spoken English & Communication',
  'Cloud & DevOps'
] as const;
