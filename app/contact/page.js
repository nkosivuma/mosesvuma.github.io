import Link from "next/link";
export default function Contact() {
  return <main className="page"><div className="container page-inner narrow">
    <Link className="back" href="/">← Home</Link>
    <p className="eyebrow">CONTACT</p><h1>Let's connect.</h1>
    <p className="lede">For professional opportunities, consulting conversations or collaboration, connect with me through LinkedIn or email.</p>
    <div className="contact-box">
      <a href="mailto:hello@mosesvuma.com">hello@mosesvuma.com</a>
      <a href="https://www.linkedin.com/" rel="noreferrer">LinkedIn ↗</a>
    </div>
    <p className="small-note">Replace the email address and LinkedIn URL above with your preferred contact details before publishing.</p>
  </div></main>
}
