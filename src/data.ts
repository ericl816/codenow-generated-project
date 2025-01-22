interface Company {
  id: string;
  name: string;
  description: string;
  location: string;
  industry: string;
  website: string;
  employees: string;
  jobsPosted: number;
}

interface Job {
  id: string;
  title: string;
  company: string;
  companyId: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

export const companies: Company[] = [
  {
    id: 'c-001',
    name: 'Tech Innovators Inc',
    description: 'Leading provider of enterprise SaaS solutions',
    location: 'San Francisco, CA',
    industry: 'Software Development',
    website: 'https://techinnovators.com',
    employees: '500+',
    jobsPosted: 2
  },
  {
    id: 'c-002',
    name: 'Digital Future Ltd',
    description: 'Cutting-edge web3 and blockchain solutions',
    location: 'Remote',
    industry: 'Blockchain Technology',
    website: 'https://digitalfuture.io',
    employees: '150',
    jobsPosted: 1
  }
];

export const jobs: Job[] = [
  {
    id: 'j-001',
    title: 'Senior Frontend Engineer',
    company: 'Tech Innovators Inc',
    companyId: 'c-001',
    location: 'Remote',
    type: 'Full-time',
    salary: '$140k - $180k',
    posted: '2d ago',
    description: 'Lead development of our core SaaS platform...',
    requirements: [
      '5+ years React experience',
      'TypeScript expertise',
      'Experience with micro-frontends'
    ],
    benefits: [
      'Full health coverage',
      'Unlimited PTO',
      'Stock options'
    ]
  },
  {
    id: 'j-002',
    title: 'Blockchain Developer',
    company: 'Digital Future Ltd',
    companyId: 'c-002',
    location: 'Remote',
    type: 'Contract',
    salary: '$120k - $150k',
    posted: '1d ago',
    description: 'Develop smart contracts and blockchain protocols...',
    requirements: [
      'Solidity expertise',
      'Web3.js/ethers.js experience',
      'Node.js proficiency'
    ],
    benefits: [
      'Flexible hours',
      'Crypto payments',
      'Conference budget'
    ]
  }
];