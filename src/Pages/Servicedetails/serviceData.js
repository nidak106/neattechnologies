// src/components/ServiceDetails/serviceData.js
const serviceData = {
"web-development": {
  title: "Custom Web Development",
  subtitle: "Build powerful web applications that scale with your business",
  hero: "Transform your ideas into high-performance web applications with modern technologies and best practices.",
  heroImage: "https://source.unsplash.com/800x600/?technology,web",
  icon: "🌐",
  color: "rose",

  // 🌆 Darker gradient for visibility
  bgGradient: "from-rose-200 via-rose-400 to-pink-600",

  // Adjust text colors for contrast
  subtitleText: "text-gray-100",
  heroText: "text-gray-200",

  // Accents stay in rose family but a bit stronger
  accentColor: "bg-rose-500",
  lightAccent: "bg-rose-100",
  textAccent: "text-rose-200",
  borderAccent: "border-rose-400",

  cardHeight: "h-full",
  heroGif: "https://media.giphy.com/media/L8K62iTDkzGX6/giphy.gif",

  highlights: [
    { title: "Lightning Fast Performance", description: "Optimized code and modern frameworks ensure your web app loads instantly and runs smoothly.", icon: "⚡", stat: "3x faster loading" },
    { title: "Responsive Design", description: "Beautiful interfaces that work perfectly on desktop, tablet, and mobile devices.", icon: "📱", stat: "100% mobile ready" },
    { title: "Scalable Architecture", description: "Built to handle growth from hundreds to millions of users without breaking a sweat.", icon: "🚀", stat: "Scales to millions" },
    { title: "SEO Optimized", description: "Search engine friendly code that helps your business get discovered online.", icon: "🔍", stat: "Top search rankings" }
  ],
  steps: [
    { title: "Discovery & Planning", description: "We analyze your requirements and create a detailed roadmap", icon: "🎯" },
    { title: "Design & Prototype", description: "Interactive prototypes that bring your vision to life", icon: "🎨" },
    { title: "Development & Testing", description: "Clean, maintainable code with comprehensive testing", icon: "⚙️" },
    { title: "Launch & Support", description: "Smooth deployment with ongoing maintenance and updates", icon: "🚀" }
  ],
  testimonials: [
    { name: "Sarah Chen", role: "CEO, TechStart", quote: "Our web app increased user engagement by 300% after the redesign.", avatar: "https://i.pravatar.cc/100?img=1" },
    { name: "Mike Rodriguez", role: "CTO, GrowthCo", quote: "The performance improvements were incredible. Page load times dropped by 70%.", avatar: "https://i.pravatar.cc/100?img=2" }
  ],
  stats: [
    { number: "50+", label: "Web Apps Built" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "2.5s", label: "Avg Load Time" }
  ]
},"web-development": {
  title: "Custom Web Development",
  subtitle: "Build powerful web applications that scale with your business",
  hero: "Transform your ideas into high-performance web applications with modern technologies and best practices.",
  heroImage: "https://source.unsplash.com/800x600/?technology,web",
  icon: "🌐",
  color: "rose",

  // 🌤 Softer gradient (lighter than before, darker than original)
  bgGradient: "from-rose-100 via-rose-300 to-pink-400",

  // Keep text dark for readability on light bg
  subtitleText: "text-gray-700",
  heroText: "text-gray-600",

  // Accents balanced — slightly stronger than original
  accentColor: "bg-rose-100",
  lightAccent: "bg-rose-100",
  textAccent: "text-rose-600",
  borderAccent: "border-rose-300",

  cardHeight: "h-full",
  heroGif: "https://media.giphy.com/media/L8K62iTDkzGX6/giphy.gif",

  highlights: [
    { title: "Lightning Fast Performance", description: "Optimized code and modern frameworks ensure your web app loads instantly and runs smoothly.", icon: "⚡", stat: "3x faster loading" },
    { title: "Responsive Design", description: "Beautiful interfaces that work perfectly on desktop, tablet, and mobile devices.", icon: "📱", stat: "100% mobile ready" },
    { title: "Scalable Architecture", description: "Built to handle growth from hundreds to millions of users without breaking a sweat.", icon: "🚀", stat: "Scales to millions" },
    { title: "SEO Optimized", description: "Search engine friendly code that helps your business get discovered online.", icon: "🔍", stat: "Top search rankings" }
  ],
  steps: [
    { title: "Discovery & Planning", description: "We analyze your requirements and create a detailed roadmap", icon: "🎯" },
    { title: "Design & Prototype", description: "Interactive prototypes that bring your vision to life", icon: "🎨" },
    { title: "Development & Testing", description: "Clean, maintainable code with comprehensive testing", icon: "⚙️" },
    { title: "Launch & Support", description: "Smooth deployment with ongoing maintenance and updates", icon: "🚀" }
  ],
  testimonials: [
    { name: "Sarah Chen", role: "CEO, TechStart", quote: "Our web app increased user engagement by 300% after the redesign.", avatar: "https://i.pravatar.cc/100?img=1" },
    { name: "Mike Rodriguez", role: "CTO, GrowthCo", quote: "The performance improvements were incredible. Page load times dropped by 70%.", avatar: "https://i.pravatar.cc/100?img=2" }
  ],
  stats: [
    { number: "50+", label: "Web Apps Built" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "2.5s", label: "Avg Load Time" }
  ]
}
,

  "mobile-app": {
  title: "Mobile App Solutions",
  subtitle: "Native and cross-platform apps that users love",
  hero: "Create exceptional mobile experiences that engage users and drive business growth across iOS and Android.",
  icon: "📱",
  color: "emerald",
  heroGif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWxwMGpqMGV3ZnZhY29oeng4c2t2bmhwcHhoenEwZ2VxemRyazR5aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZgTR3UQ9XAWDvqy9jv/giphy.gif",

  // 🌤 Softer airy gradient
  bgGradient: "from-emerald-50 via-emerald-00 to-teal-600",

  // Adjusted text colors for readability on light background
  subtitleText: "text-gray-700",
  heroText: "text-gray-600",

  // Balanced accents (not harsh emerald-600 anymore)
  accentColor: "bg-teal-100",
  lightAccent: "bg-emerald-200",
  textAccent: "text-emerald-700",
  borderAccent: "border-emerald-300",

  cardHeight: "h-full",

  highlights: [
    { title: "Cross-Platform Excellence", description: "One codebase, two platforms. Save time and money while reaching all your users.", icon: "🔄", stat: "50% faster delivery" },
    { title: "Native Performance", description: "Smooth animations and responsive interactions that feel truly native.", icon: "⚡", stat: "60fps animations" },
    { title: "Offline Capabilities", description: "Your app works even without internet connection, syncing when back online.", icon: "📶", stat: "100% offline ready" },
    { title: "App Store Success", description: "Optimized for app store approval and featuring to maximize downloads.", icon: "⭐", stat: "98% approval rate" }
  ],

  steps: [
    { title: "Strategy & Research", description: "Market analysis and user research to define your app's success", icon: "📊" },
    { title: "UX/UI Design", description: "Intuitive designs that users love and understand instantly", icon: "🎨" },
    { title: "Development & Testing", description: "Robust development with real device testing across platforms", icon: "📱" },
    { title: "Launch & Growth", description: "App store optimization and post-launch growth strategies", icon: "🚀" }
  ],

  testimonials: [
    { name: "Jessica Park", role: "Founder, FitLife", quote: "Our app hit 100K downloads in the first month. The UX is incredible.", avatar: "https://i.pravatar.cc/100?img=3" },
    { name: "David Kim", role: "Product Manager, ShopEasy", quote: "Users love how smooth and fast the app feels. 5-star reviews keep coming.", avatar: "https://i.pravatar.cc/100?img=4" }
  ],

  stats: [
    { number: "30+", label: "Apps Published" },
    { number: "4.8★", label: "Avg App Rating" },
    { number: "2M+", label: "Total Downloads" }
  ]
}
,
"cloud-integration": {
  title: "Cloud <br/>Integration",
  heroGif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExazE3b25obnUydGVkczhxZGM3aGhxbno0b29oZmNqZGJ6bW40bzdkayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L1R1tvI9svkIWwpVYr/giphy.gif",
  subtitle: "Scalable infrastructure that grows with your business",
  hero: "Leverage the power of cloud computing to scale your applications and optimize performance with enterprise-grade solutions.",
  icon: "☁️",
  color: "purple",

  // 🌤️ Light airy cloud vibe
  bgGradient: "from-sky-200 via-sky-300 to-indigo-400",

  // 🖋️ Text adjusted for readability
  subtitleText: "text-gray-700",
  heroText: "text-gray-600",

  // 🎨 Accents tuned for lighter gradient
  accentColor: "bg-sky-300",
  lightAccent: "bg-sky-100",
  textAccent: "text-sky-600",
  borderAccent: "border-sky-400",

  cardHeight: "h-full", // ✅ consistent height

  highlights: [
    { title: "Auto-Scaling Infrastructure", description: "Your applications automatically scale up or down based on demand, saving costs.", icon: "📈", stat: "Auto-scales instantly" },
    { title: "99.99% Uptime", description: "Enterprise-grade reliability with redundancy and failover protection.", icon: "🛡️", stat: "99.99% uptime SLA" },
    { title: "Global CDN", description: "Lightning-fast content delivery worldwide with edge caching.", icon: "🌍", stat: "Global reach" },
    { title: "Cost Optimization", description: "Pay only for what you use with intelligent resource management.", icon: "💰", stat: "40% cost savings" }
  ],
  steps: [
    { title: "Infrastructure Audit", description: "Comprehensive analysis of your current setup and requirements", icon: "🔍" },
    { title: "Migration Strategy", description: "Detailed plan for seamless transition to cloud infrastructure", icon: "📋" },
    { title: "Implementation", description: "Careful migration with zero downtime and full data integrity", icon: "⚙️" },
    { title: "Optimization", description: "Ongoing monitoring and optimization for peak performance", icon: "📊" }
  ],
  testimonials: [
    { name: "Robert Chen", role: "CTO, DataFlow", quote: "Migration was seamless. Our costs dropped 40% while performance improved.", avatar: "https://i.pravatar.cc/100?img=5" },
    { name: "Lisa Wang", role: "DevOps Lead, ScaleTech", quote: "The auto-scaling saved us during our viral launch. No downtime at all.", avatar: "https://i.pravatar.cc/100?img=6" }
  ],
  stats: [
    { number: "100+", label: "Cloud Migrations" },
    { number: "40%", label: "Avg Cost Reduction" },
    { number: "24/7", label: "Monitoring" }
  ]
}
,

 "ai-automation": {
   title: "AI &<br />Automation",
  subtitle: "Intelligent solutions that work while you sleep",
  hero: "Transform your business processes with intelligent automation and AI-powered solutions that drive efficiency and innovation.",
  icon: "🤖",
  color: "amber",

  // 🌤️ Updated background gradient
  bgGradient: "from-orange-50 via-orange-200 to-rose-300",

  heroGif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcG42M2tydGQzdWUzOTRiNnlmODVhdTE4YXFua2p1dTN4b2R6azhxbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qgQUggAC3Pfv687qPC/giphy.gif",

  // 📝 Softer text for light bg
  subtitleText: "text-slate-700",
  heroText: "text-slate-600",

  // 🎨 Accent palette
  accentColor: "bg-orange-200",
  lightAccent: "bg-orange-100",
  textAccent: "text-orange-300",
  borderAccent: "border-orange-400",

  cardHeight: "h-full", // ✅ consistent height

  highlights: [
    { title: "Process Automation", description: "Eliminate repetitive tasks and free your team to focus on high-value work.", icon: "⚙️", stat: "80% time savings" },
    { title: "Intelligent Insights", description: "AI-powered analytics that reveal hidden patterns in your data.", icon: "🧠", stat: "Predictive accuracy" },
    { title: "24/7 AI Assistants", description: "Smart chatbots and virtual assistants that never sleep.", icon: "💬", stat: "Round-the-clock service" },
    { title: "Custom ML Models", description: "Tailored machine learning solutions for your specific business needs.", icon: "🎯", stat: "Custom-built AI" }
  ],
  steps: [
    { title: "Process Analysis", description: "Identify automation opportunities and potential ROI", icon: "🔍" },
    { title: "AI Strategy", description: "Design intelligent solutions tailored to your workflows", icon: "🧠" },
    { title: "Development & Training", description: "Build and train AI models with your specific data", icon: "⚙️" },
    { title: "Integration & Scaling", description: "Seamless integration with monitoring and continuous improvement", icon: "📈" }
  ],
  testimonials: [
    { name: "Amanda Foster", role: "Operations Director, AutoCorp", quote: "AI automation reduced our processing time by 80%. Game-changing results.", avatar: "https://i.pravatar.cc/100?img=7" },
    { name: "James Liu", role: "CEO, SmartLogistics", quote: "The predictive analytics helped us reduce costs by $2M annually.", avatar: "https://i.pravatar.cc/100?img=8" }
  ],
  stats: [
    { number: "25+", label: "AI Solutions Built" },
    { number: "80%", label: "Avg Time Savings" },
    { number: "$2M+", label: "Client Savings" }
  ]
}

};

export default serviceData;
