import { BatteryWarning, Building2, Camera, CheckCircle2, Church, CloudOff, Construction, DoorOpen, EyeOff, FileText, Home, KeyRound, LockKeyhole, MonitorCheck, Network, RadioTower, RefreshCcw, Router, ShieldCheck, Store, Warehouse, WifiOff, Wrench } from "lucide-react";

export const problems = [
  { title: "Offline cameras", icon: CloudOff },
  { title: "Weak Wi-Fi", icon: WifiOff },
  { title: "Unknown passwords", icon: LockKeyhole },
  { title: "Fragmented apps", icon: RadioTower },
  { title: "Dead batteries", icon: BatteryWarning },
  { title: "Unsupported devices", icon: MonitorCheck },
  { title: "No documentation", icon: FileText },
  { title: "No upgrade roadmap", icon: EyeOff },
  { title: "No maintenance ownership", icon: RefreshCcw }
];

export const systems = [
  { title: "Smart Camera Systems", icon: Camera, copy: "PoE-first camera systems, remote viewing, recording infrastructure, camera placement planning, and visibility optimization." },
  { title: "Wi-Fi & Network Infrastructure", icon: Network, copy: "Gateways, PoE switches, access points, structured connectivity, and security-focused network design." },
  { title: "Smart Locks & Access Control", icon: KeyRound, copy: "Controlled entry systems, keypads, smart locks, employee access, gate management, and permission-based access." },
  { title: "Estate & Multi-Property Visibility", icon: Home, copy: "Visibility planning for executive homes, estates, vacation properties, and multi-property owners." },
  { title: "Jobsite Visibility Systems", icon: Construction, copy: "Property visibility for contractors, materials, gates, equipment, storage yards, and active project locations." },
  { title: "Documentation & Handoff", icon: FileText, copy: "Device inventory, access handoff, topology mapping, visibility planning, and maintenance records." },
  { title: "Maintenance Memberships", icon: ShieldCheck, copy: "Recurring operational reviews, system health checks, update guidance, support, and infrastructure upkeep." },
  { title: "Modular Upgrade Planning", icon: RefreshCcw, copy: "Upgrade roadmaps that let the system evolve without creating technology chaos." },
  { title: "Legacy Evaluation", icon: Wrench, copy: "Clear operational decisions for older systems: stabilize, selectively replace, upgrade, or rebuild." }
];

export const services = systems;

export const plans = [
  { name: "Sentinel Checkup", audience: "New customer evaluation or property assessment.", cta: "Book a Checkup", features: ["Camera review", "Wi-Fi review", "Device inventory", "Blind spot analysis", "Access review", "Repair vs replacement guidance", "Maintenance eligibility evaluation"] },
  { name: "Sentinel Care", audience: "Homes and small offices with Sentinel-installed or approved systems.", cta: "Request Maintenance", featured: true, features: ["Quarterly operational review", "Camera health checks", "Device and battery review", "Update guidance", "App/access support", "Priority troubleshooting"] },
  { name: "Sentinel Business Guardian", audience: "Businesses, warehouses, contractors, churches, offices, retail, and multi-property operations.", cta: "Get Business Plan", features: ["Monthly or quarterly maintenance", "Network and camera health reviews", "Access-control support", "User permission reviews", "Incident support", "Annual optimization planning", "Priority response"] },
  { name: "Sentinel Reserve", audience: "Invitation-style premium continuity membership for clients who want concierge support.", cta: "Request Reserve", features: ["Priority service", "Annual visibility reviews", "Travel readiness", "Storm readiness", "Upgrade planning", "Concierge support", "Private client experience benefits"] }
];

export const industries = [
  { title: "Executive Homes", icon: Home },
  { title: "Luxury Residences", icon: Home },
  { title: "Estates", icon: Building2 },
  { title: "Vacation Properties", icon: DoorOpen },
  { title: "Multi-Property Owners", icon: Building2 },
  { title: "Small Businesses", icon: Store },
  { title: "Offices", icon: Building2 },
  { title: "Retail", icon: Store },
  { title: "Churches", icon: Church },
  { title: "Warehouses", icon: Warehouse },
  { title: "Contractors & Jobsites", icon: Construction },
  { title: "Airbnb / Rentals", icon: DoorOpen }
];

