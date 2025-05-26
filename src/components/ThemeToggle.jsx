import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import styled from 'styled-components';
import { FaSun, FaMoon } from 'react-icons/fa';

const ToggleContainer = styled.button`
  background: ${({ isDarkMode }) => 
    isDarkMode ? 'linear-gradient(to right, #30cfd0, #330867)' : 'linear-gradient(to right, #f83600, #f9d423)'};
  border: none;
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 60px;
  height: 30px;
  outline: none;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Icons = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s linear;
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: white;
  z-index: 1;
`;

const Slider = styled.div`
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: ${({ isDarkMode }) => (isDarkMode ? '2px' : 'calc(100% - 28px)')};
  height: 26px;
  width: 26px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <ToggleContainer isDarkMode={isDarkMode} onClick={toggleTheme} aria-label="Toggle dark mode">
      <Icons>
        <IconWrapper>
          <FaSun size={16} />
        </IconWrapper>
        <IconWrapper>
          <FaMoon size={16} />
        </IconWrapper>
      </Icons>
      <Slider isDarkMode={isDarkMode} />
    </ToggleContainer>
  );
};

export default ThemeToggle;