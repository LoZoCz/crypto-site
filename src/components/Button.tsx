type ButtonProps = {
  title: string;
  addClasses?: string[];
};

const Button = ({ title, addClasses }: ButtonProps) => {
  return <button className={`btn ${addClasses?.join(" ")}`}>{title}</button>;
};

export default Button;
