import { BatteryWarning, Building2, Camera, CheckCircle2, Church, CloudOff, Construction, DoorOpen, EyeOff, FileText, Home, KeyRound, LockKeyhole, MonitorCheck, Network, RadioTower, RefreshCcw, Router, ShieldCheck, Store, Warehouse, WifiOff, Wrench } from "lucide-react";

export const problems = [
  { title: "Offline cameras", icon: CloudOff },
  { title: "Weak Wi-Fi coverage", icon: WifiOff },
  { title: "Unknown passwords", icon: LockKeyhole },
  { title: "Unlabeled systems", icon: FileText },
  { title: "Dead batteries", icon: BatteryWarning },
  { title: "Unsupported hardware", icon: MonitorCheck },
  { title: "Poor camera visibility", icon: EyeOff },
  { title: "No maintenance ownership", icon: RefreshCcw }
];

export const systems = [
  { title: "Smart Camera Systems", icon: Camera, copy: "PoE-first camera systems, remote viewing, recording infrastructure, camera placement planning, and visibility optimization." },
  { title: "Network & Wi-Fi Infrastructure", icon: Network, copy: "Gateways, PoE switches, access points, structured connectivity, and security-focused network design." },
  { title: "Smart Locks & Access Control", icon: KeyRound, copy: "Controlled entry systems, keypads, smart locks, employee access, gate management, and permission-based access." },
  { title: "Property Visibility Systems", icon: RadioTower, copy: "Integrated visibility environments for homes, offices, retail, warehouses, contractors, and jobsites." },
  { title: "System Documentation", icon: FileText, copy: "Device inventory, access handoff, topology mapping, visibility planning, and maintenance records." },
  { title: "Maintenance Plans", icon: ShieldCheck, copy: "Recurring operational reviews, system health checks, update guidance, support, and infrastructure upkeep." }
];

export const services = systems;

export const plans = [
  { name: "Sentinel Checkup", audience: "New customer evaluation or property assessment.", cta: "Book a Checkup", features: ["Camera review", "Wi-Fi review", "Device inventory", "Blind spot analysis", "Access review", "Repair vs replacement guidance", "Maintenance eligibility evaluation"] },
  { name: "Sentinel Care", audience: "Homes and small offices with Sentinel-installed or approved systems.", cta: "Request Maintenance", featured: true, features: ["Quarterly operational review", "Camera health checks", "Device and battery review", "Update guidance", "App/access support", "Priority troubleshooting"] },
  { name: "Sentinel Business Guardian", audience: "Businesses, warehouses, contractors, churches, offices, retail, and multi-property operations.", cta: "Get Business Plan", features: ["Monthly or quarterly maintenance", "Network and camera health reviews", "Access-control support", "User permission reviews", "Incident support", "Annual optimization planning", "Priority response"] }
];

export const industries = [
  { title: "Homes", icon: Home },
  { title: "Small Businesses", icon: Store },
  { title: "Retail", icon: Store },
  { title: "Offices", icon: Building2 },
  { title: "Churches", icon: Church },
  { title: "Warehouses", icon: Warehouse },
  { title: "Contractors & Jobsites", icon: Construction },
  { title: "Airbnb / Rentals", icon: DoorOpen },
  { title: "Multi-property Owners", icon: Building2 }
];

export const systemDetails = [
  { title: "Camera Infrastructure", icon: Camera, copy: "PoE camera installation, camera placement planning, recording strategy, local video options, remote viewing, and visibility optimization for modern properties." },
  { title: "Network & Wi-Fi Foundation", icon: Router, copy: "Gateways, access points, PoE switches, structured connectivity, Wi-Fi infrastructure, and smart property networks designed around reliability." },
  { title: "Smart Access Systems", icon: KeyRound, copy: "Access control systems, smart locks, keypads, gate access, user permissions, employee access, and controlled entry handoff." },
  { title: "Property Visibility Architecture", icon: RadioTower, copy: "A full visibility plan that connects cameras, Wi-Fi, access, dashboards, documentation, and maintenance into one supportable environment." },
  { title: "Jobsite Visibility Systems", icon: Construction, copy: "Jobsite visibility systems for contractors, material storage, gates, temporary projects, equipment yards, and active construction sites." },
  { title: "Structured Cabling & PoE", icon: Network, copy: "Clean PoE-first design, labeled equipment where practical, organized network layouts, and infrastructure built to be maintained." },
  { title: "Documentation & Operational Handoff", icon: FileText, copy: "Device inventories, topology notes, admin/app handoff, camera placement documentation, maintenance records, and upgrade path planning." },
  { title: "Maintenance Readiness", icon: CheckCircle2, copy: "Approved hardware stack thinking, remote support readiness, maintenance-ready infrastructure, and long-term operational visibility planning." }
];

export const serviceDetails = systemDetails;

export const industryDetails = [
  ["Homeowners", "Smart property systems for cameras, Wi-Fi, smart locks, and exterior visibility with clean documentation and ongoing maintenance options."],
  ["Small businesses", "Managed property systems that help owners maintain visibility, access, uptime, and operational confidence without mystery apps or undocumented devices."],
  ["Contractors", "Jobsite visibility systems for materials, equipment, gates, storage areas, and active projects where downtime and blind spots cost money."],
  ["Retail", "Property visibility systems for customer-facing spaces, cameras, Wi-Fi infrastructure, access control, and recurring operational reviews."],
  ["Offices", "Access control systems, smart locks, Wi-Fi infrastructure, cameras, user permissions, documentation, and maintenance for daily operations."],
  ["Churches", "Reliable visibility for sanctuaries, classrooms, offices, entrances, parking areas, and shared access environments."],
  ["Warehouses", "PoE camera installation, network health, access review, recording strategy, camera coverage, and infrastructure maintenance for larger spaces."],
  ["Airbnb / Rentals", "Smart locks, Wi-Fi checks, exterior visibility where appropriate, owner access, and documented systems between guest stays."],
  ["Multi-property owners", "Standardized smart property infrastructure across multiple sites so systems are easier to support, maintain, and improve over time."]
];
