import { NextPage, NextPageContext } from 'next';
import CarDetail from '../components/carDetail/CarDetail';
import NextSEO from '../components/NextSEO';
import { CarList, CarListType } from '../model/types';

const Detail: NextPage<{ carItem: CarListType; id: any }> = ({
  carItem,
  id,
}) => {
  return (
    <>
      <NextSEO
        amount={carItem?.amount}
        attribute={carItem?.attribute}
        id={id}
      />
      <CarDetail />
    </>
  );
};

export const getServerSideProps = async (context: NextPageContext) => {
  const id = context.query.id;
  const res: CarList = await (
    await fetch('https://preonboarding.platdev.net/api/cars')
  ).json();
  const car = res?.payload.find((car) => car.id === Number(id));

  return {
    props: {
      carItem: car,
      id,
    },
  };
};

export default Detail;
