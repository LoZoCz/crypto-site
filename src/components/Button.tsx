type ButtonProps = {
  title: string;
  addClasses?: string[];
  clickFunc?: () => void;
  type?: "button" | "submit" | "reset";
};

const Button = ({ title, addClasses, clickFunc }: ButtonProps) => {
  return (
    <button
      onClick={() => clickFunc && clickFunc()}
      className={`btn ${addClasses?.join(" ")}`}
    >
      {title}
    </button>
  );
};

export default Button;
