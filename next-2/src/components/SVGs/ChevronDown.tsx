import type { FC } from "react";

interface props {
  className: string;
}

const ChevronDown: FC<props> = ({ className }) => {
  return (
    <div className={className}>
      <svg viewBox='0 0 448 512'>
        <path
          d='M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z'
          fill='currentColor'
        />
      </svg>
    </div>
  );
};

export default ChevronDown;
