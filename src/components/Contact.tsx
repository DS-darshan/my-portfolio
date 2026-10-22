import { ArrowUpRight, Download, Mail, Phone } from 'lucide-react'

function Contact() {
  return (
    <section className="section contact-section" id="contact" data-reveal>
      <div className="container content-section">
        <p className="eyebrow">06 / CONTACT</p>
        <div className="contact-row">
          <div><h2>Let’s build<br />something useful<span>.</span></h2><p>For AI engineering opportunities and collaborations, get in touch.</p>
            <div className="contact-details"><a href="mailto:darshan3.patil@gmail.com"><Mail size={16} /> darshan3.patil@gmail.com</a><a href="tel:+918055003092"><Phone size={16} /> +91 8055003092</a></div>
          </div>
          <div className="contact-actions"><a className="button button-primary" href="mailto:darshan3.patil@gmail.com"><Mail size={17} /> Email me <ArrowUpRight size={17} /></a><a className="button button-quiet" href={`${import.meta.env.BASE_URL}darshan_patil_ai_engineer_resume.pdf`} target="_blank" rel="noreferrer"><Download size={16} /> View resume</a></div>
        </div>
      </div>
    </section>
  )
}

export default Contact