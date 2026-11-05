export type OpportunityCategory =
  | 'Jobs'
  | 'Scholarships'
  | 'Internships'
  | 'Fellowships'
  | 'Grants';

export type EligibilityScope =
  | 'COUNTRY_SPECIFIC'
  | 'AFRICA_WIDE'
  | 'WORLDWIDE';

export interface Opportunity {
  id: number;
  title: string;
  organization: string;
  category: OpportunityCategory;
  location: string;
  eligibilityScope: EligibilityScope;
  description: string;
  deadline: string;
  applicationUrl: string;
  featured: boolean;
}