import { FaLightbulb,FaShieldAlt, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot, FaAws, FaDocker, FaJava } from 'react-icons/fa';

import profileImg from '../assets/profile.jpg';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';

export const assets = {
    profileImg,
};

export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: 'Innovative',
    description: 'Creating secure and scalable solutions for complex problems with modern technologies.',
    color: 'purple'
  },
  {
    icon: FaCode,
    title: 'Clean Code',
    description: 'Writing maintainable, efficient code using Clean Architecture and DDD principles.',
    color: 'blue'
  },
  {
    icon: FaPaintBrush,
    title: 'UI/UX Focused',
    description: 'Building intuitive, modern, and responsive user interfaces with React.',
    color: 'pink'
  }
];

export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Crafting interactive and responsive interfaces with ReactJS and modern frameworks.',
    tags: ['React', 'TypeScript', 'TailwindCSS', 'Next.js']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Developing robust backend services, RESTful APIs, and microservices with Java & Spring Boot.',
    tags: ['Java', 'Spring Boot', 'Spring Cloud', 'Node.js', 'OAuth2', 'JWT']
  },
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    description: 'Deploying scalable, high-availability applications on cloud infrastructure.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing relational and NoSQL databases for enterprise applications.',
    tags: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis']
  },
  {
    title: 'FinTech & Payments',
    icon: FaStripe,
    description: 'Developing secure payment systems and digital wallet solutions.',
    tags: ['Stripe', 'PayPal API', 'Open Banking', 'Transaction Systems']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Efficient workflow with essential developer tools.',
    tags: ['Git', 'GitHub', 'Jira', 'Postman', 'VSCode']
  }
];

export const projects = [
  {
    title: "Money Manager – Personal Finance Tracker",
    description: "Full-stack personal finance app with React, Tailwind CSS & Spring Boot. Track income, expenses, manage categories, apply filters, export data to Excel, and use secure JWT authentication.",
    image: projectImg1,
    tech: ["React", "Tailwind CSS", "Spring Boot", "JWT", "Email", "Excel Export"],
    icons: [FaReact, FaDatabase, FaServer],
    demo: "https://astonishing-rugelach-8e59b3.netlify.app",
    code: "https://github.com/orhanturkmenoglu/money-manager"
  },
  {
    title: "E-Commerce SpringBoot – Microservices Platform",
    description: "Mikroservis tabanlı e-commerce uygulaması. Servis kaydı, API Gateway, Resilience4J, RabbitMQ, Stripe ödeme ve otomatik sepet temizleme gibi modern mikroservis kavramlarını içerir.",
    image: projectImg2,
    tech: ["Spring Boot", "Spring Cloud", "Docker", "RabbitMQ", "Stripe", "JWT"],
    icons: [FaServer, FaDatabase, FaCloud, FaStripe],
    demo: "#",
    code: "https://github.com/orhanturkmenoglu/e-commerce-springboot"
  },
  {
    title: "Foodies – Full Stack Food Ordering Platform",
    description: "React + Spring Boot tabanlı yemek sipariş uygulaması. JWT güvenlik, Stripe ödeme, admin paneli, mail yönetimi ve gerçek zamanlı sepet yönetimi içerir.",
    image: projectImg3,
    tech: ["React", "Spring Boot", "JWT", "Stripe", "PostgreSQL", "Tailwind CSS"],
    icons: [FaReact, FaServer, FaStripe],
    demo: "https://astonishing-rugelach-8e59b3.netlify.app/",
    code: "https://github.com/orhanturkmenoglu/foodies-netlify"
  },
  {
    title: "SecurePay QR – Modern Payment Platform",
    description: "Stripe ile entegre, gerçek zamanlı ödeme takibi ve otomatik QR kod üretimi sağlayan, güvenli ve ölçeklenebilir Spring Boot tabanlı ödeme platformu.",
    image: projectImg4,
    tech: ["Spring Boot", "Stripe API", "JWT", "QR Codes"],
    icons: [FaServer, FaStripe, FaMobileAlt],
    demo: "#",
    code: "https://github.com/orhanturkmenoglu/securepay-qr"
  },
  {
    title: "Spring AI Image API",
    description: "Yapay zekâ destekli görsel oluşturma REST API servisi. Spring Boot & WebClient ile OpenAI gibi AI modellerine istek gönderir, Base64 formatında görsel döner.",
    image: projectImg5,
    tech: ["Spring Boot", "OpenAI API", "REST API", "WebClient"],
    icons: [FaServer, FaRobot],
    demo: "#",
    code: "https://github.com/orhanturkmenoglu/spring-ai-image-api"
  },
  {
    title: "Spring Security Mernis Authentication",
    description: "MER-NIS Web Servisi ile TCKN doğrulaması yapan, JWT tabanlı güvenli oturum yönetimi sağlayan Spring Security uygulaması.",
    image: projectImg6,
    tech: ["Spring Boot", "Spring Security", "JWT", "MERNIS API"],
    icons: [FaServer, FaShieldAlt],
    demo: "#",
    code: "https://github.com/orhanturkmenoglu/spring-security-mernis-auth"
  },
  {
    title: "Afet-Radar – Real-Time Earthquake Tracker",
    description: "Kullanıcıların geçmiş ve güncel depremleri görüntüleyebileceği, belirli büyüklüğün üzerindeki depremler için uyarı alabileceği gerçek zamanlı bir sistem.",
    image: projectImg1,
    tech: ["Spring Boot", "REST API", "WebSocket", "Real-Time Data"],
    icons: [FaServer, FaCloud],
    demo: "#",
    code: "https://github.com/orhanturkmenoglu/afet-radar"
  },
  {
    title: "GÖSTERİM360 – Smart Cinema Ticketing System",
    description: "Sinema salonları için uçtan uca dijital biletleme sistemi. Yapay zekâ destekli koltuk önerisi, QR kodlu güvenli geçiş, hızlı işlem süreçleri ve SMS/email bildirimleri içerir.",
    image: projectImg2,
    tech: ["React", "Spring Boot", "AI Recommendation", "QR Code", "Stripe Payment", "JWT"],
    icons: [FaReact, FaServer, FaMobileAlt, FaRobot],
    demo: "#",
    code: "https://github.com/orhanturkmenoglu/gosterim360"
  }
];



export const workData = [
  {
    role: "Senior Backend Developer",
    company: "FinTech Solutions",
    duration: "2021 - Present",
    description: "Leading backend development, designing microservices, integrating payment systems, and mentoring junior developers.",
    color: "purple"
  },
  {
    role: "Full Stack Developer",
    company: "Enterprise Apps Co.",
    duration: "2018 - 2021",
    description: "Developed scalable enterprise solutions, integrating secure authentication, cloud deployment, and modern frontend.",
    color: "blue"
  },
  {
    role: "Junior Backend Developer",
    company: "TechStart Inc.",
    duration: "2016 - 2018",
    description: "Built foundational backend systems, learned best practices in microservices, Spring Boot, and database design.",
    color: "pink"
  }
];
