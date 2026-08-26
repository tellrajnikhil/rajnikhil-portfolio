export type ProjectSummary = {
  slug: string;
  index: string;
  org: string;
  title: string;
  domain: string;
  role: string;
  description: string;
  tech: string[];
  hasCaseStudy: boolean;
  featured: boolean;
};

export type CaseStudy = {
  slug: string;
  org: string;
  title: string;
  domain: string;
  role: string;
  period?: string;
  challenge: string;
  myRole: string[];
  solution: string[];
  technology: string[];
  complexity: string[];
  outcome: string;
};

export const projects: ProjectSummary[] = [
  {
    slug: "hitachi-lsh",
    index: "01",
    org: "Hitachi GlobalLogic",
    title: "Hitachi LSH — Lumada Solution",
    domain: "Enterprise · Internal Service Portal",
    role: "Technical Project Manager",
    description:
      "Led delivery of an internal service portal designed to streamline enterprise-tool access and reduce manual provisioning across the organisation.",
    tech: ["Service Portal", "Access Provisioning", "Agile Delivery", "Governance"],
    hasCaseStudy: true,
    featured: true,
  },
  {
    slug: "expedia-loyalty-experience",
    index: "02",
    org: "Expedia Group",
    title: "Loyalty Experience",
    domain: "Travel · Customer Experience",
    role: "Program Manager",
    description:
      "Managed multiple customer-experience modules including flight-delay benefits, agent incentives, accessibility and quality improvements.",
    tech: ["Customer Experience", "Loyalty", "Agile Delivery", "Accessibility"],
    hasCaseStudy: true,
    featured: true,
  },
  {
    slug: "ford-credit",
    index: "03",
    org: "Ford Credit",
    title: "Mobile Financial Experience",
    domain: "Automotive · FinTech",
    role: "Technical Project Manager",
    description:
      "Delivered an Android and iOS mobile experience helping vehicle owners manage payments, lease information and financial transactions.",
    tech: ["Mobile", "Android", "iOS", "Digital Finance"],
    hasCaseStudy: true,
    featured: true,
  },
  {
    slug: "ttc-touring",
    index: "04",
    org: "TTC Touring",
    title: "Travel Shopping & Cart Modernisation",
    domain: "Travel · Platform Modernisation",
    role: "Technical Project Manager",
    description:
      "Led a redesigned travel-package shopping and cart experience backed by reusable architecture supporting multiple TTC brands.",
    tech: ["Platform Modernisation", "Canonical Architecture", "Multi-brand", "UX"],
    hasCaseStudy: true,
    featured: true,
  },
  {
    slug: "vituosica",
    index: "05",
    org: "Vituosica",
    title: "Live Video Streaming Platform",
    domain: "Live Events · Creator Economy",
    role: "Technical Project Manager",
    description:
      "A live-streaming and gig-booking platform for artists and audiences, rebuilt around disciplined sprint delivery after a period of declining client confidence.",
    tech: ["Ant Media", "RTMP", "Stripe Connect", "HubSpot", "PubNub"],
    hasCaseStudy: true,
    featured: true,
  },
  {
    slug: "healthcare-workforce-platform",
    index: "06",
    org: "Healthcare Workforce Solution",
    title: "Healthcare Workforce Platform",
    domain: "Healthcare Staffing · US Market",
    role: "Technical Project Manager",
    description:
      "A synchronised web and mobile staffing ecosystem connecting facilities, agencies and nurses across shifts, payroll, invoicing and real-time workflows.",
    tech: ["Flutter", "Node.js", "Angular", "Socket.IO", "Syncfusion"],
    hasCaseStudy: true,
    featured: true,
  },
  {
    slug: "vixo",
    index: "07",
    org: "Vixo",
    title: "Blockchain + Immersive Experience",
    domain: "Live Performance · Emerging Tech",
    role: "Technical Project Manager",
    description:
      "A digital live-performance experience combining streaming, augmented reality, 360° VR and blockchain-enabled ticketing.",
    tech: ["Live Streaming", "AR", "360° VR", "Blockchain"],
    hasCaseStudy: true,
    featured: false,
  },
  {
    slug: "travx",
    index: "08",
    org: "Travx",
    title: "Lifestyle & Food-Retail Discovery",
    domain: "Lifestyle · Retail",
    role: "Project Delivery",
    description:
      "A mobile-oriented web experience helping users discover relevant offers across food and retail.",
    tech: ["Web Product", "Mobile UX", "Offers", "Retail"],
    hasCaseStudy: true,
    featured: false,
  },
  {
    slug: "pmgsy-ommas",
    index: "09",
    org: "PMGSY OMMAS",
    title: "Government Digital Platform",
    domain: "Public Sector · Rural Infrastructure",
    role: "Project Engineer / Technology Delivery",
    description:
      "Supported a government digital platform for India's rural-road programme, including application delivery, PFMS integration, UAT and state-level training.",
    tech: ["SQL", "SSRS", "PFMS", "UAT & Training"],
    hasCaseStudy: true,
    featured: false,
  },
];

export const caseStudies: Record<string, CaseStudy> = {
  "hitachi-lsh": {
    slug: "hitachi-lsh",
    org: "Hitachi GlobalLogic",
    title: "Hitachi LSH — Lumada Solution",
    domain: "Enterprise · Internal Service Portal",
    role: "Technical Project Manager",
    period: "2024 — Present",
    challenge:
      "The LSH initiative focused on improving how employees access enterprise tools. The initial phase needed a practical internal service portal that could centralise and simplify access to tools such as GitHub and Miro while reducing manual operational effort.",
    myRole: [
      "Led the technical project team responsible for delivery of the internal service portal.",
      "Translated business and operational requirements into an actionable delivery backlog.",
      "Coordinated engineering, QA and stakeholder dependencies through Agile delivery.",
      "Maintained delivery governance, risks, priorities and stakeholder communication.",
    ],
    solution: [
      "Established a clear delivery rhythm around portal capabilities and access workflows.",
      "Prioritised the highest-value provisioning journeys first to demonstrate operational benefit.",
      "Aligned technical delivery with enterprise governance and stakeholder expectations.",
      "Focused the team on a reusable foundation for future enterprise-tool integrations.",
    ],
    technology: ["Internal service portal", "Enterprise access provisioning", "Agile / Scrum", "Delivery governance"],
    complexity: [
      "Enterprise access and governance requirements.",
      "Multiple stakeholder groups with different operational needs.",
      "Integration and workflow dependencies across enterprise tools.",
    ],
    outcome:
      "The project created a more structured path for enterprise-tool access and established a scalable foundation for expanding internal provisioning capabilities.",
  },
  "expedia-loyalty-experience": {
    slug: "expedia-loyalty-experience",
    org: "Expedia Group",
    title: "Loyalty Experience",
    domain: "Travel · Customer Experience",
    role: "Program Manager",
    period: "2024 — Present",
    challenge:
      "The Expedia loyalty experience programme spans multiple modules and stakeholders, requiring disciplined coordination, process compliance and clear communication while customer-facing enhancements move through delivery.",
    myRole: [
      "Manage multiple modules within the loyalty experience programme.",
      "Bridge communication gaps across product, engineering and business stakeholders.",
      "Maintain delivery alignment with Expedia processes and documentation standards.",
      "Coordinate enhancements from prioritisation through release.",
    ],
    solution: [
      "Delivered flight-delay benefit workflows that notify customers and guide them through compensation redemption.",
      "Coordinated the Save Your Way module enabling travel agents to earn rewards through eligible booking channels.",
      "Managed accessibility and quality improvements across customer-facing experiences.",
      "Maintained a clear delivery cadence across multiple concurrent modules.",
    ],
    technology: ["Customer experience platforms", "Loyalty workflows", "Agile delivery", "Accessibility & QA"],
    complexity: [
      "Multiple modules and stakeholder groups.",
      "Customer-facing journeys with operational and financial implications.",
      "Strict enterprise processes and documentation standards.",
    ],
    outcome:
      "Multiple loyalty and customer-experience capabilities progressed through a governed delivery model while maintaining stakeholder alignment and quality expectations.",
  },
  "ford-credit": {
    slug: "ford-credit",
    org: "Ford Credit",
    title: "Mobile Financial Experience",
    domain: "Automotive · FinTech",
    role: "Technical Project Manager",
    period: "Hitachi GlobalLogic",
    challenge:
      "Ford Credit needed a simpler mobile experience for consumers and dealerships to manage vehicle-finance information, payments, lease details and financial transactions across Android and iOS.",
    myRole: [
      "Coordinated delivery across mobile engineering, QA and product stakeholders.",
      "Managed dependencies and release planning across Android and iOS.",
      "Kept delivery focused on usability and reliable financial workflows.",
      "Supported stakeholder communication and delivery governance.",
    ],
    solution: [
      "Coordinated a mobile application designed around the most important vehicle-finance journeys.",
      "Structured delivery around payments, lease information and transaction visibility.",
      "Aligned platform behaviour across Android and iOS to maintain a consistent experience.",
    ],
    technology: ["Android", "iOS", "Mobile application delivery", "Digital finance"],
    complexity: [
      "Financially sensitive customer workflows.",
      "Cross-platform consistency.",
      "Release quality and stakeholder coordination.",
    ],
    outcome:
      "The mobile experience provided customers with a more accessible way to manage vehicle-finance information and everyday account activities.",
  },
  "ttc-touring": {
    slug: "ttc-touring",
    org: "TTC Touring",
    title: "Travel Shopping & Cart Modernisation",
    domain: "Travel · Platform Modernisation",
    role: "Technical Project Manager",
    period: "Hitachi GlobalLogic",
    challenge:
      "TTC needed to modernise the travel-package shopping journey and introduce a reusable cart experience that could support multiple brands without rebuilding the core platform for every brand.",
    myRole: [
      "Led delivery of the shopping and cart experience across product, engineering and stakeholders.",
      "Coordinated architecture, backend and UI dependencies.",
      "Managed delivery of a reusable solution rather than separate brand implementations.",
      "Kept the programme aligned to customer journey and operational requirements.",
    ],
    solution: [
      "Delivered a new shopping cart system with an improved customer journey.",
      "Used a modern backend engine and reusable canonical architecture.",
      "Separated reusable platform logic from brand-specific presentation.",
      "Designed the model so brands such as Trafalgar and Costsaver could reuse the same foundation with focused UI differences.",
    ],
    technology: ["Canonical architecture", "Backend modernisation", "Reusable platform", "Multi-brand delivery"],
    complexity: [
      "Multiple travel brands with different presentation needs.",
      "Reusable architecture without compromising brand experience.",
      "Coordination across shopping, cart and backend workflows.",
    ],
    outcome:
      "The solution created a reusable foundation for TTC brands, reducing duplication while improving the travel-shopping and cart experience.",
  },
  "vituosica": {
    slug: "vituosica",
    org: "Vituosica",
    title: "Live Video Streaming Platform",
    domain: "Live Events · Creator Economy",
    role: "Technical Project Manager",
    challenge:
      "Vituosica connects artists and audiences for live events and gig bookings. When I took over, delivery was struggling with resource management and client confidence had declined.",
    myRole: [
      "Took ownership of a project facing delivery and resourcing challenges.",
      "Introduced structured weekly sprint planning to rebuild predictability.",
      "Broke down scope into manageable work and aligned priorities directly with the client.",
      "Coordinated teams across streaming, payments, CRM, messaging and platform workflows.",
    ],
    solution: [
      "Established weekly sprint planning and transparent prioritisation.",
      "Introduced stronger scope and change management practices.",
      "Coordinated artist and audience onboarding, event workflows, proposals and payments.",
      "Managed integrations with Ant Media, Stripe Connect, HubSpot and PubNub.",
      "Addressed timezone, compliance and operational controls as part of delivery.",
    ],
    technology: [
      "Ant Media / RTMP",
      "Stripe Connect",
      "HubSpot CRM",
      "PubNub",
      "Firebase",
    ],
    complexity: [
      "Multi-timezone live-event workflows.",
      "Interdependent third-party integrations.",
      "Streaming, payments, messaging and CRM in one platform.",
      "Rebuilding client confidence during active delivery.",
    ],
    outcome:
      "Delivery moved from an unstructured, resourcing-constrained state to a predictable sprint rhythm with clearer scope control, prioritisation and technical dependency coordination. The platform was prepared for production release in July 2022.",
  },
  "healthcare-workforce-platform": {
    slug: "healthcare-workforce-platform",
    org: "Healthcare Workforce Solution",
    title: "Healthcare Workforce Platform",
    domain: "Healthcare Staffing · US Market",
    role: "Technical Project Manager",
    challenge:
      "A US healthcare staffing platform needed to connect facilities, staffing agencies and nurses through synchronised web and mobile applications covering shifts, payroll, invoicing and real-time communication.",
    myRole: [
      "Led technical delivery across Flutter, Node.js and Angular applications.",
      "Coordinated multiple stakeholder groups across facilities, agencies and nurses.",
      "Managed traceability, data quality and process-definition requirements.",
      "Worked through privacy, security and compliance considerations during delivery.",
    ],
    solution: [
      "Coordinated web/mobile synchronisation, including offline data synchronisation.",
      "Managed real-time communication and notifications using Socket.IO.",
      "Supported centralised staffing workflows for shifts, payroll and assignments.",
      "Balanced complex staffing requirements with usability across US time zones.",
    ],
    technology: ["Flutter", "Node.js", "Angular", "Socket.IO", "Syncfusion", "Mixpanel", "Mouseflow"],
    complexity: [
      "Healthcare privacy and security considerations.",
      "Multiple stakeholder workflows.",
      "Offline mobile synchronisation.",
      "Staffing algorithms and US time-zone complexity.",
    ],
    outcome:
      "A synchronised web and mobile platform supported facility shift creation, nurse shift selection, agency management, payroll and invoicing with strong traceability and operational controls.",
  },
  "vixo": {
    slug: "vixo",
    org: "Vixo",
    title: "Blockchain + Immersive Experience",
    domain: "Live Performance · Emerging Tech",
    role: "Technical Project Manager",
    period: "2021",
    challenge:
      "Vixo aimed to bring professional live performances into a digital environment where audiences could experience live streaming, augmented reality and 360-degree VR from home, while using blockchain-enabled ticketing.",
    myRole: [
      "Led the project delivery for a complex emerging-technology architecture.",
      "Coordinated requirements spanning streaming, immersive experience and ticketing.",
      "Managed technical dependencies across multiple new technology components.",
      "Kept the programme aligned around the end-to-end audience experience.",
    ],
    solution: [
      "Coordinated live-performance streaming with immersive 360° VR and AR experiences.",
      "Integrated a blockchain wallet concept for digital ticket booking.",
      "Structured delivery around the interaction between audience experience and backend services.",
    ],
    technology: ["Live streaming", "Augmented reality", "360° VR", "Blockchain wallet"],
    complexity: [
      "Multiple emerging technologies in one customer journey.",
      "Real-time performance delivery.",
      "Immersive experience and digital ticketing dependencies.",
    ],
    outcome:
      "The project established an ambitious digital-performance experience combining live streaming, immersive media and blockchain-based ticketing.",
  },
  "travx": {
    slug: "travx",
    org: "Travx",
    title: "Lifestyle & Food-Retail Discovery",
    domain: "Lifestyle · Retail",
    role: "Project Delivery",
    period: "Earlier Career",
    challenge:
      "Travx was a web experience designed around mobile usage in the lifestyle and food-retail space, helping users discover relevant offers.",
    myRole: [
      "Contributed to delivery of the mobile-oriented web product.",
      "Supported coordination between product requirements and implementation.",
      "Focused on a clear offer-discovery journey for end users.",
    ],
    solution: [
      "Structured the experience around mobile discovery and offer visibility.",
      "Supported a straightforward browsing flow for lifestyle and food-retail deals.",
    ],
    technology: ["Web product delivery", "Mobile-first UX", "Offer discovery"],
    complexity: [
      "Mobile-oriented experience design.",
      "Fast discovery and content presentation.",
    ],
    outcome:
      "Delivered a focused offer-discovery experience for lifestyle and food-retail users.",
  },
  "pmgsy-ommas": {
    slug: "pmgsy-ommas",
    org: "PMGSY OMMAS",
    title: "Government Digital Platform",
    domain: "Public Sector · Rural Infrastructure",
    role: "Project Engineer / Technology Delivery",
    period: "2018 — 2020",
    challenge:
      "PMGSY was launched to provide all-weather connectivity to eligible unconnected rural habitations. The digital platform needed reliable application support, financial integration and adoption across state-level implementing agencies.",
    myRole: [
      "Contributed to application development and technology delivery.",
      "Worked with SQL and SSRS for data and reporting requirements.",
      "Supported PFMS accounting integration.",
      "Participated in UAT and trained state-level implementing agencies.",
    ],
    solution: [
      "Supported reporting and application workflows used by programme stakeholders.",
      "Integrated financial-process requirements through PFMS.",
      "Supported quality assurance, user acceptance and training for distributed users.",
    ],
    technology: ["SQL", "SSRS", "PFMS integration", "UAT", "Training"],
    complexity: [
      "Government programme scale and distributed stakeholders.",
      "Financial reporting and integration requirements.",
      "Training and adoption across implementing agencies.",
    ],
    outcome:
      "Supported a large public-sector digital platform serving rural-infrastructure programme stakeholders, combining application delivery, reporting, financial integration and user enablement.",
  },
};

