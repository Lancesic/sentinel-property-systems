import { BatteryWarning, Building2, Camera, CheckCircle2, Church, CloudOff, Construction, DoorOpen, EyeOff, FileText, Home, KeyRound, LockKeyhole, MonitorCheck, Network, RadioTower, RefreshCcw, Router, ShieldCheck, Store, Warehouse, WifiOff, Wrench } from "lucide-react";

export const problems = [
  { title: "Undocumented wiring", icon: FileText },
  { title: "Offline cameras", icon: CloudOff },
  { title: "Weak Wi-Fi", icon: WifiOff },
  { title: "App and password confusion", icon: LockKeyhole },
  { title: "Dead batteries", icon: BatteryWarning },
  { title: "Poor camera placement", icon: EyeOff },
  { title: "Cheap hardware", icon: MonitorCheck },
  { title: "No maintenance plan", icon: RefreshCcw }
];

export const services = [
  { title: "New Security Camera Installations", icon: Camera, copy: "Clean PoE camera systems, doorbell cameras, remote viewing, recording setup, and camera placement planning." },
  { title: "Wi-Fi & Network Foundation", icon: Network, copy: "Routers, access points, PoE switches, cabling, and network layouts designed to support cameras and smart devices." },
  { title: "Smart Locks & Access Control", icon: KeyRound, copy: "Keypads, smart locks, access permissions, gates, employee entry, and controlled access setup." },
  { title: "Maintenance Plans", icon: ShieldCheck, copy: "Routine system checks, camera health review, update support, battery planning, access review, and priority support." },
  { title: "Jobsite & Contractor Systems", icon: Construction, copy: "Temporary or permanent camera/network setups for contractors, material storage, gates, and active project locations." },
  { title: "Legacy System Evaluation", icon: Wrench, copy: "We review existing systems and recommend repair, stabilization, upgrade, or replacement. We do not promise unlimited repair on unsupported or unsafe legacy systems." }
];

export const plans = [
  { name: "Sentinel Checkup", audience: "Best for new customers or existing properties.", cta: "Book a Checkup", features: ["Current system review", "Camera and Wi-Fi check", "Device inventory", "App/access review", "Blind spot notes", "Repair vs upgrade recommendation"] },
  { name: "Sentinel Care", audience: "Best for homes and small offices with Sentinel-installed or approved systems.", cta: "Request Maintenance", featured: true, features: ["Quarterly system review", "Camera health check", "Battery/device check", "Firmware/update guidance", "App and access support", "Priority troubleshooting"] },
  { name: "Sentinel Business Guardian", audience: "Best for businesses, churches, offices, warehouses, and contractor properties.", cta: "Get Business Plan", features: ["Monthly or quarterly maintenance", "Camera/network health review", "Access control support", "User/access permission review", "Incident support", "Priority service", "Upgrade planning"] }
];

export const industries = [
  { title: "Homes", icon: Home },
  { title: "Small Businesses", icon: Store },
  { title: "Retail", icon: Store },
  { title: "Offices", icon: Building2 },
  { title: "Churches", icon: Church },
  { title: "Warehouses", icon: Warehouse },
  { title: "Contractors & Jobsites", icon: Construction },
  { title: "Rentals / Airbnb", icon: DoorOpen }
];

export const serviceDetails = [
  { title: "New Camera System Installation", icon: Camera, copy: "Security camera installation for homes, offices, churches, warehouses, retail, and jobsite properties. We design clean PoE camera installation layouts, recording options, remote viewing, and camera placement around coverage and maintainability." },
  { title: "Network & Wi-Fi Foundation", icon: Router, copy: "Smart security depends on the network underneath it. We design router, access point, PoE switch, cabling, and Wi-Fi layouts that support cameras, smart locks, access control, and remote management-ready systems." },
  { title: "Smart Locks & Access Control", icon: KeyRound, copy: "Smart lock installer and access control installation for keypads, gates, office entry, employee permissions, schedules, rental access, and controlled property access." },
  { title: "Jobsite Security Systems", icon: Construction, copy: "Camera and network systems for contractors, material storage, active project locations, gates, equipment yards, and temporary or permanent jobsite security cameras." },
  { title: "System Documentation", icon: FileText, copy: "Clear device lists, network layout notes, camera placement notes, app/admin access documentation, and maintenance recommendations so the system does not become a mystery later." },
  { title: "Maintenance Plans", icon: ShieldCheck, copy: "Camera system maintenance and property technology maintenance for Sentinel-installed, Sentinel-upgraded, or Sentinel-approved systems after evaluation." },
  { title: "Legacy System Evaluation", icon: Wrench, copy: "Existing system evaluation for cameras, DVRs, wiring, Wi-Fi, locks, and access control. We recommend stabilize, replace components, upgrade to a supported system, or start fresh." },
  { title: "Approved Hardware Stack", icon: CheckCircle2, copy: "We prefer standardized, serviceable camera and network ecosystems: clean PoE-based security systems, locally stored video options, managed Wi-Fi, access control, and hardware that can be supported over time." }
];

export const industryDetails = [
  ["Homeowners", "Clean smart security installer support for cameras, Wi-Fi, smart locks, doorbells, local video options, and recurring maintenance on systems that are built to be serviced."],
  ["Small businesses", "Business security systems with documented cameras, network foundation, access permissions, recording setup, and camera system maintenance."],
  ["Contractors", "Jobsite security cameras and network setups for materials, equipment, gates, temporary locations, and active projects that need dependable visibility."],
  ["Retail", "Commercial camera installation, Wi-Fi camera support, access control, and maintenance planning for customer-facing spaces."],
  ["Offices", "Smart locks, access control installation, employee entry, common-area cameras, Wi-Fi foundation, and documentation."],
  ["Churches", "Security camera installation and maintenance for sanctuaries, offices, classrooms, entrances, parking areas, and shared access needs."],
  ["Warehouses", "PoE camera installation, access review, network health, camera placement, recording strategy, and commercial security maintenance."],
  ["Rentals / Airbnb", "Smart property systems for exterior awareness where appropriate, smart locks, owner access, Wi-Fi checks, and maintenance between stays."]
];
