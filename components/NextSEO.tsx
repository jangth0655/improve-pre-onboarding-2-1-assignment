import { NextSeo } from 'next-seo';
import { useCarItem } from '../hooks/useCarList';
import formatter from '../utils/formatter';

const NextSEO = () => {
  const { car } = useCarItem();

  return (
    <NextSeo
      title={`${car?.attribute?.brand} ${car?.attribute?.name}`}
      description={formatter.convertCurrency(car?.amount)}
      openGraph={{
        type: 'website',
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/${car?.id}`,
        title: `${car?.attribute?.brand} ${car?.attribute?.name}`,
        description: formatter.convertCurrency(car?.amount),
        images: [
          {
            url: car?.attribute?.imageUrl ? car?.attribute?.imageUrl : '',
            width: 1200,
            height: 600,
            type: 'image/*',
          },
        ],
      }}
    />
  );
};
export default NextSEO;
