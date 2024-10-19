import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Accordion = ({title , desc}) => {
  const [isActive, setIsActive] = useState(false);

  const containerStyle = {
    maxWidth: '1070px',
   
    padding: '24px',
    // marginTop: '30px',
    
   
  };

  const buttonStyle = {
    width: '100%',
    padding: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#122034',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: isActive ? '16px 16px 0 0' : '16px',
    transition: 'background-color 0.2s ease',
    outline: 'none',
   
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: '#1a2c47'
  };

  const titleStyle = {
    fontSize: '20px',
    fontWeight: '500',
    margin: 0
  };

  const iconStyle = {
    width: '24px',
    height: '24px',
    transition: 'transform 0.2s ease',
    transform: isActive ? 'rotate(180deg)' : 'rotate(0)'
  };

  const contentContainerStyle = {
    backgroundColor: '#122034',
    overflow: 'hidden',
    maxHeight: isActive ? '400px' : '0',
    transition: 'all 0.2s ease-in-out',
    borderRadius: '0 0 16px 16px'
  };

  const contentStyle = {
    padding: isActive ? '24px' : '0 24px',
    color: 'white',
    opacity: isActive ? 1 : 0,
    transition: 'all 0.2s ease-in-out'
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={containerStyle}>
      <div>
        <button
          onClick={() => setIsActive(!isActive)}
          style={isHovered ? buttonHoverStyle : buttonStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h2 style={titleStyle}>
           {title}
          </h2>
          <ChevronDown style={iconStyle} />
        </button>
        
        <div style={contentContainerStyle}>
          <div style={contentStyle}>
            <p style={{ marginLeft:'50px' , fontSize:'18px' , lineHeight: '1.6' }}>
            {desc}
            </p>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Accordion;