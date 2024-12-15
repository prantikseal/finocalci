export const UNSPLASH_BASE = "https://images.unsplash.com/";

export const images = {
  hero: `${UNSPLASH_BASE}photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80`,
  calculators: `${UNSPLASH_BASE}photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80`,
  planning: `${UNSPLASH_BASE}photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80`,
  investing: `${UNSPLASH_BASE}photo-1633158829875-e5316a358c6f?auto=format&fit=crop&q=80`,
  testimonials: [
    `${UNSPLASH_BASE}photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80`,
    `${UNSPLASH_BASE}photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80`,
    `${UNSPLASH_BASE}photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80`,
  ]
};

export const testimonials = [
  {
    name: "Priya Sharma",
    role: "Small Business Owner",
    image: images.testimonials[0],
    quote: "Finocalci helped me understand my business finances better. The loan calculator saved me lakhs in interest!"
  },
  {
    name: "Rahul Verma",
    role: "IT Professional",
    image: images.testimonials[1],
    quote: "The SIP calculator helped me plan my retirement. Now I know exactly how much to invest monthly."
  },
  {
    name: "Anita Desai",
    role: "Chartered Accountant",
    image: images.testimonials[2],
    quote: "I recommend Finocalci to all my clients. The tax planning tools are exceptional."
  }
];

export const calculators = [
  {
    title: "Investment Calculators",
    tools: [
      {
        name: "SIP Calculator",
        description: "Plan your systematic investments",
        popular: true,
      },
      {
        name: "Lumpsum Calculator",
        description: "Calculate returns on one-time investments",
      },
      {
        name: "Goal Planning",
        description: "Plan for your financial goals",
      },
    ]
  },
  {
    title: "Loan Calculators",
    tools: [
      {
        name: "Home Loan EMI",
        description: "Calculate your monthly EMI",
        popular: true,
      },
      {
        name: "Car Loan EMI",
        description: "Plan your vehicle purchase",
      },
      {
        name: "Personal Loan",
        description: "Understand total interest cost",
      },
    ]
  },
  {
    title: "Tax Planning",
    tools: [
      {
        name: "Income Tax Calculator",
        description: "Estimate your tax liability",
        popular: true,
      },
      {
        name: "HRA Calculator",
        description: "Calculate HRA exemptions",
      },
      {
        name: "Section 80C Planner",
        description: "Maximize tax savings",
      },
    ]
  }
];

export const faqs = [
  {
    question: "How accurate are the calculators?",
    answer: "Our calculators use industry-standard financial formulas and are regularly audited by financial experts for accuracy."
  },
  {
    question: "Is my data safe?",
    answer: "We don't store any of your financial data. All calculations are performed locally in your browser."
  },
  {
    question: "Are the calculators free to use?",
    answer: "Yes, all basic calculators are free. Premium features are available for registered users."
  },
  {
    question: "How often are the tax rates updated?",
    answer: "We update our tax calculators within 24 hours of any government announcement."
  },
];

export const companies = [
  "HDFC Bank",
  "ICICI Bank",
  "Axis Bank",
  "SBI",
  "Kotak Mahindra"
];

export const blogPosts = [
  {
    title: "Understanding SIP: A Beginner's Guide",
    excerpt: "Learn how Systematic Investment Plans can help build long-term wealth...",
    readTime: "5 min read",
    category: "Investing"
  },
  {
    title: "Home Loan vs Rent: The Complete Analysis",
    excerpt: "A detailed comparison to help you make the right housing decision...",
    readTime: "8 min read",
    category: "Loans"
  },
  {
    title: "Tax Saving Strategies for FY 2024-25",
    excerpt: "Expert tips to maximize your tax savings under the new regime...",
    readTime: "6 min read",
    category: "Tax Planning"
  }
]; 