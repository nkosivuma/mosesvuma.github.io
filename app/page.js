import Link from "next/link";

const whatIDo = [
  ["AI & Martech", "I build AI-driven revenue systems using Salesforce Marketing Cloud AI, autonomous agents (OpenClaw), and RAG on Data Cloud. I lead martech and data teams that turn automation into measurable business outcomes."],
  ["Cybersecurity & Cloud", "I have 5+ years in cybersecurity and hold CISSP and CompTIA Security+. I lead cloud and security teams, govern AI systems, and build the guardrails that let autonomous systems operate safely in production."],
  ["Technology Leadership", "I lead cross-functional technology teams across AI, martech, cloud, and security. I own hiring, roadmaps, architecture, and delivery — and translate between technical teams and the business."]
];

const selectedWork = [
  ["Salesforce Marketing Cloud AI", "I built AI-enabled campaign workflows using Agentforce capabilities, with governance guardrails for AI-generated content and audience decisions."],
  ["OpenClaw Autonomous Agents", "I designed and deployed self-hosted autonomous agents with persistent workspaces, skill plugins, and execution boundaries for production systems."],
  ["RAG on Data Cloud", "I implemented retrieval-augmented generation with vector search, custom retrievers, and access policies enforced at the retrieval layer."]
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">AI · MarTech · Cybersecurity (CISSP) · Cloud</p>
            <h1>I build and secure AI-driven systems that power revenue.</h1>
            <p className="hero-copy">
              I lead technology teams that turn AI and automation into measurable
              business outcomes — and keep them secure.
            </p>
            <div className="hero-actions">
              <Link className="button primary" href="/accomplishments/">AI &amp; MarTech Leadership <Arrow /></Link>
              <Link className="button secondary" href="/accomplishments/">Cybersecurity &amp; Cloud Leadership</Link>
            </div>
          </div>
          <div className="hero-card">
            <div className="initials">MV</div>
            <p>CISSP · CompTIA Security+<br />Salesforce Certifications<br />Cybersecurity</p>
            <div className="line"></div>
            <small>Dallas–Fort Worth · Open to opportunities nationwide</small>
          </div>
        </div>
      </section>

      <section className="intro">
        <div className="container split">
          <div>
            <p className="eyebrow">WHAT I DO</p>
            <h2>AI, security and technology leadership.</h2>
          </div>
        </div>
        <div className="container capability-grid">
          {whatIDo.map(([t, d], i) => (
            <article className="capability" key={t}>
              <span>{String(i + 1).padStart(2, "0")}</span><h3>{t}</h3><p>{d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="resources-preview">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">SELECTED WORK</p>
              <h2>Selected work</h2>
            </div>
          </div>
          <div className="resource-grid">
            {selectedWork.map(([t, d]) => (
              <article className="resource-card" key={t}>
                <span className="tag">{t}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="statement">
        <div className="container contact-box">
          <p className="eyebrow">CONTACT</p>
          <h2>Let&#39;s talk.</h2>
          <p>
            <a href="https://www.linkedin.com/in/nkosivuma" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </p>
        </div>
      </section>
    </main>
  );
}
