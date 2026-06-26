import { ukDestination } from "./countries/uk";
import { australiaDestination } from "./countries/australia";
import { usaDestination } from "./countries/usa";
import { canadaDestination } from "./countries/canada";
import { destinationsData } from "./legacy";

export const destinationData = [
  ukDestination,
  australiaDestination,
  usaDestination,
  canadaDestination,
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
