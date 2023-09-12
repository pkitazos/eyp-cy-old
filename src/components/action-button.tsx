"use client";
import { cn } from "~/lib/utils";

type buttonOrLinkProps =
  | { variant: "button"; onClick: () => void }
  | { variant: "link"; href: string };

type actionButtonProps = buttonOrLinkProps & { text: string };

export function ActionButton(props: actionButtonProps) {
  if (props.variant === "link") {
    const { text, href } = props;
    return (
      <a
        href={href}
        className={cn(
          "w-max cursor-pointer rounded-full bg-accent-900 px-9 py-5 text-xl font-semibold text-black shadow-sm md:text-2xl lg:px-7 lg:py-5",
          "transition-all duration-300 hover:scale-110"
        )}
      >
        {text}
      </a>
    );
  } else if (props.variant === "button") {
    const { text, onClick } = props;
    return (
      <button
        role="button"
        onClick={onClick}
        className={cn(
          "w-max cursor-pointer rounded-full bg-accent-900 px-9 py-5 text-xl font-semibold text-black shadow-sm md:text-2xl lg:px-7 lg:py-5",
          "transition-all duration-300 hover:scale-110 "
        )}
      >
        {text}
      </button>
    );
  }
}
