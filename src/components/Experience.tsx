import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, BriefcaseBusiness } from 'lucide-react'

const career = [
  {
    dates: 'JUN 2025 — SEP 2026',
    role: 'Senior AI Engineer',
    employer: 'Nitor Infotech · An Ascendion company',
    summary: 'Building applied generative AI solutions across legacy modernization and healthcare documentation.',
    projects: [
      {
        dates: 'NOV 2025 — MAR 2026',
        role: 'Senior AI Engineer',
        name: 'RPGLE to C#/.NET Migration using Agentic AI',
        context: 'WellSky project',
        contribution: 'Designed specialized agents for legacy source analysis, business-rule identification, C# code generation, and migration validation. Applied RAG to supply code, database, and documentation context; used spec-driven development to make requirements traceable. Collaborated with legacy-system SMEs and .NET teams to validate functional equivalence.',
        technologies: ['Agentic AI', 'Claude Code', 'Spec-Driven Development', 'RAG', 'LangChain', 'Python', 'C# / .NET'],
      },
      {
        dates: 'JUL 2025 — NOV 2025',
        role: 'Senior Software Engineer',
        name: 'AI-Powered Clinical Documentation Assistant',
        context: 'WellSky project · Long-Term Care and Skilled Nursing',
        contribution: 'Built real-time transcription services with Whisper, FastAPI, and WebSockets, plus information extraction to populate structured nursing assessments. Designed Firestore storage for patient records, transcription history, forms, and audit tracking; deployed cloud-native services on GCP.',
        technologies: ['Python', 'Whisper', 'FastAPI', 'WebSockets', 'GCP', 'Firestore'],
      },
    ],
  },
  {
    dates: 'AUG 2022 — MAY 2024',
    role: 'Senior Data Scientist',
    employer: 'Msys Technologies',
    summary: 'Delivered retrieval-augmented assistants for engineering tender review and insurance policy questions.',
    projects: [
      {
        dates: 'JUL 2023 — MAY 2024',
        role: 'Senior Data Scientist',
        name: 'Tender Intelligence Chatbot',
        context: 'KEC International project · Electrical transmission-line tenders',
        contribution: 'Built a domain chatbot over tender sections including scope, BOQ, technical specifications, eligibility, and commercial requirements. Developed PDF parsing and metadata-aware chunking, added authentication and feedback capture, and deployed the FastAPI application on Azure services.',
        technologies: ['Python', 'FastAPI', 'LangChain', 'Azure OpenAI', 'Weaviate', 'Azure App Service', 'Blob Storage', 'Azure Functions'],
        impact: 'Reduced manual tender-review time by more than 70%.',
      },
      {
        dates: 'DEC 2022 — JUN 2023',
        role: 'Senior Data Scientist · RAG pipeline and frontend application',
        name: 'Insurance Q&A Chatbot with RAG',
        context: 'Zuno General Insurance project',
        contribution: 'Implemented document extraction, chunking, embeddings, semantic retrieval, and LLM response generation. Integrated Weaviate with LangChain and Azure OpenAI, and built FastAPI services for real-time chatbot interactions grounded in policy PDFs.',
        technologies: ['LangChain', 'Azure OpenAI', 'OpenAI Embeddings', 'Weaviate', 'FastAPI', 'Azure Functions', 'Blob Storage', 'Docker'],
      },
    ],
  },
  {
    dates: 'JUN 2019 — JUL 2022',
    role: 'Data Scientist',
    employer: 'Alpha Information Technology',
    summary: 'Applied machine learning to customer churn analysis, risk segmentation, and deployed prediction services.',
    projects: [
      {
        dates: 'JUN 2021 — JUL 2022',
        role: 'Data Scientist',
        name: 'Customer Churn Analysis',
        context: 'Yash Technologies project',
        contribution: 'Performed data cleaning, exploratory analysis, and statistical analysis to identify churn behaviors. Built and evaluated Scikit-learn models that categorize customers into three risk segments, exposed predictions with FastAPI, and deployed containerized services on AWS ECS / Fargate.',
        technologies: ['Python', 'Scikit-learn', 'FastAPI', 'Docker', 'AWS ECS / Fargate', 'S3', 'DynamoDB', 'NGINX'],
        impact: 'Classified customers into three predicted churn-risk segments; the resume does not state a quantified churn reduction.',
      },
    ],
  },
]

function Experience() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="section container content-section" id="experience" data-reveal>
      <p className="eyebrow">03 / EXPERIENCE</p>
      <div className="experience-heading">
        <h2>Progress through<br />practice<span>.</span></h2>
        <p>Career progression across applied machine learning, data science, and production generative AI.</p>
      </div>
      <div className="career-timeline">
        <div className="timeline-track" aria-hidden="true" />
        {career.map((job, index) => (
          <motion.article
            className="career-entry"
            key={job.employer}
            initial={prefersReducedMotion ? false : { y: 12 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.36, delay: prefersReducedMotion ? 0 : index * 0.05, ease: 'easeOut' }}
          >
            <div className="career-marker" aria-hidden="true"><BriefcaseBusiness size={15} /></div>
            <div className="career-main">
              <div className="career-meta"><span className="career-date">{job.dates}</span><span className="career-index">0{index + 1} / EMPLOYMENT</span></div>
              <h3>{job.role}</h3>
              <p className="career-employer">{job.employer}</p>
              <p className="career-summary">{job.summary}</p>
              <div className="career-projects">
                <p className="career-projects-label">PROJECT ASSIGNMENTS</p>
                {job.projects.map((project) => (
                  <details className="career-project" key={project.name}>
                    <summary>
                      <span className="career-project-title"><span className="project-dates">{project.dates}</span><strong>{project.name}</strong><span className="project-context">{project.context}</span></span>
                      <span className="project-expand" aria-hidden="true"><ArrowDown size={15} /></span>
                    </summary>
                    <div className="career-project-detail">
                      <p className="project-role">Project role: {project.role}</p>
                      <p>{project.contribution}</p>
                      {project.impact && <p className="career-impact"><strong>Verified impact:</strong> {project.impact}</p>}
                      <ul className="career-tech" aria-label={`Technologies used for ${project.name}`}>
                        {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                      </ul>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Experience