export const systemDetails = [
  { title: "Camera Infrastructure", icon: Camera, copy: "PoE camera installation, camera placement planning, recording strategy, local video options, remote viewing, and visibility optimization for modern properties." },
  { title: "Wi-Fi & Connectivity", icon: Router, copy: "Gateways, access points, PoE switches, structured connectivity, Wi-Fi infrastructure, and smart property networks designed around reliability." },
  { title: "Smart Access Systems", icon: KeyRound, copy: "Access control systems, smart locks, keypads, gate access, user permissions, employee access, and controlled entry handoff." },
  { title: "Estate Visibility", icon: Home, copy: "Premium visibility architecture for high-end homes, estates, vacation properties, and private residences that need calm control." },
  { title: "Multi-Property Systems", icon: Building2, copy: "Standardized property visibility systems across multiple properties so owners can scale oversight without chaos." },
  { title: "Property Continuity Planning", icon: ShieldCheck, copy: "Planning for uptime, maintenance, storm readiness, travel mode, backup internet, backup power, and system evolution." },
  { title: "System Documentation", icon: FileText, copy: "Device inventories, topology notes, admin/app handoff, camera placement documentation, maintenance records, and upgrade path planning." },
  { title: "Modular Upgrade Architecture", icon: RefreshCcw, copy: "Expandable systems that support cameras, Wi-Fi, smart access, gates, dashboards, AI detection, and future upgrades." }
];

export const serviceDetails = systemDetails;

export const blueprintOffers = ["Free Property Visibility Checklist", "Smart Property Planning Guide", "Executive Visibility Blueprint", "Estate Visibility Blueprint", "Contractor Visibility Blueprint", "Warehouse Infrastructure Blueprint", "Airbnb Property Blueprint", "Custom Property Systems Blueprint"];

export const resourceCategories = ["Property Visibility", "Smart Infrastructure", "Camera Placement", "Wi-Fi & Networking", "Upgrade Planning", "Estate Technology", "Jobsite Visibility", "Maintenance", "Product Recommendations", "Case Studies", "DIY Planning"];

export const partnerTypes = ["Low-voltage installers", "Network technicians", "Security camera installers", "Smart home specialists", "Electricians", "AV integrators", "Maintenance specialists", "Content/documentation support"];

export const industryDetails = [
  ["Executive Homes", "Premium smart property systems for owners who want calm visibility, privacy, continuity, and white-glove infrastructure support."],
  ["Luxury Residences", "Luxury smart home infrastructure with clean installation, documentation, maintenance, and upgrade planning."],
  ["Estates", "Estate technology systems for large properties that need gates, cameras, Wi-Fi, access, visibility maps, and long-term continuity."],
  ["Vacation Properties", "Property visibility systems for travel readiness, remote awareness, access management, and seasonal upkeep."],
  ["Multi-Property Owners", "Managed property systems standardized across multiple locations for better oversight, continuity, and upgrade planning."],
  ["Small Businesses", "Operational visibility for cameras, Wi-Fi infrastructure, access control systems, and maintenance without mystery devices."],
  ["Offices", "Access control, smart locks, Wi-Fi infrastructure, cameras, user permissions, documentation, and maintenance for daily operations."],
  ["Retail", "Visibility, camera placement, connectivity, access, and recurring operational reviews for customer-facing spaces."],
  ["Churches", "Reliable visibility for sanctuaries, classrooms, offices, entrances, parking areas, and shared access environments."],
  ["Warehouses", "PoE camera installation, network health, access review, recording strategy, camera coverage, and infrastructure maintenance for larger spaces."],
  ["Contractors & Jobsites", "Jobsite visibility systems for materials, equipment, gates, storage areas, and active projects where downtime and blind spots cost money."],
  ["Airbnb / Rentals", "Smart locks, Wi-Fi checks, exterior visibility where appropriate, owner access, and documented systems between guest stays."]
];
