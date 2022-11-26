import { useRouter } from 'next/router';
import { useEffect } from 'react';
import CarList from '../components/carList/CarList';
import Layout from '../components/Layout';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push({
      pathname: router.route,
      query: {
        segment: 'all',
      },
    });
  }, []);
  return (
    <Layout title='전체차량'>
      <CarList />
    </Layout>
  );
}
