import formatter from '../../utils/formatter';
import InfoContainer from './infoLayout/InfoContainer';

interface Props {
  name?: string;
  brand?: string;
  amount?: number;
}

const CarBrandWithName = ({ name, brand, amount }: Props) => {
  return (
    <InfoContainer>
      <div className='flex justify-between h-32'>
        <div className='flex flex-col font-bold'>
          <span>{brand}</span>
          <span className='text-xl'>{name}</span>
        </div>
        <div className='flex items-end'>
          <span>{formatter.convertCurrency(amount)}</span>
        </div>
      </div>
    </InfoContainer>
  );
};
export default CarBrandWithName;
