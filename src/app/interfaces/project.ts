import { Features } from './features';

export interface Project {
  id: string;
  title: string;
  mainImageUrl: string;
  overviewImageUrl: string;
  overviewDescription: string;
  features: Features[];
  technologies: string[];
  results: string;
}
