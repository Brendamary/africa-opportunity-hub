import type { Opportunity } from '../types/opportunity';

export const opportunities: Opportunity[] = [
  {
    id: 1,
    title: 'Software Engineering Internship',
    organization: 'Example Technology Company',
    category: 'Internships',
    location: 'Kenya',
    eligibilityScope: 'COUNTRY_SPECIFIC',
    description:
      'Gain practical experience building software products and collaborating with experienced engineers.',
    deadline: '2027-02-28',
    applicationUrl: 'https://example.com/internship',
    featured: true,
  },
  {
    id: 2,
    title: 'African Excellence Scholarship',
    organization: 'Example African University',
    category: 'Scholarships',
    location: 'Africa-wide',
    eligibilityScope: 'AFRICA_WIDE',
    description:
      'Financial support for eligible African students pursuing higher education.',
    deadline: '2027-04-30',
    applicationUrl: 'https://example.com/scholarship',
    featured: true,
  },
  {
    id: 3,
    title: 'Junior Backend Software Engineer',
    organization: 'Example Digital Solutions',
    category: 'Jobs',
    location: 'Remote',
    eligibilityScope: 'AFRICA_WIDE',
    description:
      'Join an engineering team building reliable backend services and APIs.',
    deadline: '2027-01-31',
    applicationUrl: 'https://example.com/backend-role',
    featured: true,
  },
  {
    id: 4,
    title: 'Young African Leaders Fellowship',
    organization: 'Example Leadership Foundation',
    category: 'Fellowships',
    location: 'Africa-wide',
    eligibilityScope: 'AFRICA_WIDE',
    description:
      'Develop leadership skills and connect with professionals working across Africa.',
    deadline: '2027-05-15',
    applicationUrl: 'https://example.com/fellowship',
    featured: true,
  },
  {
    id: 5,
    title: 'Youth Innovation Grant',
    organization: 'Example Innovation Fund',
    category: 'Grants',
    location: 'Africa-wide',
    eligibilityScope: 'AFRICA_WIDE',
    description:
      'Funding support for promising initiatives that address challenges in African communities.',
    deadline: '2027-03-20',
    applicationUrl: 'https://example.com/grant',
    featured: true,
  },
  {
    id: 6,
    title: 'Graduate Data Analyst',
    organization: 'Example Analytics Group',
    category: 'Jobs',
    location: 'Nigeria',
    eligibilityScope: 'COUNTRY_SPECIFIC',
    description:
      'Help transform data into useful insights while developing your analytical skills.',
    deadline: '2027-06-10',
    applicationUrl: 'https://example.com/data-analyst',
    featured: false,
  },
];