"use client";

import React, { useState } from "react";
import DestinationJourney from "./DestinationJourney";
import DestinationApplicationProcess from "./DestinationApplicationProcess";
import { DestinationJourneyStep, DestinationProcessStep } from "@/lib/data/destinations/types";

interface DestinationProcessWrapperProps {
  journey: {
    title: string;
    disclaimer: string;
    steps: DestinationJourneyStep[];
  };
  applicationProcess: DestinationProcessStep[];
}

export default function DestinationProcessWrapper({
  journey,
  applicationProcess,
}: DestinationProcessWrapperProps) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      <DestinationJourney
        journey={journey}
        activeStep={activeStep}
        onStepClick={(idx) => setActiveStep(idx)}
      />
      <DestinationApplicationProcess
        steps={applicationProcess}
        activeStep={activeStep}
        onStepChange={(idx) => setActiveStep(idx)}
      />
    </>
  );
}
