type ButtonProps = {
  title: string | React.ReactNode;
  addClasses?: string[];
  clickFunc?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const Button = ({ title, addClasses, clickFunc, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      onClick={() => clickFunc && clickFunc()}
      className={`btn ${addClasses?.join(" ")}`}
    >
      {title}
    </button>
  );
};

export default Button;
