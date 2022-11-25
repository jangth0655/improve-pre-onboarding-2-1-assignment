import useCarList from '../../hooks/useCarList';
import Categories from './Categories';

const CarList = () => {
  const { carList, isLoading } = useCarList();
  console.log(carList);

  return (
    <section>
      <Categories />
      <div className='px-4 py-6'>CarList</div>
    </section>
  );
};
export default CarList;
