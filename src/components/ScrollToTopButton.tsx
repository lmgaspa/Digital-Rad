import React, { useState, useEffect } from 'react';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button 
          onClick={scrollToTop} 
          style={styles.button}
        >
          <span style={styles.arrow}>↑</span>
        </button>
      )}
    </div>
  );
};

const styles = {
  button: {
    position: 'fixed' as const,
    bottom: '50px',
    right: '30px',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: 'red',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontSize: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
  },
  arrow: {
    fontSize: '28px',
    fontWeight: 'bold',
    lineHeight: '1',
  },
};

export default ScrollToTopButton;
