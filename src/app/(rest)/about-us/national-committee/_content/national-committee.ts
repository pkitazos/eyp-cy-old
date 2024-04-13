import { StaticImageData } from "next/image";
import {
  ncNatco1,
  ncNatco2,
  ncOutreach,
  ncPr,
  ncPresi,
  ncSecretary,
  ncTreasurer,
  ncVp,
} from "../_assets";

export type CommitteeMember = {
  name: string;
  position: string;
  imageURL?: StaticImageData;
};

export const nationalCommittee: CommitteeMember[] = [
  {
    name: "Athina Stavrou",
    position: "President",
    imageURL: ncPresi,
  },
  {
    name: "Antreas Xydas",
    position: "Vice-President",
    imageURL: ncVp,
  },
  {
    name: "Christia Spyrou",
    position: "Secretary & Members Officer",
    imageURL: ncSecretary,
  },
  {
    name: "Georgios Papaconstantinou",
    position: "Treasurer",
    imageURL: ncTreasurer,
  },
  {
    name: "Andreas Psaltis",
    position: "Head of Public Relations",
    imageURL: ncPr,
  },
  {
    name: "Stella Piperidou",
    position: "Outreach & Communications Officer",
    imageURL: ncOutreach,
  },
  {
    name: "Kornelia Kitazou",
    position: "National Coordinator",
    imageURL: ncNatco1,
  },
  {
    name: "Stefan Stankovic",
    position: "National Coordinator",
    imageURL: ncNatco2,
  },
];
