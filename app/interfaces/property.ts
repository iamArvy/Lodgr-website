import type { Amenity } from "./amenities";

export interface PropertyDetails {
  label: string;
  value: string | number;
}

export interface PropertyAgent {
  phone: string;
  email: string;
  name: string;
}
export interface Property {
  id: string;
  image: string;
  gallery: string[];
  name: string;
  description?: string;
  location: string;
  rating: number;
  reviewsCount: number;
  price: number;
  frequency: "month" | "year";
  rooms: number;
  baths: number;
  amenities: Amenity[];
  details: PropertyDetails[];
  inFavourites: boolean;
  createdAt: string;
}

export interface PropertyCardProps {
  property: Property;
}

export interface PropertyListProps {
  label: string;
  properties: Property[];
}

export interface PropertySearchParams {
  location?: string;
  guests?: number;
  rooms?: number;
  baths?: number;
  minPrice?: number;
  maxPrice?: number;
}

export interface PropertyFilterOption {
  label: string;
  value: string | number;
}

export type PropertySidebarProps = {
  price: Property['price'];
  frequency: Property['frequency'];
  agent: PropertyAgent;
}

export type PropertyGalleryProps = {
  gallery: Property['gallery'];
}

export type PropertyInformationProps = {
  name: Property['name'];
  location: Property['location'];
  rating: Property['rating'];
  reviewsCount: Property['reviewsCount'];
  rooms: Property['rooms'];
  baths: Property['baths'];
  frequency: Property['frequency'];
  description: Property['description'];
  amenities: Property['amenities'];
  details: Property['details'];
}

export interface PropertyListProps {
  label: string;
  properties: Property[];
}