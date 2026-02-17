import { BlogPost, CaseStudy, Service } from './types';

export const INITIAL_BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Why Every Business in Odisha Needs a Website',
    excerpt: 'In today\'s digital age, having a physical shop isn\'t enough. Here is why a website is your most powerful asset.',
    content: '## The Digital Shift\n\nMore customers in Odisha are searching online before visiting a store. A professional website acts as your 24/7 salesperson...\n\n### Credibility\nA website makes your business look professional and trustworthy compared to competitors who only use social media.',
    author: 'Growmarq Team',
    date: '2023-10-15',
    category: 'Business Growth',
    imageUrl: 'https://picsum.photos/800/400?random=1'
  },
  {
    id: '2',
    title: 'Landing Pages vs. Websites: What Do You Need?',
    excerpt: 'Understanding the difference can save you money and increase your sales.',
    content: '## The Goal Matters\n\nIf you want to sell a specific product or course, a landing page is best. If you want to build a brand, you need a full website...\n\n### Conversion Focus\nLanding pages have one goal: conversion. Websites have multiple goals: information, trust, and contact.',
    author: 'Growmarq Team',
    date: '2023-11-02',
    category: 'Web Development',
    imageUrl: 'https://picsum.photos/800/400?random=2'
  },
  {
    id: '3',
    title: 'E-Commerce Growth in India',
    excerpt: 'How local businesses are scaling by selling products online with secure payment gateways.',
    content: '## Selling Beyond Boundaries\n\nAn e-commerce website allows you to sell to customers across India, not just in your local city...\n\n### Secure Payments\nIntegrating UPI and secure gateways builds trust and makes purchasing easy for customers.',
    author: 'Growmarq Team',
    date: '2023-11-20',
    category: 'E-Commerce',
    imageUrl: 'https://picsum.photos/800/400?random=3'
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Business Website Development',
    description: 'Perfect for local businesses, companies, and startups. We build professional websites that build trust and generate leads.',
    iconName: 'Briefcase',
    features: ['Professional design', 'Mobile responsive layout', 'Contact forms', 'Service pages', 'Basic SEO structure']
  },
  {
    id: 's2',
    title: 'Portfolio Website Development',
    description: 'Show your skills professionally. Ideal for freelancers, designers, photographers, and consultants.',
    iconName: 'User',
    features: ['Work showcase section', 'About profile', 'Contact integration', 'Social media links']
  },
  {
    id: 's3',
    title: 'Landing Page Development',
    description: 'Conversion-focused pages designed to generate leads and sales for ads and product launches.',
    iconName: 'Target',
    features: ['Strong headline', 'Persuasive layout', 'Call-to-action optimization', 'High conversion design']
  },
  {
    id: 's4',
    title: 'E-Commerce Website Development',
    description: 'Sell your products online with full functionality, secure payments, and easy management.',
    iconName: 'ShoppingCart',
    features: ['Product listing', 'Shopping cart', 'Secure payment gateway', 'Order management dashboard']
  },
  {
    id: 's5',
    title: 'Website Redesign',
    description: 'Upgrade your outdated website into a modern brand asset that converts visitors into customers.',
    iconName: 'RefreshCw',
    features: ['Modern UI/UX', 'Mobile optimization', 'Speed improvement', 'Content refresh']
  },
  {
    id: 's6',
    title: 'Website Maintenance',
    description: 'Keep your website secure, updated, and running smoothly so you can focus on your business.',
    iconName: 'Settings',
    features: ['Regular updates', 'Security checks', 'Daily Backups', 'Technical support']
  }
];

export const PRICING_PLANS = [
  {
    id: 'basic',
    name: 'Basic Plan',
    price: '₹9,999',
    features: [
      '5 Pages Website',
      'Mobile Responsive',
      'Contact Form',
      'Basic SEO',
      '1 Month Support'
    ],
    highlight: false
  },
  {
    id: 'professional',
    name: 'Professional Plan',
    price: '₹14,999',
    features: [
      '10 Pages Website',
      'Premium Design',
      'Speed Optimization',
      'Basic On-Page SEO',
      '3 Months Support'
    ],
    highlight: true
  },
  {
    id: 'premium',
    name: 'Premium Plan',
    price: '₹29,999',
    features: [
      'Custom Website',
      'E-Commerce or Advanced Features',
      'Full SEO Setup',
      'Payment Integration',
      '6 Months Support'
    ],
    highlight: false
  }
];

export const FAQS = [
  {
    question: "How long does it take to build a website?",
    answer: "Usually 7–21 days depending on project size and complexity."
  },
  {
    question: "Is the website mobile-friendly?",
    answer: "Yes, all our websites are fully responsive and look great on all devices."
  },
  {
    question: "Do you provide domain and hosting?",
    answer: "Yes, we guide and assist you with domain registration and hosting setup."
  },
  {
    question: "Do you offer SEO services?",
    answer: "Basic SEO structure is included in all plans. Advanced SEO services are available separately."
  },
  {
    question: "Can I update the website myself?",
    answer: "Yes, we provide admin access and guidance so you can make basic updates."
  },
  {
    question: "Do you work outside Odisha?",
    answer: "Yes, we work with clients across India remotely."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept Bank transfer, UPI, and online payments."
  },
  {
    question: "Do you provide support after launch?",
    answer: "Yes, support is included based on the package you choose."
  },
  {
    question: "Can you redesign my old website?",
    answer: "Yes, we specialize in redesign projects to modernize your online presence."
  },
  {
    question: "Do you build e-commerce websites?",
    answer: "Yes, we build full-featured e-commerce sites with secure payment gateway integration."
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    text: "Growmarq built my business website professionally. I started getting inquiries within weeks.",
    author: "Local Business Owner",
    rating: 5
  },
  {
    id: 2,
    text: "My portfolio website looks premium and helped me get more clients.",
    author: "Freelancer",
    rating: 5
  },
  {
    id: 3,
    text: "Fast delivery and great communication. Highly recommended.",
    author: "Startup Founder",
    rating: 5
  }
];

// Keeping generic portfolio items as placeholders, but updated contextually where possible
export const PORTFOLIO_ITEMS: CaseStudy[] = [
  {
    id: 'p1',
    client: 'Local Retail Store',
    title: 'E-Commerce Transformation',
    category: 'E-Commerce',
    description: 'We took a local brick-and-mortar shop online with a full e-commerce solution, integrating UPI payments.',
    results: [
      { label: 'Online Sales', value: '₹5L+' },
      { label: 'New Customers', value: '500+' },
      { label: 'Reach', value: 'Pan-India' }
    ],
    imageUrl: 'https://picsum.photos/600/400?random=10'
  },
  {
    id: 'p2',
    client: 'Creative Studio',
    title: 'Portfolio Website',
    category: 'Portfolio',
    description: 'A stunning portfolio website for a freelance photographer to showcase their gallery.',
    results: [
      { label: 'Inquiries', value: '3x' },
      { label: 'Page Load', value: '0.8s' },
      { label: 'Design', value: 'Awarded' }
    ],
    imageUrl: 'https://picsum.photos/600/400?random=11'
  },
  {
    id: 'p3',
    client: 'Coaching Institute',
    title: 'Business Website & SEO',
    category: 'Business',
    description: 'A professional website for a coaching center with student enrollment forms and course details.',
    results: [
      { label: 'Admissions', value: '+40%' },
      { label: 'Local Rank', value: '#1' },
      { label: 'Visits', value: '2k/mo' }
    ],
    imageUrl: 'https://picsum.photos/600/400?random=12'
  }
];
