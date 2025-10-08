export interface Property {
  id: string;
  image: string;
  name: string;
  location: string;
  rating: number;
  reviewsCount: number;
  rooms: number;
  baths: number;
  guests: number;
  price: number;
  createdAt: string;
}

export interface PropertyListProps {
  label: string;
  properties: Property[];
}