import { Check, Copy, Play } from 'lucide-react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { products } from '../data';

export default function ApiDetail() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);
  const [ran, setRan] = useState(false);
  if (!product) return <section className="section page-section"><h1>API not found</h1><Link to="/catalog">Return to catalogue</Link></section>;
  return (
    <section className="section page-section docs-layout">
      <aside><Link to="/catalog">← API catalogue</Link><strong>{product.name}</strong><a href="#overview">Overview</a><a href="#request">Request</a><a href="#response">Response</a></aside>
      <article className="docs-content">
        <span className="overline">{product.category} · {product.version}</span><h1>{product.name}</h1><p className="lead">{product.description}</p>
        <h2 id="request">Request</h2><div className="code-block"><button aria-label="Copy request"><Copy size={16} /></button><pre>curl --request GET \\{`\n`}  --url https://sandbox.example.test{product.endpoint.replace('GET ', '')} \\{`\n`}  --header 'X-API-Key: YOUR_KEY'</pre></div>
        <button className="primary-button" onClick={() => setRan(true)}><Play size={16} /> Run in sandbox</button>
        {ran && <div className="sandbox-result"><div><Check size={18} /> 200 OK <span>148 ms</span></div><pre>{`{\n  "status": "in_transit",\n  "location": "Kuala Lumpur",\n  "eta": "2026-10-28"\n}`}</pre></div>}
      </article>
    </section>
  );
}

