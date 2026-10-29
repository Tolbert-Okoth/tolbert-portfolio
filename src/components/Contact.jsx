import Arrow from './Arrow';

export default function Contact() {
  return (
    <section className="contact-section page-width" id="contact" aria-labelledby="contact-title">
      <span className="eyebrow">05 / THE NEXT CHAPTER</span>
      <div className="contact-grid">
        <h2 id="contact-title">Good questions.<br /><em>Useful systems.</em></h2>
        <div>
          <p>I’m open to work in Python, data, and quantitative engineering. If your team works at the intersection of code and quantitative problems, let’s talk.</p>
          <a className="contact-email" href="mailto:osumba30@gmail.com">osumba30@gmail.com <Arrow /></a>
          <div className="social-links">
            <a href="https://github.com/Tolbert-Okoth" target="_blank" rel="noopener noreferrer">GitHub <Arrow /></a>
            <a href="https://www.linkedin.com/in/tolbert-asumba-542b3b344/" target="_blank" rel="noopener noreferrer">LinkedIn <Arrow /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
