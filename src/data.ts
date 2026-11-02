export const profile = {
  name: 'Ajay Venkat A',
  email: 'venkatajay719@gmail.com',
  github: 'https://github.com/ajay-venkat',
  linkedin: 'https://www.linkedin.com/in/ajayvenkat012/',
  location: 'Tamil Nadu, India',
};

export const typeWords = [
  'AI Engineer & Agentic RAG Builder',
  'Data Scientist & Computer Vision Developer',
  'Technical Business Analyst',
  'Full-Stack Freelance Architect',
];

export const resumes = [
  { key: 'ai', label: 'AI Engineer', short: 'AI', file: import.meta.env.BASE_URL + 'resumes/Ajay_Venkat_Resume_AI_Engineer.pdf', note: 'RAG, agentic AI, computer vision' },
  { key: 'ds', label: 'Data Scientist', short: 'DS', file: import.meta.env.BASE_URL + 'resumes/Ajay_Venkat_Resume_Data_Scientist.pdf', note: 'ML, deep learning, NLP' },
  { key: 'da', label: 'Data Analyst', short: 'DA', file: import.meta.env.BASE_URL + 'resumes/Ajay_Venkat_Resume_Data_Analyst.pdf', note: 'Power BI, DAX, Python' },
  { key: 'ba', label: 'Business Analyst', short: 'BA', file: import.meta.env.BASE_URL + 'resumes/Ajay_Venkat_Resume_Business_Analyst.pdf', note: 'Requirements, dashboards, insights' },
  { key: 'web', label: 'Full-Stack Developer', short: 'Web', file: import.meta.env.BASE_URL + 'resumes/Ajay_Venkat_Resume_Full_Stack_Developer.pdf', note: 'React, Next.js, Node.js, Supabase' },
];

export const achievements = {
  app: '1st Prize Winner',
  appSub: 'National-Level SIE India Mobile App Development Competition',
  hackTitle: 'Hackathon Champion',
  hackSub: '5 hackathons played. 2 First Prizes and 1 Second Prize.',
  researchTitle: 'Published Author',
  researchSub: 'IEEE Scopus-indexed research paper on Smart Ration Distribution (PDS) queue optimization.',
  academicTitle: 'B.Tech, Artificial Intelligence & Data Science',
  academicSub: 'Karpaga Vinayaga College of Engineering & Technology (Anna University)',
  cgpa: '8.05 / 10',
};

export type Deployment = {
  id: string;
  title: string;
  status: string;
  summary: string;
  tags: string[];
  repo?: string;
  metric: string;
  metricLabel: string;
};

export const deployments: Deployment[] = [
  {
    id: 'mla',
    title: 'MLA Public Grievance Portal',
    status: 'Delivered',
    summary:
      'End-to-end citizen complaint management system built for a political party constituency office. The public files grievances directly with their MLA and follows each one through to resolution.',
    tags: ['Full-Stack', 'Civic Tech', 'Complaint Tracking'],
    repo: 'https://github.com/ajay-venkat/tvk-portal',
    metric: 'Public to MLA',
    metricLabel: 'Direct filing and tracking',
  },
  {
    id: 'bakery',
    title: 'Multi-Branch Bakery Digital Ordering Ecosystem (Jenifer App)',
    status: '25+ branches, one brand',
    summary:
      'Centralized QR table-ordering PWA with an admin management platform, built to scale across 25+ retail bakery branches under one brand.',
    tags: ['PWA', 'QR Ordering', 'Admin Dashboard', 'Multi-Branch'],
    repo: 'https://github.com/ajay-venkat/jenifer--app',
    metric: '25+',
    metricLabel: 'Branches on one platform',
  },
  {
    id: 'pds',
    title: 'Smart Ration Shop (PDS) Slot Booking System',
    status: 'Demo completed, IEEE published',
    summary:
      'Digital token and time-slot reservation platform for public ration shops that removes physical queues. The queue optimization work is published in an IEEE Scopus-indexed paper.',
    tags: ['PDS', 'Slot Booking', 'Queue Optimization', 'Research'],
    metric: 'IEEE',
    metricLabel: 'Scopus-indexed paper',
  },
];

export const categories = ['All', 'GenAI & RAG', 'Computer Vision', 'Data & Analytics', 'Full-Stack'] as const;
export type Category = Exclude<(typeof categories)[number], 'All'>;

export type Project = {
  name: string;
  summary: string;
  cats: Category[];
  stack: string[];
  repo?: string;
};

