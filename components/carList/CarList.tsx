import { useEffect } from 'react';
import useCarList from '../../hooks/useCarList';
import CarItem from '../carItem/CarItem';
import Categories from './Categories';

const CarList = () => {
  const { carList, isLoading } = useCarList();

  if (carList?.length === 0) {
    <h1>차량이 없습니다.</h1>;
  }

  return (
    <section>
      <Categories />
      <ul className='py-6'>
        {carList?.map((car) => (
          <CarItem key={car.id} car={car} />
        ))}
      </ul>
    </section>
  );
};
export default CarList;
