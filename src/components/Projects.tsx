import type { PointerEvent } from 'react'
import { ArrowDown, MoveUpRight } from 'lucide-react'

const projects = [
  { number: '01', name: 'Tender Intelligence Chatbot', type: 'KEC INTERNATIONAL · 2023–2024', problem: 'EPC, engineering, and pre-bid teams had to manually review large tender documents to find technical, commercial, and eligibility details.', solution: 'Built a domain assistant that answers questions across transmission-line tender documents, with responses grounded in relevant clauses.', flow: ['Tender PDFs', 'Metadata chunks', 'Weaviate retrieval', 'Grounded answers'], architecture: 'PDF parsing and metadata-aware chunking feed embeddings and hybrid vector retrieval in Weaviate. LangChain orchestrates retrieval and Azure OpenAI generates grounded answers through a FastAPI service.', technologies: ['Python', 'FastAPI', 'LangChain', 'Azure OpenAI', 'Weaviate', 'Azure App Service'], challenge: 'Retrieving exact clauses across multi-section PDFs, including BOQ, technical specifications, conductor details, eligibility, and commercial requirements.', outcome: 'Reduced manual tender-review time by more than 70%, helping teams make faster go / no-go decisions.', featured: true },
  { number: '02', name: 'Agentic RPGLE to C#/.NET Modernization', type: 'WELLSKY · 2025–2026', problem: 'Legacy IBM AS/400 RPGLE applications needed modernization while preserving business rules and functional equivalence; manual rewrites were time-consuming and error-prone.', solution: 'Designed specialized agents for legacy-code analysis, business-rule extraction, C# generation, validation, and documentation.', flow: ['RPGLE source', 'Rule extraction', 'Agentic generation', 'Migration validation'], architecture: 'Specialized agents handle source analysis, business-rule discovery, C# generation, and migration validation. RAG supplies relevant source, database, and documentation context; structured specifications guide implementation.', technologies: ['Agentic AI', 'Claude Code', 'RAG', 'LangChain', 'Python', 'C# / .NET'], challenge: 'Making large legacy codebases understandable and transforming them without losing implicit business rules or runtime behavior.', outcome: 'Resume documents the automated analysis, generation, validation, and documentation workflow; no numeric outcome reported.' },
  { number: '03', name: 'Clinical Documentation Assistant', type: 'WELLSKY · 2025', problem: 'Clinical teams in long-term care and skilled nursing spent significant time manually documenting patient-provider conversations.', solution: 'Built real-time transcription and information extraction that populates structured nursing assessment forms.', flow: ['Live conversation', 'Whisper transcript', 'Information extraction', 'Nursing assessment'], architecture: 'Whisper transcription streams through FastAPI and WebSocket services. Information extraction maps conversations into assessment fields, with Firestore storing records, history, and audit data.', technologies: ['Python', 'Whisper', 'FastAPI', 'WebSockets', 'GCP', 'Firestore'], challenge: 'Turning live patient-provider conversations into structured documentation while supporting low-latency processing and secure healthcare workflows.', outcome: 'Automated transcription and structured assessment population; no numeric outcome reported.' },
  { number: '04', name: 'Insurance Policy Q&A Chatbot', type: 'ZUNO GENERAL INSURANCE · 2022–2023', problem: 'Insurance users needed a straightforward way to ask questions about policy PDFs and get answers grounded in policy content.', solution: 'Delivered a policy Q&A assistant with an end-to-end retrieval-augmented generation pipeline.', flow: ['Policy PDFs', 'Chunk & embed', 'Weaviate search', 'Contextual answer'], architecture: 'Document extraction, chunking, and embeddings power semantic retrieval from Weaviate. LangChain coordinates Azure OpenAI response generation; FastAPI serves chat interactions.', technologies: ['LangChain', 'Azure OpenAI', 'Weaviate', 'FastAPI', 'Azure Functions', 'Docker'], challenge: 'Keeping answers anchored to policy language instead of generic insurance responses.', outcome: 'Delivered an end-to-end RAG pipeline for real-time policy Q&A; no numeric outcome reported.' },
  { number: '05', name: 'Customer Churn Analysis', type: 'YASH TECHNOLOGIES · 2021–2022', problem: 'The business needed to identify customers likely to churn and group them by risk to guide retention strategies.', solution: 'Developed churn models that classify customers into three predicted risk segments and expose predictions through APIs.', flow: ['Customer data', 'EDA & features', 'Risk segments', 'Prediction API'], architecture: 'Python and Scikit-learn models produce three risk segments; FastAPI exposes predictions. Dockerized services run on AWS ECS / Fargate, with S3 model storage and DynamoDB customer data.', technologies: ['Python', 'Scikit-learn', 'FastAPI', 'Docker', 'AWS ECS / Fargate', 'S3', 'DynamoDB'], challenge: 'Preparing customer data, identifying behavioral churn signals, and making predictions usable by retention workflows.', outcome: 'Categorized customers into three risk segments; the resume does not report a quantified churn reduction.' },
]

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const updateCardLight = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - bounds.left
    const y = event.clientY - bounds.top
    const rotateX = ((y / bounds.height) - 0.5) * -3
    const rotateY = ((x / bounds.width) - 0.5) * 3
    event.currentTarget.style.setProperty('--glow-x', `${x}px`)
    event.currentTarget.style.setProperty('--glow-y', `${y}px`)
    event.currentTarget.style.setProperty('--tilt-x', `${rotateX}deg`)
    event.currentTarget.style.setProperty('--tilt-y', `${rotateY}deg`)
  }

  const resetCard = (event: PointerEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty('--tilt-x', '0deg')
    event.currentTarget.style.setProperty('--tilt-y', '0deg')
  }

  return (
    <article
      className={`project-card ${project.featured ? 'project-featured' : ''}`}
      onPointerMove={updateCardLight}
      onPointerLeave={resetCard}
    >
      <div className="project-card-inner">
        <div className="project-topline"><span className="project-number">{project.number}</span><span className="eyebrow">{project.type}</span></div>
        <h3>{project.name}</h3>
        <div className="project-preview" aria-label={`Architecture flow: ${project.flow.join(' to ')}`}>
          {project.flow.map((step, index) => (
            <span className="flow-step" key={step}>
              {index > 0 && <span className="flow-connector" aria-hidden="true" />}
              <span className="flow-node">{step}</span>
            </span>
          ))}
        </div>
        <div className="project-overview">
          <div><h4>Business problem</h4><p>{project.problem}</p></div>
          <div><h4>Solution</h4><p>{project.solution}</p></div>
        </div>
        <div className="project-impact"><span>VERIFIED IMPACT</span><p>{project.outcome}</p></div>
        <div className="project-card-bottom">
          <div className="project-tags" aria-label="Technologies used">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
          <a className="project-contact" href="#contact" aria-label={`Contact Darshan about ${project.name}`}><MoveUpRight size={17} /></a>
        </div>
        <details className="case-study">
          <summary>Project details <ArrowDown size={14} /></summary>
          <div className="case-study-content">
            <div><h4>Architecture & implementation</h4><p>{project.architecture}</p></div>
            <div><h4>Key challenge</h4><p>{project.challenge}</p></div>
            <div className="project-tags project-detail-tags" aria-label="Technologies used in the project">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
          </div>
        </details>
      </div>
    </article>
  )
}

function Projects() {
  return (
    <section className="section projects-section" id="projects" data-reveal>
      <div className="container content-section">
        <p className="eyebrow">04 / SELECTED PROJECTS <span className="project-hint">OPEN PROJECT DETAILS <ArrowDown size={12} /></span></p>
        <div className="section-grid">
          <h2>Applied AI,<br />real outcomes<span>.</span></h2>
          <div className="project-list">
            {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects