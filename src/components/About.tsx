function About() {
  return (
    <section className="section container content-section" id="about" data-reveal>
      <p className="eyebrow">01 / ABOUT</p>
      <div className="section-grid">
        <h2>A little<br />about me<span>.</span></h2>
        <div className="section-copy">
          <p className="lead">Hi, I’m Darshan Patil.</p>
          <p>I’m a Senior Generative AI Engineer who turns messy, real-world problems into AI systems people use every day. Over 6.4 years I’ve designed and deployed ML, NLP and LLM-powered products across healthcare, insurance, enterprise and education. I stay with a project from the first look at the data through retrieval design, evaluation, deployment and ongoing improvement.</p>
          <p>My core strengths are agentic workflows, production-grade RAG, prompt engineering and spec-driven development. I use AI-assisted tools like Roo Code and Claude Code daily for implementation, refactoring and test development, which lets me ship faster without giving up quality or traceability.</p>
          <div className="about-stats" aria-label="Selected verified metrics">
            <div><strong>6.4</strong><span>years in AI / ML</span></div>
            <div><strong>70<span>%+</span></strong><span>less tender review time</span></div>
            <div><strong>3</strong><span>churn risk segments</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About