export type ExperienceRole = {
  period: string;
  org: string;
  title: string;
  points: string[];
};

export const experience: ExperienceRole[] = [
  {
    period: "Mar 2024 — Present",
    org: "Hitachi GlobalLogic",
    title: "Technical Project Manager",
    points: [
      "Deliver enterprise digital transformation and customer experience initiatives across travel, automotive and enterprise clients.",
      "Manage multiple Scrum teams and lead client and executive stakeholder relationships.",
      "Own delivery planning, governance, and risk and dependency management.",
    ],
  },
  {
    period: "Jun 2021 — Feb 2024",
    org: "Oodles Technologies",
    title: "Technical Project Manager",
    points: [
      "Led technical delivery across multiple client platforms, including live streaming, healthcare workforce and blockchain-enabled products.",
      "Managed cross-functional teams spanning engineering, QA and product stakeholders.",
      "Rebuilt delivery structure and client confidence on engagements facing resourcing challenges.",
    ],
  },
  {
    period: "Oct 2020 — May 2021",
    org: "MapUp",
    title: "Data Analyst",
    points: [
      "Worked on data analysis and reporting to support client decision-making.",
      "Built foundation in data quality, structuring and analytics that continues to inform delivery leadership today.",
    ],
  },
  {
    period: "2018 — Sep 2020",
    org: "C-DAC R&D",
    title: "Project Engineer",
    points: [
      "Contributed to the PMGSY OMMAS government digital platform for India's rural-road programme.",
      "Worked across application development, SQL, SSRS and PFMS accounting integration.",
      "Supported QA/UAT and trained state-level implementing agencies on the platform.",
    ],
  },
  {
    period: "2017",
    org: "Harivara, Bengaluru",
    title: "Software Engineer",
    points: ["Early engineering role building foundational software development experience."],
  },
];

