"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CONTACT_EMAIL, projectTypes } from "@/components/sections/contact/contact-content";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const inquirySchema = z.object({
  name: z.string().min(2, "Please add your name."),
  email: z.string().email("Use a valid email address."),
  projectType: z.enum(projectTypes, {
    errorMap: () => ({ message: "Choose the closest project type." }),
  }),
  location: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(20, "Share at least a few sentences about the space."),
});

type InquiryValues = z.infer<typeof inquirySchema>;

const defaultValues: InquiryValues = {
  name: "",
  email: "",
  projectType: "Residential planning",
  location: "",
  timeline: "",
  message: "",
};

function buildMailto(values: InquiryValues) {
  const subject = encodeURIComponent(`Project inquiry from ${values.name}`);
  const body = encodeURIComponent(
    [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Project type: ${values.projectType}`,
      `Location: ${values.location ?? "Not shared yet"}`,
      `Timeline: ${values.timeline ?? "Flexible / not shared yet"}`,
      "",
      "Project note:",
      values.message,
    ].join("\n"),
  );

  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

export function ContactInquiryForm() {
  const [mailDraft, setMailDraft] = useState<string | null>(null);
  const form = useForm<InquiryValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues,
    mode: "onBlur",
  });

  const isSubmitting = form.formState.isSubmitting;
  const selectedProject = form.watch("projectType");

  const helperText = useMemo(() => {
    return selectedProject === "Commercial spaces"
      ? "A short note about audience, atmosphere, and opening dates is enough to begin."
      : "A short note about the current space, desired feeling, and timing is enough to begin.";
  }, [selectedProject]);

  async function onSubmit(values: InquiryValues) {
    const href = buildMailto(values);
    setMailDraft(href);
    window.location.href = href;
  }

  return (
    <Form {...form}>
      <form
        id="inquiry"
        onSubmit={form.handleSubmit(onSubmit)}
        className="rounded-[var(--radius-ds-lg)] border border-border bg-background p-5 sm:p-8"
      >
        <div className="flex flex-col gap-3 border-b border-border pb-6">
          <span className="type-small-label text-clay">Guided note</span>
          <h2 className="font-display text-3xl font-medium leading-none tracking-[-0.025em] sm:text-5xl">
            Share the shape of the project.
          </h2>
          <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            {helperText}
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" autoComplete="name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="you@example.com" autoComplete="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="projectType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project type</FormLabel>
                <FormControl>
                  <select
                    {...field}
                    className="h-11 w-full rounded-[var(--radius-ds-md)] border border-input bg-background px-3 text-sm text-foreground outline-none transition-colors focus-visible:border-foreground focus-visible:ring-2 focus-visible:ring-clay/35"
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input placeholder="City or region" autoComplete="address-level2" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="timeline"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel>Timeline</FormLabel>
                <FormControl>
                  <Input placeholder="Opening date, renovation window, or flexible" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel>Project note</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about the space, what is changing, and what should feel different when it is complete."
                    className="min-h-36 resize-y"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-sm leading-6 text-muted-foreground">
            Melina reviews each note personally and replies with the clearest next questions.
          </p>
          <button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              "group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-clay disabled:pointer-events-none disabled:opacity-60",
            )}
          >
            {isSubmitting ? "Preparing inquiry..." : "Prepare inquiry"}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {mailDraft && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            role="status"
            className="mt-5 flex flex-col gap-3 rounded-[var(--radius-ds-md)] bg-surface p-4 text-sm leading-6 text-foreground sm:flex-row sm:items-center sm:justify-between"
          >
            <span className="inline-flex items-center gap-2">
              <Check className="h-4 w-4 text-clay" />
              Your email draft is ready.
            </span>
            <a href={mailDraft} className="link-underline font-medium">
              Open draft again
            </a>
          </motion.div>
        )}
      </form>
    </Form>
  );
}
