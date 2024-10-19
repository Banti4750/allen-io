import React from 'react';

const Error = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#0f1825',
      position: 'relative',
      overflow: 'hidden'
    },
    mainContent: {
      textAlign: 'center',
      padding: '2rem',
      animation: 'fadeIn 0.5s ease-in',
      zIndex: 1
    },
    title: {
      fontSize: '150px',
      fontWeight: 'bold',
      color: 'red',
      margin: '0',
      animation: 'bounce 2s infinite',
      fontFamily: 'Arial, sans-serif'
    },
    subtitle: {
      fontSize: '36px',
      color: 'red',
      marginBottom: '20px',
      fontFamily: 'Arial, sans-serif',
      animation: 'bounce 2s infinite',
    },
    description: {
      fontSize: '18px',
      color: 'red',
      marginBottom: '30px',
      fontFamily: 'Arial, sans-serif'
    },
    button: {
      backgroundColor: '#007bff',
      color: 'white',
      padding: '12px 24px',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      textDecoration: 'none',
      display: 'inline-block'
    },
    buttonHover: {
      backgroundColor: '#0056b3'
    },
    decorativeCircle1: {
      position: 'absolute',
      top: '-50px',
      left: '-50px',
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      backgroundColor: 'rgba(0, 123, 255, 0.1)',
      zIndex: 0
    },
    decorativeCircle2: {
      position: 'absolute',
      bottom: '-50px',
      right: '-50px',
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      backgroundColor: 'rgba(0, 123, 255, 0.1)',
      zIndex: 0
    },
    '@keyframes bounce': {
      '0%, 100%': {
        transform: 'translateY(0)'
      },
      '50%': {
        transform: 'translateY(-20px)'
      }
    },
    '@keyframes fadeIn': {
      from: {
        opacity: 0,
        transform: 'translateY(20px)'
      },
      to: {
        opacity: 1,
        transform: 'translateY(0)'
      }
    }
  };

  // Add keyframes to document
  React.useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div style={styles.container}>
      <div style={styles.mainContent}>
        <h1 style={styles.title}>404</h1>
        <h2 style={styles.subtitle}>Page Not Found</h2>
        <p style={styles.description}>
          Oops! The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          style={{
            ...styles.button,
            ...(isHovered ? styles.buttonHover : {})
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Go Home
        </a>
      </div>
      <div style={styles.decorativeCircle1}></div>
      <div style={styles.decorativeCircle2}></div>
    </div>
  );
};

export default Error;