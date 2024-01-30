import { slugify } from "@/lib/utils";

interface props {
  mainItem: string;
  items: string[];
}

export function Dropdown({ mainItem, items }: props) {
  return (
    <>
      <div className="group relative inline-block">
        <a
          className="cursor-pointer rounded-xl px-5 py-2 hover:bg-sun-900 hover:text-black"
          href={slugify(mainItem)}
        >
          {mainItem}
        </a>
        <div className="absolute z-10 hidden pt-2 group-hover:block">
          <div className="z-2 top-9 mt-2 rounded-xl bg-ocean-900/60 p-2 backdrop-blur-sm">
            {items.map((item, i) => (
              <a
                key={i}
                className="block w-max cursor-pointer rounded-xl px-5 py-2 hover:bg-sun-900 hover:text-black"
                href={`${slugify(mainItem)}${slugify(item)}`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
