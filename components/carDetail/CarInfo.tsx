import { FuelType, Segment } from '../../model/types';
import formatter from '../../utils/formatter';
import InfoContainer from './infoLayout/InfoContainer';
import InfoItemContainer from './infoLayout/InfoItemContainer';
import InfoItemTitle from './infoLayout/InfoItemTitle';

interface Props {
  segment?: Segment;
  fuel?: FuelType;
  startDate?: Date;
}

const CarInfo = ({ segment, fuel, startDate }: Props) => {
  return (
    <InfoContainer>
      <InfoItemContainer>
        <InfoItemTitle title='차종' />
        <span>{formatter.convertSegment(segment)}</span>
      </InfoItemContainer>
      <InfoItemContainer>
        <InfoItemTitle title='연료' />
        <span>{formatter.convertFuel(fuel)}</span>
      </InfoItemContainer>
      <InfoItemContainer>
        <InfoItemTitle title='이용가능일' />
        <span>{`${formatter.convertDate(startDate)} 부터`}</span>
      </InfoItemContainer>
    </InfoContainer>
  );
};
export default CarInfo;
