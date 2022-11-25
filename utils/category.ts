import { CategoryType } from '../model/types';

const categories: CategoryType[] = [
  { text: '전체', segment: 'all' },
  { text: '대형', segment: 'E' },
  { text: '중형', segment: 'D' },
  { text: '소형', segment: 'C' },
  { text: 'SUV', segment: 'SUV' },
];

class Category {
  constructor(private categoryData: CategoryType[]) {}

  get categories() {
    return this.categoryData;
  }
}

const categoryItems = new Category(categories);
export default categoryItems;