export const expertise = [
  { index: "01", title: "Technical Project Management" },
  { index: "02", title: "AI & GenAI" },
  { index: "03", title: "Digital Transformation" },
  { index: "04", title: "Data & Analytics" },
  { index: "05", title: "Cloud & Modern Technology" },
  { index: "06", title: "Agile / Scrum" },
  { index: "07", title: "Stakeholder Management" },
  { index: "08", title: "Delivery & Programme Management" },
];

export const aiTechnology = [
  "Generative AI & RAG",
  "AI Agents & Automation",
  "Data Lakes & Lakehouses",
  "Data Warehouses",
  "Cloud Platforms",
  "APIs & Integrations",
  "Governance & Human-in-the-loop",
  "Digital Transformation",
  "Data & Analytics",
];

export const approach = [
  {
    index: "01",
    title: "Business problem first",
    body: "Translate strategic intent into a clear, testable delivery case.",
  },
  {
    index: "02",
    title: "Architecture & alignment",
    body: "Connect requirements, technology choices, dependencies and ownership.",
  },
  {
    index: "03",
    title: "Agile execution",
    body: "Create an operating rhythm that keeps risks visible and decisions timely.",
  },
  {
    index: "04",
    title: "Responsible AI",
    body: "Build human oversight, governance, quality controls and trust into delivery.",
  },
];

export const contactInfo = {
  email: "tellrajnikhil@gmail.com",
  linkedin: "https://www.linkedin.com/in/tellrajnikhil/",
};
