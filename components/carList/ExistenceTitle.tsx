interface Props {
  title: string;
}

const ExistenceTitle = ({ title }: Props) => {
  return (
    <div className='w-full h-[800px] flex justify-center items-center'>
      <h1 className='text-xl font-bold'>{title}</h1>
    </div>
  );
};

export default ExistenceTitle;
