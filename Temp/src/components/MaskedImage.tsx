import React, { FC } from "react";

interface props {
  color?: string;
}

const MaskedImage: FC<props> = ({ color = "#b20000" }) => {
  return (
    <div className='h-max'>
      <svg viewBox='0 0 850 850' fill='none'>
        <rect
          x='0.73584'
          y='425'
          width='600'
          height='600'
          rx='75'
          transform='rotate(-45 0.73584 425)'
          fill={color}
        />
      </svg>
    </div>
  );
};

export default MaskedImage;
