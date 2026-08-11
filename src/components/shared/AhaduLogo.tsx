import React from 'react';

interface AhaduLogoProps {
  className?: string;
  variant?: 'full' | 'icon-only' | 'white' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const AhaduLogo: React.FC<AhaduLogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
  showSubtitle = true,
}) => {
  // Dimensions scaling
  const sizeMap = {
    sm: { iconWidth: 28, iconHeight: 28, titleSize: 'text-lg', subtitleSize: 'text-[9px]' },
    md: { iconWidth: 36, iconHeight: 36, titleSize: 'text-xl', subtitleSize: 'text-[10px]' },
    lg: { iconWidth: 48, iconHeight: 48, titleSize: 'text-3xl', subtitleSize: 'text-xs' },
  };

  const currentSize = sizeMap[size];

  // Color mappings
  const isWhite = variant === 'white';
  const navyColor = isWhite ? '#FFFFFF' : '#0B1B3A';
  const greenColor = isWhite ? '#34D399' : '#1FA971';
  const goldColor = '#F2B84B';
  const textColor = isWhite ? 'text-white' : 'text-[#0B1B3A]';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official Ahadu Geometric Chevron Mark */}
      <svg
        width={currentSize.iconWidth}
        height={currentSize.iconHeight}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
      >
        {/* Left Navy Chevron Arm */}
        <path
          d="M 50 15 L 12 75 L 26 75 L 50 35 Z"
          fill={navyColor}
        />
        {/* Right Green Chevron Arm */}
        <path
          d="M 50 15 L 50 35 L 74 75 L 88 75 Z"
          fill={greenColor}
        />
        {/* Center Warm Gold Diamond Base */}
        <path
          d="M 50 54 L 59 67 L 50 80 L 41 67 Z"
          fill={goldColor}
        />
      </svg>

      {variant !== 'icon-only' && (
        <div className="flex flex-col justify-center">
          <div className={`font-bold tracking-[0.18em] leading-none ${textColor} ${currentSize.titleSize}`}>
            AHADU
          </div>
          {showSubtitle && (
            <div className={`font-medium tracking-[0.25em] text-[#1FA971] uppercase mt-1 ${currentSize.subtitleSize}`}>
              FINANCIAL SOLUTIONS
            </div>
          )}
        </div>
      )}
    </div>
  );
};
