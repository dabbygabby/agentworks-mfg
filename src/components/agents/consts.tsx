import { LucideIcon, Calendar, ClipboardList, DollarSign, ShieldCheck, RefreshCw, AlertTriangle, ShoppingCart, Activity, Calculator, Cpu, TrendingUp, Layers, FileText, BarChart3 } from 'lucide-react';

export interface Agent {
    name: string;
    role: string;
    department: string;
    industries: string[];
    mission: string;
    capabilities: {
        title: string;
        description: string;
    }[];
    impact: string;
    icon: LucideIcon;
    link: string;
}

export const agents: Agent[] = [
    // Heavy Machinery & OEM
    {
        name: 'Production Scheduler',
        role: 'The Control Tower',
        department: 'Operations',
        industries: ['Heavy Machinery', 'Automotive', 'Aerospace'],
        mission: 'Acts as the central nervous system for your production line, bridging the gap between planned schedules and floor reality.',
        capabilities: [
            { title: 'Input', description: 'Processes voice updates from supervisors (e.g., "Chassis #402, Welding complete").' },
            { title: 'Update', description: 'Instantly updates the master schedule and recalculates global completion dates.' },
            { title: 'Alert', description: 'Triggers alerts to the Plant Head if a stage exceeds its planned duration.' }
        ],
        impact: 'Real-Time Gantt Charts. Absolute visibility over production status without meetings.',
        icon: Calendar,
        link: '/agents/job-scheduling'
    },
    {
        name: 'BOM Kitting Assistant',
        role: 'Shortage Prevention',
        department: 'Procurement',
        industries: ['Heavy Machinery', 'Electronics', 'Automotive'],
        mission: 'Ensures that no assembly line ever stalls because of a missing ₹10 part.',
        capabilities: [
            { title: 'Scan', description: 'Checks inventory for every child part in the BOM before a Work Order is released.' },
            { title: 'Flag', description: 'Identifies shortages immediately (e.g., "Missing 12V Solenoid").' },
            { title: 'Procure', description: 'Auto-triggers purchase requests to ensure parts arrive before assembly begins.' }
        ],
        impact: 'Zero Stalled Lines. Proactive shortage management.',
        icon: ClipboardList,
        link: '/agents/kitting'
    },
    {
        name: 'Project Cost Tracker',
        role: 'Margin Guardian',
        department: 'Finance',
        industries: ['Heavy Machinery', 'Construction', 'EPC'],
        mission: 'Tracks the true profitability of every machine you build, in real-time.',
        capabilities: [
            { title: 'Track', description: 'Allocates labor hours and consumable costs directly to specific Job IDs.' },
            { title: 'Compare', description: 'Constantly benchmarks "Actual Cost vs. Quoted Cost."' },
            { title: 'Report', description: 'Calculates the exact profit margin for specific machines upon completion.' }
        ],
        impact: 'Margin Protection. Granular visibility into where profit is leaking.',
        icon: DollarSign,
        link: '/agents/commercial'
    },

    // Pharma & Chemicals
    {
        name: 'Batch Compliance Auditor',
        role: 'The 24/7 Auditor',
        department: 'Quality',
        industries: ['Pharma', 'Chemicals', 'Food & Beverage'],
        mission: 'Automates quality assurance and ensures you are audit-ready every single day.',
        capabilities: [
            { title: 'Ingest', description: 'Reads batch labels, Certificates of Analysis (CoAs), and GRNs via photo.' },
            { title: 'Verify', description: 'Instantly cross-checks received material against PO specs and expiry constraints.' },
            { title: 'Trace', description: 'Creates a digital thread to trace every batch to its final customer in seconds.' }
        ],
        impact: 'Audit Defense. 100% compliance without the chaos of paperwork.',
        icon: ShieldCheck,
        link: '/agents/compliance'
    },
    {
        name: 'Distributor Refill Manager',
        role: 'Recurring Revenue Manager',
        department: 'Sales',
        industries: ['Pharma', 'Chemicals', 'Distribution'],
        mission: 'Ensures you never miss a refill order from your distributors.',
        capabilities: [
            { title: 'Predict', description: 'Analyzes buying patterns to forecast needs (e.g., "Client X needs 500L every 20 days").' },
            { title: 'Nudge', description: 'Proactively contacts distributors via WhatsApp to book orders before they run out.' },
            { title: 'Protect', description: 'Quotes based on current raw material indices to protect margins from volatility.' }
        ],
        impact: 'Revenue Velocity. Maximizes recurring revenue and retention.',
        icon: RefreshCw,
        link: '/agents/sales-pharma'
    },
    {
        name: 'Expiry Watchdog',
        role: 'Shelf-Life Guardian',
        department: 'Stores',
        industries: ['Pharma', 'Chemicals', 'Food & Beverage'],
        mission: 'Prevents dead stock and wastage of shelf-life-sensitive materials.',
        capabilities: [
            { title: 'Monitor', description: 'Continuously scans inventory age across the warehouse.' },
            { title: 'Alert', description: 'Triggers "Use First" alerts to production for batches nearing expiry.' },
            { title: 'Reconcile', description: 'Automates "Physical vs. System" stock checks using voice notes.' }
        ],
        impact: 'Zero Expired Inventory. Drastic reduction in material waste.',
        icon: AlertTriangle,
        link: '/agents/inventory-pharma'
    },

    // Packaging & Printing
    {
        name: 'Raw Material Negotiator',
        role: 'The Ruthless Buyer',
        department: 'Purchase',
        industries: ['Packaging', 'Printing', 'Textiles'],
        mission: 'Automates the buying process to lock in the best raw material rates instantly.',
        capabilities: [
            { title: 'Ingest', description: 'Reads vendor quotes from Email and WhatsApp instantly.' },
            { title: 'Compare', description: 'Auto-compares quotes against historical prices and live market indices.' },
            { title: 'Negotiate', description: 'Automates follow-ups to negotiate better rates (e.g., "Your quote is 2% higher than last time").' }
        ],
        impact: 'Cost Leadership. Locks in prices faster than humanly possible.',
        icon: ShoppingCart,
        link: '/agents/procurement'
    },
    {
        name: 'Print Floor Tracker',
        role: 'Live Floor Visibility',
        department: 'Production',
        industries: ['Packaging', 'Printing', 'Manufacturing'],
        mission: 'Eliminates the need to chase floor supervisors for job status updates.',
        capabilities: [
            { title: 'Input', description: 'Processes voice updates from operators (e.g., "Job 105, Printing done").' },
            { title: 'Track', description: 'Updates the central dashboard and flags schedule delays immediately.' },
            { title: 'Notify', description: 'Alerts the dispatch team automatically when a job hits "Finished Goods."' }
        ],
        impact: 'Total Visibility. Know exactly where every job is, instantly.',
        icon: Activity,
        link: '/agents/operations'
    },
    {
        name: 'Box Costing Calculator',
        role: 'Precision Estimator',
        department: 'Sales',
        industries: ['Packaging', 'Printing'],
        mission: 'Generates accurate estimates that protect razor-thin margins.',
        capabilities: [
            { title: 'Calculate', description: 'Calculates exact paper tonnage and ink coverage from box dimensions.' },
            { title: 'Optimize', description: 'Suggests the optimal reel size or sheet layout to minimize wastage.' },
            { title: 'Quote', description: 'Generates customer-ready quotes that account for current material costs.' }
        ],
        impact: 'Secure Margins. Confidence that every quote is profitable.',
        icon: Calculator,
        link: '/agents/costing'
    },

    // Electronics & EMS
    {
        name: 'Component Sourcing Engine',
        role: 'The Automated Buyer',
        department: 'Purchase',
        industries: ['Electronics', 'Automotive', 'Aerospace'],
        mission: 'Solves the "Golden Screw" problem by automating component sourcing for massive BOMs.',
        capabilities: [
            { title: 'Scan', description: 'Ingests BOMs (Excel/PDF) and identifies every unique Part Number.' },
            { title: 'Search', description: 'Checks availability and pricing across approved vendors and APIs instantly.' },
            { title: 'Compare', description: 'Highlights the lowest price and fastest delivery automatically.' }
        ],
        impact: 'Clear-to-Build. Reduces sourcing time from days to minutes.',
        icon: Cpu,
        link: '/agents/sourcing'
    },
    {
        name: 'Account Upsell Assistant',
        role: 'Revenue Growth',
        department: 'Sales',
        industries: ['Electronics', 'Distribution', 'SaaS'],
        mission: 'Identifies upsell opportunities within your existing account base.',
        capabilities: [
            { title: 'Analyze', description: 'Reviews order history to find purchasing patterns (e.g., "Buy A -> Usually Need B").' },
            { title: 'Engage', description: 'Nudges clients via WhatsApp for potential upsells.' },
            { title: 'Qualify', description: 'Filters incoming leads to prioritize high-value OEM contracts.' }
        ],
        impact: 'Upsell Autopilot. Increases Lifetime Value (LTV) without adding sales headcount.',
        icon: TrendingUp,
        link: '/agents/sales-ems'
    },
    {
        name: 'Component Kitting Manager',
        role: 'Store Control',
        department: 'Stores',
        industries: ['Electronics', 'Manufacturing'],
        mission: 'Manages component inventory with "Backflush" logic.',
        capabilities: [
            { title: 'Kit', description: 'Checks if all components are physically available before production starts.' },
            { title: 'Alert', description: 'Flags shortages before they cause line stoppages.' },
            { title: 'Consume', description: 'Automatically deducts components from stock when finished units are packed.' }
        ],
        impact: 'Real-Time Kitting. Prevents production stops due to missing parts.',
        icon: Layers,
        link: '/agents/inventory-ems'
    },

    // Sheet Metal & Fabrication
    {
        name: 'CAD Quote Generator',
        role: 'Auto-Quoting',
        department: 'Sales',
        industries: ['Sheet Metal', 'Fabrication', 'Machining'],
        mission: 'Automates the complex math of quoting custom fabrication jobs.',
        capabilities: [
            { title: 'Ingest', description: 'Accepts PDF, DXF, and CAD files via Email or WhatsApp.' },
            { title: 'Analyze', description: 'Instantly extracts geometry (surface area, perimeter, bends/holes).' },
            { title: 'Price', description: 'Connects to live steel rates and machine-hour costs.' }
        ],
        impact: 'Quote Speed. Quote in minutes, not days, to win more bids.',
        icon: FileText,
        link: '/agents/commercial-sheet'
    },
    {
        name: 'Scrap Recovery Tracker',
        role: 'Scrap & Stock',
        department: 'Stores',
        industries: ['Sheet Metal', 'Fabrication'],
        mission: 'Turns invisible scrap into visible profit.',
        capabilities: [
            { title: 'Tracking', description: 'Calculates exact scrap percentage when a job is nested.' },
            { title: 'Re-use', description: 'Identifies and logs usable offcuts back into inventory (e.g., "Remnant Plate").' },
            { title: 'Procurement', description: 'Auto-alerts purchasing when specific sheet sizes hit minimum levels.' }
        ],
        impact: 'Profit from Scrap. precise material utilization tracking.',
        icon: BarChart3,
        link: '/agents/inventory-sheet'
    },
    {
        name: 'Fabrication Floor Monitor',
        role: 'Shop Floor Visibility',
        department: 'Production',
        industries: ['Sheet Metal', 'Fabrication', 'Manufacturing'],
        mission: 'Tracks fabrication jobs through the shop without paperwork.',
        capabilities: [
            { title: 'Input', description: 'Operators dictate updates via voice notes (e.g., "Bending complete").' },
            { title: 'Action', description: 'Updates Master Schedule and notifies Sales immediately.' },
            { title: 'Result', description: 'Real-time status on every job, accessible from your phone.' },
        ],
        impact: 'Control Tower. Total visibility over the fabrication floor.',
        icon: Activity,
        link: '/agents/production-sheet'
    }
];
