import React, { useState, useEffect, useRef } from 'react';
import {
    ArrowLeft, Bell, ChevronRight, Package, Truck,
    ClipboardList, Settings, Activity, Wrench, AlertTriangle,
    CheckCircle, Clock, Thermometer, Droplet, Gauge, Calendar
} from 'lucide-react';
import Chart from 'chart.js/auto';

// --- Custom Color Palette (Matching your config) ---
const colors = {
    brand: { primary: '#1E40AF', accent: '#3B82F6', light: '#EFF6FF' },
    status: { success: '#10B981', warning: '#F59E0B', alert: '#EF4444' },
    text: { primary: '#111827', secondary: '#6B7280', muted: '#9CA3AF' }
};

// --- Reusable Chart Component ---
const CapacityChart = ({ data, color, id }: any) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        //@ts-expect-error no error
        if (chartInstance.current) chartInstance.current.destroy();

        //@ts-expect-error no error
        const ctx = chartRef.current.getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 0, 240);
        gradient.addColorStop(0, `${color}33`);
        gradient.addColorStop(1, `${color}00`);

        //@ts-expect-error no error
        chartInstance.current = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
                datasets: [
                    {
                        label: '85% Threshold',
                        data: [85, 85, 85, 85, 85, 85],
                        borderColor: '#9CA3AF',
                        borderDash: [5, 5],
                        borderWidth: 1.5,
                        pointRadius: 0,
                        fill: false,
                    },
                    {
                        label: 'Utilization',
                        data: data,
                        borderColor: color,
                        backgroundColor: gradient,
                        fill: 'origin',
                        tension: 0.3,
                        pointRadius: 4,
                        pointBackgroundColor: color
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    x: { grid: { display: false } },
                    //@ts-expect-error no error
                    y: { beginAtZero: true, max: 100, grid: { borderDash: [4, 4] } }
                }
            }
        });

        return () => {
            //@ts-expect-error no error
            if (chartInstance.current) chartInstance.current.destroy();
        };
    }, [data, color]);

    return <canvas ref={chartRef} />;
};

// --- Tab Views ---

const ProductionView = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 animate-fadeIn">
        {/* Option A */}
        <div className="flex flex-col space-y-4 sm:space-y-6">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 sm:p-6">
                <h2 className="text-base sm:text-lg font-bold text-gray-900">OPTION A: INTERNAL HEAVY</h2>
                <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4">
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-xs sm:text-sm font-medium">● Internal: 6,00,000 units</span>
                            <span className="text-xs sm:text-sm text-gray-500">86%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '86%' }}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-xs sm:text-sm font-medium">● Outsourced: 1,00,000 units</span>
                            <span className="text-xs sm:text-sm text-gray-500">14%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '14%' }}></div>
                        </div>
                    </div>
                    <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                        <span className="text-sm sm:text-base font-semibold">Peak Capacity: <span className="text-yellow-500">95% ⚠️</span></span>
                        <span className="text-xs sm:text-sm text-gray-500">5 months production</span>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 sm:p-6">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-3 sm:mb-4">Capacity Impact (6 Months)</h3>
                <div className="h-48 sm:h-60">
                    <CapacityChart data={[75, 88, 91, 95, 91, 85]} color="#F59E0B" id="chartA" />
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 sm:p-6">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900">Option A: Cost Analysis</h3>
                <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4">
                    <div className="flex justify-between border-b pb-2">
                        <span className="text-sm">Internal</span>
                        <span className="font-mono text-sm sm:text-base text-green-600">₹48,00,000</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                        <span className="text-sm">Outsourced</span>
                        <span className="font-mono text-sm sm:text-base">₹9,60,000</span>
                    </div>
                    <div className="flex justify-between items-baseline mt-1">
                        <span className="text-sm sm:text-base font-bold">TOTAL COST:</span>
                        <span className="text-xl sm:text-2xl font-bold text-gray-900">₹57,60,000</span>
                    </div>
                    <div className="text-center p-2 bg-green-50 rounded-md text-green-600 font-medium text-xs sm:text-sm">
                        💰 Lowest Cost Option
                    </div>
                </div>
            </div>

            <button className="w-full h-11 sm:h-12 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition-colors text-sm sm:text-base">
                Draft Reply with Option A
            </button>
        </div>

        {/* Option B */}
        <div className="flex flex-col space-y-4 sm:space-y-6">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 sm:p-6">
                <h2 className="text-base sm:text-lg font-bold text-gray-900">OPTION B: BALANCED</h2>
                <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4">
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-xs sm:text-sm font-medium">● Internal: 4,00,000 units</span>
                            <span className="text-xs sm:text-sm text-gray-500">57%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '57%' }}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-xs sm:text-sm font-medium">● Outsourced: 3,00,000 units</span>
                            <span className="text-xs sm:text-sm text-gray-500">43%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '43%' }}></div>
                        </div>
                    </div>
                    <div className="pt-3 sm:pt-4 flex items-center justify-between">
                        <span className="text-sm sm:text-base font-semibold">Peak Capacity: <span className="text-green-500">85% ✅</span></span>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 sm:p-6">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-3 sm:mb-4">Capacity Impact (6 Months)</h3>
                <div className="h-48 sm:h-60">
                    <CapacityChart data={[75, 85, 85, 85, 78, 72]} color="#10B981" id="chartB" />
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 sm:p-6">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900">Option B: Cost Analysis</h3>
                <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4">
                    <div className="flex justify-between border-b pb-2">
                        <span className="text-sm">Internal</span>
                        <span className="font-mono text-sm sm:text-base text-green-600">₹32,64,000</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                        <span className="text-sm">Outsourced</span>
                        <span className="font-mono text-sm sm:text-base text-yellow-600">₹26,40,000</span>
                    </div>
                    <div className="flex justify-between items-baseline mt-1">
                        <span className="text-sm sm:text-base font-bold">TOTAL COST:</span>
                        <span className="text-xl sm:text-2xl font-bold text-gray-900">₹59,04,000</span>
                    </div>
                    <div className="text-center p-2 bg-yellow-50 rounded-md text-yellow-600 font-medium text-xs sm:text-sm">
                        ⚖️ Higher Cost (+₹1.44L) but Lower Risk
                    </div>
                </div>
            </div>

            <button className="w-full h-11 sm:h-12 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition-colors text-sm sm:text-base">
                Draft Reply with Option B
            </button>
        </div>
    </div>
);

