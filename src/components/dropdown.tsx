import { slugify } from "~/lib/utils";

interface props {
  mainItem: string;
  items: string[];
}

export function Dropdown({ mainItem, items }: props) {
  return (
    <>
      <div className="group relative inline-block">
        <a
          className="cursor-pointer rounded-xl px-5 py-2 hover:bg-accent-900 hover:text-black"
          href={`/${slugify(mainItem)}`}
        >
          {mainItem}
        </a>
        <div className="hidden absolute z-10 group-hover:block pt-2">
          <div className="z-2 top-9 mt-2 rounded-xl backdrop-blur-sm bg-primary-900/60 p-2">
            {items.map((item, i) => (
              <a
                key={i}
                className="block w-max cursor-pointer rounded-xl px-5 py-2 hover:bg-accent-900 hover:text-black"
                href={`/${slugify(mainItem)}/${slugify(item)}`}
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
