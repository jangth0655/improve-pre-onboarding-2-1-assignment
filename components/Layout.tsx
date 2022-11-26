import { useRouter } from 'next/router';
import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';

interface Props {
  children: React.ReactNode;
  title: string;
  back?: boolean;
}

const Layout = ({ children, title, back }: Props) => {
  const router = useRouter();
  return (
    <section className='max-w-[390px] h-[800px] m-auto'>
      <div className='w-full py-4 flex justify-center items-center border-y-2 relative'>
        {back && (
          <div
            onClick={() => router.back()}
            className='cursor-pointer absolute left-10 m-auto flex justify-center items-center p-1 '
          >
            <span>
              <AiOutlineArrowLeft size={20} />
            </span>
          </div>
        )}
        <span className='text-xl font-bold'>{title}</span>
      </div>
      <main className='w-full h-full'>{children}</main>
    </section>
  );
};
export default Layout;
