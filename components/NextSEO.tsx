//import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useCarItem } from '../hooks/useCarList';

import formatter from '../utils/formatter';

const NextSEO = () => {
  const { car } = useCarItem();

  return (
    <Head>
      <title>{`${car?.attribute.brand} ${car?.attribute.name}`}</title>
      <meta name='description' content={`월 ${car?.amount}원`} />
      <meta property='og:type' content='website' />
      <link href={car?.attribute.imageUrl} />
      <meta
        property='og:url'
        content={`${process.env.PUBLIC_URL}/${car?.id}`}
      />
      <meta
        name='og:title'
        content={`${car?.attribute.brand} ${car?.attribute.name}`}
      />
      <meta
        name='og:description'
        content={formatter.convertCurrency(car?.amount)}
      />
      <meta property='og:image' content={car?.attribute.imageUrl} />
      <meta property='og:image:width' content={1200 + ''} />
      <meta property='og:image:height' content={600 + ''} />
    </Head>
  );
};

export default NextSEO;

/**
 <NextSeo
      title={title ? title : 'BC2 차량서비스'}
      description={formatter.convertCurrency(car?.amount)}
      openGraph={{
        type: 'website',
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/${car?.id}`,
        title: `${car?.attribute?.brand} ${car?.attribute?.name}`,
        description: formatter.convertCurrency(car?.amount),
        images: [
          {
            url: car?.attribute?.imageUrl
              ? car?.attribute?.imageUrl
              : '/public/favicon.ico',
            width: 1200,
            height: 600,
            type: 'image/*',
          },
        ],
      }}
    />
 */
