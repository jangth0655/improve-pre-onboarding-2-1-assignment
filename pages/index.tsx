import { useRouter } from 'next/router';
import CarList from '../components/carList/CarList';
import Layout from '../components/Layout';

export default function Home() {
  const router = useRouter();

  return (
    <Layout title='전체차량'>
      <CarList />
    </Layout>
  );
}
