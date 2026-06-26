import { MBBSCountry } from "./types";
import { italyData } from "./countries/italy";
import { romaniaData } from "./countries/romania";
import { bulgariaData } from "./countries/bulgaria";
import { russiaData } from "./countries/russia";
import { georgiaData } from "./countries/georgia";
import { kazakhstanData } from "./countries/kazakhstan";
import { kyrgyzstanData } from "./countries/kyrgyzstan";
import { polandData } from "./countries/poland";
import { hungaryData } from "./countries/hungary";
import { serbiaData } from "./countries/serbia";

export type { MBBSCountry };

export const mbbsData: MBBSCountry[] = [
  italyData,
  romaniaData,
  bulgariaData,
  russiaData,
  georgiaData,
  kazakhstanData,
  kyrgyzstanData,
  polandData,
  hungaryData,
  serbiaData,
];
