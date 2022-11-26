import { useCarList } from '../../hooks/useCarList';
import CarItem from '../carItem/CarItem';
import Categories from './Categories';
import ExistenceTitle from './ExistenceTitle';

const CarList = () => {
  const { carList, isLoading } = useCarList();

  const emptyCarList = carList?.length === 0;

  return (
    <section>
      <Categories />
      {emptyCarList && <ExistenceTitle title='차량이 없습니다.' />}
      {isLoading && <ExistenceTitle title='불러오는 중입니다.' />}
      <ul className='py-6'>
        {carList?.map((car) => (
          <CarItem key={car.id} car={car} />
        ))}
      </ul>
    </section>
  );
};
export default CarList;
