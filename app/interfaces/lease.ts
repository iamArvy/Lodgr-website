export interface Lease {
  id: string;
  dueDate: Date;
  status: "active" | "expired" | "ended";
  price: number;
  property: {
    id: string;
    name: string;
    location: string;
  },
  frequency: {
    id: string;
    name: string;
  },
  createdAt: string;
}

export interface LeaseFrequency {
  id: string;
  name: string;
  createdAt: string
}

export interface PropertyLeaseFrequency {
  id: string;
  frequency: {
    id: string;
    name: string;
  };
  discount: number;
  createdAt: string;
}