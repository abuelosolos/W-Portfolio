import { Route, Routes } from 'react-router-dom';
import { Nav } from './components/Nav';
import { ScrollToHash } from './components/ScrollToHash';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:slug" element={<CaseStudy />} />
        <Route path="*" element={<CaseStudy />} />
      </Routes>
    </>
  );
}
