"use client";
interface props {
  text: string;
  onClick: () => void;
}

export function ActionButton({ text, onClick }: props) {
  return (
    <button
      onClick={onClick}
      className={`w-max cursor-pointer rounded-full bg-accent-900 
        px-9 py-5 text-xl font-semibold text-black shadow-sm
        transition-all duration-300 hover:scale-110 
        md:text-2xl lg:px-7 lg:py-5`}
    >
      {text}
    </button>
  );
}
