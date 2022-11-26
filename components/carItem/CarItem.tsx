import Image from 'next/image';
import { useRouter } from 'next/router';
import { CarListType } from '../../model/types';
import checkNewCar from '../../utils/checkNewCar';
import formatter from '../../utils/formatter';

interface Props {
  car: CarListType;
}

const CarItem = ({ car }: Props) => {
  const router = useRouter();

  const onCarDetail = (id: number) => {
    router.push({
      pathname: id + '',
    });
  };

  return (
    <li
      onClick={() => onCarDetail(car.id)}
      key={car.id}
      className='flex border-b-2 border-black p-4'
    >
      <div className='w-[60%] space-y-2'>
        <div className='flex flex-col font-bold'>
          <span className='text-sm'>{car.attribute.brand}</span>
          <span>{car.attribute.name}</span>
        </div>

        <div className='text-sm'>
          <div className='space-x-1'>
            <span>{formatter.convertSegment(car.attribute.segment)}</span>
            <span>/</span>
            <span>{formatter.convertFuel(car.attribute.fuelType)}</span>
          </div>
          <div>
            <span>{formatter.convertCurrency(car.amount)} 부터</span>
          </div>
        </div>
      </div>
      <div className='w-[40%] relative object-cover'>
        {checkNewCar(car.startDate) ? (
          <div className='absolute px-3 py-1 rounded-xl bg-blue text-white text-xs right-0'>
            <span>신규</span>
          </div>
        ) : null}
        <Image
          src={car.attribute.imageUrl}
          fill
          alt=''
          sizes='100px'
          priority
        />
      </div>
    </li>
  );
};
export default CarItem;
