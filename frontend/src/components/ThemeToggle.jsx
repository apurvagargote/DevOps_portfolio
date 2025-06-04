import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaLightbulb } from 'react-icons/fa';
import styled from 'styled-components';

const ToggleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  position: relative;
  padding: 0;
  margin: 0;
  height: 100%;
`;

const String = styled.div`
  width: 2px;
  height: 15px;
  background-color: #888;
  
  @media (max-width: 992px) {
    height: 10px;
  }
`;

const BulbWrapper = styled.div`
  transform: rotate(180deg);
  color: ${props => props.isDarkMode ? '#555' : '#f8d568'};
  font-size: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  
  @media (max-width: 992px) {
    font-size: 1.2rem;
  }
`;

const Glow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25px;
  height: 25px;
  background: radial-gradient(circle, rgba(255,213,0,0.6) 0%, rgba(255,213,0,0) 70%);
  border-radius: 50%;
  opacity: ${props => props.isDarkMode ? 0 : 1};
  transition: opacity 0.3s ease;
  z-index: -1;
`;

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  
  return (
    <ToggleContainer onClick={toggleTheme}>
      <String />
      <BulbWrapper isDarkMode={isDarkMode}>
        <Glow isDarkMode={isDarkMode} />
        <FaLightbulb />
      </BulbWrapper>
    </ToggleContainer>
  );
};

export default ThemeToggle;