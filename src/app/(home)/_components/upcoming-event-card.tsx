import { StaticImageData } from "next/image";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { UpcomingEvent } from "../content/upcoming-events";
import { toDateString } from "~/lib/utils/to-date-string";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { ReactNode } from "react";

export function UpcomingEventCard({
  event: { title, date, description, imageURL, actionText, actionURL },
}: {
  event: UpcomingEvent;
}) {
  return (
    <Wrapper hasAction={!!actionText} actionURL={actionURL}>
      <Card className="max-w-lg w-full sm:max-w-none shrink-0 border-none cursor-default group sm:w-60 flex flex-col overflow-hidden rounded-2xl bg-slate-100 shadow-lg transition-all duration-300 hover:scale-[1.02]">
        <Image
          width={200}
          height={150}
          src={imageURL}
          className="hidden sm:block h-2/5 w-full object-cover"
          alt=""
        />
        <div className="flex flex-col justify-start sm:h-3/5">
          <CardHeader>
            <CardTitle>
              <span className="bg-gradient-orange bg-[length:0%_105%] group-hover:bg-[length:100%_105%] bg-no-repeat transition-[background-size] duration-500">
                {title}
              </span>
            </CardTitle>
            <CardDescription className="text-lg">
              {toDateString(date)}
            </CardDescription>
          </CardHeader>
          <div className="ml-6 block sm:hidden mt-1 mb-2.5 h-1 w-8 bg-orange-500">
            &nbsp;
          </div>
          <CardContent className="flex flex-col justify-between">
            <p className="mt-2 sm:mt-3 pb-6 leading-normal text-justify tracking-tight">
              {description}
            </p>
            {actionText && (
              <Link
                className="w-full mt-3 flex justify-center"
                href={actionURL}
              >
                <Button
                  className="w-full bg-accent-900 rounded-md font-bold hover:bg-accent-800 text-white text-lg"
                  size="lg"
                  variant="destructive"
                >
                  {actionText}
                </Button>
              </Link>
            )}
          </CardContent>
        </div>
      </Card>
    </Wrapper>
  );
}

function Wrapper({
  hasAction,
  actionURL,
  children,
}: {
  hasAction: boolean;
  actionURL: string;
  children: ReactNode;
}) {
  if (hasAction) return children;

  return (
    <Link
      className="block sm:flex cursor-pointer shrink-0 group max-w-lg sm:w-60"
      href={actionURL}
    >
      {children}
    </Link>
  );
}
