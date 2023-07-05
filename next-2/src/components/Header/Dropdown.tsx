import { slugify } from "~/utils";

interface props {
  mainItem: string;
  items: string[];
}

export default function Dropdown({ mainItem, items }: props) {
  return (
    <>
      <div className="dropdown-container">
        <a
          className="cursor-pointer rounded-xl px-5 py-2 hover:bg-accent-900 hover:text-black"
          href={slugify(mainItem)}
        >
          {mainItem}
        </a>
        <div className="dropdown-content pt-2">
          <div className="z-2 top-9 mt-2 rounded-xl bg-primary-900/60 p-2">
            {items.map((item, i) => (
              <a
                key={i}
                className="menu-item w-max cursor-pointer rounded-xl px-5 py-2 hover:bg-accent-900 hover:text-black"
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
