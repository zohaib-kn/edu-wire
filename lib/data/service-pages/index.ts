import { ServicePage } from "./types";
import { ieltsService } from "./pages/ielts";
import { imatPreparationService } from "./pages/imat-preparation";
import { scholarshipGuidanceService } from "./pages/scholarship-guidance";
import { admissionGuidanceService } from "./pages/admission-guidance";
import { financialAssistanceService } from "./pages/financial-assistance";

// List of all premium service pages
export const servicePages: ServicePage[] = [
  ieltsService,
  imatPreparationService,
  scholarshipGuidanceService,
  admissionGuidanceService,
  financialAssistanceService,
];

// Helper to get a service page by its slug
export function getServicePageBySlug(slug: string): ServicePage | undefined {
  return servicePages.find((page) => page.slug === slug);
}

export * from "./types";
export {
  ieltsService,
  imatPreparationService,
  scholarshipGuidanceService,
  admissionGuidanceService,
  financialAssistanceService,
};

