import type { FC } from "react";

interface props {
  className?: string;
  imageURL: string;
}

const MaskedImage: FC<props> = ({ className, imageURL }) => {
  return (
    <div className={className}>
      <img className='masked-image' src={imageURL} />
    </div>
  );
};

export default MaskedImage;
