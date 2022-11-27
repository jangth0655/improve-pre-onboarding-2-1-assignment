import Image from 'next/image';
import { useCarItem } from '../../hooks/useCarList';

import Layout from '../Layout';
import InfoTitle from './infoLayout/InfoTitle';
import CarAdditional from './CarAdditional';
import CarBrandWithName from './CarBrandWithName';
import CarInfo from './CarInfo';
import CarInsurance from './CarInsurance';
import ExistenceTitle from '../carList/ExistenceTitle';

const CarDetail = () => {
  const { car, isLoading } = useCarItem();

  return (
    <Layout title='차량상세' back>
      {isLoading ? (
        <ExistenceTitle title='불러오는 중입니다.' />
      ) : (
        <>
          <div className='h-[205px] relative'>
            <Image
              src={car ? car?.attribute.imageUrl : ''}
              fill
              priority
              alt=''
            />
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
        </>
      )}
    </Layout>
  );
};

export default CarDetail;
