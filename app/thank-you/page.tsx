import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/site";

export const metadata: Metadata = {
  title: "Request Received",
  description: "Thank you for requesting a Sentinel Property Tech Checkup."
};

export default function ThankYouPage() {
  return <section className="section-pad min-h-[70vh] bg-ink text-white"><div className="container-tight max-w-3xl pt-10"><div className="grid h-14 w-14 place-items-center rounded-md bg-signal text-ink"><CheckCircle2 aria-hidden="true" className="h-8 w-8" /></div><p className="mt-8 text-sm font-semibold uppercase tracking-[0.24em] text-signal">Request received</p><h1 className="mt-5 font-display text-4xl font-semibold tracking-normal sm:text-5xl">Thanks. Sentinel has your request.</h1><p className="mt-5 text-lg leading-8 text-slate-300">We will review your property technology checkup request and follow up using your preferred contact method.</p><div className="mt-8"><ButtonLink href="/" variant="primary">Return home <ArrowRight aria-hidden="true" className="h-4 w-4" /></ButtonLink></div></div></section>;
}
