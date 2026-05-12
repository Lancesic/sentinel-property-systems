import type { Metadata } from "next";
import Link from "next/link";
import { Camera, KeyRound, Menu, Network, ShieldCheck, Wrench } from "lucide-react";
import "./globals.css";

const navItems = [["/", "Home"], ["/services", "Services"], ["/maintenance-plans", "Maintenance Plans"], ["/industries", "Industries"], ["/about", "About"], ["/contact", "Contact"]];

export const metadata: Metadata = {
  metadataBase: new URL("https://sentinelpropertysystems.com"),
  title: { default: "Sentinel Property Systems | Smart Security Systems. Professionally Installed. Reliably Maintained.", template: "%s | Sentinel Property Systems" },
  description: "Sentinel Property Systems designs, installs, documents, and maintains reliable smart security systems for homes, businesses, contractors, churches, warehouses, and jobsite properties in Northeast Florida.",
  keywords: ["security camera installation", "security camera maintenance", "property technology maintenance", "smart security installer", "access control installation", "smart lock installer", "PoE camera installation", "business security systems", "jobsite security cameras", "commercial camera installation", "camera system maintenance", "Wi-Fi camera support", "Jacksonville security camera installation", "Northeast Florida property security", "smart property systems"],
  openGraph: { title: "Sentinel Property Systems", description: "Smart Security Systems. Professionally Installed. Reliably Maintained.", url: "https://sentinelpropertysystems.com", siteName: "Sentinel Property Systems", locale: "en_US", type: "website" }
};

function Logo() {
  return <Link href="/" className="focus-ring flex items-center gap-3 rounded-md"><span className="grid h-10 w-10 place-items-center rounded-md bg-signal text-ink"><ShieldCheck aria-hidden="true" className="h-6 w-6" /></span><span className="leading-tight"><span className="block font-display text-base font-semibold tracking-normal text-white">Sentinel</span><span className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-300">Property Systems</span></span></Link>;
}

function Header() {
  return <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 px-6 backdrop-blur lg:px-8"><div className="container-tight flex min-h-20 items-center justify-between gap-6"><Logo /><nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">{navItems.map(([href, label]) => <Link key={href} href={href} className="focus-ring rounded-md text-sm font-medium text-slate-200 transition hover:text-white">{label}</Link>)}</nav><Link href="/contact" className="focus-ring hidden min-h-11 items-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:bg-signal lg:inline-flex">Schedule Consultation</Link><details className="relative lg:hidden"><summary className="focus-ring flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-md border border-white/15 text-white [&::-webkit-details-marker]:hidden"><span className="sr-only">Open navigation menu</span><Menu aria-hidden="true" className="h-5 w-5" /></summary><div className="absolute right-0 mt-3 w-72 rounded-md border border-white/10 bg-ink p-3 shadow-2xl">{navItems.map(([href, label]) => <Link key={href} href={href} className="focus-ring block rounded-md px-3 py-3 text-sm font-medium text-slate-200 hover:bg-white/10 hover:text-white">{label}</Link>)}<Link href="/contact" className="focus-ring mt-2 block rounded-md bg-signal px-3 py-3 text-center text-sm font-semibold text-ink">Schedule Consultation</Link></div></details></div></header>;
}

function Footer() {
  const services = ["Camera Installation", "Network & Wi-Fi", "Smart Locks", "Access Control", "Maintenance Plans", "Jobsite Systems", "Legacy Evaluation"];
  return <footer className="bg-ink px-6 py-12 text-white lg:px-8"><div className="container-tight"><div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.1fr_0.7fr_0.7fr_1fr]"><div><Logo /><p className="mt-5 max-w-sm text-sm leading-6 text-slate-300">Smart Security Systems. Professionally Installed. Reliably Maintained. We install systems we can stand behind, then keep them working.</p><div className="mt-6 flex gap-3 text-signal"><Camera className="h-5 w-5" /><KeyRound className="h-5 w-5" /><Network className="h-5 w-5" /><ShieldCheck className="h-5 w-5" /><Wrench className="h-5 w-5" /></div></div><div><h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Pages</h2><div className="mt-4 grid gap-3">{navItems.map(([href, label]) => <Link key={href} href={href} className="text-sm text-slate-300 hover:text-white">{label}</Link>)}</div></div><div><h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Services</h2><ul className="mt-4 grid gap-3">{services.map((service) => <li key={service} className="text-sm text-slate-300">{service}</li>)}</ul></div><div><h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Contact</h2><dl className="mt-4 grid gap-3 text-sm"><div><dt className="text-slate-400">Phone</dt><dd className="mt-1 text-slate-200">904-439-3559</dd></div><div><dt className="text-slate-400">Email</dt><dd className="mt-1 text-slate-200">sentinelpropertysystems@gmail.com</dd></div><div><dt className="text-slate-400">Service Area</dt><dd className="mt-1 text-slate-200">Northeast Florida / Jacksonville / St. Augustine area - editable</dd></div></dl></div></div><div className="flex flex-col gap-3 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between"><p>{new Date().getFullYear()} Sentinel Property Systems.</p><p>sentinelpropertysystems.com</p></div></div></footer>;
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="font-sans antialiased"><Header /><main>{children}</main><Footer /></body></html>;
}
