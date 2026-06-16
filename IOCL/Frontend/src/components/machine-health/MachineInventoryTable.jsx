import { useState, useEffect} from "react";
import axios from "axios";

function MachineInventoryTable({ searchQuery, statusFilter, typeFilter }) {

    const [machines, setMachines] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const fetchMachines = async () => {
        try {
            const response = await axios.get(
                "http://127.0.0.1:8000/machines"
            );

            console.log(response.data);

            setMachines(response.data);
        } catch (error) {
            console.error("Error fetching machines:", error);
        } finally {
            setLoading(false);
        }
    };

    fetchMachines();
}, []);

    // Filter machines based on the search query
    const filteredMachines = machines.filter((machine) => {
        const matchesSearch = !searchQuery || machine.id
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

    // Filter machines based on the status filter
    const matchesStatus = 
        statusFilter === "All" ||
        machine.status === statusFilter;

    const matchesType = 
        typeFilter === "All" ||
        machine.type === typeFilter;

    // Apply both filters   

        return matchesSearch && matchesStatus && matchesType;
});

    return (
        
        <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">
                Machine Inventory
            </h2>

            <div className="overflow-x-auto">
                <table className="w-full mx-auto">
                    <thead>
                        <tr className="border-b border-slate-700">
                            <th className="text-center text-sm font-medium text-gray-300 px-4 py-2">
                                Machine ID
                            </th>

                            <th className="text-center text-sm font-medium text-gray-300 px-4 py-2">
                                Type
                            </th>

                            <th className="text-center text-sm font-medium text-gray-300 px-4 py-2">
                                RPM
                            </th>

                            <th className="text-center text-sm font-medium text-gray-300 px-4 py-2">
                                Torque
                            </th>

                            <th className="text-center text-sm font-medium text-gray-300 px-4 py-2">
                                Tool Wear
                            </th>

                            <th className="text-center text-sm font-medium text-gray-300 px-4 py-2">
                                Faliure Proablity
                            </th>

                            <th className="text-center text-sm font-medium text-gray-300 px-4 py-2">
                                Health Score
                            </th>

                            <th className="text-center text-sm font-medium text-gray-300 px-4 py-2">
                                Status
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredMachines.length === 0 ? (
                            <tr>
                                <td 
                                    colSpan="8"
                                    className="text-center text-gray-400 py-6"
                                >
                                    No matches found.
                                </td>
                            </tr>
                        ) : (

                        filteredMachines.map((machine) => (
                            <tr
                                key={machine.id}
                                className="border-b border-slate-700 hover:bg-slate-700/30 transition-colors"
                            >
                                <td className="px-4 py-3 text-white text-center">
                                    {machine.id}
                                </td>

                                <td className="px-4 py-3 text-white text-center">
                                    {machine.type}
                                </td>

                                <td className="px-4 py-3 text-white text-center">
                                    {machine.rpm}
                                </td>

                                <td className="px-4 py-3 text-white text-center">
                                    {machine.torque}
                                </td>

                                <td className="px-4 py-3 text-white text-center">
                                    {machine.toolWear}
                                </td>

                                <td className="px-4 py-3 text-white text-center">
                                    {machine.failureProbability}%
                                </td>

                                <td className="px-4 py-3 text-white text-center">
                                    <span className= {`font-semibold ${
                                        machine.healthScore >=80
                                        ? "text-green-400"
                                        : machine.healthScore >=50
                                        ? "text-orange-400"
                                        : "text-red-400"
                                    }`}>
                                    {machine.healthScore}
                                    </span>
                                </td>

                                <td className="px-4 py-3 text-white text-center">
                                    <span className={`px-2 py-1 text-sm font-medium rounded ${
                                        machine.status === "Critical"
                                        ? "bg-red-500/10 text-red-400"
                                        : machine.status === "Warning"
                                        ? "bg-orange-500/10 text-orange-400"
                                        : "bg-green-500/10 text-green-400"
                                    }`} >
                                        {machine.status}
                                    </span>
                                </td>
                            </tr>
                        )))}
                    </tbody>
                </table>
            </div>
        </section>

    );
}

export default MachineInventoryTable;