function HighRiskMachines({ machines }) {
    return (
        <section className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">
                High Risk Machines
            </h2>
            <div className="overflow-x-auto">   {/* If any content overflow it adds auto scrolling without breaking the layout */}
                <table className="w-full">   {/* the container table takes full space inside the div*/}
                    <thead>
                        <tr className="border-b border-slate-700">
                            <th className= "text-left text-sm font-medium text-gray-300 px-4 py-2">
                                Machine ID
                            </th>

                            <th className= "text-left text-sm font-medium text-gray-300 px-4 py-2">
                                Risk Score
                            </th>

                            <th className= "text-left text-sm font-medium text-gray-300 px-4 py-2">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {machines.map((machine) => (
                        <tr
                            key={machine.id}
                            className="border-b border-slate-700 hover:bg-slate-700/30 transition-colors">
                            <td className="px-4 py-3 text-white">
                                {machine.id}
                            </td>

                            <td className="px-4 py-3 text-white">
                                {machine.risk}%
                            </td>

                            <td className="px-4 py-3">
                                <span className={`px-2 py-1 text-sm font-medium rounded ${
                                    machine.status === "Critical"
                                    ? "bg-red-500/10 text-red-400"
                                    : machine.status === "High Risk"
                                    ? "bg-orange-500/10 text-orange-400"
                                    : "bg-yellow-500/10 text-yellow-400"
                                }`}>
                                    {machine.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
export default HighRiskMachines;