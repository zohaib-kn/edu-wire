"use client";

import { useEffect, useRef } from "react";
import { useModal } from "@/components/context/ModalContext";

// Module-level variable to persist across client-side router navigations and layout updates.
// It resets only when the page is fully reloaded/refreshed in the browser.
let hasOpenedGlobally = false;

export default function AutoOpenConsultationModal() {
  const { openModal } = useModal();
  const hasOpenedRef = useRef(false);

  useEffect(() => {
    if (hasOpenedRef.current || hasOpenedGlobally) return;
    hasOpenedRef.current = true;
    hasOpenedGlobally = true;

    const timer = window.setTimeout(() => {
      openModal();
    }, 700);

    return () => window.clearTimeout(timer);
  }, [openModal]);

  return null;
}
