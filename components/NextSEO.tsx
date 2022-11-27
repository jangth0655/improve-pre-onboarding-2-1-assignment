import { NextSeo } from 'next-seo';
import { useCarItem } from '../hooks/useCarList';
import { Attribute } from '../model/types';

import formatter from '../utils/formatter';

interface Props {
  attribute: Attribute;
  amount: number;
  id: string;
}

const NextSEO = ({ amount, attribute, id }: Props) => {
  return (
    <NextSeo
      title={`${attribute.name} ${attribute.brand}`}
      description={formatter.convertCurrency(amount)}
      openGraph={{
        type: 'website',
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/${id}`,
        title: `${attribute?.brand} ${attribute?.name}`,
        description: formatter.convertCurrency(amount),
        images: [
          {
            url: attribute?.imageUrl
              ? attribute?.imageUrl
              : '/public/favicon.ico',
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
