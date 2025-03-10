import React from 'react';

export const CasualSalaryman: React.FC = () => (
    <svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
    {/* Legs */}
    <rect x="70" y="90" width="5" height="30" fill="#1f3d7a" />
    <rect x="75" y="90" width="5" height="30" fill="#1f3d7a" />
    {/* Shoes*/}
    <rect x="70" y="120" width="5" height="5" fill="#333" />
    <rect x="75" y="120" width="5" height="5" fill="#333" />
  
    {/* Upper body group */}
    <g transform="rotate(0, 75, 90)">
      {/* Body */}
      <rect x="65" y="50" width="20" height="40" fill="#1f3d7a" />
      {/* Head */}
      <circle cx="75" cy="35" r="10" fill="#f1c27d" />
      {/* Necktie */}
      <path d="M75 25 Q65 25 70 30 Q75 20 85 25 Z" fill="#5d4037" />
    </g>
  </svg>
  
);

export const FormalSalaryman: React.FC = () => (
  <svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
    {/* Legs */}
    <rect x="70" y="90" width="5" height="30" fill="#1f3d7a" />
    <rect x="75" y="90" width="5" height="30" fill="#1f3d7a" />
    {/* Shoes */}
    <rect x="70" y="120" width="5" height="5" fill="#333" />
    <rect x="75" y="120" width="5" height="5" fill="#333" />
    {/* Upper body group */}
    <g transform="rotate(40, 75, 100)">
      <rect x="65" y="50" width="20" height="40" fill="#1f3d7a" />
      <circle cx="75" cy="35" r="10" fill="#f1c27d" />
      <path d="M75 25 Q65 25 70 30 Q75 20 85 25 Z" fill="#5d4037" />
    </g>
  </svg>
);

export const KeigoSalaryman: React.FC = () => (
  <svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
    {/* Legs */}
    <rect x="70" y="90" width="5" height="30" fill="#1f3d7a" />
    <rect x="75" y="90" width="5" height="30" fill="#1f3d7a" />
    {/* Shoes */}
    <rect x="70" y="120" width="5" height="5" fill="#333" />
    <rect x="75" y="120" width="5" height="5" fill="#333" />
    {/* Upper body group */}
    <g transform="rotate(90, 75, 100)">
      <rect x="65" y="52" width="20" height="40" fill="#1f3d7a" />
      <circle cx="75" cy="35" r="10" fill="#f1c27d" />
      <path d="M75 25 Q65 25 70 30 Q75 20 85 25 Z" fill="#5d4037" />
    </g>
  </svg>
);
