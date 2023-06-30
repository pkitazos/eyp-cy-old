import { generateKeyTimes, makePath } from "~/utils";

interface props {
  pathArr: string[];
  fill: string;
}

const Wave = ({ pathArr, fill }: props) => {
  let steps = pathArr.length * 2 - 1;
  let keyTimes = generateKeyTimes(steps);
  return (
    <path fill={fill}>
      <animate
        attributeName="d"
        values={makePath(pathArr).join("; ")}
        keyTimes={keyTimes}
        dur={`${steps}s`}
        repeatCount="indefinite"
      />
    </path>
  );
};

export default Wave;
