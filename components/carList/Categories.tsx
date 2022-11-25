import categoryItems from '../../utils/category';
import CategoryItem from './CategoryItem';

const Categories = () => {
  const categories = categoryItems.categories;

  return (
    <div className='px-4 py-2 border-y-2 border-y-black space-x-3 flex'>
      {categories.map((category) => (
        <CategoryItem key={category.segment} category={category} />
      ))}
    </div>
  );
};
export default Categories;
