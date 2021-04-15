export interface ICar {
  id: string;
  brand: string;
  model: string;
  year?: number;
  color?: string;
  class?: string;
  category?: string;
  image?: string;
  liked: boolean;
  newItem: boolean;
  transmission?: string;
  description?: string;
  creationDate?: Date | string;
}
