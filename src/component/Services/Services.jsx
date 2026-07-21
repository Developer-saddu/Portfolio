"use client";
import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaShopify, FaPalette } from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="text-4xl" />,
    title: "Web Development",
    description:
      "Custom websites built with modern technologies like React, Next.js, and Node.js. Fast, secure, and responsive.",
    features: [
      "Custom Web Applications",
      "E-commerce Solutions",
      "CMS Development",
      "API Integration",
    ],
  },
  {
    icon: <FaMobileAlt className="text-4xl" />,
    title: "Responsive Design",
    description:
      "Mobile-first websites that look great on all devices. Pixel-perfect UI with smooth user experience.",
    features: [
      "Mobile-First Approach",
      "Cross-Browser Compatible", 
      "Fast Loading Speed",
      "Interactive Animations",
    ],
  },
  {
    icon: <FaShopify className="text-4xl" />,
    title: "E-commerce Solutions",
    description:
      "Full-featured online stores with secure payment integration, inventory management, and admin panels.",
    features: [
      "Payment Gateway Integration",
      "Product Management",
      "Shopping Cart",
      "Order Tracking",
    ],
  },
  {
    icon: <FaPalette className="text-4xl" />,
    title: "UI/UX Design",
    description:
      "Beautiful and intuitive user interfaces that engage users and enhance brand presence.",
    features: [
      "Custom Design",
      "Prototyping",
      "Design Systems",
      "User Research",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="Services"
      className="py-20 px-6 md:px-16 lg:px-24 text-white transition-colors duration-500"
    >
      {/* Background decoration */}
      <div className="absolute top-40 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div className="text-center mb-16">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-purple-400"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Services
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I offer professional web development services to help businesses
            grow their online presence
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-white">{service.icon}</div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-400 mb-6">
            Need a custom solution for your business?
          </p>
          <a
            href="#Contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/30"
          >
            Let&apos;s Discuss Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
