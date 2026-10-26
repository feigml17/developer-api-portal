import { ArrowRight, Boxes, CloudCog, Gauge, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import ApiCard from '../components/ApiCard';
import { products } from '../data';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="eyebrow">Developer experience, simplified</div>
        <h1>Build connected experiences with reliable APIs.</h1>
        <p>Discover, test and integrate production-ready services from one secure developer portal.</p>
        <div className="hero-actions"><Link className="primary-button" to="/catalog">Explore APIs <ArrowRight size={18} /></Link><Link className="secondary-button" to="/dashboard">Open dashboard</Link></div>
        <div className="hero-terminal" aria-label="API response example">
          <div className="terminal-bar"><i></i><i></i><i></i><span>Sandbox response</span></div>
          <pre><span>GET</span> /tracking/v1/shipments/MY2048{`\n\n`}{`{`}{`\n`}  "status": "in_transit",{`\n`}  "location": "Kuala Lumpur",{`\n`}  "eta": "2026-10-28"{`\n`}{`}`}</pre>
        </div>
      </section>

      <section className="section">
        <div className="section-heading"><div><span className="overline">API catalogue</span><h2>Everything needed to start building</h2></div><Link to="/catalog">View all APIs <ArrowRight size={16} /></Link></div>
        <div className="card-grid">{products.map((product) => <ApiCard key={product.slug} product={product} />)}</div>
      </section>

      <section className="feature-strip">
        {[[ShieldCheck, 'Secure by design', 'Scoped keys, authentication and audit trails.'], [Gauge, 'Observable', 'Usage, latency and error-rate monitoring.'], [CloudCog, 'Cloud native', 'Containerized deployment and health checks.'], [Boxes, 'Developer friendly', 'Clear documentation and sandbox examples.']].map(([Icon, title, text]) => <div key={title}><Icon /><h3>{title}</h3><p>{text}</p></div>)}
      </section>
    </>
  );
}

