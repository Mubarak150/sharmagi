
// FOR FUTURE DEVELOPER: 
// my custom hook responsible for rendering the exact hash section... which is almost a common problem in SPAs  like react

// NOTE: 
// This is a common issue where the component hasn't fully mounted or the DOM hasn't finished rendering before the scroll action is attempted.
// so to avoid any unwanted behavior (like when you try to visit an id from other route, it would load the page but wont go for the specific id section) the delay of 0.1s is added

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrolltoHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Delay of 100ms
    }
  }, [location]);
};

export default useScrolltoHash;
