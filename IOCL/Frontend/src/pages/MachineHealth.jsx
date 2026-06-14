import MachineInventoryTable from "../components/machine-health/MachineInventoryTable";
import { useState } from "react";

function MachineHealth() {
    const [searchQuery, setSearchQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
    const [ typeFilter, setTypeFilter] = useState("All");

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-white mb-6">
                Machine Health
            </h1>

            <section className= "flex items-center mb-6 gap-3 mb-6">
                <input 
                    className="bg-slate-800 border border-slate-700 text-white rounded-lg px-4 py-2 mb-4"
                    type="text"
                    placeholder="Search Machine IDs:"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <select className="bg-slate-800 border border-slate-700 text-white rounded-lg px-3 py-2 ml-3"
                        value = {statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                    >   
                        <option>All</option>
                        <option>Healthy</option>
                        <option>Warning</option>
                        <option>Critical</option>
                    </select>

                    <select 
                        className="bg-slate-800 border border-slate-700 text-white rounded-lg px-3 py-2 ml-3"
                        value={typeFilter}
                        onChange={(e) => setTypeFilter(e.target.value)}
                    >
                        <option>All</option>
                        <option>L</option>
                        <option>M</option>
                        <option>H</option>
                    </select>
            </section>

            <MachineInventoryTable 
                searchQuery={searchQuery} 
                statusFilter={statusFilter}
                typeFilter={typeFilter}
                />
        </div>
    );
}
export default MachineHealth;