import { Route, Routes } from 'react-router-dom';
import Shell from './components/Shell';
import ApiDetail from './pages/ApiDetail';
import Catalog from './pages/Catalog';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

export default function App() {
  return <Shell><Routes><Route path="/" element={<Home />} /><Route path="/catalog" element={<Catalog />} /><Route path="/catalog/:slug" element={<ApiDetail />} /><Route path="/dashboard" element={<Dashboard />} /></Routes></Shell>;
}

