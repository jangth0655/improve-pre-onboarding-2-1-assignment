import React from 'react';

interface Props {
  children: React.ReactNode;
  title: string;
}

const Layout = ({ children, title }: Props) => {
  return (
    <section className='max-w-[360px] h-[800px] m-auto'>
      <div className='w-full py-4 flex justify-center items-center text-xl font-bold'>
        <span>{title}</span>
      </div>
      <main className='w-full h-full'>{children}</main>
    </section>
  );
};
export default Layout;
