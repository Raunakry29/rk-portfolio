
export type Project = {
    id: number;
    title: string;
    description: string;
    tags: string[];
    imageUrl: string;
    LiveUrl: string;
    githubUrl?: string;
  };
  
 export type Projects = {
    id: number;
    title: string;
    description: string;
    tags: string[];
    imageUrl: string;
    LiveUrl: string;
    githubUrl?: string;
  };
  
 export type Experience = {
    id: number;
    company: string;
    role: string;
    period: string;
    description: string;
    techStack?: string[];
    image: string;
  };
  
 export type Skill = {
    category: string;
    items: string[];
  };

  export type Certificates = {
    heading:string,
    image:string,
    url?:string
  }