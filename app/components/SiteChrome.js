import Link from "next/link";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link className="brand" href="/">MOSES <span>VUMA</span></Link>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/resources/">Resources</Link>
          <Link href="/accomplishments/">Accomplishments</Link>
          <Link href="/about/">About</Link>
        </nav>
        <Link className="nav-cta" href="/contact/">Let&apos;s Connect <Arrow /></Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="container footer-wrap">
        <div><strong>MOSES VUMA</strong><span>Technology · AI · MarTech · Cyber · Cloud</span></div>
        <span>© 2026 Moses Vuma</span>
      </div>
    </footer>
  );
}