export const projects: Project[] = [
  {
    name: 'Atlas Document Verifier',
    summary: 'Multi-agent RAG system that parses documents and verifies factual claims against ground-truth vector embeddings.',
    cats: ['GenAI & RAG'],
    stack: ['Python', 'RAG', 'LLM Agents', 'Vector Search'],
    repo: 'https://github.com/ajay-venkat/atlas-document-verifier',
  },
  {
    name: 'VisionAid v2',
    summary: 'Real-time assistive navigation for visually impaired users using YOLOv8 object detection, MiDaS depth estimation and spatial text-to-speech audio.',
    cats: ['Computer Vision'],
    stack: ['YOLOv8', 'MiDaS', 'TTS', 'Python'],
    repo: 'https://github.com/ajay-venkat/vision-aid-v2',
  },
  {
    name: 'RoadAlert',
    summary: 'Automated road pothole detection using YOLOv8 coupled with live GPS geospatial mapping.',
    cats: ['Computer Vision'],
    stack: ['YOLOv8', 'GPS', 'Geospatial', 'Python'],
    repo: 'https://github.com/ajay-venkat/RoadAlert',
  },
  {
    name: 'Spare-Vision-AI',
    summary: 'Industrial computer vision model for automated spare-part identification and defect inspection.',
    cats: ['Computer Vision'],
    stack: ['Computer Vision', 'Deep Learning', 'Python'],
    repo: 'https://github.com/ajay-venkat/spare-vision-ai',
  },
  {
    name: 'AgriGuard',
    summary: 'Machine learning fertilizer recommendation engine that helps farmers optimize crop nutrition based on soil parameters.',
    cats: ['Data & Analytics'],
    stack: ['Scikit-learn', 'Pandas', 'Python'],
  },
  {
    name: 'Market Basket Analysis',
    summary: 'Full-stack platform that mines product association rules from retail transaction logs with the Apriori algorithm.',
    cats: ['Data & Analytics', 'Full-Stack'],
    stack: ['Apriori', 'Pandas', 'MongoDB', 'Full-Stack'],
    repo: 'https://github.com/ajay-venkat/market-basket-analysis',
  },
  {
    name: 'Jenifer Bakery App',
    summary: 'QR table-ordering PWA and admin platform for a bakery brand with 25+ branches.',
    cats: ['Full-Stack'],
    stack: ['PWA', 'QR Ordering', 'Admin Panel'],
    repo: 'https://github.com/ajay-venkat/jenifer--app',
  },
  {
    name: 'MLA Grievance Portal',
    summary: 'Citizen complaint portal where the public files grievances with their MLA and tracks resolution.',
    cats: ['Full-Stack'],
    stack: ['Full-Stack', 'Web App'],
    repo: 'https://github.com/ajay-venkat/tvk-portal',
  },
];

export const timeline = [
  {
    org: 'Quenoxa Technology',
    role: 'Machine Learning Intern',
    dates: '23 Jun 2026 - 23 Jul 2026',
    text: 'Data preparation, feature engineering and ML model evaluation.',
  },
  {
    org: 'Transvaal Global Tech Pvt Ltd',
    role: 'Technical Business Analyst: AI, ML & Application Development',
    dates: '07 Dec 2025 - 07 Jan 2026',
    text: 'Translated business requirements into Python and Scikit-learn ML models and full-stack modules.',
  },
  {
    org: 'Towards Technology',
    role: 'App Development Intern',
    dates: '01 Jun 2025 - 30 Jun 2025',
    text: 'Cross-platform mobile application engineering and API integration.',
  },
  {
    org: 'Techknots Pvt. Ltd.',
    role: 'Power BI & Data Analytics Intern',
    dates: '01 Jun 2024 - 30 Jun 2024',
    text: 'Interactive Power BI dashboarding, DAX measures and relational data modeling.',
  },
];

export const skills = [
  'Python', 'SQL', 'JavaScript', 'React', 'Next.js', 'React Native', 'FastAPI', 'Node.js', 'RAG', 'LLMs', 'YOLOv8',
  'MiDaS', 'OpenCV', 'Scikit-learn', 'Pandas', 'Power BI', 'DAX', 'MongoDB', 'Supabase', 'n8n', 'Make',
];

export const skillGroups = [
  { title: 'GenAI & Agents', items: ['RAG', 'LLMs', 'Agentic AI', 'n8n', 'Make'] },
  { title: 'Vision & ML', items: ['YOLOv8', 'MiDaS', 'OpenCV', 'Scikit-learn', 'Pandas'] },
  { title: 'Data & BI', items: ['Power BI', 'DAX', 'SQL', 'MongoDB'] },
  { title: 'Full-Stack', items: ['React', 'Next.js', 'React Native', 'Node.js', 'FastAPI', 'Supabase', 'JavaScript', 'Python'] },
];

export const certs = [
  { name: 'Agentic AI', by: 'Anthropic' },
  { name: 'Generative AI for Data Science', by: 'Microsoft' },
  { name: 'Google Cloud Cybersecurity', by: 'Google' },
  { name: 'AI & Python Development', by: 'Udemy' },
];
