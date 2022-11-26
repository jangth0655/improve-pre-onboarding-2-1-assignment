import categoryItems from '../../utils/category';
import CategoryItem from './CategoryItem';

const Categories = () => {
  const categories = categoryItems.categories;

  return (
    <div className='px-4 py-2 space-x-3 flex border-b-2 border-black'>
      {categories.map((category) => (
        <CategoryItem key={category.segment} category={category} />
      ))}
    </div>
  );
};
export default Categories;
