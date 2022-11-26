interface Props {
  title: string;
}

const InfoTitle = ({ title }: Props) => {
  return (
    <div className='py-4 pl-4 bg-blue'>
      <span className='text-white'>{title}</span>
    </div>
  );
};
export default InfoTitle;
