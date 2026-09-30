const items = [
  ["Salesforce", "Marketing Cloud & Data Cloud", "Built and operated enterprise marketing technology capabilities spanning Marketing Cloud, Data Cloud, personalization, integrations and campaign operations."],
  ["Leadership", "Data & Automation Platform Operations", "Led platform operations and automation initiatives across marketing technology, connecting strategy, engineering and business execution."],
  ["Architecture", "Customer Data & Integrations", "Designed and worked across APIs, cloud storage, data movement, identity, SQL, SOQL and integration patterns."],
  ["Security", "Security & Technical Foundation", "Expanded technical depth across cloud, security, identity and platform operations, including Security+ certification."],
  ["Engineering", "Hands-on Technical Delivery", "Working knowledge across JavaScript, HTML, CSS, AMPscript, SSJS, APIs, Postman, CI/CD, JIRA and Agile delivery."]
];

export default function Accomplishments() {
  return <main className="page">
    <div className="container page-inner">
      <p className="eyebrow">CAREER & IMPACT</p>
      <h1>Accomplishments</h1>
      <p className="lede">Selected examples of the platforms, programs and technical capabilities that define my work.</p>
      <div className="accomplishment-list">
        {items.map(([cat,title,text]) => <section className="accomplishment" key={title}>
          <span>{cat}</span><div><h2>{title}</h2><p>{text}</p></div>
        </section>)}
      </div>
    </div>
  </main>
}
