import { NextPage } from 'next';
import CarDetail from '../components/carDetail/CarDetail';
import NextSEO from '../components/NextSEO';

const Detail: NextPage = () => {
  return (
    <>
      <NextSEO />
      <CarDetail />
    </>
  );
};

export default Detail;
