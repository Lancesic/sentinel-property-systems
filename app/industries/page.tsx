import type { Metadata } from "next";
import { CtaSection, IconCard, PageHero, SectionHeading } from "@/components/site";
import { industries, industryDetails } from "@/components/data";

export const metadata: Metadata = { title: "Industries", description: "Clean smart security installation and property technology maintenance for homeowners, small businesses, contractors, retail, offices, churches, warehouses, and rentals." };

export default function IndustriesPage() {
  return <><PageHero eyebrow="Industries" title="Dependable visibility for properties that need systems, not device clutter." copy="Sentinel designs, installs, documents, and maintains smart security systems for homeowners, businesses, contractors, retail spaces, offices, churches, warehouses, rentals, and jobsites across Northeast Florida." /><section className="section-pad bg-white"><div className="container-tight"><SectionHeading title="Built for properties that need dependable visibility." /><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{industries.map((industry) => <IconCard key={industry.title} {...industry} />)}</div></div></section><section className="section-pad bg-frost"><div className="container-tight grid gap-5 md:grid-cols-2">{industryDetails.map(([title, copy]) => <article key={title} className="rounded-md border border-slate-200 bg-white p-6 shadow-sm"><h2 className="font-display text-2xl font-semibold tracking-normal text-ink">{title}</h2><p className="mt-3 leading-7 text-slate-600">{copy}</p></article>)}</div></section><CtaSection /></>;
}
