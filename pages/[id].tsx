import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useCarList } from '../hooks/useCarList';

const Detail: NextPage = () => {
  const { carList, isLoading } = useCarList();
  const {
    query: { id },
  } = useRouter();

  const car = carList?.find((car) => car.id === Number(id));

  return <h1>Detail</h1>;
};

export default Detail;
