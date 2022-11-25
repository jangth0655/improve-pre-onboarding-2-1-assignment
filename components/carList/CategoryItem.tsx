interface Props {
  text: string;
}

const CategoryItem = ({ text }: Props) => {
  return (
    <div>
      <span className='inline-block px-2 rounded-full bg-gray'>{text}</span>
    </div>
  );
};
export default CategoryItem;
