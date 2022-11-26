import CarList from '../components/carList/CarList';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout title='전체차량'>
      <CarList />
    </Layout>
  );
}
