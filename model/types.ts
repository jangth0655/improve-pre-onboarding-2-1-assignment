export type Segment = 'C' | 'D' | 'E' | 'SUV';

export type CategoryType = {
  text: string;
  segment: Segment | 'all';
};
