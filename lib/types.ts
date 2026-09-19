export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  requirements: string[];
  skills: string[];
  experienceMin: number;
  experienceMax: number;
  salaryMin: number | null;
  salaryMax: number | null;
  salaryCurrency: string;
  postedAt: string;
  source: string;
  sourceUrl: string;
  applicationUrl: string;
  employmentType: string;
  workArrangement: string;
  visaSponsorship: string;
  uaeExperience: string;
  certifications: string[];
  createdAt: string;
  updatedAt: string;
  matchPercentage: number;
};

export type JobSource = {
  id: string;
  name: string;
  type: "mock" | "api" | "feed";
  enabled: boolean;
  description: string;
};

export type UserProfile = {
  id: string;
  name: string;
  targetRole: string;
  experience: string;
  locationPreference: string;
  skills: string[];
  cloudTechnologies: string[];
  certifications: string[];
  noticePeriod: string;
  visaRequirement: string;
  expectedSalary: string;
  currentLocation: string;
  relocationPreference: string;
};
