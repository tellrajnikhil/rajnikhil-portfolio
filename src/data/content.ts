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
    slug: "hitachi-globallogic",
    index: "01",
    org: "Hitachi GlobalLogic",
    title: "Enterprise Digital Transformation",
    domain: "Travel · Automotive · Enterprise",
    role: "Technical Project Manager",
    description:
      "Large-scale digital transformation and customer experience delivery across enterprise, travel and automotive clients, including Ford Credit, Expedia Group and TTC Touring.",
    tech: ["Scrum Delivery", "Governance", "QA & Accessibility", "Executive Stakeholders"],
    hasCaseStudy: true,
    featured: true,
  },
  {
    slug: "vituosica",
    index: "02",
    org: "Vituosica",
    title: "Live Video Streaming Platform",
    domain: "Live Events · Creator Economy",
    role: "Technical Project Manager",
    description:
      "A platform connecting artists and audiences through live-streamed events and gig bookings, rebuilt on structured sprint delivery after a period of declining client confidence.",
    tech: ["Ant Media", "WebRTC", "Stripe Connect", "HubSpot", "PubNub", "Firebase"],
    hasCaseStudy: true,
    featured: true,
  },
  {
    slug: "healthcare-workforce-platform",
    index: "03",
    org: "Healthcare Workforce Solution",
    title: "Healthcare Workforce Platform",
    domain: "Healthcare Staffing · US Market",
    role: "Technical Project Manager",
    description:
      "A US healthcare staffing platform connecting facilities, staffing agencies and nurses across web and mobile, with real-time shift management and payroll workflows.",
    tech: ["Flutter", "Node.js", "Angular", "Socket.IO", "Syncfusion"],
    hasCaseStudy: true,
    featured: true,
  },
  {
    slug: "vixo",
    index: "04",
    org: "Vixo",
    title: "Blockchain + Immersive Experience",
    domain: "Live Performance · Emerging Tech",
    role: "Technical Project Manager",
    description:
      "A live-performance platform combining live streaming, augmented reality, 360-degree VR and blockchain-based digital ticketing.",
    tech: ["Live Streaming", "AR", "360° VR", "Blockchain Ticketing"],
    hasCaseStudy: false,
    featured: false,
  },
  {
    slug: "pmgsy-ommas",
    index: "05",
    org: "PMGSY OMMAS",
    title: "Government Digital Platform",
    domain: "Public Sector · Rural Infrastructure",
    role: "Project Engineer / Technology Delivery",
    description:
      "A technology platform supporting the Government of India's rural-road programme, including PFMS accounting integration and training for state-level implementing agencies.",
    tech: ["SQL", "SSRS", "PFMS Integration", "UAT & Training"],
    hasCaseStudy: false,
    featured: false,
  },
  {
    slug: "travx",
    index: "06",
    org: "Travx",
    title: "Lifestyle / Food-Retail Product",
    domain: "Lifestyle · Retail",
    role: "Contributor",
    description: "A product focused on helping users discover offers across food and retail.",
    tech: ["Product Delivery"],
    hasCaseStudy: false,
    featured: false,
  },
];

