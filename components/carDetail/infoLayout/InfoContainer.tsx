interface Props {
  children: React.ReactNode;
}

const InfoContainer = ({ children }: Props) => {
  return <div className='p-4'>{children}</div>;
};
export default InfoContainer;
