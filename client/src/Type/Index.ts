export interface ServiceProps {
  id: string;
  icon: string;
  title: string;
  description?: string;
}

export interface ServiceDetail {
  fullDescription: string;
  uses: string[];
  preparation: string;
  image: string;
}
