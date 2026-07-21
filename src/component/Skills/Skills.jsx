"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaNodeJs,
  FaJs,
  FaPython,
  FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiExpress,
  SiRedux,
  SiPostman,
  SiDocker,
  SiNestjs,
  SiAmazonwebservices,
  SiNginx,
  SiKubernetes,
  SiJavascript,
} from "react-icons/si";
import {
  Bot,
  Layers,
  Database,
  Cloud,
  ShieldCheck,
} from "lucide-react";

const skillCategories = [
  {
    id: "languages",
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "Python", icon: <FaPython className="text-blue-400" /> },
      { name: "Java", icon: <FaJava className="text-orange-500" /> },
      { name: "SQL", icon: <Database className="text-cyan-400" /> },
      { name: "NoSQL", icon: <Database className="text-green-400" /> },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "NestJS", icon: <SiNestjs className="text-red-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      { name: "REST APIs", icon: <Layers className="text-blue-400" /> },
      { name: "Microservices", icon: <Layers className="text-cyan-400" /> },
      { name: "gRPC", icon: <ShieldCheck className="text-blue-500" /> },
      { name: "JWT Auth", icon: <ShieldCheck className="text-pink-400" /> },
      { name: "RBAC", icon: <ShieldCheck className="text-green-400" /> },
      { name: "NATS JetStream", icon: <Bot className="text-orange-400" /> },
      { name: "RabbitMQ", icon: <Bot className="text-orange-500" /> },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { name: "React.js", icon: <FaJs className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiTypescript className="text-white" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
      { name: "SurveyJS", icon: <Layers className="text-emerald-400" /> },
    ],
  },
  {
    id: "databases",
    title: "Databases & ORM",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "Redis", icon: <SiRedis className="text-red-500" /> },
      { name: "Prisma ORM", icon: <Database className="text-teal-400" /> },
      { name: "Sequelize", icon: <Database className="text-blue-300" /> },
      { name: "Mongoose", icon: <Database className="text-green-400" /> },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS EC2", icon: <SiAmazonwebservices className="text-orange-400" /> },
      { name: "AWS S3", icon: <SiAmazonwebservices className="text-orange-400" /> },
      { name: "AWS Cognito", icon: <SiAmazonwebservices className="text-orange-400" /> },
      { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500" /> },
      { name: "NGINX", icon: <SiNginx className="text-green-500" /> },
      { name: "Swagger", icon: <Layers className="text-green-400" /> },
    ],
  },
  {
    id: "architecture",
    title: "Architecture",
    skills: [
      { name: "System Design", icon: <Layers className="text-cyan-400" /> },
      { name: "Event-Driven", icon: <Bot className="text-purple-400" /> },
      { name: "API Gateway", icon: <ShieldCheck className="text-blue-400" /> },
      { name: "Kong API Gateway", icon: <ShieldCheck className="text-indigo-400" /> },
      { name: "Casbin", icon: <ShieldCheck className="text-orange-400" /> },
      { name: "Distributed Systems", icon: <Cloud className="text-sky-400" /> },
      { name: "Caching", icon: <Database className="text-yellow-400" /> },
      { name: "SOLID", icon: <Layers className="text-green-400" /> },
      { name: "Clean Architecture", icon: <Layers className="text-cyan-300" /> },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    skills: [
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      { name: "VS Code", icon: <SiJavascript className="text-blue-500" /> },
      { name: "IntelliJ IDEA", icon: <SiJavascript className="text-red-400" /> },
      { name: "Docker Desktop", icon: <SiDocker className="text-blue-400" /> },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState("backend");

  const activeCategory = skillCategories.find((cat) => cat.id === activeTab);

  return (
    <section
      id="Skills"
      className="py-16 px-4 sm:px-6 flex flex-col items-center"
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-cyan-400"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {skillCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveTab(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === category.id
                ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/30"
                : "bg-gray-800/50 text-gray-400 hover:bg-gray-700 hover:text-cyan-300 border border-gray-700"
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Skills */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-4xl"
      >
        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 sm:gap-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {activeCategory?.skills.map((skill, i) => (
            <motion.div
              key={i}
              variants={item}
              className="group relative bg-gray-800/50 rounded-xl p-3 sm:p-4 backdrop-blur-sm
                         border border-cyan-500/10 hover:border-cyan-500/30
                         hover:bg-gradient-to-br hover:from-cyan-600/20 hover:to-blue-600/20
                         transition-all duration-300 hover:scale-105
                         shadow-lg hover:shadow-cyan-500/20 cursor-pointer"
            >
              <div className="flex flex-col items-center justify-center">
                <div className="text-2xl sm:text-3xl mb-1 sm:mb-2 transform group-hover:scale-110 transition">
                  {skill.icon || <Layers />}
                </div>
                <p className="text-xs sm:text-sm font-semibold text-center group-hover:text-cyan-300">
                  {skill.name}
                </p>
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:left-full transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
