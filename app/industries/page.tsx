import type { Metadata } from "next";
import { CtaSection, IconCard, PageHero, SectionHeading } from "@/components/site";
import { industries, industryDetails } from "@/components/data";

export const metadata: Metadata = { title: "Industries", description: "Managed smart property infrastructure and operational visibility for homes, businesses, contractors, retail, offices, churches, warehouses, rentals, and multi-property owners." };

export default function IndustriesPage() {
  return <><PageHero eyebrow="Industries" title="Built for properties that require dependable visibility." copy="Sentinel supports properties that need uptime, oversight, access control, network reliability, and maintained smart property systems across Northeast Florida." /><section className="section-pad bg-white"><div className="container-tight"><SectionHeading title="Visibility, uptime, and operational reliability by property type." copy="Each environment has different risks, but the same core need: systems that are connected, documented, and maintained." /><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{industries.map((industry) => <IconCard key={industry.title} {...industry} />)}</div></div></section><section className="section-pad bg-frost"><div className="container-tight grid gap-5 md:grid-cols-2">{industryDetails.map(([title, copy]) => <article key={title} className="rounded-md border border-slate-200 bg-white p-6 shadow-sm"><h2 className="font-display text-2xl font-semibold tracking-normal text-ink">{title}</h2><p className="mt-3 leading-7 text-slate-600">{copy}</p></article>)}</div></section><CtaSection /></>;
}
