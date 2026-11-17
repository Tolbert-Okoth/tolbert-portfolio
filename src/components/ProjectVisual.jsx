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


const RISK = [0.1, 0.15, 0.25, 0.35, 0.5, 0.75, 1, 1.5, 2];
const PASS = {
  '+0.10 R': [0.192, 0.594, 0.864, 0.919, 0.874, 0.756, 0.647, 0.43, 0.251],
  '+0.05 R': [0.016, 0.152, 0.468, 0.622, 0.618, 0.534, 0.478, 0.328, 0.212],
  'Zero edge': [0, 0.01, 0.102, 0.196, 0.28, 0.294, 0.288, 0.236, 0.169],
};

function RiskCurveChart() {
  const W = 300, H = 190, L = 30, R = 58, T = 10, B = 26;
  const x = i => L + (i / (RISK.length - 1)) * (W - L - R);
  const y = v => T + (1 - v) * (H - T - B);
  const styles = { '+0.10 R': { o: 1 }, '+0.05 R': { o: 0.6 }, 'Zero edge': { o: 1, accent: true, dash: '4 3' } };
  return (
    <svg className="data-chart" viewBox={`0 0 ${W} ${H}`} role="img">
      {[0, 0.5, 1].map(v => (
        <g key={v}>
          <line x1={L} x2={W - R} y1={y(v)} y2={y(v)} stroke="currentColor" strokeOpacity=".18" />
          <text x={L - 6} y={y(v) + 3} textAnchor="end" className="chart-tick">{v * 100}%</text>
        </g>
      ))}
      {Object.entries(PASS).map(([name, vals]) => {
        const st = styles[name];
        const pts = vals.map((v, i) => `${x(i)},${y(v)}`).join(' ');
        const last = vals[vals.length - 1];
        const peak = vals.indexOf(Math.max(...vals));
        return (
          <g key={name} stroke={st.accent ? 'var(--chart-accent)' : 'currentColor'} fill={st.accent ? 'var(--chart-accent)' : 'currentColor'} opacity={st.o}>
            <polyline points={pts} fill="none" strokeWidth="1.6" strokeDasharray={st.dash} />
            <circle cx={x(peak)} cy={y(vals[peak])} r="2.4" stroke="none" />
            <text x={W - R + 6} y={y(last) + (name === '+0.10 R' ? -4 : name === 'Zero edge' ? 9 : 3)} className="chart-label" stroke="none">{name}</text>
          </g>
        );
      })}
      {[0, 4, 6, 8].map(i => <text key={i} x={x(i)} y={H - B + 13} textAnchor="middle" className="chart-tick">{RISK[i]}%</text>)}
      <text x={(L + W - R) / 2} y={H - 1} textAnchor="middle" className="chart-tick">RISK PER TRADE →</text>
    </svg>
  );
}

function BarVsTickChart() {
  const rows = [['Ticks (truth)', -0.467], ['Bars, target-first', 0.12, true], ['Bars, open→near→far', -0.537], ['Bars, stop-first', -0.643]];
  const W = 300, H = 170, L = 112, R = 14, zero = L + (W - L - R) * (0.7 / 0.85), scale = (W - L - R) / 0.85;
  return (
    <svg className="data-chart" viewBox={`0 0 ${W} ${H}`} role="img">
      <line x1={zero} x2={zero} y1="4" y2={H - 22} stroke="currentColor" strokeOpacity=".5" />
      {rows.map(([name, v, hi], i) => {
        const yy = 10 + i * 34, w = Math.abs(v) * scale, xx = v < 0 ? zero - w : zero;
        return (
          <g key={name}>
            <text x={L - 8} y={yy + 13} textAnchor="end" className="chart-label">{name}</text>
            <rect x={xx} y={yy + 3} width={w} height="14" fill={hi ? 'var(--chart-accent)' : 'currentColor'} opacity={hi ? 1 : i === 0 ? 0.9 : 0.4} />
            <text x={v < 0 ? zero + 6 : xx + w + 4} y={yy + 14} textAnchor="start" className="chart-value">{v > 0 ? '+' : '−'}{Math.abs(v).toFixed(2)} R</text>
          </g>
        );
      })}
      <text x={(L + W - R) / 2} y={H - 4} textAnchor="middle" className="chart-tick">SAME ZERO-EDGE TRADES · R PER TRADE</text>
    </svg>
  );
}

