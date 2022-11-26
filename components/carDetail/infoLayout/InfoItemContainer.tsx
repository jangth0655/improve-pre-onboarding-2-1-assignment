interface Props {
  children: React.ReactNode;
}

const InfoItemContainer = ({ children }: Props) => {
  return <div className='w-ful flex justify-between p-2'>{children}</div>;
};
export default InfoItemContainer;
