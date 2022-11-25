export type Segment = 'C' | 'D' | 'E' | 'SUV' | 'all';

export type CategoryType = {
  text: string;
  segment: Segment | 'all';
};

export interface CarList {
  payload: CarListType[];
}

export type CarListType = {
  id: number;
  amount: number;
  attribute: Attribute;
  startDate: Date;
  createdAt: Date;
  insurance: Insurance[];
  additionalProducts: AdditionalProducts[];
};

export type FuelType = 'gasoline' | 'hybrid' | 'ev';

export type Attribute = {
  brand: string;
  name: string;
  segment: Segment;
  fuelType: FuelType;
  imageUrl: string;
};

export type Insurance = {
  name: string;
  description: string;
};

export type AdditionalProducts = {
  name: string;
  amount: number;
};
