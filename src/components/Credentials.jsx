import { certifications } from '../data';
import Arrow from './Arrow';

export default function Credentials() {
  return (
    <section className="credentials-section" aria-labelledby="credentials-title"><div className="page-width"><div className="section-heading"><div><span className="eyebrow">04 / ALWAYS LEARNING</span><h2 id="credentials-title">Knowledge, <em>in practice.</em></h2></div><p>Nine freeCodeCamp certifications.<br />A foundation I keep building on.</p></div><div className="cert-grid">{certifications.map(cert => <a className="cert-link" key={cert.link} href={cert.link} target="_blank" rel="noopener noreferrer" aria-label={`Verify ${cert.name} certification (opens in a new tab)`}><div><span className="small-label">FREECODECAMP / {cert.date.toUpperCase()}</span><h3>{cert.name}</h3></div><Arrow /></a>)}</div></div></section>
  );
}
