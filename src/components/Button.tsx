type ButtonProps = {
  title: string;
  addClasses?: string[];
};

const Button = ({ title, addClasses }: ButtonProps) => {
  return (
    <button
      className={`main__nav-btn register-btn btn ${addClasses?.join(" ")}`}
    >
      {title}
    </button>
  );
};

export default Button;
