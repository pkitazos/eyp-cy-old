import { slugify } from "~/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

interface props {
  mainItem: string;
  items: string[];
}

export function Drawer({ mainItem, items }: props) {
  return (
    <Accordion type="single" collapsible className="w-full min-w-[16rem]">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <a className="text-white text-2xl" href={`/${slugify(mainItem)}`}>
            {mainItem}
          </a>
        </AccordionTrigger>
        <AccordionContent>
          <ul className="flex flex-col gap-2">
            {items.map((item) => (
              <li key={item}>
                <a
                  className="text-white text-xl"
                  href={`/${slugify(mainItem)}/${slugify(item)}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
