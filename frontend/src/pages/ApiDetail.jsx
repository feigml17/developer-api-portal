import { Check, Copy, Play } from 'lucide-react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { products } from '../data';

export default function ApiDetail() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);
  const [ran, setRan] = useState(false);
  const [copied, setCopied] = useState(false);
  if (!product) return <section className="section page-section"><h1>API not found</h1><Link to="/catalog">Return to catalogue</Link></section>;

  const [method, path] = product.endpoint.split(/\s+/, 2);
  const request = `curl --request ${method} \\\n+  --url https://sandbox.example.test${path} \\\n+  --header 'X-API-Key: YOUR_KEY'`;
  const responses = {
    'shipment-tracking': { status: 'in_transit', location: 'Kuala Lumpur', eta: '2026-10-28' },
    'location-intelligence': { valid: true, city: 'Kuala Lumpur', country: 'MY', servicePoints: 4 },
    'rate-quote': { currency: 'MYR', amount: 24.5, service: 'Express', transitDays: 2 },
  };

  async function copyRequest() {
    await navigator.clipboard.writeText(request);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  }

  return (
    <section className="section page-section docs-layout">
      <aside><Link to="/catalog">← API catalogue</Link><strong>{product.name}</strong><a href="#overview">Overview</a><a href="#request">Request</a><a href="#response">Response</a></aside>
      <article className="docs-content">
        <span className="overline">{product.category} · {product.version}</span><h1>{product.name}</h1><p className="lead">{product.description}</p>
        <h2 id="request">Request</h2><div className="code-block"><button aria-label="Copy request" onClick={copyRequest}>{copied ? <Check size={16} /> : <Copy size={16} />}</button><pre>{request}</pre></div>
        <button className="primary-button" onClick={() => setRan(true)}><Play size={16} /> Run in sandbox</button>
        {ran && <div className="sandbox-result" id="response"><div><Check size={18} /> 200 OK <span>148 ms</span></div><pre>{JSON.stringify(responses[product.slug], null, 2)}</pre></div>}
      </article>
    </section>
  );
}

