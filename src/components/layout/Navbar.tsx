"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { ease } from "@/lib/animations";
import { cn } from "@/lib/utils";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Studio", href: "#studio" },
  { label: "Process", href: "#process" },
  { label: "Recognition", href: "#recognition" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: ease.expo, delay: 0.2 }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={cn(
            "mx-auto flex max-w-[110rem] items-center justify-between px-5 py-5 transition-all duration-500 sm:px-8",
            scrolled &&
            "mt-3 max-w-[105rem] rounded-full border border-border/70 bg-background/70 px-6 py-3 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.18)] backdrop-blur-xl",
          )}
        >
          <Link
            href="#top"
            className="font-display text-lg font-semibold tracking-tight"
          >
            studio<span className="text-clay">.</span>nova
          </Link>

          <nav className="hidden items-center gap-9 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="link-underline text-sm text-foreground/80 transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <AnimatedButton href="#contact">Let&apos;s talk</AnimatedButton>
          </div>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 90% 6%)" }}
            animate={{ clipPath: "circle(150% at 90% 6%)" }}
            exit={{ clipPath: "circle(0% at 90% 6%)" }}
            transition={{ duration: 0.7, ease: ease.inOut }}
            className="fixed inset-0 z-60 bg-primary text-primary-foreground md:hidden"
          >
            <div className="flex items-center justify-between px-5 py-5">
              <span className="font-display text-lg font-semibold">
                studio<span className="text-clay">.</span>nova
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/30"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <motion.nav
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } }}
              className="flex flex-col gap-2 px-5 pt-10"
            >
              {NAV_LINKS.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  variants={{
                    hidden: { y: 40, opacity: 0 },
                    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: ease.expo } },
                  }}
                  className="border-b border-primary-foreground/15 py-4 font-display text-4xl font-medium tracking-tight"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: ease.expo } },
                }}
                className="pt-10"
              >
                <Link
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full bg-clay px-7 py-3.5 text-sm font-medium text-clay-foreground"
                >
                  Let&apos;s talk
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}