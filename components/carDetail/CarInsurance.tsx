import { Insurance } from '../../model/types';
import InfoContainer from './infoLayout/InfoContainer';
import InfoItemContainer from './infoLayout/InfoItemContainer';
import InfoItemTitle from './infoLayout/InfoItemTitle';

interface Props {
  insurance?: Insurance[];
}

const CarInsurance = ({ insurance }: Props) => {
  return (
    <InfoContainer>
      {insurance?.map((i) => (
        <InfoItemContainer key={i.name}>
          <InfoItemTitle title={i.name} />
          <span>{i.description}</span>
        </InfoItemContainer>
      ))}
    </InfoContainer>
  );
};
export default CarInsurance;
