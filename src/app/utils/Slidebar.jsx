import React from 'react'
import Marquee from "react-fast-marquee"

const services = [
  {
    title: "ACB/VCB Servicing",
    link:"acb_vcb-servicing",
    description: "We specialize in the servicing and maintenance of Air Circuit Breakers (ACBs) and Vacuum Circuit Breakers (VCBs), ensuring optimal performance, safety, and extended equipment life."
  },
  {
    title: "Annual Maintenance Contract (AMC)",
    description: "Our AMC packages offer scheduled inspections, preventive maintenance, and fast response times to minimize downtime and extend the life of your electrical infrastructure."
  },
  {
    title: "Power Factor Correction",
    description: "We help improve your system’s efficiency by correcting poor power factor, reducing energy costs, and enhancing equipment performance."
  },
  {
    title: "Harmonic Analysis & Mitigation",
    description: "We conduct harmonic analysis and provide effective solutions to reduce distortion and improve the power quality of your electrical network."
  },
  {
    title: "Calibration Services",
    description: "Accurate measurement is critical. We offer professional calibration of meters, relays, and instruments to ensure compliance and precision in every reading."
  },
  {
    title: "Relay and Meter Testing",
    description: "Our testing services ensure that protective relays and energy meters are functioning correctly, helping you avoid faults and unplanned outages."
  },
  {
    title: "Energy Monitoring Systems",
    description: "We design and implement advanced Energy Monitoring Systems (EMS) to help you track energy consumption in real time and make data-driven decisions."
  },
  {
    title: "VFD Programming and Communication",
    description: "We offer expert programming and troubleshooting for Variable Frequency Drives (VFDs), including integration with communication protocols for smooth automation."
  },
  {
    title: "Retrofitting Services",
    description: "Upgrade your outdated systems with modern components through our efficient retrofitting solutions, designed to enhance performance without major overhauls."
  },
  {
    title: "Spares Replacement",
    description: "We supply and replace critical electrical spares with genuine, high-quality components to keep your operations running smoothly."
  },
  {
    title: "24x7 Support",
    description: "Our dedicated technical team is available around the clock to provide emergency support and quick resolution to any issues you encounter."
  }
];

function Slidebar() {
  return (
    <div className=" py-4">
      <Marquee pauseOnHover speed={50} gradient={false}>
        <div className="flex gap-4 justify-around">
          {services.map((service, index) => (
            <div key={index} className={`w-60 bg-yellow-100 hover:bg-yellow-200 h-auto p-4 rounded-md border border-yellow-400 shadow-md ${index==0 && "ml-4"}`}>
              <h3 className="font-bold text-xl text-[#e83433]">{service.title}</h3>
              <p className="text-sm mt-2 text-zinc-700">{service.description}</p>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}

export default Slidebar;
