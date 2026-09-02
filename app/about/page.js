import Link from "next/link";
export default function About() {
  return <main className="page"><div className="container page-inner narrow">
    <Link className="back" href="/">← Home</Link>
    <p className="eyebrow">ABOUT</p><h1>Moses Vuma</h1>
    <p className="lede">Marketing technology, data and automation leader with a hands-on technical background.</p>
    <p>I work where marketing strategy meets technology execution. My experience spans Salesforce Marketing Cloud, Salesforce Data Cloud, customer data, automation, integrations, platform operations and technical program delivery.</p>
    <p>This site is also my working knowledge base: a place to document what I learn, explain complicated platform topics and share practical frameworks with other technology and marketing professionals.</p>
  </div></main>
}
