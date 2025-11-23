export const libraryData = {
    finance: [
        { name: "Tally Prime", type: "XML/ODBC", capability: "Auto-Voucher Entry, Ledger Analysis", icon: "tally-prime.png" },
        { name: "SAP S/4HANA", type: "OData API", capability: "Purchase Order Sync, Inventory Check", icon: "sap.png" },
        { name: "BUSY Accounting", type: "REST API", capability: "GST Billing & Inventory Sync", icon: "busy.png" },
        { name: "Marg ERP 9+", type: "MargBooks API", capability: "Pharma/Retail Batch Tracking", icon: "marg.png" },
        { name: "Oracle NetSuite", type: "SuiteTalk API", capability: "Multi-subsidiary Financial Rollups", icon: "netsuite.png" },
        { name: "Microsoft Dynamics 365", type: "Dataverse API", capability: "End-to-end Supply Chain Visibility", icon: "dynamics-icon.png" },
        { name: "Zoho Books", type: "REST API", capability: "Invoice Automation & Bank Reconciliation", icon: "zoho.png" },
        { name: "ClearTax", type: "GST API", capability: "Auto-Filing GSTR-1 & E-Way Bills", icon: "cleartax.png" }
    ],
    engineering: [
        { name: "AutoCAD", type: "Forge/Platform API", capability: "Extract 2D Geometry for Cutting Estimates", icon: "autocad.png" },
        { name: "SolidWorks", type: "API / File Parsing", capability: "BOM Extraction from 3D Assemblies", icon: "solidworks.png" },
        { name: "CATIA", type: "CAA V5 API", capability: "Complex Surface Area Calculation", icon: "catia.png" },
        { name: "Autodesk Revit", type: "Web API", capability: "Material Quantity Takeoffs for Construction", icon: "revit.png" },
        { name: "Fusion 360", type: "API", capability: "CAM Toolpath Data & Machine Time Estimation", icon: "fusion-360.png" }
    ],
    sales: [
        { name: "Zoho CRM", type: "REST API", capability: "Lead Qualification & Status Updates", icon: "zoho-crm.png" },
        { name: "Salesforce", type: "Apex/REST API", capability: "Enterprise Deal Flow Automation", icon: "salesforce.png" },
        { name: "HubSpot", type: "API", capability: "Email Logging & Deal Stage Movement", icon: "hubspot.png" },
        { name: "Telecrm", type: "API", capability: "WhatsApp-Lead Sync for Indian Markets", icon: "telecrm.png" },
        { name: "LeadSquared", type: "API", capability: "Field Sales Tracking & Automation", icon: "lead-squared.png" }
    ],
    ops: [
        { name: "Zoho Inventory", type: "API", capability: "Stock Adjustments & SKU Tracking", icon: "zoho-inventory.png" },
        { name: "Unicommerce", type: "API", capability: "E-commerce Order Sync (for D2C brands)", icon: "unicommerce.png" },
        { name: "Greythr", type: "API", capability: "Shift Scheduling & Attendance Sync", icon: "greythr.png" },
        { name: "Keka HR", type: "API", capability: "Workforce Allocation & Payroll Inputs", icon: "keka-hr.png" },
        { name: "Monday.com", type: "GraphQL API", capability: "Production Project Tracking", icon: "monday.png" }
    ]
};

// Data for Core Four
export const coreFour = [
    {
        name: "Tally Prime / ERP 9",
        connect: "Direct XML / ODBC Bridge",
        what: "Agents can auto-post purchase vouchers, read ledger balances, and generate e-invoices without a human opening Tally.",
        useCase: "Photo-to-Tally expense entry.",
        icon: "tally-prime.png"
    },
    {
        name: "WhatsApp (Meta API)",
        connect: "Official Business API (BSP)",
        what: "Turns WhatsApp into your command center. Staff send voice notes and photos; Agents reply with data and updates.",
        useCase: "Shop floor updates and sales approvals.",
        icon: "whatsapp-icon.png"
    },
    {
        name: "Microsoft Excel / Google Sheets",
        connect: "Native API & File Parser",
        what: "Extracts data from locked spreadsheets or writes live reporting data into shared sheets.",
        useCase: "Reading messy inventory trackers or production logs.",
        icon: "excel.png"
    },
    {
        name: "Email (Outlook / Gmail)",
        connect: "IMAP / Graph API",
        what: "Monitors specific inboxes (e.g., sales@company.com) for RFQs and invoices.",
        useCase: "Auto-detecting new purchase orders from customers.",
        icon: "outlook.png"
    }
];

// Data for Library
export const categories = [
    { id: 'finance', name: 'Finance & ERP' },
    { id: 'engineering', name: 'Engineering & Design' },
    { id: 'sales', name: 'Sales & CRM' },
    { id: 'ops', name: 'Shop Floor & Ops' }
];
