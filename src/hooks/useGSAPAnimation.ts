"use client";

import { useEffect, useRef, type RefObject } from "react";

/**
 * Lightweight GSAP + ScrollTrigger helper. Dynamically imports gsap on the
 * client only (keeps SSR safe) and runs the provided setup inside a
 * gsap.context scoped to the returned ref, with automatic cleanup.
 * Skips entirely when prefers-reduced-motion is set.
 */
export function useGSAPAnimation<T extends HTMLElement = HTMLDivElement>(
  setup: (
    gsap: typeof import("gsap").gsap,
    ScrollTrigger: typeof import("gsap/ScrollTrigger").ScrollTrigger,
    scope: T,
  ) => void,
  deps: unknown[] = [],
): RefObject<T | null> {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    let ctx: { revert: () => void } | undefined;
    let active = true;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      // expose for the Lenis bridge
      (window as unknown as { ScrollTrigger?: unknown }).ScrollTrigger =
        ScrollTrigger;
      if (!active || !ref.current) return;
      const scope = ref.current;
      ctx = gsap.context(() => setup(gsap, ScrollTrigger, scope), scope);
    })();

    return () => {
      active = false;
      ctx?.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}