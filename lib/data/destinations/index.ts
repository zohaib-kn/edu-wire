import { ukDestination } from "./countries/uk";
import { australiaDestination } from "./countries/australia";
import { usaDestination } from "./countries/usa";
import { canadaDestination } from "./countries/canada";
import { germanyDestination } from "./countries/germany";
import { irelandDestination } from "./countries/ireland";
import { italyDestination } from "./countries/italy";
import { newZealandDestination } from "./countries/new-zealand";
import { franceDestination } from "./countries/france";
import { spainDestination } from "./countries/spain";
import { romaniaDestination } from "./countries/romania";
import { destinationsData } from "./legacy";

export const destinationData = [
  ukDestination,
  australiaDestination,
  usaDestination,
  canadaDestination,
  germanyDestination,
  irelandDestination,
  italyDestination,
  newZealandDestination,
  franceDestination,
  spainDestination,
  romaniaDestination,
];

export function getDestinationBySlug(slug: string) {
  return destinationData.find(
    (destination) => destination.slug === slug
  );
}

export { destinationsData };
export * from "./types";
export type { StudyDestination as LegacyStudyDestination } from "./legacy";
export type { StudyDestination } from "./types";
