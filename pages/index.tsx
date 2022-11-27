import Head from 'next/head';
import CarList from '../components/carList/CarList';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout title='전체차량'>
      <Head>
        <title>B2C 차량서비스</title>
      </Head>
      <CarList />
    </Layout>
  );
}
