import CategoryItem from './CategoryItem';

const Categories = () => {
  return (
    <div className='px-4 py-2 border-y-2 border-y-black space-x-3 flex'>
      <CategoryItem text='전체' />
      <CategoryItem text='대형' />
      <CategoryItem text='중형' />
      <CategoryItem text='소형' />
      <CategoryItem text='SUV' />
    </div>
  );
};
export default Categories;
