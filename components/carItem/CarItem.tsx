import Image from 'next/image';
import { CarListType } from '../../model/types';

interface Props {
  car: CarListType;
}

const CarItem = ({ car }: Props) => {
  return (
    <li key={car.id} className='flex border-b-2 border-black p-4'>
      <div className='w-[60%] space-y-2'>
        <div className='flex flex-col font-bold'>
          <span>{car.attribute.brand}</span>
          <span>{car.attribute.name}</span>
        </div>

        <div className='text-sm'>
          <div>
            <span>{car.attribute.segment}</span>
            <span>/</span>
            <span>{car.attribute.fuelType}</span>
          </div>
          <div>
            <span>월 {car.amount} 원 부터</span>
          </div>
        </div>
      </div>
      <div className='w-[40%] relative object-cover'>
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
