import { useRouter } from 'next/router';
import { CategoryType, Segment } from '../../model/types';
import cls from '../../utils/cls';

interface Props {
  category: CategoryType;
}

const CategoryItem = ({ category }: Props) => {
  const router = useRouter();
  const activeSegment = router.query.segment;

  const handleCategory = (segment: Segment | 'all') => {
    router.push({
      pathname: router.route,
      query: {
        segment,
      },
    });
  };
  return (
    <div>
      <span
        onClick={() => handleCategory(category.segment)}
        className={cls(
          activeSegment === category.segment
            ? 'bg-black text-white'
            : 'bg-gray',
          'inline-block px-2 rounded-full transition-all'
        )}
      >
        {category.text}
      </span>
    </div>
  );
};
export default CategoryItem;
