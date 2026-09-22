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
  technologyDetails?: {
    title: string;
    text: string;
    bullets: string[];
  }[];
  functionalDetails?: {
    title: string;
    text: string;
  }[];
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
      "Vituosica is a live video streaming platform for artists and audiences, where artists can reach audiences, book gigs and audiences can get live music events.\n\nIt was the month of January 2022 when I took over the project. As it was the project's initial phase, the resources were not adequately managed and had poor output, resulting in the client's dissatisfaction. In any successful project, the project owner must have confidence in the executing team. Which at the initial level was lacking. I along with my tech lead decided to gain that confidence first and to gain that confidence we need to put results on the table. So we decided to have a sprint plan working session every week where we usually tried to break every story from the WBS into a small section and rearrange it according to the priority set by our client.\n\nIn the first sprint, we tried to build the admin panel where everything could be controlled. As this section was not that exposed to the public so we did not bother much about the interfaces but somehow we managed this section without UI/UX designer.\n\nIn the first two-three sprints, we started with onboarding the user profile that includes both artists and an audience. The only difference was that the application of the artist was to be approved by the admin panel first. After onboarding our platform we started working on the dashboard for both the users so these tasks were included in the fourth and fifth sprints. The work on the creation of any event started in sprint sixth. Those who create the event we call the ‘Event Owner’ so after events are created those come under the gigs section of our dashboard. To move forward with this event the artist or the event owner needs to initiate the proposals for respective events after a couple of negotiations if that event is finished then the event owner needs to pay through the stripe. This solicitation and negotiation part was executed by my dedicated team in the seventh and eighth sprints. In the USA there are various timezones that need to be handled to minimize the misconception about the timezone so here we added a parameter to input the user's timezone in the profile section and the event that appears to them will be in their local timezone.\n\nNow It was time for the event initiation solution. We used the Ant Media server for the live streaming activity that was part of our sprint tenth. After the initiation of the event, we had to manage the compliance factor so we included the activity of ban, suspend, and report feature in the eleventh sprint. The payment process was managed by the stripe connect flow which we integrated from our application and the CRM activity was managed by HubSpot which was done in the twelfth and thirteenth sprints. After all the successful and rigorous testing of our application, we are good to go for production on 1st July.",
    myRole: [
      "Took ownership of a project facing delivery and resourcing challenges.",
      "Introduced a weekly sprint plan working session to rebuild client confidence through visible results.",
      "Broke down every story from the WBS into smaller sections and rearranged work according to client priorities.",
      "Coordinated delivery across streaming, payments, CRM, messaging, compliance and platform workflows.",
    ],
    solution: [
      "Built the admin panel first so the core platform could be controlled centrally.",
      "Onboarded artists and audiences, including admin approval for artist applications.",
      "Delivered dashboards, event creation, gigs, proposals, negotiation and payment workflows across successive sprints.",
      "Added user timezone handling so events appear in the user's local timezone.",
      "Integrated Ant Media for live streaming, Stripe Connect for payments and HubSpot for CRM activity.",
      "Added ban, suspend and report capabilities as part of the compliance workflow.",
    ],
    technology: [
      "Ant Media / RTMP",
      "HubSpot CRM",
      "PubNub Messaging",
      "Stripe Connect",
      "Firebase",
    ],
    complexity: [
      "Multi-timezone live-event workflows.",
      "Streaming, payments, messaging and CRM in one platform.",
      "Interdependent third-party integrations.",
      "Rebuilding client confidence during active delivery.",
    ],
    technologyDetails: [
      {
        title: "Ant Media",
        text:
          "As this project was related to the streaming platform and literally this feature was the crux of the entire project. For the live streaming solution, we used Ant Media’s RTMP technology. It is a streaming engine software that provides adaptive, ultra-low latency streaming with ~0.5 seconds latency. Ant Media Server is highly scalable both horizontally and vertically. It can run on-premise or on the cloud. Using this technology we made platforms that are in-app streaming and others through third-party vendors like OBS.",
        bullets: [
          "An RTMP (Real-Time Messaging Protocol) link is a type of link used to stream live video and audio over the internet. Ant Media is a media server software that can be used to create and manage RTMP streams. To use an RTMP link with Ant Media, we had to set up an Ant Media server and configure it to accept RTMP connections. Once this was done, we used the RTMP link to stream live video and audio to our viewers.",
          "WebRTC (Web Real-Time Communication) is mainly used for small-scale live streaming so we decided to go with RTMP",
          "For the in-app streaming solution: There were primary issues which was selecting and making it default the peripheral devices in the browser we brought the solution then there were issues those selected peripheral devices were turned on throughout the application after accessing once. This was a major security issue that was addressed",
          "Third-party streaming solution: In this, we generated an RTMP link, and the artist can go live using that link. The link that was generated did not have an expiry time nor ant media was able to help so in order to know the status of the live performance going through the link we used webhook to get back the status is the event was closed and then manage internally for the rest of the further process",
          "Limiting the views: Next client wanted to restrict the viewers and wanted to know the active people so in order to activate we had various conversations from the Ant Media team to get the exact viewers on that performance",
        ],
      },
      {
        title: "Hubspot CRM",
        text:
          "In its most basic terms, HubSpot implementation is designed to get all of the information your team needs into one, centralized location that will house and track all communications between your team and your users here Artist / Audience moving forward. The HubSpot dashboard was maintained by our client and they created all the forms under that. They wanted data into the HubSpot dashboard from our application. There were two ways to use JSON and other was using APIs. First, we tried using JSON but the problem was when we used it in our application our frontend forms were changed to HubSpot’s form. This totally ruined our UI so next, we decided to integrate HubSpot APIs into our data set with the form id and the portal id.",
        bullets: [],
      },
      {
        title: "Pubnub messaging",
        text:
          "For any customer handling platform, the conversation is basic so for our application, we decided to use a third-party integration to ease our work but trust me this was not that easy. In this for any user, one channel id was generated where all the messages come under the same irrespective of sent or received, here we had to distinguish among these.",
        bullets: [
          "Reordering messaging issue: In general, PubNub does not guarantee that they are stored or sent in the exact same order in which they are published. Our application requires messages to be processed in the same order they were published, So we added a sequence field to the message payload and use it to order messages when they are received by the subscriber.",
          "Web notifications issues: PubNub did not support push notifications on the web so we had to use google firebase for the browser notification",
          "Online Presence: Under this, we were having difficulty in getting the user presence. PubNub's HereNow method returns the list of User UUID who are actively subscribed on the given channel but hereNow call response returned a blank list of UUIDs which means no user is actively subscribed on your given channel. So as soon as any user is offline we used a push notification for the users to check the active status.",
        ],
      },
      {
        title: "Stripe Connect",
        text:
          "For managing the transaction and escrow refund method we used a beautiful product of stripe which is called stripe connect. This we used to handle many functionalities",
        bullets: [
          "Subscription plan of the artist: With Subscriptions, customers make recurring payments for access to a product. Subscriptions require you to retain more information about your customers than one-time purchases do because you need to charge customers in the future. Under this, we first made four subscription plans in the stripe portal which later were mapped to the artist in which they are interested. For each subscription, the artist enjoys different privileges.",
          "Refund - You can refund charges made to your account, either in whole or in part. Refunds use your available Stripe balance. Under this, we made different scenarios in our backend depending upon the cancellation date of the events.",
          "Payout - For the payout, we made an escrow method for paying the artist directly after performing any events without any fail.",
          "Radar - Stripe allows you to implement unique business logic so you can write fraud prevention rules specific to your business.",
          "Coupons: A coupon contains information about a percent-off or amount-off discount you might want to apply to a customer",
        ],
      },
    ],
    functionalDetails: [
      {
        title: "Scope creep",
        text:
          "At the initial stage apart from the ongoing work, there were a few requirements from the client and they wanted to know about the estimation of each task.This client was very tech-savvy and went into detained things. In this case, we did deep research on their requirements but meanwhile, our sprint work got hampered so we decided to control these things and clearly mentioned defining the priority of the tasks and they understood the things and reduced their research work. Since then we used to add and remind the client of the change of the scope and traced the same.",
      },
      {
        title: "Balanced skills of team members",
        text:
          "We always wanted to maintain a balanced workforce. A chain is as strong as its weakest link and in the case of project teams, performance highly depends on their individual skill levels. But your project is bound to fail if the team does not possess the necessary skills to tackle the problem at hand. Here it was the same in the starting where we literally struggled with the frontend developers and the client kept pointing out our mistakes which we already knew. So few bold decisions were taken and quite a few fronted developers were dropped from this project in search of better resources. I brought my trusted resource from my other project to save the ship. After initial turbulence, all the resources knew their work scope and performed well.",
      },
      {
        title: "Communication channel",
        text:
          "You need to have timely and transparent methods of communication to ensure that all stakeholders are involved in the process. So we decided to have a sprint plan working session every week where we usually tried to break every story from the WBS into a small section and rearrange it according to the priority set by our client. Apart from that, we had a regular channel of communication through skype.",
      },
      {
        title: "Unrealistic deadlines",
        text:
          "We never got into the trap of an unrealistic deadline. I knew the team's capability and negotiated the project timeline by prioritizing deadlines and project tasks",
      },
    ],
    outcome:
      "After all the successful and rigorous testing of our application, we are good to go for production on 1st July. Delivery moved from an unstructured, resourcing-constrained state to a predictable sprint rhythm with clearer scope control, prioritisation and technical dependency coordination.",
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
  "Jira & Confluence",
  "Python",
  "SQL",
  "SSRS & Data Analytics",
  "Figma & Wireframing",
  "Mobile & Web Applications Delivery",
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
