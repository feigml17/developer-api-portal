import { Activity, Clock3, KeyRound, TrendingUp } from 'lucide-react';
import { useState } from 'react';

export default function Dashboard() {
  const [keys, setKeys] = useState([{ id: 1, name: 'Local development', prefix: 'dp_8F3K••••', created: '21 Oct 2026' }]);
  const addKey = () => setKeys((current) => [...current, { id: Date.now(), name: `Sandbox key ${current.length + 1}`, prefix: 'dp_NEW••••', created: 'Just now' }]);
  return (
    <section className="section page-section">
      <span className="overline">Developer console</span><h1>Usage dashboard</h1><p className="lead">Monitor integrations and manage sandbox credentials.</p>
      <div className="metric-grid">{[[Activity, '18,420', 'Requests'], [TrendingUp, '99.72%', 'Success rate'], [Clock3, '182 ms', 'P95 latency'], [KeyRound, `${keys.length}`, 'Active keys']].map(([Icon, value, label]) => <div className="metric" key={label}><Icon /><strong>{value}</strong><span>{label}</span></div>)}</div>
      <div className="panel"><div className="panel-heading"><div><h2>API keys</h2><p>Keys are masked and scoped to the sandbox.</p></div><button className="primary-button" onClick={addKey}>Create key</button></div><div className="key-table">{keys.map((key) => <div key={key.id}><strong>{key.name}</strong><code>{key.prefix}</code><span>{key.created}</span><button onClick={() => setKeys(keys.filter((item) => item.id !== key.id))}>Revoke</button></div>)}</div></div>
    </section>
  );
}