export const caseStudies: Record<string, CaseStudy> = {
  "hitachi-globallogic": {
    slug: "hitachi-globallogic",
    org: "Hitachi GlobalLogic",
    title: "Enterprise Digital Transformation",
    domain: "Travel · Automotive · Enterprise",
    role: "Technical Project Manager",
    period: "Mar 2024 – Present",
    challenge:
      "Enterprise clients across travel, automotive and broader enterprise domains — including Hitachi, Ford Credit, Expedia Group and TTC Touring — needed digital transformation and customer experience initiatives delivered with the discipline large organisations require: clear governance, predictable delivery and confidence across multiple executive stakeholder groups.",
    myRole: [
      "Own end-to-end technology project delivery across multiple concurrent workstreams.",
      "Manage multiple Scrum teams, coordinating capacity, sequencing and dependencies.",
      "Act as the primary point of contact for client and executive stakeholders.",
      "Run delivery planning and governance, including risk, dependency and issue management.",
      "Oversee QA and accessibility compliance across releases.",
    ],
    solution: [
      "Established a consistent delivery cadence across teams working on parallel client engagements.",
      "Built governance structures that kept executive stakeholders informed without slowing delivery.",
      "Coordinated cross-functional teams spanning engineering, QA and client-side stakeholders.",
      "Introduced process improvements to reduce friction between planning and execution.",
    ],
    technology: ["Agile / Scrum delivery model", "Multi-team coordination", "Enterprise governance frameworks"],
    complexity: [
      "Multiple concurrent enterprise clients with distinct governance expectations.",
      "Coordination across travel, automotive and enterprise domains simultaneously.",
      "Executive-level stakeholder management across client organisations.",
      "Accessibility and QA compliance requirements across releases.",
    ],
    outcome:
      "Delivery for Hitachi, Ford Credit, Expedia Group and TTC Touring has continued under a governed, multi-team Scrum model, with Nikhil accountable for planning, risk visibility and stakeholder confidence across the engagement.",
  },
  vituosica: {
    slug: "vituosica",
    org: "Vituosica",
    title: "Live Video Streaming Platform",
    domain: "Live Events · Creator Economy",
    role: "Technical Project Manager",
    challenge:
      "Vituosica connects artists and audiences for live events and gig bookings, spanning onboarding, event creation, proposal and negotiation workflows and live video streaming across time zones. Nikhil took over the project when delivery was struggling with resource management and client confidence had declined.",
    myRole: [
      "Took ownership of a project in delivery difficulty, with resourcing and confidence issues to address immediately.",
      "Introduced structured weekly sprint planning to rebuild delivery predictability.",
      "Broke down scope into a clear WBS / story structure the team and client could track.",
      "Managed client prioritisation directly, translating stakeholder needs into a workable backlog.",
    ],
    solution: [
      "Rebuilt delivery transparency through consistent sprint reporting and planning rhythms.",
      "Introduced scope and change management practices to control unplanned work.",
      "Managed resourcing across a platform spanning streaming, payments, CRM and messaging integrations.",
      "Coordinated technical dependencies across artist/audience onboarding, event workflows, payments and admin tooling.",
    ],
    technology: [
      "Ant Media & RTMP / WebRTC for live streaming",
      "Stripe Connect for payments",
      "HubSpot CRM integration",
      "PubNub for messaging and presence",
      "Firebase and browser notifications",
    ],
    complexity: [
      "Time-zone handling across a distributed artist and audience base.",
      "Multiple third-party integrations (payments, CRM, messaging) with interdependent delivery timelines.",
      "Admin controls including reporting, banning and suspension workflows.",
      "Rebuilding client confidence while delivery was already in progress.",
    ],
    outcome:
      "Delivery moved from an unstructured, resourcing-constrained state to a predictable weekly sprint rhythm, with clearer scope control, prioritisation and technical dependency coordination across the platform.",
  },
  "healthcare-workforce-platform": {
    slug: "healthcare-workforce-platform",
    org: "Healthcare Workforce Solution",
    title: "Healthcare Workforce Platform",
    domain: "Healthcare Staffing · US Market",
    role: "Technical Project Manager",
    challenge:
      "A US healthcare staffing platform needed to connect facilities, staffing agencies and nurses through synchronised web and mobile applications — covering shift creation, shift selection, payroll, invoicing and real-time communication, under healthcare privacy and security considerations.",
    myRole: [
      "Lead technical delivery across web and mobile applications built on Flutter, Node.js and Angular.",
      "Coordinate a process-definition engine spanning facility shift creation, nurse shift selection and agency management.",
      "Manage delivery across multiple stakeholder groups: facilities, staffing agencies and nurses.",
      "Own traceability and data quality considerations across payroll, assignments and invoicing.",
    ],
    solution: [
      "Coordinated web/mobile synchronisation, including offline data synchronisation for field usage.",
      "Managed real-time communication and notifications using Socket.IO across facility and nurse workflows.",
      "Worked through healthcare privacy and security considerations as part of delivery planning.",
      "Balanced staffing-algorithm complexity with usability for facilities and agencies operating across US time zones.",
    ],
    technology: ["Flutter", "Node.js", "Angular", "Socket.IO", "Syncfusion", "Mixpanel", "Mouseflow"],
    complexity: [
      "Healthcare privacy and security considerations across the platform.",
      "Multiple distinct stakeholder groups with different workflows and incentives.",
      "Offline data synchronisation across web and mobile.",
      "Staffing algorithms operating across US time zones.",
      "Change management and user adoption across facilities, agencies and nurses.",
    ],
    outcome:
      "A synchronised web and mobile platform supporting facility shift creation, nurse shift selection, agency management, payroll and invoicing, delivered under healthcare-grade privacy, security and traceability requirements.",
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
  email: "YOUR_EMAIL_HERE",
  linkedin: "YOUR_LINKEDIN_URL_HERE",
};
