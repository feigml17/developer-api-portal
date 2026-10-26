import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import ApiCard from '../components/ApiCard';
import { products } from '../data';

export default function Catalog() {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => products.filter((item) => `${item.name} ${item.description} ${item.category}`.toLowerCase().includes(query.toLowerCase())), [query]);
  return (
    <section className="section page-section">
      <span className="overline">Discover</span><h1>API catalogue</h1><p className="lead">Explore stable APIs and use the sandbox to validate integrations.</p>
      <label className="search"><Search size={19} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search APIs" /></label>
      <div className="card-grid">{filtered.map((product) => <ApiCard key={product.slug} product={product} />)}</div>
    </section>
  );
}

