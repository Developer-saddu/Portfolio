// project_data.js
import millionmakers from "../assets/millionmakers.png";
import teachopia from "../assets/teachopia.png";
import cryovault from "../assets/cryovault.png";
import gift4day from "../assets/gift4day.png";
import godenty from "../assets/godenty.png";

const project_data = [
  {
    p_no: 1,
    p_img: millionmakers,
    p_href: "https://millionmakers.org/",
    p_github: "#",
    p_name: "Million Makers — Survey Rewards Management Platform",
    p_desc:
      "Production-grade microservices-based survey rewards platform consisting of independent services for User, Survey, Wallet, Notification, Dashboard, and FAQ management. Built with NestJS, TypeScript, React.js, PostgreSQL, Prisma ORM, Redis, NATS JetStream, Docker, and NGINX on AWS.",
    tech: "NestJS, TypeScript, React.js, PostgreSQL, Prisma ORM, Redis, NATS JetStream, Docker, NGINX, AWS, Microservices, SurveyJS",
    features: [
      "Built microservices for User, Survey, Wallet, Notification, Dashboard, and FAQ management",
      "Scalable REST APIs using NestJS following Clean Architecture and SOLID principles",
      "Asynchronous service-to-service communication via NATS JetStream with DLQ and retries",
      "NGINX reverse proxy and load balancer for routing across backend services",
      "Secure wallet and reward distribution engine with real-time transaction processing",
      "AWS Cognito, JWT, and RBAC for secure authentication and authorization",
      "Redis caching and optimized PostgreSQL queries for improved performance",
      "Docker containerization with production-ready logging and monitoring on AWS",
      "SurveyJS integration for dynamic survey form builder and rendering",
    ],
  },
  {
    p_no: 2,
    p_img: teachopia,
    p_href: "https://manageprod.teachopia.org/",
    p_github: "#",
    p_name: "Teachopia — Learning Management System (LMS)",
    p_desc:
      "Scalable backend services for a full-featured LMS supporting course management, enrollment, quizzes, certifications, and content delivery. Built with NestJS, Next.js, PostgreSQL, Prisma ORM, Kong API Gateway, Redis, NATS JetStream, and Docker using microservices architecture.",
    tech: "NestJS, Next.js, PostgreSQL, Prisma ORM, Kong API Gateway, Redis, NATS JetStream, Docker, Microservices, Casbin, ABAC, RBAC",
    features: [
      "Backend services for course management, enrollment, quizzes, certifications, and content delivery",
      "Secure REST APIs integrated with Next.js and React.js frontend applications",
      "Kong API Gateway for centralized routing, authentication, request validation, and traffic management",
      "NATS JetStream for asynchronous communication between internal services",
      "Redis caching and optimized database queries for improved API response time",
      "Production deployments using Docker with scalable microservices architecture",
      "Casbin for fine-grained authorization policies with ABAC and RBAC models",
    ],
  },
  {
    p_no: 3,
    p_img: cryovault,
    p_href: "https://www.cryovault.in/",
    p_github: "#",
    p_name: "Cryovault — CRM & HRMS Platform",
    p_desc:
      "Scalable CRM platform led as Team Lead and Full Stack Developer with Node.js, React.js, and AWS S3. Designed HRMS modules including employee management, attendance tracking, regularization, and role-based access control. Developed lead tracking, task scheduling, and integrated Google Calendar, OTP, push notifications, and Google Maps geo-fencing for real-time location-based attendance.",
    tech: "Node.js, React.js, MySQL, AWS, Sequelize, JWT, Google Maps, OTP, Push Notifications",
    features: [
      "Led team as Full Stack Developer to build scalable CRM platform with Node.js and React.js",
      "Designed HRMS modules: employee management, attendance tracking, regularization, and RBAC",
      "Lead tracking and task scheduling with Google Calendar integration",
      "OTP authentication and push notifications for real-time user engagement",
      "Google Maps geo-fencing for location-based attendance tracking",
      "AWS S3 for secure file storage and scalable cloud deployments",
    ],
  },
  {
    p_no: 4,
    p_img: gift4day,
    p_href: "https://www.gift4day.com/",
    p_github: "#",
    p_name: "Gift4Day — Cross-Platform E-Commerce Application",
    p_desc:
      "Cross-platform e-commerce application delivered using Node.js and Express.js. Integrated Stripe Payment Gateway, Nodemailer and SMS for communication, Sequelize ORM, JWT, bcrypt, google-auth-library, and passport-facebook for secure authentication and social login.",
    tech: "Node.js, React.js, Stripe, MySQL, MongoDB, AWS, Sequelize, JWT, bcrypt, Google Auth, Facebook Login",
    features: [
      "Cross-platform e-commerce application built with Node.js and Express.js",
      "Stripe Payment Gateway integration for secure online transactions",
      "Nodemailer and SMS services for order notifications and communication",
      "Sequelize ORM with MySQL and MongoDB for flexible data modeling",
      "JWT, bcrypt, google-auth-library, and passport-facebook for secure authentication",
      "AWS cloud infrastructure for scalable hosting and deployment",
    ],
  },
  {
    p_no: 5,
    p_img: godenty,
    p_href: "https://www.godenty.com/",
    p_github: "#",
    p_name: "GoDenty — Dental Services Application",
    p_desc:
      "Cross-platform dental services application delivered with Node.js, Express.js, React.js, AWS EC2/S3. Integrated Razorpay payment gateway, Msg91 SMS, Nodemailer, Sequelize ORM, JWT, google-auth-library, and passport-facebook for secure authentication and seamless user experience.",
    tech: "Node.js, React.js, MySQL, AWS, Razorpay, Sequelize, JWT, Google Auth, Facebook Login, Msg91 SMS",
    features: [
      "Cross-platform dental services application built with Node.js, Express.js, and React.js",
      "Razorpay payment gateway integration for appointment bookings and payments",
      "Msg91 SMS and Nodemailer for appointment reminders and notifications",
      "Sequelize ORM with MySQL for efficient database operations",
      "JWT, google-auth-library, and passport-facebook for secure authentication",
      "AWS EC2 and S3 for reliable hosting and secure file storage",
    ],
  },
];

export default project_data;
