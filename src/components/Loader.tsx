type LoaderProps = {
  size?: string;
};

const Loader = ({ size }: LoaderProps) => {
  return <span className={`loader ${size}`}></span>;
};

export default Loader;
