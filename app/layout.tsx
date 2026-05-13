import type { Metadata } from "next";
import Link from "next/link";
import { Camera, KeyRound, Menu, Network, Radar, ShieldCheck, Wrench } from "lucide-react";
import "./globals.css";

const navItems = [["/", "Home"], ["/services", "Systems"], ["/maintenance-plans", "Maintenance"], ["/blueprints", "Blueprints"], ["/resources", "Resources"], ["/client-experience", "Client Experience"], ["/sentinel-alpha", "Sentinel Alpha"], ["/partner-network", "Partner Network"], ["/industries", "Industries"], ["/legacy-evaluation", "Legacy Evaluation"], ["/about", "About"], ["/contact", "Contact"]];

export const metadata: Metadata = {
  metadataBase: new URL("https://sentinelpropertysystems.com"),
  title: { default: "Sentinel Property Systems | Visible Peace of Mind", template: "%s | Sentinel Property Systems" },
  description: "Sentinel Property Systems designs, installs, documents, maintains, upgrades, and continuously improves premium smart property infrastructure for visible peace of mind.",
  keywords: ["visible peace of mind", "property visibility systems", "operational continuity", "smart property infrastructure", "luxury smart home infrastructure", "premium smart property systems", "estate technology systems", "property continuity", "security camera maintenance", "PoE camera installation", "access control installation", "Wi-Fi infrastructure", "managed property systems", "executive smart home systems", "Jacksonville smart property systems", "Northeast Florida property technology"],
  openGraph: { title: "Sentinel Property Systems", description: "Visible Peace of Mind", url: "https://sentinelpropertysystems.com", siteName: "Sentinel Property Systems", locale: "en_US", type: "website" }
};

function Logo() {
  return <Link href="/" className="focus-ring flex items-center gap-3 rounded-md"><span className="grid h-10 w-10 place-items-center rounded-md bg-signal text-ink"><ShieldCheck aria-hidden="true" className="h-6 w-6" /></span><span className="leading-tight"><span className="block font-display text-base font-semibold tracking-normal text-white">Sentinel</span><span className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-300">Property Systems</span></span></Link>;
}

function Header() {
  return <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 px-6 backdrop-blur lg:px-8"><div className="container-tight flex min-h-20 items-center justify-between gap-5"><Logo /><nav aria-label="Primary navigation" className="hidden flex-wrap items-center justify-end gap-x-4 gap-y-2 xl:flex">{navItems.map(([href, label]) => <Link key={href} href={href} className="focus-ring rounded-md text-xs font-medium text-slate-200 transition hover:text-white">{label}</Link>)}</nav><Link href="/contact" className="focus-ring hidden min-h-11 items-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:bg-signal xl:inline-flex">Private Consultation</Link><details className="relative xl:hidden"><summary className="focus-ring flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-md border border-white/15 text-white [&::-webkit-details-marker]:hidden"><span className="sr-only">Open navigation menu</span><Menu aria-hidden="true" className="h-5 w-5" /></summary><div className="absolute right-0 mt-3 max-h-[75vh] w-80 overflow-y-auto rounded-md border border-white/10 bg-ink p-3 shadow-2xl">{navItems.map(([href, label]) => <Link key={href} href={href} className="focus-ring block rounded-md px-3 py-3 text-sm font-medium text-slate-200 hover:bg-white/10 hover:text-white">{label}</Link>)}<Link href="/contact" className="focus-ring mt-2 block rounded-md bg-signal px-3 py-3 text-center text-sm font-semibold text-ink">Private Consultation</Link></div></details></div></header>;
}

function Footer() {
  const services = ["Camera Infrastructure", "Wi-Fi & Connectivity", "Smart Access", "Estate Visibility", "Documentation", "Maintenance", "Blueprints", "Partner Network"];
  return <footer className="bg-ink px-6 py-12 text-white lg:px-8"><div className="container-tight"><div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.1fr_0.7fr_0.7fr_1fr]"><div><Logo /><p className="mt-5 max-w-sm text-sm leading-6 text-slate-300">Visible Peace of Mind. Premium property continuity, calm documentation, and dependable technology for serious property owners.</p><div className="mt-6 flex gap-3 text-signal"><Camera className="h-5 w-5" /><Network className="h-5 w-5" /><KeyRound className="h-5 w-5" /><Radar className="h-5 w-5" /><Wrench className="h-5 w-5" /></div></div><div><h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Pages</h2><div className="mt-4 grid gap-3">{navItems.map(([href, label]) => <Link key={href} href={href} className="text-sm text-slate-300 hover:text-white">{label}</Link>)}</div></div><div><h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Systems</h2><ul className="mt-4 grid gap-3">{services.map((service) => <li key={service} className="text-sm text-slate-300">{service}</li>)}</ul></div><div><h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Contact</h2><dl className="mt-4 grid gap-3 text-sm"><div><dt className="text-slate-400">Phone</dt><dd className="mt-1 text-slate-200">904-439-3559</dd></div><div><dt className="text-slate-400">Email</dt><dd className="mt-1 text-slate-200">sentinelpropertysystems@gmail.com</dd></div><div><dt className="text-slate-400">Service Area</dt><dd className="mt-1 text-slate-200">Northeast Florida / Jacksonville / St. Augustine area - editable</dd></div></dl></div></div><div className="flex flex-col gap-3 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between"><p>{new Date().getFullYear()} Sentinel Property Systems.</p><p>sentinelpropertysystems.com</p></div></div></footer>;
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="font-sans antialiased"><Header /><main>{children}</main><Footer /></body></html>;
}
