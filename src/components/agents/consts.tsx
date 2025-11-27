import { LucideIcon, Calendar, ClipboardList, DollarSign, ShieldCheck, RefreshCw, AlertTriangle, ShoppingCart, Activity, Calculator, Cpu, TrendingUp, Layers, FileText, BarChart3, Package, Ruler } from 'lucide-react';

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
        name: 'The Quality Auditor',
        role: 'The Zero-Defect Guardian',
        department: 'Quality / Store',
        // Now inclusive of all your target sectors
        industries: ['Fabrication', 'Automotive', 'Pharma', 'General Mfg'],
        // Mission: Focus on "Rejection Prevention" which hurts everyone
        mission: 'Prevents costly rejections by verifying raw material specs before they ever reach your machines.',
        capabilities: [
            {
                title: 'Ingest',
                // "MTC" for steel guys, "Lab Report" for general, "CoA" for pharma
                description: 'Reads Mill Test Certificates (MTC), Lab Reports, and Heat Numbers via photo.'
            },
            {
                title: 'Verify',
                // The universal check: Did I get what I ordered?
                description: 'Instantly matches received Material Grade (e.g., SS304) and Specs against the PO.'
            },
            {
                title: 'Trace',
                // Solves the "Customer Complaint" panic
                description: 'Creates a searchable "Digital Passport" for every batch. Find any test report in 3 seconds.'
            }
        ],
        impact: 'Audit Defense. Pass customer inspections instantly without digging through file cabinets.',
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
        name: 'The Precision Estimator', // Renamed from "CAD Quote Generator"
        role: 'Instant Costing',
        department: 'Sales',
        // Expanded industries to show it's not just for metal
        industries: ['Fabrication', 'Packaging', 'Injection Molding', 'General Mfg'],
        // Focus on "Variables" and "Logic" instead of just "Math"
        mission: 'Replaces your complex Excel pricing sheets with an instant AI calculator.',
        capabilities: [
            {
                title: 'Ingest',
                // Now includes "Voice" and "Text parameters" for non-CAD users
                description: 'Accepts PDF drawings, Excel BOMs, or simple voice parameters (e.g., "1000 boxes, 5-ply, 12x12").'
            },
            {
                title: 'Calculate',
                // Replaced "Geometry" with "Variables"
                description: 'Applies your specific formulas: Tonnage, Cycle Time, Waste %, or Cut-Length.'
            },
            {
                title: 'Price',
                description: 'Connects to live raw material rates (Steel/Paper/Granules) to protect margins.'
            }
        ],
        impact: 'Quote Confidence. Eliminate "Guestimates" and lock in profitable margins instantly.',
        icon: FileText, // Or Calculator icon
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
    },
    {
        name: 'The Munim',
        role: 'Finance Automator',
        department: 'Finance',
        industries: ['Manufacturing', 'Trading', 'Retail'],
        mission: 'Eliminates manual data entry by reading invoices and automatically posting them to Tally.',
        capabilities: [
            { title: 'Ingest', description: 'Reads invoices from WhatsApp, Email, or Scans instantly.' },
            { title: 'Verify', description: 'Checks GSTIN, calculates taxes, and verifies totals against POs.' },
            { title: 'Post', description: 'Enters the voucher directly into Tally Prime without human intervention.' }
        ],
        impact: 'Zero Backlog. Zero Data Entry Errors. Real-time financial visibility.',
        icon: FileText,
        link: '/agents/finance'
    },
    {
        name: 'The Watchdog',
        role: 'Inventory Guardian',
        department: 'Stores',
        industries: ['Manufacturing', 'Warehousing'],
        mission: 'Tracks stock levels in real-time and predicts shortages before they stop production.',
        capabilities: [
            { title: 'Track', description: 'Updates stock levels via voice notes or barcode scans.' },
            { title: 'Predict', description: 'Analyzes consumption rates to forecast when you will run out.' },
            { title: 'Alert', description: 'Notifies procurement immediately when stock dips below safety levels.' }
        ],
        impact: 'No Line Stoppages. Optimized inventory carrying costs.',
        icon: Package,
        link: '/agents/inventory'
    },
    {
        name: 'The CAD Estimator',
        role: 'CAD Specialist',
        department: 'Sales',
        industries: ['Sheet Metal', 'Fabrication', 'Laser Cutting'],
        mission: 'Quotes in 60 seconds by analyzing drawing physics, not just guessing.',
        capabilities: [
            {
                title: 'Ingest',
                description: 'Reads DXF, DWG, and PDF files directly from WhatsApp or Email.'
            },
            {
                title: 'Physics',
                description: 'Calculates Cut Length, Pierce Count, and Nitrogen cost instantly.'
            },
            {
                title: 'Price',
                description: 'Connects to your live Steel Rates to ensure you never quote a loss.'
            }
        ],
        impact: 'Quote Velocity. Win the bid while your competitor is still opening Excel.',
        icon: Ruler, // Ensure 'Ruler' is imported from lucide-react
        link: '/agents/sheet-metal-quoting'
    },

    // 2. UPDATED AGENT (Replace 'Scrap Recovery Tracker')
    // Matches "The Scrap Guardian"
    {
        name: 'The Scrap Guardian', // Renamed from Scrap Recovery Tracker
        role: 'Inventory & Offcuts',
        department: 'Stores',
        industries: ['Sheet Metal', 'Fabrication'],
        mission: 'Turns invisible scrap into visible profit by tracking every offcut.',
        capabilities: [
            {
                title: 'Track',
                description: 'Calculates exact scrap percentage generated after every Nesting job.'
            },
            {
                title: 'Recover',
                description: 'Identifies usable offcuts (e.g. >500mm) and logs them back into Tally as stock.'
            },
            {
                title: 'Alert',
                description: 'Notifies Design Team to "Use Offcuts First" before cutting a fresh sheet.'
            }
        ],
        impact: 'Profit from Waste. Reduces raw material purchase by 10-15%.',
        icon: BarChart3,
        link: '/agents/inventory-sheet'
    },

    // 3. UPDATED AGENT (Replace 'Fabrication Floor Monitor')
    // Matches "The Floor Commander"
    {
        name: 'The Floor Commander', // Renamed from Fabrication Floor Monitor
        role: 'Production Visibility',
        department: 'Production',
        industries: ['Sheet Metal', 'Fabrication', 'Manufacturing'],
        mission: 'Tracks fabrication jobs through the shop without paperwork or meetings.',
        capabilities: [
            {
                title: 'Listen', // Changed from 'Input' to match marketing
                description: 'Operators send voice notes: "Job 502, Bending done." No typing required.'
            },
            {
                title: 'Update', // Changed from 'Action'
                description: 'Updates the Master Schedule and identifies bottlenecks instantly.'
            },
            {
                title: 'Notify', // Changed from 'Result' to be more active
                description: 'Alerts Sales immediately via WhatsApp so they can update the client.'
            }
        ],
        impact: 'Total Visibility. Know exactly where every job is, instantly.',
        icon: Activity,
        link: '/agents/production-sheet'
    }
];
