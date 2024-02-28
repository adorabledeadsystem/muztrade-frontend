import  React  from 'react';

const useWindowSize = () => {

    const [width, setWidth] = React.useState(0)
    const [height, setHeight] = React.useState(0)
  
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
  
    React.useEffect(() => {
        
      handleWindowResize();
      window.addEventListener('resize', handleWindowResize);
      return () => window.removeEventListener('resize', handleWindowResize);
    }, []);
  
    return [width, height]
  
  }
  
  export default useWindowSize 