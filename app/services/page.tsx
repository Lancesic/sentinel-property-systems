import type { Metadata } from "next";
import { CtaSection, IconCard, PageHero, SectionHeading } from "@/components/site";
import { serviceDetails } from "@/components/data";

export const metadata: Metadata = { title: "Services", description: "Camera installation, camera troubleshooting, smart locks, access control, Wi-Fi support, recording support, jobsite cameras, and security system cleanup." };

export default function ServicesPage() {
  return <><PageHero eyebrow="Services" title="Install, repair, and maintain the technology protecting your property." copy="Sentinel Property Systems supports security cameras, smart locks, access control, Wi-Fi networks, cloud and NVR recording, jobsite security cameras, and neglected systems that need a clean reset." /><section className="section-pad bg-white"><div className="container-tight"><SectionHeading title="Property security technology, handled as a system." copy="A camera is only as useful as its network, recording, power, placement, app access, and maintenance plan. Sentinel looks at the full chain." /><div className="mt-10 grid gap-5 md:grid-cols-2">{serviceDetails.map((service) => <IconCard key={service.title} {...service} />)}</div></div></section><section className="section-pad bg-frost"><div className="container-tight grid gap-6 lg:grid-cols-3">{["New installations designed for serviceability, clean access, and long-term reliability.", "Security system repair for cameras, NVRs, cloud apps, smart locks, Wi-Fi, and access control.", "Maintenance memberships for commercial security maintenance and home property technology care."].map((item) => <div key={item} className="rounded-md border border-slate-200 bg-white p-6 text-lg font-medium leading-8 text-ink shadow-sm">{item}</div>)}</div></section><CtaSection /></>;
}
