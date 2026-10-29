function ValidationDiagram() {
  return (
    <div className="validation-diagram">
      <div className="diagram-caption"><span>PAST OBSERVATIONS</span><span>TIME →</span></div>
      {[2, 3, 4].map((train, index) => (
        <div className="validation-fold" key={train}>
          <span className="fold-label">0{index + 1}</span>
          <div className="validation-cells">
            {Array.from({ length: 6 }, (_, cell) => <i key={cell} className={cell < train ? 'is-train' : cell === train ? 'is-test' : ''} />)}
          </div>
        </div>
      ))}
      <div className="diagram-key"><span><i className="is-train" />Fit on earlier data</span><span><i className="is-test" />Evaluate later</span></div>
    </div>
  );
}

function FlowDiagram({ steps }) {
  return (
    <div className="flow-diagram">
      {steps.map(([label, detail], index) => (
        <div className="flow-stage" key={label}>
          <span className="flow-number">0{index + 1}</span>
          <strong>{label}</strong>
          <span>{detail}</span>
          {index < steps.length - 1 && <i>↓</i>}
        </div>
      ))}
    </div>
  );
}

function AudioDiagram() {
  return (
    <div className="audio-diagram">
      <div className="waveform">
        {Array.from({ length: 37 }, (_, index) => <i key={index} style={{ '--bar': `${15 + ((index * 17 + 13) % 75)}%` }} />)}
      </div>
      <span className="diagram-caption">AUDIO → FEATURES → SOUND PATTERNS</span>
    </div>
  );
}

function Diagram({ type }) {
  switch (type) {
    case 'validation':
      return <ValidationDiagram />;
    case 'statistics':
      return <FlowDiagram steps={[["ESTIMATE", "Rolling R/S + DFA"], ["TEST", "Synthetic + leakage checks"], ["DOCUMENT", "Hypothesis outcomes"]]} />;
    case 'features':
      return <FlowDiagram steps={[["FEATURES", "Vectorized transforms"], ["INFERENCE", "Cached model"], ["EVALUATION", "Research tooling"]]} />;
    case 'audio':
      return <AudioDiagram />;
    case 'market':
      return <FlowDiagram steps={[["SOURCES", "External market feeds"], ["FALLBACK", "Provider failover"], ["DELIVERY", "Persistent + live feeds"]]} />;
    case 'pulse':
      return <FlowDiagram steps={[["INTAKE", "Structured reports"], ["PROCESS", "Python service + database"], ["EVENTS", "Live queue updates"]]} />;
    case 'commerce':
      return <FlowDiagram steps={[["ORDERS", "Relational records"], ["CALLBACKS", "Sandbox payment events"], ["WORKFLOWS", "Payout + refund requests"]]} />;
    default:
      return <FlowDiagram steps={[["INPUT", "Data"], ["PROCESS", "Engineering"], ["OUTPUT", "Evaluation"]]} />;
  }
}

export default function ProjectVisual({ project, number }) {
  return (
    <div className={`project-visual engineering-visual visual-${project.visual}`} aria-hidden="true">
      <div className="visual-category">{project.categoryLabel}</div>
      <div className="engineering-diagram"><Diagram type={project.visual} /></div>
      <div className="engineering-visual-footer"><span>{project.title}</span><span>SCHEMATIC / {number}</span></div>
    </div>
  );
}
