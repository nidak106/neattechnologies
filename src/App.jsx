import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Componenets/Layout';
import Home from './Pages/Home';
import Services from './Pages/Services';
import ServiceDetail from './Pages/ServiceDetail';
import About from './Pages/About';
import HowWeWork from './Pages/HowWeWork';
import Contact from './Pages/Contact';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceType" element={<ServiceDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-we-work" element={<HowWeWork />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

