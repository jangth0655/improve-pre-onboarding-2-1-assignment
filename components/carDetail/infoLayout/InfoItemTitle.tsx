interface Props {
  title: string;
}

const InfoItemTitle = ({ title }: Props) => {
  return <span className='font-bold'>{title}</span>;
};
export default InfoItemTitle;
