
import React from 'react';

interface DiscordIconProps {
  className?: string;
  width?: number;
  height?: number;
  color?: string;
}

const DiscordIcon = ({
  className = "",
  width = 24,
  height = 24,
  color = "#FFFFFF"
}: DiscordIconProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={width} 
      height={height} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"></path>
      <path d="M15 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"></path>
      <path d="M8.5 16.5c1.5 1 3.5 1 5 0"></path>
      <path d="M18.5 4.5C15.5 2.5 12 2.5 8.5 4c-.7.3-1.5.8-1.5 1.5 0 .3.3.6.5 1 .3.5.5 1.1.5 2v4c0 3 1 4 3 6 1.5 1 3.5 1 5 0 2-2 3-3 3-6v-4c0-.9.2-1.5.5-2 .2-.4.5-.7.5-1 0-.7-.8-1.2-1.5-1.5Z"></path>
    </svg>
  );
};

export default DiscordIcon;
