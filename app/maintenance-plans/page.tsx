import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { CtaSection, PageHero, PlanCard, SectionHeading } from "@/components/site";
import { plans } from "@/components/data";

export const metadata: Metadata = { title: "Maintenance Plans", description: "Recurring security camera maintenance and property technology maintenance plans for homes, businesses, contractors, churches, warehouses, and offices." };

const reasons = ["Security devices depend on Wi-Fi, power, batteries, firmware, storage, accounts, and apps.", "A system can look installed but still fail to record, alert, or provide useful footage.", "Regular maintenance catches quiet failures before an incident exposes them.", "Owners get a practical partner for updates, camera health, access questions, and troubleshooting."];

export default function MaintenancePlansPage() {
  return <><PageHero eyebrow="Maintenance Plans" title="Like HVAC maintenance, but for smart security and property tech." copy="Most properties already have cameras, smart locks, alarms, Wi-Fi, and connected devices. Sentinel keeps those systems updated, online, useful, and easier to own." /><section className="section-pad bg-white"><div className="container-tight"><SectionHeading align="center" title="Choose the level of support your property needs." copy="Start with a one-time checkup or move into a recurring plan for priority troubleshooting and regular system health reviews." /><div className="mt-10 grid gap-5 lg:grid-cols-3">{plans.map((plan) => <PlanCard key={plan.name} {...plan} />)}</div></div></section><section className="section-pad bg-frost"><div className="container-tight grid gap-10 lg:grid-cols-[0.85fr_1.15fr]"><SectionHeading eyebrow="Why maintenance matters" title="Security systems do not fail all at once. They drift." copy="One camera loses power. A password changes. A recorder fills up. A firmware update breaks an app. A lock battery gets ignored. Maintenance turns those surprises into scheduled work." /><div className="grid gap-4">{reasons.map((reason) => <div key={reason} className="flex gap-3 rounded-md border border-slate-200 bg-white p-5 shadow-sm"><CheckCircle2 className="mt-1 h-5 w-5 flex-none text-steel" /><p className="leading-7 text-slate-700">{reason}</p></div>)}</div></div></section><CtaSection /></>;
}
