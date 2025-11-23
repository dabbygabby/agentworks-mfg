export const libraryData = {
    finance: [
        { name: "Tally Prime", type: "XML/ODBC", capability: "Auto-Voucher Entry, Ledger Analysis" },
        { name: "SAP S/4HANA", type: "OData API", capability: "Purchase Order Sync, Inventory Check" },
        { name: "BUSY Accounting", type: "REST API", capability: "GST Billing & Inventory Sync" },
        { name: "Marg ERP 9+", type: "MargBooks API", capability: "Pharma/Retail Batch Tracking" },
        { name: "Oracle NetSuite", type: "SuiteTalk API", capability: "Multi-subsidiary Financial Rollups" },
        { name: "Microsoft Dynamics 365", type: "Dataverse API", capability: "End-to-end Supply Chain Visibility" },
        { name: "Zoho Books", type: "REST API", capability: "Invoice Automation & Bank Reconciliation" },
        { name: "ClearTax", type: "GST API", capability: "Auto-Filing GSTR-1 & E-Way Bills" }
    ],
    engineering: [
        { name: "AutoCAD", type: "Forge/Platform API", capability: "Extract 2D Geometry for Cutting Estimates" },
        { name: "SolidWorks", type: "API / File Parsing", capability: "BOM Extraction from 3D Assemblies" },
        { name: "CATIA", type: "CAA V5 API", capability: "Complex Surface Area Calculation" },
        { name: "Autodesk Revit", type: "Web API", capability: "Material Quantity Takeoffs for Construction" },
        { name: "Fusion 360", type: "API", capability: "CAM Toolpath Data & Machine Time Estimation" }
    ],
    sales: [
        { name: "Zoho CRM", type: "REST API", capability: "Lead Qualification & Status Updates" },
        { name: "Salesforce", type: "Apex/REST API", capability: "Enterprise Deal Flow Automation" },
        { name: "HubSpot", type: "API", capability: "Email Logging & Deal Stage Movement" },
        { name: "Telecrm", type: "API", capability: "WhatsApp-Lead Sync for Indian Markets" },
        { name: "LeadSquared", type: "API", capability: "Field Sales Tracking & Automation" }
    ],
    ops: [
        { name: "Zoho Inventory", type: "API", capability: "Stock Adjustments & SKU Tracking" },
        { name: "Unicommerce", type: "API", capability: "E-commerce Order Sync (for D2C brands)" },
        { name: "Greythr", type: "API", capability: "Shift Scheduling & Attendance Sync" },
        { name: "Keka HR", type: "API", capability: "Workforce Allocation & Payroll Inputs" },
        { name: "Monday.com", type: "GraphQL API", capability: "Production Project Tracking" }
    ]
};

// Data for Core Four
export const coreFour = [
    {
        name: "Tally Prime / ERP 9",
        connect: "Direct XML / ODBC Bridge",
        what: "Agents can auto-post purchase vouchers, read ledger balances, and generate e-invoices without a human opening Tally.",
        useCase: "Photo-to-Tally expense entry."
    },
    {
        name: "WhatsApp (Meta API)",
        connect: "Official Business API (BSP)",
        what: "Turns WhatsApp into your command center. Staff send voice notes and photos; Agents reply with data and updates.",
        useCase: "Shop floor updates and sales approvals."
    },
    {
        name: "Microsoft Excel / Google Sheets",
        connect: "Native API & File Parser",
        what: "Extracts data from locked spreadsheets or writes live reporting data into shared sheets.",
        useCase: "Reading messy inventory trackers or production logs."
    },
    {
        name: "Email (Outlook / Gmail)",
        connect: "IMAP / Graph API",
        what: "Monitors specific inboxes (e.g., sales@company.com) for RFQs and invoices.",
        useCase: "Auto-detecting new purchase orders from customers."
    }
];

// Data for Library
export const categories = [
    { id: 'finance', name: 'Finance & ERP' },
    { id: 'engineering', name: 'Engineering & Design' },
    { id: 'sales', name: 'Sales & CRM' },
    { id: 'ops', name: 'Shop Floor & Ops' }
];
