import { createContext, useEffect, useState } from "react";

type MediaContextProps = {
  windowWidth: number;
};

type MediaProviderProps = {
  children: React.ReactNode;
};

const MediaContext = createContext<MediaContextProps>({
  windowWidth: 0,
});
const MediaContextProvider = ({ children }: MediaProviderProps) => {
  const [windowWidth, setWindowWidth] = useState(() => {
    return window.innerWidth || 0;
  });

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <MediaContext.Provider value={{ windowWidth }}>
      {children}
    </MediaContext.Provider>
  );
};

export { MediaContext, MediaContextProvider };
