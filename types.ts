export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  imageUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface CaseStudy {
  id: string;
  client: string;
  title: string;
  category: string;
  description: string;
  results: { label: string; value: string }[];
  imageUrl: string;
}

export interface AdminUser {
  isAuthenticated: boolean;
}