const StockProductsView = () => (
    <div className="grid grid-cols-1 gap-4 sm:gap-6 animate-fadeIn">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-2">
                <h2 className="text-base sm:text-lg font-bold text-gray-900">Current Stock Levels</h2>
                <span className="px-2 sm:px-3 py-1 bg-green-100 text-green-700 rounded-full text-[10px] sm:text-xs font-bold">UPDATED 2 MINS AGO</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                {[
                    { name: 'Sterile Gloves (L)', qty: '124,000', status: 'Healthy', color: 'green' },
                    { name: 'Sterile Gloves (M)', qty: '45,000', status: 'Low Stock', color: 'yellow' },
                    { name: 'Surgical Masks', qty: '800,000', status: 'Overstock', color: 'blue' },
                ].map((item, i) => (
                    <div key={i} className="p-3 sm:p-4 border rounded-lg flex flex-col items-center text-center">
                        <Package className={`w-6 h-6 sm:w-8 sm:h-8 text-${item.color}-500 mb-2`} />
                        <div className="text-xl sm:text-2xl font-bold text-gray-900">{item.qty}</div>
                        <div className="text-xs sm:text-sm text-gray-500">{item.name}</div>
                        <div className={`mt-2 text-[10px] sm:text-xs font-bold px-2 py-1 rounded bg-${item.color}-50 text-${item.color}-700`}>
                            {item.status}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const RMPlanningView = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 animate-fadeIn">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 sm:p-6">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Raw Material Requirements (VivaLife Order)</h2>
            <ul className="space-y-3 sm:space-y-4">
                <li className="flex justify-between items-center p-2 sm:p-3 bg-gray-50 rounded text-sm sm:text-base">
                    <span className="font-medium">Natural Rubber Latex</span>
                    <span className="font-mono text-blue-600 text-xs sm:text-sm">14,500 Liters</span>
                </li>
                <li className="flex justify-between items-center p-2 sm:p-3 bg-gray-50 rounded text-sm sm:text-base">
                    <span className="font-medium">Cornstarch Powder</span>
                    <span className="font-mono text-blue-600 text-xs sm:text-sm">850 kg</span>
                </li>
                <li className="flex justify-between items-center p-2 sm:p-3 bg-gray-50 rounded text-sm sm:text-base">
                    <span className="font-medium">Packing Boxes (50s)</span>
                    <span className="font-mono text-blue-600 text-xs sm:text-sm">14,000 Units</span>
                </li>
            </ul>
        </div>
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 sm:p-6 flex flex-col justify-center items-center">
            <Truck className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mb-3 sm:mb-4" />
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">Supplier Delivery Schedule</h3>
            <p className="text-xs sm:text-sm text-gray-500 text-center mt-2">Next shipment of Latex arriving <br /> <span className="font-bold text-gray-900">Tomorrow, 10:00 AM</span></p>
        </div>
    </div>
);

const InventoryView = () => {
    // Mock data for a realistic rack view
    const rackSlots = [
        { id: 'B-01-L2', sku: 'GLV-L-001', name: 'Sterile Gloves (L)', qty: '100%', status: 'Full', type: 'pallet' },
        { id: 'B-02-L2', sku: 'GLV-M-002', name: 'Sterile Gloves (M)', qty: '100%', status: 'Full', type: 'pallet' },
        { id: 'B-03-L2', sku: 'MSK-S-004', name: 'Surgical Masks', qty: '40%', status: 'Low', type: 'box' },
        { id: 'B-04-L2', status: 'Empty' },
        { id: 'B-01-L1', sku: 'RAW-LTX-99', name: 'Rubber Latex (Drum)', qty: '100%', status: 'Full', type: 'drum' },
        { id: 'B-02-L1', sku: 'PCK-BX-50', name: 'Packing Boxes', qty: '100%', status: 'Full', type: 'pallet' },
        { id: 'B-03-L1', sku: 'QCP-HLD-01', name: 'QC Hold Batch', qty: '100%', status: 'Locked', type: 'pallet' },
        { id: 'B-04-L1', status: 'Empty' },
    ];

    const getStatusColor = (status: any) => {
        switch (status) {
            case 'Full': return 'bg-green-100 text-green-700 border-green-200';
            case 'Low': return 'bg-yellow-50 text-yellow-700 border-yellow-200';
            case 'Locked': return 'bg-red-50 text-red-700 border-red-200';
            default: return 'bg-gray-50 text-gray-400 border-gray-200';
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 sm:p-6 animate-fadeIn">
            {/* Header / Stats */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-4 sm:mb-6 gap-3">
                <div>
                    <h2 className="text-base sm:text-lg font-bold text-gray-900 flex items-center">
                        <Package className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-600" />
                        Warehouse Zone B: Aisle 04
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-500">Rack Unit: R-204 • Type: Heavy Duty Pallet</p>
                </div>
                <div className="flex space-x-3 sm:space-x-4 text-sm">
                    <div className="text-center">
                        <span className="block font-bold text-lg sm:text-xl text-gray-900">75%</span>
                        <span className="text-gray-500 text-[10px] sm:text-xs">Utilization</span>
                    </div>
                    <div className="text-center">
                        <span className="block font-bold text-lg sm:text-xl text-blue-600">6/8</span>
                        <span className="text-gray-500 text-[10px] sm:text-xs">Slots Used</span>
                    </div>
                </div>
            </div>

            {/* Rack Visualization */}
            <div className="relative">
                {/* Rack Frame (Top Beam) */}
                <div className="h-4 w-full bg-gray-700 rounded-t-sm mb-1 shadow-sm"></div>

                <div className="grid grid-cols-4 gap-x-2 bg-gray-100 p-2 border-x-4 border-gray-700 relative">
                    {/* Vertical Uprights (Visual only) */}
                    <div className="absolute inset-y-0 left-1/4 w-1 bg-gray-300 z-0"></div>
                    <div className="absolute inset-y-0 left-2/4 w-1 bg-gray-300 z-0"></div>
                    <div className="absolute inset-y-0 left-3/4 w-1 bg-gray-300 z-0"></div>

                    {rackSlots.map((slot, i) => (
                        <div key={i} className="relative z-10 flex flex-col h-32 mb-4 group cursor-pointer">
                            {/* The Slot Container */}
                            <div className={`flex-1 border-b-4 border-orange-600 bg-white/50 relative flex items-end justify-center p-2 transition-all hover:bg-white hover:shadow-lg rounded-t-md`}>

                                {/* Background "Wire Mesh" texture for empty slots */}
                                {slot.status === 'Empty' && (
                                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)', backgroundSize: '10px 10px', backgroundPosition: '0 0, 5px 5px' }}></div>
                                )}

                                {/* Render Inventory Item */}
                                {slot.status !== 'Empty' && (
                                    <div className="relative w-full flex flex-col items-center animate-slide-up">
                                        {/* Box / Pallet Visual */}
                                        <div className={`
                                            w-11/12 h-16 shadow-md rounded-sm border border-black/10 flex items-center justify-center text-xs font-bold text-black/50
                                            ${slot.type === 'drum' ? 'rounded-xl bg-gradient-to-r from-blue-700 via-blue-500 to-blue-800' : 'bg-gradient-to-b from-amber-200 to-amber-400'}
                                            ${slot.status === 'Locked' ? 'opacity-90 ring-2 ring-red-500 ring-offset-1' : ''}
                                        `}>
                                            {/* Tape / Label Detail */}
                                            {slot.type !== 'drum' && (
                                                <div className="absolute top-2 w-full h-4 border-t border-b border-black/5 bg-white/20"></div>
                                            )}
                                            {slot.type === 'drum' && <span className="text-white/80">DRUM</span>}
                                            {slot.type === 'pallet' && <span className="text-amber-900/40">PALLET</span>}
                                        </div>

                                        {/* Wooden Pallet Base */}
                                        <div className="w-full h-3 bg-amber-800 mt-1 flex justify-between px-2 rounded-sm shadow-sm">
                                            <div className="w-2 h-2 bg-black/40 rounded-full"></div>
                                            <div className="w-2 h-2 bg-black/40 rounded-full"></div>
                                        </div>
                                    </div>
                                )}

                                {/* Location Label */}
                                <div className="absolute top-1 left-1 text-[10px] font-mono text-gray-400 bg-white/80 px-1 rounded border border-gray-200">
                                    {slot.id}
                                </div>

                                {/* Status Badge */}
                                <div className={`absolute top-1 right-1 text-[9px] font-bold px-1.5 py-0.5 rounded border ${getStatusColor(slot.status)}`}>
                                    {slot.status === 'Locked' ? <span className="flex items-center gap-1"><AlertTriangle size={8} /> QC</span> : slot.status}
                                </div>
                            </div>

                            {/* Hover Details Popover */}
                            {slot.status !== 'Empty' && (
                                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 translate-y-full w-48 bg-gray-900 text-white text-xs p-2 rounded shadow-xl z-20 hidden group-hover:block pointer-events-none">
                                    <div className="font-bold border-b border-gray-700 pb-1 mb-1">{slot.name}</div>
                                    <div className="flex justify-between text-gray-400"><span>SKU:</span> <span>{slot.sku}</span></div>
                                    <div className="flex justify-between text-gray-400"><span>Qty:</span> <span className="text-white">{slot.qty}</span></div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Floor */}
                <div className="h-2 w-full bg-gray-300 border-t border-gray-400"></div>
            </div>

            {/* Legend */}
            <div className="mt-4 flex gap-4 text-xs text-gray-500 justify-center">
                <div className="flex items-center"><div className="w-3 h-3 bg-gradient-to-b from-amber-200 to-amber-400 border border-amber-500 mr-2 rounded-sm"></div> Pallet Storage</div>
                <div className="flex items-center"><div className="w-3 h-3 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-800 rounded-full mr-2"></div> Liquid/Drum</div>
                <div className="flex items-center"><div className="w-3 h-3 border-2 border-red-500 mr-2 rounded-sm"></div> QC Hold</div>
            </div>
        </div>
    );
};

const JobPlanningView = () => (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 sm:p-6 animate-fadeIn">
        <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Active Job Cards</h2>
        <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full text-xs sm:text-sm text-left min-w-[500px]">
                <thead className="bg-gray-50 text-gray-500">
                    <tr>
                        <th className="p-2 sm:p-3">Job ID</th>
                        <th className="p-2 sm:p-3">Client</th>
                        <th className="p-2 sm:p-3">Line</th>
                        <th className="p-2 sm:p-3">Status</th>
                        <th className="p-2 sm:p-3 text-right">Progress</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    <tr>
                        <td className="p-2 sm:p-3 font-mono">#JOB-2024-88</td>
                        <td className="p-2 sm:p-3">MediCare Inc</td>
                        <td className="p-2 sm:p-3">Line A</td>
                        <td className="p-2 sm:p-3"><span className="px-2 py-1 bg-green-100 text-green-700 rounded text-[10px] sm:text-xs font-bold">RUNNING</span></td>
                        <td className="p-2 sm:p-3 text-right">45%</td>
                    </tr>
                    <tr>
                        <td className="p-2 sm:p-3 font-mono">#JOB-2024-89</td>
                        <td className="p-2 sm:p-3">Global Health</td>
                        <td className="p-2 sm:p-3">Line B</td>
                        <td className="p-2 sm:p-3"><span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-[10px] sm:text-xs font-bold">SETUP</span></td>
                        <td className="p-2 sm:p-3 text-right">5%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
);

// --- NEW VIEWS ADDED BELOW ---

const ProcessLinesView = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 animate-fadeIn">
        {[
            { id: 'Line A', status: 'Operational', color: 'green', oee: '88%', speed: '12,000 u/hr' },
            { id: 'Line B', status: 'Maintenance', color: 'yellow', oee: '0%', speed: '0 u/hr' },
        ].map((line, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 sm:p-6 relative overflow-hidden">
                <div className={`absolute top-0 right-0 p-3 sm:p-4`}>
                    <Activity className={`w-6 h-6 sm:w-8 sm:h-8 text-${line.color}-500 opacity-20`} />
                </div>
                <div className="flex justify-between items-center mb-4 sm:mb-6">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900">{line.id}


                    </h2>
                    <span className={`px-2 sm:px-3 py-1 bg-${line.color}-100 text-${line.color}-700 rounded-full text-[10px] sm:text-xs font-bold uppercase`}>
                        {line.status}
                    </span>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="p-2 sm:p-3 bg-gray-50 rounded-lg">
                        <div className="text-[10px] sm:text-xs text-gray-500 mb-1 flex items-center"><Gauge size={10} className="mr-1 sm:hidden" /><Gauge size={12} className="mr-1 hidden sm:block" /> SPEED</div>
                        <div className="text-base sm:text-lg font-bold">{line.speed}</div>
                    </div>
                    <div className="p-2 sm:p-3 bg-gray-50 rounded-lg">
                        <div className="text-[10px] sm:text-xs text-gray-500 mb-1 flex items-center"><Activity size={10} className="mr-1 sm:hidden" /><Activity size={12} className="mr-1 hidden sm:block" /> OEE</div>
                        <div className="text-base sm:text-lg font-bold">{line.oee}</div>
                    </div>
                </div>
                {/* Live Metrics */}
                <div className="space-y-2 sm:space-y-3">
                    <div className="flex justify-between text-xs sm:text-sm">
                        <span className="text-gray-500 flex items-center"><Thermometer size={12} className="mr-1 sm:mr-2" /><Thermometer size={14} className="mr-2 hidden sm:block" /> Temperature</span>
                        <span className="font-mono font-medium">115°C</span>
                    </div>
                    <div className="flex justify-between text-xs sm:text-sm">
                        <span className="text-gray-500 flex items-center"><Droplet size={12} className="mr-1 sm:mr-2" /><Droplet size={14} className="mr-2 hidden sm:block" /> Humidity</span>
                        <span className="font-mono font-medium">45%</span>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

const QualityControlView = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 animate-fadeIn">
        {/* Key Metrics */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            <div className="bg-white p-3 sm:p-4 rounded-xl shadow border border-gray-200 flex items-center">
                <div className="p-2 sm:p-3 bg-green-100 rounded-full mr-3 sm:mr-4"><CheckCircle className="text-green-600" size={18} /></div>
                <div>
                    <div className="text-xs sm:text-sm text-gray-500">First Pass Yield</div>
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">98.2%</div>
                </div>
            </div>
            <div className="bg-white p-3 sm:p-4 rounded-xl shadow border border-gray-200 flex items-center">
                <div className="p-2 sm:p-3 bg-red-100 rounded-full mr-3 sm:mr-4"><AlertTriangle className="text-red-600" size={18} /></div>
                <div>
                    <div className="text-xs sm:text-sm text-gray-500">Defects Today</div>
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">14</div>
                </div>
            </div>
            <div className="bg-white p-3 sm:p-4 rounded-xl shadow border border-gray-200 flex items-center">
                <div className="p-2 sm:p-3 bg-blue-100 rounded-full mr-3 sm:mr-4"><ClipboardList className="text-blue-600" size={18} /></div>
                <div>
                    <div className="text-xs sm:text-sm text-gray-500">Batches Checked</div>
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">8/12</div>
                </div>
            </div>
        </div>

        {/* Detailed Report */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg border border-gray-200 p-4 sm:p-6">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Recent Inspection Logs
            </h2>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
                <table className="w-full text-xs sm:text-sm text-left min-w-[450px]">
                    <thead className="bg-gray-50 text-gray-500">
                        <tr>
                            <th className="p-2 sm:p-3">Batch ID</th>
                            <th className="p-2 sm:p-3">Time</th>
                            <th className="p-2 sm:p-3">Result</th>
                            <th className="p-2 sm:p-3">Inspector</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        <tr>
                            <td className="p-2 sm:p-3 font-mono">#B-992</td>
                            <td className="p-2 sm:p-3">10:45 AM</td>
                            <td className="p-2 sm:p-3 text-green-600 font-bold">PASS</td>
                            <td className="p-2 sm:p-3">A. Singh</td>
                        </tr>
                        <tr>
                            <td className="p-2 sm:p-3 font-mono">#B-993</td>
                            <td className="p-2 sm:p-3">11:15 AM</td>
                            <td className="p-2 sm:p-3 text-green-600 font-bold">PASS</td>
                            <td className="p-2 sm:p-3">M. Lee</td>
                        </tr>
                        <tr>
                            <td className="p-2 sm:p-3 font-mono">#B-994</td>
                            <td className="p-2 sm:p-3">11:45 AM</td>
                            <td className="p-2 sm:p-3 text-red-500 font-bold text-[10px] sm:text-sm">FAIL (Thickness)</td>
                            <td className="p-2 sm:p-3">A. Singh</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        {/* Alert Box */}
        <div className="bg-yellow-50 rounded-xl border border-yellow-200 p-4 sm:p-6">
            <div className="flex items-center mb-2 text-yellow-800 font-bold text-sm sm:text-base">
                <AlertTriangle size={18} className="mr-2" /> QC Alert
            </div>
            <p className="text-xs sm:text-sm text-yellow-700 mb-3 sm:mb-4">
                Batch #B-994 flagged for thickness variation (+0.05mm). Line A calibration recommended.
            </p>
            <button className="w-full py-2 bg-white border border-yellow-300 text-yellow-700 font-medium rounded shadow-sm hover:bg-yellow-100 text-xs sm:text-sm">
                View Defect Report
            </button>
        </div>
    </div>
);

const MaintenanceView = () => (
    <div className="grid grid-cols-1 gap-4 sm:gap-6 animate-fadeIn">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Machine Health Status */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 sm:p-6">
                <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Machine Health Status</h2>
                <div className="space-y-3 sm:space-y-4">
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-xs sm:text-sm font-medium">Dipping Machine A1</span>
                            <span className="text-[10px] sm:text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded">GOOD (92%)</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-xs sm:text-sm font-medium">Curing Oven B</span>
                            <span className="text-[10px] sm:text-xs font-bold text-yellow-600 bg-yellow-100 px-2 py-0.5 rounded">FAIR (74%)</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '74%' }}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-xs sm:text-sm font-medium">Hydraulic Press 4</span>
                            <span className="text-[10px] sm:text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded">GOOD (98%)</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '98%' }}></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Upcoming Schedule */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 sm:p-6">
                <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Scheduled Maintenance
                </h2>
                <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 bg-blue-50 rounded-lg">
                        <Calendar className="text-blue-500 flex-shrink-0 mt-1" size={16} />
                        <div>
                            <div className="text-xs sm:text-sm font-bold text-gray-900">Line B: Full Service</div>
                            <div className="text-[10px] sm:text-xs text-gray-500">Scheduled: Nov 28, 2025 • 08:00 AM</div>
                            <div className="text-[10px] sm:text-xs text-blue-600 mt-1 font-medium">Tech: R. Sharma</div>
                        </div>
                    </div>
                    <div className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gray-50 rounded-lg border border-gray-100">
                        <Wrench className="text-gray-400 flex-shrink-0 mt-1" size={16} />
                        <div>
                            <div className="text-xs sm:text-sm font-bold text-gray-900">Filter Replacement (All Lines)</div>
                            <div className="text-[10px] sm:text-xs text-gray-500">Scheduled: Dec 05, 2025</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

// --- Main Dashboard Component ---

const ProductionDashboard = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const navRef = useRef<HTMLElement>(null);

    const tabs = [
        { label: 'Production Planning', component: <ProductionView /> },
        { label: 'Stock Products', component: <StockProductsView /> },
        { label: 'RM Planning', component: <RMPlanningView /> },
        { label: 'Inventory', component: <InventoryView /> },
        { label: 'Job Planning', component: <JobPlanningView /> },
        { label: 'Process Lines', component: <ProcessLinesView /> },
        { label: 'Quality Control', component: <QualityControlView /> },
        { label: 'Maintenance', component: <MaintenanceView /> },
    ];

    // Auto-cycle animation
    useEffect(() => {
        //@ts-expect-error no error
        let interval;
        if (!isPaused) {
            interval = setInterval(() => {
                setActiveTab((prev) => (prev + 1) % tabs.length);
            }, 5000); // 5 seconds per tab
        }
        //@ts-expect-error no error
        return () => clearInterval(interval);
    }, [isPaused, tabs.length]);

    // Scroll active tab to center in mobile view
    useEffect(() => {
        const activeTabElement = tabRefs.current[activeTab];
        const navElement = navRef.current;

        if (activeTabElement && navElement) {
            // Calculate center position
            const scrollLeft = activeTabElement.offsetLeft - (navElement.clientWidth / 2) + (activeTabElement.clientWidth / 2);

            navElement.scrollTo({
                left: scrollLeft,
                behavior: 'smooth'
            });
        }
    }, [activeTab]);

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-900">

            {/* Header */}
            <header className="bg-white shadow-sm h-14 sm:h-16 sticky top-0 z-30">
                <div className="max-w-7xl mx-auto px-3 sm:px-6 h-full flex items-center justify-between">
                    <a href="#" className="flex items-center space-x-1 sm:space-x-2 text-blue-500 hover:text-blue-700 transition-colors">
                        <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-xs sm:text-sm font-medium hidden sm:inline">Back to Dashboard</span>
                        <span className="text-xs font-medium sm:hidden">Back</span>
                    </a>
                    <h1 className="text-sm sm:text-lg font-semibold truncate mx-2">Production Planning</h1>
                    <div className="flex items-center space-x-2 sm:space-x-6">
                        <div className="relative">
                            <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
                            <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-red-500 text-[10px] sm:text-xs font-bold text-white">1</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <img className="h-8 w-8 sm:h-9 sm:w-9 rounded-full object-cover" src="https://placehold.co/40x40/E0E7FF/1E40AF?text=RK" alt="Avatar" />
                            <div className="hidden lg:block">
                                <div className="font-medium text-sm">Rajesh Kumar</div>
                                <div className="text-xs text-gray-500">Plant Head</div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Navigation Tabs */}
            <nav ref={navRef} className="bg-white h-12 sm:h-14 border-b border-gray-200 shadow-sm sticky top-0 z-20 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300">
                <div className="max-w-7xl mx-auto px-3 sm:px-6 h-full flex items-center space-x-4 sm:space-x-8">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            ref={(el) => { tabRefs.current[index] = el; }}
                            onClick={() => {
                                setActiveTab(index);
                                // Optional: Reset timer functionality is handled by state change, 
                                // but usually user interaction implies we might want to pause briefly.
                                // For now, it just jumps to the tab and the timer continues.
                            }}
                            className={`text-xs sm:text-sm font-medium h-full flex items-center border-b-2 transition-colors whitespace-nowrap px-1 flex-shrink-0 ${activeTab === index
                                ? 'text-blue-600 border-blue-600'
                                : 'text-gray-400 border-transparent hover:text-gray-600'
                                }`}
                        >
                            {tab.label}
                            {activeTab === index && !isPaused && (
                                <span className="ml-1 sm:ml-2 w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></span>
                            )}
                        </button>
                    ))}
                </div>
            </nav>

            {/* Main Content Area */}
            {/* We add pause-on-hover here so users can read the content without it switching */}
            <main
                className="p-3 sm:p-6 lg:p-8 max-w-7xl mx-auto min-h-[400px] sm:min-h-[600px]"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {tabs[activeTab].component}

                {/* Play/Pause Indicator Hint */}
                <div className="hidden sm:block fixed bottom-4 right-4 text-xs text-gray-400 bg-white/80 p-2 rounded shadow backdrop-blur-sm pointer-events-none">
                    {isPaused ? '⏸ Animation Paused (Hovering)' : '▶ Auto-Cycling Views'}
                </div>
            </main>

        </div>
    );
};

export default ProductionDashboard;