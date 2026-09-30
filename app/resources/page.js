import Link from "next/link";

const articles = [
  ["Salesforce Marketing Cloud", "Private Domains vs. Marketing Cloud Next Authenticated Domains", "A practical guide to the differences, architecture, authentication and use cases.", "/resources/private-domains-vs-authenticated-domains/"],
  ["MarTech", "Designing a Modern Marketing Technology Operating Model", "How platform ownership, governance, data and campaign operations fit together.", "#"],
  ["Data", "Customer Data Architecture: From Source to Activation", "A framework for thinking about ingestion, identity, modeling and activation.", "#"],
  ["Automation", "What Good Marketing Automation Looks Like", "The principles I use to make automation reliable, observable and maintainable.", "#"]
];

export default function Resources() {
  return <main className="page">
    <div className="container page-inner">
      <p className="eyebrow">KNOWLEDGE BASE</p>
      <h1>Resources</h1>
      <p className="lede">Practical lessons on Salesforce, marketing technology, data architecture, automation and digital transformation.</p>
      <div className="article-list">
        {articles.map(([tag,title,text,href]) => <Link className="article-row" href={href} key={title}>
          <span className="tag">{tag}</span>
          <div><h2>{title}</h2><p>{text}</p></div><span className="arrow">↗</span>
        </Link>)}
      </div>
    </div>
  </main>
}
