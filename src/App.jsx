import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import Services from './Pages/Services';
import ServiceDetail from './Pages/ServiceDetail';
import About from './Pages/About';
import HowWeWork from './Pages/HowWeWork';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';
import ScrollToTop from './Pages/ScrollTop';
import Clouditecture from './Pages/Products/Clouditecture';
function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceType" element={<ServiceDetail />} />
          <Route path="/products/clouditecture" element={<Clouditecture />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-we-work" element={<HowWeWork />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
      <Footer/>
    </Router>
  );
}

export default App;

