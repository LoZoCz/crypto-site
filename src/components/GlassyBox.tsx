type GlassyBoxProps = {
  children: React.ReactNode;
  addClasses?: string[];
};

const GlassyBox = ({ children, addClasses = [], ...props }: GlassyBoxProps) => {
  return (
    <div {...props} className={`glassyBg ${addClasses.join(" ")}`}>
      {children}
    </div>
  );
};

export default GlassyBox;
