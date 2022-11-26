import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import CarAdditional from '../components/carDetail/CarAdditional';
import CarBrandWithName from '../components/carDetail/CarBrandWithName';
import CarInfo from '../components/carDetail/CarInfo';
import CarInsurance from '../components/carDetail/CarInsurance';
import InfoTitle from '../components/carDetail/infoLayout/InfoTitle';
import Layout from '../components/Layout';
import { useCarList } from '../hooks/useCarList';

const Detail: NextPage = () => {
  const { carList, isLoading } = useCarList();
  const {
    query: { id },
  } = useRouter();

  const car = carList?.find((car) => car.id === Number(id));

  return (
    <Layout title='차량상세' back>
      <div className='h-[205px] relative'>
        <Image src={car ? car?.attribute.imageUrl : ''} fill priority alt='' />
      </div>
      <CarBrandWithName
        amount={car?.amount}
        brand={car?.attribute.brand}
        name={car?.attribute.name}
      />
      <InfoTitle title='차량정보' />
      <CarInfo
        fuel={car?.attribute.fuelType}
        segment={car?.attribute.segment}
        startDate={car?.startDate}
      />
      <InfoTitle title='보험' />
      <CarInsurance insurance={car?.insurance} />
      <InfoTitle title='추가상품' />
      <CarAdditional additionalProducts={car?.additionalProducts} />
    </Layout>
  );
};

export default Detail;
