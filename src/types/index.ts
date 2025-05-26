export interface ProjectType {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  detailImages: string[];
  videoUrl?: string;
}

export interface ServiceType {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface TeamMemberType {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface TestimonialType {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  imageUrl: string;
}