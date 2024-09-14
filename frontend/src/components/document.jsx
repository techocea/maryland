import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TitleUpdater = ({ titles }) => {
  const location = useLocation();

  useEffect(() => {
    
    const currentTitle = titles[location.pathname] || "Education with an Excellence";
    document.title = currentTitle;
  }, [location, titles]);

  return null; 
};

export default TitleUpdater;
