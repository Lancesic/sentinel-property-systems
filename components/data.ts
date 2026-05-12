import { BatteryWarning, Building2, Camera, CheckCircle2, Church, CloudOff, Construction, DoorOpen, EyeOff, Home, KeyRound, LockKeyhole, MonitorCheck, Network, RadioTower, RefreshCcw, Router, ShieldCheck, Store, Warehouse, WifiOff, Wrench } from "lucide-react";

export const problems = [
  { title: "Dead camera batteries", icon: BatteryWarning },
  { title: "Offline cameras", icon: CloudOff },
  { title: "Weak Wi-Fi coverage", icon: WifiOff },
  { title: "Broken alerts", icon: RadioTower },
  { title: "Full or failed recording systems", icon: MonitorCheck },
  { title: "Forgotten passwords and app access", icon: LockKeyhole },
  { title: "Poor camera angles and blind spots", icon: EyeOff },
  { title: "No maintenance plan", icon: RefreshCcw }
];

export const services = [
  { title: "Camera Systems", icon: Camera, copy: "Video surveillance, doorbell cameras, NVRs, cloud cameras, remote viewing, and troubleshooting." },
  { title: "Smart Locks & Access Control", icon: KeyRound, copy: "Keypads, smart locks, employee access, gate access, scheduled permissions, and app setup." },
  { title: "Wi-Fi & Network Support", icon: Network, copy: "Router, mesh, access point, PoE switch, and connectivity support for security devices." },
  { title: "Maintenance Plans", icon: ShieldCheck, copy: "Routine checkups, battery replacement, firmware updates, camera health checks, and priority support." },
  { title: "Jobsite Security", icon: Construction, copy: "Temporary camera support, contractor property monitoring, material theft prevention, and site visibility." },
  { title: "System Rescue", icon: Wrench, copy: "Fix existing camera, alarm, Wi-Fi, and smart property systems that were poorly installed or neglected." }
];

export const plans = [
  { name: "Starter Checkup", audience: "For homes or small offices.", cta: "Book Checkup", features: ["Camera and Wi-Fi inspection", "App access check", "Battery check", "Blind spot review", "Basic recommendations"] },
  { name: "Property Care", audience: "For homeowners and small businesses.", cta: "Request Plan", featured: true, features: ["Quarterly system checkups", "Battery replacement reminders", "Camera health review", "Firmware/update support", "Priority troubleshooting"] },
  { name: "Business Guardian", audience: "For businesses, contractors, churches, warehouses, and multi-device properties.", cta: "Get Business Quote", features: ["Monthly or quarterly maintenance", "Offline camera checks", "Access control support", "Network/security device review", "Incident support", "Priority service"] }
];

export const industries = [
  { title: "Homes", icon: Home },
  { title: "Small Businesses", icon: Store },
  { title: "Retail Stores", icon: Store },
  { title: "Offices", icon: Building2 },
  { title: "Churches", icon: Church },
  { title: "Warehouses", icon: Warehouse },
  { title: "Contractors & Jobsites", icon: Construction },
  { title: "Airbnb / Rental Properties", icon: DoorOpen }
];

export const serviceDetails = [
  { title: "Security Camera Installation", icon: Camera, copy: "Clean camera design for homes, storefronts, offices, warehouses, rentals, and commercial properties. Sentinel plans camera placement around visibility, recording reliability, Wi-Fi or PoE connectivity, and long-term service access." },
  { title: "Existing Camera Troubleshooting", icon: Wrench, copy: "Camera troubleshooting for systems that went offline, lost remote viewing, stopped recording, or never worked correctly after installation." },
  { title: "Smart Lock Setup", icon: KeyRound, copy: "Smart lock installer services for keypads, app-based locks, user codes, schedules, rental access, and owner training." },
  { title: "Access Control", icon: LockKeyhole, copy: "Access control installation and support for doors, gates, offices, employee permissions, churches, and small commercial spaces." },
  { title: "Wi-Fi & Network Support", icon: Router, copy: "Wi-Fi camera support, router cleanup, mesh planning, access points, PoE switch review, and network checks for security devices." },
  { title: "NVR / Cloud Recording Support", icon: MonitorCheck, copy: "Recording system review for NVR storage, cloud camera plans, playback access, retention settings, failed drives, and full storage." },
  { title: "Battery Replacement & Device Health", icon: BatteryWarning, copy: "Battery checks, replacement reminders, firmware updates, device health reviews, and practical maintenance for smart property technology." },
  { title: "Jobsite Security Support", icon: Construction, copy: "Jobsite security cameras and temporary visibility support for contractors who need to reduce theft, confirm activity, and protect materials." },
  { title: "Maintenance Memberships", icon: ShieldCheck, copy: "Commercial security maintenance and recurring property technology maintenance plans that keep systems useful after installation." },
  { title: "Security System Cleanup", icon: CheckCircle2, copy: "Security system repair and cleanup for messy apps, abandoned accounts, poor cable paths, bad angles, weak passwords, and unreliable alerts." }
];

export const industryDetails = [
  ["Homeowners", "Smart home security installer support for cameras, smart locks, doorbells, Wi-Fi coverage, app access, and routine security camera maintenance."],
  ["Small businesses", "Business security systems that help owners see what happened, manage access, keep cameras online, and avoid surprise outages."],
  ["Contractors", "Jobsite security cameras, temporary system support, visibility into materials, and maintenance for changing construction environments."],
  ["Retail", "Camera placement, recording review, access management, and Wi-Fi camera support for customer-facing spaces with daily activity."],
  ["Offices", "Access control installation, smart locks, employee entry setup, common-area camera systems, and technology cleanup."],
  ["Churches", "Practical property protection for sanctuaries, offices, classrooms, parking areas, and shared access needs."],
  ["Warehouses", "Commercial security maintenance for larger camera layouts, blind spots, access points, recording health, and network reliability."],
  ["Rentals / Airbnb", "Smart locks, owner access, Wi-Fi checks, exterior cameras where appropriate, and troubleshooting between guest stays."]
];
