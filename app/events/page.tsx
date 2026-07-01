import React from "react";
import type { Metadata } from "next";
import EventsClient from "@/components/events/EventsClient";

export const metadata: Metadata = {
  title: "Events at Edu-Wire | Education Fairs, Gallery & Webinars",
  description: "Explore Edu-Wire events, education fairs, gallery, student achievers, seminars and webinars for study abroad guidance.",
};

export default function EventsPage() {
  return <EventsClient />;
}

