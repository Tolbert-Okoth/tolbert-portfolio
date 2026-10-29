export default function Hero() {
  return (
    <section className="hero page-width" id="home" aria-labelledby="hero-title">
      <div className="hero-topline">
        <span className="eyebrow">TOLBERT OKOTH ASUMBA / OSUS</span>
        <span className="availability"><i /> Open to junior Python & data roles</span>
      </div>
      <h1 id="hero-title">Data into systems.<br /><em>Research into code.</em></h1>
      <div className="hero-bottom">
        <div className="hero-intro">
          <span className="small-label">QUANTITATIVE ENGINEERING & DATA SYSTEMS</span>
          <p>I build Python tools for time-series research, feature engineering, and model evaluation. My focus is on how data is prepared, how results are tested, and how the code fits together.</p>
          <a className="text-link" href="#work">Explore the engineering <span aria-hidden="true">↓</span></a>
        </div>
        <figure className="brand-art">
          <img src="/brand/osus.jpg" alt="OSUS — cream and red wordmark on charcoal" />
          <figcaption><span>QUESTION. TEST. BUILD.</span><span>OSUS / 01</span></figcaption>
        </figure>
      </div>
      <div className="hero-footnote">
        <span>PYTHON / SQL / TIME SERIES / MODEL EVALUATION</span>
        <span>EXPLORE THE WORK ↓</span>
      </div>
    </section>
  );
}
