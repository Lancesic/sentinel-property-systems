import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, CheckCircle2, Radar } from "lucide-react";

export function ButtonLink({ href, children, variant = "primary", className = "" }: { href: string; children: React.ReactNode; variant?: "primary" | "secondary" | "dark" | "ghost"; className?: string }) {
  const variants = { primary: "bg-signal text-ink shadow-glow hover:bg-white hover:text-ink border border-signal", secondary: "border border-white/20 bg-white/10 text-white hover:border-white/40 hover:bg-white/15", dark: "border border-ink bg-ink text-white hover:bg-steel", ghost: "border border-slate-300 bg-white text-ink hover:border-ink hover:bg-frost" };
  return <Link href={href} className={`focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition ${variants[variant]} ${className}`}>{children}</Link>;
}

export function SectionHeading({ eyebrow, title, copy, align = "left", light = false }: { eyebrow?: string; title: string; copy?: string; align?: "left" | "center"; light?: boolean }) {
  return <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>{eyebrow ? <p className={`text-sm font-semibold uppercase tracking-[0.22em] ${light ? "text-signal" : "text-steel"}`}>{eyebrow}</p> : null}<h2 className={`mt-3 font-display text-3xl font-semibold tracking-normal sm:text-4xl ${light ? "text-white" : "text-ink"}`}>{title}</h2>{copy ? <p className={`mt-4 text-lg leading-8 ${light ? "text-slate-300" : "text-slate-600"}`}>{copy}</p> : null}</div>;
}

export function IconCard({ title, copy, icon: Icon, dark = false }: { title: string; copy?: string; icon: LucideIcon; dark?: boolean }) {
  return <article className={`rounded-md border p-6 transition duration-300 ${dark ? "border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.07]" : "border-slate-200 bg-white text-ink shadow-sm hover:-translate-y-0.5 hover:shadow-md"}`}><div className={`grid h-12 w-12 place-items-center rounded-md ${dark ? "bg-signal/15 text-signal" : "bg-frost text-steel"}`}><Icon aria-hidden="true" className="h-6 w-6" /></div><h3 className="mt-5 font-display text-xl font-semibold tracking-normal">{title}</h3>{copy ? <p className={`mt-3 text-sm leading-6 ${dark ? "text-slate-300" : "text-slate-600"}`}>{copy}</p> : null}</article>;
}

export function PlanCard({ name, audience, features, cta, featured = false }: { name: string; audience: string; features: string[]; cta: string; featured?: boolean }) {
  return <article className={`flex h-full flex-col rounded-md border p-6 ${featured ? "border-signal bg-ink text-white shadow-glow" : "border-slate-200 bg-white text-ink shadow-sm"}`}>{featured ? <p className="mb-4 inline-flex w-fit rounded-md bg-signal px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-ink">Core Plan</p> : null}<h3 className="font-display text-2xl font-semibold tracking-normal">{name}</h3><p className={`mt-3 text-sm leading-6 ${featured ? "text-slate-300" : "text-slate-600"}`}>{audience}</p><ul className="mt-6 grid gap-3">{features.map((feature) => <li key={feature} className="flex gap-3 text-sm leading-6"><CheckCircle2 className={`mt-0.5 h-5 w-5 flex-none ${featured ? "text-signal" : "text-steel"}`} /><span className={featured ? "text-slate-200" : "text-slate-700"}>{feature}</span></li>)}</ul><div className="mt-auto pt-7"><ButtonLink href="/contact" variant={featured ? "primary" : "ghost"} className="w-full">{cta}</ButtonLink></div></article>;
}

export function PageHero({ eyebrow, title, copy, cta = "Schedule a Private Consultation" }: { eyebrow: string; title: string; copy: string; cta?: string }) {
  return <section className="section-pad bg-ink text-white"><div className="container-tight max-w-4xl pt-10"><p className="text-sm font-semibold uppercase tracking-[0.24em] text-signal">{eyebrow}</p><h1 className="mt-5 font-display text-4xl font-semibold tracking-normal sm:text-5xl lg:text-6xl">{title}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{copy}</p><div className="mt-8"><ButtonLink href="/contact" variant="primary">{cta} <ArrowRight aria-hidden="true" className="h-4 w-4" /></ButtonLink></div></div></section>;
}

export function CtaSection() {
  return <section className="section-pad bg-steel text-white"><div className="container-tight"><div className="grid items-center gap-8 rounded-md border border-white/10 bg-ink p-8 shadow-glow lg:grid-cols-[1fr_auto] lg:p-10"><div className="flex gap-5"><div className="hidden h-14 w-14 flex-none place-items-center rounded-md bg-signal/15 text-signal sm:grid"><Radar className="h-7 w-7" /></div><div><h2 className="font-display text-3xl font-semibold tracking-normal">Stop buying systems nobody maintains.</h2><p className="mt-3 max-w-3xl text-lg leading-8 text-slate-300">Build a premium property environment designed for visibility, continuity, and long-term peace of mind.</p></div></div><div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row"><ButtonLink href="/contact" variant="primary">Schedule a Private Consultation <ArrowRight className="h-4 w-4" /></ButtonLink><ButtonLink href="/blueprints" variant="secondary">Explore Blueprints</ButtonLink></div></div></div></section>;
}