function VolumeProfileChart() {
  const n = 22, poc = 8, vaLo = 4, vaHi = 13;
  const vol = Array.from({ length: n }, (_, i) => Math.exp(-((i - poc) ** 2) / 18) * 0.9 + Math.exp(-((i - 16) ** 2) / 5) * 0.55 + 0.06);
  const W = 300, H = 190, L = 20, T = 8, row = (H - T - 14) / n, maxW = 190;
  return (
    <svg className="data-chart" viewBox={`0 0 ${W} ${H}`} role="img">
      <rect x={L - 6} y={T + vaLo * row - 2} width={maxW + 18} height={(vaHi - vaLo + 1) * row + 2} fill="currentColor" opacity=".08" />
      {vol.map((v, i) => (
        <rect key={i} x={L} y={T + i * row} width={v * maxW} height={row - 2} fill={i === poc ? 'var(--chart-accent)' : 'currentColor'} opacity={i === poc ? 1 : i >= vaLo && i <= vaHi ? 0.75 : 0.32} />
      ))}
      <text x={L + maxW + 20} y={T + poc * row + row / 2 + 3} className="chart-label" fill="var(--chart-accent)">POC</text>
      <text x={L + maxW + 20} y={T + vaLo * row + 8} className="chart-tick">VALUE</text>
      <text x={L + maxW + 20} y={T + vaLo * row + 18} className="chart-tick">AREA 70%</text>
      <text x={L + maxW + 20} y={T + 16 * row + row / 2 + 3} className="chart-tick">2nd PEAK</text>
      <text x={L} y={H - 1} className="chart-tick">VOLUME AT PRICE →</text>
    </svg>
  );
}

function QlikeChart() {
  const rows = [['HAR vs EWMA', 'primary sample', 23.37], ['HAR vs EWMA', '2026', 18.24], ['Session-adjusted vs HAR', '2026', 2.94], ['Session-adjusted vs HAR', 'tick-matched', 1.9]];
  const W = 300, H = 180, L = 4, max = 25, bw = 210;
  return (
    <svg className="data-chart" viewBox={`0 0 ${W} ${H}`} role="img">
      {rows.map(([a, b, v], i) => {
        const yy = 6 + i * 40;
        return (
          <g key={a + b}>
            <text x={L} y={yy + 9} className="chart-label">{a} <tspan opacity=".6">· {b}</tspan></text>
            <rect x={L} y={yy + 14} width={bw} height="10" fill="currentColor" opacity=".12" />
            <rect x={L} y={yy + 14} width={(v / max) * bw} height="10" fill={i < 2 ? 'var(--chart-accent)' : 'currentColor'} opacity={i < 2 ? 1 : 0.7} />
            <text x={L + bw + 8} y={yy + 23} className="chart-value">{v.toFixed(1)}%</text>
          </g>
        );
      })}
      <text x={L} y={H - 2} className="chart-tick">QLIKE IMPROVEMENT · 68,291 FORECASTS</text>
    </svg>
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
    case 'montecarlo':
      return <RiskCurveChart />;
    case 'ticks':
      return <BarVsTickChart />;
    case 'profile':
      return <VolumeProfileChart />;
    case 'variance':
      return <QlikeChart />;
    case 'tunza':
      return <FlowDiagram steps={[["LOG", "Check-ins + vitals"], ["CLASSIFY", "Guideline thresholds"], ["ESCALATE", "Alerts + opt-in contact"]]} />;
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
      <div className="engineering-visual-footer"><span>{project.title}</span><span>{project.visualLabel || 'SCHEMATIC'} / {number}</span></div>
    </div>
  );
}
