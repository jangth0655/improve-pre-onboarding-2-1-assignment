import { AdditionalProducts } from '../../model/types';
import formatter from '../../utils/formatter';
import InfoContainer from './infoLayout/InfoContainer';
import InfoItemContainer from './infoLayout/InfoItemContainer';
import InfoItemTitle from './infoLayout/InfoItemTitle';

interface Props {
  additionalProducts?: AdditionalProducts[];
}

const CarAdditional = ({ additionalProducts }: Props) => {
  return (
    <InfoContainer>
      {additionalProducts?.map((a) => (
        <InfoItemContainer key={a.name}>
          <InfoItemTitle title={a.name} />
          <span>{formatter.convertCurrency(a.amount)}</span>
        </InfoItemContainer>
      ))}
    </InfoContainer>
  );
};
export default CarAdditional;
