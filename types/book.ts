export interface Book {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  extendedDescription?: string;
  isNew?: boolean;
  hasActivityPDF?: boolean;
  image?: string;
  link?: string;
}
