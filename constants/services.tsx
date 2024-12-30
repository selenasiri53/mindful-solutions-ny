import { Paintbrush } from 'lucide-react';
import { AirVent } from 'lucide-react';
import { Construction } from 'lucide-react';
import { HardHat } from 'lucide-react';
import { Building2 } from 'lucide-react';
import { Wrench } from 'lucide-react';

export const services = [
  {
    heading: "Lead-Based Paint Inspections.",
    description:
      "Unlike our competitors, we go beyond basic inspections to deliver lead-based paint inspection, risk assessment and XRF testing services by EPA-certified professionals.",
    icon: <Paintbrush className="text-primary h-5 w-5 relative z-50" />,
  },
  {
    heading: "Incomparable Indoor Air Quality Testing",
    description:
      "Our experts conduct thorough on-site evaluations to detect potential indoor air quality issues, such as mold, allergens, or chemical pollutants, providing detailed reports to highlight air quality concerns.",
    icon: <AirVent className="text-primary h-5 w-5 relative z-50" />,
  },
  {
    heading: "Post Construction Cleaning.",
    description:
      "After construction or renovation, your space deserves a flawless finish. We offer professional post-construction cleaning designed to transform your property into a pristine, move-in-ready space.",
    icon: <Construction className="text-primary h-5 w-5 relative z-50" />,
  },
  {
    heading: "Move-In & Move-Out Cleaning Made Easy",
    description:
      "Moving is already stressful enough—let us handle the cleaning! We offer premium cleaning services tailored to ensure a seamless transition while prioritizing save and sustainable cleaning methods to protect your health and the environment.",  
    icon: <HardHat className="text-primary h-5 w-5 relative z-50" />,
  },
  {
    heading: "Residential Building Maintenance.",
    description:
      "We'll help you navigate the NYC tri-state area's complex building regulations with ease, ensuring full compliance for your property by state. Our team provides clear, actionable solutions to achieve full regulatory compliance.",
    icon: <Building2 className="text-primary h-5 w-5 relative z-50" />,
  },
  {
    heading: "High-Quality Building Services",
    description:
      "Our licensed professionals bring years of experience and a commitment to excellence in every project. Holding the highest industry certifications, we guarantee that each inspection fully adheres to stringent federal and local regulations.",
    icon: <Wrench className="text-primary h-5 w-5 relative z-50" />,
  },
];
