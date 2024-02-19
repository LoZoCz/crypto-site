import Header from "../components/header/Header";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default MainLayout;
