import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ApiCard({ product }) {
  return (
    <article className="api-card">
      <div className="card-topline">
        <span className="category">{product.category}</span>
        <span className="status"><CheckCircle2 size={14} /> Operational</span>
      </div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <code>{product.endpoint}</code>
      <div className="card-footer"><span>{product.version}</span><Link to={`/catalog/${product.slug}`}>View docs <ArrowRight size={16} /></Link></div>
    </article>
  );
}

