import React from 'react';

const BottomWave: React.FC<{ className?: string }> = ({ className }) => (
  <div className={className}>
    <svg
      preserveAspectRatio={'none'}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fillOpacity="1"
        d="M0,288L48,277.3C96,267,192,245,288,202.7C384,160,480,96,576,96C672,96,768,160,864,192C960,224,1056,224,1152,208C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  </div>
);

const TopWave: React.FC<{ id?: string }> = ({ id }) => (
  <div id={id}>
    <svg
      preserveAspectRatio={'none'}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fillOpacity="1"
        d="M0,288L48,277.3C96,267,192,245,288,202.7C384,160,480,96,576,96C672,96,768,160,864,192C960,224,1056,224,1152,208C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      />
    </svg>
  </div>
);

export { BottomWave, TopWave };
