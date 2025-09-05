// src/components/ServiceDetails/ServiceDetail.jsx
import { useParams, Link } from "react-router-dom";
import serviceData from "./Servicedetails/serviceData";
import HeroSection from "./Servicedetails/HeroSection";
import HighlightsSection from "./Servicedetails/HighlightsSection";
import StepsSection from "./Servicedetails/StepsSection";
import TrustSection from "./Servicedetails/TrustSection";
import FinalCTA from "./Servicedetails/FinalCTA";

const ServiceDetail = () => {
  const { serviceType } = useParams();
  const service = serviceData[serviceType];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Link to="/services" className="text-blue-600 hover:underline font-semibold">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <HeroSection service={service} />
      <HighlightsSection service={service} />
      <StepsSection service={service} />
      <TrustSection service={service} />
      <FinalCTA service={service} />
    </div>
  );
};

export default ServiceDetail;
