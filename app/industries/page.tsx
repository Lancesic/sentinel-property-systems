import type { Metadata } from "next";
import { CtaSection, IconCard, PageHero, SectionHeading } from "@/components/site";
import { industries, industryDetails } from "@/components/data";

export const metadata: Metadata = { title: "Industries", description: "Smart security and property technology maintenance for homeowners, small businesses, contractors, retail, offices, churches, warehouses, and rentals." };

export default function IndustriesPage() {
  return <><PageHero eyebrow="Industries" title="Reliable security technology for the places people depend on." copy="Sentinel supports homeowners, small businesses, contractors, retail spaces, offices, churches, warehouses, rental properties, and jobsites across Northeast Florida." /><section className="section-pad bg-white"><div className="container-tight"><SectionHeading title="Built for properties that cannot afford blind spots." /><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{industries.map((industry) => <IconCard key={industry.title} {...industry} />)}</div></div></section><section className="section-pad bg-frost"><div className="container-tight grid gap-5 md:grid-cols-2">{industryDetails.map(([title, copy]) => <article key={title} className="rounded-md border border-slate-200 bg-white p-6 shadow-sm"><h2 className="font-display text-2xl font-semibold tracking-normal text-ink">{title}</h2><p className="mt-3 leading-7 text-slate-600">{copy}</p></article>)}</div></section><CtaSection /></>;
}
