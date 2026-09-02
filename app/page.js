import Link from "next/link";

const resources = [
  {
    tag: "Salesforce Marketing Cloud",
    title: "Private Domains vs. Marketing Cloud Next Authenticated Domains",
    text: "A practical comparison of domain architecture, authentication, deliverability, governance and implementation considerations.",
    href: "/resources/private-domains-vs-authenticated-domains/"
  },
  {
    tag: "MarTech Architecture",
    title: "Building a Modern Marketing Technology Stack",
    text: "How data, orchestration, personalization and activation fit together across the modern MarTech ecosystem.",
    href: "/resources/"
  },
  {
    tag: "Automation",
    title: "From Manual Marketing Operations to Automation",
    text: "Principles for designing reliable, measurable automation across data, campaigns and operational workflows.",
    href: "/resources/"
  }
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <Link className="brand" href="/">MOSES <span>VUMA</span></Link>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/resources/">Resources</Link>
            <Link href="/accomplishments/">Accomplishments</Link>
            <Link href="/about/">About</Link>
          </nav>
          <Link className="nav-cta" href="/contact/">Let's Connect <Arrow /></Link>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">MARKETING TECHNOLOGY • DATA • AUTOMATION</p>
              <h1>I build technology that makes <em>marketing smarter.</em></h1>
              <p className="hero-copy">
                I’m Moses Vuma, a marketing technology and data leader focused on
                Salesforce, automation, data architecture and the systems that
                turn customer information into measurable business outcomes.
              </p>
              <div className="hero-actions">
                <Link className="button primary" href="/accomplishments/">View my work <Arrow /></Link>
                <Link className="button secondary" href="/resources/">Explore resources</Link>
              </div>
            </div>
            <div className="hero-card">
              <div className="initials">MV</div>
              <p>Marketing Technology<br />Data & Automation<br />Salesforce Architecture</p>
              <div className="line"></div>
              <small>Dallas–Fort Worth · Open to opportunities nationwide</small>
            </div>
          </div>
        </section>

        <section className="intro">
          <div className="container split">
            <div>
              <p className="eyebrow">WHAT I DO</p>
              <h2>Strategy backed by hands-on technical depth.</h2>
            </div>
            <p>
              My work sits at the intersection of business strategy, marketing
              operations and engineering. I translate complex platforms and
              data flows into scalable solutions that teams can actually use.
            </p>
          </div>
          <div className="container capability-grid">
            {[
              ["01", "Marketing Technology", "Salesforce Marketing Cloud, Data Cloud, personalization, campaign operations and MarTech strategy."],
              ["02", "Data & Architecture", "Customer data models, integrations, APIs, cloud storage, identity and activation architecture."],
              ["03", "Automation", "Workflow automation, operational controls, CI/CD and repeatable processes that reduce manual work."],
              ["04", "Technical Leadership", "Cross-functional delivery, platform governance, roadmap development and translating technical detail for executives."]
            ].map(([n,t,d]) => (
              <article className="capability" key={n}>
                <span>{n}</span><h3>{t}</h3><p>{d}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="resources-preview">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">FROM THE KNOWLEDGE BASE</p>
                <h2>Resources & lessons</h2>
              </div>
              <Link href="/resources/">View all <Arrow /></Link>
            </div>
            <div className="resource-grid">
              {resources.map((r) => (
                <Link className="resource-card" href={r.href} key={r.title}>
                  <span className="tag">{r.tag}</span>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                  <span className="read">Read article <Arrow /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="statement">
          <div className="container">
            <p className="eyebrow">THE FOCUS</p>
            <h2>Make complex technology understandable, useful and scalable.</h2>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-wrap">
          <div><strong>MOSES VUMA</strong><span>Marketing Technology · Data · Automation</span></div>
          <span>© 2026 Moses Vuma</span>
        </div>
      </footer>
    </>
  );
}
