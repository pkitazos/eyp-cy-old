import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(label: string): string {
  let route = label.replaceAll("&", "and").replaceAll(" ", "-").toLowerCase();
  return `/${route}`;
}

export function debounce<T extends Function>(cb: T, wait = 20) {
  let frame: number;
  let callable = (...args: any) => {
    // If the frame variable has been defined, clear it now, and queue for next frame
    if (frame) {
      cancelAnimationFrame(frame);
    }

    // Queue our function call for the next frame
    frame = requestAnimationFrame(() => {
      // Call our function and pass any params we received
      cb(...args);
    });
  };
  return <T>(<any>callable);
}
