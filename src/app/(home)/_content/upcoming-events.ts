import { StaticImageData } from "next/image";
import { DateRange, SingleDate } from "~/lib/utils/to-date-string";
import { events3, events4 } from "../_assets";

export type UpcomingEvent = {
  title: string;
  description: string;
  date: SingleDate | DateRange;
  imageURL: StaticImageData;
  actionURL: string;
  actionText?: string;
};

export const upcomingEvents: UpcomingEvent[] = [
  /** 
  {
    title: "Annual General Meeting",
    description: "Where members meet for an overview of the organisation's past year and upcoming plans. A once-a-year opportunity: fun reunions, intense debates and exciting elections all in one event!",
    date: "28/12/2023",
    imageURL: events4,
  },
  {
    title: "Pre-Selection Days",
    description: "A small-scale annual event welcoming diverse school delegations to a day of vibrant debate!",
    date: "01-03/03/2024",
    imageURL: events1,
  },
  {
    title: "Discussion Forum",
    description: "Roundtables & Panel discussion on the upcoming EU elections!",
    date: [new Date(2024, 2, 30)],
    imageURL: events2,
    actionText: "Sign Up Now",
    actionURL:
      "https://docs.google.com/forms/d/1XzDQTFDot7hFkGjYk6wA9nc8W1WZCVw-AY5Vwokpgug/edit",
  },
  {
    title: "Days of EYP",
    description:
      "An outreach event for any individual aged 15-17, wishing to participate in an EYP Cyprus event. Join us for a day of Team-Building, Committee Work and General Assembly!",
    date: [new Date(2024, 3, 5), new Date(2024, 3, 7)],
    imageURL: events1,
    actionURL: "/events/days-of-eyp",
  },
  **/
  {
    title: "8th Youth Summit",
    description:
      "A 3-day conference inviting  individuals from 17-25 years old, to come together, discuss current affairs, exchange ideas and debate. No prior experience needed!",
    date: [new Date(2024, 6, 25), new Date(2024, 6, 28)],
    imageURL: events3,
    actionText: "Sign Up Now",
    actionURL:
      "https://docs.google.com/forms/d/e/1FAIpQLSciJ68CeXuVV2HpgK8zgCN8ju90Z-H9PXgMh2D5fmAl3X9d5Q/viewform",
  },
  {
    title: "18th National Session",
    description:
      "EYP Cyprus' annual flagship event, welcoming over 200 participants to an intercultural space of interactive activities, productive dialogue and community!",
    date: [new Date(2024, 7, 27), new Date(2024, 7, 31)],
    imageURL: events4,
    actionURL: "/events/national-session",
  },
];
