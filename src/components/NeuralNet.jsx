// Hand-drawn style neural network that draws itself in, with gold "signals"
// flowing from input to output. Coordinates are deterministic so server and
// client render the same markup.

const LAYERS = [4, 6, 6, 3];
const W = 640;
const H = 560;

// Stable pseudo-random value in [-0.5, 0.5) for a given seed
function jitter(seed) {
  const x = Math.sin(seed * 127.1) * 43758.5453;
  return x - Math.floor(x) - 0.5;
}

const f = (n) => n.toFixed(1);

const nodes = LAYERS.map((count, l) =>
  Array.from({ length: count }, (_, i) => ({
    x: 80 + l * ((W - 160) / (LAYERS.length - 1)) + jitter(l * 10 + i) * 18,
    y: H / 2 + (i - (count - 1) / 2) * 76 + jitter(l * 10 + i + 5) * 14,
  }))
);

// Slightly bowed control point so edges look sketched, not ruled
function control(l, i, j) {
  const a = nodes[l][i];
  const b = nodes[l + 1][j];
  const seed = l * 100 + i * 10 + j;
  return { x: (a.x + b.x) / 2 + jitter(seed) * 26, y: (a.y + b.y) / 2 + jitter(seed + 3) * 26 };
}

const edges = [];
for (let l = 0; l < LAYERS.length - 1; l++) {
  nodes[l].forEach((a, i) => {
    nodes[l + 1].forEach((b, j) => {
      const c = control(l, i, j);
      edges.push({
        key: `${l}-${i}-${j}`,
        layer: l,
        d: `M${f(a.x)},${f(a.y)} Q${f(c.x)},${f(c.y)} ${f(b.x)},${f(b.y)}`,
      });
    });
  });
}

// Routes (one node index per layer) that the gold signals travel along
const ROUTES = [
  [0, 1, 2, 0],
  [2, 4, 1, 1],
  [3, 0, 5, 2],
  [1, 3, 3, 1],
  [0, 5, 0, 0],
];

const signals = ROUTES.map((route, r) => {
  let d = `M${f(nodes[0][route[0]].x)},${f(nodes[0][route[0]].y)}`;
  for (let l = 0; l < route.length - 1; l++) {
    const c = control(l, route[l], route[l + 1]);
    const b = nodes[l + 1][route[l + 1]];
    d += ` Q${f(c.x)},${f(c.y)} ${f(b.x)},${f(b.y)}`;
  }
  return { d, dur: 3 + (r % 3) * 0.6, begin: 2.6 + r * 0.7 };
});

const PULSING = new Set(["1-2", "2-4"]);

const first = nodes[0][0];
const last = nodes[LAYERS.length - 1][LAYERS[LAYERS.length - 1] - 1];

export default function NeuralNet({ className = "" }) {
  return (
    <svg viewBox={`0 0 ${W} ${H}`} fill="none" aria-hidden="true" className={className}>
      {/* Edges */}
      <g stroke="white" strokeOpacity="0.2" strokeWidth="1" strokeLinecap="round">
        {edges.map((e, idx) => (
          <path
            key={e.key}
            d={e.d}
            pathLength="1"
            className="u-ink"
            style={{ animationDelay: `${0.2 + e.layer * 0.4 + (idx % 7) * 0.05}s` }}
          />
        ))}
      </g>

      {/* Nodes */}
      {nodes.map((layer, l) =>
        layer.map((n, i) => {
          const isOutput = l === LAYERS.length - 1;
          const pulses = PULSING.has(`${l}-${i}`);
          return (
            <g key={`${l}-${i}`}>
              <circle
                cx={f(n.x)}
                cy={f(n.y)}
                r="8"
                pathLength="1"
                stroke={isOutput || pulses ? "var(--color-gold)" : "white"}
                strokeOpacity={isOutput || pulses ? 1 : 0.7}
                strokeWidth="1.5"
                fill="var(--color-navy)"
                className="u-ink"
                style={{ animationDelay: `${0.1 + l * 0.4}s` }}
              />
              {(isOutput || pulses) && (
                <circle
                  cx={f(n.x)}
                  cy={f(n.y)}
                  r="3.5"
                  fill="var(--color-gold)"
                  className={pulses ? "animate-node-pulse" : "animate-fade-in"}
                  style={{ animationDelay: `${1.6 + l * 0.2}s` }}
                />
              )}
            </g>
          );
        })
      )}

      {/* Signals travelling through the network */}
      {signals.map((s, idx) => (
        <circle key={idx} r="3.5" fill="var(--color-gold-bright)" opacity="0" className="signal">
          <animateMotion dur={`${s.dur}s`} begin={`${s.begin}s`} repeatCount="indefinite" path={s.d} />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.1;0.85;1"
            dur={`${s.dur}s`}
            begin={`${s.begin}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}

      {/* Blueprint callouts */}
      <g
        fontFamily="var(--font-mono)"
        fontSize="11"
        letterSpacing="1.6"
        fill="white"
        fillOpacity="0.55"
        className="animate-fade-in max-md:hidden"
        style={{ animationDelay: "2s" }}
      >
        <path d={`M${f(first.x)},${f(first.y - 12)} L${f(first.x)},36 L${f(first.x + 24)},36`} fill="none" stroke="white" strokeOpacity="0.4" />
        <text x={f(first.x + 30)} y="40">INPUT · A REAL PROBLEM</text>
        <path d={`M${f(last.x)},${f(last.y + 12)} L${f(last.x)},${H - 24} L${f(last.x - 24)},${H - 24}`} fill="none" stroke="var(--color-gold)" strokeOpacity="0.8" />
        <text x={f(last.x - 30)} y={H - 20} textAnchor="end" fill="var(--color-gold)" fillOpacity="0.9">
          OUTPUT · A SHIPPED SOLUTION
        </text>
      </g>
    </svg>
  );
}
