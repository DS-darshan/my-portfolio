import { motion, useReducedMotion } from 'framer-motion'
import { Bot, Cloud, Code2, Database, Sparkles } from 'lucide-react'
import { useState } from 'react'

const skillGroups = [
  {
    title: 'Generative AI & LLMs',
    icon: Sparkles,
    skills: ['Generative AI', 'Large Language Models', 'NLP', 'Transformers', 'Hugging Face', 'PEFT', 'LoRA', 'Prompt Engineering', 'LLM Evaluation'],
  },
  {
    title: 'Agentic AI',
    icon: Bot,
    skills: ['Agentic AI', 'Multi-Agent Systems', 'LangGraph', 'CrewAI', 'AutoGen', 'MCP', 'Guardrails', 'Spec-Driven Development'],
  },
  {
    title: 'RAG & Vector Databases',
    icon: Database,
    skills: ['RAG', 'LangChain', 'LlamaIndex', 'FAISS', 'Pinecone', 'pgvector', 'ChromaDB', 'Qdrant', 'Weaviate', 'Embeddings', 'Hybrid Search', 'Reranking', 'Semantic Search'],
  },
  {
    title: 'Python & Backend',
    icon: Code2,
    skills: ['Python', 'FastAPI', 'Pandas', 'NumPy', 'Scikit-learn', 'Pytest', 'Streamlit', 'REST APIs', 'WebSockets'],
  },
  {
    title: 'Cloud & MLOps',
    icon: Cloud,
    skills: ['AWS', 'Amazon Bedrock', 'SageMaker', 'EC2', 'S3', 'ECS / Fargate', 'Azure AI Foundry', 'Azure OpenAI', 'Azure Functions', 'Azure App Service', 'Databricks', 'GCP', 'Docker', 'MLflow', 'DVC'],
  },
]

const filters = ['All', ...skillGroups.map((group) => group.title)]

function Skills() {
  const [activeFilter, setActiveFilter] = useState('All')
  const prefersReducedMotion = useReducedMotion()
  const visibleGroups = activeFilter === 'All'
    ? skillGroups
    : skillGroups.filter((group) => group.title === activeFilter)

  return (
    <section className="section skills-section" id="skills" data-reveal>
      <div className="container content-section">
        <p className="eyebrow">02 / SKILLS</p>
        <div className="skills-heading-row">
          <div>
            <h2>Tools for building<br />useful intelligence<span>.</span></h2>
            <p className="skills-intro">Technologies and methods used across production AI and software systems.</p>
          </div>
          <div className="skill-filters" role="group" aria-label="Filter skills by category">
            {filters.map((filter) => (
              <button
                aria-pressed={activeFilter === filter}
                className={`skill-filter ${activeFilter === filter ? 'is-active' : ''}`}
                key={filter}
                onClick={() => setActiveFilter(filter)}
                type="button"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <motion.div className="skill-groups" layout transition={{ duration: prefersReducedMotion ? 0 : 0.28, ease: 'easeOut' }}>
          {visibleGroups.map((group) => {
            const Icon = group.icon
            return (
              <motion.article
                className="skill-card"
                data-reveal
                key={group.title}
                layout
                initial={prefersReducedMotion ? false : { y: 10 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.24, ease: 'easeOut' }}
                aria-label={`${group.title}: ${group.skills.length} listed technologies`}
              >
                <div className="skill-card-heading">
                  <div className="skill-icon"><Icon size={19} strokeWidth={1.6} /></div>
                  <div><span className="skill-count">{String(group.skills.length).padStart(2, '0')} SKILLS</span><h3>{group.title}</h3></div>
                </div>
                <ul className="skill-tiles">
                  {group.skills.map((skill) => (
                    <li className="skill-tile" key={skill}>
                      <span className="skill-wordmark" aria-hidden="true">{skill.split(/\s|\//)[0].slice(0, 2).toUpperCase()}</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills