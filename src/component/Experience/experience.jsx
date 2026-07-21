"use client";
import { motion } from "framer-motion";

export default function ExperienceTimeline() {
  const experiences = [
    {
      role: "Software Engineer (Full Stack)",
      company: "Kognito Kube Private Limited",
      companyLink: "https://kognitokube.com/",
      duration: "March 2025 – Present",
      techStack: [
        "Node.js",
        "NestJS",
        "Express.js",
        "TypeScript",
        "React.js",
        "PostgreSQL",
        "Prisma ORM",
        "Redis",
        "NATS JetStream",
        "AWS Cognito",
        "Docker",
        "NGINX",
      ],
      description: [
        "Designed and developed scalable microservices and REST APIs using Node.js, NestJS, Express.js, and TypeScript following Clean Architecture and SOLID principles.",
        "Built production-grade backend services supporting high-volume business workflows with secure authentication using AWS Cognito, JWT, and Role-Based Access Control (RBAC).",
        "Developed event-driven communication between services using NATS JetStream and implemented reliable messaging patterns including publishers, consumers, acknowledgements, retries, and dead-letter queues.",
        "Improved application performance using Redis caching, optimized PostgreSQL queries with Prisma ORM, and designed efficient database schemas for transactional workloads.",
        "Configured NGINX as a reverse proxy and load balancer while containerizing services using Docker for scalable deployments on AWS.",
        "Collaborated with cross-functional teams to design, implement, review, and deploy production features while maintaining high code quality and system reliability.",
      ],
    },
    {
      role: "Team Lead | Full Stack Developer",
      company: "KHKR Innovator Tech Solutions",
      companyLink: "https://khkrinnovator.com/",
      duration: "September 2024 – February 2025",
      techStack: [
        "Node.js",
        "Express.js",
        "React.js",
        "Next.js",
        "MySQL",
        "Sequelize ORM",
        "Razorpay",
        "AWS S3",
        "OAuth",
      ],
      description: [
        "Led a team of developers in designing and delivering scalable CRM and HRMS applications using Node.js, Express.js, React.js, Next.js, MySQL, and Sequelize ORM.",
        "Architected secure authentication and authorization using JWT, OAuth, Google Sign-In, Facebook Login, and role-based access control.",
        "Integrated Razorpay payment gateway, AWS S3 storage, email notifications, and third-party APIs to deliver complete business workflows.",
        "Optimized application performance, improved SEO using Next.js, and managed production deployments on AWS EC2 with high availability.",
        "Conducted code reviews, mentored junior developers, resolved production issues, and collaborated closely with QA and product teams.",
      ],
    },
    {
      role: "Associate Software Developer",
      company: "Truequations Pvt. Ltd.",
      companyLink: "https://truequations.com/",
      duration: "November 2022 – August 2024",
      techStack: [
        "Node.js",
        "Express.js",
        "MySQL",
        "MongoDB",
        "Sequelize",
        "Mongoose",
        "Stripe",
        "Razorpay",
        "AWS S3",
      ],
      description: [
        "Developed scalable backend services and REST APIs using Node.js, Express.js, MySQL, MongoDB, and Sequelize ORM.",
        "Built secure authentication modules using JWT, OAuth, bcrypt, Google Sign-In, and Facebook authentication.",
        "Integrated Stripe and Razorpay payment gateways, SMS services, email notifications, and AWS S3 storage into production applications.",
        "Optimized SQL queries, improved API performance, and participated in database design, debugging, testing, and production support.",
        "Worked closely with frontend developers to deliver complete end-to-end features while following Git workflows and Agile development practices.",
      ],
    },
  ];

  return (
    <section
      id="Experiences"
      className="py-16 px-4 sm:px-6 text-white transition-colors duration-500"
    >
      {/* Background decoration */}
      <div className="absolute top-40 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-cyan-400 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm p-5 sm:p-6 rounded-2xl border border-gray-700 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
            >
              {/* Header */}
              <div className="mb-4">
                <h3 className="text-xl sm:text-2xl font-semibold text-cyan-300 mb-1">
                  {exp.role}
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base text-gray-400">
                  <a
                    href={exp.companyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 underline transition-colors"
                  >
                    {exp.company}
                  </a>
                  <span className="text-gray-600">•</span>
                  <span className="text-cyan-400">{exp.duration}</span>
                </div>
              </div>

              {/* Tech Stack - Compact */}
              <div className="flex flex-wrap gap-2 mb-4">
                {exp.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-xs bg-cyan-900/30 text-cyan-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description - Compact List */}
              <ul className="list-none space-y-1.5">
                {exp.description.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-gray-300 text-sm"
                  >
                    <span className="text-cyan-400 mt-0.5">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
