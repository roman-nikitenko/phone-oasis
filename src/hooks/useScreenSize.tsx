import { useEffect, useState } from 'react';

const useScreenSize = () => {
  const [windowScreen, setWindowScreen] = useState([window.innerWidth, innerHeight]);

  useEffect(() => {
    const windowWidthHandler = () => {
      setWindowScreen([innerWidth, innerHeight]);
    };

    window.addEventListener('resize', windowWidthHandler);

    return () => {
      window.removeEventListener('resize', windowWidthHandler);
    };
  }, []);

  return {
    widthScreen: windowScreen[0],
    heightScreen: windowScreen[1],
  };
};

export default useScreenSize;
